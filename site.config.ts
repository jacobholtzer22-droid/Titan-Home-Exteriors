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
    hero: 'bronze-sliding-glass-door-patio.jpg',
    about: 'french-doors-install-in-progress.jpg',
    gallery: [
      'bronze-sliding-glass-door-patio.jpg',
      'french-doors-install-in-progress.jpg',
      'lanai-sliding-glass-doors-after.jpg',
      'patio-windows-glass-door-after.jpg',
      'french-doors-interior-installed.jpg',
      'side-sliding-window-after.jpg',
      'stucco-home-arched-windows-b.jpg',
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
