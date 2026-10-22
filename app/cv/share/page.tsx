"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CvData } from "@/types/cv";
import { decodeCvFromUrl, SAMPLE_CV, loadSavedCv } from "@/lib/cv-storage";
import { CvTemplateEmerald } from "@/components/cv-builder/CvTemplateEmerald";
import { CvTemplateNavy } from "@/components/cv-builder/CvTemplateNavy";
import { CvTemplateMinimal } from "@/components/cv-builder/CvTemplateMinimal";
import { ShareModal } from "@/components/cv-builder/ShareModal";
import {
  Printer,
  Share2,
  Mail,
  Phone,
  CheckCircle,
  ShieldCheck,
  FileText,
  Sparkles,
} from "lucide-react";

function CvViewerContent() {
  const searchParams = useSearchParams();
  const [cv, setCv] = useState<CvData>(SAMPLE_CV);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const dParam = searchParams.get("d");
    if (dParam) {
      const decoded = decodeCvFromUrl(dParam);
      if (decoded) {
        setCv(decoded);
        setIsLoaded(true);
        return;
      }
    }
    // Fallback to local storage or sample
    const local = loadSavedCv();
    if (local) setCv(local);
    setIsLoaded(true);
  }, [searchParams]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F6F8FA] text-[#0A1118]">
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
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#0D9488] font-bold bg-[#F0FDFA] border border-[#99F6E4] px-2.5 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Talent Bridge Profile</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {cv.personal.email && (
              <a
                href={`mailto:${cv.personal.email}?subject=Executive Opportunity via Talent Bridge`}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#0D9488]" />
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
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
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
      <div className="bg-[#0D9488]/10 border-b border-[#0D9488]/20 px-4 py-2 text-center text-xs text-[#0F766E] font-medium no-print">
        <span>
          Viewing verified executive dossier for <strong>{cv.personal.fullName || "Candidate"}</strong>.
          Share this link or download a clean print copy anytime.
        </span>
      </div>

      {/* Main CV Document Canvas */}
      <main className="max-w-[950px] mx-auto p-4 sm:p-8 lg:p-12">
        <div className="transition-all duration-200">
          {cv.template === "emerald" && <CvTemplateEmerald cv={cv} />}
          {cv.template === "navy" && <CvTemplateNavy cv={cv} />}
          {cv.template === "minimal" && <CvTemplateMinimal cv={cv} />}
        </div>

        {/* Viral Call to Action Card at bottom of public viewer */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm text-center space-y-4 no-print">
          <div className="w-12 h-12 rounded-full bg-[#F0FDFA] border border-[#99F6E4] text-[#0D9488] mx-auto flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">
              Need a World-Class Executive CV Like This?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Build, format, and share your verified executive profile with Talent Bridge in under 3 minutes. 100% Free.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/cv-builder"
              className="btn-brand-green !py-3 !px-8 text-xs font-bold inline-flex items-center gap-2"
            >
              <span>Build Your Free CV Now</span>
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
        <div className="min-h-screen flex items-center justify-center bg-[#F8FAFB]">
          <div className="text-center space-y-2">
            <div className="w-8 h-8 border-2 border-[#0D9488] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-semibold text-slate-600">Loading Verified Executive Dossier...</p>
          </div>
        </div>
      }
    >
      <CvViewerContent />
    </Suspense>
  );
}
