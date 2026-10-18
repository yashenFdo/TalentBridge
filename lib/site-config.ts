export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface MetricItem {
  value: string;
  label: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  category: "employer" | "candidate" | "bilateral";
  features: string[];
  icon: string;
}

export interface ProcessStage {
  step: string;
  name: string;
  subtitle: string;
  summary: string;
  employerFocus: string;
  candidateFocus: string;
}

export interface PillarItem {
  title: string;
  subtitle: string;
  text: string;
  highlight: string;
}

export const SITE_CONFIG = {
  brand: {
    name: "Talent Bridge",
    tagline: "The Right Talent. The Right Direction.",
    positioning:
      "An executive-grade recruitment and human capital advisory firm bridging elite enterprises and high-impact leaders.",
    philosophy:
      "High-touch, calibrated vetting over automated volume spam. Deep bilateral advocacy that treats organizational culture and individual career trajectories with equal gravity.",
  },
  contact: {
    email: "contact@talentbridge.lk",
    phone: "+94 77 000 0000",
    phoneRaw: "94770000000",
    whatsappLink: "https://wa.me/94770000000",
    address: {
      line1: "Level 4, Business Tower",
      line2: "Galle Road, Colombo 03",
      country: "Sri Lanka",
    },
    hours: "Monday – Friday, 8:30 AM – 5:30 PM (IST)",
    sla: "All inquiries answered within 24 business hours.",
  },
  metrics: [
    {
      value: "98%",
      label: "12-Month Retention Rate",
      description: "Proven long-term cultural and performance fit across executive mandates.",
    },
    {
      value: "14 Days",
      label: "Average Qualified Shortlist",
      description: "Rapid delivery of pre-screened, calibrated candidates ready to interview.",
    },
    {
      value: "100%",
      label: "Multi-Stage Vetted",
      description: "Exhaustive credential checks, leadership evaluation, and reference audits.",
    },
    {
      value: "500+",
      label: "Executive Placements",
      description: "Leadership appointments across technology, finance, and corporate enterprise.",
    },
  ],
  navLinks: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Methodology", href: "/#methodology" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Careers", href: "/careers" },
  ] as NavItem[],
  services: [
    {
      id: "recruitment-sourcing",
      number: "01",
      title: "Recruitment & Talent Sourcing",
      subtitle: "Proactive candidate discovery mapped to market intelligence",
      description:
        "Comprehensive full-cycle recruitment campaigns across diverse enterprise functions, targeting high-caliber passive professionals who rarely enter job boards.",
      category: "employer",
      features: [
        "Passive talent mapping across regional and global markets",
        "Competency and culture-aligned talent identification",
        "Pipeline architecture for rapid enterprise scaling",
      ],
      icon: "Search",
    },
    {
      id: "candidate-screening",
      number: "02",
      title: "Multi-Stage Candidate Screening",
      subtitle: "Exhaustive multi-stage assessments & background validation",
      description:
        "Rigorous qualification assessing technical competence, emotional intelligence, leadership maturity, and track-record validity before client presentation.",
      category: "employer",
      features: [
        "In-depth behavioral and competency interviews",
        "Confidential 360-degree reference auditing",
        "Comprehensive verification of credentials and achievements",
      ],
      icon: "ShieldCheck",
    },
    {
      id: "executive-recruitment",
      number: "03",
      title: "Executive & Specialist Search",
      subtitle: "Discreet search mandates for C-suite and director-level roles",
      description:
        "Discreet headhunting for niche leaders, confidential replacement searches, and board-level appointments executed with complete confidentiality.",
      category: "employer",
      features: [
        "C-Suite, VP, and Director-level search mandates",
        "Board advisory and succession planning support",
        "Strict non-disclosure agreements and discreet market engagement",
      ],
      icon: "Target",
    },
    {
      id: "career-opportunities",
      number: "04",
      title: "Curated Career Opportunities",
      subtitle: "Access curated openings at top corporate & high-growth firms",
      description:
        "Exclusive placement opportunities with verified employers committed to career mobility, psychological safety, and premier compensation structures.",
      category: "candidate",
      features: [
        "Direct access to unadvertised leadership mandates",
        "Vetted organizations with validated growth trajectories",
        "Transparent compensation bands and equity structuring",
      ],
      icon: "Briefcase",
    },
    {
      id: "candidate-registration",
      number: "05",
      title: "Private Talent Network",
      subtitle: "Join our private network for direct, unadvertised inquiries",
      description:
        "Confidential profile indexing for senior professionals seeking passive, calibrated career transitions aligned with their long-term trajectory.",
      category: "candidate",
      features: [
        "100% free for applicants with zero representation fees",
        "Absolute confidentiality with strict identity controls",
        "Proactive outreach only when verified mandates match your criteria",
      ],
      icon: "Users2",
    },
    {
      id: "strategic-matching",
      number: "06",
      title: "Strategic Role Matching",
      subtitle: "Precision alignment across culture, values, and trajectory",
      description:
        "In-depth calibration ensuring bilateral synergy between candidate working styles, leadership philosophy, and organizational dynamics.",
      category: "bilateral",
      features: [
        "Psychometric and cultural resonance alignment",
        "Two-sided career aspiration and company roadmap synergy",
        "Structured post-placement onboarding and retention monitoring",
      ],
      icon: "Sparkles",
    },
  ] as ServiceItem[],
  methodology: [
    {
      step: "01",
      name: "Discover & Calibrate",
      subtitle: "Foundation & Avatar Synthesis",
      summary:
        "We evaluate role criteria, organizational culture, compensation benchmarks, and executive aspirations to create a high-fidelity candidate avatar.",
      employerFocus:
        "Detailed role calibration, team culture analysis, compensation benchmarking, and candidate avatar synthesis.",
      candidateFocus:
        "Comprehensive career discovery, leadership style evaluation, and core aspirations analysis.",
    },
    {
      step: "02",
      name: "Source & Rigorously Screen",
      subtitle: "Deep Market Headhunting",
      summary:
        "Proactive candidate outreach combined with multi-stage competency interviews, reference audits, and confidential opportunity briefings.",
      employerFocus:
        "Passive talent outreach, competency-based interviews, technical assessments, and background verification.",
      candidateFocus:
        "Confidential opportunity review, executive expectations briefing, and explicit consent confirmation.",
    },
    {
      step: "03",
      name: "Direct Connection & Evaluation",
      subtitle: "Frictionless Calibration",
      summary:
        "Delivery of detailed candidate dossiers with evaluative notes, interview facilitation with senior decision-makers, and prompt debriefs.",
      employerFocus:
        "Delivery of detailed candidate dossiers with evaluative notes and seamless interview coordination.",
      candidateFocus:
        "Direct interview facilitation with executive decision-makers and post-interview debriefs.",
    },
    {
      step: "04",
      name: "Offer Negotiation & Retention",
      subtitle: "Bilateral Alignment",
      summary:
        "Facilitating fair compensation structuring, transition guidance, and milestone-based 30, 60, and 90-day retention follow-ups.",
      employerFocus:
        "Offer structuring, resignation risk mitigation, reference validation, and post-placement check-ins.",
      candidateFocus:
        "Compensation package negotiation, resignation guidance, and smooth onboarding transition.",
    },
  ] as ProcessStage[],
  pillars: [
    {
      title: "Precision Over Volume",
      subtitle: "No resume spam",
      text: "We do not forward unvetted resumes. Clients receive small, hyper-targeted candidate dossiers where every single person is qualified and prepared to accept.",
      highlight: "Hyper-Targeted Shortlists",
    },
    {
      title: "Bilateral Value Creation",
      subtitle: "Both sides win",
      text: "A placement only succeeds if both sides win. We evaluate candidates for long-term retention and culture fit, not just immediate skill checklists.",
      highlight: "Long-Term Retention",
    },
    {
      title: "Uncompromising Confidentiality",
      subtitle: "Complete discretion",
      text: "Executive searches and discreet career transitions require total discretion. We guard organizational strategies and candidate identities with strict NDAs.",
      highlight: "Discreet Search Mandates",
    },
    {
      title: "End-to-End Partnership",
      subtitle: "Beyond the signed offer",
      text: "Our engagement does not terminate with a signed offer letter. We conduct 30, 60, and 90-day retention reviews to guarantee sustained alignment.",
      highlight: "90-Day Retention Guarantee",
    },
  ] as PillarItem[],
};
