"use client";

import React, { useState, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CvData,
  CvExperience,
  CvEducation,
  CvCertification,
  CvProject,
  CvTemplate,
} from "@/types/cv";
import {
  SAMPLE_CV,
  BLANK_CV,
  loadSavedCv,
  saveCv,
} from "@/lib/cv-storage";
import {
  calculateAtsScore,
  ATS_ACTION_VERBS,
} from "@/lib/cv-ats-utils";
import { CvTemplateAtsClassic } from "@/components/cv-builder/CvTemplateAtsClassic";
import { CvTemplateExecutive } from "@/components/cv-builder/CvTemplateExecutive";
import { CvTemplateEmerald } from "@/components/cv-builder/CvTemplateEmerald";
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
  ArrowRight,
  Camera,
  Upload,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  GraduationCap,
  Award,
  Globe2,
  UserCheck,
  ChevronDown,
  ChevronUp,
  Printer,
  Sliders,
  FolderGit2,
  Zap,
} from "lucide-react";

export default function CvBuilderPage() {
  const [cv, setCv] = useState<CvData>(() => loadSavedCv());
  const [activeMobileTab, setActiveMobileTab] = useState<"edit" | "preview">("edit");
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string>("Draft Saved");
  const [showAtsPanel, setShowAtsPanel] = useState<boolean>(false);
  const [fontFamily, setFontFamily] = useState<"sans" | "serif">("sans");
  const [spacingDensity, setSpacingDensity] = useState<"compact" | "normal" | "comfortable">("normal");

  // Inputs for new items
  const [newSkill, setNewSkill] = useState("");
  const [newTechSkill, setNewTechSkill] = useState("");
  const [newLanguage, setNewLanguage] = useState("");
  const [newAward, setNewAward] = useState("");

  // Section accordions open state
  const [openSections, setOpenSections] = useState({
    personal: true,
    summary: true,
    skills: true,
    experience: true,
    projects: true,
    education: true,
    certifications: true,
    awards: false,
    languages: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Auto-save on change
  const updateCv = (newCv: CvData) => {
    setCv(newCv);
    saveCv(newCv);
    setSaveStatus("Changes Saved");
    setTimeout(() => setSaveStatus("Draft Saved"), 2000);
  };

  // Real-time ATS analysis
  const atsAnalysis = useMemo(() => calculateAtsScore(cv), [cv]);

  // Profile photo upload ref & state
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadError, setUploadError] = useState<string>("");

  // Handle personal info
  const handlePersonalChange = <K extends keyof CvData["personal"]>(
    field: K,
    value: CvData["personal"][K]
  ) => {
    updateCv({
      ...cv,
      personal: {
        ...cv.personal,
        [field]: value,
      },
    });
  };

  // Client-side image upload & optimization (centers, crops to square, downscales to 320px)
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError("");
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setUploadError("Please select an image file (JPG, PNG, or WEBP).");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setUploadError("Image is too large. Please select a photo under 10MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          const targetSize = 320;
          canvas.width = targetSize;
          canvas.height = targetSize;

          const ctx = canvas.getContext("2d");
          if (!ctx) {
            updateCv({
              ...cv,
              personal: {
                ...cv.personal,
                avatarUrl: event.target?.result as string,
                showPhoto: true,
              },
            });
            return;
          }

          // Center-crop to square
          const minDim = Math.min(img.width, img.height);
          const startX = (img.width - minDim) / 2;
          const startY = (img.height - minDim) / 2;

          ctx.drawImage(
            img,
            startX,
            startY,
            minDim,
            minDim,
            0,
            0,
            targetSize,
            targetSize
          );

          // Compress to clean JPEG
          const optimizedDataUrl = canvas.toDataURL("image/jpeg", 0.82);
          updateCv({
            ...cv,
            personal: {
              ...cv.personal,
              avatarUrl: optimizedDataUrl,
              showPhoto: true,
            },
          });
        } catch (err) {
          console.error("Error optimizing photo:", err);
          updateCv({
            ...cv,
            personal: {
              ...cv.personal,
              avatarUrl: event.target?.result as string,
              showPhoto: true,
            },
          });
        }
      };
      img.onerror = () => {
        setUploadError("Failed to process selected image.");
      };
      img.src = event.target?.result as string;
    };
    reader.onerror = () => {
      setUploadError("Failed to read image file.");
    };
    reader.readAsDataURL(file);

    e.target.value = "";
  };

  // Experience handlers
  const handleAddExperience = () => {
    const newExp: CvExperience = {
      id: "exp-" + Date.now(),
      role: "Executive / Senior Role",
      company: "Organization Name",
      location: "Colombo, Sri Lanka",
      startDate: "2022",
      endDate: "Present",
      current: true,
      description: "Directing strategic business outcomes, enterprise roadmap, and operational cross-functional execution.",
      highlights: [
        "Spearheaded enterprise transformation driving 30%+ revenue expansion and cross-border operational scaling.",
        "Architected scalable infrastructure reducing cloud expenditure by 25% across distributed teams.",
      ],
    };
    updateCv({
      ...cv,
      experience: [newExp, ...cv.experience],
    });
  };

  const handleUpdateExperience = <K extends keyof CvExperience>(
    id: string,
    field: K,
    value: CvExperience[K]
  ) => {
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

  const handleAddHighlight = (expId: string) => {
    updateCv({
      ...cv,
      experience: cv.experience.map((exp) =>
        exp.id === expId
          ? {
              ...exp,
              highlights: [
                ...exp.highlights,
                "Delivered key strategic initiative delivering measurable business growth and efficiency.",
              ],
            }
          : exp
      ),
    });
  };

  const handleUpdateHighlight = (expId: string, index: number, value: string) => {
    updateCv({
      ...cv,
      experience: cv.experience.map((exp) =>
        exp.id === expId
          ? {
              ...exp,
              highlights: exp.highlights.map((h, i) => (i === index ? value : h)),
            }
          : exp
      ),
    });
  };

  const handleDeleteHighlight = (expId: string, index: number) => {
    updateCv({
      ...cv,
      experience: cv.experience.map((exp) =>
        exp.id === expId
          ? {
              ...exp,
              highlights: exp.highlights.filter((_, i) => i !== index),
            }
          : exp
      ),
    });
  };

  // Projects handlers
  const handleAddProject = () => {
    const newProj: CvProject = {
      id: "proj-" + Date.now(),
      name: "Strategic Modernization Project",
      role: "Lead Executive",
      year: "2023",
      description: "Led architectural design and deployment of enterprise system resulting in 40% efficiency gains.",
    };
    updateCv({
      ...cv,
      projects: [...(cv.projects || []), newProj],
    });
  };

  const handleUpdateProject = <K extends keyof CvProject>(
    id: string,
    field: K,
    value: CvProject[K]
  ) => {
    updateCv({
      ...cv,
      projects: (cv.projects || []).map((p) => (p.id === id ? { ...p, [field]: value } : p)),
    });
  };

  const handleDeleteProject = (id: string) => {
    updateCv({
      ...cv,
      projects: (cv.projects || []).map((p) => p).filter((p) => p.id !== id),
    });
  };

  // Education handlers
  const handleAddEducation = () => {
    const newEdu: CvEducation = {
      id: "edu-" + Date.now(),
      degree: "Postgraduate Degree / Executive Program",
      institution: "Institution / University",
      location: "Colombo, Sri Lanka",
      year: "2021",
    };
    updateCv({
      ...cv,
      education: [...cv.education, newEdu],
    });
  };

  const handleUpdateEducation = <K extends keyof CvEducation>(
    id: string,
    field: K,
    value: CvEducation[K]
  ) => {
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

  // Certifications handlers
  const handleAddCertification = () => {
    const newCert: CvCertification = {
      id: "cert-" + Date.now(),
      name: "Professional Credential / License",
      issuer: "Accredited Body",
      year: "2023",
      credentialId: "CRED-" + Math.floor(100000 + Math.random() * 900000),
    };
    updateCv({
      ...cv,
      certifications: [...cv.certifications, newCert],
    });
  };

  const handleUpdateCertification = <K extends keyof CvCertification>(
    id: string,
    field: K,
    value: CvCertification[K]
  ) => {
    updateCv({
      ...cv,
      certifications: cv.certifications.map((cert) => (cert.id === id ? { ...cert, [field]: value } : cert)),
    });
  };

  const handleDeleteCertification = (id: string) => {
    updateCv({
      ...cv,
      certifications: cv.certifications.filter((cert) => cert.id !== id),
    });
  };

  // Skills handlers
  const handleAddSkill = () => {
    if (!newSkill.trim()) return;
    if (cv.skills.includes(newSkill.trim())) return;
    updateCv({ ...cv, skills: [...cv.skills, newSkill.trim()] });
    setNewSkill("");
  };

  const handleDeleteSkill = (skill: string) => {
    updateCv({ ...cv, skills: cv.skills.filter((s) => s !== skill) });
  };

  const handleAddTechSkill = () => {
    if (!newTechSkill.trim()) return;
    const current = cv.technicalSkills || [];
    if (current.includes(newTechSkill.trim())) return;
    updateCv({ ...cv, technicalSkills: [...current, newTechSkill.trim()] });
    setNewTechSkill("");
  };

  const handleDeleteTechSkill = (skill: string) => {
    updateCv({ ...cv, technicalSkills: (cv.technicalSkills || []).filter((s) => s !== skill) });
  };

  // Languages handlers
  const handleAddLanguage = () => {
    if (!newLanguage.trim()) return;
    if (cv.languages.includes(newLanguage.trim())) return;
    updateCv({ ...cv, languages: [...cv.languages, newLanguage.trim()] });
    setNewLanguage("");
  };

  const handleDeleteLanguage = (lang: string) => {
    updateCv({ ...cv, languages: cv.languages.filter((l) => l !== lang) });
  };

  // Awards handlers
  const handleAddAward = () => {
    if (!newAward.trim()) return;
    const current = cv.awards || [];
    updateCv({ ...cv, awards: [...current, newAward.trim()] });
    setNewAward("");
  };

  const handleDeleteAward = (award: string) => {
    updateCv({ ...cv, awards: (cv.awards || []).filter((a) => a !== award) });
  };

  // Quick reset to sample or blank
  const handleResetSample = () => {
    if (confirm("Reset CV content to executive sample data? Your changes will be replaced.")) {
      updateCv(SAMPLE_CV);
    }
  };

  const handleResetBlank = () => {
    if (confirm("Clear all data and start with a blank ATS resume?")) {
      updateCv(BLANK_CV);
    }
  };

  // Action verb quick insert helper
  const handleInsertVerbIntoSummary = (verb: string) => {
    const updated = cv.summary ? `${cv.summary} ${verb}` : `${verb}`;
    updateCv({ ...cv, summary: updated });
  };

  return (
    <div className="cv-builder-root min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans print:!block print:!min-h-0 print:!h-auto print:!p-0 print:!m-0 print:!bg-white">
      {/* 1. TOP STUDIO NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 px-4 sm:px-6 py-3 no-print shadow-xs">
        <div className="max-w-[1700px] mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Brand & Mode */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors pr-2 border-r border-slate-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>

            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo-transparent.png"
                alt="Talent Bridge"
                width={135}
                height={34}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#065F46] text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
              <span>ATS CV Studio</span>
            </div>

            <span className="text-[11px] text-slate-400 hidden xl:inline">
              • {saveStatus}
            </span>
          </div>

          {/* Center: ATS Score Gauge Pill */}
          <button
            onClick={() => setShowAtsPanel(!showAtsPanel)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:border-emerald-500 transition-all group shadow-xs"
            title="Click to view ATS score breakdown and optimization tips"
          >
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white"
              style={{ backgroundColor: atsAnalysis.color }}
            >
              {atsAnalysis.score}
            </div>
            <span className="text-xs font-bold text-slate-800">
              ATS Score: <span style={{ color: atsAnalysis.color }}>{atsAnalysis.rating}</span>
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-transform ${
                showAtsPanel ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Right: Actions & Sharing */}
          <div className="flex items-center gap-2">
            {/* Mobile Tab Switcher */}
            <div className="flex lg:hidden bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveMobileTab("edit")}
                className={`flex items-center gap-1 px-3 py-1 rounded text-xs font-bold transition-all ${
                  activeMobileTab === "edit"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <FileEdit className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => setActiveMobileTab("preview")}
                className={`flex items-center gap-1 px-3 py-1 rounded text-xs font-bold transition-all ${
                  activeMobileTab === "preview"
                    ? "bg-white text-[#059669] shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview</span>
              </button>
            </div>

            {/* Reset buttons */}
            <button
              onClick={handleResetSample}
              className="hidden md:inline-flex items-center gap-1 px-2.5 py-1.5 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              title="Load sample executive profile"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              <span>Sample</span>
            </button>

            <button
              onClick={handleResetBlank}
              className="hidden md:inline-flex items-center gap-1 px-2.5 py-1.5 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              title="Start with empty form"
            >
              <Plus className="w-3.5 h-3.5 text-slate-400" />
              <span>Blank</span>
            </button>

            {/* Direct Print Button */}
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-slate-600" />
              <span>Print / PDF</span>
            </button>

            {/* Primary Share / Export Modal Trigger */}
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#059669] hover:bg-[#047857] text-white text-xs font-extrabold rounded-lg transition-colors shadow-xs"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share & Export</span>
            </button>
          </div>
        </div>

        {/* 2. ATS DROPDOWN OPTIMIZATION DRAWER */}
        {showAtsPanel && (
          <div className="mt-3 p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-[1700px] mx-auto animate-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              {/* Score breakdown */}
              <div className="md:w-1/3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    ATS Readiness Diagnostic
                  </span>
                  <span
                    className="text-sm font-black px-2 py-0.5 rounded text-white"
                    style={{ backgroundColor: atsAnalysis.color }}
                  >
                    {atsAnalysis.score} / 100
                  </span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-500 rounded-full"
                    style={{
                      width: `${atsAnalysis.score}%`,
                      backgroundColor: atsAnalysis.color,
                    }}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
                  <div className="p-2 bg-white rounded border border-slate-200">
                    <div className="text-[10px] text-slate-500 font-bold">Metrics Found</div>
                    <div className="text-sm font-extrabold text-slate-900">{atsAnalysis.quantifiedCount}</div>
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200">
                    <div className="text-[10px] text-slate-500 font-bold">Action Verbs</div>
                    <div className="text-sm font-extrabold text-slate-900">{atsAnalysis.actionVerbCount}</div>
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200">
                    <div className="text-[10px] text-slate-500 font-bold">Word Count</div>
                    <div className="text-sm font-extrabold text-slate-900">{atsAnalysis.wordCount}</div>
                  </div>
                </div>
              </div>

              {/* Checklist items */}
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {atsAnalysis.checklist.map((item) => (
                  <div
                    key={item.id}
                    className={`p-2.5 rounded-lg border flex items-start gap-2.5 ${
                      item.passed
                        ? "bg-emerald-50/50 border-emerald-200 text-emerald-950"
                        : "bg-amber-50/50 border-amber-200 text-amber-950"
                    }`}
                  >
                    {item.passed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                        {item.tip}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Verbs Bar */}
            <div className="mt-3 pt-3 border-t border-slate-200 flex flex-wrap items-center gap-1.5 text-xs">
              <span className="font-bold text-slate-700 mr-1 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                Power Verbs:
              </span>
              {ATS_ACTION_VERBS.slice(0, 10).map((verb) => (
                <button
                  key={verb}
                  onClick={() => handleInsertVerbIntoSummary(verb)}
                  className="px-2 py-0.5 rounded bg-white hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200 text-[11px] font-semibold text-slate-700 transition-colors"
                  title={`Click to append "${verb}" to summary`}
                >
                  +{verb}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* 3. MAIN WORKSPACE: SPLIT PANE (EDITOR ON LEFT, LIVE PREVIEW ON RIGHT) */}
      <div className="cv-builder-workspace flex-1 max-w-[1700px] w-full mx-auto p-4 sm:p-6 lg:p-8 flex gap-8 print:!block print:!w-full print:!p-0 print:!m-0">
        {/* LEFT PANE: FORM EDITOR (Hidden in Print/PDF) */}
        <div
          className={`cv-builder-form-pane w-full lg:w-[48%] xl:w-[44%] space-y-5 no-print print:!hidden ${
            activeMobileTab === "preview" ? "hidden lg:block" : "block"
          }`}
        >
          {/* Customization Control Card */}
          <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#059669]" />
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                  CV Style & Layout Customizer
                </h2>
              </div>
              <span className="text-[11px] text-[#059669] font-bold">100% ATS Safe</span>
            </div>

            {/* Template Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Choose Design Template</label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: "ats-classic", label: "ATS Classic", tag: "Strict ATS" },
                  { id: "executive", label: "Executive", tag: "C-Suite" },
                  { id: "emerald", label: "Emerald Modern", tag: "Leadership" },
                ].map((tpl) => (
                  <button
                    key={tpl.id}
                    onClick={() => updateCv({ ...cv, template: tpl.id as CvTemplate })}
                    className={`p-2.5 rounded-lg border text-left transition-all relative ${
                      cv.template === tpl.id
                        ? "border-[#059669] bg-emerald-50/40 ring-2 ring-[#059669]/20"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div className="text-[10px] uppercase font-bold text-[#059669]">{tpl.tag}</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">{tpl.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Typography & Density Row */}
            <div className="grid grid-cols-2 gap-4 pt-1">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Font Family</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFontFamily("sans")}
                    className={`flex-1 py-1.5 px-2 rounded-lg border text-xs font-semibold ${
                      fontFamily === "sans"
                        ? "border-[#059669] bg-emerald-50 text-[#059669]"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    Modern Sans
                  </button>
                  <button
                    onClick={() => setFontFamily("serif")}
                    className={`flex-1 py-1.5 px-2 rounded-lg border text-xs font-semibold font-serif ${
                      fontFamily === "serif"
                        ? "border-[#059669] bg-emerald-50 text-[#059669]"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    Classic Serif
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Layout Spacing</label>
                <div className="flex gap-1.5">
                  {(["compact", "normal", "comfortable"] as const).map((density) => (
                    <button
                      key={density}
                      onClick={() => setSpacingDensity(density)}
                      className={`flex-1 py-1.5 px-1 rounded-lg border text-[11px] font-semibold capitalize ${
                        spacingDensity === density
                          ? "border-[#059669] bg-emerald-50 text-[#059669]"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {density}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 1: PERSONAL INFORMATION */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <button
              onClick={() => toggleSection("personal")}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Personal & Executive Contact
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Full name, executive title, contact details & professional links
                  </p>
                </div>
              </div>
              {openSections.personal ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {openSections.personal && (
              <div className="p-5 pt-0 border-t border-slate-100 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      value={cv.personal.fullName}
                      onChange={(e) => handlePersonalChange("fullName", e.target.value)}
                      placeholder="e.g. Arun Shantha Perera"
                      className="w-full px-3 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-[#059669] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Target Executive Title *</label>
                    <input
                      type="text"
                      value={cv.personal.title}
                      onChange={(e) => handlePersonalChange("title", e.target.value)}
                      placeholder="e.g. Chief Technology Officer"
                      className="w-full px-3 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-[#059669] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      value={cv.personal.email}
                      onChange={(e) => handlePersonalChange("email", e.target.value)}
                      placeholder="name@executive-network.com"
                      className="w-full px-3 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-[#059669] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Phone Number *</label>
                    <input
                      type="tel"
                      value={cv.personal.phone}
                      onChange={(e) => handlePersonalChange("phone", e.target.value)}
                      placeholder="+94 77 123 4567"
                      className="w-full px-3 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-[#059669] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Location *</label>
                    <input
                      type="text"
                      value={cv.personal.location}
                      onChange={(e) => handlePersonalChange("location", e.target.value)}
                      placeholder="Colombo, Sri Lanka"
                      className="w-full px-3 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-[#059669] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">LinkedIn Profile</label>
                    <input
                      type="text"
                      value={cv.personal.linkedin}
                      onChange={(e) => handlePersonalChange("linkedin", e.target.value)}
                      placeholder="linkedin.com/in/arun-perera"
                      className="w-full px-3 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-[#059669] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Portfolio / Website</label>
                    <input
                      type="text"
                      value={cv.personal.website || ""}
                      onChange={(e) => handlePersonalChange("website", e.target.value)}
                      placeholder="arunperera.dev"
                      className="w-full px-3 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-[#059669] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">GitHub (Optional)</label>
                    <input
                      type="text"
                      value={cv.personal.github || ""}
                      onChange={(e) => handlePersonalChange("github", e.target.value)}
                      placeholder="github.com/arunperera"
                      className="w-full px-3 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-[#059669] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Profile Photo Toggle Switch & Image Upload */}
                <div className="pt-2 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100/70 text-[#059669] flex items-center justify-center shrink-0">
                        <Camera className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">Profile Photo</div>
                        <div className="text-[10px] text-slate-500">
                          Toggle on to display headshot, toggle off for strict text-only ATS
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={Boolean(cv.personal.showPhoto)}
                      onClick={() => handlePersonalChange("showPhoto", !cv.personal.showPhoto)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                        cv.personal.showPhoto ? "bg-[#059669]" : "bg-slate-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          cv.personal.showPhoto ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  {cv.personal.showPhoto && (
                    <div className="p-4 bg-emerald-50/40 rounded-xl border border-emerald-200/80 space-y-3 animate-in fade-in duration-200">
                      {/* Hidden file input */}
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/png, image/jpeg, image/jpg, image/webp"
                        className="hidden"
                        onChange={handleImageUpload}
                      />

                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        {/* Live Avatar Preview with click-to-upload overlay */}
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border-2 border-emerald-500 shrink-0 bg-white shadow-xs cursor-pointer group"
                          title="Click to upload or replace photo"
                        >
                          {cv.personal.avatarUrl ? (
                            <Image
                              src={cv.personal.avatarUrl}
                              alt="Candidate Profile"
                              fill
                              className="object-cover"
                              sizes="72px"
                              unoptimized
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-100">
                              <Camera className="w-6 h-6 text-slate-400" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/45 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Upload className="w-4 h-4 mb-0.5" />
                            <span className="text-[9px] font-bold">Change</span>
                          </div>
                        </div>

                        {/* Action Buttons & Status */}
                        <div className="flex-1 text-center sm:text-left space-y-2">
                          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                            <button
                              type="button"
                              onClick={() => fileInputRef.current?.click()}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold rounded-lg transition-all shadow-xs cursor-pointer"
                            >
                              <Upload className="w-3.5 h-3.5" />
                              <span>{cv.personal.avatarUrl ? "Upload New Photo" : "Upload Photo"}</span>
                            </button>

                            {cv.personal.avatarUrl && (
                              <button
                                type="button"
                                onClick={() => handlePersonalChange("avatarUrl", "")}
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-white hover:bg-red-50 text-slate-600 hover:text-red-600 text-xs font-semibold rounded-lg border border-slate-200 hover:border-red-200 transition-colors cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                <span>Remove</span>
                              </button>
                            )}

                            <button
                              type="button"
                              onClick={() =>
                                handlePersonalChange(
                                  "avatarUrl",
                                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
                                )
                              }
                              className="px-2.5 py-1.5 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg border border-slate-200 transition-colors whitespace-nowrap cursor-pointer"
                            >
                              Sample Photo
                            </button>
                          </div>

                          <p className="text-[11px] text-slate-500">
                            Upload JPG, PNG, or WEBP from your computer. Automatically cropped square &amp; optimized.
                          </p>

                          {uploadError && (
                            <p className="text-xs text-red-600 font-semibold">{uploadError}</p>
                          )}
                        </div>
                      </div>

                      {/* Optional URL input toggle */}
                      <details className="text-xs text-slate-600 pt-1 group">
                        <summary className="cursor-pointer text-[11px] font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 select-none">
                          <span>Or enter photo image URL directly</span>
                        </summary>
                        <div className="pt-2">
                          <input
                            type="url"
                            value={cv.personal.avatarUrl?.startsWith("data:") ? "" : cv.personal.avatarUrl || ""}
                            onChange={(e) => handlePersonalChange("avatarUrl", e.target.value)}
                            placeholder="https://... (direct image web link)"
                            className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                          />
                        </div>
                      </details>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* SECTION 2: EXECUTIVE SUMMARY */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <button
              onClick={() => toggleSection("summary")}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FileEdit className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Executive Summary & Value Proposition
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Highlight years of experience, core leadership strengths, and strategic accomplishments
                  </p>
                </div>
              </div>
              {openSections.summary ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {openSections.summary && (
              <div className="p-5 pt-0 border-t border-slate-100 space-y-3">
                <div className="pt-3">
                  <textarea
                    rows={5}
                    value={cv.summary}
                    onChange={(e) => updateCv({ ...cv, summary: e.target.value })}
                    placeholder="Enter a compelling 40-90 word executive overview..."
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-[#059669] focus:outline-none leading-relaxed"
                  />
                  <div className="flex justify-between items-center text-[11px] text-slate-500 mt-1">
                    <span>
                      Words: {cv.summary ? cv.summary.trim().split(/\s+/).length : 0} (Recommended: 40-100 words)
                    </span>
                    <span className="text-[#059669] font-medium">High ATS keyword weight</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* SECTION 3: CORE COMPETENCIES & SKILLS */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <button
              onClick={() => toggleSection("skills")}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Core Competencies & Keywords ({cv.skills.length + (cv.technicalSkills?.length || 0)})
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Crucial for passing ATS automated keyword scans and filters
                  </p>
                </div>
              </div>
              {openSections.skills ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {openSections.skills && (
              <div className="p-5 pt-0 border-t border-slate-100 space-y-4">
                {/* Executive / Core Skills */}
                <div className="space-y-2 pt-3">
                  <label className="text-xs font-bold text-slate-700">
                    Executive & Strategic Competencies
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
                      placeholder="e.g. Enterprise Cloud Architecture, P&L Management"
                      className="flex-1 px-3 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-[#059669] focus:outline-none"
                    />
                    <button
                      onClick={handleAddSkill}
                      className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
                    >
                      Add
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cv.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200"
                      >
                        <span>{skill}</span>
                        <button
                          onClick={() => handleDeleteSkill(skill)}
                          className="hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Stack Skills */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <label className="text-xs font-bold text-slate-700">
                    Technical Stack & Systems (Optional)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newTechSkill}
                      onChange={(e) => setNewTechSkill(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleAddTechSkill()}
                      placeholder="e.g. Python, Kubernetes, AWS, PostgreSQL"
                      className="flex-1 px-3 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-[#059669] focus:outline-none"
                    />
                    <button
                      onClick={handleAddTechSkill}
                      className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
                    >
                      Add
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(cv.technicalSkills || []).map((skill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-900 border border-emerald-200"
                      >
                        <span>{skill}</span>
                        <button
                          onClick={() => handleDeleteTechSkill(skill)}
                          className="hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* SECTION 4: PROFESSIONAL EXPERIENCE */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <button
              onClick={() => toggleSection("experience")}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Professional Experience ({cv.experience.length})
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Chronological work history with measurable quantified highlights
                  </p>
                </div>
              </div>
              {openSections.experience ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {openSections.experience && (
              <div className="p-5 pt-0 border-t border-slate-100 space-y-6">
                <div className="pt-3 flex justify-between items-center">
                  <span className="text-xs text-slate-500">
                    {cv.experience.length} career positions
                  </span>
                  <button
                    onClick={handleAddExperience}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Role</span>
                  </button>
                </div>

                <div className="space-y-6">
                  {cv.experience.map((exp) => (
                    <div
                      key={exp.id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50/40 space-y-3 relative group"
                    >
                      <button
                        onClick={() => handleDeleteExperience(exp.id)}
                        className="absolute top-3 right-3 text-slate-400 hover:text-red-600 transition-colors p-1"
                        title="Delete Role"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pr-8">
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-700">Role / Position Title</label>
                          <input
                            type="text"
                            value={exp.role}
                            onChange={(e) => handleUpdateExperience(exp.id, "role", e.target.value)}
                            className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-700">Company / Employer</label>
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) => handleUpdateExperience(exp.id, "company", e.target.value)}
                            className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-700">Location</label>
                          <input
                            type="text"
                            value={exp.location}
                            onChange={(e) => handleUpdateExperience(exp.id, "location", e.target.value)}
                            placeholder="Colombo, Sri Lanka"
                            className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-700">Start Date</label>
                          <input
                            type="text"
                            value={exp.startDate}
                            onChange={(e) => handleUpdateExperience(exp.id, "startDate", e.target.value)}
                            placeholder="Jan 2021"
                            className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-700">End Date</label>
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              disabled={exp.current}
                              value={exp.current ? "Present" : exp.endDate}
                              onChange={(e) => handleUpdateExperience(exp.id, "endDate", e.target.value)}
                              placeholder="Present"
                              className={`w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none ${
                                exp.current ? "text-slate-400 bg-slate-100" : ""
                              }`}
                            />
                            <label className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 whitespace-nowrap cursor-pointer">
                              <input
                                type="checkbox"
                                checked={exp.current}
                                onChange={(e) =>
                                  handleUpdateExperience(exp.id, "current", e.target.checked)
                                }
                                className="rounded text-[#059669] focus:ring-[#059669]"
                              />
                              <span>Current</span>
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Summary scope line */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-slate-700">
                          Role Scope / Brief Description
                        </label>
                        <input
                          type="text"
                          value={exp.description || ""}
                          onChange={(e) => handleUpdateExperience(exp.id, "description", e.target.value)}
                          placeholder="e.g. Leading technology vision and engineering execution for 190+ engineers."
                          className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                        />
                      </div>

                      {/* Achievement Bullets */}
                      <div className="space-y-2 pt-1">
                        <div className="flex justify-between items-center">
                          <label className="text-[11px] font-bold text-slate-700">
                            Quantified Achievements & Highlights ({exp.highlights.length})
                          </label>
                          <button
                            onClick={() => handleAddHighlight(exp.id)}
                            className="text-[11px] font-bold text-[#059669] hover:underline"
                          >
                            + Add Bullet
                          </button>
                        </div>

                        <div className="space-y-2">
                          {exp.highlights.map((bullet, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2">
                              <span className="text-slate-400 text-xs mt-1.5 font-bold">•</span>
                              <textarea
                                rows={2}
                                value={bullet}
                                onChange={(e) => handleUpdateHighlight(exp.id, bIdx, e.target.value)}
                                className="flex-1 px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none leading-relaxed"
                              />
                              <button
                                onClick={() => handleDeleteHighlight(exp.id, bIdx)}
                                className="text-slate-300 hover:text-red-500 p-1 mt-1"
                                title="Delete bullet"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SECTION 5: KEY PROJECTS & TRANSFORMATIONS */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <button
              onClick={() => toggleSection("projects")}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <FolderGit2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Key Projects & Case Studies ({(cv.projects || []).length})
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Strategic transformation initiatives and high-profile implementations
                  </p>
                </div>
              </div>
              {openSections.projects ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {openSections.projects && (
              <div className="p-5 pt-0 border-t border-slate-100 space-y-4">
                <div className="pt-3 flex justify-end">
                  <button
                    onClick={handleAddProject}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Project</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {(cv.projects || []).map((proj) => (
                    <div
                      key={proj.id}
                      className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2 relative"
                    >
                      <button
                        onClick={() => handleDeleteProject(proj.id)}
                        className="absolute top-2.5 right-2.5 text-slate-400 hover:text-red-600 p-1"
                        title="Delete Project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pr-6">
                        <div className="space-y-1 sm:col-span-2">
                          <label className="text-[11px] font-bold text-slate-700">Project Name</label>
                          <input
                            type="text"
                            value={proj.name}
                            onChange={(e) => handleUpdateProject(proj.id, "name", e.target.value)}
                            className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-700">Year</label>
                          <input
                            type="text"
                            value={proj.year}
                            onChange={(e) => handleUpdateProject(proj.id, "year", e.target.value)}
                            placeholder="2022"
                            className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-slate-700">Description & Impact</label>
                        <textarea
                          rows={2}
                          value={proj.description}
                          onChange={(e) => handleUpdateProject(proj.id, "description", e.target.value)}
                          className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SECTION 6: EDUCATION */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <button
              onClick={() => toggleSection("education")}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Education & Degrees ({cv.education.length})
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Postgraduate, executive MBA, and bachelor qualifications
                  </p>
                </div>
              </div>
              {openSections.education ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {openSections.education && (
              <div className="p-5 pt-0 border-t border-slate-100 space-y-4">
                <div className="pt-3 flex justify-end">
                  <button
                    onClick={handleAddEducation}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Degree</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cv.education.map((edu) => (
                    <div
                      key={edu.id}
                      className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2 relative"
                    >
                      <button
                        onClick={() => handleDeleteEducation(edu.id)}
                        className="absolute top-2.5 right-2.5 text-slate-400 hover:text-red-600 p-1"
                        title="Delete Education"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pr-6">
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-700">Degree / Qualification</label>
                          <input
                            type="text"
                            value={edu.degree}
                            onChange={(e) => handleUpdateEducation(edu.id, "degree", e.target.value)}
                            className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-700">Institution / University</label>
                          <input
                            type="text"
                            value={edu.institution}
                            onChange={(e) => handleUpdateEducation(edu.id, "institution", e.target.value)}
                            className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-700">Location</label>
                          <input
                            type="text"
                            value={edu.location}
                            onChange={(e) => handleUpdateEducation(edu.id, "location", e.target.value)}
                            className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-700">Year</label>
                          <input
                            type="text"
                            value={edu.year}
                            onChange={(e) => handleUpdateEducation(edu.id, "year", e.target.value)}
                            className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SECTION 7: CERTIFICATIONS & CREDENTIALS */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <button
              onClick={() => toggleSection("certifications")}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Certifications & Licenses ({cv.certifications.length})
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Professional credentials, board licenses, and vendor certifications
                  </p>
                </div>
              </div>
              {openSections.certifications ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {openSections.certifications && (
              <div className="p-5 pt-0 border-t border-slate-100 space-y-4">
                <div className="pt-3 flex justify-end">
                  <button
                    onClick={handleAddCertification}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Certification</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cv.certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-3 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2 relative"
                    >
                      <button
                        onClick={() => handleDeleteCertification(cert.id)}
                        className="absolute top-2.5 right-2.5 text-slate-400 hover:text-red-600 p-1"
                        title="Delete Certification"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pr-6">
                        <div className="space-y-1 sm:col-span-2">
                          <label className="text-[11px] font-bold text-slate-700">Certification Name</label>
                          <input
                            type="text"
                            value={cert.name}
                            onChange={(e) => handleUpdateCertification(cert.id, "name", e.target.value)}
                            className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-700">Year</label>
                          <input
                            type="text"
                            value={cert.year}
                            onChange={(e) => handleUpdateCertification(cert.id, "year", e.target.value)}
                            className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-700">Issuer / Authority</label>
                          <input
                            type="text"
                            value={cert.issuer}
                            onChange={(e) => handleUpdateCertification(cert.id, "issuer", e.target.value)}
                            className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[11px] font-bold text-slate-700">Credential ID (Optional)</label>
                          <input
                            type="text"
                            value={cert.credentialId || ""}
                            onChange={(e) => handleUpdateCertification(cert.id, "credentialId", e.target.value)}
                            placeholder="e.g. AWS-SAP-2023"
                            className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:border-[#059669] focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SECTION 8: LANGUAGES & AWARDS */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <button
              onClick={() => toggleSection("languages")}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Languages & Honors ({cv.languages.length + (cv.awards?.length || 0)})
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Language fluencies and recognized industry awards
                  </p>
                </div>
              </div>
              {openSections.languages ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
            </button>

            {openSections.languages && (
              <div className="p-5 pt-0 border-t border-slate-100 space-y-4">
                {/* Languages input */}
                <div className="space-y-2 pt-3">
                  <label className="text-xs font-bold text-slate-700">Languages & Fluency</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newLanguage}
                      onChange={(e) => setNewLanguage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleAddLanguage()}
                      placeholder="e.g. English (Fluent), Sinhala (Native)"
                      className="flex-1 px-3 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-[#059669] focus:outline-none"
                    />
                    <button
                      onClick={handleAddLanguage}
                      className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
                    >
                      Add
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cv.languages.map((lang, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200"
                      >
                        <span>{lang}</span>
                        <button
                          onClick={() => handleDeleteLanguage(lang)}
                          className="hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Awards input */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <label className="text-xs font-bold text-slate-700">Industry Awards & Honors</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newAward}
                      onChange={(e) => setNewAward(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleAddAward()}
                      placeholder="e.g. Asia Pacific CIO Award – Digital Transformation (2023)"
                      className="flex-1 px-3 py-2 text-xs bg-slate-50/70 border border-slate-200 rounded-lg focus:bg-white focus:border-[#059669] focus:outline-none"
                    />
                    <button
                      onClick={handleAddAward}
                      className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
                    >
                      Add
                    </button>
                  </div>

                  <div className="space-y-1 pt-1">
                    {(cv.awards || []).map((award, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-800"
                      >
                        <span>• {award}</span>
                        <button
                          onClick={() => handleDeleteAward(award)}
                          className="text-slate-400 hover:text-red-600"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* GENERATE CV BUTTON AT BOTTOM OF FORM */}
          <div className="pt-2 pb-6 space-y-2">
            <button
              onClick={() => {
                saveCv(cv);
                setSaveStatus("CV Generated & Saved");
                setIsShareModalOpen(true);
              }}
              className="w-full py-4 px-6 bg-gradient-to-r from-[#059669] via-[#047857] to-[#065F46] hover:from-[#047857] hover:to-[#064E3B] text-white text-sm sm:text-base font-extrabold rounded-xl shadow-lg hover:shadow-xl hover:shadow-emerald-900/30 transition-all flex items-center justify-center gap-2.5 group active:scale-[0.99] cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
              <span>Generate CV &amp; View Share Options</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <p className="text-center text-[11px] text-slate-500">
              Generates your verified A4 executive dossier with shareable link, WhatsApp/LinkedIn sharing, and PDF print options.
            </p>
          </div>
        </div>

        {/* RIGHT PANE: LIVE STICKY DOCUMENT PREVIEW (Takes 100% width in print/PDF) */}
        <div
          className={`cv-builder-preview-pane w-full lg:w-[52%] xl:w-[56%] sticky top-24 self-start print:!block print:!visible print:!w-full print:!static print:!p-0 print:!m-0 ${
            activeMobileTab === "edit" ? "hidden lg:block print:!block" : "block"
          }`}
        >
          {/* Preview Controls Bar (Hidden in Print/PDF) */}
          <div className="no-print bg-white rounded-t-xl border border-b-0 border-slate-200 px-4 py-2.5 flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-slate-800">Live ATS Document Canvas</span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-[10px] font-bold text-[#065F46] border border-emerald-200">
                A4 (210 × 297mm)
              </span>
              <span className="text-[11px] text-slate-400 hidden xl:inline">
                • Multi-page pagination enabled
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 text-slate-700 hover:bg-slate-100 rounded text-xs font-medium"
              >
                <Printer className="w-3.5 h-3.5 text-[#059669]" />
                <span>Print</span>
              </button>
              <button
                onClick={() => setIsShareModalOpen(true)}
                className="inline-flex items-center gap-1 px-3 py-1 bg-slate-900 hover:bg-slate-800 text-white rounded text-xs font-bold"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Paper Canvas Container */}
          <div className="cv-preview-scroll-container bg-slate-200/70 p-3 sm:p-6 rounded-b-xl border border-slate-200 max-h-[calc(100vh-140px)] overflow-y-auto shadow-inner print:!bg-transparent print:!p-0 print:!border-none print:!shadow-none print:!max-h-none print:!overflow-visible print:!h-auto print:!block print:!static">
            <div className="transform origin-top transition-all duration-200 shadow-md cv-preview-paper-wrapper print:!transform-none print:!shadow-none print:!block print:!w-full">
              {cv.template === "ats-classic" && (
                <CvTemplateAtsClassic
                  cv={cv}
                  fontFamily={fontFamily}
                  spacingDensity={spacingDensity}
                />
              )}
              {cv.template === "executive" && (
                <CvTemplateExecutive
                  cv={cv}
                  fontFamily={fontFamily}
                  spacingDensity={spacingDensity}
                />
              )}
              {cv.template === "emerald" && <CvTemplateEmerald cv={cv} />}
              {!["ats-classic", "executive", "emerald"].includes(cv.template) && (
                <CvTemplateAtsClassic
                  cv={cv}
                  fontFamily={fontFamily}
                  spacingDensity={spacingDensity}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 4. SHARE & EXPORT MODAL */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        cv={cv}
      />
    </div>
  );
}
