# Migrating an existing client repo to the current template

Client repos are copies of this template taken at a point in time. They do not
track it. When the template fixes something every client needs, each client repo
pulls the fix by hand, and the pieces below must land together.

## What to pull, and what travels as one unit

| Change | Files | Pull together |
|---|---|---|
| **Contact form with optional fields** (Oct 2026) | `components/ContactForm.tsx` and `scripts/contact-form.sha256` | **Always both, in one commit.** See below. Also `lib/config-schema.ts` (the `contactForm` block), `app/privacy-policy/page.tsx`, and the AGENT.md / BRIEF.template.md paragraphs if the repo is still being built by the agent. |
| **next-mdx-remote 6** (CVE-2026-0969; Vercel blocks deploys on 5.x) | `package.json` + `package-lock.json` (`^6.0.0`) and `lib/content.ts` (`blockJS: false`, `blockDangerousJS: true`) | **Always both.** v6 without the option builds green and renders every `{config.*}` in content as an empty string. |
| **Blank-interpolation guard** (verify check 18) | `scripts/verify.ts` | With the v6 bump, so the repo can prove the option is doing its job. |
| **Hero contrast gate** (verify check 19) | `lib/hero-scrim.ts` (new), `components/Hero.tsx` (reads it), `scripts/contrast-check.ts` (new), `scripts/verify.ts`, `package.json` (`contrast` script) | All of them. The CSS and the measurement model read the same stops; a repo with the gate but a hand-typed gradient in `Hero.tsx` is measuring something it does not render. |
| **Next 14.2.35** | `package.json` + `package-lock.json` | On its own. Stay on 14.x. |

After pulling, run `npm install`, then `npm run verify`. Only checks 2 and 3 may
fail on a template copy; on a live client repo only check 3 may fail, and only
until `/api/verify-slug` exists on the platform.

## The form file and its hash are one unit

`components/ContactForm.tsx` is sealed. Check 4 hashes the file and compares it
to `scripts/contact-form.sha256`, and a mismatch fails the gate. The two files
describe one fact, so they move as one commit and never separately.

Current seal: `460131f238cd26096df024b64bf00e42721a4025481a8928b8d6c79d8ef9f42d`
(previous: `1fb815af450deb4cd4c2adbaa362e5106adafe2a19ae45667d6fffcb3a21f260`).

What breaks when they are split:

- **New form, old hash.** Check 4 fails on every build. The fix people reach for
  is `npm run seal-contact-form`, which re-baselines to whatever the file
  currently is. That makes the gate pass without anyone having confirmed the
  file is the template's form, which is exactly the situation the seal exists
  to prevent. Never run the seal script in a client repo; copy the hash file.
- **Old form, new hash.** Check 4 fails, and the natural reading ("the form was
  tampered with") is wrong, which costs the time of a false investigation.
- **New form, new hash, but without `lib/config-schema.ts`.** `config.contactForm`
  is unknown to the schema, so a site that sets it fails `npm run build` with a
  Zod `unrecognized key` error. A site that does not set it builds and renders
  the old four fields, byte-identically; that case was proven when the branch
  merged (2398-byte `<form>` on both sides, same SHA-256).

The form's posted payload never changes shape. Extra fields fold into `name` and
`message`, because the platform parses only those. Pulling the new form never
requires a platform change.

## Order that works

1. `package.json` dependencies and lockfile for next-mdx-remote 6, with
   `lib/content.ts`. `npm install`. `npm run build`. Open any area page and read
   it; every `{config.*}` must be a word, not a gap.
2. `scripts/verify.ts` (checks 18 and 19), `scripts/contrast-check.ts`,
   `lib/hero-scrim.ts`, `components/Hero.tsx`. If the repo's hero gradient was
   tuned by hand, move its stops into `lib/hero-scrim.ts` rather than keeping a
   second gradient. `npm run verify`.
3. `components/ContactForm.tsx` together with `scripts/contact-form.sha256`, plus
   `lib/config-schema.ts` and `app/privacy-policy/page.tsx`. `npm run verify`.
4. Next 14.2.35. `npm install`. `npm run verify`.
