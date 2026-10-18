# Talent Bridge | Human Capital & Recruitment Advisory

> **The Right Talent. The Right Direction.**  
> An executive-grade recruitment and human capital advisory platform bridging elite enterprises and high-impact leaders.

---

## 🌟 Executive Overview

**Talent Bridge** is engineered around an uncompromising thesis: recruitment is not a volume-based transaction or a resume distribution spam service. It is a strategic advisory discipline requiring deep bilateral advocacy, calibrated vetting, and mutual accountability.

- **For Organizations & Founders**: Calibrated executive headhunting, target candidate mapping, multi-stage screening, and high-retention leadership placements.
- **For Professionals & Leaders**: Confidential career trajectory advisory, direct unadvertised executive mandates, zero applicant fees, and dedicated advocacy.

---

## 📐 Technology Architecture

- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router, Turbopack, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type safety)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with Design System CSS Variables
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Geist Sans & Geist Mono
- **Deployment**: Vercel / Edge Ready

---

## 🧭 Site Structure & Routes

```
talentbridge/
├── app/
│   ├── layout.tsx            # Global Root Layout (Metadata, Navbar, Footer, WhatsApp concierge)
│   ├── page.tsx              # High-Conversion Executive Homepage
│   ├── about/page.tsx        # Company Mission, Leadership Team & Ethics
│   ├── services/page.tsx     # Extended Solutions Catalog (Employer & Candidate practices)
│   ├── careers/page.tsx      # Curated Opportunities Board & Talent Network Intake
│   ├── contact/page.tsx      # Dynamic Two-Sided Intake Form (Hire vs. Apply) & SLA
│   └── globals.css           # Tailwind tokens, CSS variables & glassmorphism
├── components/
│   ├── Navbar.tsx            # Sticky glassmorphism header with mobile drawer
│   ├── Footer.tsx            # Multi-tier corporate footer with SLA guarantee
│   ├── WhatsAppWidget.tsx    # Floating persistent WhatsApp support concierge
│   ├── HeroSection.tsx       # Animated display hero with verified metrics
│   ├── SplitPerspective.tsx  # Dual-pathway cards (Organizations vs. Professionals)
│   ├── ServicesGrid.tsx      # 6-Card responsive solutions matrix
│   ├── ProcessTimeline.tsx   # 4-Step horizontal/vertical methodology stepper
│   ├── WhyUsPillars.tsx      # Core pillars & value proposition cards
│   └── ContactForm.tsx       # Tabbed interactive intake form with validation
├── lib/
│   ├── site-config.ts        # Centralized site configurations, nav links, and contact details
│   └── utils.ts              # Class name utilities
└── public/
    └── logo.svg              # Brand vector logo
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yashenFdo/TalentBridge.git
cd TalentBridge

# Install dependencies
npm install
```

### Running Locally

```bash
# Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

---

## 🔒 Confidentiality & Brand Standard

- **Discretion**: Executive mandates and candidate portfolios are treated with strict non-disclosure integrity.
- **SLA**: All direct inquiries submitted through the intake portal or WhatsApp concierge receive guaranteed responses within 24 business hours.

---

## 📄 License

Proprietary © Talent Bridge Advisory. All rights reserved.
