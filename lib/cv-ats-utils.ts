import { CvData } from "@/types/cv";

export interface AtsCheckItem {
  id: string;
  name: string;
  passed: boolean;
  score: number;
  tip: string;
}

export interface AtsAnalysisResult {
  score: number;
  rating: "Needs Work" | "Good" | "Excellent" | "ATS Master";
  color: string;
  checklist: AtsCheckItem[];
  quantifiedCount: number;
  actionVerbCount: number;
  wordCount: number;
}

// Strong executive & ATS action verbs
export const ATS_ACTION_VERBS = [
  "Architected",
  "Spearheaded",
  "Orchestrated",
  "Engineered",
  "Directed",
  "Scaled",
  "Transformed",
  "Reduced",
  "Generated",
  "Accelerated",
  "Maximized",
  "Pioneered",
  "Championed",
  "Optimized",
  "Delivered",
  "Negotiated",
  "Modernized",
  "Launched",
  "Managed",
  "Cultivated",
];

export const ACTION_VERBS_BY_CATEGORY = {
  Leadership: ["Spearheaded", "Directed", "Orchestrated", "Championed", "Mentored", "Cultivated"],
  Transformation: ["Transformed", "Modernized", "Pioneered", "Restructured", "Overhauled"],
  Technical: ["Architected", "Engineered", "Implemented", "Deployed", "Standardized", "Optimized"],
  Financial: ["Reduced", "Generated", "Maximized", "Negotiated", "Allocated", "Secured"],
  Operational: ["Scaled", "Accelerated", "Delivered", "Streamlined", "Unified", "Automated"],
};

/**
 * Calculates ATS optimization score (0-100) and actionable checklist
 */
export function calculateAtsScore(cv: CvData): AtsAnalysisResult {
  let score = 0;
  const checklist: AtsCheckItem[] = [];

  // 1. Contact Information Completeness (15 pts)
  const hasName = Boolean(cv.personal.fullName?.trim());
  const hasEmail = Boolean(cv.personal.email?.trim());
  const hasPhone = Boolean(cv.personal.phone?.trim());
  const hasLocation = Boolean(cv.personal.location?.trim());
  const hasLinkedin = Boolean(cv.personal.linkedin?.trim());
  const contactPassed = hasName && hasEmail && hasPhone && hasLocation;
  const contactScore = contactPassed ? 15 : hasName && hasEmail ? 8 : 0;
  score += contactScore;
  checklist.push({
    id: "contact",
    name: "Complete Contact Information",
    passed: contactPassed,
    score: contactScore,
    tip: contactPassed
      ? "Full name, email, phone, location & LinkedIn formatted cleanly."
      : "Ensure phone, email, location, and LinkedIn profile are provided for direct recruiter parsing.",
  });

  // 2. Executive / Professional Summary (15 pts)
  const summaryWords = cv.summary ? cv.summary.trim().split(/\s+/).length : 0;
  const summaryPassed = summaryWords >= 30 && summaryWords <= 120;
  const summaryScore = summaryPassed ? 15 : summaryWords > 10 ? 8 : 0;
  score += summaryScore;
  checklist.push({
    id: "summary",
    name: "Targeted Professional Summary",
    passed: summaryPassed,
    score: summaryScore,
    tip: summaryPassed
      ? `Summary is ideal length (${summaryWords} words) with high keyword density.`
      : `Summary should be between 30 and 100 words (currently ${summaryWords}). Highlight your executive value proposition.`,
  });

  // 3. Core Skills & Competencies (15 pts)
  const totalSkills = (cv.skills?.length || 0) + (cv.technicalSkills?.length || 0);
  const skillsPassed = totalSkills >= 6;
  const skillsScore = totalSkills >= 8 ? 15 : totalSkills >= 4 ? 8 : 0;
  score += skillsScore;
  checklist.push({
    id: "skills",
    name: "ATS Keyword Skills Density",
    passed: skillsPassed,
    score: skillsScore,
    tip: skillsPassed
      ? `${totalSkills} core competencies detected. Excellent keyword coverage for ATS filters.`
      : `Add at least 6-8 core technical or domain skills (currently ${totalSkills}).`,
  });

  // 4. Quantified Achievements (% / $ / Numbers) (20 pts)
  let quantifiedCount = 0;
  const metricRegex = /(\d+[\.,]?\d*[%kMBk]|[$€£₹]\s?\d+|\d+\+|\b\d+\s?(million|billion|k|fold|engineers|users|customers)\b)/gi;
  
  cv.experience.forEach((exp) => {
    exp.highlights?.forEach((h) => {
      if (metricRegex.test(h)) quantifiedCount++;
    });
    if (exp.description && metricRegex.test(exp.description)) quantifiedCount++;
  });

  const quantifiedPassed = quantifiedCount >= 3;
  const quantifiedScore = quantifiedCount >= 4 ? 20 : quantifiedCount >= 2 ? 12 : quantifiedCount === 1 ? 6 : 0;
  score += quantifiedScore;
  checklist.push({
    id: "quantified",
    name: "Quantified Business Impact",
    passed: quantifiedPassed,
    score: quantifiedScore,
    tip: quantifiedPassed
      ? `Found ${quantifiedCount} quantified metrics (%, $, scale). ATS systems rank metric-backed resumes 40% higher.`
      : `Include at least 3-4 measurable figures (e.g., "Reduced costs by 34%", "Led $14M budget", "Scaled from 45 to 190 engineers"). Currently found: ${quantifiedCount}.`,
  });

  // 5. Strong Action Verb Starting Bullets (15 pts)
  let actionVerbCount = 0;
  cv.experience.forEach((exp) => {
    exp.highlights?.forEach((h) => {
      const firstWord = h.trim().split(/\s+/)[0]?.replace(/[^a-zA-Z]/g, "");
      if (firstWord && ATS_ACTION_VERBS.some((v) => v.toLowerCase() === firstWord.toLowerCase())) {
        actionVerbCount++;
      }
    });
  });

  const verbsPassed = actionVerbCount >= 3;
  const verbsScore = actionVerbCount >= 4 ? 15 : actionVerbCount >= 2 ? 10 : actionVerbCount === 1 ? 5 : 0;
  score += verbsScore;
  checklist.push({
    id: "verbs",
    name: "Executive Action Verb Density",
    passed: verbsPassed,
    score: verbsScore,
    tip: verbsPassed
      ? `Strong verb density (${actionVerbCount} action verbs). Starts accomplishments with decisive impact words.`
      : `Begin bullet points with high-impact past-tense verbs (e.g. Architected, Directed, Spearheaded, Scaled). Found: ${actionVerbCount}.`,
  });

  // 6. Experience & Chronology Structure (10 pts)
  const expPassed = cv.experience && cv.experience.length >= 2;
  const expScore = expPassed ? 10 : cv.experience?.length === 1 ? 5 : 0;
  score += expScore;
  checklist.push({
    id: "experience",
    name: "Reverse Chronological Work History",
    passed: expPassed,
    score: expScore,
    tip: expPassed
      ? `${cv.experience.length} career positions documented with standard titles, dates, and locations.`
      : "Add at least 2 relevant career positions with explicit start/end dates.",
  });

  // 7. Academic & Professional Credentials (10 pts)
  const eduPassed = (cv.education?.length || 0) > 0;
  const certBonus = (cv.certifications?.length || 0) > 0;
  const credScore = eduPassed && certBonus ? 10 : eduPassed ? 7 : 0;
  score += credScore;
  checklist.push({
    id: "credentials",
    name: "Education & Certifications",
    passed: eduPassed,
    score: credScore,
    tip: eduPassed
      ? "Degrees & professional certifications are properly indexed."
      : "Include at least your highest university degree or equivalent professional qualification.",
  });

  // Total word count
  let allText = `${cv.personal.fullName} ${cv.personal.title} ${cv.summary} ${cv.skills.join(" ")}`;
  cv.experience.forEach((e) => {
    allText += ` ${e.role} ${e.company} ${e.description || ""} ${e.highlights.join(" ")}`;
  });
  const wordCount = allText.trim().split(/\s+/).length;

  let rating: AtsAnalysisResult["rating"] = "Needs Work";
  let color = "#ef4444";
  if (score >= 90) {
    rating = "ATS Master";
    color = "#059669";
  } else if (score >= 75) {
    rating = "Excellent";
    color = "#10b981";
  } else if (score >= 50) {
    rating = "Good";
    color = "#f59e0b";
  }

  return {
    score: Math.min(100, score),
    rating,
    color,
    checklist,
    quantifiedCount,
    actionVerbCount,
    wordCount,
  };
}

/**
 * Generates clean plain text representation suitable for ATS copy-pasting
 */
export function generatePlainTextCv(cv: CvData): string {
  const lines: string[] = [];

  // Header
  lines.push((cv.personal.fullName || "NAME").toUpperCase());
  if (cv.personal.title) lines.push(cv.personal.title.toUpperCase());
  
  const contactParts: string[] = [];
  if (cv.personal.location) contactParts.push(cv.personal.location);
  if (cv.personal.phone) contactParts.push(cv.personal.phone);
  if (cv.personal.email) contactParts.push(cv.personal.email);
  if (cv.personal.linkedin) contactParts.push(cv.personal.linkedin);
  if (cv.personal.website) contactParts.push(cv.personal.website);
  if (cv.personal.github) contactParts.push(cv.personal.github);
  lines.push(contactParts.join(" | "));
  lines.push("");

  // Summary
  if (cv.summary) {
    lines.push("PROFESSIONAL SUMMARY");
    lines.push("====================");
    lines.push(cv.summary);
    lines.push("");
  }

  // Skills
  if ((cv.skills && cv.skills.length > 0) || (cv.technicalSkills && cv.technicalSkills.length > 0)) {
    lines.push("CORE COMPETENCIES & SKILLS");
    lines.push("==========================");
    if (cv.skills && cv.skills.length > 0) {
      lines.push("Executive Skills: " + cv.skills.join(" • "));
    }
    if (cv.technicalSkills && cv.technicalSkills.length > 0) {
      lines.push("Technical Stack:  " + cv.technicalSkills.join(" • "));
    }
    if (cv.softSkills && cv.softSkills.length > 0) {
      lines.push("Leadership:       " + cv.softSkills.join(" • "));
    }
    lines.push("");
  }

  // Experience
  if (cv.experience && cv.experience.length > 0) {
    lines.push("PROFESSIONAL EXPERIENCE");
    lines.push("=======================");
    cv.experience.forEach((exp) => {
      const dates = `${exp.startDate} - ${exp.current ? "Present" : exp.endDate}`;
      lines.push(`${exp.role.toUpperCase()} | ${exp.company} (${exp.location})`);
      lines.push(`Dates: ${dates}`);
      if (exp.description) {
        lines.push(exp.description);
      }
      if (exp.highlights && exp.highlights.length > 0) {
        exp.highlights.forEach((h) => {
          lines.push(`• ${h}`);
        });
      }
      lines.push("");
    });
  }

  // Projects
  if (cv.projects && cv.projects.length > 0) {
    lines.push("KEY PROJECTS & INITIATIVES");
    lines.push("==========================");
    cv.projects.forEach((proj) => {
      lines.push(`${proj.name} ${proj.role ? `(${proj.role})` : ""} - ${proj.year || ""}`);
      lines.push(proj.description);
      if (proj.url) lines.push(`URL: ${proj.url}`);
      lines.push("");
    });
  }

  // Education
  if (cv.education && cv.education.length > 0) {
    lines.push("EDUCATION");
    lines.push("=========");
    cv.education.forEach((edu) => {
      lines.push(`${edu.degree} - ${edu.institution} (${edu.location}) | ${edu.year}`);
      if (edu.details) lines.push(`Details: ${edu.details}`);
    });
    lines.push("");
  }

  // Certifications
  if (cv.certifications && cv.certifications.length > 0) {
    lines.push("CERTIFICATIONS & LICENSES");
    lines.push("=========================");
    cv.certifications.forEach((cert) => {
      const idStr = cert.credentialId ? ` (Credential ID: ${cert.credentialId})` : "";
      lines.push(`• ${cert.name} - ${cert.issuer} [${cert.year}]${idStr}`);
    });
    lines.push("");
  }

  // Awards
  if (cv.awards && cv.awards.length > 0) {
    lines.push("HONORS & AWARDS");
    lines.push("===============");
    cv.awards.forEach((award) => lines.push(`• ${award}`));
    lines.push("");
  }

  // Languages
  if (cv.languages && cv.languages.length > 0) {
    lines.push("LANGUAGES");
    lines.push("=========");
    lines.push(cv.languages.join(" • "));
    lines.push("");
  }

  // Verification & Technology Partner Footer
  lines.push("=================================================");
  lines.push("VERIFIED CANDIDATE DOSSIER | TALENT BRIDGE NETWORK");
  lines.push("Technology Partner: Devcity (https://devcity.us)");
  lines.push("Copyright (c) 2026 Talent Bridge. All rights reserved.");
  lines.push("=================================================");

  return lines.join("\n");
}
