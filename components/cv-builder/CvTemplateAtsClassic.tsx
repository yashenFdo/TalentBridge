"use client";

import React from "react";
import Image from "next/image";
import { CvData } from "@/types/cv";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { CvFooter } from "./CvFooter";

interface Props {
  cv: CvData;
  accentColor?: string;
  fontFamily?: "sans" | "serif";
  spacingDensity?: "compact" | "normal" | "comfortable";
}

export function CvTemplateAtsClassic({
  cv,
  accentColor = "#0f172a",
  fontFamily = "sans",
  spacingDensity = "normal",
}: Props) {
  const { personal, summary, skills, technicalSkills, softSkills, experience, education, certifications, languages, projects, awards } = cv;

  const fontClass = fontFamily === "serif" ? "font-serif" : "font-sans";
  const paddingClass =
    spacingDensity === "compact"
      ? "p-6 sm:p-8 space-y-4"
      : spacingDensity === "comfortable"
      ? "p-10 sm:p-14 space-y-7"
      : "p-8 sm:p-12 space-y-6";

  const itemGap = spacingDensity === "compact" ? "space-y-3" : "space-y-5";

  return (
    <div
      className={`cv-document-container cv-a4-sheet bg-white text-slate-900 shadow-md rounded-none max-w-[850px] mx-auto border border-slate-300 ${fontClass} ${paddingClass} flex flex-col justify-between print:!block print:!border-none print:!shadow-none print:!p-0 print:!max-w-none print:!w-full print:!m-0 print:!min-h-0 print:!h-auto print:!visible print:!opacity-100`}
      style={{
        lineHeight: spacingDensity === "compact" ? 1.4 : 1.55,
      }}
    >
      <div className="space-y-6">
      {/* 1. ATS HEADER - Strictly centered or left-aligned, standard text only */}
      <header className="border-b-2 border-slate-900 pb-4 print:border-slate-900">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">
          {personal.showPhoto && personal.avatarUrl && (
            <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden border-2 border-slate-900 shrink-0 shadow-xs">
              <Image
                src={personal.avatarUrl}
                alt={personal.fullName || "Candidate Photo"}
                fill
                className="object-cover"
                sizes="88px"
                unoptimized
              />
            </div>
          )}
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-slate-950 mb-1">
              {personal.fullName || "Your Full Name"}
            </h1>
            <p className="text-sm font-bold uppercase tracking-wider text-slate-700">
              {personal.title || "Target Professional Title"}
            </p>
          </div>
        </div>

        {/* ATS-safe contact line: plain delimiter-separated text */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-700">
          {personal.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-500 no-print" />
              <span>{personal.location}</span>
            </span>
          )}
          {personal.phone && (
            <>
              <span className="text-slate-400">•</span>
              <a href={`tel:${personal.phone}`} className="flex items-center gap-1 hover:underline">
                <Phone className="w-3 h-3 text-slate-500 no-print" />
                <span>{personal.phone}</span>
              </a>
            </>
          )}
          {personal.email && (
            <>
              <span className="text-slate-400">•</span>
              <a href={`mailto:${personal.email}`} className="flex items-center gap-1 hover:underline">
                <Mail className="w-3 h-3 text-slate-500 no-print" />
                <span>{personal.email}</span>
              </a>
            </>
          )}
          {personal.linkedin && (
            <>
              <span className="text-slate-400">•</span>
              <span className="flex items-center gap-1">
                <LinkedinIcon className="w-3 h-3 text-slate-500 no-print" />
                <span>{personal.linkedin}</span>
              </span>
            </>
          )}
          {personal.website && (
            <>
              <span className="text-slate-400">•</span>
              <span className="flex items-center gap-1">
                <Globe className="w-3 h-3 text-slate-500 no-print" />
                <span>{personal.website}</span>
              </span>
            </>
          )}
          {personal.github && (
            <>
              <span className="text-slate-400">•</span>
              <span className="flex items-center gap-1">
                <GithubIcon className="w-3 h-3 text-slate-500 no-print" />
                <span>{personal.github}</span>
              </span>
            </>
          )}
        </div>
      </header>

      {/* 2. PROFESSIONAL SUMMARY */}
      {summary && (
        <section className="space-y-1.5 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-[0.15em] text-slate-900 border-b border-slate-300 pb-1">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-800 leading-relaxed text-justify">
            {summary}
          </p>
        </section>
      )}

      {/* 3. CORE COMPETENCIES & SKILLS - Formatted for ATS Keyword Scanners */}
      {((skills && skills.length > 0) || (technicalSkills && technicalSkills.length > 0)) && (
        <section className="space-y-2 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-[0.15em] text-slate-900 border-b border-slate-300 pb-1">
            Core Competencies & Skills
          </h2>

          {skills && skills.length > 0 && (
            <div className="text-xs sm:text-[13px] text-slate-800">
              <strong className="font-bold text-slate-950">Executive & Strategic: </strong>
              <span>{skills.join(" • ")}</span>
            </div>
          )}

          {technicalSkills && technicalSkills.length > 0 && (
            <div className="text-xs sm:text-[13px] text-slate-800">
              <strong className="font-bold text-slate-950">Technical & Systems: </strong>
              <span>{technicalSkills.join(" • ")}</span>
            </div>
          )}

          {softSkills && softSkills.length > 0 && (
            <div className="text-xs sm:text-[13px] text-slate-800">
              <strong className="font-bold text-slate-950">Leadership & Governance: </strong>
              <span>{softSkills.join(" • ")}</span>
            </div>
          )}
        </section>
      )}

      {/* 4. PROFESSIONAL EXPERIENCE */}
      {experience && experience.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xs font-black uppercase tracking-[0.15em] text-slate-900 border-b border-slate-300 pb-1">
            Professional Experience
          </h2>

          <div className={itemGap}>
            {experience.map((exp) => (
              <div key={exp.id} className="space-y-1.5 break-inside-avoid">
                {/* Title line with Date aligned right */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-950">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>

                {/* Company and Location line */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs text-slate-700 font-medium">
                  <span className="italic">{exp.company}</span>
                  {exp.location && <span>{exp.location}</span>}
                </div>

                {/* Scope Description */}
                {exp.description && (
                  <p className="text-xs text-slate-700 pt-0.5 leading-relaxed">
                    {exp.description}
                  </p>
                )}

                {/* Achievement Bullets */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-[13px] text-slate-800 leading-relaxed pt-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="pl-1">
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. KEY PROJECTS */}
      {projects && projects.length > 0 && (
        <section className="space-y-3 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-[0.15em] text-slate-900 border-b border-slate-300 pb-1">
            Key Projects & Strategic Initiatives
          </h2>
          <div className="space-y-2.5">
            {projects.map((proj) => (
              <div key={proj.id} className="space-y-0.5">
                <div className="flex flex-wrap items-baseline justify-between text-xs sm:text-sm">
                  <div className="font-bold text-slate-950">
                    {proj.name} {proj.role && <span className="font-medium text-slate-700">| {proj.role}</span>}
                  </div>
                  {proj.year && <span className="text-xs font-semibold text-slate-600">{proj.year}</span>}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">{proj.description}</p>
                {proj.url && <p className="text-[11px] text-slate-500 font-mono">{proj.url}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. EDUCATION */}
      {education && education.length > 0 && (
        <section className="space-y-2.5 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-[0.15em] text-slate-900 border-b border-slate-300 pb-1">
            Education
          </h2>
          <div className="space-y-2">
            {education.map((edu) => (
              <div key={edu.id} className="flex flex-wrap items-baseline justify-between gap-x-2 text-xs sm:text-[13px]">
                <div>
                  <span className="font-bold text-slate-950">{edu.degree}</span>
                  <span className="text-slate-700"> — {edu.institution}</span>
                  {edu.location && <span className="text-slate-500"> ({edu.location})</span>}
                  {edu.details && <p className="text-xs text-slate-600 italic mt-0.5">{edu.details}</p>}
                </div>
                {edu.year && <span className="font-semibold text-slate-700 whitespace-nowrap">{edu.year}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. CERTIFICATIONS & CREDENTIALS */}
      {certifications && certifications.length > 0 && (
        <section className="space-y-2 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-[0.15em] text-slate-900 border-b border-slate-300 pb-1">
            Certifications & Licenses
          </h2>
          <div className="space-y-1.5 text-xs sm:text-[13px]">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex flex-wrap items-baseline justify-between gap-x-2">
                <div>
                  <span className="font-bold text-slate-950">{cert.name}</span>
                  <span className="text-slate-700"> — {cert.issuer}</span>
                  {cert.credentialId && (
                    <span className="text-[11px] text-slate-500 ml-2 font-mono">
                      (ID: {cert.credentialId})
                    </span>
                  )}
                </div>
                {cert.year && <span className="font-semibold text-slate-700 whitespace-nowrap">{cert.year}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. HONORS & AWARDS */}
      {awards && awards.length > 0 && (
        <section className="space-y-1.5 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-[0.15em] text-slate-900 border-b border-slate-300 pb-1">
            Honors & Awards
          </h2>
          <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-800">
            {awards.map((award, i) => (
              <li key={i} className="pl-1">{award}</li>
            ))}
          </ul>
        </section>
      )}

      {/* 9. LANGUAGES */}
      {languages && languages.length > 0 && (
        <section className="space-y-1 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-[0.15em] text-slate-900 border-b border-slate-300 pb-1">
            Languages
          </h2>
          <p className="text-xs text-slate-800">
            {languages.join(" • ")}
          </p>
        </section>
      )}
      </div>

      {/* A4 Verified Dossier Footer with Copyright, Devcity Partner & QR Code */}
      <CvFooter cv={cv} />
    </div>
  );
}
