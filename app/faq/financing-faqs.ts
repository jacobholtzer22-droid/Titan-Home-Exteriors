import type { Faq } from '@/lib/config-schema'

/**
 * The financing questions, shared by /financing and /faq so the two pages can
 * never drift. They are not in site.config.ts because they describe the
 * lender's process rather than the client's own business facts.
 */
export const FINANCE_FAQS: readonly Faq[] = [
  {
    q: 'Does checking my rate affect my credit?',
    a: 'No. Checking your rate with Momnt is a soft pull, which does not affect your credit score. A hard pull only happens if you go ahead with an application.',
  },
  {
    q: 'Can I pay the balance off early?',
    a: 'Yes. There is no prepayment penalty, so you can clear the balance whenever you like without an extra fee.',
  },
  {
    q: 'Who is the lender?',
    a: 'Momnt, a licensed consumer lending platform. Loans are made by Momnt Technologies, Inc. or its lending partners. We install the windows and doors; we are not the lender and we do not make the credit decision.',
  },
  {
    q: 'How fast is a decision?',
    a: 'Same-day credit decisions are normal. You can apply online in a few minutes rather than filling in paperwork at the kitchen table.',
  },
]
