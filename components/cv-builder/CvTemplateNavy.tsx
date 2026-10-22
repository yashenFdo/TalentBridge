"use client";

import React from "react";
import { CvData } from "@/types/cv";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { CvFooter } from "./CvFooter";

interface Props {
  cv: CvData;
}

export function CvTemplateNavy({ cv }: Props) {
  const { personal, summary, skills, technicalSkills, softSkills, experience, education, certifications, languages, projects, awards } = cv;

  return (
    <div className="cv-document-container cv-a4-sheet bg-white text-[#1E293B] p-8 sm:p-12 shadow-md rounded-none max-w-[850px] mx-auto border border-slate-200 flex flex-col justify-between print:border-none print:shadow-none print:p-0">
      <div>
      {/* Dark Navy Executive Top Banner */}
      <div className="bg-[#0A192F] text-white p-6 sm:p-8 rounded-lg mb-8">
        <div className="space-y-2">
          <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-emerald-400">
            Executive Profile • Talent Bridge
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {personal.fullName || "Your Full Name"}
          </h1>
          <p className="text-sm sm:text-base font-bold text-slate-200">
            {personal.title || "Target Professional Role"}
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-3 text-xs text-slate-300">
            {personal.email && (
              <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 hover:text-white">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personal.email}</span>
              </a>
            )}
            {personal.phone && (
              <a href={`tel:${personal.phone}`} className="flex items-center gap-1.5 hover:text-white">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personal.phone}</span>
              </a>
            )}
            {personal.location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personal.location}</span>
              </div>
            )}
            {personal.linkedin && (
              <div className="flex items-center gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personal.linkedin}</span>
              </div>
            )}
            {personal.website && (
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personal.website}</span>
              </div>
            )}
            {personal.github && (
              <div className="flex items-center gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personal.github}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <section className="mb-8 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A192F] mb-3 pb-1 border-b-2 border-[#0A192F]">
            Executive Summary
          </h2>
          <p className="text-sm leading-relaxed text-slate-700">
            {summary}
          </p>
        </section>
      )}

      {/* Core Competencies */}
      {((skills && skills.length > 0) || (technicalSkills && technicalSkills.length > 0)) && (
        <section className="mb-8 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A192F] mb-3 pb-1 border-b-2 border-[#0A192F]">
            Core Competencies & Capabilities
          </h2>
          {skills && skills.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {skills.map((skill, idx) => (
                <div key={idx} className="text-xs font-medium text-slate-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A192F]" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          )}
          {technicalSkills && technicalSkills.length > 0 && (
            <div className="text-xs text-slate-600 pt-3">
              <strong className="font-bold text-slate-900">Technical Skills: </strong>
              <span>{technicalSkills.join(" • ")}</span>
            </div>
          )}
        </section>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A192F] mb-4 pb-1 border-b-2 border-[#0A192F]">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="space-y-2 break-inside-avoid">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-base font-bold text-slate-900">{exp.role}</h3>
                  <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                <div className="text-xs font-semibold text-[#0A192F]">
                  <span>{exp.company}</span>
                  {exp.location && <span className="text-slate-500 font-normal"> • {exp.location}</span>}
                </div>
                {exp.description && (
                  <p className="text-xs text-slate-600 leading-relaxed italic">{exp.description}</p>
                )}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 leading-relaxed pt-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
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
        <section className="mb-8 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A192F] mb-3 pb-1 border-b-2 border-[#0A192F]">
            Key Projects
          </h2>
          <div className="space-y-3">
            {projects.map((proj) => (
              <div key={proj.id} className="text-xs space-y-0.5">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>{proj.name} {proj.role && <span className="font-normal text-slate-600">({proj.role})</span>}</span>
                  {proj.year && <span className="text-slate-500">{proj.year}</span>}
                </div>
                <p className="text-slate-700">{proj.description}</p>
                {proj.url && <p className="text-[11px] text-blue-700 font-mono">{proj.url}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className="mb-8 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A192F] mb-3 pb-1 border-b-2 border-[#0A192F]">
            Education
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between text-xs">
                <div>
                  <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                  <p className="text-slate-600">{edu.institution} {edu.location && `• ${edu.location}`}</p>
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
        <section className="mb-8 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A192F] mb-3 pb-1 border-b-2 border-[#0A192F]">
            Certifications
          </h2>
          <div className="space-y-2 text-xs">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between">
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
        <section className="mb-8 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A192F] mb-3 pb-1 border-b-2 border-[#0A192F]">
            Awards & Recognition
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
        <section className="break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A192F] mb-2 pb-1 border-b-2 border-[#0A192F]">
            Languages
          </h2>
          <p className="text-xs text-slate-700">{languages.join(" • ")}</p>
        </section>
      )}
      </div>

      {/* A4 Verified Dossier Footer with Copyright, Devcity Partner & QR Code */}
      <CvFooter cv={cv} />
    </div>
  );
}
