"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CvData } from "@/types/cv";
import { decodeCvFromUrl, loadSavedCv } from "@/lib/cv-storage";
import { CvTemplateEmerald } from "@/components/cv-builder/CvTemplateEmerald";
import { CvTemplateAtsClassic } from "@/components/cv-builder/CvTemplateAtsClassic";
import { CvTemplateExecutive } from "@/components/cv-builder/CvTemplateExecutive";
import { ShareModal } from "@/components/cv-builder/ShareModal";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import {
  Printer,
  Share2,
  Mail,
  ShieldCheck,
  FileText,
  Sparkles,
} from "lucide-react";

function CvViewerContent() {
  const searchParams = useSearchParams();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const cv = useMemo<CvData>(() => {
    const dParam = searchParams.get("d");
    if (dParam) {
      const decoded = decodeCvFromUrl(dParam);
      if (decoded) return decoded;
    }
    return loadSavedCv();
  }, [searchParams]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Top Banner (Hidden in print) */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 py-3 no-print">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo-transparent.png"
                alt="Talent Bridge"
                width={150}
                height={40}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#059669] font-bold bg-[#ECFDF5] border border-[#A7F3D0] px-2.5 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Executive Dossier</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
              <span>Tech Partner:</span>
              <a
                href="https://devcity.us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-blue-600 hover:underline"
              >
                <Image
                  src="/devcity-icon.png"
                  alt="Devcity"
                  width={14}
                  height={14}
                  className="h-3.5 w-3.5 rounded object-contain"
                />
                <span>Devcity.us</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {cv.personal.email && (
              <a
                href={`mailto:${cv.personal.email}?subject=Executive Opportunity via Talent Bridge`}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#059669]" />
                <span>Contact Candidate</span>
              </a>
            )}

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={() => setIsShareModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share & Export</span>
            </button>

            <Link
              href="/cv-builder"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Build Your Own CV</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Verification Notice Bar */}
      <div className="bg-[#059669]/10 border-b border-[#059669]/20 px-4 py-2 text-center text-xs text-[#047857] font-medium no-print">
        <span>
          Viewing verified executive dossier for <strong>{cv.personal.fullName || "Candidate"}</strong>.
          Compliant with global executive search standards and ATS parsers.
        </span>
      </div>

      {/* Main CV Document Canvas */}
      <main className="max-w-[950px] mx-auto p-4 sm:p-8 lg:p-12 print:p-0 print:m-0 print:max-w-none print:w-full">
        <div className="transition-all duration-200">
          {cv.template === "ats-classic" && <CvTemplateAtsClassic cv={cv} />}
          {cv.template === "executive" && <CvTemplateExecutive cv={cv} />}
          {cv.template === "emerald" && <CvTemplateEmerald cv={cv} />}
          {!["ats-classic", "executive", "emerald"].includes(cv.template) && (
            <CvTemplateAtsClassic cv={cv} />
          )}
        </div>

        {/* Call to Action Card at bottom of public viewer */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm text-center space-y-4 no-print">
          <div className="w-12 h-12 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] mx-auto flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">
              Need a World-Class ATS-Optimized CV?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Build, optimize with live ATS score scanning, and share your verified executive profile with Talent Bridge. 100% Free.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/cv-builder"
              className="btn-brand-green !py-3 !px-8 text-xs font-bold inline-flex items-center gap-2"
            >
              <span>Build Your ATS-Ready CV Now</span>
              <Sparkles className="w-4 h-4 text-amber-300" />
            </Link>
          </div>
        </div>
      </main>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        cv={cv}
      />
    </div>
  );
}

export default function CvSharePage() {
  return (
    <Suspense
      fallback={
        <LoadingScreen
          message="Loading Verified Executive Dossier..."
          subMessage="Authenticating executive credentials..."
          fullScreen={true}
        />
      }
    >
      <CvViewerContent />
    </Suspense>
  );
}
