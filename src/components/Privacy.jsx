import LegalDoc, { Section, Fill } from './LegalDoc'

/**
 * BEFORE LAUNCH: a working draft, not cleared legal copy. Fill every <Fill>
 * placeholder and have counsel review the document against the DPDP Act 2023.
 * Revisit it the moment the app starts collecting ride data, location, or
 * payment details, none of which this covers.
 */

const UPDATED = '23 August 2026'

export default function Privacy() {
  return (
    <LegalDoc
      title="Privacy policy"
      updated={UPDATED}
      lede="Ekka has not launched yet. Right now this site does one thing: it takes
        an email address or phone number so we can tell you when we go live in
        Hyderabad. This policy explains what happens to it."
    >
      <Section title="Who we are">
        <p>
          This site is operated by <Fill>REGISTERED LEGAL ENTITY NAME</Fill>,
          registered at <Fill>REGISTERED OFFICE ADDRESS</Fill>, India (&ldquo;Ekka&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;). We are the Data Fiduciary for the personal data
          described here under India&rsquo;s Digital Personal Data Protection Act,
          2023.
        </p>
      </Section>

      <Section title="What we collect">
        <p>
          Only what you type into the waitlist form: <strong>either</strong> an
          email address <strong>or</strong> a mobile number. Nothing else is
          required, and there is no account to create.
        </p>
        <p>
          We do not run analytics, advertising trackers, or session recording on
          this site, and we set no cookies of our own. Our hosting provider keeps
          standard server logs, which include IP addresses, for security and
          reliability. This page also loads fonts from Google Fonts, which means
          Google receives your IP address when the page loads; that is governed
          by Google&rsquo;s own privacy policy.
        </p>
      </Section>

      <Section title="Why we collect it, and what we do with it">
        <p>We use your email address or number for exactly one purpose:</p>
        <ul>
          <li>
            To contact you about Ekka&rsquo;s launch — when we open in Hyderabad, and
            how to get early access.
          </li>
        </ul>
        <p>
          We will not use it for unrelated marketing, we will not sell or rent
          it, and we will not add you to any list you did not ask to join. If we
          ever want to use it for something else, we will ask you first.
        </p>
      </Section>

      <Section title="Your consent, and taking it back">
        <p>
          Submitting the form is your consent to be contacted about the launch.
          You can withdraw it at any time, for any reason, and it is as easy to
          withdraw as it was to give: email{' '}
          <a href="mailto:privacy@ekkaride.com">privacy@ekkaride.com</a> and ask
          to be removed. Every message we send will also carry an unsubscribe
          link. Withdrawing consent stops future contact and triggers deletion as
          described below; it does not affect messages already sent.
        </p>
      </Section>

      <Section title="Who else sees it">
        <p>
          We share your details only with the service providers who make the
          waitlist work — our hosting provider, and the email or SMS service that
          delivers launch announcements. They act as Data Processors on our
          instructions, may use the data only to provide that service, and are
          bound by contract to protect it. Our current providers are{' '}
          <Fill>HOSTING PROVIDER</Fill> and <Fill>EMAIL / SMS PROVIDER</Fill>.
        </p>
        <p>
          Beyond that, we disclose personal data only where the law requires it —
          a valid court order, or a lawful request from a government authority.
        </p>
      </Section>

      <Section title="How long we keep it">
        <p>
          Until it has served its purpose, and no longer. In practice that means
          we delete your waitlist entry within 90 days of launch in Hyderabad,
          unless by then you have created an Ekka account — in which case your
          data moves to the account and is covered by the app&rsquo;s privacy policy.
          If you withdraw consent, we delete your entry within 30 days. If we
          never launch, we delete the entire waitlist.
        </p>
      </Section>

      <Section title="Your rights">
        <p>Under the DPDP Act, 2023, you can ask us to:</p>
        <ul>
          <li>
            <strong>Show you</strong> what personal data of yours we hold and who
            we have shared it with.
          </li>
          <li>
            <strong>Correct or complete</strong> anything inaccurate — a mistyped
            number, an old address.
          </li>
          <li>
            <strong>Erase</strong> your data, where we no longer need it for the
            purpose you gave it for.
          </li>
          <li>
            <strong>Nominate</strong> someone to exercise these rights on your
            behalf if you die or become incapacitated.
          </li>
          <li>
            <strong>Raise a grievance</strong> about how we have handled any of
            the above.
          </li>
        </ul>
        <p>
          Write to <a href="mailto:privacy@ekkaride.com">privacy@ekkaride.com</a>{' '}
          and we will respond within 30 days. There is no charge.
        </p>
      </Section>

      <Section title="Grievance redressal">
        <p>
          If something about our handling of your data is not right, our
          Grievance Officer is the person to tell:
        </p>
        <p className="doc__contact">
          <Fill>GRIEVANCE OFFICER NAME</Fill>
          <br />
          <a href="mailto:grievance@ekkaride.com">grievance@ekkaride.com</a>
          <br />
          <Fill>REGISTERED OFFICE ADDRESS</Fill>, India
        </p>
        <p>
          We aim to acknowledge within 48 hours and resolve within 30 days. If
          you are not satisfied with the outcome, you may complain to the Data
          Protection Board of India.
        </p>
      </Section>

      <Section title="Keeping it safe">
        <p>
          The waitlist is transmitted over HTTPS and stored with access
          restricted to the people who need it. No system is perfectly secure,
          but the exposure here is deliberately small: we hold a contact detail
          and nothing more. If a breach affects your data, we will notify you and
          the Data Protection Board as the law requires.
        </p>
      </Section>

      <Section title="Children">
        <p>
          This waitlist is not intended for anyone under 18. We do not knowingly
          collect data from children. If you believe a child has signed up, tell
          us at <a href="mailto:privacy@ekkaride.com">privacy@ekkaride.com</a> and
          we will delete the entry.
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>
          When Ekka launches, the app will have a fuller privacy policy covering
          rides, location, and payments. This page will be updated then, and the
          date at the top will change. If a change materially affects data you
          have already given us, we will tell you directly rather than quietly
          editing this page.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about any of this:{' '}
          <a href="mailto:privacy@ekkaride.com">privacy@ekkaride.com</a>. Anything
          else: <a href="mailto:hello@ekkaride.com">hello@ekkaride.com</a>.
        </p>
      </Section>
    </LegalDoc>
  )
}
