import type { SiteConfigInput } from './lib/config-schema'

/**
 * Every business fact for this site lives here and nowhere else.
 *
 * Filled from BRIEF.md on 2026-10-12. Unknown facts are null. A null field
 * renders nothing. A guessed value is a defect.
 *
 * Two values are placeholders the human swaps at launch, both flagged inline:
 * businessSlug and prelaunch. See the launch switches in the build report.
 */
const siteConfig = {
  // PLACEHOLDER. Swap for the real Business.slug from the platform before launch.
  // Every lead from this site is posted with this string; a wrong one loses all of them.
  businessSlug: 'replace-before-launch',

  legalName: 'Titan Home Exteriors LLC',
  displayName: 'Titan Home Exteriors',
  tagline: 'Show up on time. Return the phone call. Seal it right the first time.',

  schemaType: 'HomeAndConstructionBusiness',

  phone: '+18136144930',
  email: 'titanhomeexteriors@gmail.com',

  address: {
    street: '15310 Amberly Dr, Suite 250',
    city: 'Tampa',
    state: 'FL',
    zip: '33647',
    lat: null,
    lng: null,
  },

  primaryCity: 'Tampa',
  primaryState: 'FL',

  serviceAreas: [
    { slug: 'wesley-chapel', name: 'Wesley Chapel', county: 'Pasco County' },
    { slug: 'lutz', name: 'Lutz', county: 'Hillsborough County' },
    { slug: 'brandon', name: 'Brandon', county: 'Hillsborough County' },
    { slug: 'riverview', name: 'Riverview', county: 'Hillsborough County' },
    { slug: 'st-petersburg', name: 'St. Petersburg', county: 'Pinellas County' },
    { slug: 'clearwater', name: 'Clearwater', county: 'Pinellas County' },
    { slug: 'lakeland', name: 'Lakeland', county: 'Polk County' },
    { slug: 'bradenton', name: 'Bradenton', county: 'Manatee County' },
  ],

  coverage: [
    {
      county: 'Hillsborough County',
      towns: [
        'Tampa',
        'New Tampa and Tampa Palms',
        'Temple Terrace',
        'Carrollwood',
        'Westchase',
        "Town 'N' Country",
        'Lutz',
        'Odessa',
        'Brandon',
        'Valrico',
        'Seffner',
        'Dover',
        'Plant City',
        'Lithia',
        'Riverview',
        'Gibsonton',
        'Apollo Beach',
        'Ruskin',
        'Sun City Center',
        'Wimauma',
        'Thonotosassa',
      ],
    },
    {
      county: 'Pinellas County',
      towns: [
        'St. Petersburg',
        'Clearwater',
        'Largo',
        'Pinellas Park',
        'Seminole',
        'Dunedin',
        'Safety Harbor',
        'Oldsmar',
        'Palm Harbor',
        'Tarpon Springs',
        'Gulfport',
        'South Pasadena',
        'Kenneth City',
        'Belleair',
        'Belleair Bluffs',
        'Belleair Beach',
        'Indian Rocks Beach',
        'Indian Shores',
        'Redington Beach',
        'Redington Shores',
        'Madeira Beach',
        'Treasure Island',
        'St. Pete Beach',
        'Tierra Verde',
        'Clearwater Beach',
      ],
    },
    {
      county: 'Pasco County',
      towns: [
        'Wesley Chapel',
        "Land O' Lakes",
        'Zephyrhills',
        'Dade City',
        'San Antonio',
        'Trinity',
        'New Port Richey',
        'Port Richey',
        'Hudson',
        'Holiday',
      ],
    },
    {
      county: 'Polk County',
      towns: [
        'Lakeland',
        'Winter Haven',
        'Auburndale',
        'Bartow',
        'Mulberry',
        'Haines City',
        'Davenport',
        'Lake Wales',
        'Lake Alfred',
        'Polk City',
        'Dundee',
        'Eagle Lake',
        'Fort Meade',
        'Frostproof',
        'Champions Gate',
        'Poinciana',
      ],
    },
    {
      county: 'Manatee County',
      towns: [
        'Bradenton',
        'Lakewood Ranch',
        'Parrish',
        'Palmetto',
        'Ellenton',
        'Anna Maria',
        'Holmes Beach',
        'Bradenton Beach',
        'Longboat Key',
        'Cortez',
        'Myakka City',
      ],
    },
    {
      county: 'Hernando County',
      towns: ['Spring Hill', 'Brooksville', 'Weeki Wachee', 'Hernando Beach'],
    },
    {
      county: 'Orange County',
      towns: ['Orlando', 'Winter Park', 'Maitland', 'Apopka', 'Ocoee', 'Windermere', 'Gotha', 'Lake Buena Vista'],
    },
  ],

  services: [
    {
      slug: 'window-replacement',
      name: 'Window Replacement',
      shortDescription:
        'New replacement windows sold and installed by our own crew, with the county permit pulled and the inspection scheduled for you. Projects start at five windows.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home measurement, and window projects start at five windows',
      image: 'side-sliding-window-after.jpg',
      faqs: [
        {
          q: 'What is the minimum number of windows?',
          a: 'Window projects start at five windows. If you need fewer than that, call us and we will tell you honestly whether it is a job we can take rather than leaving you waiting on a quote.',
        },
        {
          q: 'Do you repair windows or replace broken glass?',
          a: 'No. We sell and install new windows and doors only, so we do not take repair work, service calls, or glass-only jobs. If a repair is what you need, a repair company is the better call.',
        },
        {
          q: 'Do I need a permit, and who pulls it?',
          a: 'A permit is part of the job and we handle it. Our crew pulls the county permit and schedules the inspection. Once the inspection passes we install the caps, clean the panes, and walk the finished job with you.',
        },
        {
          q: 'What window styles do you install?',
          a: 'Single hung, double hung, slider, picture, casement, and awning, with energy-efficient and impact-rated options. We represent twelve window and door brands, so there is usually more than one way to meet a spec.',
        },
        {
          q: 'How long does a window project take?',
          a: 'The steps do not change: a final measurement visit, production, a check of the materials when they arrive, installation day, then county inspection and final sign-off. We give you the timeline after the measurement, because it depends on what you order.',
        },
        {
          q: 'Can I finance a window project?',
          a: 'Yes. We offer financing through Momnt, a licensed consumer lending platform, including zero percent promotional offers for qualified buyers. Financing is subject to credit approval by a third-party lender. Not all applicants will qualify. This is not a commitment to lend.',
        },
      ],
    },
    {
      slug: 'impact-windows-and-doors',
      name: 'Impact Windows & Doors',
      shortDescription:
        'Impact-rated windows and doors installed by our own crew, from standard impact products up to HVHZ-rated glass, with the permit and inspection handled.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home measurement',
      image: 'patio-windows-glass-door-after.jpg',
      faqs: [
        {
          q: 'What makes a window impact-rated?',
          a: 'An impact-rated window is built and tested to hold together and stay in its opening when something strikes it. We install products from standard impact up to HVHZ-rated glass, and every opening goes in to code.',
        },
        {
          q: 'Do impact windows replace storm shutters?',
          a: 'Impact-rated glass is designed to protect the opening on its own, which is the reason most people choose it over putting shutters up twice a season. Ask your insurer about wind mitigation credits, because what your policy does is between you and them.',
        },
        {
          q: 'What does HVHZ mean?',
          a: 'High Velocity Hurricane Zone, the strictest wind rating in the Florida building code. We install HVHZ-rated windows and doors as well as standard impact products, so we can match whatever the project calls for.',
        },
        {
          q: 'Is the warranty the same on impact products?',
          a: 'Yes. Impact windows and doors carry the same Double Lifetime Limited Warranty as the rest of our window and door work: products, labor, glass, and installation workmanship. The warranty certificate governs the full terms.',
        },
        {
          q: 'Is there a minimum on impact windows?',
          a: 'Window projects start at five windows, impact-rated or not. For a door on its own, give us a call and we will tell you whether it is something we can take on.',
        },
      ],
    },
    {
      slug: 'entry-and-patio-doors',
      name: 'Entry & Patio Doors',
      shortDescription:
        'Entry doors and sliding glass doors installed by our own crew, including French doors, multi-panel sliders, and impact-rated doors for homes and commercial property.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home estimate',
      image: 'bronze-sliding-glass-door-patio.jpg',
      faqs: [
        {
          q: 'What kinds of entry doors do you install?',
          a: 'Single and double entry doors, French doors, steel, and fiberglass, plus sliding glass doors in standard, impact-rated, and black frame. We represent twelve window and door brands.',
        },
        {
          q: 'Can you replace a sliding glass door with French doors?',
          a: 'Yes. We install French doors, including into an opening that currently holds a sliding glass door. We measure the opening on the estimate visit and quote the door and the installation together.',
        },
        {
          q: 'Can you enclose a screened lanai with sliding glass doors?',
          a: 'Yes, and it is work we have finished for homeowners nearby. The before and after photos on this site show a screened lanai closed in with a sliding glass door, and a screened patio closed in with picture windows and a glass entry door.',
        },
        {
          q: 'Do you install impact-rated doors?',
          a: 'Yes. Entry doors and sliding glass doors are both available impact-rated, and we install HVHZ-rated products where the project calls for them.',
        },
        {
          q: 'Is there a minimum for a door-only job?',
          a: 'Window projects start at five windows. For a door on its own, call us: what we can take depends on the door, and we would rather tell you on the phone than have you guess from a website.',
        },
        {
          q: 'How long does a door installation take?',
          a: 'We give you a timeline after the measurement visit, because it depends on the door you choose and when it comes out of production. The steps do not change: measure, order, check the materials in, install, inspect, sign off.',
        },
      ],
    },
    {
      slug: 'siding-installation',
      name: 'Siding Installation',
      shortDescription:
        'Vinyl, fiber cement, and engineered wood siding installed or replaced, in lap board and board and batten styles, by the same crew that handles our window work.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home estimate',
      image: null,
      faqs: [
        {
          q: 'What siding materials do you install?',
          a: 'Vinyl, fiber cement, and engineered wood, in lap board and board and batten styles. Which one suits the house depends on the exposure and the look you are after, and we go through that on the estimate visit.',
        },
        {
          q: 'Do you replace existing siding?',
          a: 'Yes. Siding replacement is part of what we do, and the same crew that handles our window and door work handles the siding.',
        },
        {
          q: 'What is the warranty on siding?',
          a: 'Siding carries a Lifetime Siding Limited Warranty, covering the siding products, the installation workmanship, and labor on approved claims. The warranty certificate governs the full terms.',
        },
        {
          q: 'Can you do windows and siding together?',
          a: 'Yes. Windows and siding meet at the same openings, so if you are planning both, it is worth quoting them together instead of as two separate jobs.',
        },
      ],
    },
  ],

  process: [
    {
      name: 'Final measurement',
      detail:
        'We come back and measure every opening properly before a single unit is ordered. This is the visit that decides the fit, so nothing goes into production until it is done.',
      checklist: ['Every opening measured individually', 'Styles and glass package confirmed', 'Nothing ordered before this visit'],
    },
    {
      name: 'Into production',
      detail:
        'Your order goes into production with materials rated for the Florida building code. What you picked at the estimate is what gets built.',
      checklist: ['Order placed to your measurements', 'Florida code-rated materials', 'Impact rating confirmed where it applies'],
    },
    {
      name: 'ETA update',
      detail:
        'As soon as production gives us a date, we give it to you. You should not have to call and ask where your windows are.',
      checklist: ['Production date passed straight on', 'Schedule set around your availability'],
    },
    {
      name: 'Materials arrive',
      detail:
        'We check the materials in when they arrive, before they go anywhere near the house. A damaged unit found in our shop is an inconvenience; found on installation day it is a wasted morning.',
      checklist: ['Every unit inspected on arrival', 'Damage caught before install day', 'Counts checked against the order'],
    },
    {
      name: 'Installation day',
      detail:
        'Our own crew installs, under the county permit we pulled, and the county inspection follows. The permit protects you, which is why we never skip it.',
      checklist: ['County permit pulled by us', 'Installed by our own crew', 'County inspection scheduled'],
    },
    {
      name: 'Final sign-off',
      detail:
        'Once the inspection passes we install the caps, clean the panes, and walk the finished job with you. You sign off when you are satisfied, not before.',
      checklist: ['Caps installed and panes cleaned', 'Walkthrough with you', 'Warranty paperwork handed over'],
    },
  ],

  products: [
    {
      slug: 'single-hung-windows',
      name: 'Single Hung Windows',
      category: 'windows',
      relatedService: 'window-replacement',
      shortDescription:
        'A classic, budget-friendly window where the bottom sash slides up and the top sash stays fixed, installed squared and sealed.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home measurement',
      image: 'side-sliding-window-after.jpg',
      features: [
        {
          title: 'Sash and track fitting',
          detail: 'Bottom sash fitted and aligned in the track so it runs smoothly up and down.',
        },
        {
          title: 'Weatherstripping',
          detail: 'Fresh weatherstripping installed so the sash stays airtight when it is closed.',
        },
        {
          title: 'Balance system setup',
          detail: 'Spring or block-and-tackle balances installed so the sash holds its position without a prop.',
        },
        {
          title: 'Screen installation',
          detail: 'Fitted screens installed so you get ventilation without the bugs.',
        },
      ],
      faqs: [
        {
          q: 'Are single hung windows harder to clean than double hung?',
          a: 'The top sash is fixed, so you clean the outside of that pane from outside the house. A double hung tilts both sashes in, which is the reason most people pay the difference.',
        },
        {
          q: 'Can single hung windows be impact-rated?',
          a: 'Yes. Single hung is a style, not a glass package, so it can be ordered with impact-rated glass. We go through the options at the measurement visit.',
        },
        {
          q: 'Why choose single hung over the other styles?',
          a: 'It is the most economical style we install and it has the fewest moving parts, which is why it is still the default in a lot of Florida homes.',
        },
      ],
    },
    {
      slug: 'double-hung-windows',
      name: 'Double Hung Windows',
      category: 'windows',
      relatedService: 'window-replacement',
      shortDescription:
        'Both sashes slide and tilt inward for easy cleaning, with more ventilation control than a single hung window.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home measurement',
      image: 'side-sliding-window-after.jpg',
      features: [
        {
          title: 'Dual sash fitting',
          detail: 'Both sashes fitted and balanced for smooth vertical movement and tilt-in access.',
        },
        {
          title: 'Tilt-latch hardware',
          detail: 'Tilt latches installed so both sashes can be cleaned from inside the house.',
        },
        {
          title: 'Full perimeter sealing',
          detail: 'Frame sealed against drafts and water intrusion on all four sides.',
        },
        {
          title: 'Hardware and lock finishing',
          detail: 'Sash locks and lift hardware installed and tested before we leave.',
        },
      ],
      faqs: [
        {
          q: 'Is a double hung worth it over a single hung?',
          a: 'If the window is above a sink, on a second storey, or anywhere a ladder is a nuisance, the tilt-in sashes earn their cost the first time you clean them.',
        },
        {
          q: 'Can both sashes really be cleaned from inside?',
          a: 'Yes. Both sashes tilt in, which is the whole point of the style.',
        },
        {
          q: 'Do double hung windows ventilate better?',
          a: 'They let you open the top, the bottom, or both, so you can vent heat from the top of the room without opening the window at ground level.',
        },
      ],
    },
    {
      slug: 'slider-windows',
      name: 'Slider Windows',
      category: 'windows',
      relatedService: 'window-replacement',
      shortDescription:
        'Wide horizontal sashes that glide side to side, a strong fit for modern homes and for openings wider than they are tall.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home measurement',
      image: 'side-sliding-window-after.jpg',
      features: [
        {
          title: 'Track and roller installation',
          detail: 'Precision track and roller hardware installed so the sash glides instead of dragging.',
        },
        {
          title: 'Wide-opening framing',
          detail: 'Framing checked and reinforced where it is needed to carry a wider span.',
        },
        {
          title: 'Weatherseal fitting',
          detail: 'Interlocking weatherseals fitted so the sliding sash stays airtight when closed.',
        },
        {
          title: 'Screen and lock setup',
          detail: 'Sliding screens and cam locks installed and adjusted for a secure, smooth fit.',
        },
      ],
      faqs: [
        {
          q: 'Where does a slider window work best?',
          a: 'In an opening that is wider than it is tall, and anywhere a crank or a lifted sash would be awkward to reach across a counter or a sink.',
        },
        {
          q: 'Do slider windows leak more than other styles?',
          a: 'Not when the track is set level and the weatherseals interlock properly. The install is what decides it, which is why we check the opening before anything is ordered.',
        },
        {
          q: 'Can sliders be impact-rated?',
          a: 'Yes. We install sliders in standard and impact-rated glass, and we will tell you which the opening and your wind zone call for.',
        },
      ],
    },
    {
      slug: 'picture-windows',
      name: 'Picture Windows',
      category: 'windows',
      relatedService: 'window-replacement',
      shortDescription:
        'Large fixed panes that frame a view and carry light deep into a room, with no moving parts and the maximum glass area.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home measurement',
      image: 'patio-windows-glass-door-after.jpg',
      features: [
        {
          title: 'Structural opening check',
          detail: 'Opening verified and reinforced where it is needed to carry a large fixed pane.',
        },
        {
          title: 'Insulated glass unit',
          detail: 'High-performance insulated glass installed to control heat gain across a big surface.',
        },
        {
          title: 'Full frame sealing',
          detail: 'Complete perimeter seal, since there is no sash to take up any slack.',
        },
        {
          title: 'Trim and finish',
          detail: 'Interior and exterior trim finished so the glass is what you notice.',
        },
      ],
      faqs: [
        {
          q: 'Do picture windows open?',
          a: 'No. A picture window is fixed, which is what lets it be bigger and better sealed than an operating window. We often pair one with awning or casement units on either side for airflow.',
        },
        {
          q: 'Will a big pane of glass overheat the room?',
          a: 'It is the glass package that decides that, not the size. We specify insulated glass with a coating suited to the exposure.',
        },
        {
          q: 'Can a picture window be impact-rated?',
          a: 'Yes, and on a pane that size it is worth asking about.',
        },
      ],
    },
    {
      slug: 'casement-windows',
      name: 'Casement Windows',
      category: 'windows',
      relatedService: 'window-replacement',
      shortDescription:
        'Crank-operated windows that swing outward, giving a tight compression seal and an unobstructed opening for airflow.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home measurement',
      image: 'side-sliding-window-after.jpg',
      features: [
        {
          title: 'Hinge and crank installation',
          detail: 'Hinge hardware and crank mechanism installed and calibrated so it turns smoothly.',
        },
        {
          title: 'Compression seal fitting',
          detail: 'Sash adjusted so it compresses evenly against the frame for a draft-free seal.',
        },
        {
          title: 'Locking hardware',
          detail: 'Multi-point locks installed for extra security when the window is closed.',
        },
        {
          title: 'Screen installation',
          detail: 'Interior-mounted screens fitted so the sash can swing out freely.',
        },
      ],
      faqs: [
        {
          q: 'Are casement windows good for Florida?',
          a: 'They seal tightly, because the sash compresses against the frame rather than sliding past it, and they catch a breeze from the side better than a slider. The sash does swing out, so they suit walls that are clear of walkways.',
        },
        {
          q: 'What happens to a casement window in a storm?',
          a: 'Closed and locked, a multi-point lock holds the sash against the frame. For wind-borne debris the answer is the glass package, so ask about impact-rated units.',
        },
        {
          q: 'Are casement windows harder to maintain?',
          a: 'There is a crank and a hinge, which a slider does not have. Both are serviceable parts and we set them up before we leave.',
        },
      ],
    },
    {
      slug: 'awning-windows',
      name: 'Awning Windows',
      category: 'windows',
      relatedService: 'window-replacement',
      shortDescription:
        'Hinged at the top and opening outward, awning windows let air in even during light rain, which suits the Florida summer.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home measurement',
      image: 'side-sliding-window-after.jpg',
      features: [
        {
          title: 'Top-hinge installation',
          detail: 'Hinge hardware installed and aligned so the sash swings out cleanly from the bottom.',
        },
        {
          title: 'Crank mechanism fitting',
          detail: 'Crank calibrated for smooth, controlled opening at any angle.',
        },
        {
          title: 'Weather seal',
          detail: 'Compression seal fitted so the closed sash stays airtight and watertight.',
        },
        {
          title: 'Placement planning',
          detail: 'We help plan placement, often above a fixed window or a counter, for the best airflow.',
        },
      ],
      faqs: [
        {
          q: 'Can I leave an awning window open in the rain?',
          a: 'That is the point of the style: the sash forms a small awning over the opening, so light rain runs off instead of in. In a real storm, close it.',
        },
        {
          q: 'Where do awning windows go?',
          a: 'High on a wall, above a fixed picture window, or above a counter or sink where a swinging sash is out of the way.',
        },
        {
          q: 'Can awning windows be impact-rated?',
          a: 'Yes, the same as the other styles we install.',
        },
      ],
    },
    {
      slug: 'impact-sliding-glass-doors',
      name: 'Impact Sliding Glass Doors',
      category: 'sliding-glass-doors',
      relatedService: 'impact-windows-and-doors',
      shortDescription:
        'Laminated impact glass in a sliding door, so the largest opening in the house stays protected through storm season.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home measurement',
      image: 'lanai-sliding-glass-doors-after.jpg',
      features: [
        {
          title: 'Code compliance review',
          detail: 'We confirm the impact rating and the anchoring your wind zone and opening size call for.',
        },
        {
          title: 'Reinforced frame anchoring',
          detail: 'Frame anchored into structural framing so it can carry hurricane-force wind loads.',
        },
        {
          title: 'Laminated impact glass',
          detail: 'Certified impact-rated glass installed across the full sliding panel.',
        },
        {
          title: 'Permit and inspection',
          detail: 'We pull the county permit and see the inspection through, which impact work always requires.',
        },
      ],
      faqs: [
        {
          q: 'Does an impact slider replace my shutters?',
          a: 'Impact-rated glass is built to protect the opening on its own, which is why people choose it over putting shutters up twice a season. On insurance, ask your insurer about wind mitigation credits.',
        },
        {
          q: 'How much heavier is an impact slider?',
          a: 'Laminated glass is heavier than standard, which is why the frame anchoring and the rollers matter more. Installed properly it still slides with one hand.',
        },
        {
          q: 'Is the warranty the same?',
          a: 'Yes. Impact doors carry the same Double Lifetime Limited Warranty as the rest of our window and door work.',
        },
      ],
    },
    {
      slug: 'standard-sliding-glass-doors',
      name: 'Standard Sliding Glass Doors',
      category: 'sliding-glass-doors',
      relatedService: 'entry-and-patio-doors',
      shortDescription:
        'Reliable sliding doors for a patio or lanai where the opening does not call for impact-rated glass.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home measurement',
      image: 'bronze-sliding-glass-door-patio.jpg',
      features: [
        {
          title: 'Opening preparation',
          detail: 'Rough opening checked and prepped so the frame goes in level and square.',
        },
        {
          title: 'Track and roller setup',
          detail: 'Track and roller hardware installed and adjusted for smooth operation.',
        },
        {
          title: 'Full perimeter sealing',
          detail: 'Frame sealed against drafts and water intrusion.',
        },
        {
          title: 'Lock and handle finishing',
          detail: 'Handles and locks installed and tested for a secure, smooth close.',
        },
      ],
      faqs: [
        {
          q: 'How do I know whether I need impact glass?',
          a: 'It depends on the wind zone and the opening, and sometimes on what your insurer wants. We will tell you which applies at the measurement visit rather than selling up by default.',
        },
        {
          q: 'Why do old sliders get so hard to move?',
          a: 'Usually the rollers and the track, not the door. We replace the whole unit rather than servicing the old one, because repairs are not work we take.',
        },
        {
          q: 'Can a standard slider be upgraded later?',
          a: 'Not economically. If impact glass is on your mind at all, it is cheaper to do it in one install than twice.',
        },
      ],
    },
    {
      slug: 'black-frame-sliding-glass-doors',
      name: 'Black Frame Sliding Glass Doors',
      category: 'sliding-glass-doors',
      relatedService: 'entry-and-patio-doors',
      shortDescription:
        'A black-framed sliding door that adds contrast and a contemporary edge to a patio or lanai opening.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home measurement',
      image: 'bronze-sliding-glass-door-patio.jpg',
      features: [
        {
          title: 'Opening preparation',
          detail: 'Rough opening checked, leveled and prepped before the new frame is set.',
        },
        {
          title: 'Track and roller setup',
          detail: 'Track and roller hardware installed and adjusted for smooth, quiet operation.',
        },
        {
          title: 'Full perimeter flashing',
          detail: 'Frame flashed and sealed on all sides against wind-driven rain.',
        },
        {
          title: 'Finish and hardware detailing',
          detail: 'Black finish inspected and hardware fitted so the final look is clean.',
        },
      ],
      faqs: [
        {
          q: 'Does a black frame get hotter in the sun?',
          a: 'A dark frame runs warmer than a white one in direct sun. Modern frames are built for it, and the glass package does the real work on heat gain.',
        },
        {
          q: 'Can a black frame door be impact-rated?',
          a: 'Yes. The finish and the glass package are separate choices.',
        },
        {
          q: 'Is black still a safe choice in five years?',
          a: 'That is a taste question and we will not pretend otherwise. It has been the dominant contemporary finish for some years now.',
        },
      ],
    },
    {
      slug: 'single-entry-doors',
      name: 'Single Entry Doors',
      category: 'entry-doors',
      relatedService: 'entry-and-patio-doors',
      shortDescription:
        'A single-slab front door, the most common entry configuration, sized and styled to suit the house.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home measurement',
      image: 'french-doors-interior-installed.jpg',
      features: [
        {
          title: 'Opening preparation',
          detail: 'Rough opening checked and prepped for a precise, plumb install.',
        },
        {
          title: 'Slab hanging and alignment',
          detail: 'Door slab hung and aligned in the frame so it swings smoothly and closes tight.',
        },
        {
          title: 'Weatherstripping and sweep',
          detail: 'Weatherstripping and a door sweep installed for a draft-free seal at every edge.',
        },
        {
          title: 'Hardware finishing',
          detail: 'Locksets and hinges installed and adjusted for secure, smooth operation.',
        },
      ],
      faqs: [
        {
          q: 'How long does an entry door take to install?',
          a: 'We give you the timeline after the measurement visit, because it depends on the door you choose and when it comes out of production.',
        },
        {
          q: 'Can you match my existing opening?',
          a: 'We measure the opening and order to it. That is why nothing is ordered before the measurement visit.',
        },
        {
          q: 'What material should I pick?',
          a: 'Fiberglass for low maintenance in the heat, steel for security and dent resistance. We go through both on site.',
        },
      ],
    },
    {
      slug: 'double-entry-doors',
      name: 'Double Entry Doors',
      category: 'entry-doors',
      relatedService: 'entry-and-patio-doors',
      shortDescription:
        'A two-leaf entrance that widens the opening and makes more of the front of the house.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home measurement',
      image: 'french-doors-interior-installed.jpg',
      features: [
        {
          title: 'Dual-frame opening prep',
          detail: 'Wider opening checked, leveled and prepped to carry two door leaves.',
        },
        {
          title: 'Active and inactive leaf setup',
          detail: 'Astragal and flush bolts installed so the inactive leaf locks securely when closed.',
        },
        {
          title: 'Center seal alignment',
          detail: 'Both leaves aligned so they meet flush with a tight, weatherproof seal at the center.',
        },
        {
          title: 'Hardware and finish',
          detail: 'Matching hardware fitted on both leaves and the trim finished to match.',
        },
      ],
      faqs: [
        {
          q: 'Do I need a wider opening than I have?',
          a: 'Usually yes, and that is structural work we scope at the measurement visit rather than guessing at from a photo.',
        },
        {
          q: 'Does the second door open?',
          a: 'The inactive leaf unlocks with flush bolts when you want the full opening, and stays secured the rest of the time.',
        },
        {
          q: 'Can double doors be impact-rated?',
          a: 'Yes, and on an opening that wide it is worth pricing.',
        },
      ],
    },
    {
      slug: 'french-door-installation',
      name: 'French Door Installation',
      category: 'entry-doors',
      relatedService: 'entry-and-patio-doors',
      shortDescription:
        'Glass-paneled double doors that swing open, used as a front entrance or to open a room onto a patio or lanai.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home measurement',
      image: 'french-doors-install-in-progress.jpg',
      features: [
        {
          title: 'Dual-frame opening prep',
          detail: 'Opening checked, leveled and prepped to carry two swinging glass-paneled leaves.',
        },
        {
          title: 'Hinge and swing alignment',
          detail: 'Hinges installed and adjusted so both doors swing freely without binding.',
        },
        {
          title: 'Center seal and astragal',
          detail: 'Astragal and weatherstripping fitted so the leaves meet with a tight, weatherproof seal.',
        },
        {
          title: 'Glass and hardware finish',
          detail: 'Glass panels and matching hardware installed and finished.',
        },
      ],
      faqs: [
        {
          q: 'Can you replace a sliding glass door with French doors?',
          a: 'Yes. We install French doors into openings that currently hold a slider, and we measure the opening on the estimate visit so the door and the installation are quoted together.',
        },
        {
          q: 'Do French doors swing in or out?',
          a: 'Either, and it is worth deciding on site. Swing is set by the furniture inside and the traffic outside, not by preference alone.',
        },
        {
          q: 'Are French doors secure?',
          a: 'With an astragal, flush bolts and a multi-point lock, yes. We fit the hardware as part of the install.',
        },
      ],
    },
    {
      slug: 'steel-entry-doors',
      name: 'Steel Entry Doors',
      category: 'entry-doors',
      relatedService: 'entry-and-patio-doors',
      shortDescription:
        'A dent-resistant steel-core door built for security and long service in a Florida entryway.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home measurement',
      image: 'french-doors-interior-installed.jpg',
      features: [
        {
          title: 'Opening preparation',
          detail: 'Rough opening checked and prepped for a precise, plumb install.',
        },
        {
          title: 'Reinforced frame setting',
          detail: 'Frame set and shimmed to carry the weight and the security demands of a steel slab.',
        },
        {
          title: 'Weatherstripping and sweep',
          detail: 'Weatherstripping and sweep installed for a draft-free, secure seal.',
        },
        {
          title: 'Security hardware',
          detail: 'Heavy-duty deadbolts and hinges installed.',
        },
      ],
      faqs: [
        {
          q: 'Does a steel door rust near the coast?',
          a: 'A steel door is clad and finished, not bare metal, and the finish is what you maintain. Closer to the water, fiberglass is the lower-maintenance answer and we will say so.',
        },
        {
          q: 'Is steel more secure than fiberglass?',
          a: 'The slab is harder to breach, but most entries fail at the frame and the lock, which is where the install matters more than the material.',
        },
        {
          q: 'Can a steel door be painted?',
          a: 'Yes, and it usually is. The finish is part of what you choose when the door is ordered.',
        },
      ],
    },
    {
      slug: 'fiberglass-entry-doors',
      name: 'Fiberglass Entry Doors',
      category: 'entry-doors',
      relatedService: 'entry-and-patio-doors',
      shortDescription:
        'A low-maintenance entry door that resists warping, cracking and fading in Florida heat and humidity.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home measurement',
      image: 'french-doors-interior-installed.jpg',
      features: [
        {
          title: 'Opening preparation',
          detail: 'Rough opening checked and prepped for a precise, plumb install.',
        },
        {
          title: 'Frame setting and shimming',
          detail: 'Frame set, shimmed and leveled to carry the fiberglass slab correctly.',
        },
        {
          title: 'Weatherstripping and sweep',
          detail: 'Weatherstripping and sweep installed for a tight, draft-free seal.',
        },
        {
          title: 'Hardware and finish',
          detail: 'Locksets and hinges installed and the finish detailed.',
        },
      ],
      faqs: [
        {
          q: 'Why fiberglass in Florida?',
          a: 'It does not swell with humidity the way wood does and it does not dent the way steel does, so it is the lowest-maintenance of the three in this climate.',
        },
        {
          q: 'Can fiberglass look like wood?',
          a: 'Yes. Most fiberglass slabs are moulded with a grain and finished to match a stain.',
        },
        {
          q: 'How long does a fiberglass door last?',
          a: 'Longer than its finish, in most cases. The slab outlives the paint or stain, which is the part you refresh.',
        },
      ],
    },
    {
      slug: 'lap-board-siding',
      name: 'Lap Board Siding',
      category: 'siding',
      relatedService: 'siding-installation',
      shortDescription:
        'Classic horizontal lap siding with overlapping boards, the traditional exterior most Florida neighborhoods are built in.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home measurement',
      image: null,
      features: [
        {
          title: 'Substrate prep and moisture barrier',
          detail: 'Sheathing prepped and a weather-resistant barrier installed before the first course goes up.',
        },
        {
          title: 'Starter strip and level lines',
          detail: 'Starter strip set level so the courses run straight all the way up the wall.',
        },
        {
          title: 'Overlap and fastening',
          detail: 'Boards overlapped and fastened to the manufacturer spec so they shed water properly.',
        },
        {
          title: 'Trim and corner finishing',
          detail: 'Corner posts and trim finished cleanly around windows, doors and edges.',
        },
      ],
      faqs: [
        {
          q: 'What materials can lap siding be?',
          a: 'We install vinyl, fiber cement and engineered wood. Which one suits the house depends on the exposure and the look you are after.',
        },
        {
          q: 'Can you side the house and replace the windows together?',
          a: 'Yes, and it is worth quoting together. Siding and windows meet at the same openings, so one crew doing both is tidier than two jobs handing off.',
        },
        {
          q: 'What is covered by the siding warranty?',
          a: 'A Lifetime Siding Limited Warranty covers the siding products, the installation workmanship, and labor on approved claims. The certificate governs the full terms.',
        },
      ],
    },
    {
      slug: 'board-batten-siding',
      name: 'Board and Batten Siding',
      category: 'siding',
      relatedService: 'siding-installation',
      shortDescription:
        'Wide vertical boards with narrow battens over the seams, the modern farmhouse and coastal look.',
      priceFrom: null,
      priceNote: 'quoted after a free in-home measurement',
      image: null,
      features: [
        {
          title: 'Substrate prep and moisture barrier',
          detail: 'Sheathing prepped and a weather-resistant barrier installed before the boards go up.',
        },
        {
          title: 'Vertical board installation',
          detail: 'Wide boards installed plumb and evenly spaced for a consistent vertical rhythm.',
        },
        {
          title: 'Batten seam covering',
          detail: 'Narrow battens installed over each seam for a finished look and extra weather protection.',
        },
        {
          title: 'Trim and accent detailing',
          detail: 'Corners, window trim and accent areas finished to complete the look.',
        },
      ],
      faqs: [
        {
          q: 'Does board and batten suit a Florida house?',
          a: 'It suits a lot of them, particularly newer builds and anything leaning coastal or farmhouse. On a traditional ranch it can look applied rather than original.',
        },
        {
          q: 'Can board and batten be mixed with lap siding?',
          a: 'Yes, and it often is: battens on gables or an accent wall, lap on the body of the house.',
        },
        {
          q: 'What is the warranty?',
          a: 'A Lifetime Siding Limited Warranty covers the siding products, the installation workmanship, and labor on approved claims.',
        },
      ],
    },
  ],

  // UNKNOWN: the owner gave 7am to 5pm but not which days, and his current site
  // says Monday to Friday 9 to 5. Null until he confirms. Never guess hours.
  hours: null,

  // UNKNOWN as a number: the business opened in July 2024 but the owner has more
  // than 20 years in the trade. Experience is carried in the copy, not as a count.
  yearsInBusiness: null,
  licenseNumber: 'CGC058605',
  insured: true,

  // None supplied with text and a source URL, so no Review or aggregateRating schema.
  reviews: [],

  profiles: {
    gbp: null,
    facebook: 'https://www.facebook.com/people/Titan-Home-Exteriors/61591868018938/',
    instagram: null,
    yelp: null,
  },

  faqs: [
    {
      q: 'What is the minimum window project?',
      a: 'Window projects start at five windows. If you need fewer than that, or you only need a door, call us and we will tell you whether it is a job we can take.',
    },
    {
      q: 'Do you repair windows or replace broken glass?',
      a: 'No. We sell and install new windows and doors, so we do not take repair work, service calls, or glass-only jobs. If that is what you need, a repair company is the better call.',
    },
    {
      q: 'Do you work with renters?',
      a: 'We work with homeowners and with commercial property owners. If you rent the home, the person who owns it is the one who would need to contact us.',
    },
    {
      q: 'Which areas do you install in?',
      a: 'We install across seven counties: Hillsborough, Pinellas, Pasco, Polk, Manatee, Hernando, and Orange. Every town we drive to is listed on the contact page.',
    },
    {
      q: 'What does your warranty cover?',
      a: 'Windows and doors carry a Double Lifetime Limited Warranty: the products, one hundred percent of the labor on a covered claim, the installation workmanship, and glass seal failure and stress cracks. The certificate governs the full terms.',
    },
    {
      q: 'Can I finance the work?',
      a: 'Yes. We offer financing through Momnt, a licensed consumer lending platform, with zero percent promotional offers available to qualified buyers. Financing is subject to credit approval by a third-party lender. Not all applicants will qualify. This is not a commitment to lend.',
    },
    {
      q: 'Do you install on commercial buildings?',
      a: 'Yes. We do residential and commercial installations, so a commercial property owner gets the same products and the same crew as a homeowner.',
    },
    {
      q: 'How do I get an estimate?',
      a: 'Call us or send the form on this site. The estimate is free and it happens at the property, because the measurement is what an honest quote is built on.',
    },
  ],

  images: {
    hero: 'patio-windows-glass-door-after.jpg',
    about: 'french-doors-install-in-progress.jpg',
    gallery: [
      'bronze-sliding-glass-door-patio.jpg',
      'french-doors-install-in-progress.jpg',
      'lanai-sliding-glass-doors-after.jpg',
      'patio-windows-glass-door-after.jpg',
      'french-doors-interior-installed.jpg',
      'side-sliding-window-after.jpg',
    ],
    beforeAfter: [
      {
        before: 'lanai-screen-before.jpg',
        after: 'lanai-sliding-glass-doors-after.jpg',
        caption: 'Screened lanai enclosed with a sliding glass door',
      },
      {
        before: 'patio-screen-before.jpg',
        after: 'patio-windows-glass-door-after.jpg',
        caption: 'Screened patio converted to picture windows and a glass entry door',
      },
      {
        before: 'side-screen-panel-before.jpg',
        after: 'side-sliding-window-after.jpg',
        caption: 'Screen panel replaced with a sliding window',
      },
    ],
  },

  contactForm: {
    splitName: false,
    address: 'off',
    zip: 'required',
    // Repurposed as the homeowner question: homeowners only is the owner's hard rule,
    // so this is the answer that decides whether a lead is workable.
    timeframe: {
      label: 'Do you own this home?',
      options: ['Yes, I own this home', 'Commercial property', 'No, I rent'],
      required: true,
    },
    serviceDropdown: true,
    emailRequired: false,
    messageLabel: 'Tell us about your project',
    messagePlaceholder:
      'How many windows or doors, and anything else we should know. Window projects start at five windows.',
    submitLabel: 'Request My Free Estimate',
  },

  // The one dollar figure on the site. finePrint stays null until the client
  // supplies real terms; never invent them.
  offer: {
    headline: '$250 off any new window or door contract',
    detail:
      'Mention this offer when you book your free in-home estimate and we take 250 dollars off your signed window or door agreement.',
    finePrint: null,
  },

  // flip to false at launch, then redeploy
  prelaunch: true,

  domain: 'https://www.titanhomeexteriorsllc.com',
} satisfies SiteConfigInput

export default siteConfig
