import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Supabase REST, called directly with fetch — no client library, so the
// bundle stays as small as it was. The anon key is public by design; what
// protects the data is the Row Level Security policy in
// supabase/waitlist.sql, which grants INSERT and nothing else.
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
// Indian mobile numbers: 10 digits starting 6-9, with an optional +91 / 91 / 0.
const PHONE = /^(?:\+?91|0)?([6-9]\d{9})$/

function classify(raw) {
  const value = raw.trim()
  if (!value) return { ok: false, error: 'Enter your email or phone number.' }
  if (value.includes('@')) {
    return EMAIL.test(value)
      ? { ok: true, type: 'email', contact: value.toLowerCase() }
      : { ok: false, error: "That email doesn't look right." }
  }
  const digits = value.replace(/[\s\-()]/g, '')
  const match = digits.match(PHONE)
  return match
    ? { ok: true, type: 'phone', contact: `+91${match[1]}` }
    : { ok: false, error: 'Enter a valid 10-digit mobile number or an email.' }
}

export default function WaitlistForm() {
  const [value, setValue] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | done
  const [error, setError] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault()
    if (status === 'sending') return

    const result = classify(value)
    if (!result.ok) {
      setError(result.error)
      return
    }

    setError(null)
    setStatus('sending')

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      // Misconfigured deploy. Never pretend the signup was stored.
      console.error('[ekka] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are not set')
      setStatus('idle')
      setError('Signups are temporarily unavailable. Please try again later.')
      return
    }

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          contact: result.contact,
          contact_type: result.type,
          source: 'teaser-hero',
        }),
      })

      // 409 is the unique index rejecting a repeat signup. They are already on
      // the list, which is exactly what they wanted — treat it as success.
      if (!response.ok && response.status !== 409) {
        throw new Error(`Waitlist responded ${response.status}`)
      }
    } catch (err) {
      // The row was not stored, so do not tell anyone they are on the list.
      console.error('[ekka] waitlist signup failed:', err)
      setStatus('idle')
      setError('Something went wrong saving that. Please try again.')
      return
    }

    setStatus('done')
  }

  return (
    <div className="waitlist">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'done' ? (
          <motion.p
            key="done"
            className="waitlist__done"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span aria-hidden="true">✓</span> You're on the list. We'll be in touch
            before we launch.
          </motion.p>
        ) : (
          <motion.form
            key="form"
            className="waitlist__form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <label className="visually-hidden" htmlFor="waitlist-contact">
              Email address or phone number
            </label>
            <input
              id="waitlist-contact"
              className="waitlist__input"
              type="text"
              inputMode="email"
              autoComplete="email"
              placeholder="Email or phone number"
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
                if (error) setError(null)
              }}
              aria-invalid={error ? 'true' : undefined}
              aria-describedby={error ? 'waitlist-error' : undefined}
            />
            <motion.button
              className="waitlist__button"
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              {status === 'sending' ? 'Just a sec…' : 'Get early access'}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {error && (
          <motion.p
            id="waitlist-error"
            className="waitlist__error"
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
