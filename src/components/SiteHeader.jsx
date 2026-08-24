import { motion, useReducedMotion } from 'framer-motion'

/**
 * The company name, set large and widely tracked at the top of every page.
 * Text only, deliberately: the animated mark owns the hero directly below, and
 * a second wheel up here would just compete with it.
 */
export default function SiteHeader({ bordered = false }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.header
      className={`site-header ${bordered ? 'site-header--bordered' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <a className="site-header__name" href="/" aria-label="Ekka, home">
        EKKA
      </a>
    </motion.header>
  )
}
