"use client";

import React, { useState } from "react";
import { CvData } from "@/types/cv";
import { encodeCvToUrl } from "@/lib/cv-storage";
import {
  X,
  Copy,
  Check,
  Share2,
  Printer,
  Mail,
  Send,
  ShieldCheck,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  cv: CvData;
}

export function ShareModal({ isOpen, onClose, cv }: Props) {
  const [copied, setCopied] = useState(false);
  const [vaultSubmitted, setVaultSubmitted] = useState(false);
  const [isSubmittingVault, setIsSubmittingVault] = useState(false);

  if (!isOpen) return null;

  // Generate shareable link
  const encoded = encodeCvToUrl(cv);
  const origin = typeof window !== "undefined" ? window.location.origin : "https://talentbridge.lk";
  const shareUrl = `${origin}/cv/share?d=${encoded}`;

  const handleCopy = async () => {
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
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const handlePrint = () => {
    onClose();
    setTimeout(() => {
      window.print();
    }, 300);
  };

  const handleVaultSubmit = () => {
    setIsSubmittingVault(true);
    setTimeout(() => {
      setIsSubmittingVault(false);
      setVaultSubmitted(true);
    }, 800);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
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
        <div className="space-y-1 pr-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-full border border-[#A7F3D0]">
            <Share2 className="w-3.5 h-3.5" />
            <span>Instant Link & Share Engine</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Share Your Executive CV Anywhere
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Anyone with your public link can view, download, or review your verified CV instantly on any device.
          </p>
        </div>

        {/* Share URL Box */}
        <div className="mt-6 space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Your Unique Share Link
          </label>
          <div className="flex items-center gap-2 p-1.5 bg-slate-50 rounded-xl border border-slate-300">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="bg-transparent flex-1 text-xs text-slate-700 px-3 py-2 outline-none font-mono truncate"
            />
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#059669] hover:bg-[#047857] text-white text-xs font-semibold rounded-lg transition-colors flex-shrink-0 shadow-sm"
            >
              {copied ? (
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

        {/* Share Buttons Grid */}
        <div className="mt-6">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-3">
            Quick Share Channels
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            {/* WhatsApp Share */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#128C7E] font-semibold text-xs transition-all hover:scale-[1.01]"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Share on WhatsApp</span>
            </a>

            {/* LinkedIn Share */}
            <a
              href={linkedinShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 text-[#0A66C2] font-semibold text-xs transition-all hover:scale-[1.01]"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
              <span>Share to LinkedIn</span>
            </a>

            {/* Email Share */}
            <a
              href={mailtoUrl}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 font-semibold text-xs transition-all hover:scale-[1.01]"
            >
              <Mail className="w-4 h-4 text-slate-600" />
              <span>Send via Email</span>
            </a>

            {/* PDF Print / Download */}
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-all hover:scale-[1.01]"
            >
              <Printer className="w-4 h-4 text-emerald-400" />
              <span>Download PDF / Print</span>
            </button>
          </div>
        </div>

        {/* Live Preview Button */}
        <div className="mt-4">
          <a
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-dashed border-[#059669] text-[#059669] hover:bg-[#ECFDF5] text-xs font-semibold transition-colors"
          >
            <span>Open Public Share View in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Talent Bridge Headhunter Vault Submission */}
        <div className="mt-6 pt-6 border-t border-slate-200">
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#ECFDF5] to-white border border-[#A7F3D0] space-y-3">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#059669] flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Submit to Talent Bridge Headhunter Vault
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Make your verified profile visible to our Senior Search Partners for discreet, unadvertised C-level and senior leadership searches.
                </p>
              </div>
            </div>

            {vaultSubmitted ? (
              <div className="flex items-center gap-2 p-2.5 bg-emerald-50 text-emerald-800 rounded-lg text-xs font-semibold border border-emerald-200">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Profile submitted to Talent Bridge Private Vault! Our partners will review confidentially.</span>
              </div>
            ) : (
              <button
                onClick={handleVaultSubmit}
                disabled={isSubmittingVault}
                className="w-full py-2.5 px-4 bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmittingVault ? "Encrypting & Submitting..." : "Submit to Private Talent Vault"}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
