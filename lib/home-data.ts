// Real content only: victories, quotes, and FAQs are taken from the live
// site's Recent Victories and Testimonials pages. Do not invent outcomes.

export const VICTORIES = [
  { case: "People v. Tenbrink", outcome: "DUI reduced to wet reckless, even with the incident live streamed on YouTube" },
  { case: "People v. Kalfaian", outcome: "Drug possession dismissed after we demanded testing. The substance was sugar" },
  { case: "People v. Zakiyants", outcome: "Complete dismissal of PC 242 battery charge" },
  { case: "People v. Jendo", outcome: "DUI reduced to wet reckless to protect the client's immigration status" },
  { case: "People v. Pulido", outcome: "Dismissed: the case was filed after the statute of limitations had run" },
  { case: "People v. McGee", outcome: "Serious felony negotiated down from prison time to probation only" },
  { case: "People v. Preciado", outcome: "DUI with high BAC reduced to wet reckless" },
  { case: "People v. Mier", outcome: "Hit and run dismissed due to mistaken identity" },
  { case: "People v. Mitchell", outcome: "Military diversion granted, case dismissed upon completion of classes" },
  { case: "People v. Buitron", outcome: "Probation reinstated on a 6 year old bench warrant" },
];

export type PracticeArea = {
  title: string;
  href: string;
  icon: string;
  blurb: string;
  abbr: string;
  large?: boolean;
  wide?: boolean;
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    title: "DUI",
    abbr: "DUI",
    href: "/dui/",
    icon: "/wp-content/uploads/icon_dui_new.png",
    blurb:
      "DUI charges carry severe penalties in California and can impact your license, insurance, education, and career.",
  },
  {
    title: "Domestic Violence",
    abbr: "DV",
    href: "/domestic-violence/",
    icon: "/wp-content/uploads/icon_domestic_new.png",
    blurb:
      "These cases are rarely as straightforward as they seem, and the accused often have strong defenses.",
  },
  {
    title: "Weapons Charges",
    abbr: "GUN",
    href: "/guns/",
    icon: "/wp-content/uploads/icon_guns_new.png",
    blurb: "California's gun laws are strict. One missed rule can land you in criminal court.",
  },
  {
    title: "Drug Offenses",
    abbr: "DRG",
    href: "/drugs/",
    icon: "/wp-content/uploads/icon_drugs_new.png",
    blurb: "From possession to distribution, we defend every type of drug charge.",
  },
  {
    title: "Assault and Battery",
    abbr: "A&B",
    href: "/assault/",
    icon: "/wp-content/uploads/icon_assault_new.png",
    blurb: "Assault charges carry fines and jail time. Experienced representation matters.",
  },
  {
    title: "Theft and Robbery",
    abbr: "THF",
    href: "/theft/",
    icon: "/wp-content/uploads/icon_theft_new.png",
    blurb: "From shoplifting to robbery, we defend individuals charged with property crimes.",
  },
  {
    title: "Vandalism",
    abbr: "VAN",
    href: "/vandalism/",
    icon: "/wp-content/uploads/icon_vandalism_new.png",
    blurb: "Serious consequences under California law, especially above the damage threshold.",
  },
  {
    title: "Traffic Offenses",
    abbr: "TRF",
    href: "/traffic-offenses/",
    icon: "/wp-content/uploads/icon_traffic_new.png",
    blurb:
      "From reckless driving to license suspensions and hit and run, we defend the full range of serious traffic charges.",
  },
  {
    title: "Special Services",
    abbr: "SVC",
    href: "/practice-areas/",
    icon: "/wp-content/uploads/icon_special_new.png",
    blurb: "Pretrial diversion, bench warrant recalls, military diversion, and Veterans Court.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Charles was amazing, he really did a great job representing me and the whole time I was living out of state too. Overall all I had was a fine and a short online class.",
    author: "A. Auerbach",
    caseType: "Second DUI",
  },
  {
    quote:
      "Not only is he patient and understanding, but also thorough, and compassionate on a very personal level that allows you to trust him fully. He got me an outcome better than I could have expected.",
    author: "J. Rogers",
    caseType: "Criminal defense client",
  },
  {
    quote:
      "I received a traffic citation in Glendale and Farris Law Firm got it dismissed! I really appreciated their communication with me and their professionalism.",
    author: "B.S.",
    caseType: "Traffic citation, dismissed",
  },
  {
    quote:
      "Charles helped me get through my DUI case and to get it dropped to a lesser sentencing. A pro lawyer and a great human. Thank you",
    author: "GokS",
    caseType: "DUI reduced",
  },
  {
    quote:
      "Charles and his team are absolutely lovely to work with! They are responsive, thoughtful and great at what they do. They were able to get a speeding ticket dismissed. I am so very grateful for their hard work. I can not recommend them enough.",
    author: "P. DiVito",
    caseType: "Speeding ticket dismissed",
  },
  {
    quote:
      "Charles was incredibly helpful in walking me through the process to get a medical suspension lifted on my drivers license. He was very thoughtful and always very easy to get a hold of.",
    author: "A. McGanty",
    caseType: "License suspension lifted",
  },
  {
    quote:
      "I highly recommend Charles Farris. He was very helpful and kept to his promises. Always willing to work hard for you. He will always be my lawyer.",
    author: "R. Garcia",
    caseType: "Criminal defense client",
  },
];

export const FAQS = [
  {
    q: "What should I do if the police arrest me in Orange County or Los Angeles?",
    a: "If you are arrested, remain calm and request to speak with a criminal defense lawyer from Farris Law Firm. You do not have to say anything during the arrest process. If you're unable to speak with a lawyer at the moment, call us as soon as possible after the fact.",
  },
  {
    q: "How can an Orange County or Los Angeles criminal defense lawyer help me?",
    a: "Our team will use everything at our disposal to attempt to have the case dismissed, negotiate a favorable plea deal, or proceed to jury trial if necessary. It is our job to help you navigate what may be one of the worst experiences of your life. We assist you in moving past this with minimal damage to your career, family, and finances.",
  },
  {
    q: "Can my criminal record be expunged?",
    a: 'Yes, your criminal record can be "expunged" or in other words "erased" in certain circumstances. Arrest and court records can also be sealed. Our team will give you a free consultation to explain all of your options.',
  },
  {
    q: "How do I schedule a consultation with Farris Law Firm?",
    a: "Call our office at (818) 861-0861 or use the free case review form on this site. Phone consultations are free, 24/7/365, and payment plans are available. You have nothing to lose by calling to get answers today.",
  },
];

export const WHY_CHOOSE = [
  {
    title: "We know your courthouse",
    body: "Our Aliso Viejo office sits minutes from Harbor Justice Center and all four Orange County criminal courthouses, and our Burbank office serves the Los Angeles County and San Fernando Valley courts. Either way, we know the local rules, the prosecutors, and the judges.",
  },
  {
    title: "Personalized attention",
    body: "Unlike high-volume firms, we intentionally limit the number of cases we take so each client gets focused, detailed attention and a defense tailored to their circumstances.",
  },
  {
    title: "You stay informed",
    body: "We educate and empower clients throughout the legal process. You are never left in the dark about the progress and direction of your case.",
  },
  {
    title: "No pressure tactics",
    body: "No scare tactics and no high-pressure sales. We give you a clear understanding of your options so you can make informed decisions. If we cannot make a difference in your case, we will tell you honestly.",
  },
  {
    title: "Proven results",
    body: "From reduced charges to complete dismissals, our track record shows what focused representation achieves. Read our recent victories.",
  },
];

export const BADGES = [
  { src: "/wp-content/uploads/california-bar.png", alt: "State Bar of California" },
  {
    src: "/wp-content/uploads/avvo.png",
    alt: "Avvo — 5 stars, Charles P. Farris",
  },
  { src: "/wp-content/uploads/google-screened.png", alt: "Google Screened" },
  {
    src: "/wp-content/uploads/san-fernand-valley-bar.png",
    alt: "San Fernando Valley Bar Association",
  },
  { src: "/wp-content/uploads/provisors.png", alt: "ProVisors" },
];
