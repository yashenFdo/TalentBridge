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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0A1118" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAFBFD] text-[#1E293B] antialiased selection:bg-[#38BDF8]/20 selection:text-[#0C4A6E]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
