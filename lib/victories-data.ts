// All victories from the live Recent Victories page, categorized for the
// filterable results grid. Outcomes are verbatim facts from the firm.

export type Victory = {
  case: string;
  outcome: string;
  category: "DUI" | "Dismissals" | "Warrants & Probation" | "Reductions" | "Records";
};

export const ALL_VICTORIES: Victory[] = [
  { case: "People v. Tenbrink", outcome: "DUI reduced to wet reckless, even though the incident was live streamed on YouTube", category: "DUI" },
  { case: "People v. Kalfaian", outcome: "Drug possession case dismissed when we demanded substance testing and the substance was sugar", category: "Dismissals" },
  { case: "People v. Zakiyants", outcome: "Complete dismissal of PC 242 battery charge", category: "Dismissals" },
  { case: "People v. Jendo", outcome: "DUI reduced to wet reckless to help the client's immigration status", category: "DUI" },
  { case: "People v. Pulido", outcome: "Dismissal because the case was filed after the statute of limitations had run", category: "Dismissals" },
  { case: "People v. Mitchell", outcome: "Successful military diversion, case dismissed upon completion of classes", category: "Dismissals" },
  { case: "People v. Deangelis", outcome: "Successful seal of arrest", category: "Records" },
  { case: "People v. Preciado", outcome: "DUI with high BAC reduced to wet reckless", category: "DUI" },
  { case: "People v. Martinez", outcome: "DUI reduction to wet reckless while the client holds a commercial license", category: "DUI" },
  { case: "People v. Buitron", outcome: "Reinstated probation on a 6 year old bench warrant", category: "Warrants & Probation" },
  { case: "People v. McGee", outcome: "Serious felony negotiated down from prison time to probation only", category: "Reductions" },
  { case: "People v. Abdilmanova", outcome: "Complete dismissal", category: "Dismissals" },
  { case: "People v. Nigro", outcome: "Complete dismissal", category: "Dismissals" },
  { case: "People v. Garcia", outcome: "Reduction to public intoxication from a DUI", category: "DUI" },
  { case: "People v. Franco", outcome: "Diversion only for resisting arrest case, no jail and no probation", category: "Dismissals" },
  { case: "People v. Daza", outcome: "No jail, probation only on a serious misdemeanor case", category: "Reductions" },
  { case: "People v. Elger", outcome: "Vandalism case with diversion only, resulting in dismissal", category: "Dismissals" },
  { case: "People v. Igartua", outcome: "Serious fighting and assault case reduced to disturbing the peace", category: "Reductions" },
  { case: "People v. Duran", outcome: "Diversion granted on a hit and run case", category: "Dismissals" },
  { case: "People v. Curtis", outcome: "Reduced DUI to exhibition of speed only", category: "DUI" },
  { case: "People v. Sanchez", outcome: "Successful early termination of probation after a misdemeanor case", category: "Warrants & Probation" },
  { case: "People v. Mier", outcome: "Complete dismissal of hit and run case due to mistaken identity", category: "Dismissals" },
];

export const VICTORY_CATEGORIES = [
  "All",
  "DUI",
  "Dismissals",
  "Reductions",
  "Warrants & Probation",
  "Records",
] as const;
