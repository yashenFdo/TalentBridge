import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talent Bridge | The Right Talent. The Right Direction.",
  description:
    "Specialized recruitment and human capital advisory connecting leading organizations with exceptional leaders. High-touch, calibrated vetting over automated volume.",
  keywords: [
    "Recruitment",
    "Executive Search",
    "Talent Solutions",
    "Headhunting",
    "Career Direction",
    "Human Capital Advisory",
    "Sri Lanka Recruitment",
    "C-Suite Search",
  ],
  authors: [{ name: "Talent Bridge Advisory" }],
  openGraph: {
    title: "Talent Bridge | The Right Talent. The Right Direction.",
    description: "Executive recruitment made simple, reliable, and people-focused.",
    url: "https://talentbridge.lk",
    siteName: "Talent Bridge",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
