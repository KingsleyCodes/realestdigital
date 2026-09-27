// components/Services.jsx
"use client";

import Link from "next/link";
import { ArrowUpRight, Check, Code2, Layers, Search, Target } from "lucide-react";

const services = [
  {
    id: "growth",
    icon: Target,
    title: "Performance & Paid Acquisition",
    tagline: "Stop wasting budget on clicks that don't convert.",
    description: "We deploy hyper-targeted paid campaigns across Meta, Google, and LinkedIn engineered to lower Customer Acquisition Cost (CAC) and deliver qualified pipeline.",
    deliverables: ["Multi-Channel Paid Ads", "Conversion Rate Optimization (CRO)", "A/B Testing & Funnel Scaling"],
    metric: "312%",
    metricLabel: "Average ROI Increase"
  },
  {
    id: "web",
    icon: Code2,
    title: "Web Architecture & Digital Products",
    tagline: "High-speed, scalable web builds designed for conversion.",
    description: "We build modern Next.js and Tailwind applications that perform seamlessly, load instantly, and establish supreme brand authority.",
    deliverables: ["Custom Next.js Web Apps", "High-Converting Landing Pages", "UI/UX & Interactive Design"],
    metric: "99/100",
    metricLabel: "PageSpeed & Performance Score"
  },
  {
    id: "branding",
    icon: Layers,
    title: "Brand Strategy & Visual Positioning",
    tagline: "Position your business as the undisputed leader.",
    description: "Your buyers decide before talking to sales. We craft compelling visual identities and GTM positioning that build instant trust.",
    deliverables: ["Visual Identity & Logo Design", "Messaging & Positioning Framework", "Brand Guidelines"],
    metric: "2.5x",
    metricLabel: "Higher Buyer Trust & Retainers"
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO & AI Engine Optimization (GEO)",
    tagline: "Be the answer when clients search via AI & Google.",
    description: "Optimization designed for traditional search and modern AI assistants (ChatGPT, Gemini, Perplexity) to keep your brand discoverable.",
    deliverables: ["Generative Engine Optimization (GEO)", "Technical SEO Audits", "Authority Content Systems"],
    metric: "4.2x",
    metricLabel: "Organic Pipeline Growth"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-zinc-950 text-white overflow-hidden">
      {/* Soft Orange Backdrop Blur Accent */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 border-b border-zinc-800 pb-10">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-xs font-bold uppercase tracking-wider text-brand-orange">
              <span>Engineered Growth Systems</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Capabilities designed to scale revenue.
            </h2>
          </div>
          <p className="text-zinc-400 text-base sm:text-lg max-w-md font-normal leading-relaxed">
            We replace guesswork with engineered acquisition infrastructure tailored to your market.
          </p>
        </div>

        {/* Responsive Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-zinc-900/90 border border-zinc-800 hover:border-brand-orange/60 p-6 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-brand-orange/5"
              >
                <div className="space-y-6">
                  
                  {/* Top Header Row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-3.5 rounded-2xl bg-brand-orange text-white shadow-lg shadow-brand-orange/20">
                      <Icon className="w-6 h-6 shrink-0" />
                    </div>

                    <div className="bg-zinc-950 px-3.5 py-1.5 rounded-xl border border-zinc-800 text-right">
                      <span className="text-lg font-black text-brand-orange leading-none block">{service.metric}</span>
                      <span className="text-[10px] text-zinc-400 font-medium">{service.metricLabel}</span>
                    </div>
                  </div>

                  {/* Title & Descriptions */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-zinc-800/80 space-y-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                      Core Deliverables
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-zinc-300">
                          <Check className="w-4 h-4 text-brand-orange shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom Action CTA */}
                <div className="pt-8 mt-6 border-t border-zinc-800/50">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white group-hover:text-brand-orange transition-colors"
                  >
                    <span>Deploy this capability</span>
                    <ArrowUpRight className="w-4 h-4 text-brand-orange shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}