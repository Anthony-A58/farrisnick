// New location pages (not in the WordPress migration). Each entry renders
// through components/templates/LocationPage.tsx. Copy is unique per city;
// courthouse assignments should be confirmed by the attorney before launch.

export type LocationEntry = {
  slug: string;
  city: string;
  county: "Orange County" | "Los Angeles County";
  title: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  courthouse: {
    name: string;
    address: string;
    note: string;
  };
  local: { heading: string; body: string[] };
  faqs: { q: string; a: string }[];
  image: string;
};

export const LOCATIONS: LocationEntry[] = [
  {
    slug: "aliso-viejo-criminal-defense-lawyer",
    city: "Aliso Viejo",
    county: "Orange County",
    title: "Aliso Viejo Criminal Defense Lawyer | Farris Law Firm",
    metaDescription:
      "Facing criminal charges in Aliso Viejo? Farris Law Firm is headquartered in Aliso Viejo, minutes from Harbor Justice Center. Free phone consultations 24/7. Payment plans available.",
    h1: "Aliso Viejo Criminal Defense Lawyer",
    intro: [
      "Farris Law Firm is headquartered in Aliso Viejo, and this city is home ground for our practice. If you or a family member has been arrested or received a notice to appear anywhere in South Orange County, you can sit down with a criminal defense lawyer just minutes from your neighborhood instead of driving to a downtown office tower.",
      "Founding attorney Charles Farris has managed thousands of misdemeanor and felony cases. Because we intentionally limit our caseload, your case gets prepared by the attorney you hired, not handed to an associate you have never met.",
    ],
    courthouse: {
      name: "Harbor Justice Center",
      address: "4601 Jamboree Rd, Newport Beach, CA 92660",
      note: "Criminal cases arising in Aliso Viejo and most of South Orange County are typically heard at Harbor Justice Center. Our office is a short drive up the 73, and we appear in these courtrooms week in and week out.",
    },
    local: {
      heading: "Local Counsel for Aliso Viejo and South Orange County",
      body: [
        "Most Aliso Viejo cases we see begin with an Orange County Sheriff's Department contact: a DUI stop on the 73 toll road or Aliso Creek Road, a domestic disturbance call, a shoplifting detention at Town Center, or a warrant that surfaces during a routine traffic stop. What happens in the first days after that contact matters. Statements, chemical tests, and early court dates can shape the whole case.",
        "We also represent clients from the surrounding communities of Laguna Niguel, Laguna Hills, Mission Viejo, Lake Forest, and Laguna Beach. Because we know the local prosecutors and judges at Harbor Justice Center, we can often resolve matters quietly, through reductions, diversion, or outright dismissal, before they upend your career or family.",
      ],
    },
    faqs: [
      {
        q: "Where will my Aliso Viejo criminal case be heard?",
        a: "Most criminal cases arising in Aliso Viejo are heard at Harbor Justice Center in Newport Beach. Serious felonies may be transferred to the Central Justice Center in Santa Ana. We appear at both courthouses regularly and can confirm your assigned court from your citation or booking paperwork in a free phone call.",
      },
      {
        q: "Do I have to appear in court myself for a misdemeanor?",
        a: "In many California misdemeanor cases, Penal Code 977 allows your attorney to appear for you, so you may not need to miss work or school for routine hearings. There are exceptions, including most DUI arraignments where courts want the defendant present and domestic violence cases. We will tell you exactly what your case requires.",
      },
      {
        q: "I was arrested but released without charges. Am I in the clear?",
        a: "Not necessarily. The Orange County District Attorney can file charges later, often right up against the statute of limitations. The smart move is to have a defense lawyer contact the DA early. Sometimes we can influence the filing decision before charges ever exist, which is the cheapest and quietest way to win a case.",
      },
      {
        q: "How much does a criminal defense lawyer cost in Aliso Viejo?",
        a: "We quote a flat fee up front based on the charge and the stage of the case, and payment plans are available. The phone consultation is free, any hour, any day, so you can get a real number before you commit to anything.",
      },
    ],
    image: "/images/generated/aliso-viejo-criminal-defense-lawyer.webp",
  },
  {
    slug: "santa-ana-criminal-defense-lawyer",
    city: "Santa Ana",
    county: "Orange County",
    title: "Santa Ana Criminal Defense Lawyer | Farris Law Firm",
    metaDescription:
      "Charged with a crime in Santa Ana? Farris Law Firm defends felonies and misdemeanors at the Central Justice Center. Free phone consultations 24/7. Payment plans available.",
    h1: "Santa Ana Criminal Defense Lawyer",
    intro: [
      "Santa Ana is the county seat and the center of gravity for criminal justice in Orange County. The Central Justice Center, the District Attorney's main office, and the county jail all sit within a few blocks of each other downtown. If your case lands here, you want a lawyer who works these hallways constantly.",
      "Farris Law Firm defends clients in Santa Ana against everything from misdemeanor theft and DUI to serious and violent felonies. We prepare every case as if it is going to trial, which is exactly why so many of them never need to.",
    ],
    courthouse: {
      name: "Central Justice Center",
      address: "700 Civic Center Drive West, Santa Ana, CA 92701",
      note: "The Central Justice Center handles Santa Ana cases and most serious felony matters from across Orange County. Arraignments, preliminary hearings, and felony trials all happen in this building.",
    },
    local: {
      heading: "Defending Cases at the Center of Orange County's Court System",
      body: [
        "Felony cases from across Orange County funnel into the Central Justice Center, which means the prosecutors here handle the county's most serious files. Going up against them with an unprepared or overloaded lawyer is a mistake people pay for over years. We limit our caseload so every client's file gets genuine attorney attention: the police reports read line by line, the body camera footage actually watched, the suppression issues actually litigated.",
        "We represent clients arrested by the Santa Ana Police Department and the Orange County Sheriff's Department, as well as people from Tustin, Orange, Garden Grove, and Fountain Valley whose cases are assigned to the Central Justice Center.",
      ],
    },
    faqs: [
      {
        q: "My family member is in the Orange County Jail in Santa Ana. What do I do first?",
        a: "Call us before you pay a bail bondsman. Depending on the charge, we may be able to argue for release on their own recognizance or a bail reduction at the first court appearance, which can save your family thousands of dollars. We take calls 24/7 and can often get information about charges and court dates the same day.",
      },
      {
        q: "What is the difference between the Central Justice Center and the other Orange County courthouses?",
        a: "Orange County spreads criminal cases across four justice centers: Central in Santa Ana, Harbor in Newport Beach, North in Fullerton, and West in Westminster. Misdemeanors are generally heard where the offense occurred, while most serious felonies end up at Central. We appear at all four.",
      },
      {
        q: "Can a felony charge in Santa Ana be reduced to a misdemeanor?",
        a: "Often, yes. Many California offenses are wobblers, meaning they can be charged and sentenced as either a felony or a misdemeanor. Through negotiation, motion practice under Penal Code 17(b), or completion of programs, we regularly get felony exposure reduced. The earlier we get involved, the more options exist.",
      },
      {
        q: "Do you handle cases in Spanish?",
        a: "Court proceedings provide certified interpreters, and we make sure our clients and their families understand every step of the case regardless of language. Call us and we will make the process work for you.",
      },
    ],
    image: "/images/generated/santa-ana-criminal-defense-lawyer.webp",
  },
  {
    slug: "newport-beach-criminal-defense-lawyer",
    city: "Newport Beach",
    county: "Orange County",
    title: "Newport Beach Criminal Defense Lawyer | Farris Law Firm",
    metaDescription:
      "Arrested in Newport Beach? Farris Law Firm defends DUI and criminal cases at Harbor Justice Center, minutes from our Aliso Viejo office. Free 24/7 phone consultations.",
    h1: "Newport Beach Criminal Defense Lawyer",
    intro: [
      "Newport Beach generates a steady stream of criminal cases that do not match the city's postcard image: DUI arrests coming out of the peninsula bars, boating under the influence in the harbor, domestic disputes, and professionals caught in one bad night that now threatens a license or a security clearance.",
      "Farris Law Firm defends these cases at Harbor Justice Center, which sits right in Newport Beach on Jamboree Road. Our Aliso Viejo office is minutes away, and attorney Charles Farris knows the judges and prosecutors who will decide how your case ends.",
    ],
    courthouse: {
      name: "Harbor Justice Center",
      address: "4601 Jamboree Rd, Newport Beach, CA 92660",
      note: "Harbor Justice Center hears cases from Newport Beach, Irvine, Costa Mesa, Laguna Beach, and most of South Orange County. If you were arrested in Newport Beach, this is almost certainly where you will appear.",
    },
    local: {
      heading: "When One Night in Newport Threatens Everything You Built",
      body: [
        "Many of our Newport Beach clients are physicians, real estate professionals, financial advisors, contractors, and business owners. For them, the criminal penalty is only half the problem: a conviction can trigger professional license discipline, cost a DRE or FINRA registration, or end a career that took decades to build. We defend the criminal case with those collateral consequences in front of mind, structuring outcomes that protect licenses and livelihoods.",
        "Newport Beach Police Department cases move quickly, and DUI cases in particular come with a separate 10 day DMV deadline to save your driver's license. Call us before that window closes and we will handle both the court case and the DMV hearing.",
      ],
    },
    faqs: [
      {
        q: "I got a DUI in Newport Beach. Will I lose my license?",
        a: "Not automatically. You have 10 days from the arrest to request a DMV administrative hearing, which pauses the suspension until the hearing is decided. We request the hearing, obtain the evidence, and fight both the DMV action and the criminal case. Many clients keep driving throughout, sometimes with a restricted or interlock license.",
      },
      {
        q: "Will a conviction affect my professional license?",
        a: "It can. Medical, nursing, real estate, securities, and contractor licensing boards all ask about criminal cases, and some convictions trigger mandatory reporting. We structure defense strategy around your license from day one, aiming for outcomes such as reductions, diversion, or dismissals that minimize what you ever have to report.",
      },
      {
        q: "What happens at my first court date at Harbor Justice Center?",
        a: "The first appearance is the arraignment: charges are formally presented and a plea is entered. In many misdemeanor cases we can appear for you under Penal Code 977 so you never have to set foot in the courthouse. We almost always enter not guilty at arraignment so we can obtain the evidence and negotiate from strength.",
      },
      {
        q: "Can you handle boating under the influence (BUI) cases?",
        a: "Yes. Harbors and Navigation Code 655 cases out of Newport Harbor work much like DUI cases, with chemical test and reasonable suspicion issues we know how to attack. Do not assume a BUI is minor; it is a criminal charge with real consequences.",
      },
    ],
    image: "/images/generated/newport-beach-criminal-defense-lawyer.webp",
  },
  {
    slug: "irvine-criminal-defense-lawyer",
    city: "Irvine",
    county: "Orange County",
    title: "Irvine Criminal Defense Lawyer | Farris Law Firm",
    metaDescription:
      "Facing charges in Irvine? Farris Law Firm defends students, professionals, and families across Irvine at Harbor Justice Center. Free phone consultations 24/7. Payment plans.",
    h1: "Irvine Criminal Defense Lawyer",
    intro: [
      "Irvine may be one of America's safest cities, but its police department is famously proactive, and ordinary people get arrested here every day: a UCI student after a party, a commuter stopped on the 405, a spouse after a heated argument a neighbor overheard.",
      "Farris Law Firm defends Irvine cases from our Aliso Viejo office a few miles south. We bring the same preparation to a first-offense misdemeanor that most firms save for felony trials, because for our clients, any conviction is a life problem.",
    ],
    courthouse: {
      name: "Harbor Justice Center",
      address: "4601 Jamboree Rd, Newport Beach, CA 92660",
      note: "Criminal cases arising in Irvine are generally heard at Harbor Justice Center, a short drive from both Irvine and our office. Serious felonies may be assigned to the Central Justice Center in Santa Ana.",
    },
    local: {
      heading: "Defending Students, Professionals, and Families in Irvine",
      body: [
        "A large share of our Irvine clients are students and young professionals facing their first ever police contact: DUI, drug possession, petty theft, or fake ID cases. California offers powerful tools for exactly these situations, including judicial diversion under Penal Code 1001.95, deferred entry of judgment for drug charges, and military diversion for service members. Used correctly, these programs can end a case with no conviction at all.",
        "For UCI and Irvine Valley College students, we also manage the school side: student conduct proceedings have separate deadlines and lower standards of proof than criminal court, and an unmanaged school case can do as much damage as the charge itself.",
      ],
    },
    faqs: [
      {
        q: "I am a UCI student. Will my arrest affect my enrollment or visa?",
        a: "It can. Universities run their own conduct processes, and for international students some outcomes carry immigration consequences. We defend the criminal case with your enrollment and immigration status in mind, and we push for resolutions such as diversion or dismissal that keep your record clean for both the school and USCIS.",
      },
      {
        q: "What is judicial diversion and do I qualify?",
        a: "Penal Code 1001.95 lets a judge pause most misdemeanor cases while you complete conditions like classes or community service. Finish, and the case is dismissed and the arrest is deemed to have never occurred for most purposes. Eligibility depends on the charge and your history; DUI is excluded, but many common Irvine charges qualify. We will assess you honestly in a free call.",
      },
      {
        q: "The police want to talk to me about an investigation. Should I go in?",
        a: "Not without a lawyer. Pre-filing investigations are where cases are won quietly. We contact the detective on your behalf, protect you from making statements that fill gaps in their case, and often present evidence that stops charges from being filed at all.",
      },
      {
        q: "How fast can you start on my case?",
        a: "Immediately. Phone consultations are free and available 24/7/365, and we can typically begin work the same day you retain us, including appearing at an arraignment on short notice.",
      },
    ],
    image: "/images/generated/irvine-criminal-defense-lawyer.webp",
  },
  {
    slug: "anaheim-criminal-defense-lawyer",
    city: "Anaheim",
    county: "Orange County",
    title: "Anaheim Criminal Defense Lawyer | Farris Law Firm",
    metaDescription:
      "Arrested in Anaheim? Farris Law Firm defends DUI, theft, assault, and felony cases heard at the North Justice Center. Free phone consultations 24/7. Payment plans available.",
    h1: "Anaheim Criminal Defense Lawyer",
    intro: [
      "Anaheim is Orange County's biggest city, and between the resort district, the stadium, the convention center, and the 5, 57, and 91 freeways, it produces more arrests than anywhere else in the county: DUI, public intoxication, theft, assault, and serious felony cases alike.",
      "Farris Law Firm defends Anaheim cases with the preparation of a boutique firm and the local knowledge of attorneys who work Orange County courtrooms every week. Free phone consultations, 24/7/365, and payment plans that make real defense affordable.",
    ],
    courthouse: {
      name: "North Justice Center",
      address: "1275 N Berkeley Ave, Fullerton, CA 92832",
      note: "Criminal cases arising in Anaheim are generally heard at the North Justice Center in Fullerton. Serious felonies may be transferred to the Central Justice Center in Santa Ana. We appear at both.",
    },
    local: {
      heading: "Big City Caseloads Need a Firm That Does Not Run One",
      body: [
        "Because Anaheim generates so many cases, the courtrooms that serve it move fast, and defendants with overloaded lawyers get processed rather than defended. Our model is the opposite: a deliberately limited caseload so that every police report gets read, every video gets watched, and every suppression issue gets litigated. That is how cases get reduced or dismissed rather than pled out at the first offer.",
        "We regularly defend visitors as well as residents: people arrested during a Disneyland trip, a concert, or an Angels game who live hours away or out of state. In many misdemeanor cases we can appear for you under Penal Code 977, meaning you may never have to return to California for court.",
      ],
    },
    faqs: [
      {
        q: "I was arrested while visiting Anaheim but live out of state. Do I have to come back for court?",
        a: "Often no. For most misdemeanors, Penal Code 977 lets your attorney appear on your behalf. We handle the entire case while you stay home, keeping you updated at every step. For felonies, personal appearance rules are stricter, but we can often arrange limited appearances.",
      },
      {
        q: "My charge came from the resort district. Does that change anything?",
        a: "Resort district cases often involve private security detentions, extensive camera coverage, and loss prevention statements. That evidence can help as much as hurt: video frequently contradicts the police narrative. We pull all of it before deciding how to fight.",
      },
      {
        q: "What penalties am I facing for a first DUI in Anaheim?",
        a: "A typical first offense DUI carries probation, fines around two thousand dollars, DUI school, and a license suspension, but no mandatory jail in most cases. Outcomes vary with facts like BAC and accidents. Our goal is always reduction or dismissal first; see our recent victories for real examples.",
      },
      {
        q: "Can you help with a warrant from an old Anaheim case?",
        a: "Yes. We regularly recall bench warrants at the North Justice Center, often without you appearing in custody. Handling the warrant proactively, before a traffic stop turns into an arrest, is always the better path. Learn more on our bench warrants page.",
      },
    ],
    image: "/images/generated/anaheim-criminal-defense-lawyer.webp",
  },
  {
    slug: "los-angeles-criminal-defense-lawyer",
    city: "Los Angeles",
    county: "Los Angeles County",
    title: "Los Angeles Criminal Defense Lawyer | Farris Law Firm",
    metaDescription:
      "Facing criminal charges in Los Angeles? Farris Law Firm defends misdemeanors and felonies across LA County courthouses. Free phone consultations 24/7. Payment plans available.",
    h1: "Los Angeles Criminal Defense Lawyer",
    intro: [
      "Los Angeles County runs the largest criminal court system in the United States. Cases move through dozens of courthouses, each with its own judges, prosecutors, and unwritten rules. The difference between a lawyer who knows the building and one who does not shows up in every hearing.",
      "Farris Law Firm defends clients across Los Angeles from our Burbank office, with founding attorney Charles Farris bringing experience from thousands of misdemeanor and felony cases throughout LA County.",
    ],
    courthouse: {
      name: "Clara Shortridge Foltz Criminal Justice Center",
      address: "210 W Temple St, Los Angeles, CA 90012",
      note: "Downtown's main criminal courthouse handles serious felony cases from across the city. Many LA misdemeanors are heard at the Metropolitan Courthouse on Hill Street, and regional courthouses like Van Nuys, Burbank, and Glendale serve their own areas. We appear throughout the county.",
    },
    local: {
      heading: "One Firm for the Whole LA County Court System",
      body: [
        "Where your case is heard matters. The same charge can play out very differently at the Foltz building downtown, the Metropolitan Courthouse, or a branch court in the Valley, because filing policies and courtroom culture differ. We know these differences because we work these courts constantly from our Burbank office, and we use them: choosing when to negotiate, when to file motions, and when to push to trial based on where the case actually sits.",
        "We defend the full range of charges across Los Angeles: DUI, domestic violence, assault, theft and robbery, drug offenses, weapons charges, and vandalism, along with bench warrant recalls and expungements for old cases. If your matter is in the San Fernando Valley, see our dedicated pages for Burbank, Van Nuys, Glendale, and San Fernando.",
      ],
    },
    faqs: [
      {
        q: "Which courthouse will my Los Angeles case be in?",
        a: "It depends on where the alleged offense occurred and its severity. Serious felonies from across the city often go to the Foltz Criminal Justice Center downtown, while misdemeanors are typically heard at the Metropolitan Courthouse or a regional branch. Read your citation or release paperwork to us during a free call and we will tell you exactly where and when to appear, or whether we can appear for you.",
      },
      {
        q: "How is the LA City Attorney different from the District Attorney?",
        a: "In the city of Los Angeles, misdemeanors are prosecuted by the City Attorney while felonies are handled by the LA County District Attorney. They have different policies on diversion, reductions, and dismissals, and an effective defense strategy accounts for who is on the other side of the table.",
      },
      {
        q: "Do you handle pre-filing representation in LA?",
        a: "Yes, and it is some of the most valuable work we do. If detectives are calling you or you have been told a case is under review, we intervene before charges are filed, presenting evidence and context that can lead to no filing at all. A case that never gets filed needs no defense and leaves no record.",
      },
      {
        q: "Can old Los Angeles convictions be cleared?",
        a: "Most convictions where probation was completed can be expunged under Penal Code 1203.4, and many arrest records can be sealed. We handle expungements throughout LA County; see our expungement page and our guide on how long the process takes.",
      },
    ],
    image: "/images/generated/los-angeles-criminal-defense-lawyer.webp",
  },
  {
    slug: "huntington-beach-criminal-defense-lawyer",
    city: "Huntington Beach",
    county: "Orange County",
    title: "Huntington Beach Criminal Defense Lawyer | Farris Law Firm",
    metaDescription:
      "Arrested in Huntington Beach? Farris Law Firm defends DUI, public intoxication, assault, and felony charges heard at the West Justice Center. Free 24/7 phone consultations.",
    h1: "Huntington Beach Criminal Defense Lawyer",
    intro: [
      "Surf City generates a very specific docket: DUI arrests coming off Main Street and PCH, public intoxication and fight cases from the downtown bar scene, and holiday enforcement waves around the 4th of July and the air show that sweep up locals and visitors alike.",
      "Farris Law Firm defends Huntington Beach cases with the local knowledge these courtrooms reward. Free phone consultations 24/7/365, flat fees quoted up front, and payment plans available.",
    ],
    courthouse: {
      name: "West Justice Center",
      address: "8141 13th St, Westminster, CA 92683",
      note: "Criminal cases arising in Huntington Beach are generally heard at the West Justice Center in Westminster, about fifteen minutes from downtown HB. Serious felonies may be moved to the Central Justice Center in Santa Ana.",
    },
    local: {
      heading: "Defense for a Beach City That Polices Hard",
      body: [
        "Huntington Beach PD polices the downtown corridor aggressively, especially on summer weekends and event days. Many of our HB cases start as something small, a bar argument, an open container, a checkpoint stop, that turned into a night in custody and a court date. The good news: cases born from crowded, chaotic scenes are often built on shaky identifications and rushed police work, and that is exactly where a prepared defense finds leverage.",
        "We represent Huntington Beach residents and visitors on everything from DUI and public intoxication to assault, theft, and felony charges, and we regularly resolve first-offense cases through reductions and diversion that keep records clean.",
      ],
    },
    faqs: [
      {
        q: "I was arrested for public intoxication downtown. Is that a real criminal charge?",
        a: "Yes. Penal Code 647(f) is a misdemeanor that shows on background checks like any other. It is also very defensible: the law requires more than having been drinking, and crowded bar scenes produce weak evidence. First offenders are frequently good candidates for diversion or outright dismissal.",
      },
      {
        q: "I got a DUI on PCH. What deadlines am I facing?",
        a: "Two clocks start at arrest: the criminal case at the West Justice Center and a 10 day window to request a DMV hearing to protect your license. Call us within those 10 days and we handle both, including appearing for you at most misdemeanor court dates.",
      },
      {
        q: "I live out of state and was arrested while visiting HB. Do I have to fly back?",
        a: "Usually not for a misdemeanor. Penal Code 977 lets your attorney appear on your behalf at most hearings. We defend visitors regularly and keep the whole case moving while you stay home.",
      },
      {
        q: "Will a fight outside a bar be charged as assault or battery?",
        a: "It can be either or both: assault under PC 240 does not require contact, battery under PC 242 does, and injuries can escalate charges to felonies. Mutual combat and self-defense are real defenses in bar cases, and camera footage often supports them. Do not plead before someone watches the video.",
      },
    ],
    image: "/images/generated/huntington-beach-criminal-defense-lawyer.webp",
  },
  {
    slug: "costa-mesa-criminal-defense-lawyer",
    city: "Costa Mesa",
    county: "Orange County",
    title: "Costa Mesa Criminal Defense Lawyer | Farris Law Firm",
    metaDescription:
      "Facing charges in Costa Mesa? Farris Law Firm defends DUI, theft, and criminal cases at Harbor Justice Center, minutes from our Aliso Viejo office. Free 24/7 consultations.",
    h1: "Costa Mesa Criminal Defense Lawyer",
    intro: [
      "Between the Triangle's nightlife, South Coast Plaza's loss prevention teams, and the 55 and 405 interchanges, Costa Mesa produces a steady mix of DUI, theft, and drug cases, most of them involving otherwise ordinary people having the worst week of their year.",
      "Farris Law Firm defends Costa Mesa cases at Harbor Justice Center from our Aliso Viejo office just down the 73. Free phone consultations 24/7/365 and payment plans available.",
    ],
    courthouse: {
      name: "Harbor Justice Center",
      address: "4601 Jamboree Rd, Newport Beach, CA 92660",
      note: "Criminal cases arising in Costa Mesa are generally heard at Harbor Justice Center in Newport Beach, minutes from the city line. Serious felonies may be assigned to the Central Justice Center in Santa Ana.",
    },
    local: {
      heading: "Shoplifting Cases at South Coast Plaza Deserve a Real Defense",
      body: [
        "A large share of our Costa Mesa files begin at South Coast Plaza: a detention by loss prevention, a citation or arrest by Costa Mesa PD, and a court date that feels wildly out of proportion to what happened. California law gives first-time theft defendants strong options, including civil compromise, judicial diversion, and reductions that keep a conviction off your record. Retail theft cases also come with extensive video and witness records that frequently do not say what the police report says.",
        "We defend the full range of Costa Mesa charges beyond theft: DUI out of the Triangle and 19th Street corridors, drug possession, domestic violence, and felonies. Early, prepared defense is what turns these cases into footnotes instead of records.",
      ],
    },
    faqs: [
      {
        q: "Store security detained me at South Coast Plaza. Was that even legal?",
        a: "Merchants have a limited privilege to detain suspected shoplifters, but it has boundaries, and loss prevention teams overstep them regularly. How the detention and search happened can shape suppression arguments and negotiation leverage. Tell us exactly what happened in a free call.",
      },
      {
        q: "The store says I owe them money on top of the criminal case. What is that?",
        a: "That is a civil demand letter, separate from the criminal case. Do not pay it or respond before talking to a lawyer: payment does not resolve the criminal charge, and the two need to be handled in the right order and sometimes leveraged together through civil compromise.",
      },
      {
        q: "Can a first-time shoplifting charge really be dismissed?",
        a: "Very often, yes. Between judicial diversion under PC 1001.95, informal resolutions, and negotiated reductions, most first-time Costa Mesa theft defendants we represent end the case without a theft conviction. See our recent victories and our theft crimes page for how.",
      },
      {
        q: "Which court will my Costa Mesa DUI go to?",
        a: "Harbor Justice Center in Newport Beach, in almost all cases. Remember the separate 10 day DMV deadline to protect your license; we handle both tracks.",
      },
    ],
    image: "/images/generated/costa-mesa-criminal-defense-lawyer.webp",
  },
  {
    slug: "mission-viejo-criminal-defense-lawyer",
    city: "Mission Viejo",
    county: "Orange County",
    title: "Mission Viejo Criminal Defense Lawyer | Farris Law Firm",
    metaDescription:
      "Charged in Mission Viejo? Farris Law Firm, based minutes away in Aliso Viejo, defends DUI, domestic violence, juvenile, and felony cases. Free 24/7 phone consultations.",
    h1: "Mission Viejo Criminal Defense Lawyer",
    intro: [
      "In a community like Mission Viejo, a criminal case is not just a legal problem: it is a neighborhood problem, a school problem, and a career problem. Discretion and speed matter as much as courtroom skill.",
      "Farris Law Firm sits minutes away in Aliso Viejo, and we defend Mission Viejo families quietly and effectively: parents facing DUI or domestic violence allegations, teenagers in juvenile proceedings, and professionals contacted by detectives who need counsel before charges exist.",
    ],
    courthouse: {
      name: "Harbor Justice Center",
      address: "4601 Jamboree Rd, Newport Beach, CA 92660",
      note: "Criminal cases arising in Mission Viejo and the Saddleback Valley are generally heard at Harbor Justice Center. Mission Viejo is policed by the Orange County Sheriff's Department under contract.",
    },
    local: {
      heading: "Quiet, Early Resolutions for Saddleback Valley Families",
      body: [
        "Mission Viejo cases usually begin with an Orange County Sheriff's deputy: a DUI stop on Crown Valley or Marguerite, a domestic disturbance call that ends in a mandatory arrest, or a call from a school resource officer about your child. In each of those situations, the window between arrest and filing is where the most good can be done, and we work that window hard: contacting the DA, presenting context, and pushing for non-filing, diversion, or reduced charges before the case hardens.",
        "For juvenile matters, Orange County's juvenile system runs on different rules and different goals than adult court. We guide parents through it with a focus on keeping records sealed and futures intact, and our sealing work continues after the case ends.",
      ],
    },
    faqs: [
      {
        q: "My spouse was arrested after an argument but I do not want to press charges. Can we drop it?",
        a: "In California the prosecutor, not the spouse, decides whether a domestic violence case proceeds, and OC prosecutors file routinely even with reluctant witnesses. That does not mean the case is hopeless: it means you need defense counsel early, before statements and protective orders set the trajectory. We handle these cases with care for the whole family.",
      },
      {
        q: "My teenager was cited and we got a juvenile court notice. How serious is this?",
        a: "Juvenile cases are serious but fixable: the system is built around rehabilitation, and outcomes like informal supervision and diversion can end with no sustained petition at all. The right moves early matter enormously, as does sealing the record afterward. We handle both.",
      },
      {
        q: "Will my Mission Viejo case be in the local paper or public record?",
        a: "Court records are generally public, but most misdemeanor cases attract zero attention, and we resolve many matters at early hearings you never attend. Where the law allows, we pursue outcomes like diversion and sealing that minimize the permanent footprint.",
      },
      {
        q: "How quickly can you take over a case from another lawyer?",
        a: "Immediately. Substitution of counsel is a routine one-page filing, and clients switch to us mid-case regularly when they realize their file is not getting attention. A free call will tell you whether a change makes sense.",
      },
    ],
    image: "/images/generated/mission-viejo-criminal-defense-lawyer.webp",
  },
  {
    slug: "fullerton-criminal-defense-lawyer",
    city: "Fullerton",
    county: "Orange County",
    title: "Fullerton Criminal Defense Lawyer | Farris Law Firm",
    metaDescription:
      "Arrested in Fullerton? Farris Law Firm defends CSUF students and North OC residents at the North Justice Center, right in Fullerton. Free phone consultations 24/7.",
    h1: "Fullerton Criminal Defense Lawyer",
    intro: [
      "Fullerton is unusual: the courthouse that will decide your case, the North Justice Center, sits right in town, and the downtown bar district a mile away keeps it busy. Add Cal State Fullerton's forty thousand students and you get a docket heavy with DUI, alcohol, and first-offense cases.",
      "Farris Law Firm defends Fullerton cases with a specific focus on outcomes that protect students and working people: diversion, reductions, and dismissals that keep records clean for employers and licensing boards.",
    ],
    courthouse: {
      name: "North Justice Center",
      address: "1275 N Berkeley Ave, Fullerton, CA 92832",
      note: "The North Justice Center hears cases from Fullerton, Anaheim, and most of North Orange County. If you were arrested in Fullerton, your case is almost certainly in this building.",
    },
    local: {
      heading: "Downtown Fullerton and CSUF: First Offenses Handled Right",
      body: [
        "The downtown Fullerton bar scene is one of the most heavily policed nightlife districts in Orange County, and DUI saturation patrols around Harbor and Commonwealth are routine. Many of the people arrested are students or young professionals with everything to lose from a first conviction. California law offers them real off-ramps, from judicial diversion to carefully negotiated reductions, but those outcomes go to defendants whose lawyers show up prepared.",
        "For Cal State Fullerton students, we also manage the university side. Student conduct cases run on their own timelines with lower burdens of proof, and international students face immigration exposure that makes charge selection critical. We defend the whole problem, not just the court file.",
      ],
    },
    faqs: [
      {
        q: "I am a CSUF student. Will the school find out about my arrest?",
        a: "Possibly: universities learn about arrests through various channels, and some charges trigger conduct proceedings. We coordinate the criminal defense with the school process so a survivable court outcome does not become an enrollment disaster.",
      },
      {
        q: "What happens with a first DUI at the North Justice Center?",
        a: "A typical first DUI ends with probation, fines, and DUI school rather than jail, but the details, and whether we can do better through a wet reckless reduction or dismissal, depend on the stop, the testing, and the prosecutor. We have reduced DUIs even in difficult cases; see our recent victories.",
      },
      {
        q: "I missed a court date at North Justice Center years ago. What now?",
        a: "You likely have a bench warrant, and every traffic stop is a potential arrest until it is recalled. We recall warrants at North Justice Center regularly, often without you being taken into custody, and then resolve the underlying case. Start with our bench warrants page and a free call.",
      },
      {
        q: "Do you handle drug cases from Fullerton?",
        a: "Yes. Simple possession cases are often diversion-eligible, meaning completion ends in dismissal. Sales and transportation allegations are a different fight, frequently built on searches that do not survive scrutiny. Either way, get counsel before your first appearance.",
      },
    ],
    image: "/images/generated/fullerton-criminal-defense-lawyer.webp",
  },
  {
    slug: "westminster-criminal-defense-lawyer",
    city: "Westminster",
    county: "Orange County",
    title: "Westminster Criminal Defense Lawyer | Farris Law Firm",
    metaDescription:
      "Facing charges in Westminster? Farris Law Firm defends criminal cases at the West Justice Center, located right in Westminster. Free phone consultations 24/7. Payment plans.",
    h1: "Westminster Criminal Defense Lawyer",
    intro: [
      "The West Justice Center sits on 13th Street in Westminster, which means for local residents the courthouse deciding your future is in your own city. Farris Law Firm appears there regularly, defending everything from misdemeanor theft and DUI to serious felonies.",
      "We serve Westminster and the surrounding West County communities, including Garden Grove, Fountain Valley, and Seal Beach, with free 24/7 phone consultations and payment plans that make real defense accessible.",
    ],
    courthouse: {
      name: "West Justice Center",
      address: "8141 13th St, Westminster, CA 92683",
      note: "The West Justice Center hears cases from Westminster, Huntington Beach, Garden Grove, Fountain Valley, and West Orange County generally. Serious felonies may be transferred to the Central Justice Center.",
    },
    local: {
      heading: "Serving Westminster and Little Saigon",
      body: [
        "Westminster is the heart of Little Saigon, and we are proud to defend its families and business owners. Language should never decide a case's outcome: courts provide certified Vietnamese interpreters at every stage, and we make sure our clients and their families genuinely understand each decision point instead of nodding through hearings.",
        "The cases we see most from Westminster include DUI on Bolsa and Beach Boulevard, retail and employee theft allegations, domestic violence arrests, and fraud investigations targeting small business owners. In fraud and financial cases especially, early defense work before charges are filed can change everything.",
      ],
    },
    faqs: [
      {
        q: "Does my family member get a Vietnamese interpreter in court?",
        a: "Yes. California courts provide certified interpreters for criminal proceedings at no cost, and we arrange interpretation for attorney meetings as well. Nothing about your case should be decided in a language you do not fully understand.",
      },
      {
        q: "Investigators came to my business asking about my books. Should I cooperate?",
        a: "Politely take their cards and call a defense lawyer before answering anything. Financial investigations are won and lost pre-filing: what you hand over and say in week one shapes whether charges are ever filed. We intervene early, manage the document flow, and advocate directly with prosecutors.",
      },
      {
        q: "What should I expect at a West Justice Center arraignment?",
        a: "Charges are read, a plea is entered, and conditions of release are set. For most misdemeanors we appear on your behalf under Penal Code 977, enter not guilty, obtain the evidence, and begin negotiating. You typically will not need to miss work.",
      },
      {
        q: "Can you help with an immigration-sensitive criminal case?",
        a: "Yes. For non-citizens, the specific code section of a conviction can matter more than the sentence. We structure defense strategy around immigration consequences from day one and coordinate with immigration counsel where needed, as we did in People v. Jendo, where we secured a reduction specifically to protect the client's status.",
      },
    ],
    image: "/images/generated/westminster-criminal-defense-lawyer.webp",
  },
  {
    slug: "tustin-criminal-defense-lawyer",
    city: "Tustin",
    county: "Orange County",
    title: "Tustin Criminal Defense Lawyer | Farris Law Firm",
    metaDescription:
      "Charged with a crime in Tustin? Farris Law Firm defends DUI, theft, and felony cases from Tustin at the Central Justice Center in Santa Ana. Free 24/7 phone consultations.",
    h1: "Tustin Criminal Defense Lawyer",
    intro: [
      "Tustin sits in the middle of everything: the 5 and 55 freeways, The District's big-box retail, and the dense apartment corridors of Tustin Ranch. Its cases flow mostly to the Central Justice Center in Santa Ana, a courthouse we work constantly.",
      "Farris Law Firm defends Tustin residents against DUI, theft, domestic violence, drug, and felony charges with the preparation of a limited-caseload boutique firm and fees that come with payment plans.",
    ],
    courthouse: {
      name: "Central Justice Center",
      address: "700 Civic Center Drive West, Santa Ana, CA 92701",
      note: "Criminal cases arising in Tustin are generally heard at the Central Justice Center in Santa Ana, ten minutes up the road. We appear in this courthouse week after week.",
    },
    local: {
      heading: "Freeway Stops and Retail Cases: Tustin's Two Big Pipelines",
      body: [
        "A striking number of Tustin cases start on the freeway: CHP and Tustin PD stops on the 5 and 55 that turn into DUI or possession arrests after a claimed odor or a records check. Traffic stop cases rise and fall on the legality of the stop and search, and suppression motions are not a formality for us; they are a weapon we actually use.",
        "The other pipeline is retail: loss prevention detentions at The District and the Marketplace that become theft charges. First offenders have strong diversion and reduction options, and we use them to keep convictions off records that need to stay clean for work and licensing.",
      ],
    },
    faqs: [
      {
        q: "The officer says he smelled marijuana and searched my car. Is that legal now?",
        a: "Since legalization, odor alone is a much weaker justification than police pretend, and courts increasingly agree. If your Tustin case began with a questionable vehicle search, suppression may gut the prosecution's evidence. Bring us the details in a free call.",
      },
      {
        q: "Will my Tustin case be at Central Justice Center even for a misdemeanor?",
        a: "Generally yes: Tustin matters are assigned to the Central Justice Center in Santa Ana. For most misdemeanors we can appear for you under Penal Code 977, so the courthouse assignment costs you nothing in missed work.",
      },
      {
        q: "I was arrested for DUI after a crash on the 55. Does the crash make it worse?",
        a: "It raises the stakes: injuries can elevate charges to felonies and add restitution issues. It also multiplies the technical defenses, from causation disputes to blood draw and rising BAC issues. Crash DUI cases need an attorney immediately, before statements to insurers complicate the defense.",
      },
      {
        q: "Can old Tustin convictions be cleared while I fight a new case?",
        a: "Often the smarter sequence is resolving the new matter first, then expunging what is eligible. But every situation differs, and sometimes cleanup first improves the negotiating posture. We map the full record strategy in your consultation; see our expungement page.",
      },
    ],
    image: "/images/generated/tustin-criminal-defense-lawyer.webp",
  },
  {
    slug: "long-beach-criminal-defense-lawyer",
    city: "Long Beach",
    county: "Los Angeles County",
    title: "Long Beach Criminal Defense Lawyer | Farris Law Firm",
    metaDescription:
      "Facing criminal charges in Long Beach? Farris Law Firm defends misdemeanors and felonies at the Long Beach courthouse. Free phone consultations 24/7. Payment plans available.",
    h1: "Long Beach Criminal Defense Lawyer",
    intro: [
      "Long Beach runs its own show: LA County's second city has its own police department, its own courthouse, and, unusually, its own elected City Prosecutor handling misdemeanors. Defending cases here means knowing this ecosystem, not just LA County generally.",
      "Farris Law Firm defends Long Beach cases across the spectrum, from DUI and domestic violence to serious felonies, with free 24/7 phone consultations and payment plans available.",
    ],
    courthouse: {
      name: "Gov. George Deukmejian Courthouse",
      address: "275 Magnolia Ave, Long Beach, CA 90802",
      note: "The Long Beach courthouse handles cases arising in Long Beach and nearby communities, both misdemeanors and felonies. It is one of the busiest courthouses in the LA Superior Court system.",
    },
    local: {
      heading: "A City With Its Own Prosecutor Needs Counsel Who Knows It",
      body: [
        "Misdemeanors in Long Beach are prosecuted by the Long Beach City Prosecutor's Office, which runs its own filing standards and diversion programs distinct from the LA City Attorney and the County DA. That structure creates opportunities: knowing which programs exist and who to talk to often shortens cases dramatically. Felonies are handled by the District Attorney at the same courthouse, and we defend both.",
        "The Long Beach docket reflects the city: DUI along Pine Avenue and the shoreline entertainment district, port-adjacent theft and trespass cases, domestic violence arrests, and gun charges. Whatever the charge, the pattern that wins is the same one we apply everywhere: get in early, get the evidence, and litigate like trial is coming.",
      ],
    },
    faqs: [
      {
        q: "Who is prosecuting my Long Beach misdemeanor?",
        a: "The Long Beach City Prosecutor's Office, not the county DA. Their office has its own diversion and reduction policies, which we know and use. Felonies in Long Beach are prosecuted by the LA County District Attorney.",
      },
      {
        q: "Is diversion available for my Long Beach case?",
        a: "Frequently, yes. Between judicial diversion under PC 1001.95, city prosecutor programs, and drug and mental health diversion statutes, many first-time and low-level cases can end in dismissal. Eligibility turns on the charge and history; we assess it honestly in a free call.",
      },
      {
        q: "I was arrested near the port area. Does federal jurisdiction come into play?",
        a: "Most port-adjacent arrests are still state cases heard at the Long Beach courthouse, but some conduct can draw federal interest. If federal agents contact you, say nothing and call a lawyer immediately; the rules and stakes change completely in federal court.",
      },
      {
        q: "Can you handle my DMV hearing if my DUI was in Long Beach?",
        a: "Yes. The DMV administrative process is separate from court and has a 10 day request deadline from arrest. We run both tracks, fight the suspension, and pursue restricted licenses so you can keep working.",
      },
    ],
    image: "/images/generated/long-beach-criminal-defense-lawyer.webp",
  },
];

export const LOCATION_BY_SLUG = new Map(LOCATIONS.map((l) => [l.slug, l]));
