import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

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
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-[#4A4A4A] font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
