import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import EkkaWheel from './EkkaWheel'
import WaitlistForm from './WaitlistForm'

// Copy enters after the wheel has finished rolling, so the eye follows the mark
// first and the words land on it.
const COPY_DELAY = 1.5

const rise = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: COPY_DELAY + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  const reduceMotion = useReducedMotion()

  // Start the wheel beyond the left edge of the viewport at whatever width we
  // mounted at, so it genuinely rolls *in* rather than popping into frame.
  // Read once, on mount: changing it later would restart the animation.
  const [rollDistance] = useState(() =>
    typeof window === 'undefined'
      ? 420
      : Math.min(900, Math.max(360, window.innerWidth * 0.6))
  )

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__stage">
          <EkkaWheel size={132} roll distance={rollDistance} className="hero__mark" />

          <motion.div
            className="hero__road"
            initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <motion.h1
          className="hero__tagline"
          variants={rise}
          custom={0}
          initial="hidden"
          animate="visible"
        >
          Pay less. <span className="hero__tagline-break">Ride fair.</span>
        </motion.h1>

        <motion.p
          className="hero__launch"
          variants={rise}
          custom={1}
          initial="hidden"
          animate="visible"
        >
          Launching soon in <span className="hero__launch-city">Hyderabad</span>
        </motion.p>

        <motion.div variants={rise} custom={2} initial="hidden" animate="visible">
          <WaitlistForm />
        </motion.div>
      </div>
    </section>
  )
}
