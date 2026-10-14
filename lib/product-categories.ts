/**
 * The four product categories, in the order they appear on /products and in
 * the Products dropdown. In lib/ rather than in the page because a Next.js
 * page file may only export Next's own fields.
 *
 * The keys match config.products[].category, which the schema enums, so a
 * typo here is a type error rather than a silently empty section.
 */
export const PRODUCT_CATEGORIES: { key: 'windows' | 'sliding-glass-doors' | 'entry-doors' | 'siding'; title: string; blurb: string }[] = [
  { key: 'windows', title: 'Windows', blurb: 'Six window styles, in standard or impact-rated glass.' },
  { key: 'sliding-glass-doors', title: 'Sliding Glass Doors', blurb: 'Patio and lanai openings, standard or impact-rated.' },
  { key: 'entry-doors', title: 'Entry Doors', blurb: 'Front entrances in steel, fiberglass, single, double or French.' },
  { key: 'siding', title: 'Siding', blurb: 'Lap board and board and batten, in three materials.' },
]

export function categoryTitle(key: string): string {
  return PRODUCT_CATEGORIES.find((c) => c.key === key)?.title ?? 'Products'
}
