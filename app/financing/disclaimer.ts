/**
 * The lender's disclaimer, verbatim from BRIEF.md. It appears near the top of
 * /financing and again at the bottom. Do not paraphrase it and do not drop a
 * sentence: it is a lending disclosure, not copy.
 *
 * In its own module because a Next.js page file may only export Next's known
 * fields, and a stray named export fails the build.
 */
export const FINANCE_DISCLAIMER =
  'Financing is subject to credit approval by a third-party lender. Not all applicants will qualify. This is not a commitment to lend.'
