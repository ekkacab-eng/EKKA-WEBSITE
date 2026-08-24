import LegalDoc, { Section, Fill } from './LegalDoc'

/**
 * BEFORE LAUNCH: a working draft, not cleared legal copy. Fill every <Fill>
 * placeholder and have counsel review it. These terms cover *this website*
 * only — the app will need its own rider and driver terms, which are a
 * materially different document.
 */

const UPDATED = '23 August 2026'

export default function Terms() {
  return (
    <LegalDoc
      title="Terms &amp; conditions"
      updated={UPDATED}
      lede="These terms cover your use of this website. Ekka has not launched, so
        nothing here is a contract to carry you anywhere — the ride service will
        have its own terms when it opens."
    >
      <Section title="Agreeing to these terms">
        <p>
          By using this site or joining the waitlist you accept these terms. If
          you do not accept them, please do not use the site. We may update them
          at any time; the date above shows when they last changed, and using
          the site after a change means you accept the new version.
        </p>
      </Section>

      <Section title="What this site is">
        <p>
          A pre-launch page for Ekka, operated by{' '}
          <Fill>REGISTERED LEGAL ENTITY NAME</Fill> (&ldquo;Ekka&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). It
          exists to describe what we intend to build and to let you register
          interest. <strong>No ride-hailing service is currently operating</strong>,
          and nothing on this site is an offer to provide transport.
        </p>
      </Section>

      <Section title="The waitlist">
        <p>Joining the waitlist is free and creates no obligation on either side.</p>
        <ul>
          <li>
            It does not reserve you a ride, an account, a price, or a place in
            any queue.
          </li>
          <li>
            It does not guarantee that we will launch, that we will launch in
            Hyderabad, or that we will launch by any particular date.
          </li>
          <li>
            We may contact you about the launch, and you may ask us to stop at
            any time. How we handle your details is set out in our{' '}
            <a href="/privacy.html">privacy policy</a>.
          </li>
          <li>
            We may decline or remove any signup — for example, obviously fake
            entries or automated submissions.
          </li>
        </ul>
      </Section>

      <Section title="Who may use it">
        <p>
          You must be 18 or older and able to enter a contract under Indian law.
          Give us a contact detail that is genuinely yours; do not sign someone
          else up.
        </p>
      </Section>

      <Section title="How you may not use it">
        <p>Please do not:</p>
        <ul>
          <li>
            Submit automated, bulk, or deliberately false entries, or scrape the
            site.
          </li>
          <li>
            Attempt to breach, overload, or probe the site or the systems behind
            it.
          </li>
          <li>
            Copy the site&rsquo;s design, text, or code, or present Ekka&rsquo;s branding as
            your own.
          </li>
          <li>Use the site for anything unlawful.</li>
        </ul>
      </Section>

      <Section title="Our intellectual property">
        <p>
          The Ekka name, the wheel-and-E mark, the wordmark, and the text,
          design, and code of this site belong to us. You may link to the site.
          You may not reuse the branding or the content without written
          permission.
        </p>
      </Section>

      <Section title="The site is provided as it is">
        <p>
          We work to keep the site accurate and available, but we do not promise
          it will be uninterrupted or error-free, and we may change or withdraw
          it at any time. Everything described here is an intention, not a
          commitment — see the <a href="/disclaimer.html">disclaimer</a> for what
          that means in practice.
        </p>
      </Section>

      <Section title="Our liability">
        <p>
          To the extent Indian law allows, we are not liable for indirect or
          consequential loss arising from your use of this site, or from any
          decision you make in reliance on it — including loss of profit,
          business, or opportunity. Nothing here limits liability that cannot
          lawfully be limited, such as liability for fraud or for death or
          personal injury caused by negligence.
        </p>
      </Section>

      <Section title="Links to other sites">
        <p>
          Where we link elsewhere, we do not control and are not responsible for
          that content or those services.
        </p>
      </Section>

      <Section title="Governing law">
        <p>
          These terms are governed by the laws of India. The courts at{' '}
          <Fill>JURISDICTION CITY</Fill> have exclusive jurisdiction over any
          dispute arising from them.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about these terms:{' '}
          <a href="mailto:legal@ekkaride.com">legal@ekkaride.com</a>. Anything
          else: <a href="mailto:hello@ekkaride.com">hello@ekkaride.com</a>.
        </p>
      </Section>
    </LegalDoc>
  )
}
