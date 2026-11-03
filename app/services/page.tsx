"use client";

import React from "react";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ConnectInquirySection } from "@/components/ConnectInquirySection";

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen pt-28 sm:pt-36">
      {/* 1. Our Services Section */}
      <SolutionsSection />

      {/* 2. Let's Connect Section */}
      <ConnectInquirySection />
    </div>
  );
}
