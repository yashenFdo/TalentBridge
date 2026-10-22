"use client";

import React from "react";
import Image from "next/image";
import { CvData } from "@/types/cv";
import { Mail, Phone, MapPin, Globe, CheckCircle2 } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { CvFooter } from "./CvFooter";

interface Props {
  cv: CvData;
}

export function CvTemplateEmerald({ cv }: Props) {
  const { personal, summary, skills, technicalSkills, softSkills, experience, education, certifications, languages, projects, awards } = cv;

  return (
    <div className="cv-document-container cv-a4-sheet bg-white text-[#1E293B] p-8 sm:p-12 shadow-md rounded-none max-w-[850px] mx-auto border border-slate-200 flex flex-col justify-between print:!block print:!border-none print:!shadow-none print:!p-0 print:!max-w-none print:!w-full print:!m-0 print:!min-h-0 print:!h-auto print:!visible print:!opacity-100">
      <div className="space-y-6">
      {/* Header Profile Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b-2 border-[#059669]/25">
        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#065F46] bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
              Verified Candidate
            </span>
            <span className="text-xs text-slate-400">Talent Bridge Executive Network</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            {personal.fullName || "Your Full Name"}
          </h1>
          <p className="text-base sm:text-lg font-bold text-[#059669]">
            {personal.title || "Your Executive / Professional Title"}
          </p>

          {/* Contact Details Grid */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-xs text-slate-600">
            {personal.email && (
              <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 hover:text-[#059669]">
                <Mail className="w-3.5 h-3.5 text-[#059669]" />
                <span>{personal.email}</span>
              </a>
            )}
            {personal.phone && (
              <a href={`tel:${personal.phone}`} className="flex items-center gap-1.5 hover:text-[#059669]">
                <Phone className="w-3.5 h-3.5 text-[#059669]" />
                <span>{personal.phone}</span>
              </a>
            )}
            {personal.location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#059669]" />
                <span>{personal.location}</span>
              </div>
            )}
            {personal.linkedin && (
              <div className="flex items-center gap-1.5 text-slate-600">
                <LinkedinIcon className="w-3.5 h-3.5 text-[#059669]" />
                <span>{personal.linkedin}</span>
              </div>
            )}
            {personal.website && (
              <div className="flex items-center gap-1.5 text-slate-600">
                <Globe className="w-3.5 h-3.5 text-[#059669]" />
                <span>{personal.website}</span>
              </div>
            )}
            {personal.github && (
              <div className="flex items-center gap-1.5 text-slate-600">
                <GithubIcon className="w-3.5 h-3.5 text-[#059669]" />
                <span>{personal.github}</span>
              </div>
            )}
          </div>
        </div>

        {personal.showPhoto && personal.avatarUrl && (
          <div className="relative w-22 h-22 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#059669] shrink-0 shadow-sm">
            <Image
              src={personal.avatarUrl}
              alt={personal.fullName || "Candidate Photo"}
              fill
              className="object-cover"
              sizes="96px"
              unoptimized
            />
          </div>
        )}
      </div>

      {/* Executive Summary */}
      {summary && (
        <section className="py-6 border-b border-slate-100 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#059669] mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#059669]" />
            Executive Summary
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 font-normal">
            {summary}
          </p>
        </section>
      )}

      {/* Core Competencies / Skills */}
      {((skills && skills.length > 0) || (technicalSkills && technicalSkills.length > 0)) && (
        <section className="py-6 border-b border-slate-100 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#059669] mb-3.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#059669]" />
            Core Competencies & Capabilities
          </h2>

          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200/80 rounded-md text-xs font-medium text-slate-800"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#059669]" />
                  {skill}
                </span>
              ))}
            </div>
          )}

          {technicalSkills && technicalSkills.length > 0 && (
            <div className="text-xs text-slate-600 pt-3">
              <strong className="font-bold text-slate-800">Technical Stack: </strong>
              <span>{technicalSkills.join(" • ")}</span>
            </div>
          )}

          {softSkills && softSkills.length > 0 && (
            <div className="text-xs text-slate-600 pt-1">
              <strong className="font-bold text-slate-800">Executive Leadership: </strong>
              <span>{softSkills.join(" • ")}</span>
            </div>
          )}
        </section>
      )}

      {/* Professional Experience */}
      {experience && experience.length > 0 && (
        <section className="py-6 border-b border-slate-100">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#059669] mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#059669]" />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-200 break-inside-avoid">
                <span className="absolute -left-1 top-2 w-2.5 h-2.5 rounded-full bg-[#059669] ring-4 ring-white" />
                
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h3 className="text-base font-bold text-slate-900">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-semibold text-[#065F46] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 whitespace-nowrap inline-block self-start sm:self-auto">
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>

                <div className="text-xs font-semibold text-slate-600 mb-2">
                  <span className="text-slate-800">{exp.company}</span>
                  {exp.location && <span> • {exp.location}</span>}
                </div>

                {exp.description && (
                  <p className="text-xs text-slate-600 mb-2 leading-relaxed italic">
                    {exp.description}
                  </p>
                )}

                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-1.5 pt-1">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="text-xs leading-relaxed text-slate-600 flex items-start gap-2">
                        <span className="text-[#059669] font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="py-6 border-b border-slate-100 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#059669] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#059669]" />
            Key Projects & Transformation Case Studies
          </h2>
          <div className="space-y-3">
            {projects.map((proj) => (
              <div key={proj.id} className="text-xs space-y-1">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>{proj.name} {proj.role && <span className="font-normal text-slate-600">({proj.role})</span>}</span>
                  {proj.year && <span className="text-slate-500">{proj.year}</span>}
                </div>
                <p className="text-slate-600 leading-relaxed">{proj.description}</p>
                {proj.url && <p className="text-[11px] text-[#059669] font-mono">{proj.url}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className="py-6 border-b border-slate-100 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#059669] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#059669]" />
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{edu.degree}</h3>
                  <p className="text-slate-600 font-medium">{edu.institution} {edu.location && `• ${edu.location}`}</p>
                  {edu.details && <p className="text-slate-500 italic mt-0.5">{edu.details}</p>}
                </div>
                <span className="text-slate-500 font-semibold">{edu.year}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <section className="py-6 border-b border-slate-100 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#059669] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#059669]" />
            Certifications & Licenses
          </h2>
          <div className="space-y-2">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between items-baseline text-xs">
                <div>
                  <span className="font-bold text-slate-900">{cert.name}</span>
                  <span className="text-slate-600"> — {cert.issuer}</span>
                  {cert.credentialId && <span className="text-slate-400 font-mono text-[11px] ml-2">ID: {cert.credentialId}</span>}
                </div>
                <span className="text-slate-500 font-semibold">{cert.year}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Awards */}
      {awards && awards.length > 0 && (
        <section className="py-6 border-b border-slate-100 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#059669] mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#059669]" />
            Honors & Awards
          </h2>
          <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
            {awards.map((award, i) => (
              <li key={i}>{award}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Languages */}
      {languages && languages.length > 0 && (
        <section className="pt-6 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#059669] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#059669]" />
            Languages
          </h2>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, idx) => (
              <span key={idx} className="text-xs text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded">
                {lang}
              </span>
            ))}
          </div>
        </section>
      )}
      </div>

      {/* A4 Verified Dossier Footer with Copyright, Devcity Partner & QR Code */}
      <CvFooter cv={cv} />
    </div>
  );
}
