import { CvData } from "@/types/cv";

export const SAMPLE_CV: CvData = {
  id: "tb-sample-exec",
  updatedAt: new Date().toISOString(),
  template: "ats-classic",
  personal: {
    fullName: "Arun Shantha Perera",
    title: "Chief Technology Officer & Engineering Director",
    email: "arun.perera@executive-network.com",
    phone: "+94 77 123 4567",
    location: "Colombo, Sri Lanka",
    linkedin: "linkedin.com/in/arun-perera-exec",
    website: "arunperera.dev",
    github: "github.com/arunperera",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    showPhoto: false,
  },
  summary:
    "Accomplished Technology Executive with 15+ years scaling enterprise fintech platforms, cloud engineering hubs, and high-performance teams across South Asia and APAC. Proven track record directing 150+ engineers, managing $12M+ budgets, and architecting banking platforms processing $2.5B in annualized volume.",
  skills: [
    "Enterprise Cloud Architecture (AWS / GCP)",
    "P&L & Budget Management ($12M+)",
    "Distributed Microservices & Systems",
    "Cybersecurity & Regulatory Compliance (ISO 27001)",
    "Engineering Team Scaling & OKR Delivery",
    "Executive Board Governance",
  ],
  technicalSkills: [
    "Node.js", "Python", "Kubernetes", "Terraform", "PostgreSQL", "Kafka"
  ],
  softSkills: [
    "Executive Stakeholder Alignment", "Cross-Functional Leadership"
  ],
  experience: [
    {
      id: "exp-1",
      role: "Chief Technology Officer & VP Engineering",
      company: "Apex Global FinTech Group",
      location: "Colombo & Singapore",
      startDate: "Jan 2021",
      endDate: "Present",
      current: true,
      description: "Leading technology roadmap and engineering execution across 6 regional financial markets.",
      highlights: [
        "Architected core payment orchestrator serving 3.8M retail customers with 99.995% uptime SLA.",
        "Scaled engineering department from 45 to 160 senior engineers while reducing cloud spend by 32%.",
      ],
    },
    {
      id: "exp-2",
      role: "Head of Cloud Infrastructure & Enterprise Platforms",
      company: "Lanka Digital Systems PLC",
      location: "Colombo 03, Sri Lanka",
      startDate: "Mar 2017",
      endDate: "Dec 2020",
      current: false,
      description: "Directed enterprise cloud transformation and managed 55-member infrastructure and SecOps teams.",
      highlights: [
        "Led legacy-to-AWS migration for nationwide carrier, cutting transaction latency by 58%.",
        "Achieved ISO 27001 certification and CBSL compliance across all digital banking channels.",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "MSc in Software Architecture & Distributed Systems",
      institution: "University of Moratuwa",
      location: "Sri Lanka",
      year: "2014",
      details: "Distinction Honors",
    },
    {
      id: "edu-2",
      degree: "BSc (Hons) in Computer Science & Engineering",
      institution: "University of Moratuwa",
      location: "Sri Lanka",
      year: "2010",
      details: "First Class Standing",
    },
  ],
  certifications: [
    {
      id: "cert-1",
      name: "AWS Certified Solutions Architect – Professional",
      issuer: "Amazon Web Services",
      year: "2023",
      credentialId: "AWS-SAP-20230412",
    },
    {
      id: "cert-2",
      name: "Certified Information Security Manager (CISM)",
      issuer: "ISACA",
      year: "2022",
      credentialId: "ISACA-CISM-887234",
    },
  ],
  languages: ["English (Professional Proficiency)", "Sinhala (Native)"],
  projects: [
    {
      id: "proj-1",
      name: "Open Banking API Gateway",
      role: "Principal Architect",
      year: "2022",
      description: "Designed PSD2-compliant open banking API gateway enabling 45 third-party fintech integrations.",
      url: "apexfintech.io/openbanking",
    },
  ],
  awards: [
    "Asia Pacific CIO Award – Digital Transformation Excellence (2023)",
  ],
};

export const BLANK_CV: CvData = {
  id: "tb-cv-" + Math.random().toString(36).substring(2, 9),
  updatedAt: new Date().toISOString(),
  template: "ats-classic",
  personal: {
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    website: "",
    github: "",
    avatarUrl: "",
    showPhoto: false,
  },
  summary: "",
  skills: [],
  technicalSkills: [],
  softSkills: [],
  experience: [],
  education: [],
  certifications: [],
  languages: [],
  projects: [],
  awards: [],
};

const LOCAL_STORAGE_KEY = "talentbridge_active_cv_v4";

export function loadSavedCv(): CvData {
  if (typeof window === "undefined") return SAMPLE_CV;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return SAMPLE_CV;
    const parsed = JSON.parse(raw);
    // Normalize template to 3 allowed templates
    if (parsed.template === "navy") parsed.template = "executive";
    if (parsed.template === "minimal") parsed.template = "ats-classic";
    if (!["ats-classic", "executive", "emerald"].includes(parsed.template)) {
      parsed.template = "ats-classic";
    }
    return parsed;
  } catch {
    return SAMPLE_CV;
  }
}

export function saveCv(data: CvData): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error("Failed to save CV to localStorage", err);
  }
}

/**
 * Encodes CV into a URL-safe base64 string
 */
export function encodeCvToUrl(data: CvData): string {
  try {
    const jsonStr = JSON.stringify(data);
    if (typeof window !== "undefined" && typeof btoa === "function") {
      return encodeURIComponent(btoa(unescape(encodeURIComponent(jsonStr))));
    }
    return Buffer.from(jsonStr).toString("base64url");
  } catch {
    return "";
  }
}

/**
 * Decodes CV from URL-safe base64 string
 */
export function decodeCvFromUrl(encoded: string): CvData | null {
  try {
    let jsonStr = "";
    if (typeof window !== "undefined" && typeof atob === "function") {
      jsonStr = decodeURIComponent(escape(atob(decodeURIComponent(encoded))));
    } else {
      jsonStr = Buffer.from(encoded, "base64url").toString("utf-8");
    }
    return JSON.parse(jsonStr);
  } catch (err) {
    console.error("Failed to decode CV", err);
    return null;
  }
}
