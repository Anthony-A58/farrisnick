// New practice-area pages (not in the WordPress migration). Rendered by
// components/templates/PracticePage.tsx. Statutory ranges are summaries;
// attorney should review before launch.

export type PracticeEntry = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  tldr: string;
  kicker?: string; // hero eyebrow override, e.g. "Orange County"
  intro: string[];
  charges: { heading: string; items: { name: string; desc: string }[] };
  penalties: {
    heading: string;
    note: string;
    rows: { charge: string; level: string; exposure: string }[];
  };
  defenses: { heading: string; lead: string; items: string[] };
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
  image: string;
};

export const PRACTICES: PracticeEntry[] = [
  {
    slug: "sex-crimes",
    title: "Sex Crimes Defense Lawyer | Orange County & Los Angeles | Farris Law Firm",
    metaDescription:
      "Accused of a sex crime in Orange County or Los Angeles? Farris Law Firm defends sexual battery, indecent exposure, and other sex offense charges. Confidential free consultations 24/7.",
    h1: "Sex Crimes Defense Attorney",
    tldr: "If you are accused of a sex offense in California, the two things that matter most are speed and silence: do not talk to detectives without counsel, and get a defense lawyer involved before charges are filed, when outcomes can still be shaped. Penalties range from misdemeanor jail time to state prison, but sex offender registration is usually the most life-altering consequence, and a central goal of a good defense is resolving the case to a charge that carries no registration at all.",
    intro: [
      "No accusation does more damage faster than a sex offense allegation. People lose jobs, marriages, and reputations before any evidence is ever tested in court. If you are being investigated or have been charged in Orange County or Los Angeles, the time to get a defense lawyer involved is now, ideally before charges are filed.",
      "Farris Law Firm defends these cases with total discretion. Every consultation is confidential, and we intentionally limit our caseload so your defense gets the attorney attention an accusation like this demands.",
    ],
    charges: {
      heading: "Sex Offense Charges We Defend",
      items: [
        { name: "Sexual battery (PC 243.4)", desc: "Touching an intimate part of another person against their will. Chargeable as a misdemeanor or felony depending on the allegations." },
        { name: "Indecent exposure (PC 314)", desc: "A misdemeanor first offense, but one that carries sex offender registration, which is why these cases must be fought." },
        { name: "Lewd conduct in public (PC 647(a))", desc: "Often charged from undercover operations. Frequently defensible on entrapment and identification grounds." },
        { name: "Rape and sexual assault (PC 261)", desc: "The most serious allegations, carrying prison exposure and lifetime registration. These cases demand full investigation and expert work." },
        { name: "Lewd acts with a minor (PC 288)", desc: "Charges involving minors carry the harshest penalties and require immediate, careful defense work before you speak to anyone." },
        { name: "Failure to register (PC 290(b))", desc: "We defend people accused of violating registration requirements and pursue relief from registration where the law allows." },
      ],
    },
    penalties: {
      heading: "What a Conviction Can Mean",
      note: "Exact exposure depends on the charge, the alleged facts, and your record. The table summarizes common ranges; registration is often the most life-altering consequence.",
      rows: [
        { charge: "Sexual battery (misdemeanor)", level: "Misdemeanor", exposure: "Up to 1 year county jail, fines, and possible 10 year (Tier 1) registration" },
        { charge: "Sexual battery (felony)", level: "Felony", exposure: "2 to 4 years state prison and registration" },
        { charge: "Indecent exposure (first offense)", level: "Misdemeanor", exposure: "Up to 6 months jail and Tier 1 registration" },
        { charge: "Rape (PC 261)", level: "Felony", exposure: "3 to 8 years or more in prison and Tier 3 (lifetime) registration" },
      ],
    },
    defenses: {
      heading: "How These Cases Get Defended",
      lead: "Sex offense cases are rarely about forensic proof. They usually turn on credibility, context, and what the electronic record actually shows. Our defense work includes:",
      items: [
        "False accusation and motive evidence: custody disputes, breakups, and money are recurring engines of untrue allegations, and we investigate them thoroughly",
        "Consent and reasonable belief defenses supported by messages, witnesses, and conduct after the alleged incident",
        "Text, social media, and location records that contradict the accusation timeline",
        "Attacking suggestive identification procedures and defective police interviews",
        "Pre-filing intervention with detectives and prosecutors to stop charges before they are filed",
        "Where appropriate, negotiating to non-registerable offenses so your future is not defined by a registry",
      ],
    },
    faqs: [
      {
        q: "The police want my side of the story. Should I talk to them?",
        a: "No, not without counsel. In sex crime investigations, the interview is often the whole case: detectives are trained to obtain admissions to corroborate an otherwise unprovable allegation, including through pretext phone calls from the accuser. Politely decline and call us first. We can communicate with detectives on your behalf without adding evidence against you.",
      },
      {
        q: "Will I have to register as a sex offender?",
        a: "Not necessarily. Registration depends on the specific conviction. California uses a three tier system: 10 years, 20 years, and lifetime. A central goal of our defense is resolving cases to charges that carry no registration at all, and for past convictions we pursue tier termination petitions where eligible.",
      },
      {
        q: "What if the accuser wants to drop the charges?",
        a: "The decision belongs to the prosecutor, not the accuser, so charges do not simply disappear when someone recants. However, a recanting or uncooperative complaining witness dramatically weakens the case, and we know how to use that reality in negotiations and at trial, lawfully and effectively.",
      },
      {
        q: "I have not been charged yet, just contacted. Is it too early to hire a lawyer?",
        a: "It is the best possible time. Pre-filing is when a defense lawyer has the most leverage: we can present exculpatory evidence to the detective or filing deputy and sometimes prevent the case from ever being filed. Once charges exist, the same result takes months and costs far more.",
      },
    ],
    related: [
      { label: "Domestic Violence Defense", href: "/domestic-violence/" },
      { label: "Assault and Battery", href: "/assault/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/sex-crimes.webp",
  },
  {
    slug: "robbery",
    title: "Robbery Defense Lawyer | Orange County & Los Angeles | Farris Law Firm",
    metaDescription:
      "Charged with robbery under PC 211 in Orange County or Los Angeles? Robbery is a strike offense. Farris Law Firm builds serious defenses. Free phone consultations 24/7.",
    h1: "Robbery Defense Attorney",
    tldr: "Robbery under Penal Code 211 is theft by force or fear: always a felony, always a strike, carrying 2 to 9 years in state prison depending on degree. But robbery is also one of the most overcharged offenses in California, and the difference between robbery and simple theft often comes down to disputed seconds of video. A strong defense attacks the force or fear element, the identification, and the intent, with the goal of dismissal or reduction to a non-strike theft offense.",
    intro: [
      "Robbery under Penal Code 211 is theft accomplished by force or fear, and California treats it as a violent felony: state prison exposure, a strike under the Three Strikes law, and no misdemeanor option. But the line between robbery, theft, and a misunderstanding is thinner than prosecutors admit, and overcharging is common.",
      "Farris Law Firm defends robbery cases across Orange County and Los Angeles. We have negotiated serious felonies down from prison time to probation, and we prepare every robbery case for trial from day one.",
    ],
    charges: {
      heading: "How California Charges Robbery",
      items: [
        { name: "First degree robbery (PC 211/212.5)", desc: "Robbery of a person in an inhabited dwelling, at an ATM, or of a driver or passenger. Carries 3 to 9 years in state prison." },
        { name: "Second degree robbery", desc: "All other robberies, carrying 2 to 5 years. Most street and store cases are charged in the second degree." },
        { name: "Estes robbery", desc: "A shoplifting that becomes robbery because force was used against a guard on the way out. Many of these should be theft cases, and we fight to make them so." },
        { name: "Attempted robbery and enhancements", desc: "Gun and great bodily injury allegations can add years or decades. Fighting the enhancement is often as important as fighting the charge." },
      ],
    },
    penalties: {
      heading: "Penalties for a Robbery Conviction",
      note: "Robbery is a strike offense and a violent felony under PC 667.5(c), which limits credits and doubles future sentences. That is why the charge itself, not just the sentence, must be fought.",
      rows: [
        { charge: "Second degree robbery", level: "Felony (strike)", exposure: "2, 3, or 5 years state prison" },
        { charge: "First degree robbery", level: "Felony (strike)", exposure: "3, 4, or 6 years; up to 9 in concert in a dwelling" },
        { charge: "With firearm use (PC 12022.53)", level: "Enhancement", exposure: "10, 20, or 25 years to life added" },
        { charge: "Attempted robbery", level: "Felony (strike)", exposure: "Half the completed-offense term" },
      ],
    },
    defenses: {
      heading: "Defenses That Work in Robbery Cases",
      lead: "Robbery convictions require proof of force or fear, intent, and identity, and each element is attackable:",
      items: [
        "No force or fear: reclassifying the incident as theft, which is not a strike and often not even a felony",
        "Mistaken identification: cross-racial ID, poor lighting, and suggestive lineups are leading causes of wrongful robbery convictions",
        "Claim of right: taking back property you honestly believed was yours is not robbery",
        "No intent to steal: disputes that escalated are not robberies just because property changed hands",
        "Estes overcharging: pushing past a guard is not automatically robbery, and juries agree more often than prosecutors like",
        "Suppression of unlawful stops, searches, and showup identifications",
      ],
    },
    faqs: [
      {
        q: "Is robbery always a felony in California?",
        a: "Yes. Robbery has no misdemeanor version and is a strike. That is exactly why the defense goal is often to break the case down to what it really was: grand or petty theft, which are not strikes and can be misdemeanors. We have done this for clients repeatedly; see our recent victories.",
      },
      {
        q: "What is the difference between robbery and burglary?",
        a: "Robbery is taking property from a person by force or fear. Burglary is entering a building with intent to commit a crime inside; no person needs to be present. They get confused constantly, including by police reports. Our guide on robbery versus burglary explains the distinctions in depth.",
      },
      {
        q: "The whole thing was caught on camera. Should I just take a deal?",
        a: "Not before a lawyer watches every second of that video. Camera footage cuts both ways: it frequently disproves force, fear, or intent, the exact elements that make an incident robbery instead of theft. Early offers in robbery cases are rarely the best offers.",
      },
      {
        q: "Can a robbery strike ever come off my record?",
        a: "A strike prior has lasting effects, but there are tools: Romero motions to dismiss strikes in future cases, certificate and resentencing relief in some circumstances, and for the current case, negotiating to a non-strike offense before conviction, which is where we put maximum effort.",
      },
    ],
    related: [
      { label: "Theft Crimes Defense", href: "/theft/" },
      { label: "Degrees of Robbery Charges", href: "/blog/understanding-degrees-of-robbery-charges-and-their-potential-sentences/" },
      { label: "Robbery vs. Burglary", href: "/blog/robbery-vs-burglary-legal-distinctions-and-defense-approaches/" },
    ],
    image: "/images/generated/robbery.webp",
  },
  {
    slug: "expungement",
    title: "Expungement Lawyer | Clear Your California Record | Farris Law Firm",
    metaDescription:
      "Clear your California criminal record. Farris Law Firm handles PC 1203.4 expungements and record sealing in Orange County and Los Angeles. Flat fees and free consultations.",
    h1: "California Expungement Lawyer",
    tldr: "If you completed probation and have no open cases, you very likely qualify to have your California conviction expunged under Penal Code 1203.4: the court withdraws your plea and dismisses the case, changing what employers see from a conviction to a dismissal. The process typically takes 4 to 8 weeks, usually without you appearing in court, and pairs with related tools: felony reductions, early termination of probation, and arrest record sealing for cases that never became convictions.",
    intro: [
      "An old case should not keep costing you jobs, housing, and licenses years after you finished paying for it. California law lets most people who completed probation withdraw their plea and have the case dismissed under Penal Code 1203.4, and lets many arrests that never became convictions be sealed entirely.",
      "Farris Law Firm handles expungements and record sealing across Orange County and Los Angeles County for a flat fee, and in most cases you never have to appear in court. We also handle the follow-on relief that actually completes the job: reductions of felonies to misdemeanors and early termination of probation.",
    ],
    charges: {
      heading: "Record Clearing Services",
      items: [
        { name: "Expungement (PC 1203.4)", desc: "The court withdraws your conviction and dismisses the case. Most employers can no longer use it against you, and you can honestly answer that the conviction was dismissed." },
        { name: "Felony reduction (PC 17(b))", desc: "Wobbler felonies reduced to misdemeanors, restoring rights and improving what background checks show, often done together with expungement." },
        { name: "Early termination of probation (PC 1203.3)", desc: "End probation ahead of schedule so you become expungement-eligible sooner. We have won these motions; see our recent victories." },
        { name: "Arrest record sealing (PC 851.87)", desc: "If you were arrested but never convicted, the arrest record can usually be sealed as a matter of right." },
        { name: "Juvenile record sealing (WIC 781)", desc: "Juvenile records do not seal themselves automatically in every case. We petition to seal them properly." },
        { name: "Certificates of rehabilitation", desc: "For state prison priors, a court-issued certificate that restores rights and serves as an automatic pardon application." },
      ],
    },
    penalties: {
      heading: "Who Qualifies for Expungement",
      note: "Eligibility is broader than most people think, but the details matter. The basic requirements under PC 1203.4:",
      rows: [
        { charge: "Probation completed successfully", level: "Required", exposure: "Or terminated early by the court" },
        { charge: "No open cases or current sentence", level: "Required", exposure: "You cannot be charged with or serving a sentence for another offense" },
        { charge: "Fines and restitution paid", level: "Expected", exposure: "Courts want financial obligations resolved before granting relief" },
        { charge: "State prison cases", level: "Different path", exposure: "Generally not 1203.4-eligible; certificates of rehabilitation may apply instead" },
      ],
    },
    defenses: {
      heading: "What Expungement Actually Does for You",
      lead: "Clients ask us whether expungement is worth it. For almost everyone with an eligible conviction, yes:",
      items: [
        "Private employers generally cannot ask about or consider expunged convictions under California's Fair Chance Act",
        "Background checks show the case as dismissed rather than a conviction",
        "You can state on most job applications that you have no conviction for the dismissed case",
        "Professional license applications look dramatically better with relief granted",
        "It signals rehabilitation to landlords, licensing boards, and immigration attorneys who can build on it",
        "Limits remain: expungement does not restore gun rights, erase registration duties, or remove the prior from future sentencing, and we explain those honestly before you pay us",
      ],
    },
    faqs: [
      {
        q: "How long does an expungement take?",
        a: "Typically about 4 to 8 weeks from filing to a signed order in most Southern California courts, plus preparation time up front. Timelines vary by county and court backlog. We wrote a detailed guide on expungement timelines that walks through each stage.",
      },
      {
        q: "Do I have to go to court for my expungement?",
        a: "Usually not. In most cases we file the petition and appear on your behalf if the court sets a hearing. You go on with your life and we send you the signed dismissal order when it is granted.",
      },
      {
        q: "Can a DUI be expunged?",
        a: "Yes, a DUI conviction can be expunged under PC 1203.4 once probation is complete. Note that the DMV record and its use as a prior within the 10 year lookback period are unaffected, but for employment purposes expungement still matters a great deal.",
      },
      {
        q: "I was arrested but the case was dropped. Is there anything on my record?",
        a: "Very likely yes: the arrest itself appears on background checks even with no conviction. Penal Code 851.87 lets us seal that arrest record, usually as a matter of right. This is one of the fastest, highest-value pieces of record clearing we do.",
      },
    ],
    related: [
      { label: "How Long Does an Expungement Take?", href: "/blog/how-long-does-an-expungement-take/" },
      { label: "Sealing Juvenile Records", href: "/blog/sealing-and-expunging-juvenile-records/" },
      { label: "Bench Warrants", href: "/bench-warrants-failure-to-appear/" },
    ],
    image: "/images/generated/expungement.webp",
  },
  {
    slug: "aggravated-assault",
    title: "Aggravated Assault Lawyer | Orange County & Los Angeles | Farris Law Firm",
    metaDescription:
      "Charged with aggravated assault or assault with a deadly weapon (PC 245) in Orange County or Los Angeles? Farris Law Firm builds serious defenses. Free 24/7 consultations.",
    h1: "Aggravated Assault Defense Attorney",
    tldr: "Aggravated assault in California usually means a Penal Code 245 charge: assault with a deadly weapon or with force likely to cause great bodily injury. Most PC 245 charges are wobblers, so the felony versus misdemeanor decision is winnable, and felony convictions can mean 2 to 4 years plus enhancements. The strongest defenses are self-defense, mutual combat, and attacking the deadly weapon or great bodily injury element, and cases like these get reduced dramatically with prepared counsel.",
    intro: [
      "Aggravated assault is where a bad moment becomes a felony case: prosecutors allege a weapon, force likely to cause great bodily injury, or a protected victim, and suddenly an argument that lasted thirty seconds threatens years of your life. Assault with a deadly weapon under Penal Code 245 can be a strike offense, and it is charged far more readily than most people imagine, including for fists, bottles, and cars.",
      "Farris Law Firm defends aggravated assault cases across Orange County and Los Angeles. These cases are highly fact-driven and highly winnable: we have taken a serious fighting and assault case down to disturbing the peace. Preparation is what does it.",
    ],
    charges: {
      heading: "How California Charges Aggravated Assault",
      items: [
        { name: "Assault with a deadly weapon (PC 245(a)(1))", desc: "Any object capable of producing death or great bodily injury can qualify, from a knife to a bottle to a vehicle. A wobbler: chargeable as a felony or misdemeanor." },
        { name: "Force likely to produce great bodily injury (PC 245(a)(4))", desc: "No weapon needed. Prosecutors use this for serious fights, including single-punch cases with unlucky injuries." },
        { name: "Assault with a firearm (PC 245(a)(2))", desc: "Mandatory minimum jail even as a misdemeanor, and serious prison exposure as a felony. Firearm enhancements can stack on top." },
        { name: "Battery with serious bodily injury (PC 243(d))", desc: "The companion charge when contact caused significant injury. Often charged alongside PC 245 to give prosecutors leverage." },
        { name: "Assault on a peace officer or protected person (PC 245(c), 241, 243(b)-(c))", desc: "Enhanced penalties when the alleged victim is an officer, firefighter, or other protected worker." },
        { name: "Great bodily injury enhancement (PC 12022.7)", desc: "Adds 3 to 6 consecutive years and makes the case a strike with limited credits. Defeating the enhancement is often half the battle." },
      ],
    },
    penalties: {
      heading: "Penalties for Aggravated Assault",
      note: "Many PC 245 charges are wobblers, which means the fight over felony versus misdemeanor is winnable. Exposure below assumes no enhancements; GBI and firearm allegations add years.",
      rows: [
        { charge: "ADW (misdemeanor)", level: "Misdemeanor", exposure: "Up to 1 year county jail, fines, probation" },
        { charge: "ADW (felony)", level: "Felony (often a strike)", exposure: "2, 3, or 4 years state prison" },
        { charge: "Assault with a firearm", level: "Felony", exposure: "2, 3, or 4 years; more for specified firearms" },
        { charge: "With GBI enhancement (PC 12022.7)", level: "Enhancement", exposure: "3 to 6 additional consecutive years" },
        { charge: "Battery with serious bodily injury", level: "Wobbler", exposure: "Up to 1 year jail or 2, 3, or 4 years prison" },
      ],
    },
    defenses: {
      heading: "Defenses That Win Assault Cases",
      lead: "Aggravated assault cases usually come down to a chaotic scene, competing stories, and an injury prosecutors work backward from. That leaves real openings:",
      items: [
        "Self-defense and defense of others: California law protects reasonable force, and we build these defenses with witnesses, video, and injury patterns",
        "Mutual combat: fights two people chose are not one-sided assaults, and juries understand the difference",
        "No deadly weapon or force likely to produce GBI: attacking the element that makes it aggravated, reducing the case to simple assault",
        "False accusation and motive: contested breakups, neighbor disputes, and bar chaos generate exaggerated allegations",
        "Identification failures: crowded-scene cases rest on shaky IDs that cross-examination and video dismantle",
        "Charge reduction strategy: as a wobbler, felony PC 245 can become a misdemeanor at multiple stages, including through PC 17(b) motions",
      ],
    },
    faqs: [
      {
        q: "Is aggravated assault a strike in California?",
        a: "It depends on the conviction. ADW is a serious felony and a strike; some PC 245 convictions without a weapon or GBI finding are not. This distinction drives our negotiating strategy: the difference between a strike and a non-strike disposition follows you for life.",
      },
      {
        q: "Nobody was actually hurt. How can I be charged with aggravated assault?",
        a: "Assault punishes the attempt or ability to apply force, not the result. Swinging and missing, or brandishing something capable of serious harm, can support a PC 245 charge with zero injuries. The absence of injury is still powerful defense evidence, and we use it.",
      },
      {
        q: "Can a felony assault charge be reduced to a misdemeanor?",
        a: "Often, yes. Most PC 245(a)(1) and (a)(4) charges are wobblers, reducible by negotiation or by motion under PC 17(b), sometimes at sentencing, sometimes years later. We have negotiated serious cases down dramatically; see People v. Igartua in our recent victories, reduced to disturbing the peace.",
      },
      {
        q: "The alleged victim wants to drop the charges. Will the case go away?",
        a: "Not automatically: prosecutors, not victims, control charging decisions. But an uncooperative or recanting complaining witness materially weakens the case, especially where the injuries and video are ambiguous. We know how to translate that weakness into dismissals and reductions, lawfully.",
      },
    ],
    related: [
      { label: "Assault and Battery", href: "/assault/" },
      { label: "Domestic Violence Defense", href: "/domestic-violence/" },
      { label: "Weapons Charges", href: "/guns/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/aggravated-assault.webp",
  },
  // ---- County money pages ----
  {
    slug: "orange-county-dui-lawyer",
    title: "Orange County DUI Lawyer | Free 24/7 Consultations | Farris Law Firm",
    metaDescription:
      "Arrested for DUI in Orange County? Farris Law Firm defends DUI cases at all four OC justice centers and handles your DMV hearing. Free phone consultations 24/7. Payment plans.",
    h1: "Orange County DUI Lawyer",
    kicker: "Orange County",
    tldr: "An Orange County DUI starts two clocks: a 10 day window to request the DMV hearing that protects your license, and a criminal case at the justice center serving the city where you were stopped. A typical first offense ends in probation, fines, and DUI school rather than jail, and prepared defense work regularly produces reductions like wet reckless or better. We defend DUI cases at all four OC courthouses from our Aliso Viejo office and handle the DMV hearing ourselves.",
    intro: [
      "DUI defense in Orange County is local work. The prosecutors, judges, and unwritten courtroom customs differ between Harbor, Central, North, and West justice centers, and knowing those differences is often worth more than any billboard slogan. Farris Law Firm is based in Aliso Viejo and defends DUI cases in all four buildings every month.",
      "We handle both tracks of your case: the criminal charge and the DMV administrative action, which runs on its own rules and its own 10 day deadline. One firm, one flat fee, both fights.",
    ],
    charges: {
      heading: "DUI Charges We Defend in Orange County",
      items: [
        { name: "First offense DUI (VC 23152)", desc: "Misdemeanor with probation, fines, DUI school, and license actions. The best window for reductions and dismissals." },
        { name: "Second and third DUI", desc: "Mandatory jail minimums, longer programs, and multi-year license consequences. Defense strategy and alternatives to custody matter enormously here." },
        { name: "High BAC and refusal cases", desc: "Enhancements for BAC of 0.15 or higher and chemical test refusals. We have reduced even high BAC cases to wet reckless." },
        { name: "DUI with injury or accident", desc: "Chargeable as a felony. These cases demand immediate defense work on causation, testing, and statements." },
        { name: "Boating and rideshare DUI", desc: "BUI out of Newport Harbor and commercial or rideshare driver cases with stricter BAC limits and career stakes." },
      ],
    },
    penalties: {
      heading: "What a First Orange County DUI Typically Involves",
      note: "Standard terms for a first offense without aggravating factors. Every element below is negotiable with prepared defense work.",
      rows: [
        { charge: "Informal probation", level: "3 years minimum", exposure: "Standard first offense term" },
        { charge: "Fines and assessments", level: "Roughly $2,000", exposure: "Base fine multiplies with penalty assessments" },
        { charge: "DUI school", level: "3 months (AB-541)", exposure: "6 or 9 months with high BAC" },
        { charge: "License action", level: "DMV suspension", exposure: "Restricted or interlock licenses usually keep you driving" },
      ],
    },
    defenses: {
      heading: "How We Fight Orange County DUI Cases",
      lead: "The breath number is the start of the analysis, not the end:",
      items: [
        "Unlawful stop and arrest: suppression of everything that followed",
        "Title 17 violations: calibration, maintenance, and the 15 minute observation period",
        "Rising BAC and medical defenses that undermine the numbers",
        "Body camera review that contradicts the written report",
        "The DMV hearing used as discovery for the criminal case",
        "Reduction ladder: wet reckless, dry reckless, exhibition of speed, as our recent victories show",
      ],
    },
    faqs: [
      {
        q: "Which Orange County courthouse will my DUI be in?",
        a: "Generally the justice center serving the city of arrest: Harbor in Newport Beach for South County and Irvine, Central in Santa Ana, North in Fullerton for Anaheim and North County, and West in Westminster for Huntington Beach and West County. Read us your citation in a free call and we will confirm your courthouse and dates.",
      },
      {
        q: "Do I have to go to court for my Orange County DUI?",
        a: "Usually not for routine hearings: Penal Code 977 lets us appear for you in most misdemeanor DUI cases. Many of our clients never miss a day of work.",
      },
      {
        q: "What does an Orange County DUI lawyer cost?",
        a: "We quote flat fees up front that include the DMV hearing, with payment plans available. Read our guide on DUI lawyer costs, then call for a real number specific to your case.",
      },
      {
        q: "I already missed the 10 day DMV window. Is it over?",
        a: "Not necessarily. Late hearing requests are sometimes accepted with good cause, and the criminal case reduction strategy can still protect you. Call us either way; the sooner we see your paperwork, the more options remain.",
      },
    ],
    related: [
      { label: "DUI Defense Overview", href: "/dui/" },
      { label: "First DUI in Orange County? Start Here", href: "/blog/first-dui-orange-county-what-happens/" },
      { label: "How DUIs Get Dismissed", href: "/blog/how-to-get-a-dui-dismissed-california/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/orange-county-dui-lawyer.webp",
  },
  {
    slug: "los-angeles-dui-lawyer",
    title: "Los Angeles DUI Lawyer | Free 24/7 Consultations | Farris Law Firm",
    metaDescription:
      "Arrested for DUI in Los Angeles? Farris Law Firm defends DUI cases across LA County courthouses from our Burbank office and handles your DMV hearing. Free 24/7 consultations.",
    h1: "Los Angeles DUI Lawyer",
    kicker: "Los Angeles County",
    tldr: "A Los Angeles DUI means a criminal case at one of LA County's many courthouses plus a separate DMV action with a 10 day deadline to request a hearing. First offenses typically resolve with probation, fines, and DUI school rather than jail, and litigation-ready defense regularly produces wet reckless reductions or better. We defend DUI cases across LA County from our Burbank office and handle both the court case and the DMV hearing.",
    intro: [
      "Los Angeles runs the largest DUI docket in America, spread across courthouses from the Metropolitan Courthouse downtown to branch courts in Van Nuys, Burbank, Glendale, and beyond. Where your case lands shapes how it should be fought, because filing standards and courtroom customs genuinely differ.",
      "Farris Law Firm defends LA DUI cases from our Burbank office with a deliberately limited caseload: the police report read line by line, the video actually watched, and the DMV hearing used as a weapon rather than treated as a formality.",
    ],
    charges: {
      heading: "DUI Cases We Defend Across Los Angeles",
      items: [
        { name: "First offense DUI (VC 23152)", desc: "Misdemeanor prosecuted by the LA City Attorney in the city, or the DA elsewhere in the county. Probation and fines are typical; reductions are common with prepared defense." },
        { name: "Repeat offense DUI", desc: "Mandatory jail minimums and long programs. Alternatives like electronic monitoring and residential treatment can substitute for custody with the right advocacy." },
        { name: "Felony DUI", desc: "Injury cases and fourth offenses. Serious exposure that demands immediate, litigation-grade defense." },
        { name: "Commercial and rideshare drivers", desc: "Stricter 0.04 BAC limits and career-ending license consequences that reshape defense strategy." },
        { name: "Marijuana and drug DUI", desc: "No reliable impairment number exists for THC, which makes these cases far more defensible than prosecutors admit." },
      ],
    },
    penalties: {
      heading: "Typical First Offense Terms in LA County",
      note: "Standard outcomes for an uncomplicated first offense. Aggravating factors raise exposure; defense work lowers outcomes.",
      rows: [
        { charge: "Informal probation", level: "3 years", exposure: "Standard first offense term" },
        { charge: "Fines and assessments", level: "About $2,000", exposure: "Payment plans available through the court" },
        { charge: "DUI school", level: "3 to 9 months", exposure: "Length rises with BAC" },
        { charge: "License action", level: "DMV suspension", exposure: "Interlock and restricted options usually keep you driving" },
      ],
    },
    defenses: {
      heading: "How We Fight LA DUI Cases",
      lead: "The same litigation pressure that wins cases in Orange County works across LA's courthouses:",
      items: [
        "Suppression motions on unlawful stops and arrests",
        "Title 17 attacks on breath and blood testing procedures",
        "Rising BAC, GERD, and medical defenses",
        "Checkpoint compliance challenges: DUI checkpoints have strict operational rules",
        "Knowing the difference between City Attorney and DA policies, and using it",
        "The reduction ladder: wet reckless, dry reckless, exhibition of speed",
      ],
    },
    faqs: [
      {
        q: "Which LA courthouse will my DUI go to?",
        a: "It depends on where you were arrested: city of LA misdemeanor DUIs typically go to the Metropolitan Courthouse, while Valley arrests go to branch courts like Van Nuys or Burbank. Read us your citation in a free call and we will tell you the courthouse, the prosecutor, and what to expect there.",
      },
      {
        q: "Who prosecutes my LA DUI?",
        a: "Inside the city of Los Angeles, misdemeanor DUIs are handled by the City Attorney; felonies and cases elsewhere in the county belong to the District Attorney. Their diversion and reduction policies differ, and defense strategy should account for who is across the table.",
      },
      {
        q: "Was the checkpoint I was stopped at even legal?",
        a: "Checkpoints must follow strict rules on supervision, neutral selection formulas, signage, and publicity. Violations can suppress the stop entirely. Bring us the location and time and we will investigate how it was run.",
      },
      {
        q: "Can I keep driving for work?",
        a: "Usually yes, through restricted or ignition interlock licenses even if a suspension is imposed, provided the DMV hearing is requested within 10 days. Protecting your ability to work is one of the first things we handle.",
      },
    ],
    related: [
      { label: "DUI Defense Overview", href: "/dui/" },
      { label: "Burbank DUI Defense", href: "/dui-defense-lawyers-in-burbank/" },
      { label: "How DUIs Get Dismissed", href: "/blog/how-to-get-a-dui-dismissed-california/" },
      { label: "What Happens After a 2nd DUI?", href: "/blog/what-happens-after-a-2nd-dui/" },
    ],
    image: "/images/generated/los-angeles-dui-lawyer.webp",
  },
  {
    slug: "orange-county-domestic-violence-lawyer",
    title: "Orange County Domestic Violence Lawyer | Farris Law Firm",
    metaDescription:
      "Accused of domestic violence in Orange County? Farris Law Firm defends DV cases at all four OC justice centers with discretion and urgency. Free confidential consultations 24/7.",
    h1: "Orange County Domestic Violence Lawyer",
    kicker: "Orange County",
    tldr: "In Orange County, domestic violence arrests move fast: an emergency protective order usually issues immediately, the prosecutor, not your accuser, decides whether charges proceed, and the first hearings shape everything from where you sleep to whether you keep your firearms. Charges range from misdemeanor battery to felony corporal injury, but early, prepared defense regularly produces reductions, diversion, and dismissals, especially where injuries and evidence are ambiguous.",
    intro: [
      "Domestic violence cases are unlike anything else we defend: they begin at the worst moment of a family's life, they run on mandatory arrest and no-drop policies, and they punish delay. The protective order alone can put you out of your home and away from your children before any evidence is tested.",
      "Farris Law Firm defends DV cases at all four Orange County justice centers with discretion, urgency, and care for the whole family. We know how these cases are filed here, and we know the paths out of them.",
    ],
    charges: {
      heading: "Domestic Violence Charges in Orange County",
      items: [
        { name: "Corporal injury to a spouse or partner (PC 273.5)", desc: "A wobbler requiring a visible injury, chargeable as a felony with up to four years exposure. The injury element is often the battleground." },
        { name: "Domestic battery (PC 243(e)(1))", desc: "Misdemeanor battery against a partner with no injury required. Frequently overcharged from mutual arguments." },
        { name: "Criminal threats (PC 422)", desc: "A wobbler and potential strike based on words alone, which makes context and credibility everything." },
        { name: "Violation of a protective order (PC 273.6)", desc: "Even accidental or invited contact can be charged. We defend the violation and fight to modify the order." },
        { name: "Child endangerment and elder abuse allegations", desc: "Charges that expand a family argument into multiple counts. Careful, early defense keeps cases from snowballing.",
        },
      ],
    },
    penalties: {
      heading: "What a DV Conviction Carries Beyond Jail",
      note: "The custody exposure is only part of the picture. These collateral consequences are why DV charges must be fought, not pled away quickly.",
      rows: [
        { charge: "Misdemeanor DV battery", level: "Misdemeanor", exposure: "Up to 1 year jail, 52 week batterer program, protective order" },
        { charge: "Corporal injury (felony)", level: "Felony wobbler", exposure: "2, 3, or 4 years; strike if great bodily injury found" },
        { charge: "Firearms", level: "All DV convictions", exposure: "Lifetime federal firearm prohibition, even for misdemeanors" },
        { charge: "Immigration and licensing", level: "All DV convictions", exposure: "Deportability risk for non-citizens; discipline for licensed professionals" },
      ],
    },
    defenses: {
      heading: "How DV Cases Get Won",
      lead: "These cases turn on credibility, context, and injuries that often do not match the story:",
      items: [
        "Self-defense and mutual combat: arguments have two sides, and injuries on both parties tell that story",
        "False and exaggerated allegations, especially amid custody disputes and breakups",
        "Injury evidence that contradicts the narrative: photographs, medical records, and timing",
        "911 audio and body camera footage that undercuts the written report",
        "Recanting or uncooperative witnesses, handled lawfully and effectively",
        "Negotiated outcomes that avoid the DV designation and its firearm and immigration consequences",
      ],
    },
    faqs: [
      {
        q: "My partner does not want to press charges. Will the case be dropped?",
        a: "Not automatically: Orange County prosecutors file and pursue DV cases even with reluctant accusers, and only the DA can dismiss. But an uncooperative complaining witness materially weakens the case, and we know how to translate that into reductions and dismissals lawfully.",
      },
      {
        q: "Can I go home after a domestic violence arrest?",
        a: "Usually not immediately: emergency protective orders bar contact and often residence for days to weeks, and criminal protective orders follow at arraignment. We appear at the earliest hearing to argue for peaceful contact or modification so your family can function while the case is fought.",
      },
      {
        q: "Will I lose my gun rights?",
        a: "Any DV conviction, including a misdemeanor, triggers a lifetime federal firearm prohibition. If firearms matter to you or your career, tell us immediately: charge selection is everything, and non-DV resolutions avoid the ban.",
      },
      {
        q: "Is diversion available for domestic violence in Orange County?",
        a: "DV is excluded from California's general misdemeanor diversion statute, but other paths exist depending on the case: reductions to non-DV offenses, deferred arrangements, and outright dismissals where the evidence is weak. We assess your realistic options honestly in a free, confidential call.",
      },
    ],
    related: [
      { label: "Domestic Violence Defense Overview", href: "/domestic-violence/" },
      { label: "Assault and Battery", href: "/assault/" },
      { label: "Aggravated Assault", href: "/aggravated-assault/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/orange-county-domestic-violence-lawyer.webp",
  },
  {
    slug: "orange-county-gun-charges-lawyer",
    title: "Orange County Gun Charges Lawyer | Weapons Defense | Farris Law Firm",
    metaDescription:
      "Charged with a gun or weapons offense in Orange County? Farris Law Firm defends CCW violations, prohibited possession, and firearm enhancements. Free 24/7 consultations.",
    h1: "Orange County Gun Charges Lawyer",
    kicker: "Orange County",
    tldr: "Most Orange County gun charges are not about criminals with guns: they are about permit technicalities, cars searched on thin justification, and owners who did not know a rule existed. Common charges like carrying concealed without a permit are wobblers that can often be kept at misdemeanor level or reduced, and many gun cases rise or fall on the legality of the search that found the firearm.",
    intro: [
      "California layers some of the strictest weapons laws in the country on top of federal rules, and ordinary gun owners get caught in the gaps constantly: a firearm moved incorrectly during a trip to the range, a magazine bought legally out of state, a CCW technicality at a traffic stop.",
      "Farris Law Firm defends weapons cases across Orange County with a focus on two things: the search that found the weapon, and keeping charges at levels that protect your record and your rights.",
    ],
    charges: {
      heading: "Weapons Charges We Defend",
      items: [
        { name: "Carrying concealed without a permit (PC 25400)", desc: "The most common OC gun charge, often from vehicle stops. Usually a misdemeanor for otherwise lawful owners, and frequently defensible." },
        { name: "Loaded firearm in public (PC 25850)", desc: "Charged alongside concealed carry counts. Definitions of loaded and public create real defense openings." },
        { name: "Felon or prohibited person in possession (PC 29800)", desc: "Felony exposure where knowledge and possession are the battlegrounds, and where old priors can sometimes be reduced to restore eligibility." },
        { name: "Assault weapons and magazine violations", desc: "A shifting legal landscape with genuine compliance confusion, which matters at charging and in negotiation." },
        { name: "Firearm enhancements", desc: "Gun allegations attached to other charges can add years or decades. Defeating the enhancement is often the core of the defense." },
      ],
    },
    penalties: {
      heading: "Exposure for Common Gun Charges",
      note: "Many weapons offenses are wobblers, and outcomes swing widely with facts and advocacy.",
      rows: [
        { charge: "Concealed carry, no permit (standard)", level: "Misdemeanor", exposure: "Up to 1 year county jail; often reducible or divertible" },
        { charge: "Concealed carry with priors or stolen gun", level: "Felony", exposure: "16 months to 3 years" },
        { charge: "Prohibited person in possession", level: "Felony", exposure: "16 months to 3 years" },
        { charge: "Firearm use enhancement (PC 12022.53)", level: "Enhancement", exposure: "10 years to life added to underlying charge" },
      ],
    },
    defenses: {
      heading: "How Gun Cases Get Won",
      lead: "Weapons cases are search-and-knowledge cases:",
      items: [
        "Suppression: if the stop or search was unlawful, the gun disappears from the case",
        "Knowledge: prosecutors must prove you knew the weapon was there, a real fight in shared cars and homes",
        "Momentary and transitory possession defenses",
        "Locked container and transport compliance: many arrests misread the exemptions",
        "Charge-level fights on wobblers to protect records and firearm rights",
        "Restoring rights: reductions and relief that undo old prohibitions where the law allows",
      ],
    },
    faqs: [
      {
        q: "I have a CCW from another state. Why was I arrested in Orange County?",
        a: "California does not recognize out-of-state carry permits, which surprises visitors every week. The good news: courts and prosecutors understand honest mistakes, and first-offense cases like this are often strong candidates for reductions or diversion with prepared counsel.",
      },
      {
        q: "The gun was in my trunk, unloaded. Is that legal?",
        a: "Transporting an unloaded handgun in a locked container, including a locked trunk, is generally lawful for eligible owners. Arrests happen anyway when officers misapply the rules, and those cases are defensible. Tell us exactly how the firearm was stored and found.",
      },
      {
        q: "Can I get my gun rights back after an old conviction?",
        a: "Sometimes. Wobbler felonies reduced to misdemeanors under 17(b) can restore California firearm eligibility, though certain convictions, including DV offenses, carry federal bans that reductions do not fix. We map your specific record honestly before you spend money on the wrong tool.",
      },
      {
        q: "Police found the gun after searching my car. Was that legal?",
        a: "It depends entirely on the details: the reason for the stop, what created probable cause, and consent. Vehicle searches are the single most litigated issue in gun cases, and winning the suppression motion usually ends the prosecution. Bring us the timeline in a free call.",
      },
    ],
    related: [
      { label: "Weapons Charges Overview", href: "/guns/" },
      { label: "Robbery Defense", href: "/robbery/" },
      { label: "Felony vs. Misdemeanor in California", href: "/blog/felony-vs-misdemeanor-california/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/orange-county-gun-charges-lawyer.webp",
  },
  // ---- Practice gap pages ----
  {
    slug: "juvenile-defense",
    title: "Juvenile Defense Lawyer | Orange County & Los Angeles | Farris Law Firm",
    metaDescription:
      "Your child was arrested or cited? Farris Law Firm defends juveniles in Orange County and LA, fights adult transfers, and seals records. Free consultations for parents 24/7.",
    h1: "Juvenile Defense Attorney",
    kicker: "Orange County & Los Angeles",
    tldr: "The juvenile system is built around rehabilitation, not punishment, and that design gives a prepared defense real leverage: informal supervision, diversion, and deferred entry of judgment can all end a case with no sustained petition. The two fights that matter most are keeping serious cases out of adult court at the transfer hearing, and sealing the record afterward so one bad night does not follow your child into college applications and job interviews.",
    intro: [
      "When your child is arrested or cited, you are suddenly navigating a system with its own courts, its own vocabulary, and its own stakes: not just consequences today, but records that can shadow college, careers, and licensing for decades.",
      "Farris Law Firm defends minors throughout Orange County and Los Angeles, guides parents through every step, and finishes the job with record sealing so the case truly ends.",
    ],
    charges: {
      heading: "How We Help Families in the Juvenile System",
      items: [
        { name: "Detention hearings", desc: "The first, urgent fight: getting your child released home rather than held, usually within days of arrest." },
        { name: "Informal supervision and diversion", desc: "Programs that resolve cases with no sustained petition at all, the juvenile equivalent of a dismissal. First offenses are strong candidates." },
        { name: "Contested jurisdiction hearings", desc: "The juvenile trial: challenging the evidence before a judge when the case should be fought rather than resolved." },
        { name: "Transfer (adult court) hearings", desc: "For serious allegations, prosecutors may seek to try minors 16 and older as adults. Winning this hearing keeps the case, and the stakes, in juvenile court." },
        { name: "Record sealing (WIC 781)", desc: "After the case, we petition to seal the record so it is treated as if it never happened for nearly all purposes." },
      ],
    },
    penalties: {
      heading: "Juvenile Outcomes, Best to Worst",
      note: "Juvenile dispositions focus on rehabilitation, and the range of outcomes is wide, which is exactly why advocacy matters.",
      rows: [
        { charge: "Informal supervision / diversion", level: "No petition sustained", exposure: "Case dismissed after completion; strongest outcome" },
        { charge: "Deferred entry of judgment", level: "Admission deferred", exposure: "Dismissal after program completion" },
        { charge: "Wardship with probation at home", level: "Petition sustained", exposure: "Conditions and supervision while living at home" },
        { charge: "Out-of-home placement or secure track", level: "Most serious", exposure: "Reserved for grave cases; fighting transfer keeps kids out of adult prison" },
      ],
    },
    defenses: {
      heading: "What Strong Juvenile Defense Looks Like",
      lead: "Kids are not small adults, and the law increasingly agrees:",
      items: [
        "Miranda and interrogation challenges: minors must consult counsel before waiving rights in many situations, and coerced statements are common",
        "School search and resource officer issues with their own legal standards",
        "Pushing for diversion and informal outcomes before a petition is ever sustained",
        "Fighting transfer to adult court with evidence of maturity, amenability, and context",
        "Coordinating the school discipline case alongside the court case",
        "Sealing the record when it ends, every agency copy of it",
      ],
    },
    faqs: [
      {
        q: "Will my child be tried as an adult?",
        a: "Only if the prosecutor seeks transfer for a serious offense and a judge grants it after a full hearing on maturity, history, and rehabilitation prospects; minors under 16 generally cannot be transferred at all. Winning the transfer hearing is the single highest-stakes fight in juvenile law, and it is winnable. Read our guide on when juveniles are charged as adults.",
      },
      {
        q: "Do juvenile records disappear automatically at 18?",
        a: "Not always. Some qualifying records are sealed automatically, but many require a petition under WIC 781, and unsealed records surface on background checks. We treat sealing as part of the case, not an afterthought. Our juvenile records guide covers the details.",
      },
      {
        q: "Should my child talk to the police or school investigators?",
        a: "Not before speaking with a lawyer, and California law now requires minors to consult counsel before police interrogation waivers in most cases. Politely decline on your child's behalf and call us: statements are where juvenile cases are lost.",
      },
      {
        q: "Do parents attend juvenile court?",
        a: "Yes, parents are expected at hearings and are part of the process throughout. We prepare both of you for what each hearing means and what the judge is looking for, so the family walks in composed and credible.",
      },
    ],
    related: [
      { label: "When Are Juveniles Charged as Adults?", href: "/blog/when-are-juveniles-charged-as-adults-in-california/" },
      { label: "Sealing Juvenile Records", href: "/blog/sealing-and-expunging-juvenile-records/" },
      { label: "Mission Viejo Criminal Defense", href: "/mission-viejo-criminal-defense-lawyer/" },
    ],
    image: "/images/generated/juvenile-defense.webp",
  },
  {
    slug: "shoplifting",
    title: "Shoplifting & Petty Theft Lawyer | Orange County & LA | Farris Law Firm",
    metaDescription:
      "Cited or arrested for shoplifting? First offenses can often end with no conviction through diversion. Farris Law Firm defends petty theft cases in OC and LA. Free 24/7 consultations.",
    h1: "Shoplifting and Petty Theft Defense Attorney",
    kicker: "Orange County & Los Angeles",
    tldr: "Shoplifting under $950 is a misdemeanor in California, but it is still a theft conviction that follows you onto every background check, and stores pursue civil demands on top of the criminal case. The good news: first offenses are among the most resolvable charges in criminal law, with judicial diversion, civil compromise, and negotiated reductions regularly ending cases with no conviction at all. Do not pay the store's demand letter or plead at arraignment before talking to a lawyer.",
    intro: [
      "A shoplifting case usually starts small: a detention by loss prevention, a citation, a court date that feels survivable. The trap is treating it casually. A theft conviction, even a misdemeanor, is a permanent credibility mark that employers specifically screen for.",
      "Farris Law Firm defends shoplifting and petty theft cases across Orange County and Los Angeles with one goal: ending the case without a theft conviction on your record.",
    ],
    charges: {
      heading: "Theft Charges in Retail Cases",
      items: [
        { name: "Shoplifting (PC 459.5)", desc: "Entering an open business intending to steal $950 or less. A misdemeanor for most defendants, and the most diversion-friendly charge in this area." },
        { name: "Petty theft (PC 484/488)", desc: "Theft of $950 or less generally. Often charged alongside or instead of shoplifting." },
        { name: "Grand theft (PC 487)", desc: "Over $950, a wobbler that can be charged as a felony. Valuation fights matter here." },
        { name: "Burglary allegations in retail cases", desc: "Prosecutors sometimes stretch facts into burglary. Pushing the charge back down is a core defense job." },
        { name: "Estes robbery exposure", desc: "A scuffle with a guard on the way out can turn shoplifting into robbery, a strike. These cases need serious, immediate defense." },
      ],
    },
    penalties: {
      heading: "What a Shoplifting Case Can Involve",
      note: "Exposure for typical misdemeanor retail theft. The realistic goal in most first offense cases is avoiding conviction entirely.",
      rows: [
        { charge: "Shoplifting / petty theft", level: "Misdemeanor", exposure: "Up to 6 months jail, $1,000 fine, probation" },
        { charge: "Grand theft", level: "Wobbler", exposure: "Up to 1 year jail, or 16 months to 3 years as a felony" },
        { charge: "Civil demand letter", level: "Separate from court", exposure: "Store demands money regardless of criminal outcome; handle with counsel" },
        { charge: "Collateral", level: "All theft convictions", exposure: "A crime of dishonesty on background checks; immigration risk for non-citizens" },
      ],
    },
    defenses: {
      heading: "How Retail Theft Cases Get Resolved Well",
      lead: "Between real defenses and structured off-ramps, first-time defendants have more options here than almost anywhere in criminal law:",
      items: [
        "Judicial diversion under PC 1001.95: complete conditions, case dismissed",
        "Civil compromise: restitution accepted in exchange for dismissal in appropriate cases",
        "Lack of intent: forgotten items, distraction, and honest mistakes are defenses, not excuses",
        "Video and loss prevention records that contradict the report",
        "Unlawful detention and search by store security",
        "Negotiated reductions to non-theft offenses that protect your record",
      ],
    },
    faqs: [
      {
        q: "The store sent me a letter demanding hundreds of dollars. Do I have to pay?",
        a: "That civil demand is separate from your criminal case, and paying it does not resolve the charge. Do not pay or respond before talking to a lawyer: the demand can sometimes be leveraged into a civil compromise dismissal, and handled wrong it just costs you money for nothing.",
      },
      {
        q: "Will a first-offense shoplifting charge really be dismissed?",
        a: "Very often, yes. Between judicial diversion, civil compromise, and negotiation, most first-time clients we represent end their case with no theft conviction. See our guide on why a lawyer matters for shoplifting and our recent victories.",
      },
      {
        q: "Do I have to appear in court?",
        a: "Usually not: for most misdemeanor theft cases we appear for you under Penal Code 977, and many cases resolve in one or two appearances you never attend.",
      },
      {
        q: "I was cited at South Coast Plaza / The District / a mall. Does the location matter?",
        a: "It tells us which courthouse and prosecutor you face, and mall cases come with extensive camera and loss prevention records we obtain and use. See our Costa Mesa and Tustin pages for the local specifics.",
      },
    ],
    related: [
      { label: "Theft Crimes Overview", href: "/theft/" },
      { label: "Why You Need a Lawyer for Shoplifting", href: "/blog/why-do-i-need-a-lawyer-for-shoplifting/" },
      { label: "What to Do Right After a Theft Arrest", href: "/blog/what-to-do-right-after-a-theft-arrest/" },
      { label: "Costa Mesa Criminal Defense", href: "/costa-mesa-criminal-defense-lawyer/" },
    ],
    image: "/images/generated/shoplifting.webp",
  },
  {
    slug: "probation-violations",
    title: "Probation Violation Lawyer | Orange County & LA | Farris Law Firm",
    metaDescription:
      "Accused of violating probation in Orange County or LA? Farris Law Firm defends violation hearings, fights custody, and pursues early termination. Free 24/7 consultations.",
    h1: "Probation Violation Defense Attorney",
    kicker: "Orange County & Los Angeles",
    tldr: "A probation violation is not a new conviction: it is an accusation, decided by a judge at a hearing where you have the right to counsel and the standard of proof is lower but the outcomes are wide open. Judges can reinstate probation, modify terms, or impose the suspended sentence, and which one happens depends heavily on preparation and presentation. Handled proactively, even old violations and bench warrants can end with probation reinstated, as our victories show.",
    intro: [
      "Probation is a suspended sentence with conditions, and life gets in the way of conditions: a missed class, an unpaid fine, a failed test, a new arrest. When it does, the violation process moves fast and the exposure is the sentence that was hanging over you all along.",
      "Farris Law Firm defends violation hearings across Orange County and Los Angeles, and we work the other side of the same coin: modifying unworkable terms and terminating probation early so the risk ends sooner.",
    ],
    charges: {
      heading: "Violation Situations We Handle",
      items: [
        { name: "Technical violations", desc: "Missed classes, fees, or check-ins. The most defensible category, especially with proof of circumstances and a plan to cure." },
        { name: "New arrest while on probation", desc: "The violation and the new case must be defended together: strategy in one shapes the other." },
        { name: "Failed or missed drug tests", desc: "Testing issues, prescriptions, and treatment alternatives all matter at the hearing." },
        { name: "Old violations and bench warrants", desc: "We recall warrants and resolve years-old violations proactively, often without custody, as in our reinstatement of probation on a 6 year old warrant." },
        { name: "Early termination and modification (PC 1203.3)", desc: "Ending probation ahead of schedule or fixing terms that no longer fit your life, which also unlocks expungement sooner." },
      ],
    },
    penalties: {
      heading: "What a Judge Can Do at a Violation Hearing",
      note: "The full range is on the table at every hearing, which is why preparation and presentation drive outcomes.",
      rows: [
        { charge: "Reinstate probation", level: "Best outcome", exposure: "Same terms resume; often with proof of compliance efforts" },
        { charge: "Modify terms", level: "Common", exposure: "Added classes, testing, or time, in exchange for staying out of custody" },
        { charge: "Jail as a condition", level: "Middle outcome", exposure: "A custody sanction short of the full sentence" },
        { charge: "Revoke and impose sentence", level: "Worst outcome", exposure: "The original suspended sentence, which is what we fight to prevent" },
      ],
    },
    defenses: {
      heading: "How We Defend Violation Hearings",
      lead: "Violation hearings are persuasion hearings, and judges respond to preparation:",
      items: [
        "Contesting the violation itself: the standard is lower than trial, but proof is still required",
        "Curing before the hearing: completed classes, paid fines, and enrollment change outcomes",
        "Context and documentation: medical, work, and family circumstances presented properly",
        "Coordinated defense when a new case triggered the violation",
        "Proactive warrant recalls so you walk in voluntarily instead of being brought in",
        "Converting the moment: violations resolved alongside modification or early termination motions",
      ],
    },
    faqs: [
      {
        q: "Will I go to jail at my probation violation hearing?",
        a: "Not necessarily, and preparation is the difference. Judges have the full range from reinstatement to imposing the suspended sentence, and they respond to cured violations, documentation, and credible plans. Walking in prepared with counsel beats being dragged in on a warrant every time.",
      },
      {
        q: "There is a warrant out for me on an old violation. What should I do?",
        a: "Handle it proactively: we calendar the case, appear with you (or for you where permitted), and ask the judge to recall the warrant. We have had probation reinstated on a warrant that was six years old. Every traffic stop is a gamble until it is recalled.",
      },
      {
        q: "Can probation end early?",
        a: "Yes. Penal Code 1203.3 lets a judge terminate probation early, typically after substantial completion with clean compliance, and it is often paired immediately with expungement. We have won early terminations; see our recent victories and our expungement page.",
      },
      {
        q: "Is the standard of proof really lower at a violation hearing?",
        a: "Yes: preponderance of the evidence, decided by a judge rather than a jury. That makes preparation and credibility even more important, because close calls go to whoever presented better.",
      },
    ],
    related: [
      { label: "Bench Warrants and Failure to Appear", href: "/bench-warrants-failure-to-appear/" },
      { label: "Expungement Services", href: "/expungement/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/probation-violations.webp",
  },
  {
    slug: "hit-and-run",
    title: "Hit and Run Lawyer | Orange County & Los Angeles | Farris Law Firm",
    metaDescription:
      "Accused of hit and run in Orange County or LA? Many cases resolve through civil compromise or collapse on identity evidence. Farris Law Firm defends VC 20002 and 20001 cases. Free 24/7 consultations.",
    h1: "Hit and Run Defense Attorney",
    kicker: "Orange County & Los Angeles",
    tldr: "Hit and run charges come in two very different sizes: misdemeanor property-damage cases under Vehicle Code 20002, and felony injury cases under VC 20001. The misdemeanor version is one of the most resolvable charges in California, with civil compromise (paying the damage in exchange for dismissal) available in many cases, and identity is a genuine battleground since prosecutors must prove who was driving. We have won dismissals in these cases, including one built on mistaken identity.",
    intro: [
      "Most hit and run cases are not dramatic flights from mangled wrecks. They are parking lot taps, clipped mirrors, and panicked moments that a camera or a witness turned into a criminal case weeks later, sometimes before you even knew there was damage.",
      "Farris Law Firm defends hit and run allegations across Orange County and Los Angeles, and these cases reward early counsel more than almost any other: what happens before charges are filed often decides everything.",
    ],
    charges: {
      heading: "Hit and Run Charges in California",
      items: [
        { name: "Misdemeanor hit and run (VC 20002)", desc: "Leaving after property damage without exchanging information. Up to 6 months jail exposure, but civil compromise and diversion resolve many of these." },
        { name: "Felony hit and run (VC 20001)", desc: "Leaving after an accident involving injury. A wobbler with prison exposure that demands immediate, serious defense." },
        { name: "Pre-filing investigations", desc: "Police often send letters or call before charging. This window is where we do our best work, sometimes preventing charges entirely." },
        { name: "Related license consequences", desc: "DMV points and suspension exposure alongside the criminal case." },
      ],
    },
    penalties: {
      heading: "Exposure in Hit and Run Cases",
      note: "The gap between best and worst outcomes in these cases is enormous, and early counsel is usually what decides where you land.",
      rows: [
        { charge: "VC 20002 (property damage)", level: "Misdemeanor", exposure: "Up to 6 months jail, fines, 2 DMV points" },
        { charge: "VC 20001 (injury)", level: "Wobbler", exposure: "Up to 1 year jail, or 16 months to 3 years as a felony" },
        { charge: "VC 20001(b)(2) (death or serious injury)", level: "Felony", exposure: "2 to 4 years state prison" },
        { charge: "Civil compromise (PC 1377)", level: "Resolution path", exposure: "Damage paid, case dismissed, in qualifying misdemeanor cases" },
      ],
    },
    defenses: {
      heading: "How Hit and Run Cases Get Won",
      lead: "Prosecutors must prove you were driving, you knew about the accident, and you willfully left. Each element is attackable:",
      items: [
        "Identity: registered owner is not proof of driver, and we have won a complete dismissal on mistaken identity",
        "Lack of knowledge: minor contact genuinely goes unnoticed, especially in trucks and older cars",
        "No damage or disputed causation: no damage means no duty triggered",
        "Civil compromise: making the property owner whole in exchange for dismissal",
        "Pre-filing advocacy that resolves the matter before charges exist",
        "Suppression of statements made to insurers and police without counsel",
      ],
    },
    faqs: [
      {
        q: "The police left a card on my door about a hit and run. What do I do?",
        a: "Do not call them back yourself: returning that call without counsel is how ordinary people talk themselves into charges. Call us first. We contact the investigator, control the flow of information, and often resolve the matter before anything is filed.",
      },
      {
        q: "What is a civil compromise and do I qualify?",
        a: "In qualifying misdemeanor cases, Penal Code 1377 lets the case be dismissed when the person who suffered the damage is made whole and the court approves. It is a powerful, underused tool in VC 20002 cases, and we have used it and similar resolutions to win dismissals, including diversion on a hit and run in our recent victories.",
      },
      {
        q: "Should I just call my insurance company and explain?",
        a: "Talk to a lawyer first. Insurer statements are recorded, discoverable, and regularly become the prosecution's best evidence on identity and knowledge. There is a right order of operations here, and we will walk you through it in a free call.",
      },
      {
        q: "Nobody was hurt and the damage was tiny. Is this really a criminal case?",
        a: "It can be, technically, but small-damage VC 20002 cases are also the most resolvable ones: civil compromise, diversion, and reductions to non-criminal outcomes are all realistic with counsel. The mistake is ignoring it and letting a warrant or filing surprise you.",
      },
    ],
    related: [
      { label: "Traffic Offenses Overview", href: "/traffic-offenses/" },
      { label: "Bench Warrants", href: "/bench-warrants-failure-to-appear/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/hit-and-run.webp",
  },
  // ---- Charge gap pages (competitive coverage) ----
  {
    slug: "burglary",
    title: "Burglary Defense Lawyer | Orange County & Los Angeles | Farris Law Firm",
    metaDescription:
      "Charged with burglary under PC 459 in Orange County or Los Angeles? First degree residential burglary is a strike. Farris Law Firm builds serious defenses. Free 24/7 consultations.",
    h1: "Burglary Defense Attorney",
    tldr: "Burglary under Penal Code 459 is entering a structure with intent to commit theft or any felony inside, and no one has to be home and nothing has to actually be taken. First degree (residential) burglary is a felony and a strike carrying up to six years; second degree (commercial) is a wobbler. Because the whole charge turns on your intent at the moment of entry, which prosecutors have to prove, burglary is far more defensible than it looks, and it is frequently reducible to trespass or theft.",
    intro: [
      "Burglary is one of the most misunderstood charges in California. People picture a masked break-in, but the law is far broader: walking into an open store intending to shoplift, or entering a garage or a car to take something, can all be charged as burglary. Critically, the crime is complete at the moment of entry with the wrong intent, which is exactly why intent is the whole battleground.",
      "Farris Law Firm defends burglary cases across Orange County and Los Angeles, and we understand how often these charges are overfiled. We have reduced serious felonies to misdemeanors and dismissed cases outright, and burglary charges are strong candidates for both.",
    ],
    charges: {
      heading: "How California Charges Burglary",
      items: [
        { name: "First degree burglary (PC 459/460(a))", desc: "Burglary of an inhabited dwelling: a house, apartment, or occupied structure. Always a felony and a strike, carrying 2, 4, or 6 years." },
        { name: "Second degree burglary (PC 460(b))", desc: "Burglary of any other structure, like a store or business. A wobbler that can be charged as a felony or misdemeanor." },
        { name: "Auto burglary (PC 459)", desc: "Entering a locked vehicle intending to steal or commit a felony. The locked element is often the defense." },
        { name: "Commercial burglary vs. shoplifting", desc: "Since Prop 47, entering an open business intending to steal $950 or less is shoplifting (PC 459.5), not burglary. Prosecutors still overcharge it, and pushing it back down matters." },
        { name: "Possession of burglary tools (PC 466)", desc: "A misdemeanor often charged alongside burglary that rises or falls on intent." },
      ],
    },
    penalties: {
      heading: "Penalties for a Burglary Conviction",
      note: "Residential burglary is a strike with lasting sentencing consequences, which is why the degree and the charge itself must be fought, not just the sentence.",
      rows: [
        { charge: "First degree (residential)", level: "Felony (strike)", exposure: "2, 4, or 6 years state prison" },
        { charge: "Second degree (commercial)", level: "Wobbler", exposure: "Up to 1 year jail, or 16 months to 3 years as a felony" },
        { charge: "Auto burglary", level: "Wobbler", exposure: "Up to 1 year jail, or 16 months to 3 years" },
        { charge: "Shoplifting (Prop 47)", level: "Misdemeanor", exposure: "Up to 6 months jail; the goal in many miscoded cases" },
      ],
    },
    defenses: {
      heading: "Defenses That Work in Burglary Cases",
      lead: "Burglary requires entry plus intent to commit a crime inside at the time of entry. Both elements are attackable:",
      items: [
        "No felonious intent at entry: if the intent formed later, or never existed, it is not burglary",
        "Mistaken identity: burglary cases lean on shaky IDs, partial video, and circumstantial evidence",
        "Consent or right to enter: entering a place you were allowed to be defeats the charge",
        "Prop 47 reclassification: forcing miscoded shoplifting cases back down from burglary",
        "The structure or vehicle was not locked or did not qualify under the statute",
        "Suppression of unlawful searches and identifications that produced the evidence",
      ],
    },
    faqs: [
      {
        q: "Can I be charged with burglary if I did not actually steal anything?",
        a: "Yes, and this shocks people: burglary is complete the moment you enter with the intent to commit theft or a felony, whether or not you succeed or take anything. That also cuts the other way as a defense, because prosecutors must prove what you intended at the instant of entry, which is rarely as clear as the police report claims.",
      },
      {
        q: "What is the difference between burglary and robbery?",
        a: "Robbery is taking property from a person by force or fear. Burglary is entering a structure intending to commit a crime inside, with no victim required to be present. They are completely different charges with different defenses. Our guide on robbery versus burglary breaks it down in detail.",
      },
      {
        q: "Is burglary always a felony?",
        a: "No. First degree residential burglary is always a felony and a strike, but second degree (commercial) burglary is a wobbler that can be a misdemeanor, and many cases that should be charged as misdemeanor shoplifting under Prop 47 get overcharged as burglary. Reducing the charge level is often the core of the defense.",
      },
      {
        q: "The police say I was on camera near the scene. Is that enough to convict me?",
        a: "Not by itself. Being near a location is not entering it with felonious intent, and camera footage frequently helps the defense by showing what actually happened. Before accepting any offer, have a lawyer obtain and watch every second of the footage.",
      },
    ],
    related: [
      { label: "Robbery Defense", href: "/robbery/" },
      { label: "Theft Crimes", href: "/theft/" },
      { label: "Robbery vs. Burglary Explained", href: "/blog/robbery-vs-burglary-legal-distinctions-and-defense-approaches/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/burglary.webp",
  },
  {
    slug: "criminal-threats",
    title: "Criminal Threats Lawyer (PC 422) | Orange County & LA | Farris Law Firm",
    metaDescription:
      "Charged with criminal threats under PC 422 in Orange County or Los Angeles? It is a wobbler and potential strike based on words alone. Farris Law Firm defends these cases. Free 24/7 consultations.",
    h1: "Criminal Threats Defense Attorney",
    tldr: "Criminal threats under Penal Code 422 is one of the few offenses you can be convicted of for words alone, and it is a wobbler that can be a felony and a strike. But the law sets a high bar: the threat must be unequivocal, immediate, and specific, and it must have put the person in sustained, reasonable fear. Angry outbursts, vague statements, and heat-of-the-moment words often fail that test, which makes these cases very defensible, especially where they grew out of a family argument or a breakup.",
    intro: [
      "Criminal threats charges usually come out of emotional moments: a heated argument, a bitter breakup, a road rage exchange, a threatening text sent in anger. Prosecutors, especially alongside domestic violence cases, file them aggressively, but the statute was written to punish genuine, credible threats, not every angry word.",
      "Farris Law Firm defends PC 422 cases across Orange County and Los Angeles. Because so much turns on context, credibility, and the exact words used, these cases reward the kind of preparation a limited-caseload firm can actually provide.",
    ],
    charges: {
      heading: "What the Prosecution Must Prove",
      items: [
        { name: "A threat of great bodily injury or death", desc: "The words must threaten serious harm, not just insult, annoy, or warn." },
        { name: "Unequivocal, unconditional, immediate, and specific", desc: "Vague or conditional statements often fail this element. This is where many cases fall apart." },
        { name: "Intent that it be taken as a threat", desc: "The words must be meant as a threat, communicated by any means: spoken, texted, emailed, or through a third party." },
        { name: "Actual, sustained, and reasonable fear", desc: "The person must have genuinely feared for their safety, that fear must have lasted beyond the moment, and it must have been reasonable." },
      ],
    },
    penalties: {
      heading: "Penalties for Criminal Threats",
      note: "As a wobbler and a strike, the charge level carries lasting consequences well beyond the sentence.",
      rows: [
        { charge: "Criminal threats (misdemeanor)", level: "Misdemeanor", exposure: "Up to 1 year county jail" },
        { charge: "Criminal threats (felony)", level: "Felony (strike)", exposure: "16 months, 2, or 3 years state prison" },
        { charge: "With a deadly weapon", level: "Enhancement", exposure: "An additional year, consecutive" },
        { charge: "Each threat", level: "Separate count", exposure: "Multiple statements can be charged as multiple counts" },
      ],
    },
    defenses: {
      heading: "How Criminal Threats Cases Get Won",
      lead: "The statute's strict elements give a prepared defense real openings:",
      items: [
        "The words were vague, conditional, or not truly immediate: a failed element means no crime",
        "No sustained fear: momentary or fleeting fear does not satisfy the statute",
        "The fear was not reasonable given the full context",
        "Protected or emotional speech: venting, hyperbole, and anger are not always criminal threats",
        "False or exaggerated allegations, common in custody disputes and breakups",
        "Texts and recordings that show the real tone and context of the exchange",
      ],
    },
    faqs: [
      {
        q: "Can I really be charged with a crime just for something I said?",
        a: "Yes, PC 422 is one of the few pure-speech crimes in California. But precisely because it punishes words, the law limits it carefully: the threat must be specific, immediate, and credible, and it must have caused sustained, reasonable fear. Many angry statements do not clear that bar, which is the heart of the defense.",
      },
      {
        q: "I sent the text but I never meant to actually hurt anyone. Does that matter?",
        a: "It can matter a great deal. The law requires the statement be intended as a threat and be capable of causing sustained, reasonable fear. Context, your relationship, and what happened before and after all shape whether words fired off in frustration meet the legal definition. We build that context.",
      },
      {
        q: "The alleged victim was only scared for a minute. Is that enough?",
        a: "Often not. The statute requires sustained fear, meaning more than momentary or fleeting. Where the fear was brief or the person kept interacting normally afterward, that undercuts a key element, and we use it.",
      },
      {
        q: "This is attached to a domestic violence case. Does that change things?",
        a: "It raises the stakes and it means the two charges must be defended together, because a weakness in one often helps the other. See our domestic violence pages, and call us: PC 422 counts added to DV cases are frequently the most vulnerable part of the prosecution.",
      },
    ],
    related: [
      { label: "Domestic Violence Defense", href: "/domestic-violence/" },
      { label: "Orange County Domestic Violence Lawyer", href: "/orange-county-domestic-violence-lawyer/" },
      { label: "Assault and Battery", href: "/assault/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/criminal-threats.webp",
  },
  {
    slug: "drunk-in-public",
    title: "Drunk in Public Lawyer (PC 647(f)) | Orange County & LA | Farris Law Firm",
    metaDescription:
      "Cited for drunk in public under PC 647(f) in Orange County or LA? It is a real misdemeanor, but very defensible, and first offenders often qualify for diversion. Farris Law Firm can help. Free consultations.",
    h1: "Drunk in Public Defense Attorney",
    tldr: "Public intoxication under Penal Code 647(f) is a real misdemeanor that shows on background checks, not a simple ticket, but it is also one of the most defensible and resolvable charges in California. The law requires more than having been drinking: you must have been so intoxicated you could not care for your safety or others', or were obstructing a public way. Crowded bar-district arrests produce weak evidence, and first offenders frequently qualify for diversion that ends in dismissal.",
    intro: [
      "Drunk in public charges pour out of nightlife districts: downtown bar closings, beach towns on summer weekends, festivals and stadium events. Officers making quick decisions in chaotic crowds sweep up plenty of people who were tipsy but hardly a danger to anyone, which is exactly the gap the law and a good defense exploit.",
      "Farris Law Firm defends PC 647(f) cases across Orange County and Los Angeles. These are often a young professional's or student's first brush with the system, and the goal is simple: end it with no conviction on the record.",
    ],
    charges: {
      heading: "What the Law Actually Requires",
      items: [
        { name: "Willful intoxication", desc: "From alcohol, drugs, or a combination. Being under the influence alone is not the crime." },
        { name: "Unable to care for safety (yours or others')", desc: "The core element: you had to be so impaired you could not exercise care for your own or others' safety." },
        { name: "Or obstructing a public way", desc: "The alternative element: blocking or interfering with a street, sidewalk, or public path." },
        { name: "In a public place", desc: "Location matters, and the line between public and private is sometimes a defense in itself." },
      ],
    },
    penalties: {
      heading: "Penalties and Better Outcomes",
      note: "The exposure is limited, and for most first offenders the realistic goal is dismissal, not the maximum.",
      rows: [
        { charge: "Drunk in public (PC 647(f))", level: "Misdemeanor", exposure: "Up to 6 months county jail and a $1,000 fine" },
        { charge: "Realistic first-offense outcome", level: "Diversion", exposure: "Complete conditions, case dismissed, no conviction" },
        { charge: "Civil compromise / informal resolution", level: "Case-dependent", exposure: "Available in appropriate cases" },
        { charge: "Background check impact", level: "If convicted", exposure: "A misdemeanor conviction, which is why avoiding conviction matters" },
      ],
    },
    defenses: {
      heading: "How These Cases Get Dismissed",
      lead: "Between weak evidence and strong off-ramps, most first-offense 647(f) cases should not end in a conviction:",
      items: [
        "Judicial diversion under PC 1001.95: complete conditions and the case is dismissed",
        "You could actually care for yourself: buzzed is not the legal standard",
        "You were not in a public place, or were being helped by friends",
        "No objective signs beyond the officer's conclusion, which crowded scenes rarely support",
        "Unlawful detention or arrest without the required elements",
        "Reduction to an infraction or non-criminal resolution",
      ],
    },
    faqs: [
      {
        q: "Is drunk in public just a ticket, or a real criminal charge?",
        a: "It is a real misdemeanor under PC 647(f), and a conviction shows on background checks like any other. That is exactly why it is worth fighting rather than just paying: first offenders very often qualify for diversion or dismissal, which keeps your record clean.",
      },
      {
        q: "I was just a little drunk. Can they really charge me?",
        a: "They can charge it, but the law requires more than being under the influence: you must have been unable to care for your safety or others', or obstructing a public way. Simply being tipsy does not meet that standard, and that gap is the heart of the defense.",
      },
      {
        q: "Will this show up when I apply for jobs or school?",
        a: "A conviction can. That is why our goal for first offenders is diversion or dismissal, so there is nothing to disclose. For existing convictions, expungement can help; see our expungement page.",
      },
      {
        q: "Do I have to go to court for a drunk in public charge?",
        a: "Usually we can appear for you under Penal Code 977, and many of these cases resolve in one or two appearances you never attend. Call us and we will handle it while you get on with your life.",
      },
    ],
    related: [
      { label: "DUI Defense", href: "/dui/" },
      { label: "Expungement", href: "/expungement/" },
      { label: "Huntington Beach Criminal Defense", href: "/huntington-beach-criminal-defense-lawyer/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/drunk-in-public.webp",
  },
  {
    slug: "receiving-stolen-property",
    title: "Receiving Stolen Property Lawyer (PC 496) | OC & LA | Farris Law Firm",
    metaDescription:
      "Charged with receiving stolen property under PC 496 in Orange County or Los Angeles? Knowledge is the key element, and it is often the defense. Farris Law Firm can help. Free 24/7 consultations.",
    h1: "Receiving Stolen Property Defense Attorney",
    tldr: "Receiving stolen property under Penal Code 496 is a wobbler, and the element that decides almost every case is knowledge: the prosecution must prove you actually knew the property was stolen. People who bought something secondhand, borrowed a friend's item, or were simply in possession of something with a history they never knew often have a complete defense. Since Prop 47, most cases involving property worth $950 or less must be charged as a misdemeanor.",
    intro: [
      "Receiving stolen property is a charge that catches a lot of innocent people: the buyer of a cheap phone from an online marketplace, the friend who borrowed a tool, the person whose roommate's belongings turned out to be stolen. The law punishes knowingly buying, receiving, concealing, or withholding stolen property, and that word knowingly is where these cases are won and lost.",
      "Farris Law Firm defends PC 496 cases across Orange County and Los Angeles, and we focus relentlessly on the knowledge element, because the prosecution frequently cannot prove it.",
    ],
    charges: {
      heading: "How PC 496 Is Charged",
      items: [
        { name: "Receiving stolen property (PC 496(a))", desc: "Buying, receiving, concealing, or withholding property you knew was stolen. A wobbler after Prop 47, tied to the $950 value line." },
        { name: "Receiving a stolen vehicle (PC 496d)", desc: "Applies specifically to stolen cars, and is charged alongside or instead of auto theft." },
        { name: "Knowledge, the central element", desc: "Actual knowledge that the property was stolen. Prosecutors rely on circumstantial inferences that are often beatable." },
        { name: "Possession vs. receiving", desc: "Merely possessing an item is not the same as knowingly receiving stolen goods, a distinction that matters." },
      ],
    },
    penalties: {
      heading: "Penalties for Receiving Stolen Property",
      note: "Prop 47 pushed most low-value cases to misdemeanors. Higher-value property and priors raise the exposure.",
      rows: [
        { charge: "Value $950 or less", level: "Misdemeanor", exposure: "Up to 1 year county jail (usually less with no priors)" },
        { charge: "Value over $950", level: "Wobbler", exposure: "Up to 1 year jail, or 16 months to 3 years as a felony" },
        { charge: "Receiving a stolen vehicle (496d)", level: "Wobbler", exposure: "Up to 1 year jail, or 16 months to 3 years" },
        { charge: "Restitution", level: "Common", exposure: "Repayment to the property owner as a condition of resolution" },
      ],
    },
    defenses: {
      heading: "Defenses That Win These Cases",
      lead: "Knowledge is everything, and it is hard to prove:",
      items: [
        "No knowledge the property was stolen: the complete defense in most honest-buyer cases",
        "Innocent possession: holding an item without knowing its history is not a crime",
        "Intent to return the property to its owner",
        "You were the actual thief (you cannot be convicted of both stealing and receiving the same item, which can matter strategically)",
        "Prop 47 reclassification to a misdemeanor for property worth $950 or less",
        "Suppression of unlawful searches that produced the property",
      ],
    },
    faqs: [
      {
        q: "I bought it secondhand and had no idea it was stolen. Is that a defense?",
        a: "It is often a complete defense. PC 496 requires that you actually knew the property was stolen. An honest buyer who paid a fair price through a normal channel lacks that knowledge, and the prosecution's circumstantial case on that point is frequently beatable.",
      },
      {
        q: "How can they prove I knew it was stolen?",
        a: "They usually cannot prove it directly, so they argue from circumstances: a too-low price, altered serial numbers, or a suspicious source. Every one of those inferences can be challenged with the real story of how you got the item, which is the core of the defense.",
      },
      {
        q: "Is receiving stolen property a felony?",
        a: "It is a wobbler. Since Prop 47, cases involving property worth $950 or less must generally be charged as misdemeanors. Higher values and certain priors allow felony filing, and reducing the charge level is a common defense goal.",
      },
      {
        q: "Can I be charged with this and theft for the same property?",
        a: "Generally you cannot be convicted of both stealing and receiving the exact same property. Which theory the prosecution pursues can create strategic openings, and we use that structure to your advantage.",
      },
    ],
    related: [
      { label: "Theft Crimes", href: "/theft/" },
      { label: "Shoplifting and Petty Theft", href: "/shoplifting/" },
      { label: "Common Defenses for Theft Charges", href: "/blog/common-defenses-for-theft-charges/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/receiving-stolen-property.webp",
  },
  // ---- White collar / fraud cluster ----
  {
    slug: "white-collar-crimes",
    title: "White Collar Crime Lawyer | Orange County & Los Angeles | Farris Law Firm",
    metaDescription:
      "Under investigation for a white collar crime in Orange County or LA? Embezzlement, fraud, forgery, and identity theft cases are won in the pre-filing window. Farris Law Firm. Free confidential consultations.",
    h1: "White Collar Crime Defense Attorney",
    tldr: "White collar cases (embezzlement, fraud, forgery, identity theft, extortion) are usually won or lost long before trial, in the documents and in the pre-filing window. They rarely turn on whether something happened and almost always on intent: did you act with intent to defraud, or was it a mistake, an authorization you had, or a business dispute dressed up as a crime? These cases also carry outsized collateral damage to professional licenses and immigration status, and aggregate-loss enhancements can add years, which is why early, document-focused defense matters so much.",
    intro: [
      "A white collar investigation feels different from other criminal cases. There is often no arrest, just a letter, a subpoena, or a call from an investigator, and the people accused are usually professionals with careers, licenses, and reputations that a charge alone can damage. What you do in those first quiet weeks, before anything is filed, frequently decides the entire case.",
      "Farris Law Firm defends white collar and fraud allegations across Orange County and Los Angeles with total discretion and a document-first approach. These cases reward the deep, unhurried preparation a limited-caseload firm can actually provide.",
    ],
    charges: {
      heading: "White Collar and Fraud Charges We Defend",
      items: [
        { name: "Embezzlement (PC 503)", desc: "Theft by someone entrusted with money or property, from employees to fiduciaries. The trust relationship is what makes it embezzlement." },
        { name: "Identity theft (PC 530.5)", desc: "Obtaining or using another person's identifying information for an unlawful purpose. A wobbler with serious exposure." },
        { name: "Credit and debit card fraud (PC 484e to 484j)", desc: "Theft, forgery, and fraudulent use of access cards. Charged as petty or grand theft depending on value." },
        { name: "Forgery (PC 470)", desc: "Signing another's name, or making or altering a document, with intent to defraud." },
        { name: "Extortion (PC 518)", desc: "Obtaining property or an official act through wrongful threats, including threats to expose. A felony." },
        { name: "Fraud offenses generally", desc: "Insurance fraud, real estate and mortgage fraud, check fraud, and related schemes, all built on the same intent-to-defraud element." },
      ],
    },
    penalties: {
      heading: "What Makes White Collar Exposure Grow",
      note: "Most of these offenses are wobblers tied to the $950 value line, but aggregate losses and enhancements are what turn a case serious. Restitution is almost always part of the conversation.",
      rows: [
        { charge: "Value $950 or less", level: "Often misdemeanor", exposure: "Up to 6 months to 1 year county jail" },
        { charge: "Value over $950", level: "Wobbler", exposure: "Up to 1 year jail, or 16 months to 3 years as a felony" },
        { charge: "Aggravated white collar enhancement (PC 186.11)", level: "Enhancement", exposure: "Added years for patterns of fraud over $100,000 or $500,000" },
        { charge: "Collateral", level: "All fraud convictions", exposure: "Crimes of moral turpitude: professional license discipline and immigration risk" },
      ],
    },
    defenses: {
      heading: "How White Collar Cases Get Won",
      lead: "These cases are about intent and documents, and both cut in the defense's favor more often than prosecutors admit:",
      items: [
        "No intent to defraud: mistakes, accounting errors, and good-faith belief are complete defenses",
        "Authorization: you had permission or a genuine claim of right to the money or property",
        "A civil business dispute, not a crime: many prosecutions are contract fights in disguise",
        "Insufficient documentary proof: paper-heavy cases collapse when the paper does not actually show intent",
        "Pre-filing intervention: presenting exculpatory records to prosecutors before charges are ever filed",
        "Restitution and civil compromise that resolve matters without a criminal conviction",
      ],
    },
    faqs: [
      {
        q: "I got a letter from an investigator but I have not been charged. What should I do?",
        a: "This is the most important moment in a white collar case, and the answer is: call a lawyer before you respond to anyone. The pre-filing window is where these cases are quietly won, because we can present records and context to the prosecutor that stop charges from being filed at all. Do not turn over documents or give a statement first.",
      },
      {
        q: "Will a fraud conviction affect my professional license?",
        a: "Very likely. Fraud, embezzlement, and forgery are crimes of moral turpitude, and licensing boards (medical, legal, real estate, securities, accounting) treat them harshly. We build the defense around your license from day one, aiming for outcomes that minimize or avoid what you ever have to report.",
      },
      {
        q: "Can I make the case go away by paying the money back?",
        a: "Restitution matters and can be part of a resolution, sometimes through civil compromise that leads to dismissal, but do not start writing checks or admitting anything before a lawyer structures it. Paid the wrong way, restitution becomes an admission the prosecution uses against you.",
      },
      {
        q: "How is intent to defraud proven?",
        a: "Usually through circumstantial inferences from documents and conduct, which means it is genuinely contestable. An error, an authorization, or an honest business disagreement is not fraud, and the prosecution's inference of criminal intent is often the weakest part of its case.",
      },
    ],
    related: [
      { label: "Embezzlement", href: "/embezzlement/" },
      { label: "Identity Theft", href: "/identity-theft/" },
      { label: "Credit Card Fraud", href: "/credit-card-fraud/" },
      { label: "Forgery", href: "/forgery/" },
      { label: "Extortion", href: "/extortion/" },
    ],
    image: "/images/generated/white-collar-crimes.webp",
  },
  {
    slug: "embezzlement",
    title: "Embezzlement Lawyer (PC 503) | Orange County & LA | Farris Law Firm",
    metaDescription:
      "Accused of embezzlement under PC 503 in Orange County or LA? It is theft by someone trusted, and intent is the key element. Farris Law Firm defends these cases discreetly. Free consultations.",
    h1: "Embezzlement Defense Attorney",
    tldr: "Embezzlement under Penal Code 503 is theft committed by someone who was entrusted with the money or property, an employee, a bookkeeper, a fiduciary. It is charged as petty or grand theft depending on the amount, so most cases over $950 are wobblers. The whole case turns on fraudulent intent: an accounting error, a genuine authorization, or a good-faith belief that you were owed the money is a complete defense, and restitution can often resolve these matters without a conviction.",
    intro: [
      "Embezzlement accusations usually come from a workplace: an employer's audit finds a discrepancy, and suddenly a trusted employee is facing a criminal referral. What looks like theft to an auditor is frequently a bookkeeping mistake, an authorized transaction, a commission dispute, or a loan everyone understood, until the relationship soured.",
      "Farris Law Firm defends embezzlement cases across Orange County and Los Angeles discreetly and thoroughly, because for most people accused of this, the career and reputation stakes are even higher than the criminal ones.",
    ],
    charges: {
      heading: "What the Prosecution Must Prove",
      items: [
        { name: "A relationship of trust", desc: "You were entrusted with the property, which is what separates embezzlement from ordinary theft." },
        { name: "Fraudulent conversion", desc: "You used the property for your own purposes in violation of that trust." },
        { name: "Intent to deprive", desc: "You intended to deprive the owner of the property, at least temporarily. This is the element cases are won on." },
        { name: "Value determines the charge", desc: "Under $950 is petty theft; over $950 is grand theft, a wobbler. Aggregated amounts can trigger enhancements." },
      ],
    },
    penalties: {
      heading: "Penalties for Embezzlement",
      note: "Charged under California's theft statutes, so exposure scales with value, plus restitution and moral-turpitude consequences.",
      rows: [
        { charge: "Value $950 or less", level: "Petty theft (misdemeanor)", exposure: "Up to 6 months county jail and fines" },
        { charge: "Value over $950", level: "Grand theft (wobbler)", exposure: "Up to 1 year jail, or 16 months to 3 years as a felony" },
        { charge: "Over $100,000 in a pattern", level: "PC 186.11 enhancement", exposure: "Additional consecutive years" },
        { charge: "Restitution and licensing", level: "Common", exposure: "Repayment plus professional license exposure for a moral turpitude crime" },
      ],
    },
    defenses: {
      heading: "Defenses That Win Embezzlement Cases",
      lead: "Intent is everything, and workplace money is messy:",
      items: [
        "No fraudulent intent: accounting errors and honest mistakes are not crimes",
        "You had authorization or a good-faith claim to the money",
        "A civil dispute over wages, commissions, or a loan, not a theft",
        "The accounting does not actually add up: forensic review that undercuts the loss figure",
        "Insufficient proof that you, specifically, took anything",
        "Restitution and civil compromise that resolve the matter without a conviction",
      ],
    },
    faqs: [
      {
        q: "My employer says I stole, but I believed I was owed that money. Is that a defense?",
        a: "Yes, it can be a complete one. A good-faith belief that you had a right to the money, even a mistaken one, negates the fraudulent intent embezzlement requires. Commission disputes, expense reimbursements, and understood loans are common examples we develop into a defense.",
      },
      {
        q: "Can I be charged even if I intended to pay it back?",
        a: "Potentially yes, because the law reaches even temporary deprivation, but your intent to repay is powerful evidence against fraudulent intent and central to negotiation. How that intent is documented and presented matters enormously, which is why you should not explain yourself to your employer or investigators without counsel.",
      },
      {
        q: "Will my employer's internal investigation be used against me?",
        a: "It can be. Statements you make to HR or in an internal interview are often handed to prosecutors. If your employer is investigating you for possible embezzlement, talk to a defense lawyer before you participate, not after.",
      },
      {
        q: "Does paying the money back make it go away?",
        a: "Restitution can be part of a favorable resolution, sometimes a civil compromise that ends in dismissal, but it must be structured correctly. Repaying the wrong way can look like an admission of guilt. Let a lawyer handle the sequence.",
      },
    ],
    related: [
      { label: "White Collar Crimes Overview", href: "/white-collar-crimes/" },
      { label: "Theft Crimes", href: "/theft/" },
      { label: "Forgery", href: "/forgery/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/embezzlement.webp",
  },
  {
    slug: "identity-theft",
    title: "Identity Theft Lawyer (PC 530.5) | Orange County & LA | Farris Law Firm",
    metaDescription:
      "Charged with identity theft under PC 530.5 in Orange County or LA? Unlawful intent and knowledge are the key elements. Farris Law Firm defends these cases. Free confidential consultations 24/7.",
    h1: "Identity Theft Defense Attorney",
    tldr: "Identity theft under Penal Code 530.5 is willfully obtaining and using someone's personal identifying information for an unlawful purpose without their consent. It is a wobbler, so exposure ranges from misdemeanor jail time to three years. The elements the prosecution most often cannot prove are unlawful intent and knowledge: people are accused over authorized use, shared accounts, and information they had legitimate reason to possess. These cases are also frequently built on weak digital evidence that a real defense can dismantle.",
    intro: [
      "Identity theft charges cover a huge range, from elaborate fraud rings to a spouse using a shared credit card, a family member opening an account, or someone who possessed another person's information for an entirely lawful reason. The statute is broad, which means it sweeps in a lot of conduct that is not what most people picture as identity theft.",
      "Farris Law Firm defends PC 530.5 cases across Orange County and Los Angeles, focusing on the two elements that decide most cases: whether you actually had unlawful intent, and whether the digital evidence really points to you.",
    ],
    charges: {
      heading: "How Identity Theft Is Charged",
      items: [
        { name: "Obtaining personal identifying information (PC 530.5(c))", desc: "Acquiring another's information with intent to defraud. The intent element is central." },
        { name: "Using the information unlawfully (PC 530.5(a))", desc: "Using the information for any unlawful purpose without consent, the most commonly charged form." },
        { name: "Selling or transferring information (PC 530.5(d))", desc: "Passing identifying information to others, carrying heavier exposure." },
        { name: "Wobbler in most forms", desc: "Chargeable as a misdemeanor or felony, and each victim can support a separate count." },
      ],
    },
    penalties: {
      heading: "Penalties for Identity Theft",
      note: "A wobbler, but multiple counts and multiple victims can compound exposure quickly.",
      rows: [
        { charge: "Identity theft (misdemeanor)", level: "Misdemeanor", exposure: "Up to 1 year county jail and fines" },
        { charge: "Identity theft (felony)", level: "Felony", exposure: "16 months, 2, or 3 years" },
        { charge: "Multiple victims", level: "Separate counts", exposure: "Each victim can be charged separately, stacking exposure" },
        { charge: "Collateral", level: "All convictions", exposure: "Moral turpitude: license and immigration consequences, plus restitution" },
      ],
    },
    defenses: {
      heading: "Defenses That Work in Identity Theft Cases",
      lead: "Intent, consent, and identification are the battlegrounds:",
      items: [
        "No unlawful intent: possessing or using information for a lawful reason is not a crime",
        "Consent: shared accounts and authorized use inside families and relationships",
        "Mistaken identity: IP addresses and account access do not always point to the person charged",
        "You did not know the information was another real person's",
        "Insufficient digital evidence linking you to the actual use",
        "Suppression of unlawfully obtained devices and records",
      ],
    },
    faqs: [
      {
        q: "I used my spouse's card with what I thought was permission. Is that identity theft?",
        a: "It should not be, and consent is a real defense. Shared finances inside a marriage or relationship routinely get reported as identity theft during breakups and disputes. If you had permission, or reasonably believed you did, that negates the unlawful intent the statute requires.",
      },
      {
        q: "The police say my IP address was used. Does that prove it was me?",
        a: "No. Shared networks, multiple household members, spoofing, and account compromises all mean an IP address or a logged-in account is not proof of who was at the keyboard. Digital identification is far shakier than prosecutors present it, and attacking it is often the core of the defense.",
      },
      {
        q: "How serious is an identity theft charge?",
        a: "It is a wobbler, so it can be a misdemeanor or a felony, and because each alleged victim can be a separate count, exposure adds up fast in multi-victim cases. That is exactly why early defense to contain the charges matters. Call us for a confidential assessment.",
      },
      {
        q: "Can identity theft affect my immigration status?",
        a: "It can. Fraud-related offenses are crimes of moral turpitude with potential immigration consequences for non-citizens. We structure the defense with your status in mind and coordinate with immigration counsel where needed.",
      },
    ],
    related: [
      { label: "White Collar Crimes Overview", href: "/white-collar-crimes/" },
      { label: "Credit Card Fraud", href: "/credit-card-fraud/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/identity-theft.webp",
  },
  {
    slug: "credit-card-fraud",
    title: "Credit Card Fraud Lawyer | Orange County & LA | Farris Law Firm",
    metaDescription:
      "Charged with credit or debit card fraud in Orange County or LA (PC 484e to 484j)? Value and intent drive these cases. Farris Law Firm defends them. Free confidential consultations 24/7.",
    h1: "Credit Card Fraud Defense Attorney",
    tldr: "California prosecutes access card crimes under a cluster of statutes, Penal Code 484e through 484j, covering everything from possessing a stolen card to forging or fraudulently using one. Most are charged as petty or grand theft depending on the amount, making cases over $950 wobblers. As with all fraud, the case hinges on knowledge and intent: authorized use, mistaken identity, and honest disputes over charges are real defenses, and the digital and video evidence these cases rely on frequently helps the defense.",
    intro: [
      "Credit and debit card fraud charges range from the trivial to the serious: using a card you were allowed to use, being handed a card that turned out to be stolen, a disputed online purchase, or an organized skimming operation. The law treats these as theft crimes, so the amount and your intent shape everything.",
      "Farris Law Firm defends card fraud cases across Orange County and Los Angeles, attacking the elements prosecutors most often struggle to prove: that you knew, and that you intended to defraud.",
    ],
    charges: {
      heading: "How Card Fraud Is Charged",
      items: [
        { name: "Theft of an access card (PC 484e)", desc: "Taking or possessing a card with intent to use it fraudulently. Possession alone is often disputed." },
        { name: "Forging card information (PC 484f)", desc: "Altering or counterfeiting a card or its data, treated as forgery." },
        { name: "Fraudulent use (PC 484g)", desc: "Using a card you know is forged, expired, or belongs to another, charged as petty or grand theft by value." },
        { name: "Retailer and processing offenses (PC 484h to 484j)", desc: "Merchant-side fraud and trafficking in card information, carrying heavier exposure." },
      ],
    },
    penalties: {
      heading: "Penalties for Credit Card Fraud",
      note: "Prosecuted under the theft framework, so exposure follows the amount, with aggregation over a six month period.",
      rows: [
        { charge: "Fraudulent use, $950 or less", level: "Petty theft (misdemeanor)", exposure: "Up to 6 months to 1 year county jail" },
        { charge: "Fraudulent use, over $950", level: "Grand theft (wobbler)", exposure: "Up to 1 year jail, or 16 months to 3 years as a felony" },
        { charge: "Card forgery (PC 484f)", level: "Wobbler", exposure: "Up to 1 year jail, or 16 months to 3 years" },
        { charge: "Collateral", level: "All convictions", exposure: "Moral turpitude, restitution, and immigration exposure" },
      ],
    },
    defenses: {
      heading: "Defenses That Work in Card Fraud Cases",
      lead: "Knowledge, intent, and identity again carry these cases:",
      items: [
        "You were authorized to use the card",
        "No knowledge the card was stolen, forged, or invalid",
        "Mistaken identity: point-of-sale video and records are often ambiguous",
        "A genuine billing dispute, not fraud",
        "Insufficient proof you made the specific charges alleged",
        "Suppression of unlawfully obtained devices, cards, and records",
      ],
    },
    faqs: [
      {
        q: "I used a card I thought I was allowed to use. Is that fraud?",
        a: "If you had authorization, or reasonably believed you did, that defeats the fraudulent intent these charges require. Authorized use gets reported as fraud constantly, especially among family members, roommates, and after relationships end. Consent and good-faith belief are real, provable defenses.",
      },
      {
        q: "How do they decide if it is a felony?",
        a: "Primarily by value: fraudulent use of $950 or less is generally a misdemeanor, and over $950 it becomes a wobbler that can be charged as a felony, with charges aggregated over a six month period. Reducing the charge level, and the alleged loss, is often the core of the defense.",
      },
      {
        q: "The store has video of the purchase. Is my case hopeless?",
        a: "No. Point-of-sale video is frequently low quality and ambiguous on identity, and it says nothing about your knowledge or intent, the elements that actually matter. Footage often helps the defense. Nothing should be conceded before a lawyer reviews all of it.",
      },
      {
        q: "Can these charges be resolved with restitution?",
        a: "Often, yes, through negotiation and in some cases civil compromise leading to dismissal, but restitution must be handled through counsel so it does not become an admission. We structure these resolutions to protect your record.",
      },
    ],
    related: [
      { label: "White Collar Crimes Overview", href: "/white-collar-crimes/" },
      { label: "Identity Theft", href: "/identity-theft/" },
      { label: "Theft Crimes", href: "/theft/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/credit-card-fraud.webp",
  },
  {
    slug: "forgery",
    title: "Forgery Lawyer (PC 470) | Orange County & Los Angeles | Farris Law Firm",
    metaDescription:
      "Charged with forgery under PC 470 in Orange County or LA? Intent to defraud is the key element, and it is often the defense. Farris Law Firm can help. Free confidential consultations 24/7.",
    h1: "Forgery Defense Attorney",
    tldr: "Forgery under Penal Code 470 covers signing another person's name, or making or altering a document, with intent to defraud. It is a wobbler, and since Prop 47 many check and money-order forgeries of $950 or less must be charged as misdemeanors. The decisive element is intent to defraud: signing with authority, a good-faith belief you were permitted, or a genuine mistake all defeat the charge, and prosecutors frequently cannot prove the intent the statute demands.",
    intro: [
      "Forgery is broader than most people realize: it is not just faking a signature but altering documents, filling in a check you were handed, or signing someone's name when you believed you had authority to. Because the crime requires intent to defraud, a great many forgery accusations involve conduct that was authorized, mistaken, or simply misunderstood.",
      "Farris Law Firm defends forgery cases across Orange County and Los Angeles, focused on the intent element that decides them and the Prop 47 reclassification that keeps many of them misdemeanors.",
    ],
    charges: {
      heading: "What Counts as Forgery",
      items: [
        { name: "Signing another's name (PC 470(a))", desc: "Signing someone else's name to a document without authority and with intent to defraud." },
        { name: "Counterfeiting or altering (PC 470(b) to (d))", desc: "Making, altering, or presenting a false document, check, or instrument." },
        { name: "Check and money order forgery", desc: "The most common form, and since Prop 47 usually a misdemeanor at $950 or less unless identity theft is also charged." },
        { name: "Intent to defraud, the core element", desc: "Without intent to defraud, there is no forgery, no matter what was signed or altered." },
      ],
    },
    penalties: {
      heading: "Penalties for Forgery",
      note: "A wobbler, with Prop 47 keeping many low-value instrument cases at the misdemeanor level.",
      rows: [
        { charge: "Check or money order, $950 or less", level: "Misdemeanor (Prop 47)", exposure: "Up to 1 year county jail, absent identity theft" },
        { charge: "Forgery (felony)", level: "Felony", exposure: "16 months, 2, or 3 years" },
        { charge: "Multiple documents", level: "Separate counts", exposure: "Each forged instrument can be a separate charge" },
        { charge: "Collateral", level: "All convictions", exposure: "Moral turpitude, restitution, license and immigration exposure" },
      ],
    },
    defenses: {
      heading: "Defenses That Win Forgery Cases",
      lead: "Intent to defraud is the whole case, and it is hard to prove:",
      items: [
        "No intent to defraud: a mistake or misunderstanding is not forgery",
        "Authority to sign: you had permission, or reasonably believed you did",
        "No intent that anyone rely on the document to their loss",
        "Mistaken identity: handwriting and signature evidence is far from conclusive",
        "Prop 47 reclassification to a misdemeanor for qualifying instruments",
        "Suppression of unlawfully obtained documents and statements",
      ],
    },
    faqs: [
      {
        q: "I signed my relative's name because they asked me to. Is that forgery?",
        a: "If you had authority to sign, or genuinely believed you did, that defeats the intent to defraud forgery requires. People sign for spouses, aging parents, and business partners all the time, and it only becomes forgery when there is an intent to defraud. Authorization is a real, provable defense.",
      },
      {
        q: "Is forgery a felony in California?",
        a: "It is a wobbler. Since Prop 47, forgery of checks, money orders, and similar instruments worth $950 or less is generally a misdemeanor, unless it is charged together with identity theft. Higher values and other document types can be filed as felonies, so reducing the charge level is often a key goal.",
      },
      {
        q: "Can they really prove I forged a signature?",
        a: "Handwriting and signature analysis is far less certain than television suggests, and it says nothing about intent. Prosecutors must prove both that you made the document and that you intended to defraud, and that second element is frequently where these cases fail.",
      },
      {
        q: "Will a forgery charge affect my job or license?",
        a: "It can. Forgery is a crime of moral turpitude that licensing boards and some employers take seriously. That is why the goal is often a reduction, diversion, or dismissal that keeps a fraud conviction off your record. See our expungement page for clearing older cases.",
      },
    ],
    related: [
      { label: "White Collar Crimes Overview", href: "/white-collar-crimes/" },
      { label: "Embezzlement", href: "/embezzlement/" },
      { label: "Credit Card Fraud", href: "/credit-card-fraud/" },
      { label: "Expungement", href: "/expungement/" },
    ],
    image: "/images/generated/forgery.webp",
  },
  {
    slug: "extortion",
    title: "Extortion Lawyer (PC 518) | Orange County & Los Angeles | Farris Law Firm",
    metaDescription:
      "Charged with extortion or blackmail under PC 518 in Orange County or LA? It is a felony, but the threat and consent elements are contestable. Farris Law Firm defends these cases. Free consultations.",
    h1: "Extortion Defense Attorney",
    tldr: "Extortion under Penal Code 518, often called blackmail, is obtaining property or forcing an official act through a wrongful threat: violence, accusation, or exposing a secret. It is a felony carrying two to four years. But the line between extortion and lawful hard bargaining, a legitimate demand, or a threat to sue is narrower than prosecutors suggest. Because the case turns on whether the threat was wrongful and whether the property was actually obtained through it, extortion charges are more defensible than their felony label implies.",
    intro: [
      "Extortion accusations arise in messy situations: a business dispute where someone threatened to go public, a demand for money to keep quiet about an affair, a heated threat during a breakup or a debt disagreement. The law targets wrongful threats used to obtain property or coerce action, but it does not criminalize every hard demand or warning, and that distinction is where these cases are fought.",
      "Farris Law Firm defends extortion and blackmail cases across Orange County and Los Angeles, examining closely whether the alleged threat was actually wrongful and whether the elements of the crime are truly present.",
    ],
    charges: {
      heading: "How Extortion Is Charged",
      items: [
        { name: "Extortion (PC 518/520)", desc: "Using a wrongful threat to obtain property or money, or to compel an official act. A felony." },
        { name: "Threatening letters (PC 523)", desc: "Sending a written extortionate threat, chargeable even if no money changes hands." },
        { name: "Attempted extortion (PC 524)", desc: "Attempting the threat, a lesser but still serious charge when the demand was not completed." },
        { name: "The threat and the obtaining", desc: "Prosecutors must prove both a wrongful threat and that property or an act was obtained through it, or attempted." },
      ],
    },
    penalties: {
      heading: "Penalties for Extortion",
      note: "A felony, with additional exposure when threats involve violence or target vulnerable victims.",
      rows: [
        { charge: "Extortion (PC 520)", level: "Felony", exposure: "2, 3, or 4 years state prison and fines" },
        { charge: "Threatening letters (PC 523)", level: "Felony", exposure: "Comparable felony exposure even without payment" },
        { charge: "Attempted extortion (PC 524)", level: "Wobbler", exposure: "Reduced, but still serious, exposure" },
        { charge: "Aggravating factors", level: "Enhancements", exposure: "Threats of violence or vulnerable victims raise exposure" },
      ],
    },
    defenses: {
      heading: "Defenses That Work in Extortion Cases",
      lead: "The wrongful-threat and obtaining elements give a prepared defense real room:",
      items: [
        "The threat was not wrongful: warning that you will sue or report a genuine matter can be lawful",
        "A legitimate claim: demanding money you are actually owed is not extortion",
        "No consent obtained through fear: the property was not actually gained through the threat",
        "Free speech and lawful negotiation, not coercion",
        "False accusation, common in bitter business and personal disputes",
        "Insufficient proof connecting you to the threat or the demand",
      ],
    },
    faqs: [
      {
        q: "I threatened to sue unless they paid me what I was owed. Is that extortion?",
        a: "Generally no. Threatening litigation to recover a genuine debt or claim is lawful hard bargaining, not extortion. The crime requires a wrongful threat used to obtain property you are not entitled to. The line matters, and where your demand rested on a legitimate claim, that is a strong defense.",
      },
      {
        q: "What is the difference between extortion and robbery?",
        a: "Both involve obtaining property through fear, but robbery takes it directly from a person by immediate force or fear, while extortion uses a threat (often of future harm or exposure) to make the victim consent to hand it over. They are charged differently and defended differently. See our robbery page for the contrast.",
      },
      {
        q: "Can I be charged if I never actually got any money?",
        a: "Yes: attempted extortion (PC 524) and sending a threatening letter (PC 523) are chargeable even when no property changes hands. That said, the absence of any completed transaction is meaningful evidence and often reduces exposure. Early defense can keep an attempt from being overcharged.",
      },
      {
        q: "This came out of a business dispute. Does that help?",
        a: "It often does. Many extortion prosecutions are really contract or business disputes where one side made an aggressive demand. Showing the context, the legitimate underlying claim, and the lack of a wrongful threat is exactly how these cases get reduced or dismissed.",
      },
    ],
    related: [
      { label: "White Collar Crimes Overview", href: "/white-collar-crimes/" },
      { label: "Criminal Threats", href: "/criminal-threats/" },
      { label: "Robbery", href: "/robbery/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/extortion.webp",
  },
];

export const PRACTICE_BY_SLUG = new Map(PRACTICES.map((p) => [p.slug, p]));
