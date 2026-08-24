import { motion, useReducedMotion } from 'framer-motion'

/**
 * EkkaWheel — the Ekka brand mark.
 *
 * A pale mint disc carrying three deep-green rounded bars. The short middle bar
 * against two long ones reads as an E; the disc reads as a wheel.
 *
 * Geometry is traced from the master logo artwork and should not be nudged —
 * scale it with `size` instead. The two colours are deliberately fixed brand
 * values rather than theme tokens, so the mark renders identically on a light
 * or a dark page, exactly as it does in the asset files.
 *
 * Reusable on purpose: hero animation, footer wordmark, favicon, and whatever
 * comes next. Static by default; pass `roll` for the entrance.
 *
 * @param {number}  size      Rendered width/height in px.
 * @param {string}  disc      Circle fill.
 * @param {string}  bars      Bar fill.
 * @param {boolean} roll      Play the roll-in animation on mount.
 * @param {number}  distance  How far (px) it rolls in from the left.
 * @param {number}  delay     Seconds to wait before rolling.
 * @param {string}  label     Accessible name; pass null for decorative use.
 */
export default function EkkaWheel({
  size = 120,
  disc = 'var(--logo-disc)',
  bars = 'var(--logo-ink)',
  roll = false,
  distance = 340,
  delay = 0.15,
  label = 'Ekka',
  className = '',
  ...rest
}) {
  const reduceMotion = useReducedMotion()
  const shouldRoll = roll && !reduceMotion

  // Rotate by the amount a real wheel of this radius would turn while covering
  // `distance`, rounded to whole turns — so it rolls like a wheel *and* always
  // settles with the bars flat, resolving into an E.
  const radius = size / 2
  const turns = Math.max(1, Math.round(distance / (2 * Math.PI * radius)))
  const startRotate = -turns * 360

  // Travel and rotation share `times` and `ease` so the wheel rolls rather than
  // slides. The trailing pair is a small rock backwards as it settles.
  const rollAnimation = {
    initial: { x: -distance, rotate: startRotate, opacity: 0 },
    animate: { x: [-distance, 0, 0, 0], rotate: [startRotate, 0, -7, 0], opacity: 1 },
    transition: {
      x: { duration: 1.8, delay, times: TIMES, ease: EASE },
      rotate: { duration: 1.8, delay, times: TIMES, ease: EASE },
      opacity: { duration: 0.35, delay },
    },
  }

  return (
    <motion.svg
      className={`ekka-wheel ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role={label ? 'img' : 'presentation'}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      {...(shouldRoll ? rollAnimation : {})}
      {...rest}
    >
      <circle cx="50" cy="50" r="50" fill={disc} />
      {/* Two long arms and a short one: the E. Bars sit centred on the disc. */}
      <g fill={bars}>
        <rect x="24" y="25.5" width="52" height="12" rx="6" />
        <rect x="24" y="44" width="34" height="12" rx="6" />
        <rect x="24" y="62.5" width="52" height="12" rx="6" />
      </g>
    </motion.svg>
  )
}

const TIMES = [0, 0.74, 0.88, 1]
const EASE = [
  [0.16, 1, 0.3, 1], // the roll: fast off the mark, long glide into place
  [0.4, 0, 0.6, 1],
  [0.4, 0, 0.6, 1],
]
