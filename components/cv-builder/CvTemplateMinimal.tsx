"use client";

import React from "react";
import { CvData } from "@/types/cv";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

interface Props {
  cv: CvData;
}

export function CvTemplateMinimal({ cv }: Props) {
  const { personal, summary, skills, experience, education, certifications, languages } = cv;

  return (
    <div className="cv-document-container bg-white text-[#111827] p-8 sm:p-12 shadow-sm rounded-lg max-w-[850px] mx-auto border border-gray-200 font-sans print:border-none print:shadow-none print:p-0">
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
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="py-5 border-b border-gray-200">
          <h2 className="text-xs font-black uppercase tracking-wider text-black mb-2">
            Profile Overview
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
            {summary}
          </p>
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
              <div key={exp.id} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold uppercase tracking-wide text-black">{exp.role}</span>
                  <span className="text-xs text-gray-500 font-mono">
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                <div className="text-xs font-medium text-gray-600">
                  {exp.company} {exp.location && `• ${exp.location}`}
                </div>
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="list-disc pl-4 text-xs text-gray-700 space-y-1 pt-1">
                    {exp.highlights.map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <div className="py-5 border-b border-gray-200">
          <h2 className="text-xs font-black uppercase tracking-wider text-black mb-3">
            Core Competencies
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <span key={i} className="text-xs bg-gray-100 text-gray-800 px-2.5 py-1 rounded">
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <div className="py-5 border-b border-gray-200">
          <h2 className="text-xs font-black uppercase tracking-wider text-black mb-3">
            Education
          </h2>
          <div className="space-y-2">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-baseline text-xs">
                <div>
                  <span className="font-bold text-gray-900">{edu.degree}</span>
                  <span className="text-gray-600"> — {edu.institution}</span>
                </div>
                <span className="text-gray-500 font-mono">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Languages & Certifications */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5">
        {certifications && certifications.length > 0 && (
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-black mb-2">Certifications</h2>
            <div className="space-y-1 text-xs text-gray-600">
              {certifications.map(c => (
                <div key={c.id}>• {c.name} ({c.year})</div>
              ))}
            </div>
          </div>
        )}
        {languages && languages.length > 0 && (
          <div>
            <h2 className="text-xs font-black uppercase tracking-wider text-black mb-2">Languages</h2>
            <div className="flex flex-wrap gap-1.5 text-xs text-gray-600">
              {languages.map((l, i) => (
                <span key={i} className="bg-gray-100 px-2 py-0.5 rounded">{l}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
