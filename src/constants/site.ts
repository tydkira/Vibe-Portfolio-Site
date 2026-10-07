/**
 * Site-wide constants — edit these in ONE place and they update everywhere.
 */

/** Your name as it appears in the header / logo area */
export const SITE_NAME = "Ty Dunn";

/** Short tagline used in the footer and meta descriptions */
export const SITE_TAGLINE = "Builder, movie lover, and newsletter writer.";

/**
 * ============================================================
 * NEWSLETTER FORM ACTION — SWAP THIS WHEN YOU PICK A PROVIDER
 * ============================================================
 *
 * Right now the signup form posts to a placeholder URL, so
 * submitting it will NOT subscribe anyone yet. That is intentional.
 *
 * When you are ready:
 * 1. Sign up with Beehiiv, Kit (ConvertKit), Substack, or Buttondown.
 * 2. Copy the form "action" URL (or embed endpoint) they give you.
 * 3. Replace the string below with that URL.
 * 4. Check their docs for any hidden fields (like a form ID) and
 *    add those inside SignupForm.astro if needed.
 *
 * Examples of what this might look like later:
 *   "https://buttondown.com/api/emails/embed-subscribe/your-newsletter"
 *   "https://app.kit.com/forms/XXXXXX/subscriptions"
 *
 * Until then, leave this placeholder so the form markup is ready.
 */
export const NEWSLETTER_FORM_ACTION = "#TODO_CONNECT_PROVIDER";
