import LegalDoc, { Section, Detail } from './LegalDoc'
import { LEGAL } from '../legal-details'

/**
 * BEFORE LAUNCH: a working draft, not cleared legal copy. Fill every blank in
 * src/legal-details.js and have counsel review it.
 *
 * This page exists because the home page makes forward-looking product claims
 * — capped surge, a driver-friendly commission, no hidden fees. Those are
 * intentions for an unlaunched service. If the home page copy changes, the
 * "What we say about the service" section below has to change with it.
 */

const UPDATED = '26 August 2026'

export default function Disclaimer() {
  return (
    <LegalDoc
      title="Disclaimer"
      updated={UPDATED}
      lede="Ekka has not launched. Everything this site says about how the service
        will work describes what we intend to build, not a service you can use
        today or a promise about what the finished product will be."
    >
      <Section title="No service is operating yet">
        <p>
          This is a pre-launch page. There is no Ekka app, no rides, and no
          driver network in operation. Nothing here is an offer to provide
          transport services, and no booking can be made through this site.
        </p>
      </Section>

      <Section title="What we say about the service">
        <p>
          The home page says we intend to offer the best fare we can, to cap
          surge pricing at a visible ceiling, to charge drivers a low
          subscription and a low per-trip commission, and to add nothing to a
          fare after it is quoted. Those are our design goals for the product.
          They are{' '}
          <strong>forward-looking statements, not guarantees</strong>. No
          specific figure is set: surge ceilings, subscription rates,
          commission percentages, and fare structures are all still being
          worked out, and the final terms at launch may differ from what is
          described there.
        </p>
        <p>
          In particular, &ldquo;the best fare we can offer&rdquo; describes how we intend
          to price our own service. It is not a comparison against any other
          operator, and it is not a promise that an Ekka ride will be cheaper
          than any given alternative on any given day.
        </p>
      </Section>

      <Section title="Launch timing and location">
        <p>
          We intend to launch in Hyderabad first. We cannot promise a date, and
          we cannot promise the launch will happen at all. Plans may change,
          slip, or be abandoned for commercial, operational, or regulatory
          reasons.
        </p>
      </Section>

      <Section title="Regulatory approvals">
        <p>
          Operating a ride-hailing service in India requires licences and
          approvals, including aggregator licensing under the applicable Motor
          Vehicles aggregator rules. Ekka&rsquo;s launch is subject to obtaining and
          maintaining these. Currently{' '}
          <Detail value={LEGAL.regulatoryStatus} label="REGULATORY / LICENSING STATUS" />.
        </p>
      </Section>

      <Section title="Accuracy of this site">
        <p>
          We try to keep the information here accurate and current, but we
          provide it as it is, without warranty of any kind. We may change any
          of it without notice, and we are not obliged to update statements that
          later become inaccurate.
        </p>
      </Section>

      <Section title="Not advice, and not an investment offer">
        <p>
          Nothing on this site is legal, financial, or professional advice.
          Nothing on it is an offer or invitation to invest in Ekka or to buy
          any security.
        </p>
      </Section>

      <Section title="Relying on this site">
        <p>
          Please do not make decisions in reliance on anything here — for
          example, giving up other transport arrangements, or making business
          plans around Ekka&rsquo;s launch. To the extent Indian law allows, we accept
          no liability for loss arising from such reliance. Our full liability
          position is in the{' '}
          <a href="/terms.html">terms &amp; conditions</a>.
        </p>
      </Section>

      <Section title="External links">
        <p>
          We are not responsible for the content, accuracy, or practices of any
          third-party site we link to.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about anything on this page:{' '}
          <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a>.
        </p>
      </Section>
    </LegalDoc>
  )
}
