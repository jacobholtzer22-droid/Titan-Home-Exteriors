# Client Brief: Titan Home Exteriors LLC

Anything not in this brief does not appear on the site. Facts marked [intake] came from the owner's written intake on 2026-10-12. Facts marked [GBP] came from the owner's Google Business Profile text he pasted. Facts marked [site] or [guide] came from the client's current website (titanhomeexteriorsllc.com) and his welcome guide PDF; they are client-published but secondary, so list every one you use in the report.

## Business identity

- Legal name: Titan Home Exteriors LLC [intake]
- Display name: Titan Home Exteriors
- Trade: window and door sales and installation (replacement windows, impact-rated windows and doors, entry doors, sliding glass doors, French doors). Siding is offered but is about five percent of the business and the owner wants window and door leads. [intake]
- Tagline (owner's words): "Show up on time. Return the phone call. Seal it right the first time." [intake]
- Founded: July 9, 2024 (GBP opening date) [GBP]. "In business over 2 years" [intake]. Do NOT set yearsInBusiness to 2; set it null and carry experience in copy instead.
- Industry experience: "over 20 years" [intake]; guide says "22+ years of experience" [guide]. Use "more than 20 years in the window and door industry".
- Owner / founder: Michael Scalise, described as third-generation craftsmen with a family legacy in construction [guide]. Confirm before featuring the name prominently; using it on the About page is fine.
- Licensed and insured: yes [intake]. License number CGC058605 (Florida certified general contractor) appears on the client's warranty page and welcome guide [site][guide]. The warranty page also says installations are performed by or under the supervision of Saballos Construction Inc. Use licenseNumber: "CGC058605" in config (Florida requires the number in advertising) and flag in UNRESOLVED that the human must confirm whose license it is.
- Liability insurance: two million dollars general liability [site][guide]. Write it in words if you use it.
- Brands: "representing 12 brands" [intake]. Brand names were not supplied. Say "we represent twelve window and door brands" and nothing more. Do not name PGT, Simonton, or any brand even though stickers are visible in photos.
- Crew: "Each job is staffed by our own crew" [intake]. Do not write "never subcontractors"; the warranty page names Saballos Construction Inc. as the installer of record, so stick to the owner's exact phrase.
- Residential and commercial installs: yes, both [intake].
- What they do NOT do [intake]: no glass replacement, no window repair, no service or repair calls of any kind, no emergency work. They sell and install new windows and doors only.
- Minimum job: five windows [intake]. Whether a door-only job is accepted is UNKNOWN.
- Customers: homeowners only, no renters [intake]. Commercial property owners are fine.
- Average job size (internal only, never on the site): about twenty thousand dollars for a window project [intake].

## Platform

- businessSlug: `replace-before-launch` (placeholder; the human swaps in the real platform slug before launch)
- Domain: `https://www.titanhomeexteriorsllc.com` (final domain; the site will first deploy on a Vercel URL with prelaunch: true)
- Second domain the client owns: titanhome-exteriors.com (his current site's canonical). Redirect to the primary at launch.

## Contact

- Phone: 813-614-4930, E.164 `+18136144930`. Also the texting number. [intake][GBP]
- Email: titanhomeexteriors@gmail.com [intake]
- Published address: 15310 Amberly Dr, Suite 250, Tampa, FL 33647 [intake]. Put "15310 Amberly Dr, Suite 250" in address.street.
- Lat/lng: unknown
- Who answers: the owner or the office manager, 7am to 5pm; the owner answers anytime [intake]. Days of the week were not given. Current site says Mon to Fri 9am to 5pm [site], which conflicts. hours: null. UNRESOLVED.

## Services (in this order)

### Service 1: Window Replacement
- slug: window-replacement
- Includes: new replacement windows sold and installed by Titan's own crew; styles single hung, double hung, slider, picture, casement, and awning [site]; energy-efficient and impact-rated options [site]; code-compliant installation [GBP]; the crew pulls the county permit and schedules the inspection, then installs caps, cleans the panes, and does a final walkthrough after inspection passes [guide].
- Process [guide]: final measurement visit, order goes into production with Florida-code materials, ETA update, materials inspected on arrival, installation day, county inspection, final sign-off.
- Minimum project: five windows [intake].
- Not included: glass-only replacement, repairs, service calls [intake].
- Starting price: not published. Price note: "quoted after a free in-home measurement; window projects start at five windows".
- Free estimates: yes ("Free On-Site Estimates", "$0 estimate cost") [site][guide]. Write "free estimate" or "free in-home estimate", never the dollar form.
- Photos: side-sliding-window-after, patio-windows-glass-door-after, and the before/after pairs.
- Customer questions: What is the minimum number of windows? Do you repair windows or replace broken glass? (No.) Do I need a permit? (Yes, the crew handles it.) How long does a window project take? (Durations UNKNOWN; explain the steps and that the ETA comes after measurement.) What window styles do you install? What is the warranty? Can I finance it? Do you work with renters? (Homeowners only.) Do you do commercial buildings? (Yes.)

### Service 2: Impact Windows & Doors
- slug: impact-windows-and-doors
- Includes: impact-rated windows and doors, from standard impact to HVHZ-rated products [guide]; storm-ready performance [GBP]; impact sliding glass doors and impact-rated entry doors [site]; same crew, same permit and inspection process.
- Starting price: not published. Price note: "quoted after a free in-home measurement".
- Photos: patio-windows-glass-door-after, bronze-sliding-glass-door-patio.
- Customer questions: What makes a window impact-rated? Do impact windows replace shutters? (Answer generally and honestly; do not promise insurance outcomes. "Ask your insurer about wind mitigation credits" is the most you may say.) What does HVHZ mean? Is the warranty the same? Is there a minimum?

### Service 3: Entry & Patio Doors
- slug: entry-and-patio-doors
- Includes: entry doors (single, double, French, steel, fiberglass) and sliding glass doors (standard, impact, black frame) [site]; French doors and multi-panel sliding glass doors, including enclosing a screened lanai with sliding glass doors (shown in the client's photos).
- Starting price: not published. Price note: "quoted after a free in-home estimate".
- Door-only minimum: UNKNOWN.
- Photos: bronze-sliding-glass-door-patio, french-doors-interior-installed, french-doors-install-in-progress, lanai pair.
- Customer questions: Can you replace my sliding glass door with French doors? Can you enclose a screened lanai with sliding glass doors? (Yes, shown in their work.) Do you install impact-rated doors? Is there a minimum for a door-only job? (UNKNOWN; invite a call.) How long does a door install take? (UNKNOWN durations.)

### Service 4: Siding Installation (de-emphasized: last in every list, not in the hero, no homepage emphasis)
- slug: siding-installation
- Includes: vinyl, fiber cement, and engineered wood siding; siding replacement; lap board and board and batten styles [site]. Lifetime Siding Limited Warranty covers siding products, installation workmanship, and labor on approved claims [site].
- Starting price: not published. Price note: "quoted after a free in-home estimate".
- Photos: none. image: null. Do not use stock.
- Customer questions: What siding materials do you install? Do you replace existing siding? What is the warranty on siding? Do you do windows and siding together?

## Warranty (the owner's main differentiator; gets its own page at /warranty)

- Owner's words [intake]: "industry leading warranty including all parts, labor and glass breakage". The owner wrote "see attached" but no warranty document was attached. UNRESOLVED: get the warranty certificate.
- From the client's current warranty page [site], usable with the same care:
  - Name: "Double Lifetime Limited Warranty" for windows and doors, covering products, labor, glass, and installation workmanship for as long as you own your home.
  - Product: all materials covered against defects for as long as you own the home.
  - Labor: one hundred percent of labor costs on every covered repair, no service call fees.
  - Workmanship: guaranteed for the lifetime of the original homeowner.
  - Glass: seal failure and stress cracks covered for life; "see warranty certificate for full glass coverage terms". The owner's intake says "glass breakage"; the page says seal failure and stress cracks. Use the page wording and flag the gap.
  - Transfers to the next homeowner once.
  - Zero deductibles, zero trip charges, zero hidden fees on covered repairs.
  - Exclusions: cosmetic damage from impact, misuse, or weathering; acts of God (hurricanes, floods, hail, lightning); unauthorized modifications or repairs by anyone other than Titan-authorized personnel; improper maintenance; pre-existing structural, rot, or moisture conditions outside the contracted scope.
  - Siding: Lifetime Siding Limited Warranty (products, installation workmanship, labor on approved claims).
- Never write "lifetime" without "limited" when naming the warranty, and always point to the certificate for full terms.

## Offer

- "$250 off any new window or door contract" [intake]. Lives ONLY in config.offer (headline "250 dollars off" is fine in words; the digit form "$250" goes in config, never in MDX). finePrint: "Mention this offer when you book your free estimate. One per contract." is NOT client-supplied; set finePrint to null and let the human add terms.
- "Low price" [intake]: do not write "lowest price". The welcome guide says they match "any legitimate competitor quote" [guide]; you may state the price match on the pricing FAQ, quoting that phrase, and list it as a secondary-source fact used.
- Referral: welcome guide mentions a referral bonus [guide]. Do not put it on the site; a referral offer and a discount offer side by side is a decision for the human.

## Financing

- Partner: Momnt, "a licensed consumer lending platform"; "Loans are made by Momnt Technologies, Inc. or its lending partners" [site]. Zero percent APR promotional offers available to qualified buyers for a limited term; standard rates apply after the promotional period; no prepayment penalty; same-day credit decisions; soft pull to check rates [site]. Disclaimers to include verbatim wherever financing is mentioned: "Financing is subject to credit approval by a third-party lender. Not all applicants will qualify. This is not a commitment to lend."
- Put financing in a homepage section, a homepage FAQ, and a one-line mention on each window and door service page. No separate financing page in this build. Write "zero percent" in words.

## Contact form

- Ask for first and last name separately? no
- Ask for the property address? off
- Ask for a ZIP code? required (they serve by ZIP list)
- Show a dropdown of the services above? yes
- Require the email address? no
- Ask how soon they need the work? Repurpose the timeframe dropdown as the homeowner question, because homeowners-only is the owner's hard rule:
  - label: "Do you own this home?"
  - options: "Yes, I own this home", "Commercial property", "No, I rent"
  - required: yes
- messageLabel: "Tell us about your project"
- messagePlaceholder: "How many windows or doors, and anything else we should know. Window projects start at five windows."
- submitLabel: "Request My Free Estimate"

## Service areas

- Primary city and state: Tampa, FL (office in the 33647 ZIP, New Tampa / Tampa Palms)
- Area pages (config.serviceAreas, in this order): Wesley Chapel (Pasco County), Lutz (Hillsborough County), Brandon (Hillsborough County), Riverview (Hillsborough County), St. Petersburg (Pinellas County), Clearwater (Pinellas County), Lakeland (Polk County), Bradenton (Manatee County). The owner said nothing specific about any town; he supplied ZIP lists only. Write short area pages from true, widely known facts about each place's housing and exposure (coastal wind exposure, age of housing stock, newer subdivisions). If you are not confident a sentence is true, cut it. Report any page you consider thin.
- Full coverage list for config.coverage (county, then towns), from the owner's ZIP spreadsheet and Orange County ZIP map [intake]:
  - Hillsborough County: Tampa, New Tampa and Tampa Palms, Temple Terrace, Carrollwood, Westchase, Town 'N' Country, Lutz, Odessa, Brandon, Valrico, Seffner, Dover, Plant City, Lithia, Riverview, Gibsonton, Apollo Beach, Ruskin, Sun City Center, Wimauma, Thonotosassa
  - Pinellas County: St. Petersburg, Clearwater, Largo, Pinellas Park, Seminole, Dunedin, Safety Harbor, Oldsmar, Palm Harbor, Tarpon Springs, Gulfport, South Pasadena, Kenneth City, Belleair, Belleair Bluffs, Belleair Beach, Indian Rocks Beach, Indian Shores, Redington Beach, Redington Shores, Madeira Beach, Treasure Island, St. Pete Beach, Tierra Verde, Clearwater Beach
  - Pasco County: Wesley Chapel, Land O' Lakes, Zephyrhills, Dade City, San Antonio, Trinity, New Port Richey, Port Richey, Hudson, Holiday
  - Polk County: Lakeland, Winter Haven, Auburndale, Bartow, Mulberry, Haines City, Davenport, Lake Wales, Lake Alfred, Polk City, Dundee, Eagle Lake, Fort Meade, Frostproof, Champions Gate, Poinciana
  - Manatee County: Bradenton, Lakewood Ranch, Parrish, Palmetto, Ellenton, Anna Maria, Holmes Beach, Bradenton Beach, Longboat Key, Cortez, Myakka City
  - Hernando County: Spring Hill, Brooksville, Weeki Wachee, Hernando Beach
  - Orange County: Orlando, Winter Park, Maitland, Apopka, Ocoee, Windermere, Gotha, Lake Buena Vista
- ZIP lists (store in `lib/coverage-zips.ts` as data only; do not render on the site in this build):
  - Hillsborough: 33503 33508 33509 33510 33511 33527 33530 33534 33547 33548 33549 33550 33556 33558 33559 33563 33564 33565 33566 33567 33568 33569 33570 33571 33572 33573 33575 33583 33584 33586 33587 33592 33594 33595 33598 33601 33602 33603 33604 33605 33606 33607 33608 33609 33610 33611 33612 33613 33614 33615 33616 33617 33618 33619 33620 33621 33622 33623 33624 33625 33626 33629 33630 33631 33634 33635 33637 33647 33672 33673 33674 33675 33677 33679 33680 33681 33682 33684 33685 33686 33687 33688 33689 33690 33694 33697
  - Pinellas: 33701 33702 33703 33704 33705 33706 33707 33708 33709 33710 33711 33712 33713 33714 33715 33716 33730 33731 33732 33733 33734 33736 33737 33738 33740 33741 33742 33743 33744 33747 33755 33756 33757 33758 33759 33760 33761 33762 33763 33764 33765 33766 33767 33770 33771 33772 33773 33774 33775 33776 33777 33778 33779 33780 33781 33782 33784 33785 33786 34660 34677 34681 34682 34683 34684 34685 34688 34689 34695 34697 34698
  - Polk: 33801 33802 33803 33804 33805 33806 33807 33809 33810 33811 33813 33815 33820 33823 33827 33830 33831 33835 33836 33837 33838 33839 33840 33841 33843 33844 33845 33846 33847 33849 33850 33851 33853 33854 33855 33856 33858 33859 33860 33863 33867 33868 33877 33880 33881 33882 33883 33884 33885 33896 33897 33898 34759
  - Pasco: 33523 33524 33525 33526 33537 33539 33540 33541 33542 33543 33544 33574 33576 33593 34610 34639 34652 34653 34654 34655 34656 34667 34668 34669 34673 34674 34679 34680 34690 34691
  - Manatee: 34201 34202 34203 34204 34205 34206 34207 34208 34209 34210 34211 34212 34215 34216 34217 34218 34219 34220 34221 34222 34228 34243 34250 34251 34260 34264 34270 34280 34281 34282
  - Hernando: 34601 34602 34603 34604 34605 34606 34607 34608 34609 34611 34613 34614 34636 34661
  - Orange: 32703 32751 32789 32792 32801 32803 32804 32805 32806 32807 32808 32809 32810 32811 32812 32814 32817 32818 32819 32820 32821 32822 32824 32825 32826 32827 32828 32829 32830 32831 32832 32833 32835 32836 32837 32839 34734 34761 34786

## Hours

- Unknown days. hours: null. Owner said 7am to 5pm with the owner reachable anytime; current site says Mon to Fri 9 to 5. Do not guess.

## Profile URLs

- Google Business Profile: verified, five reviews, profile is new [intake]. URL not supplied: profiles.gbp = null.
- Facebook: https://www.facebook.com/people/Titan-Home-Exteriors/61591868018938/
- Instagram: none
- Yelp: none

## Reviews

- None supplied with text and URL. reviews: []. No review schema.

## Photos (public/images/originals/)

The owner photographed his own job photos off a computer monitor, so most originals show a monitor bezel, glare, moire, and in one case the macOS cursor and zoom toolbar. They are real work and go on the site; crop out the bezels, toolbar, and cursor. The files already carry the names below; view each one and confirm it matches its row before running the image pipeline.

| Rename to | What is in it | Role |
|---|---|---|
| bronze-sliding-glass-door-patio.jpg | Three-panel bronze-frame sliding glass door on a paver patio under a covered lanai, ceiling fan above, manufacturer stickers still on the glass. Sharp, portrait, taken directly (not off a monitor). | Hero (split), doors page, gallery first slot |
| french-doors-install-in-progress.jpg | White French doors mid-install, red house wrap around the opening, impact window to the right, waterfront in the background. Portrait, direct photo. | About image, doors page, gallery |
| lanai-screen-before.jpg | Screened lanai under a hip roof, pet door in the screen, child's bike inside. Off-monitor. | Before, pair 1 |
| lanai-sliding-glass-doors-after.jpg | The same lanai enclosed with a white two-panel sliding glass door, artificial turf inside. Off-monitor. | After, pair 1 |
| patio-screen-before.jpg | Long screened back patio on a two-story stucco home, bike and chair inside, lens flare. Off-monitor. | Before, pair 2 |
| patio-windows-glass-door-after.jpg | The same patio enclosed with white picture windows and a glass entry door, cursor and zoom bar visible at the edges (crop them out). Off-monitor. | After, pair 2 |
| side-screen-panel-before.jpg | Side view of a screen panel under an eave with a hose reel by the fence. Off-monitor, strong glare. | Before, pair 3 |
| side-sliding-window-after.jpg | The same opening with a white two-panel sliding window, palms reflected. Off-monitor. | After, pair 3 |
| french-doors-interior-installed.jpg | White French doors viewed from inside a screened room, terracotta tile floor, grill in the corner, stickers on the glass. Off-monitor. | Doors page, gallery |
| stucco-home-arched-windows-a.jpg | Front of a one-story stucco home with arched windows and a palm, sheer curtains visible in the windows, patchy lawn. Off-monitor, monitor bezel visible (crop). | Gallery only |
| stucco-home-arched-windows-b.jpg | Same house, windows now dark and reflective. Possibly the after shot of a window replacement; not confirmed. | Gallery only; do NOT present as a before/after pair |

Do NOT use these if they are in the folder (move them to `public/images/unused/` and say so): a screenshot of a Google Images result from "EcoView Windows" (phone status bar at top, two stacked photos of a pool enclosure); a white arched-top window on a stucco wall and a cropped version of the same scene (stock-style renders); a large wood-and-stone house with a round brick tower and fountain (render); an interior with yellow aspens through black-framed windows labeled "Essential Collection" (manufacturer marketing image). Logo files (black background, blue "TITAN" wordmark): move to `public/brand/` and do not reference them yet.

Before/after pairs for config.images.beforeAfter, with captions:
1. lanai-screen-before.jpg / lanai-sliding-glass-doors-after.jpg: "Screened lanai enclosed with a sliding glass door"
2. patio-screen-before.jpg / patio-windows-glass-door-after.jpg: "Screened patio converted to picture windows and a glass entry door"
3. side-screen-panel-before.jpg / side-sliding-window-after.jpg: "Screen panel replaced with a sliding window"

## Brand notes

- Logo: black background, electric blue gradient "TITAN" in wide-tracked geometric capitals, "HOME EXTERIORS" in thin white capitals beneath, three small icons (siding, windows, doors). Not used in this build; theme.logo stays null and the header renders a text wordmark that echoes it.
- Brand colors: near-black and electric blue from the logo. Use the palette in the prompt.
- Words the owner uses: "treat every home like it's your own", "show up on time", "return the phone call", "seal it right the first time", "our own crew", "industry leading warranty", "storm-ready", "code-compliant".
- Words to avoid: "repair", "service call", "glass replacement", "lowest price", "never subcontractors", any brand name.
- Sites the owner likes: none ("no websites excite me"). He named Andersen (Renewal by Andersen), Reece Windows & Doors, and Window World as competitors; never name them on the site.
- About page copy, owner's words [intake], cut off mid-sentence in his message; use it as written and end at "full attention": "Titan Home Exteriors LLC was founded in Tampa with a simple idea: treat every home like it's your own. Show up on time. Return the phone call. Seal it right the first time. We focus on three services, windows, siding, and doors, so every project gets our full attention." Then: "Each job is staffed by our own crew."
- GBP description, owner's words [GBP], usable for the About page and homepage: "Titan Home Exteriors LLC is a trusted Tampa-based exterior remodeling company specializing in window installation, window replacement, doors, and siding for homeowners across Florida. With a fully licensed and insured team, Titan delivers dependable workmanship, clear communication, and detail-focused service from consultation to cleanup. Known for code-compliant installation, storm-ready performance, and personalized solutions, the company helps homeowners improve energy efficiency, protection, and curb appeal with lasting results."

## UNKNOWN (each becomes null or is left out; this is the list to chase)

- Real platform businessSlug (placeholder in use)
- Hours: which days (times given as 7 to 5)
- Warranty certificate (owner wrote "see attached"; nothing attached) and whether "glass breakage" or only "seal failure and stress cracks" is covered
- Whose license CGC058605 is (Titan's or the qualifier's) and how the owner wants it shown
- The twelve brand names
- Whether a door-only job is accepted and its minimum
- Project durations (measure to install)
- Google Business Profile URL
- Lat/lng of the office
- Logo file as a transparent PNG
- Original job photo files (the owner has them on his computer; the site is launching with photos of his screen)
- Whether "712+ projects completed" and "A+ rated" from the welcome guide are current and sourced (do not use either until confirmed)
- Whether financing through Momnt is still active
- Offer fine print for the 250 dollars off
- Whether Orlando / Orange County is a real service area or aspirational (it is 80+ miles from the office)
