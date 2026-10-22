import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "Talent Bridge — The Right Talent. The Right Direction.",
  description:
    "Talent Bridge connects ambitious businesses with qualified professionals across Sri Lanka & globally. Recruitment, talent sourcing, executive search & career solutions.",
  authors: [{ name: "Talent Bridge" }],
  creator: "Talent Bridge",
  keywords: [
    "Talent Bridge",
    "Executive Search Sri Lanka",
    "Recruitment Consultancy Colombo",
    "Talent Acquisition",
    "Professional Staffing Solutions",
    "Career Advisory",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Talent Bridge — The Right Talent. The Right Direction.",
    description:
      "Talent Bridge connects ambitious businesses with qualified professionals across Sri Lanka & globally. Recruitment, talent sourcing, executive search & career solutions.",
    url: "https://talentbridge.lk",
    siteName: "Talent Bridge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talent Bridge — The Right Talent. The Right Direction.",
    description:
      "Talent Bridge connects ambitious businesses with qualified professionals across Sri Lanka & globally. Recruitment, talent sourcing, executive search & career solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#064E3B" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#0F172A] antialiased selection:bg-[#10B981]/20 selection:text-[#064E3B] print:!block print:!min-h-0 print:!h-auto print:!p-0 print:!m-0 print:!bg-white">
        <Navbar />
        <main className="flex-1 print:!block print:!w-full print:!h-auto print:!p-0 print:!m-0">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
