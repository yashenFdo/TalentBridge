"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CvData, CvExperience, CvEducation, CvCertification } from "@/types/cv";
import { SAMPLE_CV, BLANK_CV, loadSavedCv, saveCv } from "@/lib/cv-storage";
import { CvTemplateEmerald } from "@/components/cv-builder/CvTemplateEmerald";
import { CvTemplateNavy } from "@/components/cv-builder/CvTemplateNavy";
import { CvTemplateMinimal } from "@/components/cv-builder/CvTemplateMinimal";
import { ShareModal } from "@/components/cv-builder/ShareModal";
import {
  Share2,
  Plus,
  Trash2,
  Sparkles,
  RotateCcw,
  Eye,
  FileEdit,
  ArrowLeft,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Award,
  Globe2,
  UserCheck,
} from "lucide-react";

export default function CvBuilderPage() {
  const [cv, setCv] = useState<CvData>(SAMPLE_CV);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string>("Draft Saved");
  const [newSkill, setNewSkill] = useState("");
  const [newLanguage, setNewLanguage] = useState("");

  // Load from localStorage on mount
  useEffect(() => {
    const saved = loadSavedCv();
    if (saved) setCv(saved);
  }, []);

  // Auto-save on change
  const updateCv = (newCv: CvData) => {
    setCv(newCv);
    saveCv(newCv);
    setSaveStatus("Changes Saved");
    setTimeout(() => setSaveStatus("Draft Saved"), 2000);
  };

  const handlePersonalChange = (field: keyof typeof cv.personal, value: string) => {
    updateCv({
      ...cv,
      personal: {
        ...cv.personal,
        [field]: value,
      },
    });
  };

  const handleAddExperience = () => {
    const newExp: CvExperience = {
      id: "exp-" + Date.now(),
      role: "Senior Executive Role",
      company: "Company Name",
      location: "Colombo, Sri Lanka",
      startDate: "2022",
      endDate: "Present",
      current: true,
      highlights: ["Spearheaded high-impact strategic initiatives driving measurable revenue and efficiency gains."],
    };
    updateCv({
      ...cv,
      experience: [newExp, ...cv.experience],
    });
  };

  const handleUpdateExperience = (id: string, field: keyof CvExperience, value: any) => {
    updateCv({
      ...cv,
      experience: cv.experience.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
    });
  };

  const handleDeleteExperience = (id: string) => {
    updateCv({
      ...cv,
      experience: cv.experience.filter((exp) => exp.id !== id),
    });
  };

  const handleAddEducation = () => {
    const newEdu: CvEducation = {
      id: "edu-" + Date.now(),
      degree: "Postgraduate Degree / Executive Program",
      institution: "Institution / University",
      location: "Sri Lanka",
      year: "2020",
    };
    updateCv({
      ...cv,
      education: [...cv.education, newEdu],
    });
  };

  const handleUpdateEducation = (id: string, field: keyof CvEducation, value: any) => {
    updateCv({
      ...cv,
      education: cv.education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)),
    });
  };

  const handleDeleteEducation = (id: string) => {
    updateCv({
      ...cv,
      education: cv.education.filter((edu) => edu.id !== id),
    });
  };

  const handleAddSkill = () => {
    if (!newSkill.trim()) return;
    if (!cv.skills.includes(newSkill.trim())) {
      updateCv({
        ...cv,
        skills: [...cv.skills, newSkill.trim()],
      });
    }
    setNewSkill("");
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    updateCv({
      ...cv,
      skills: cv.skills.filter((s) => s !== skillToRemove),
    });
  };

  const handleAddLanguage = () => {
    if (!newLanguage.trim()) return;
    if (!cv.languages.includes(newLanguage.trim())) {
      updateCv({
        ...cv,
        languages: [...cv.languages, newLanguage.trim()],
      });
    }
    setNewLanguage("");
  };

  const handleRemoveLanguage = (langToRemove: string) => {
    updateCv({
      ...cv,
      languages: cv.languages.filter((l) => l !== langToRemove),
    });
  };

  const handleLoadSample = () => {
    updateCv(SAMPLE_CV);
  };

  const handleResetBlank = () => {
    if (confirm("Reset CV to blank template? Current edits will be cleared.")) {
      updateCv(BLANK_CV);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFB] text-[#0A1118]">
      {/* Top Navigation & Toolbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 py-3.5 no-print">
        <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Talent Bridge</span>
            </Link>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Executive CV Studio
              </span>
              <span className="hidden md:inline text-[11px] text-slate-400 font-mono">
                ({saveStatus})
              </span>
            </div>
          </div>

          {/* Center: Template Switcher */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl text-xs font-medium">
            <button
              onClick={() => updateCv({ ...cv, template: "emerald" })}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                cv.template === "emerald"
                  ? "bg-white text-[#0D9488] font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Emerald Brand
            </button>
            <button
              onClick={() => updateCv({ ...cv, template: "navy" })}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                cv.template === "navy"
                  ? "bg-white text-[#193A58] font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Oxford Navy
            </button>
            <button
              onClick={() => updateCv({ ...cv, template: "minimal" })}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                cv.template === "minimal"
                  ? "bg-white text-slate-900 font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Minimalist
            </button>
          </div>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handleLoadSample}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              title="Pre-populate with executive sample data"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" />
              <span>Load Sample</span>
            </button>

            <button
              onClick={handleResetBlank}
              className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-500 hover:text-rose-600 hover:border-rose-200 transition-colors"
              title="Reset to blank template"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>

            {/* Mobile View Toggle */}
            <div className="flex lg:hidden bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab("edit")}
                className={`p-1.5 rounded ${activeTab === "edit" ? "bg-white text-[#0D9488] shadow-xs" : "text-slate-500"}`}
                aria-label="Editor View"
              >
                <FileEdit className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveTab("preview")}
                className={`p-1.5 rounded ${activeTab === "preview" ? "bg-white text-[#0D9488] shadow-xs" : "text-slate-500"}`}
                aria-label="Preview View"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>

            {/* Share & Export Primary CTA */}
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-bold rounded-full transition-all shadow-md hover:shadow-lg"
            >
              <Share2 className="w-4 h-4" />
              <span>Share CV Anywhere</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Studio Body */}
      <main className="max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Editor Workspace (7 Cols on desktop) */}
          <div
            className={`lg:col-span-6 xl:col-span-5 space-y-6 ${
              activeTab === "preview" ? "hidden lg:block" : "block"
            } no-print`}
          >
            {/* Header Tips Card */}
            <div className="bg-gradient-to-r from-[#F0FDFA] to-white p-5 rounded-2xl border border-[#99F6E4] shadow-xs flex items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-sm font-bold text-[#0F766E] flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-[#0D9488]" />
                  Executive Profile Calibration
                </h2>
                <p className="text-xs text-slate-600">
                  Fill in your career details. Edits render instantly in the real-time preview and generate a shareable link.
                </p>
              </div>
              <button
                onClick={handleLoadSample}
                className="lg:hidden px-3 py-1.5 bg-[#0D9488] text-white text-xs font-bold rounded-lg flex-shrink-0"
              >
                Sample CV
              </button>
            </div>

            {/* 1. PERSONAL INFORMATION */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                1. Personal & Contact Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-600">Full Legal / Professional Name *</label>
                  <input
                    type="text"
                    value={cv.personal.fullName}
                    onChange={(e) => handlePersonalChange("fullName", e.target.value)}
                    placeholder="e.g. Arun Shantha Perera"
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-600">Executive Title *</label>
                  <input
                    type="text"
                    value={cv.personal.title}
                    onChange={(e) => handlePersonalChange("title", e.target.value)}
                    placeholder="e.g. Chief Technology Officer & VP Engineering"
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-600">Professional Email *</label>
                  <input
                    type="email"
                    value={cv.personal.email}
                    onChange={(e) => handlePersonalChange("email", e.target.value)}
                    placeholder="e.g. arun.perera@executive.com"
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-600">Mobile / WhatsApp *</label>
                  <input
                    type="tel"
                    value={cv.personal.phone}
                    onChange={(e) => handlePersonalChange("phone", e.target.value)}
                    placeholder="e.g. +94 77 123 4567"
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none"
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-medium text-slate-600">Location & Mobility</label>
                  <input
                    type="text"
                    value={cv.personal.location}
                    onChange={(e) => handlePersonalChange("location", e.target.value)}
                    placeholder="e.g. Colombo, Sri Lanka (Open to Regional Relocation)"
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-600">LinkedIn Profile URL</label>
                  <input
                    type="text"
                    value={cv.personal.linkedin}
                    onChange={(e) => handlePersonalChange("linkedin", e.target.value)}
                    placeholder="linkedin.com/in/username"
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-600">Portfolio / Web Link</label>
                  <input
                    type="text"
                    value={cv.personal.website || ""}
                    onChange={(e) => handlePersonalChange("website", e.target.value)}
                    placeholder="https://..."
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* 2. EXECUTIVE SUMMARY */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                  2. Executive Summary / Bio
                </h3>
                <span className="text-[11px] text-slate-400">3-4 Sentences Recommended</span>
              </div>
              <textarea
                rows={4}
                value={cv.summary}
                onChange={(e) => updateCv({ ...cv, summary: e.target.value })}
                placeholder="High-impact leadership summary detailing your primary achievements, domain authority, scale of teams/budgets managed, and core value proposition..."
                className="w-full text-xs p-3 rounded-lg border border-slate-300 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] outline-none leading-relaxed"
              />
            </div>

            {/* 3. CORE COMPETENCIES */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                3. Core Competencies & Skills
              </h3>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddSkill())}
                  placeholder="e.g. Board Governance, Cloud Architecture, P&L..."
                  className="flex-1 text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#0D9488] outline-none"
                />
                <button
                  onClick={handleAddSkill}
                  className="px-4 py-2 bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {cv.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 text-xs bg-[#F0FDFA] text-[#0F766E] border border-[#99F6E4] px-2.5 py-1 rounded-md"
                  >
                    <span>{skill}</span>
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="hover:text-rose-600 transition-colors"
                      aria-label="Remove skill"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* 4. WORK EXPERIENCE */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-[#0D9488]" />
                  4. Professional Experience
                </h3>
                <button
                  onClick={handleAddExperience}
                  className="flex items-center gap-1 text-xs font-bold text-[#0D9488] hover:underline"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Role</span>
                </button>
              </div>

              <div className="space-y-4">
                {cv.experience.map((exp, index) => (
                  <div key={exp.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700">Role #{index + 1}</span>
                      <button
                        onClick={() => handleDeleteExperience(exp.id)}
                        className="text-slate-400 hover:text-rose-600 transition-colors"
                        aria-label="Delete position"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) => handleUpdateExperience(exp.id, "role", e.target.value)}
                        placeholder="Job Title"
                        className="text-xs p-2 rounded border border-slate-300 bg-white"
                      />
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => handleUpdateExperience(exp.id, "company", e.target.value)}
                        placeholder="Company / Enterprise"
                        className="text-xs p-2 rounded border border-slate-300 bg-white"
                      />
                      <input
                        type="text"
                        value={exp.startDate}
                        onChange={(e) => handleUpdateExperience(exp.id, "startDate", e.target.value)}
                        placeholder="Start Year (e.g. 2021)"
                        className="text-xs p-2 rounded border border-slate-300 bg-white"
                      />
                      <input
                        type="text"
                        value={exp.current ? "Present" : exp.endDate}
                        onChange={(e) => handleUpdateExperience(exp.id, "endDate", e.target.value)}
                        placeholder="End Year (or Present)"
                        className="text-xs p-2 rounded border border-slate-300 bg-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-slate-500">
                        Key Achievements (One bullet point per line):
                      </label>
                      <textarea
                        rows={3}
                        value={exp.highlights.join("\n")}
                        onChange={(e) =>
                          handleUpdateExperience(
                            exp.id,
                            "highlights",
                            e.target.value.split("\n").filter((l) => l.trim().length > 0)
                          )
                        }
                        placeholder="• Increased division EBITDA by 28% through supply-chain automation..."
                        className="w-full text-xs p-2.5 rounded border border-slate-300 bg-white outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. EDUCATION */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-[#0D9488]" />
                  5. Education & Credentials
                </h3>
                <button
                  onClick={handleAddEducation}
                  className="flex items-center gap-1 text-xs font-bold text-[#0D9488] hover:underline"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Degree</span>
                </button>
              </div>

              <div className="space-y-3">
                {cv.education.map((edu) => (
                  <div key={edu.id} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => handleUpdateEducation(edu.id, "degree", e.target.value)}
                        placeholder="Degree / Program"
                        className="text-xs p-2 rounded border border-slate-300 bg-white flex-1 mr-2"
                      />
                      <button
                        onClick={() => handleDeleteEducation(edu.id)}
                        className="text-slate-400 hover:text-rose-600 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => handleUpdateEducation(edu.id, "institution", e.target.value)}
                        placeholder="University / Institute"
                        className="text-xs p-2 rounded border border-slate-300 bg-white"
                      />
                      <input
                        type="text"
                        value={edu.year}
                        onChange={(e) => handleUpdateEducation(edu.id, "year", e.target.value)}
                        placeholder="Year (e.g. 2016)"
                        className="text-xs p-2 rounded border border-slate-300 bg-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. LANGUAGES */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3">
                <Globe2 className="w-3.5 h-3.5 text-[#0D9488]" />
                6. Language Proficiencies
              </h3>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={newLanguage}
                  onChange={(e) => setNewLanguage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddLanguage())}
                  placeholder="e.g. English (Fluent), Sinhala (Native)..."
                  className="flex-1 text-xs p-2.5 rounded-lg border border-slate-300 focus:border-[#0D9488] outline-none"
                />
                <button
                  onClick={handleAddLanguage}
                  className="px-4 py-2 bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {cv.languages.map((lang, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200"
                  >
                    <span>{lang}</span>
                    <button
                      onClick={() => handleRemoveLanguage(lang)}
                      className="hover:text-rose-600 transition-colors"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Live Preview Canvas (7 Cols on desktop) */}
          <div
            className={`lg:col-span-6 xl:col-span-7 lg:sticky lg:top-24 ${
              activeTab === "edit" ? "hidden lg:block" : "block"
            }`}
          >
            <div className="bg-slate-200/60 p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-inner">
              <div className="flex items-center justify-between mb-4 no-print">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Live Executive Preview
                  </span>
                  <span className="text-[11px] bg-white text-[#0D9488] font-bold px-2 py-0.5 rounded border border-slate-200">
                    {cv.template.toUpperCase()}
                  </span>
                </div>
                <button
                  onClick={() => setIsShareModalOpen(true)}
                  className="text-xs font-bold text-[#0D9488] hover:underline flex items-center gap-1"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share or Print</span>
                </button>
              </div>

              {/* Render Selected Template */}
              <div className="transition-all duration-300">
                {cv.template === "emerald" && <CvTemplateEmerald cv={cv} />}
                {cv.template === "navy" && <CvTemplateNavy cv={cv} />}
                {cv.template === "minimal" && <CvTemplateMinimal cv={cv} />}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Share & Export Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        cv={cv}
      />
    </div>
  );
}
