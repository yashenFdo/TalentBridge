import React from "react";
import Link from "next/link";
import { 
  Search, 
  ShieldCheck, 
  Target, 
  Briefcase, 
  Users2, 
  Sparkles, 
  ArrowRight, 
  Check, 
  X,
  CheckCircle2,
  Building2,
  UserCheck
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = {
  title: "Solutions & Services | Talent Bridge Advisory",
  description:
    "Comprehensive executive search, technical headhunting, candidate screening, and confidential career advisory for modern enterprises and leaders.",
};

const iconMap: Record<string, React.ElementType> = {
  Search,
  ShieldCheck,
  Target,
  Briefcase,
  Users2,
  Sparkles,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* Header */}
      <section className="pt-36 pb-20 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/70 to-transparent pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Talent Solutions & Advisory
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 mb-6 leading-tight">
              Calibrated recruitment engineered for high-stakes roles.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              From confidential C-suite headhunting to strategic career trajectory advisory, we provide full-cycle human capital solutions that bridge ambitious organizations and proven executives.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact?type=employer"
                className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-all shadow-md shadow-blue-600/20"
              >
                Retain an Executive Search
              </Link>
              <Link
                href="/careers"
                className="px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold rounded-xl text-sm transition-all"
              >
                View Curated Openings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Solutions Directory
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mt-3 tracking-tight">
              Our Specialized Practices
            </h2>
            <p className="text-slate-600 text-base mt-4">
              Every practice is led by seasoned industry specialists with deep functional domain expertise.
            </p>
          </div>

          <div className="space-y-12">
            {SITE_CONFIG.services.map((service, index) => {
              const Icon = iconMap[service.icon] || Sparkles;
              const isEven = index % 2 === 0;

              return (
                <div
                  id={service.id}
                  key={service.id}
                  className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm hover:shadow-md transition-shadow scroll-mt-28"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                            Practice {service.number}
                          </span>
                          <h3 className="text-2xl font-bold text-slate-950">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <div className="text-sm font-semibold text-slate-700 pt-1">
                        {service.subtitle}
                      </div>

                      <p className="text-slate-600 text-base leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                          Standard Practice Deliverables:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.features.map((feat, fidx) => (
                            <div key={fidx} className="flex items-start text-xs sm:text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200/80 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                          Client Experience & SLA
                        </span>
                        <div className="text-xl font-bold text-slate-950 mb-3">
                          {service.category === "employer"
                            ? "Dedicated Search Sprint"
                            : service.category === "candidate"
                            ? "Confidential Career Advocacy"
                            : "Bilateral Alignment Calibration"}
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed mb-6">
                          {service.category === "employer"
                            ? "Comprehensive role calibration, proactive market mapping, and delivered shortlists in an average of 14 days."
                            : "Direct access to unadvertised leadership mandates with complete confidentiality and zero candidate fees."}
                        </p>
                      </div>

                      <Link
                        href={service.category === "candidate" ? "/careers" : "/contact?type=employer"}
                        className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-slate-950 hover:bg-blue-600 text-white text-xs font-semibold transition-colors"
                      >
                        {service.category === "candidate" ? "Register Career Profile" : "Initiate Mandate"}
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Comparison Matrix: Talent Bridge vs Traditional Recruitment */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Comparative Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mt-3 tracking-tight">
              The Talent Bridge Difference
            </h2>
            <p className="text-slate-600 text-base mt-4">
              How our executive advisory model compares to traditional volume-driven recruitment agencies.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm text-sm">
              <thead>
                <tr className="bg-slate-950 text-white">
                  <th className="py-5 px-6 font-semibold text-sm">Recruitment Metric & Approach</th>
                  <th className="py-5 px-6 font-bold text-sm text-blue-400 bg-slate-900 border-x border-slate-800">
                    Talent Bridge Standard
                  </th>
                  <th className="py-5 px-6 font-semibold text-sm text-slate-300">
                    Traditional Volume Agency
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  {
                    aspect: "Candidate Sourcing Philosophy",
                    tb: "Proactive passive talent mapping & targeted market headhunting",
                    trad: "Passive job board scraping and mass keyword indexing",
                  },
                  {
                    aspect: "Shortlist Curation",
                    tb: "3 to 5 hyper-calibrated, fully vetted finalists",
                    trad: "20+ unfiltered resumes forwarded with minimal screening",
                  },
                  {
                    aspect: "Candidate Vetting Depth",
                    tb: "Competency, emotional intelligence & 360 reference audit",
                    trad: "Basic keyword resume match with no deep reference check",
                  },
                  {
                    aspect: "Discretion & Confidentiality",
                    tb: "Strict NDAs, blind profiles & mutual consent confirmation",
                    trad: "Publicly broadcasting candidates and open mandates",
                  },
                  {
                    aspect: "Candidate Representation Fee",
                    tb: "100% Free for candidates with career transition advocacy",
                    trad: "May charge candidate fees or push mismatched roles for commission",
                  },
                  {
                    aspect: "Retention & Guarantee",
                    tb: "90-Day post-placement guarantee with 30/60/90 day reviews",
                    trad: "Ends the day candidate signs offer letter",
                  },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-[#F8FAFC]" : "bg-white"}>
                    <td className="py-4 px-6 font-semibold text-slate-900">{row.aspect}</td>
                    <td className="py-4 px-6 font-medium text-slate-950 bg-blue-50/40 border-x border-blue-100/50">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{row.tb}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{row.trad}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ready to upgrade your talent strategy?
          </h2>
          <p className="text-slate-400 text-base mb-8">
            Speak with a managing partner to discuss your organization&apos;s upcoming mandates.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact?type=employer"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-all shadow-md"
            >
              Submit Hiring Brief
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
