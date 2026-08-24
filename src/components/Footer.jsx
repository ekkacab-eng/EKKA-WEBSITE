import EkkaWordmark from './EkkaWordmark'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a className="footer__wordmark" href="/" aria-label="Ekka, home">
          <EkkaWordmark size={22} />
        </a>

        <nav className="footer__links">
          <a href="/privacy.html">Privacy policy</a>
          <a href="/terms.html">Terms &amp; conditions</a>
          <a href="/disclaimer.html">Disclaimer</a>
          <a href="mailto:hello@ekkaride.com">hello@ekkaride.com</a>
        </nav>
      </div>
    </footer>
  )
}
