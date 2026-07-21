export const CALBAR = {
  number: "324613",
  profileUrl: "https://apps.calbar.ca.gov/attorney/Licensee/Detail/324613",
};

export const SITE = {
  name: "Farris Law Firm",
  url: "https://www.farrisfirm.com",
  // Live-site number kept for parity. Do not change until the client settles
  // the (818) vs (323) NAP decision recorded in the gameplan.
  phone: "(818) 861-0861",
  phoneHref: "tel:+18188610861",
  tagline: "Criminal Defense in Orange County and Los Angeles",
  // mapsUrl is the stable CID link to each office's Google Business Profile
  // (verified 2026-07-16). mapsEmbed is the keyless iframe source.
  offices: [
    {
      label: "Orange County",
      street: "15 Enterprise, Suite 250",
      city: "Aliso Viejo",
      state: "CA",
      zip: "92656",
      mapsUrl: "https://maps.google.com/?cid=13044665118103328841",
      mapsEmbed:
        "https://www.google.com/maps?q=Farris+Law+Firm,+15+Enterprise+Ste+250,+Aliso+Viejo,+CA+92656&output=embed",
    },
    {
      label: "Burbank",
      street: "300 N. Third St., Suite 116",
      city: "Burbank",
      state: "CA",
      zip: "91502",
      mapsUrl: "https://maps.google.com/?cid=4157033397039245050",
      mapsEmbed:
        "https://www.google.com/maps?q=Farris+Law+Firm,+300+N+3rd+St,+Burbank,+CA+91502&output=embed",
    },
  ],
};

export const NAV = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us/",
    children: [
      { label: "Reviews", href: "/about/reviews/" },
      { label: "Testimonials", href: "/about/testimonials/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
  },
  {
    label: "Practice Areas",
    href: "/practice-areas/",
    children: [
      { label: "DUI", href: "/dui/" },
      { label: "Assault and Battery", href: "/assault/" },
      { label: "Aggravated Assault", href: "/aggravated-assault/" },
      { label: "Domestic Violence", href: "/domestic-violence/" },
      { label: "Drug Offenses", href: "/drugs/" },
      { label: "Weapons Charges", href: "/guns/" },
      { label: "Sex Crimes", href: "/sex-crimes/" },
      { label: "Theft", href: "/theft/" },
      { label: "Shoplifting", href: "/shoplifting/" },
      { label: "Burglary", href: "/burglary/" },
      { label: "Receiving Stolen Property", href: "/receiving-stolen-property/" },
      { label: "Criminal Threats", href: "/criminal-threats/" },
      { label: "Drunk in Public", href: "/drunk-in-public/" },
      { label: "Hit and Run", href: "/hit-and-run/" },
      { label: "Juvenile Defense", href: "/juvenile-defense/" },
      { label: "Robbery", href: "/robbery/" },
      { label: "Traffic Offenses", href: "/traffic-offenses/" },
      { label: "Vandalism", href: "/vandalism/" },
      { label: "Bench Warrants", href: "/bench-warrants-failure-to-appear/" },
      { label: "Probation Violations", href: "/probation-violations/" },
      { label: "Expungement", href: "/expungement/" },
      { label: "Military Diversion", href: "/military-diversion/" },
      { label: "White Collar & Fraud", href: "/white-collar-crimes/" },
      { label: "Embezzlement", href: "/embezzlement/" },
      { label: "Identity Theft", href: "/identity-theft/" },
      { label: "Credit Card Fraud", href: "/credit-card-fraud/" },
      { label: "Forgery", href: "/forgery/" },
      { label: "Extortion", href: "/extortion/" },
    ],
  },
  {
    label: "Locations",
    href: "/locations/",
    children: [
      { label: "Orange County DUI", href: "/orange-county-dui-lawyer/" },
      { label: "Orange County Domestic Violence", href: "/orange-county-domestic-violence-lawyer/" },
      { label: "Orange County Gun Charges", href: "/orange-county-gun-charges-lawyer/" },
      { label: "Los Angeles DUI", href: "/los-angeles-dui-lawyer/" },
      { label: "Aliso Viejo", href: "/aliso-viejo-criminal-defense-lawyer/" },
      { label: "Santa Ana", href: "/santa-ana-criminal-defense-lawyer/" },
      { label: "Newport Beach", href: "/newport-beach-criminal-defense-lawyer/" },
      { label: "Irvine", href: "/irvine-criminal-defense-lawyer/" },
      { label: "Anaheim", href: "/anaheim-criminal-defense-lawyer/" },
      { label: "Huntington Beach", href: "/huntington-beach-criminal-defense-lawyer/" },
      { label: "Mission Viejo", href: "/mission-viejo-criminal-defense-lawyer/" },
      { label: "Costa Mesa", href: "/costa-mesa-criminal-defense-lawyer/" },
      { label: "Fullerton", href: "/fullerton-criminal-defense-lawyer/" },
      { label: "Tustin", href: "/tustin-criminal-defense-lawyer/" },
      { label: "Westminster", href: "/westminster-criminal-defense-lawyer/" },
      { label: "Los Angeles", href: "/los-angeles-criminal-defense-lawyer/" },
      { label: "Long Beach", href: "/long-beach-criminal-defense-lawyer/" },
      { label: "Burbank", href: "/burbank-criminal-defense-lawyer/" },
      { label: "Van Nuys", href: "/van-nuys-criminal-defense-lawyer/" },
      { label: "Glendale", href: "/glendale-criminal-defense-attorney/" },
      { label: "San Fernando", href: "/san-fernando-criminal-defense-lawyer/" },
      { label: "Santa Clarita", href: "/santa-clarita-criminal-defense-lawyer/" },
      { label: "Pasadena", href: "/pasadena-criminal-defense-attorney/" },
    ],
  },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];
