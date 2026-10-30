import { config } from '@/lib/config'

/**
 * The Google tag, rendered by the root layout only when
 * config.tracking.googleAdsId is set (the layout checks first, so a site
 * without it gains not even an empty slot in its page payload).
 *
 * Plain script tags from a server component on purpose: next/script and client
 * components are bundled into every page's JavaScript even when they render
 * nothing, so a site without tracking would ship different chunks. This file
 * imports nothing client-side, and without the block it renders nothing.
 *
 * The inline script also fires the two conversions:
 *   call  a click on any tel: link (header, footer, hero, CTA band, mobile
 *         call bar, contact page, the form's thank-you), one listener on the
 *         document, so no link component changes.
 *   form  the contact form swapping itself for its thank-you, the one
 *         role="status" element on /contact. ContactForm is sealed (verify
 *         check 4), so it is watched from outside, and it shows the thank-you
 *         only after the POST went through.
 */
export default function GoogleTag() {
  const t = config.tracking
  if (!t?.googleAdsId) return null
  const ids = [t.googleAdsId, ...(t.ga4 ? [t.ga4] : [])]
  const js = [
    'window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}',
    "gtag('js',new Date());",
    ...ids.map((id) => `gtag('config',${JSON.stringify(id)});`),
    `(function(){var call=${JSON.stringify(t.conversions.call ?? '')},form=${JSON.stringify(t.conversions.form ?? '')};`,
    "if(call)document.addEventListener('click',function(e){var a=e.target&&e.target.closest&&e.target.closest('a[href^=\"tel:\"]');if(a)gtag('event','conversion',{send_to:call});},true);",
    "if(form){var sent=false;new MutationObserver(function(){if(!sent&&location.pathname.replace(/\\/$/,'')==='/contact'&&document.querySelector('main [role=\"status\"]')){sent=true;gtag('event','conversion',{send_to:form});}}).observe(document.documentElement,{childList:true,subtree:true});}",
    '})();',
  ].join('')
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${t.googleAdsId}`} />
      <script id="google-tag" dangerouslySetInnerHTML={{ __html: js }} />
    </>
  )
}
