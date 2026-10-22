"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CvData } from "@/types/cv";
import { encodeCvToUrl } from "@/lib/cv-storage";
import { generatePlainTextCv } from "@/lib/cv-ats-utils";
import {
  X,
  Copy,
  Check,
  Share2,
  Printer,
  Mail,
  ShieldCheck,
  FileText,
  Download,
  Code2,
} from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  cv: CvData;
}

export function ShareModal({ isOpen, onClose, cv }: Props) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [activeTab, setActiveTab] = useState<"link" | "ats-text" | "export">("link");

  if (!isOpen) return null;

  // Generate shareable link
  const encoded = encodeCvToUrl(cv);
  const origin = typeof window !== "undefined" ? window.location.origin : "https://talentbridge.lk";
  const shareUrl = `${origin}/cv/share?d=${encoded}`;
  const plainTextCv = generatePlainTextCv(cv);

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const input = document.createElement("input");
        input.value = shareUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch (err) {
      console.error("Failed to copy link", err);
    }
  };

  const handleCopyPlainText = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(plainTextCv);
      } else {
        const input = document.createElement("textarea");
        input.value = plainTextCv;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2500);
    } catch (err) {
      console.error("Failed to copy plain text", err);
    }
  };

  const handleDownloadTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([plainTextCv], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    const safeName = (cv.personal.fullName || "CV").toLowerCase().replace(/[^a-z0-9]/g, "_");
    element.download = `${safeName}_ats_resume.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDownloadJson = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(cv, null, 2)], { type: "application/json" });
    element.href = URL.createObjectURL(file);
    const safeName = (cv.personal.fullName || "CV").toLowerCase().replace(/[^a-z0-9]/g, "_");
    element.download = `${safeName}_talentbridge_cv.json`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    onClose();
    setTimeout(() => {
      window.print();
    }, 300);
  };

  const candidateName = cv.personal.fullName || "Candidate";
  const candidateTitle = cv.personal.title || "Executive Professional";
  const whatsappText = encodeURIComponent(
    `Hello, please find my verified executive profile & CV on Talent Bridge:\n\n*${candidateName}* — ${candidateTitle}\n\nView full CV here: ${shareUrl}`
  );
  const whatsappUrl = `https://wa.me/?text=${whatsappText}`;

  const emailSubject = encodeURIComponent(`Executive CV Dossier — ${candidateName}`);
  const emailBody = encodeURIComponent(
    `Hello,\n\nPlease review my verified CV and professional career dossier hosted on Talent Bridge:\n${shareUrl}\n\nKind regards,\n${candidateName}\n${cv.personal.phone || ""}`
  );
  const mailtoUrl = `mailto:?subject=${emailSubject}&body=${emailBody}`;

  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 no-print">
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] flex items-center justify-center">
              <Share2 className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-extrabold text-slate-900">
              Share & Export CV
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            Export ATS plain text, print high-res PDF, or share your hosted executive profile.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex border-b border-slate-200 mb-5">
          <button
            onClick={() => setActiveTab("link")}
            className={`pb-2 text-xs font-bold transition-colors border-b-2 mr-4 ${
              activeTab === "link"
                ? "border-[#059669] text-[#059669]"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Public Link & Social
          </button>
          <button
            onClick={() => setActiveTab("ats-text")}
            className={`pb-2 text-xs font-bold transition-colors border-b-2 mr-4 ${
              activeTab === "ats-text"
                ? "border-[#059669] text-[#059669]"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            ATS Plain-Text Copy
          </button>
          <button
            onClick={() => setActiveTab("export")}
            className={`pb-2 text-xs font-bold transition-colors border-b-2 ${
              activeTab === "export"
                ? "border-[#059669] text-[#059669]"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Export Files
          </button>
        </div>

        {activeTab === "link" && (
          <div className="space-y-5">
            {/* Shareable Link Box */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">
                Verified Candidate Profile URL
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={shareUrl}
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-600 font-mono truncate focus:outline-none"
                />
                <button
                  onClick={handleCopyLink}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    copiedLink
                      ? "bg-emerald-600 text-white"
                      : "bg-[#059669] hover:bg-[#047857] text-white shadow-xs"
                  }`}
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Social Share Buttons */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">
                Direct Dispatch Options
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all text-slate-700 hover:text-[#059669] group text-center"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-110 transition-transform">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold">WhatsApp</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={linkedinShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/40 transition-all text-slate-700 hover:text-[#0077b5] group text-center"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#0077b5] group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold">LinkedIn</span>
                </a>

                {/* Email */}
                <a
                  href={mailtoUrl}
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all text-slate-700 hover:text-slate-900 group text-center"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold">Email</span>
                </a>
              </div>
            </div>

            {/* PDF Print Option */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Need a paper or PDF copy?</span>
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-amber-400" />
                <span>Print / Save as PDF</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === "ats-text" && (
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-xs text-amber-900 leading-relaxed">
              <strong>ATS Tip:</strong> Many online portals (Workday, Taleo, Greenhouse) feature a plain text box. Copy this formatted plain-text snippet directly to bypass parsing errors.
            </div>

            <div className="relative">
              <textarea
                readOnly
                value={plainTextCv}
                rows={10}
                className="w-full bg-slate-900 text-slate-200 font-mono text-[11px] p-3 rounded-lg border border-slate-700 focus:outline-none select-all"
              />
              <button
                onClick={handleCopyPlainText}
                className={`absolute top-2 right-2 flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold transition-all ${
                  copiedText
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-600"
                }`}
              >
                {copiedText ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={handleDownloadTxt}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-slate-300 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .TXT File</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === "export" && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handlePrint}
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all text-center group"
              >
                <Printer className="w-6 h-6 text-[#059669] mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-slate-900">Print / PDF</span>
                <span className="text-[10px] text-slate-500 mt-0.5">High-res vector printout</span>
              </button>

              <button
                onClick={handleDownloadTxt}
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all text-center group"
              >
                <FileText className="w-6 h-6 text-slate-700 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-slate-900">ATS Plain Text</span>
                <span className="text-[10px] text-slate-500 mt-0.5">Clean .txt file</span>
              </button>

              <button
                onClick={handleDownloadJson}
                className="col-span-2 flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Code2 className="w-4 h-4 text-slate-600" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">Export Raw JSON Data</div>
                    <div className="text-[10px] text-slate-500">Backup your CV to reload anytime</div>
                  </div>
                </div>
                <Download className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </div>
        )}

        {/* Footer info note */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
            <span>End-to-end encrypted profile</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Technology Partner:</span>
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
      </div>
    </div>
  );
}
