import SiteHeader from './SiteHeader'
import Footer from './Footer'

/**
 * Shared shell for the legal pages — privacy, terms, disclaimer. They are all
 * the same object: masthead, titled document, footer.
 */
export default function LegalDoc({ title, updated, lede, children }) {
  return (
    <div className="page" id="top">
      <SiteHeader bordered />

      <main className="doc">
        <h1 className="doc__title">{title}</h1>
        <p className="doc__meta">Last updated {updated}</p>
        <p className="doc__lede">{lede}</p>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export function Section({ title, children }) {
  return (
    <section className="doc__section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

/**
 * An unfilled draft placeholder. Renders as a loud bracketed chip so it cannot
 * reach production unnoticed — grep the legal pages for "Fill" to find them.
 */
export function Fill({ children }) {
  return <mark className="fill">[{children}]</mark>
}
