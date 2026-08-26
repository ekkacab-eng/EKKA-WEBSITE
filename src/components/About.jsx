import { motion } from 'framer-motion'

// These four claims are load-bearing: the disclaimer's "What we say about the
// service" section describes them as intentions rather than guarantees. Change
// anything here and change that section to match.
const POINTS = [
  {
    title: 'The best fare we can offer.',
    body: 'Not the highest one you would put up with. The same trip costs the same whoever is asking — no personalised pricing, no quiet mark-up because of your phone, your route history, or how urgently you seem to need a ride.',
  },
  {
    title: 'Surge, with a ceiling.',
    body: 'Demand moves prices everywhere, and it will here too. The difference is that ours stop at a cap you can see before you book — so a busy evening or a sudden downpour never multiplies your fare several times over.',
  },
  {
    title: 'A low subscription, not a big cut.',
    body: 'Drivers pay a small subscription to be on Ekka and a low commission per trip, instead of surrendering a large slice of every fare. More of what you pay reaches the person actually driving you, without your fare having to climb to fund it.',
  },
  {
    title: 'The fare is the fare.',
    body: 'What you are quoted is what you pay. No additions at drop-off, no fees that only surface on the receipt, no charges you have to argue your way out of afterwards.',
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
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p className="about__eyebrow" variants={item}>
          What is Ekka?
        </motion.p>

        <motion.h2 className="about__lede" variants={item}>
          A fair fare — for you, and for the person driving.
        </motion.h2>

        <motion.p className="about__intro" variants={item}>
          Ekka is a ride-hailing service built around one idea: the price you
          are shown should be the best price we can give you, and it should
          still be worth the driver&rsquo;s while. Those two things are usually
          treated as a trade-off. We think most of the gap between them is
          taken in the middle.
        </motion.p>

        <ul className="about__points">
          {POINTS.map((point) => (
            <motion.li className="about__point" key={point.title} variants={item}>
              <h3 className="about__point-title">{point.title}</h3>
              <p className="about__point-body">{point.body}</p>
            </motion.li>
          ))}
        </ul>

        <motion.p className="about__outro" variants={item}>
          We have not launched yet, so these are the terms we are building
          towards rather than a service you can book today. Exact caps,
          subscription rates, and commissions will be published in full before
          the first ride &mdash; not buried in a receipt afterwards.
        </motion.p>
      </motion.div>
    </section>
  )
}
