/**
 * The company details that appear across the privacy policy, terms, and
 * disclaimer. One place, so the same detail can never drift between pages.
 *
 * Anything left as `null` renders on the page as a loud yellow [BRACKETED]
 * chip instead of silently going blank — so an unfilled detail is impossible
 * to miss in review. Nothing is null right now: every field is set.
 */
export const LEGAL = {
  /**
   * Name the site is operated under. If the business is incorporated under a
   * longer registered name ("Ekka Cabs Private Limited" or similar), that
   * exact name belongs here instead — this is the name a regulator or a court
   * would look for.
   */
  entityName: 'Ekka',

  /** Registered office. "India" is appended by the pages, so leave it off. */
  registeredAddress:
    '37-7-32, Satyanagar, MK Gardens, Visakhapatnam, Andhra Pradesh 530008',

  /**
   * Single contact address for every enquiry — general, privacy, grievance,
   * and legal all route here. Worth moving to an address on the ekkaride.com
   * domain once mail is set up; a Gmail address reads as less accountable on
   * a grievance notice.
   */
  contactEmail: 'ekkacab@gmail.com',

  /** Who serves the site. */
  hostingProvider: 'Vercel',

  /** Who delivers launch email/SMS. Not chosen yet — stated plainly as such. */
  messagingProvider: 'not yet appointed',

  /** Courts with jurisdiction over disputes. */
  jurisdictionCity: 'Hyderabad',

  /**
   * Aggregator licensing position. Worded to claim nothing we do not have:
   * it says approvals are outstanding, which is true and safe to publish.
   * Update it the moment the position changes.
   */
  regulatoryStatus:
    'the required approvals have not yet been obtained, and we will secure them before we begin operating',
}
