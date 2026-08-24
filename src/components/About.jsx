import { motion } from 'framer-motion'

const POINTS = [
  {
    title: 'Surge, capped.',
    body: 'Prices move with demand, but never past a ceiling you can see up front. No 3x fares because it rained.',
  },
  {
    title: 'Drivers keep more.',
    body: 'A lower, flat commission means the person driving you actually earns from the trip. Fair rides need fair pay.',
  },
  {
    title: 'The fare is the fare.',
    body: 'What you are quoted is what you pay. No mystery adjustments, no fees that appear at the end of the ride.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about__inner"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.p className="about__eyebrow" variants={item}>
          What is Ekka?
        </motion.p>

        <motion.h2 className="about__lede" variants={item}>
          Ride-hailing that doesn't quietly work against you — or the person
          driving.
        </motion.h2>

        <ul className="about__points">
          {POINTS.map((point) => (
            <motion.li className="about__point" key={point.title} variants={item}>
              <h3 className="about__point-title">{point.title}</h3>
              <p className="about__point-body">{point.body}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
