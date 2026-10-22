import { CvData } from "@/types/cv";

export const SAMPLE_CV: CvData = {
  id: "tb-sample-exec",
  updatedAt: new Date().toISOString(),
  template: "emerald",
  personal: {
    fullName: "Arun Shantha Perera",
    title: "Chief Technology Officer & Engineering Director",
    email: "arun.perera@executive-network.com",
    phone: "+94 77 123 4567",
    location: "Colombo, Sri Lanka (Open to Regional Relocation)",
    linkedin: "linkedin.com/in/arun-perera-exec",
    website: "https://arunperera.dev",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  summary:
    "Distinguished technology executive and transformation leader with over 16 years of experience scaling Tier-1 fintech platforms, cloud engineering hubs, and high-performance teams across South Asia and APAC. Proven track record leading 180+ engineering personnel, directing $14M+ annual technology budgets, and architecting fault-tolerant banking platforms processing $2.5B in annualized transaction volume.",
  skills: [
    "Enterprise Cloud Architecture",
    "P&L & Budget Management ($15M+)",
    "Distributed Systems & Microservices",
    "Executive Board Governance",
    "Fintech & Payment Gateways",
    "Cybersecurity & Regulatory Compliance (ISO 27001)",
    "Global Talent Sourcing & Retention",
    "Agile / OKR Delivery Frameworks",
  ],
  experience: [
    {
      id: "exp-1",
      role: "Chief Technology Officer & VP Engineering",
      company: "Apex Global FinTech Group",
      location: "Colombo & Singapore",
      startDate: "2021",
      endDate: "Present",
      current: true,
      highlights: [
        "Architected core payment orchestrator serving 3.8M active regional retail banking customers with 99.995% uptime.",
        "Scaled cross-functional engineering department from 45 to 190 senior engineers across Sri Lanka, Malaysia, and Australia.",
        "Reduced annual cloud compute expenditure by 34% through automated kubernetes bin-packing and serverless workload optimization.",
        "Spearheaded Series-B due-diligence technical compliance securing $28M international institutional funding round.",
      ],
    },
    {
      id: "exp-2",
      role: "Head of Cloud Infrastructure & Enterprise Platforms",
      company: "Lanka Digital Systems PLC",
      location: "Colombo 03, Sri Lanka",
      startDate: "2017",
      endDate: "2021",
      current: false,
      highlights: [
        "Led legacy-to-AWS transformation for nationwide telecommunications carrier, slashing database latency by 62%.",
        "Managed 65-member infrastructure, security operations (SecOps), and platform engineering teams.",
        "Established company's first internal engineering incubator, yielding two proprietary enterprise patents.",
      ],
    },
    {
      id: "exp-3",
      role: "Principal Solutions Architect",
      company: "Virtusa / MillenniumIT",
      location: "Colombo, Sri Lanka",
      startDate: "2012",
      endDate: "2017",
      current: false,
      highlights: [
        "Designed ultra-low latency exchange matching gateway components deployed across international securities exchanges.",
        "Direct client liaison for tier-1 London & Singapore investment banking infrastructure rollouts.",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "Master of Science (MSc) in Software Architecture & Distributed Systems",
      institution: "University of Moratuwa",
      location: "Sri Lanka",
      year: "2014",
      details: "Distinction Honors — Focus on High-Throughput Financial Messaging Protocols",
    },
    {
      id: "edu-2",
      degree: "B.Sc. (Hons) in Computer Science & Engineering",
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
    },
    {
      id: "cert-2",
      name: "Certified Information Security Manager (CISM)",
      issuer: "ISACA",
      year: "2022",
    },
    {
      id: "cert-3",
      name: "Executive Leadership Program in Strategy & Innovation",
      issuer: "INSEAD",
      year: "2020",
    },
  ],
  languages: ["English (Native / Bilingual Fluency)", "Sinhala (Native)", "Tamil (Working Proficiency)"],
};

export const BLANK_CV: CvData = {
  id: "tb-cv-" + Math.random().toString(36).substring(2, 9),
  updatedAt: new Date().toISOString(),
  template: "emerald",
  personal: {
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    website: "",
    avatarUrl: "",
  },
  summary: "",
  skills: [],
  experience: [],
  education: [],
  certifications: [],
  languages: [],
};

const LOCAL_STORAGE_KEY = "talentbridge_active_cv_v1";

export function loadSavedCv(): CvData {
  if (typeof window === "undefined") return SAMPLE_CV;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return SAMPLE_CV;
    return JSON.parse(raw);
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
