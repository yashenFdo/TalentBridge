"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Sparkles } from "lucide-react";

interface LoadingScreenProps {
  message?: string;
  subMessage?: string;
  fullScreen?: boolean;
  compact?: boolean;
}

export function LoadingScreen({
  message = "Loading Verified Executive Dossier...",
  subMessage = "Synthesizing credentials & real-time market telemetry",
  fullScreen = true,
  compact = false,
}: LoadingScreenProps) {
  if (compact) {
    return (
      <div className="py-12 px-6 flex flex-col items-center justify-center gap-3 text-center">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20 border-t-emerald-500 animate-spin" />
          <div className="w-8 h-8 rounded-full bg-[#064E3B]/20 flex items-center justify-center text-[#059669]">
            <ShieldCheck className="w-4 h-4 text-[#059669]" />
          </div>
        </div>
        <p className="text-xs font-semibold text-slate-700 tracking-tight">{message}</p>
        {subMessage && <p className="text-[11px] text-slate-400 max-w-xs">{subMessage}</p>}
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden text-white selection:bg-[#10B981]/30 selection:text-white ${
        fullScreen
          ? "min-h-screen w-full bg-[#071324] px-4 py-12"
          : "w-full py-20 px-6 rounded-3xl bg-[#071324] border border-emerald-900/50 shadow-2xl"
      }`}
    >
      {/* Dynamic ambient lighting & grid mesh */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none -top-24 -left-24" />
      <div className="absolute w-[450px] h-[450px] rounded-full bg-teal-500/10 blur-[130px] pointer-events-none -bottom-24 -right-24" />
      <div
        className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Content Card */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md mx-auto space-y-6">
        {/* Orbital Center Rig */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* Radar expand pulse */}
          <div className="absolute inset-2 rounded-full border border-emerald-400/40 animate-tb-radar pointer-events-none" />

          {/* Outer dashed counter-spinning orbit ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-emerald-500/30 animate-[spin_20s_linear_infinite_reverse]" />

          {/* Middle smooth orbital ring with orbiting luminous beacon */}
          <div className="absolute inset-3 rounded-full border border-emerald-400/25 animate-[spin_5s_linear_infinite]">
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_12px_#10B981]" />
          </div>

          {/* Inner breathing glow pedestal */}
          <div className="relative w-20 h-20 rounded-2xl bg-[#0A192F]/90 border border-emerald-400/40 shadow-[0_0_35px_rgba(16,185,129,0.35)] backdrop-blur-md flex items-center justify-center p-3 animate-tb-breathe">
            <Image
              src="/icon.svg"
              alt="Talent Bridge"
              width={56}
              height={56}
              className="w-12 h-12 object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>
        </div>

        {/* Verification Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064E3B]/40 border border-emerald-400/30 backdrop-blur-md shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-300 uppercase">
            Talent Bridge Verified
          </span>
          <Sparkles className="w-3 h-3 text-amber-300 ml-0.5" />
        </div>

        {/* Dynamic Titles */}
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
            {message}
          </h2>
          {subMessage && (
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
              {subMessage}
            </p>
          )}
        </div>

        {/* Precision Progress Track */}
        <div className="w-64 sm:w-72 h-1.5 bg-slate-800/90 rounded-full overflow-hidden border border-emerald-900/60 shadow-inner relative">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-[#10B981] to-transparent animate-tb-shimmer" />
        </div>

        {/* Tech Partner Attribution */}
        <div className="pt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
          <span>Engineered with</span>
          <a
            href="https://devcity.us"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-white hover:text-emerald-300 transition-colors bg-white/5 border border-white/10 px-2.5 py-1 rounded-full"
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
  );
}

export default LoadingScreen;
