import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const WAITLIST_ENDPOINT = 'https://api.ekkaride.com/waitlist'

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

    const payload = { contact: result.contact, type: result.type, source: 'teaser-hero' }

    try {
      const response = await fetch(WAITLIST_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error(`Waitlist responded ${response.status}`)
    } catch (err) {
      // No backend yet — the endpoint is a placeholder. Until it is live we log
      // the signup and still confirm to the visitor.
      // TODO: remove this fallback and surface a real error once the API ships.
      console.warn('[ekka] waitlist POST failed, logging locally instead:', err)
      console.log('[ekka] waitlist signup:', payload)
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
