"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import QRCode from "qrcode";
import { CvData } from "@/types/cv";
import { encodeCvToUrl } from "@/lib/cv-storage";
import { ShieldCheck, ExternalLink } from "lucide-react";

interface Props {
  cv?: CvData;
  shareUrlOverride?: string;
  className?: string;
}

export function CvFooter({ cv, shareUrlOverride, className = "" }: Props) {
  const [qrDataUrl, setQrDataUrl] = useState<string>("");

  const origin = typeof window !== "undefined" ? window.location.origin : "https://talentbridge.lk";
  let targetUrl = shareUrlOverride;
  if (!targetUrl && cv) {
    const encoded = encodeCvToUrl(cv);
    targetUrl = `${origin}/cv/share?d=${encoded}`;
  } else if (!targetUrl) {
    targetUrl = "https://talentbridge.lk";
  }

  useEffect(() => {
    let isMounted = true;
    const qrTarget =
      targetUrl && targetUrl.length < 250
        ? targetUrl
        : `${origin}/cv/share?id=${cv?.id || "verified"}`;

    QRCode.toDataURL(qrTarget, {
      width: 140,
      margin: 1,
      color: {
        dark: "#0A192F",
        light: "#FFFFFF",
      },
      errorCorrectionLevel: "L",
    })
      .then((url) => {
        if (isMounted) setQrDataUrl(url);
      })
      .catch((err) => {
        console.warn("Retrying QR with short origin fallback:", err);
        QRCode.toDataURL(`${origin}/cv/share`, {
          width: 140,
          margin: 1,
          color: {
            dark: "#0A192F",
            light: "#FFFFFF",
          },
          errorCorrectionLevel: "L",
        })
          .then((fallbackUrl) => {
            if (isMounted) setQrDataUrl(fallbackUrl);
          })
          .catch(() => {});
      });

    return () => {
      isMounted = false;
    };
  }, [cv?.id, origin, targetUrl]);

  return (
    <footer
      className={`cv-page-footer pt-4 mt-6 border-t-2 border-slate-200/90 break-inside-avoid select-none print:!block print:!visible print:!opacity-100 print:!w-full ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-1">
        {/* LEFT SIDE: Talent Bridge Logo & Link to talentbridge.lk + Verified Badge */}
        <div className="flex items-center gap-3 text-left">
          <a
            href="https://talentbridge.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-opacity hover:opacity-85"
            title="Visit Talent Bridge"
          >
            <Image
              src="/logo-transparent.png"
              alt="Talent Bridge"
              width={120}
              height={30}
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </a>

          <div className="h-6 w-px bg-slate-200 hidden sm:block" />

          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
              <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
              <span>Talent Bridge Verified CV</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-500">
              <a
                href="https://talentbridge.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#059669] hover:underline"
              >
                talentbridge.lk
              </a>
              <span>•</span>
              <span>&copy; 2026 Talent Bridge</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Built by Devcity.us (clickable link) + Small QR Code */}
        <div className="flex items-center gap-3 sm:gap-4 text-right">
          <div className="flex flex-col items-end">
            <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
              Technology Partner
            </span>
            <a
              href="https://devcity.us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors group mt-0.5"
              title="Visit Devcity.us"
            >
              <Image
                src="/devcity-icon.png"
                alt="Devcity"
                width={20}
                height={20}
                className="h-4.5 w-4.5 rounded object-contain shadow-2xs shrink-0"
              />
              <span className="text-slate-600 font-semibold text-[11px] sm:text-xs">Built by</span>
              <span className="text-blue-600 font-black flex items-center hover:underline">
                Devcity.us
                <ExternalLink className="w-3 h-3 ml-0.5 text-slate-400 group-hover:text-blue-600" />
              </span>
            </a>
          </div>

          {/* Small QR Code */}
          {qrDataUrl && (
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center shrink-0 group/qr"
              title="Scan or click to verify profile online"
            >
              <div className="p-1 bg-white border border-slate-300 rounded shadow-2xs group-hover/qr:border-blue-500 transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={qrDataUrl}
                  alt="Scan to verify CV on Talent Bridge"
                  className="w-11 h-11 sm:w-11.5 sm:h-11.5 object-contain"
                />
              </div>
              <span className="text-[7px] font-extrabold text-slate-400 uppercase tracking-tight mt-0.5">
                Scan QR
              </span>
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
