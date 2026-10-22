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

export function CvTemplateMinimal({ cv }: Props) {
  const { personal, summary, skills, technicalSkills, experience, education, certifications, languages, projects, awards } = cv;

  return (
    <div className="cv-document-container cv-a4-sheet bg-white text-[#111827] p-8 sm:p-12 shadow-md rounded-none max-w-[850px] mx-auto border border-gray-200 font-sans flex flex-col justify-between print:border-none print:shadow-none print:p-0">
      <div>
      {/* Minimal Header */}
      <div className="space-y-2 pb-6 border-b border-gray-300">
        <h1 className="text-3xl font-black tracking-tight text-black uppercase">
          {personal.fullName || "Your Full Name"}
        </h1>
        <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
          {personal.title || "Your Professional Title"}
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs text-gray-500">
          {personal.email && (
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3 text-gray-400" />
              {personal.email}
            </span>
          )}
          {personal.phone && (
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-gray-400" />
              {personal.phone}
            </span>
          )}
          {personal.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-gray-400" />
              {personal.location}
            </span>
          )}
          {personal.linkedin && (
            <span className="flex items-center gap-1">
              <LinkedinIcon className="w-3 h-3 text-gray-400" />
              {personal.linkedin}
            </span>
          )}
          {personal.website && (
            <span className="flex items-center gap-1">
              <Globe className="w-3 h-3 text-gray-400" />
              {personal.website}
            </span>
          )}
          {personal.github && (
            <span className="flex items-center gap-1">
              <GithubIcon className="w-3 h-3 text-gray-400" />
              {personal.github}
            </span>
          )}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="py-5 border-b border-gray-200 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-wider text-black mb-2">
            Profile Overview
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
            {summary}
          </p>
        </div>
      )}

      {/* Skills */}
      {((skills && skills.length > 0) || (technicalSkills && technicalSkills.length > 0)) && (
        <div className="py-5 border-b border-gray-200 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-wider text-black mb-3">
            Core Competencies
          </h2>
          {skills && skills.length > 0 && (
            <p className="text-xs text-gray-800 leading-relaxed">
              <strong className="font-bold">Skills: </strong>
              {skills.join(" • ")}
            </p>
          )}
          {technicalSkills && technicalSkills.length > 0 && (
            <p className="text-xs text-gray-800 leading-relaxed mt-1">
              <strong className="font-bold">Technical: </strong>
              {technicalSkills.join(" • ")}
            </p>
          )}
        </div>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <div className="py-5 border-b border-gray-200">
          <h2 className="text-xs font-black uppercase tracking-wider text-black mb-4">
            Experience
          </h2>
          <div className="space-y-5">
            {experience.map((exp) => (
              <div key={exp.id} className="space-y-1 break-inside-avoid">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-black">{exp.role}</h3>
                  <span className="text-xs text-gray-500 font-medium">
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                <div className="text-xs text-gray-600 font-semibold">
                  {exp.company} {exp.location && `• ${exp.location}`}
                </div>
                {exp.description && (
                  <p className="text-xs text-gray-600 leading-relaxed italic">{exp.description}</p>
                )}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-gray-700 pt-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <div className="py-5 border-b border-gray-200 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-wider text-black mb-3">
            Projects
          </h2>
          <div className="space-y-2">
            {projects.map((proj) => (
              <div key={proj.id} className="text-xs">
                <span className="font-bold text-black">{proj.name}</span>
                {proj.role && <span className="text-gray-500"> ({proj.role})</span>}
                {proj.year && <span className="text-gray-400"> — {proj.year}</span>}
                <p className="text-gray-600">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <div className="py-5 border-b border-gray-200 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-wider text-black mb-3">
            Education
          </h2>
          <div className="space-y-2">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between text-xs">
                <div>
                  <span className="font-bold text-black">{edu.degree}</span>
                  <span className="text-gray-600"> — {edu.institution}</span>
                  {edu.details && <p className="text-gray-500 italic">{edu.details}</p>}
                </div>
                <span className="text-gray-500">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <div className="py-5 border-b border-gray-200 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-wider text-black mb-3">
            Certifications
          </h2>
          <div className="space-y-1 text-xs">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between">
                <div>
                  <span className="font-bold text-black">{cert.name}</span>
                  <span className="text-gray-600"> — {cert.issuer}</span>
                  {cert.credentialId && <span className="text-gray-400 text-[11px] ml-2">ID: {cert.credentialId}</span>}
                </div>
                <span className="text-gray-500">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Awards */}
      {awards && awards.length > 0 && (
        <div className="py-5 border-b border-gray-200 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-wider text-black mb-3">
            Awards
          </h2>
          <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-gray-700">
            {awards.map((award, i) => (
              <li key={i}>{award}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Languages */}
      {languages && languages.length > 0 && (
        <div className="pt-5 break-inside-avoid">
          <h2 className="text-xs font-black uppercase tracking-wider text-black mb-2">
            Languages
          </h2>
          <p className="text-xs text-gray-700">{languages.join(" • ")}</p>
        </div>
      )}
      </div>

      {/* A4 Verified Dossier Footer with Copyright, Devcity Partner & QR Code */}
      <CvFooter cv={cv} />
    </div>
  );
}
