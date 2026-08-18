// Netlify detects forms by scanning the static HTML it deploys for
// `<form data-netlify="true">` tags — it never sees the real form, which is
// submitted client-side from PillarInquiryForm via `fetch`. This hidden,
// statically-rendered twin exists purely so Netlify's build-time bot can
// register the "pillar-inquiry" form and its field names; a real visitor
// never sees or fills it in (field names must stay in sync with
// PillarInquiryForm.tsx).
export function NetlifyFormRegistrations() {
  return (
    <form
      name="pillar-inquiry"
      data-netlify="true"
      netlify-honeypot="botField"
      hidden
      aria-hidden="true"
    >
      <input type="text" name="fullName" />
      <input type="tel" name="contactNo" />
      <input type="tel" name="whatsappContact" />
      <input type="email" name="email" />
      <input type="text" name="organization" />
      <input type="text" name="category" />
      <textarea name="message" />
      <input type="text" name="botField" />
    </form>
  );
}
