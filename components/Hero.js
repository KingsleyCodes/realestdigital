// components/Hero.jsx
"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] pt-24 sm:pt-28 pb-12 sm:pb-16 bg-white text-zinc-900 overflow-hidden flex items-center">
      {/* Background Soft Orange Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-orange/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      
      {/* Subtle Light Radial Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] text-zinc-950">
              You need to scale revenue. <br />
              <span className="text-brand-orange">
                We guarantee it.
              </span>
            </h1>

            {/* Subtitle Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-zinc-600 max-w-2xl font-normal leading-relaxed">
              Most digital agencies sell you random activity and hope it leads to sales. We build engineered acquisition systems designed to scale your pipeline systematically.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              {/* Primary Solid Orange Button */}
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-orange text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-x hover:bg-brand-orange-hover transition-all duration-300 shadow-lg shadow-brand-orange/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get Free Growth Audit</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
              </Link>

              {/* Secondary Light Outline Button */}
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white border border-zinc-200 text-zinc-800 font-semibold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-x hover:bg-zinc-50 hover:border-brand-orange hover:text-zinc-950 transition-all duration-300 shadow-sm"
              >
                <span>Explore Capabilities</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Stat Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5 sm:gap-4">
            
            {/* Stat Card 1 */}
            <div className="bg-zinc-50/80 backdrop-blur-md border border-zinc-200 p-5 sm:p-6 rounded-2xl relative overflow-hidden group hover:border-brand-orange transition-colors shadow-sm">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs sm:text-sm font-semibold text-zinc-500 uppercase tracking-wide">Client Revenue Generated</span>
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange shrink-0" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight">
                $10M+
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-500 mt-1.5">Measured across paid media and high-converting funnel architectures.</p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-zinc-50/80 backdrop-blur-md border border-zinc-200 p-5 sm:p-6 rounded-2xl relative overflow-hidden group hover:border-brand-orange transition-colors shadow-sm">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs sm:text-sm font-semibold text-zinc-500 uppercase tracking-wide">Average ROI Boost</span>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange shrink-0" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-orange tracking-tight">
                3.8x
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-500 mt-1.5">Consistent pipeline optimization in 90-day growth cycles.</p>
            </div>

            {/* Dark Diagnostic Banner Card for Visual Contrast */}
            <div className="bg-zinc-950 text-white border border-zinc-800 p-5 sm:p-6 rounded-2xl shadow-xl sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5 font-bold mb-1 text-sm sm:text-base">
                <span className="flex h-2.5 w-2.5 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
                </span>
                <span>Ready for Next-Level Scale?</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-3.5">
                Book a 20-minute growth diagnostic. We analyze your website, paid ads, and brand funnel for zero cost.
              </p>
              <Link href="#contact" className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center gap-1">
                <span>Request Diagnostic</span>
                <ArrowRight className="w-3 h-3 text-brand-orange shrink-0" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}