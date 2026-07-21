// "Asked & Answered" blog series: real questions people ask on forums like
// Reddit, answered properly. Questions are paraphrased archetypes, never
// verbatim quotes, and never identify the original poster. Rendered by
// components/templates/QaPostPage.tsx at /blog/<slug>/.

export type QaPost = {
  slug: string; // path segment under /blog/
  title: string;
  metaDescription: string;
  h1: string;
  datePublished: string;
  category: string;
  question: { source: string; text: string };
  tldr: string;
  sections: { heading: string; body: string[]; list?: string[] }[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
  image: string;
};

export const QA_POSTS: QaPost[] = [
  {
    slug: "first-dui-orange-county-what-happens",
    title: "First DUI in Orange County: What Happens Next | Farris Law Firm",
    metaDescription:
      "Arrested for a first DUI in Orange County and feeling lost? A criminal defense lawyer explains the 10 day DMV deadline, which courthouse you'll go to, realistic outcomes, and what to do this week.",
    h1: "First DUI in Orange County and Completely Lost? Here Is Exactly What Happens Next",
    datePublished: "2026-07-16",
    category: "DUI",
    question: {
      source: "asked on Reddit's r/DUICalifornia",
      text: "I just got my first DUI in Orange County and I am completely lost. I have never been in trouble before. I do not know what happens with court, whether I am going to jail, what happens to my license, or whether this ruins my career. Where do I even start?",
    },
    tldr: "Two clocks started when you were arrested. First, you have 10 days to request a DMV hearing or your license suspension becomes automatic. Second, your criminal case will be heard at one of Orange County's four justice centers, usually starting with an arraignment a few weeks out. A typical first offense DUI in Orange County is a misdemeanor that ends with probation, roughly two thousand dollars in fines and fees, DUI school, and no jail, and a good defense can often do better than that through a reduction or dismissal. It is a survivable event, and what you do this week matters more than anything you did last night.",
    sections: [
      {
        heading: "First: Breathe. A First DUI Is Serious but Survivable",
        body: [
          "A first offense DUI under Vehicle Code 23152 is a misdemeanor in almost all cases. Orange County courts process thousands of them every year, filled with ordinary people: nurses, engineers, students, parents. The judge has seen your situation many times, and the system has standard, predictable paths through it.",
          "That predictability is good news, because it means you can plan. It also means the difference between a standard outcome and a great outcome usually comes down to two things: whether the case against you actually holds up, and whether anyone competent looks hard enough to find out.",
        ],
      },
      {
        heading: "The 10 Day DMV Deadline Comes Before Anything Else",
        body: [
          "When you were arrested, the officer likely took your plastic license and handed you a pink temporary license. That paper is valid for 30 days. What most people miss: you have only 10 days from the arrest to request an administrative hearing with the DMV. Request it in time and your license stays valid until the hearing is decided, which is often months away. Miss it, and suspension begins automatically when the temporary expires.",
          "The DMV action is completely separate from your court case. It is decided by a DMV hearing officer, not a judge, and it turns on narrow questions: was the stop lawful, were you actually driving, was your BAC 0.08 or higher. When we take a DUI case within the 10 day window, we request the hearing, obtain the police report and calibration records through it, and use what we learn in both proceedings. Even when a suspension eventually happens, first offenders can usually keep driving with a restricted license or an ignition interlock device.",
        ],
      },
      {
        heading: "Which Orange County Courthouse You Will Go To",
        body: [
          "Orange County criminal cases are spread across four justice centers, generally based on where the arrest happened. Arrested in Newport Beach, Irvine, Costa Mesa, or South County: Harbor Justice Center in Newport Beach. Santa Ana or Tustin: the Central Justice Center in Santa Ana. Anaheim or Fullerton: the North Justice Center in Fullerton. Huntington Beach, Westminster, or Garden Grove: the West Justice Center.",
          "Your first court date is the arraignment, typically two to eight weeks after arrest. Charges are formally presented and a plea is entered. Here is the part that surprises people: for most misdemeanor DUI cases, Penal Code 977 lets your attorney appear for you, so you may never need to take a day off work for routine hearings. We enter not guilty at arraignment, obtain all the evidence, and the real work begins.",
        ],
      },
      {
        heading: "Realistic Outcomes, From Standard to Great",
        body: [
          "The standard first offense resolution in Orange County looks like this: three years of informal probation, fines and fees in the neighborhood of two thousand dollars, a three month DUI class (longer with a high BAC), and a license action with restricted driving available. No jail in the typical case.",
          "But standard is the floor, not the ceiling. Depending on the facts, we push for better outcomes:",
        ],
        list: [
          "A wet reckless (VC 23103.5): a reduced charge with lower fines, a shorter class, no mandatory license suspension from the conviction, and no DUI on your record. We have obtained this reduction even in difficult cases, including one where the incident was live streamed on YouTube and another with a high BAC",
          "A dry reckless or exhibition of speed: further reductions that remove the alcohol element entirely, as in a recent case we reduced from DUI to exhibition of speed",
          "Suppression and dismissal: if the stop was unlawful, the field sobriety tests were mishandled, the breath device was out of calibration, or a rising BAC or medical issue undermines the numbers, the case can fall apart entirely",
        ],
      },
      {
        heading: "Your Job, Your Record, and Your Future",
        body: [
          "For most private employment, a pending misdemeanor case does not have to derail anything, and you generally have no obligation to volunteer it. Where licenses and clearances are involved, medical, nursing, real estate, securities, commercial driving, the specific outcome matters enormously, which is another reason reductions are worth fighting for. Tell your lawyer about your job on day one so the defense is built around protecting it.",
          "Longer term: a DUI conviction can be expunged under Penal Code 1203.4 once probation ends, and probation itself can often be terminated early. Expungement changes what employers see on background checks from a conviction to a dismissal. In other words, even the worst realistic outcome is not permanent.",
        ],
      },
      {
        heading: "What to Do This Week",
        body: ["If you were arrested in the last few days, this is the checklist that protects you:"],
        list: [
          "Count your 10 days and request the DMV hearing, or have a lawyer do it, today if possible",
          "Write down everything you remember: the reason given for the stop, what you ate and drank and when, what tests you did, what was said",
          "Gather your paperwork: the pink temporary license, citation, tow and bail documents",
          "Do not discuss the arrest on social media or with coworkers, and do not contact anyone involved",
          "Talk to a defense lawyer before your arraignment. Consultations with us are free, by phone, any hour of any day, and you will leave the call knowing your courthouse, your dates, and your realistic options",
        ],
      },
    ],
    faqs: [
      {
        q: "Will I go to jail for a first DUI in Orange County?",
        a: "In the typical first offense case with no accident, no injuries, and no unusual aggravating factors, jail is not part of the standard outcome. Probation, fines, and DUI school are. Aggravating factors like a very high BAC, a collision, or a child in the car change the analysis, which is exactly what a defense lawyer works to manage.",
      },
      {
        q: "Can I drive right now?",
        a: "If the officer took your license, the pink paper you received is a temporary license, valid for 30 days. Whether you can drive after that depends on requesting the DMV hearing within 10 days and what happens next. Most first offenders can ultimately keep driving through a restricted or ignition interlock license even if a suspension is imposed.",
      },
      {
        q: "Is a public defender enough, or do I need a private lawyer?",
        a: "Public defenders are real lawyers and many are excellent, but they carry enormous caseloads, and they cannot represent you at the DMV hearing, which is where your license is actually decided. A private defense lawyer handles both tracks and has the time to litigate the details that produce reductions and dismissals. We explain both options honestly in a free call.",
      },
      {
        q: "How much does a DUI lawyer cost in Orange County?",
        a: "We quote a flat fee up front based on the specifics of your case, and payment plans are available. Read our detailed guide on DUI lawyer costs, then call for a real number. The consultation costs nothing.",
      },
      {
        q: "Will this be on my record forever?",
        a: "No. A DUI conviction can be expunged under Penal Code 1203.4 after probation, which changes what most employers can see and how you can answer application questions. And if we win a reduction or dismissal now, there is less on the record to begin with.",
      },
    ],
    related: [
      { label: "DUI Defense", href: "/dui/" },
      { label: "How Much Does a DUI Lawyer Cost?", href: "/blog/how-much-does-a-dui-lawyer-cost/" },
      { label: "What Happens After a 2nd DUI?", href: "/blog/what-happens-after-a-2nd-dui/" },
      { label: "Expungement", href: "/expungement/" },
    ],
    image: "/images/generated/qa-first-dui-orange-county.webp",
  },
  {
    slug: "what-happens-after-arrest-orange-county",
    title: "What Happens After an Arrest in Orange County? | Farris Law Firm",
    metaDescription:
      "Step by step: booking, bail, the DA's filing decision, and arraignment at Orange County's four justice centers. A defense lawyer explains the arrest process and what families should do first.",
    h1: "What Happens After an Arrest in Orange County? The Process, Step by Step",
    datePublished: "2026-07-16",
    category: "Arrest Process",
    question: {
      source: "the question behind thousands of Orange County searches every month",
      text: "My husband was arrested last night in Orange County and nobody will tell me anything. Where is he, when does he see a judge, should we pay a bail bondsman right now, and when do we find out what he is actually charged with?",
    },
    tldr: "After an Orange County arrest, a person is booked at the local station or the county jail in Santa Ana, then released on a citation, on their own recognizance, or on bail. The District Attorney then decides what to file, which can take days or even weeks, and the first court date is the arraignment at one of the county's four justice centers. Two practical points matter most: you can locate anyone in custody through the Sheriff's inmate locator, and the window before charges are filed is the single best time to get a defense lawyer involved, because filing decisions can still be influenced.",
    sections: [
      {
        heading: "Booking and Release: The First 48 Hours",
        body: [
          "After arrest, the person is booked: fingerprints, photographs, and a records check, either at the arresting agency's station or at the Orange County Jail intake in Santa Ana. What happens next depends on the charge. For many misdemeanors, people are released the same day with a citation showing a court date. For felonies or when bail applies, release happens through bail, or a judge can grant release on their own recognizance, a promise to appear.",
          "California law requires that anyone held in custody be brought before a judge within 48 hours, excluding weekends and holidays. So even in the worst case, a judge looks at the situation quickly. To find someone in custody, use the Orange County Sheriff's inmate locator online, which shows where they are held, bail amount, and upcoming court dates.",
        ],
      },
      {
        heading: "Do Not Rush to a Bail Bondsman Before Talking to a Lawyer",
        body: [
          "Bail bond fees are not refundable. If a defense lawyer can get bail reduced at the first appearance, or get your family member released on their own recognizance, the difference can be thousands of dollars kept in your pocket. First-time defendants on non-violent charges are often good candidates for OR release.",
          "There are times when posting bail fast is the right call, and we will tell you honestly when that is the case. But make the bondsman call after the lawyer call, not before. Consultations with us are free, 24/7.",
        ],
      },
      {
        heading: "The Filing Decision: Where Cases Are Quietly Won",
        body: [
          "Here is the step most people do not know exists. An arrest is not a charge. The police send their reports to the Orange County District Attorney, and a filing deputy decides what to file: the charges the police recommended, lesser charges, or nothing at all. That decision can take days, weeks, or longer, and until it is made, everything is still in play.",
          "This is the pre-filing window, and it is the highest-leverage moment in the whole case. A defense lawyer can contact the filing deputy, present context and evidence the police report leaves out, and argue for reduced charges or no filing. A case that never gets filed has no court dates, no record of conviction, and no story to explain. We do this work constantly, and it is invisible precisely because it works.",
        ],
      },
      {
        heading: "Arraignment: The First Court Date",
        body: [
          "If charges are filed, the first hearing is the arraignment, where charges are read and a plea is entered. Which courthouse depends on where the arrest happened: Harbor Justice Center in Newport Beach for most of South County and Irvine, the Central Justice Center in Santa Ana for central county and most serious felonies, the North Justice Center in Fullerton for Anaheim and North County, and the West Justice Center in Westminster for Huntington Beach and West County.",
          "For most misdemeanors, Penal Code 977 lets your attorney appear without you, which means no missed work and no courthouse stress. We almost always enter a not guilty plea at arraignment, obtain the evidence, and negotiate from an informed position instead of a scared one.",
        ],
      },
      {
        heading: "What Family Members Should Do Today",
        body: ["If someone you love was just arrested in Orange County:"],
        list: [
          "Locate them with the OC Sheriff's inmate locator and write down the booking number, location, bail, and court date",
          "Tell them by phone to say nothing about the case to anyone, including cellmates, and remember jail calls are recorded",
          "Do not discuss the facts of the case on those calls yourself",
          "Gather paperwork: citation, bail documents, property receipts, tow information",
          "Call a defense lawyer before paying a bondsman and before the DA makes a filing decision. Both calls are time-sensitive, and ours is free any hour",
        ],
      },
    ],
    faqs: [
      {
        q: "How long can they hold someone without filing charges?",
        a: "A person in custody must be arraigned within 48 hours, excluding weekends and holidays. But if the DA is not ready to file, the person is released, and the DA can still file charges later, up to the statute of limitations: generally one year for misdemeanors and three or more for felonies. Released without charges does not mean the case is over.",
      },
      {
        q: "Will a first-time offender get released without bail?",
        a: "Often, yes. Judges weigh flight risk and public safety, and a first-time defendant with a job and local ties is a strong candidate for release on their own recognizance, especially with a lawyer making the argument at the first appearance.",
      },
      {
        q: "Charges have not been filed yet. Is it too early to hire a lawyer?",
        a: "It is the best time. Pre-filing advocacy can shrink or stop the case before it exists, which no amount of lawyering can fully replicate afterward. If we are retained during the filing window, we contact the DA immediately.",
      },
      {
        q: "We never got a letter about a court date. What now?",
        a: "Do not assume it went away. If a court date passed without an appearance, a bench warrant may exist. Check with the court or have a lawyer check, and see our bench warrants page for how recalls work. Handled proactively, this is usually fixable without an arrest.",
      },
    ],
    related: [
      { label: "Bench Warrants and Failure to Appear", href: "/bench-warrants-failure-to-appear/" },
      { label: "Santa Ana Criminal Defense (Central Justice Center)", href: "/santa-ana-criminal-defense-lawyer/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/qa-arrest-process.webp",
  },
  {
    slug: "how-to-get-a-dui-dismissed-california",
    title: "How Do DUIs Actually Get Dismissed in California? | Farris Law Firm",
    metaDescription:
      "DUI dismissals are real, but they come from litigation, not luck: unlawful stops, unreliable testing, and procedural failures. A defense lawyer explains how DUI cases actually fall apart.",
    h1: "How Do DUIs Actually Get Dismissed in California?",
    datePublished: "2026-07-16",
    category: "DUI",
    question: {
      source: "asked constantly on DUI forums",
      text: "Everyone says get a lawyer, but be honest: do DUI cases ever actually get thrown out? The officer said I blew over the limit, so what could a lawyer possibly do about that?",
    },
    tldr: "Yes, DUI cases get dismissed, and it is not luck: it is litigation. Dismissals come from unlawful stops that suppress all the evidence, breath and blood testing that fails California's Title 17 regulations, rising BAC and medical defenses that undermine the numbers, and procedural failures like missing video. And dismissal is one end of a spectrum: many more cases get reduced to wet reckless, dry reckless, or exhibition of speed, outcomes that keep a DUI off your record. The number on the breath machine is the start of the analysis, not the end of it.",
    sections: [
      {
        heading: "The Myth: A Failed Test Means an Automatic Conviction",
        body: [
          "Prosecutors love the impression that a breath number ends the conversation. It does not. A DUI conviction requires a lawful stop, a lawful arrest, properly administered tests on properly maintained machines, an unbroken chain of evidence, and proof that your BAC while driving, not later at the station, was over the limit. Every link in that chain is attackable, and DUI cases have more technical failure points than almost any other charge.",
        ],
      },
      {
        heading: "Attack One: The Stop and Arrest",
        body: [
          "Police need reasonable suspicion to stop you and probable cause to arrest you. Weaving within your own lane, for example, is famously not enough by itself. If the stop was bad, everything that followed, the observations, the tests, the breath number, gets suppressed, and the case usually dies with it.",
          "This is why we obtain and watch every minute of dashcam and body camera footage. Officers write reports hours later from memory and template language; the video shows what actually happened, and the two frequently disagree.",
        ],
      },
      {
        heading: "Attack Two: The Testing",
        body: [
          "Field sobriety tests are subjective, unscientific in real-world conditions, and administered on the roadside at night to nervous people in street shoes. They are cross-examination material, not proof.",
          "Chemical tests have hard rules. California's Title 17 regulations govern how breath machines are calibrated and maintained, the 15 minute continuous observation period before a breath test, and how blood is drawn, stored, and analyzed. Calibration logs and maintenance records are discoverable, and violations are common. On top of that sits the rising BAC defense: alcohol takes time to absorb, so your BAC at the station can be higher than it was while driving, which is the only moment that legally matters. Medical conditions like GERD and diets that produce mouth alcohol can also corrupt breath results.",
        ],
      },
      {
        heading: "When Dismissal Is Not on the Table: The Reduction Ladder",
        body: [
          "Honest lawyering means saying this: most DUI cases do not end in outright dismissal. But litigation pressure creates reductions, and reductions matter enormously:",
        ],
        list: [
          "Wet reckless (VC 23103.5): lower fines, shorter classes, no DUI on your record. We have won this reduction in hard cases, including one that was live streamed on YouTube and another with a high BAC",
          "Dry reckless or exhibition of speed: no alcohol-related offense at all. We recently reduced a DUI to exhibition of speed",
          "Military diversion for service members and veterans: full dismissal after treatment, as in a case we resolved exactly that way",
          "Each rung down the ladder protects your license, your insurance, and your record a little more, and prosecutors offer them when the alternative is losing motions in front of a judge",
        ],
      },
      {
        heading: "What This Means for Your Case",
        body: [
          "Whether your case is a dismissal candidate depends on facts nobody can assess from a forum post: the reason for the stop, the video, the machine's maintenance history, the timeline of your drinking, your medical picture. That assessment is exactly what a free consultation is for. Bring us the details and we will tell you honestly which attacks your case supports, what outcome is realistic, and what it costs to fight for it.",
        ],
      },
    ],
    faqs: [
      {
        q: "What percentage of DUI cases get dismissed?",
        a: "Be suspicious of anyone quoting you a percentage: reliable statistics do not exist, and every case turns on its own facts. What we can tell you is which specific weaknesses your case has, after we see the police report, the video, and the testing records. That is a real answer instead of a marketing number.",
      },
      {
        q: "Should I have refused the tests?",
        a: "What is done is done, but for the record: refusing the post-arrest chemical test triggers its own license suspension and enhancement, so refusal is usually a bad strategy. Pre-arrest field sobriety tests and the roadside handheld breath test are generally voluntary for adult non-DUI-probationers, and declining them politely deprives the case of evidence.",
      },
      {
        q: "Can a first DUI be dismissed through a diversion program?",
        a: "California's misdemeanor judicial diversion statute specifically excludes DUI, which surprises people. The big exception is military diversion for current and former service members, which can end in complete dismissal. If you served, tell your lawyer immediately.",
      },
      {
        q: "How long does a DUI case take?",
        a: "A straightforward resolution can be done in a couple of months; a litigated case with motions can run six months or more, and that time often works in your favor as weaknesses surface. The DMV clock is different: you have 10 days from arrest to request the hearing that protects your license.",
      },
    ],
    related: [
      { label: "DUI Defense", href: "/dui/" },
      { label: "First DUI in Orange County? Start Here", href: "/blog/first-dui-orange-county-what-happens/" },
      { label: "Military Diversion", href: "/military-diversion/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/qa-dui-dismissed.webp",
  },
  {
    slug: "california-expungement-eligibility",
    title: "Do You Qualify to Clear Your California Record? | Farris Law Firm",
    metaDescription:
      "A defense lawyer's plain-English guide to California expungement eligibility under PC 1203.4: the checklist, the disqualifiers and their fixes, and the tools beyond expungement.",
    h1: "Do I Qualify to Clear My California Criminal Record?",
    datePublished: "2026-07-16",
    category: "Expungement",
    question: {
      source: "one of the most-searched record questions in California",
      text: "I picked up a conviction years ago, finished probation, and have stayed out of trouble since. Some sites say I can expunge it, others say certain convictions never qualify, and one says I need a pardon. What is actually true, and how do I know if I am eligible?",
    },
    tldr: "If you completed probation, are not currently charged with or serving a sentence for anything, and your fines are handled, you very likely qualify for expungement under Penal Code 1203.4, and even a probation violation only makes relief discretionary rather than impossible. Cases that ended in state prison generally need a certificate of rehabilitation instead, and a short list of serious offenses is excluded entirely. Arrests that never became convictions are handled separately, and often more easily, through record sealing. The right tool depends on how your case ended, which takes minutes to determine from your docket.",
    sections: [
      {
        heading: "The Basic Eligibility Checklist",
        body: ["Penal Code 1203.4 relief comes down to a short list. You are in strong shape if:"],
        list: [
          "You were granted probation and completed it, or a court terminated it early",
          "You are not currently charged with, on probation for, or serving a sentence for any other offense",
          "Your fines, fees, and restitution are resolved",
          "Your case was in state court (federal convictions have a different system) and did not result in a state prison sentence",
        ],
      },
      {
        heading: "The Common Disqualifiers, and Their Fixes",
        body: [
          "A probation violation does not end the analysis. It moves you from relief as a matter of right to discretionary relief in the interests of justice, where a judge weighs your life since the conviction: work, family, sobriety, service. We prepare those showings and win them.",
          "Still on probation? The fix can be Penal Code 1203.3 early termination, then expungement immediately after, a sequence we have executed for clients including a successful early termination in our recent victories. Prison sentence in your past? The path is usually a certificate of rehabilitation, which also functions as an automatic pardon application. And a handful of offenses, mostly serious sex crimes against minors and certain vehicle code sections, are statutorily excluded from 1203.4 entirely, which is where honest counsel matters: we will tell you in the first call if your conviction is one of them.",
        ],
      },
      {
        heading: "Never Convicted? You Want Sealing, Not Expungement",
        body: [
          "If you were arrested but the case was dropped, never filed, or you were acquitted, there is no conviction to expunge, but the arrest itself still shows on background checks. The remedy is arrest record sealing under Penal Code 851.87 and 851.91, usually available as a matter of right. We cover it in detail in our guide to sealing arrest records, and it is some of the fastest relief in the system.",
        ],
      },
      {
        heading: "What Expungement Actually Does (and Does Not Do)",
        body: [
          "Granted relief means your plea is withdrawn and the case is dismissed. Most private employers cannot consider it, background checks show a dismissal rather than a conviction, and you can answer most job applications with your head up. Felony wobblers can often be reduced to misdemeanors under 17(b) first, which improves what the record shows even further.",
          "The honest limits: expungement does not restore firearm rights, end sex offender registration, erase the conviction for immigration purposes, or stop it counting as a prior if there is a next time. Anyone promising your record simply vanishes is overselling; what it does deliver is the thing most people actually need, which is a clean answer for employers, landlords, and licensing boards.",
        ],
      },
      {
        heading: "How to Find Out in One Phone Call",
        body: [
          "Tell us the county, the year, the charge, and how it ended, and we can usually map your eligibility and the right sequence of tools on the spot: reduction, early termination, expungement, sealing, or certificate of rehabilitation. Flat fee, payment plans, and in most cases you never appear in court. Our guide on how long expungement takes walks through the timeline stage by stage.",
        ],
      },
    ],
    faqs: [
      {
        q: "I violated probation once years ago. Am I out of luck?",
        a: "No. A violation makes 1203.4 relief discretionary instead of automatic, which means the judge can still grant it in the interests of justice. A well-prepared petition showing who you are today wins these regularly.",
      },
      {
        q: "Can I just file the paperwork myself?",
        a: "You can, and courts provide forms. People hire us for the judgment calls: choosing between tools, sequencing a 17(b) reduction first, preparing the discretionary showing after a violation, and fixing it when a DIY petition was denied. For clean matter-of-right cases we will honestly tell you it is simple.",
      },
      {
        q: "How long does the process take?",
        a: "Typically about 4 to 8 weeks from filing to a signed order in Southern California courts, plus preparation time. Our detailed timeline guide breaks down every stage.",
      },
      {
        q: "Does expungement give me my gun rights back?",
        a: "No. Firearm prohibitions survive 1203.4 relief. Depending on the conviction, a 17(b) reduction to a misdemeanor or other relief may help, and we can assess that honestly before you spend money chasing the wrong tool.",
      },
    ],
    related: [
      { label: "Expungement Services", href: "/expungement/" },
      { label: "How Long Does an Expungement Take?", href: "/blog/how-long-does-an-expungement-take/" },
      { label: "How to Seal an Arrest Record", href: "/blog/seal-arrest-records-california/" },
    ],
    image: "/images/generated/qa-expungement-eligibility.webp",
  },
  {
    slug: "felony-vs-misdemeanor-california",
    title: "Felony vs. Misdemeanor in California: What Actually Changes? | Farris Law Firm",
    metaDescription:
      "Beyond jail time: a defense lawyer explains the real differences between felony and misdemeanor charges in California, how wobblers move between the two, and why the charge level is negotiable.",
    h1: "Felony vs. Misdemeanor in California: What Actually Changes?",
    datePublished: "2026-07-16",
    category: "Criminal Charges",
    question: {
      source: "asked in some form before nearly every first consultation",
      text: "I was charged with a felony, but my cousin had almost the same charge as a misdemeanor. My lawyer says it might get reduced. What is the actual difference for my life, and how does the same conduct end up charged two different ways?",
    },
    tldr: "The formal difference is punishment: misdemeanors max out at a year in county jail, while felonies can mean more than a year and, for some offenses, state prison. The practical difference is bigger: felonies carry heavier collateral damage to jobs, professional licenses, firearm rights, housing, and immigration status. The reason your cousin's charge looked different is that many California offenses are wobblers, chargeable either way, and that choice is influenced by facts, history, and advocacy. The charge level is not fixed: wobblers can be reduced at filing, in negotiation, at sentencing, and even years after conviction under Penal Code 17(b).",
    sections: [
      {
        heading: "The Formal Line: Punishment Ranges",
        body: [
          "California sorts offenses into infractions (fines only, like most traffic tickets), misdemeanors (up to 364 days in county jail), and felonies (potentially more than a year, served in county jail under realignment for many offenses, or state prison for serious ones). Within felonies, sentencing usually follows a triad of three possible terms, and probation is often available instead of custody.",
          "That last part surprises people: a felony conviction frequently results in probation, not prison, especially for first offenses. We have negotiated serious felony cases from prison exposure down to probation only, as our recent victories show. But even a probation-only felony still carries the word felony, and that is where the real cost lives.",
        ],
      },
      {
        heading: "The Real Line: What a Felony Does to Your Life",
        body: ["The lasting differences are collateral, and they are why the charge level is worth fighting over:"],
        list: [
          "Employment: background checks distinguish felony from misdemeanor, and many employers screen on exactly that line",
          "Professional licenses: medical, nursing, real estate, contracting, and securities boards all treat felonies more harshly",
          "Firearms: a felony conviction means a lifetime federal firearm prohibition; most misdemeanors do not (with exceptions like domestic violence)",
          "Immigration: for non-citizens, felony versus misdemeanor and the specific code section can decide deportability; charge selection is everything",
          "Housing, loans, and licensing applications that ask specifically about felony convictions",
          "Strikes: some felonies are strikes under Three Strikes, doubling exposure in any future case",
        ],
      },
      {
        heading: "Wobblers: Where the Fight Happens",
        body: [
          "A huge share of California's most-charged offenses are wobblers, meaning the prosecutor chooses felony or misdemeanor: assault with a deadly weapon, many theft and fraud offenses, domestic violence corporal injury, vandalism over the damage threshold, and more. The choice turns on the alleged facts, injuries, losses, and your record, and it is influenced by advocacy at every stage.",
          "That creates four separate chances to win the charge level: the DA's filing decision (where pre-filing advocacy matters), plea negotiation, a judge's 17(b) ruling at sentencing, and a post-conviction 17(b) petition, sometimes years later, which retroactively makes the conviction a misdemeanor for almost all purposes. If you are carrying an old wobbler felony, that last one is one of the most underused tools in California law, and it pairs naturally with expungement.",
        ],
      },
      {
        heading: "What This Means if You Are Charged Right Now",
        body: [
          "Do not read a felony complaint as a verdict. It is an opening position. The questions that matter: is the charge a wobbler, what facts drive the level, what collateral consequences do you specifically face, and what sequence of advocacy gets the level down. Those are exactly the questions we answer in a free consultation, honestly and specifically.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a felony be changed to a misdemeanor after conviction?",
        a: "If the offense is a wobbler and probation was granted, yes: Penal Code 17(b) lets a judge reduce it, even years later. After reduction it is a misdemeanor for nearly all purposes, and it can then be expunged. Straight felonies, those with no misdemeanor version, cannot be reduced this way.",
      },
      {
        q: "Is felony probation a real thing?",
        a: "Yes. Formal felony probation with conditions and a probation officer is a common outcome, especially for first offenses. It is far better than prison, but the felony conviction still exists, which is why we fight the charge level itself, not just the custody time.",
      },
      {
        q: "Will a felony arrest that never became a conviction show up?",
        a: "The arrest record can appear on some background checks even with no conviction. California limits how employers may use it, and the arrest can usually be sealed under PC 851.87. See our guide to sealing arrest records.",
      },
      {
        q: "What makes a felony a strike?",
        a: "Strikes are the serious or violent felonies listed in Penal Code 667.5(c) and 1192.7(c): robbery, residential burglary, most sex offenses, assaults causing great bodily injury, and similar. A strike prior doubles the sentence in any future felony case, which is why avoiding the strike designation is often the central goal of a defense.",
      },
    ],
    related: [
      { label: "Aggravated Assault (a classic wobbler)", href: "/aggravated-assault/" },
      { label: "Expungement Eligibility", href: "/blog/california-expungement-eligibility/" },
      { label: "Robbery Defense (a strike offense)", href: "/robbery/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/qa-felony-misdemeanor.webp",
  },
  {
    slug: "seal-arrest-records-california",
    title: "How to Seal an Arrest Record in California (PC 851.87) | Farris Law Firm",
    metaDescription:
      "Arrested but never convicted? California's CARE Act lets most people seal the arrest record as a matter of right. A defense lawyer explains who qualifies, the process, and what sealing actually hides.",
    h1: "Arrested but Never Convicted? How to Seal Your California Arrest Record",
    datePublished: "2026-07-16",
    category: "Record Clearing",
    question: {
      source: "a painfully common background-check surprise",
      text: "I was arrested three years ago but the DA never filed anything. I assumed that was the end of it, but a background check for a new job just showed the arrest and I did not get the offer. How is that legal, and how do I make the arrest disappear?",
    },
    tldr: "An arrest creates a record even when no charges follow, and it will keep surfacing on background checks until you do something about it. California's CARE Act, Penal Code 851.87 through 851.92, lets most people whose arrests never became convictions seal the record as a matter of right: charges never filed, charges dismissed, or an acquittal. Once sealed, the arrest is removed from the state summary that feeds most background checks, and California employers were already barred from asking about arrests that did not lead to conviction. The petition is filed in the county of arrest and typically resolves in a few months.",
    sections: [
      {
        heading: "Why an Arrest Shows Up With No Conviction",
        body: [
          "Every booking generates entries: the arresting agency's records, the county court file if anything was filed, and your California summary criminal history, the RAP sheet that background check companies mine. Nobody cleans these up automatically when the DA declines to file. The record just sits there, wearing the word arrest, letting strangers draw conclusions the justice system itself never drew.",
          "California law already forbids most employers from asking about or considering arrests that did not end in conviction. But laws against considering something are cold comfort when a screener simply passes on you without explanation. Sealing removes the data itself, which is the protection that actually works.",
        ],
      },
      {
        heading: "Who Can Seal as a Matter of Right",
        body: ["Under PC 851.91, you are entitled to sealing, not just eligible, if the arrest did not result in a conviction and the case is genuinely over:"],
        list: [
          "The DA never filed charges and no longer can",
          "Charges were filed but dismissed, and cannot be refiled",
          "You were acquitted at trial",
          "Your conviction was vacated or reversed on appeal",
          "Exception: if your record shows a pattern of arrests for domestic violence, child abuse, or elder abuse, sealing becomes discretionary, granted only in the interests of justice, which is a fight we know how to prepare",
        ],
      },
      {
        heading: "The Process and the Timeline",
        body: [
          "The petition is filed in the superior court of the county where the arrest happened and served on the prosecutor and the arresting agency. If sealing is a matter of right and the paperwork is correct, many petitions grant without a contested hearing. Start to finish typically runs a few months, driven mostly by court calendars.",
          "Once granted, the arrest, the booking, and the police reports are sealed: removed from your state summary history, off-limits to the background check industry, and you may lawfully state the arrest did not occur for most purposes. We handled exactly this for a client recently, a successful seal of arrest you can see in our victories, and in most cases the client never appears in court at all.",
        ],
      },
      {
        heading: "Sealing vs. Expungement: Which One Do You Need?",
        body: [
          "The two get confused constantly. Sealing (851.87/851.91) is for arrests that never became convictions: it removes the arrest record itself. Expungement (1203.4) is for convictions where probation was completed: the case is dismissed after the fact, but the record shows a dismissed case rather than nothing. If you have both kinds of history, we sequence both tools. If your record involves juvenile matters, that is a third path, sealing under Welfare and Institutions Code 781, covered in our juvenile records guide.",
          "The honest limits of sealing: law enforcement and prosecutors can still access sealed records, you must still disclose in certain contexts like law enforcement job applications and licensure questions that ask specifically, and sealing one arrest does not clean anything else on the record. We map the whole record before filing anything, so you fix it once, correctly.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can employers ask me about arrests in California?",
        a: "For most private employment, no: California Labor Code 432.7 bars employers from asking about or using arrests that did not lead to conviction. Sealing adds the stronger protection of removing the record from the databases those checks pull from in the first place.",
      },
      {
        q: "How long does sealing take and what does it cost?",
        a: "Plan on roughly two to four months depending on the county's calendar. We handle sealing petitions for a flat fee quoted up front, with payment plans available, and in most matter-of-right cases you never set foot in court.",
      },
      {
        q: "Will the police still see a sealed arrest?",
        a: "Yes. Sealing removes the record from public and employment background checks, but courts, prosecutors, and law enforcement retain access, and the arrest can still be pleaded and proved in certain proceedings. It is powerful, not magic, and we will tell you exactly what it does and does not cover for your situation.",
      },
      {
        q: "The DA never filed, but could they still charge me later?",
        a: "Only within the statute of limitations, generally one year for misdemeanors and three or more for felonies. Sealing as a matter of right applies once refiling is off the table. If you are still inside the window, that calls for a different conversation, and possibly pre-filing advocacy, which we also do.",
      },
    ],
    related: [
      { label: "Expungement Services", href: "/expungement/" },
      { label: "Do You Qualify for Expungement?", href: "/blog/california-expungement-eligibility/" },
      { label: "Sealing Juvenile Records", href: "/blog/sealing-and-expunging-juvenile-records/" },
    ],
    image: "/images/generated/qa-seal-arrest.webp",
  },
  {
    slug: "boutique-vs-high-volume-defense-firm",
    title: "High-Volume Firm vs. Boutique Defense Lawyer: What Are You Paying For? | Farris Law Firm",
    metaDescription:
      "The big advertisers quoted you less than the small firm. A defense lawyer explains the economics of high-volume practices, what attorney time actually buys, and the questions that expose the difference.",
    h1: "High-Volume Law Firm or Boutique Defense Firm: Does It Actually Matter?",
    datePublished: "2026-07-16",
    category: "Choosing a Lawyer",
    question: {
      source: "the question behind every round of consultation calls",
      text: "I am calling around after a DUI arrest. The firms with billboards and radio ads quoted me less than the small firm a friend recommended. They all say they are aggressive and experienced. What am I actually paying for with the more expensive one, and does it change the outcome?",
    },
    tldr: "You are paying for attorney hours on your file, and that is the number nobody advertises. A high-volume practice makes its economics work by resolving cases quickly, often at the standard offer, with your file touched mostly by staff and whichever attorney covers the courthouse that day. A boutique practice carries fewer cases so the attorney you hired can actually read the reports, watch the video, and litigate the weak points, which is where reductions and dismissals come from. Neither model is automatically right: for a truly standard case with no fight in it, a budget firm can be fine. The key is asking questions that expose how each firm actually works before you pay anyone.",
    sections: [
      {
        heading: "The Economics Nobody Explains",
        body: [
          "A law firm that spends heavily on billboards and radio has to feed that spend with volume. Volume only works if cases resolve fast, and the fastest resolution in any courthouse is the standard offer: the deal the prosecutor gives everyone with your charge and your record. There is nothing corrupt about this model. It is simply built to process cases, not to litigate them, and its incentives point away from the time-consuming work that changes outcomes.",
          "A boutique firm inverts the math: fewer cases, more hours each, and a fee that reflects it. The question for you is not which model is morally superior. It is whether your case has something worth finding, because attorney hours are only valuable if someone spends them looking.",
        ],
      },
      {
        heading: "What Attorney Time Actually Buys",
        body: ["The outcomes that beat the standard offer, the reductions and dismissals, come from specific, time-hungry work:"],
        list: [
          "Reading every page of the reports and comparing them against the body camera and dashcam footage, minute by minute",
          "Pulling breath machine calibration logs and blood chain-of-custody records and knowing Title 17 well enough to spot the violation",
          "Running the DMV hearing as evidence discovery, not a formality",
          "Filing suppression motions that create real risk for the prosecution, which is what moves offers off the standard",
          "Knowing the courthouse: which arguments land with which judges and prosecutors, which is why our results include DUIs reduced even with high BACs and a case that was live streamed on YouTube",
        ],
      },
      {
        heading: "The Questions That Expose the Difference",
        body: ["Ask every firm you call the same five questions and listen for hedging:"],
        list: [
          "Who will personally appear at my court dates: the attorney I am speaking with, or whoever covers that courthouse?",
          "How many open cases is that attorney carrying right now?",
          "Will you request and personally watch the body camera footage before advising me to take any offer?",
          "Who handles my DMV hearing, and is it included?",
          "When I have a question on a Saturday, who answers: my attorney, or a call center?",
        ],
      },
      {
        heading: "Our Honest Take",
        body: [
          "We are a boutique firm, so discount our opinion accordingly, and then consider why we built it this way after managing thousands of cases inside higher-volume practices: because the cases that ended best were the ones that got attorney time, and the model was the only thing standing in the way. We intentionally limit our caseload, the attorney you hire is the attorney who works your file, and consultations are free and honest. If your case genuinely has no fight in it, we will say so, quote you a fair flat fee for handling it cleanly, and you can compare that number knowing exactly what it buys.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why do quotes for the same case vary so much?",
        a: "Because you are being quoted different products: hours of attorney attention, seniority of who does the work, whether the DMV hearing and motions are included, and whether trial is priced in or extra. Make every firm itemize what the fee covers, then compare like to like.",
      },
      {
        q: "Is the most expensive lawyer the best one?",
        a: "No. Above a reasonable level, price stops correlating with attention. What predicts outcomes is whether the specific attorney has time for your file and knows your courthouse. A mid-priced boutique lawyer with 30 open cases will usually out-serve a famous name with 300.",
      },
      {
        q: "Are public defenders bad? Everyone online says get a private lawyer.",
        a: "Public defenders are often excellent trial lawyers carrying brutal caseloads, and they cannot handle your DMV hearing. If money is genuinely tight, a PD is far better than a bargain-basement private firm that pleads you out at arraignment. If you can afford real private attention, buy attention, not advertising.",
      },
      {
        q: "What does Farris Law Firm charge?",
        a: "Flat fees quoted up front after a free consultation, with payment plans available. The number depends on the charge, the courthouse, and what the case needs, and we will explain exactly what it includes so you can comparison shop with confidence.",
      },
    ],
    related: [
      { label: "Orange County DUI Defense", href: "/orange-county-dui-lawyer/" },
      { label: "How to Choose a Criminal Defense Lawyer", href: "/blog/how-to-choose-a-criminal-defense-lawyer/" },
      { label: "How Much Does a DUI Lawyer Cost?", href: "/blog/how-much-does-a-dui-lawyer-cost/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/qa-boutique-firm.webp",
  },
  {
    slug: "dui-two-cases-court-and-dmv",
    title: "A California DUI Is Two Cases: Court and the DMV | Farris Law Firm",
    metaDescription:
      "A California DUI defense is not just the criminal case: a separate DMV hearing decides your license on its own rules and a 10 day deadline. A defense lawyer explains both tracks.",
    h1: "A California DUI Is Two Cases, Not One: The Criminal Case and the DMV Case",
    datePublished: "2026-07-17",
    category: "DUI",
    question: {
      source: "one of the most misunderstood parts of California DUI law",
      text: "My cousin said his lawyer beat his DUI in court but he still lost his license for months. How is that possible? I thought if you win the case, you keep your license. Do I have to fight this twice?",
    },
    tldr: "Yes, a California DUI is genuinely two separate cases. The criminal case in court decides guilt and punishment. The DMV's Administrative Per Se action decides your license, and it runs on its own rules, its own hearing officer, and its own 10 day deadline to request a hearing. The outcomes are independent: you can win in court and still lose your license, or lose in court and win at the DMV. A complete DUI defense fights both tracks, and the DMV hearing doubles as an early look at the evidence that often powers the court defense.",
    sections: [
      {
        heading: "Track One: The Criminal Case",
        body: [
          "The court case is the one everyone knows: the DA files charges under Vehicle Code 23152, you are arraigned at the courthouse serving the arrest location, and the case moves through negotiation, motions, and potentially trial. Convictions carry probation, fines, DUI school, and a court-triggered license suspension on top of anything the DMV does.",
          "This track is where reductions live: wet reckless, dry reckless, exhibition of speed, or outright dismissal. It is decided by prosecutors and judges under the beyond a reasonable doubt standard, with all the constitutional protections that implies.",
        ],
      },
      {
        heading: "Track Two: The DMV Administrative Per Se Action",
        body: [
          "The moment you were arrested with a BAC of 0.08 or higher (or refused testing), the officer confiscated your license and served you with a pink temporary license that doubles as a suspension notice. That started the DMV's Administrative Per Se process, which will suspend your license automatically after 30 days unless you request a hearing within 10 days of the arrest.",
          "The DMV hearing is nothing like court. There is no judge and no prosecutor: a DMV hearing officer runs the hearing and decides it. The issues are narrow: was the stop lawful, were you lawfully arrested, and was your BAC 0.08 or higher while driving. The standard of proof is lower than in court. It can be won, but it is a different fight requiring different preparation.",
        ],
      },
      {
        heading: "Why the Two-Track System Trips People Up",
        body: [
          "The outcomes are completely independent, which produces results that feel absurd until you understand the structure: a criminal case reduced to reckless driving while the DMV suspension sticks, or a DMV hearing won while the court case proceeds. Each track only controls its own consequences.",
          "The 10 day deadline is the trap. It expires long before your first court date, so people who wait to deal with everything at arraignment discover their license suspension became automatic weeks earlier. If you take one action after a DUI arrest, make it this one: get the hearing requested inside 10 days.",
        ],
      },
      {
        heading: "How Smart Defense Uses Both Tracks Together",
        body: [
          "Handled correctly, the DMV hearing is not just license protection: it is discovery. Through it we obtain the police report, calibration and maintenance records for the breath device, and sometimes officer testimony, all months before the criminal case would surface the same material. Weaknesses found there power suppression motions and negotiations in court.",
          "This is also why the two cases should be handled by one defense lawyer, not treated as separate problems. Our flat fee includes both tracks: we request the hearing, run it, and fold everything we learn into the court defense. And if the DMV suspension does stick, we walk you through restricted and ignition interlock licenses so you keep driving to work throughout.",
        ],
      },
    ],
    faqs: [
      {
        q: "I only have a few days left in my 10 day window. What do I do?",
        a: "Call us today: requesting the hearing takes a phone call and stops the automatic suspension until the hearing is decided, often months out. If the window has already closed, call anyway: late requests are sometimes accepted with good cause, and restricted license options remain either way.",
      },
      {
        q: "If I win the DMV hearing, is my criminal case over?",
        a: "No, and vice versa: the tracks are independent. A DMV win means your license survives the administrative action, which is valuable on its own and often signals evidence problems that help the court case, but the DA's prosecution continues until it is resolved in court.",
      },
      {
        q: "Does a public defender handle my DMV hearing?",
        a: "No. Public defenders represent you in the criminal case only; the DMV hearing is outside their role. This is one of the most practical reasons people hire private DUI counsel: one firm, both tracks, one strategy.",
      },
      {
        q: "What happens to my license if I just do nothing?",
        a: "The suspension becomes automatic 30 days after arrest: four months for a typical first offense, a full year for a refusal. Doing nothing is choosing the worst outcome on the track that moves fastest. The hearing request costs nothing to make through us and preserves every option.",
      },
    ],
    related: [
      { label: "Orange County DUI Lawyer", href: "/orange-county-dui-lawyer/" },
      { label: "First DUI in Orange County? Start Here", href: "/blog/first-dui-orange-county-what-happens/" },
      { label: "How DUIs Get Dismissed", href: "/blog/how-to-get-a-dui-dismissed-california/" },
    ],
    image: "/images/generated/qa-dui-two-cases.webp",
  },
  {
    slug: "dui-vs-wet-reckless-license",
    title: "DUI vs. Wet Reckless: What Happens to Your License? | Farris Law Firm",
    metaDescription:
      "How do driving restrictions differ between a DUI conviction and a wet reckless in California? A defense lawyer compares suspensions, restricted licenses, IID requirements, and insurance.",
    h1: "DUI vs. Wet Reckless: What Actually Happens to Your Driver's License?",
    datePublished: "2026-07-17",
    category: "DUI",
    question: {
      source: "the question behind every wet reckless negotiation",
      text: "My lawyer says the prosecutor might reduce my DUI to a wet reckless. I keep reading conflicting things about what that does for my license. Does a wet reckless mean I keep driving like nothing happened, or am I still suspended either way?",
    },
    tldr: "A wet reckless dramatically improves the court side of your license picture: unlike a DUI conviction, it triggers no mandatory court suspension and no ignition interlock requirement from the conviction itself. The catch is that the DMV's separate administrative suspension does not care what the court case became. If you lost (or never requested) your DMV hearing, that suspension applies even with a wet reckless in court. Win both tracks and your license truly survives intact, which is why the two fights have to be run together.",
    sections: [
      {
        heading: "What a DUI Conviction Does to Your License",
        body: [
          "A first offense DUI conviction hits your license from two directions. The court conviction itself triggers a six month suspension, and the DMV's administrative action adds its four month suspension (they overlap rather than stack, but each has its own rules). Getting back to unrestricted driving typically runs through an ignition interlock device or restricted license, DUI school enrollment, an SR-22 insurance filing, and reissue fees.",
          "The conviction also puts two points on your record, marks you with a 10 year DUI prior for any future offense, and forces the SR-22 high-risk insurance filing for roughly three years, which is where much of the real long-term cost lives.",
        ],
      },
      {
        heading: "What a Wet Reckless Does Instead",
        body: [
          "A wet reckless (Vehicle Code 23103.5) is reckless driving with a notation that alcohol was involved. On the license front, the differences are substantial: no court-triggered suspension, no mandatory ignition interlock from the conviction, a shorter alcohol program, and lower fines. For professionals and commercial drivers, avoiding the word DUI on the record matters by itself.",
          "The honest limits: a wet reckless still adds two points, still counts as a prior if there is another DUI within 10 years, and insurers still see it. It is a significantly better outcome, not an eraser.",
        ],
      },
      {
        heading: "The Catch Everyone Misses: The DMV Track Runs Anyway",
        body: [
          "Here is the part that generates all the conflicting information you read online. The DMV's administrative suspension is decided at the DMV hearing, not in court. If your BAC was 0.08 or higher and the hearing was lost or never requested, that four month suspension applies no matter how well the court case ended. A wet reckless in court does not undo it.",
          "So the full win requires both: the DMV hearing won (or the suspension managed through restricted licensing) and the court case reduced. When we negotiate a wet reckless, the DMV side has either been fought already or is being managed in parallel, because a reduction that leaves you suspended anyway is only half a result.",
        ],
      },
      {
        heading: "Side by Side",
        body: ["The practical comparison for a typical first offense:"],
        list: [
          "Court-triggered suspension: DUI yes (6 months), wet reckless none",
          "DMV administrative suspension: applies to both if the hearing is lost; winning it protects both",
          "Ignition interlock: DUI usually required for unrestricted driving; wet reckless not required by the conviction",
          "DUI school: DUI 3 to 9 months; wet reckless typically a 12 hour program (longer if a prior)",
          "Points: 2 either way; both are priorable for 10 years",
          "SR-22 insurance filing: required after any suspension, so winning the DMV hearing is what avoids it",
        ],
      },
    ],
    faqs: [
      {
        q: "If I get a wet reckless, do I need an SR-22?",
        a: "Only if a suspension actually happened, which usually means the DMV administrative action. Win the DMV hearing and take the wet reckless, and there is typically no suspension and no SR-22 requirement, which saves thousands in insurance over three years.",
      },
      {
        q: "I have a commercial license. Does a wet reckless save my CDL?",
        a: "It helps meaningfully: a DUI conviction in any vehicle triggers a one year CDL disqualification, while a wet reckless avoids that conviction-based disqualification. The DMV administrative action has its own CDL consequences, so the hearing matters even more for commercial drivers. We have won exactly this reduction for a commercial license holder.",
      },
      {
        q: "Can I drive to work during a suspension?",
        a: "Usually yes. First offenders can typically convert to a restricted license (work, school, DUI program) or an ignition interlock license that allows driving anywhere. The paperwork sequence matters, and we walk clients through it so there is no gap in legal driving.",
      },
      {
        q: "Is a dry reckless even better?",
        a: "Yes: a dry reckless (VC 23103 without the alcohol notation) carries no alcohol program, is not priorable as a DUI, and reads as an ordinary driving offense. It is harder to negotiate but absolutely achievable in the right cases, as our results show, including reductions all the way to exhibition of speed.",
      },
    ],
    related: [
      { label: "The DMV Case Explained", href: "/blog/dui-two-cases-court-and-dmv/" },
      { label: "DUI Defense Overview", href: "/dui/" },
      { label: "How DUIs Get Dismissed", href: "/blog/how-to-get-a-dui-dismissed-california/" },
      { label: "Recent Victories", href: "/recent-victories/" },
    ],
    image: "/images/generated/qa-dui-wet-reckless.webp",
  },
  {
    slug: "dui-government-jobs-security-clearance",
    title: "Does a DUI Affect Government Jobs and Security Clearances? | Farris Law Firm",
    metaDescription:
      "Federal employee, contractor, or clearance holder facing a DUI? A defense lawyer explains suitability reviews, SF-86 disclosure, Guideline G, and why the outcome of your case matters.",
    h1: "How a DUI Conviction Can Affect Your Government Job or Security Clearance",
    datePublished: "2026-07-17",
    category: "DUI",
    question: {
      source: "asked quietly by federal workers, contractors, and service members",
      text: "I work for the government and hold a clearance. I just got arrested for DUI and I am more scared about my job than the court case. Do I have to report this? Is my clearance gone? Should I fight the charge differently because of my job?",
    },
    tldr: "A single DUI rarely ends a government career or a security clearance by itself, but how you handle it can. Clearance holders generally must report the arrest promptly under their agency's rules, and the SF-86 asks about alcohol-related arrests regardless of outcome, so honesty is non-negotiable: concealment sinks more clearances than the DUI itself. The outcome of the criminal case still matters enormously, which is why government workers should fight for reductions and dismissals harder than almost anyone, and tell their defense lawyer about the clearance on day one.",
    sections: [
      {
        heading: "The Reporting Question Comes First",
        body: [
          "For most clearance holders, self-reporting an arrest is mandatory and prompt, typically to your security officer under agency rules. Federal employees without clearances face agency-specific conduct rules, and many contractors have contractual reporting duties. Whatever the specific rule, the pattern in adjudications is consistent: the people who get hurt worst are the ones who hid it.",
          "Reporting an arrest is not a confession of guilt, and your report should be factual and brief: arrested, retained counsel, will update. What you should not do is narrate the incident in detail to anyone, including coworkers, before talking to your defense lawyer, because those statements travel.",
        ],
      },
      {
        heading: "How Clearance Adjudicators Actually Look at a DUI",
        body: [
          "Security clearance decisions run on the adjudicative guidelines, and a DUI implicates two: Guideline G (alcohol consumption) and Guideline J (criminal conduct). Adjudicators apply a whole-person standard: one incident, acknowledged and addressed, weighs very differently than a pattern, a high BAC with aggravators, or any hint of evasion.",
          "Mitigation is a real, recognized framework: time passed, completion of alcohol education or treatment, changed circumstances, and a clean record since. A first offense DUI, promptly reported, competently defended, and followed by visible responsibility, is survivable in the great majority of cases. A second one, or a concealed one, is a different conversation.",
        ],
      },
      {
        heading: "Why the Criminal Outcome Still Matters",
        body: [
          "Everything the government reviews starts from what the record says. A DUI conviction reads as an alcohol-related criminal conviction. A wet reckless reads meaningfully softer. A dismissal or an outcome like exhibition of speed removes the alcohol conviction entirely. The record we build in court is the record your agency adjudicates.",
          "This changes defense strategy. For clearance holders we fight the DMV hearing (a suspension creates its own workplace problems for anyone who drives on duty), push reduction negotiations harder, and think about how every disposition will read on an SF-86 five years from now. We have secured reductions specifically to protect careers and status, including for a commercial license holder and a client with immigration exposure, and the same logic applies to clearances.",
        ],
      },
      {
        heading: "Specific Situations Worth Flagging",
        body: ["A few categories come with their own wrinkles:"],
        list: [
          "Service members: a DUI can trigger both civilian court and command action. Military diversion under Penal Code 1001.80 can dismiss the civilian case entirely for qualifying current and former service members, and we have won it",
          "Law enforcement and POST-certified officers: alcohol convictions draw certification scrutiny; outcome and speed of resolution matter",
          "Federal drivers and CDL holders on government contracts: the license consequences can be the whole ballgame, which makes the DMV hearing critical",
          "Expungement nuance: a later PC 1203.4 expungement helps with private employers, but federal forms like the SF-86 generally still require disclosure of the underlying arrest and case, so never treat expungement as permission to omit",
        ],
      },
      {
        heading: "The Playbook if This Is You",
        body: [
          "Report per your agency's rules, briefly and factually. Retain defense counsel immediately and tell them about your job and clearance in the first conversation, because it changes the strategy. Request the DMV hearing inside 10 days. Then let the defense do its work quietly: the best outcome for your career is a court result that shrinks what there is to adjudicate. The consultation is free, confidential, and available any hour, which matters when the question cannot wait until Monday.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will I automatically lose my clearance over a first DUI?",
        a: "No. Single-incident DUIs with prompt reporting and visible mitigation survive adjudication in most cases. Clearances are lost over patterns, aggravated facts, and dishonesty far more often than over one arrest. Handle the reporting correctly and fight the case properly, and the odds are strongly in your favor.",
      },
      {
        q: "Do I report the arrest even if the case might be dismissed?",
        a: "If your rules require arrest reporting, yes, and promptly: report the arrest factually, then update with the outcome. A later dismissal or reduction becomes powerful mitigation. Waiting to see how the case ends before reporting is how a survivable incident becomes a candor problem.",
      },
      {
        q: "If my DUI gets expunged, can I answer no on the SF-86?",
        a: "Generally no. Federal background forms typically ask about arrests and charges regardless of expungement, and the fine print controls. Expungement still helps in many contexts, but never let it talk you into an omission on a federal form; the omission is the career-ender, not the DUI.",
      },
      {
        q: "I am active duty. Should I take the deal my JAG mentioned or fight the civilian case?",
        a: "Talk to civilian defense counsel before accepting anything: military diversion can dismiss qualifying civilian cases entirely for service members, an outcome better than most negotiated pleas. We coordinate with what is happening on the command side and have won military diversion dismissals; see our recent victories.",
      },
    ],
    related: [
      { label: "Military Diversion", href: "/military-diversion/" },
      { label: "DUI vs. Wet Reckless and Your License", href: "/blog/dui-vs-wet-reckless-license/" },
      { label: "The DMV Case Explained", href: "/blog/dui-two-cases-court-and-dmv/" },
      { label: "Expungement", href: "/expungement/" },
    ],
    image: "/images/generated/qa-dui-government-job.webp",
  },
];

export const QA_BY_SLUG = new Map(QA_POSTS.map((p) => [p.slug, p]));
