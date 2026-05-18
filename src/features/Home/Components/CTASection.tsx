import React from "react";
import { Languages, Code2, ArrowRight } from "lucide-react";
import Link from "next/link"; // Import component Link của Next.js

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-surface border-y border-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] p-12 md:p-20 text-center shadow-2xl border border-white/10">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/20 blur-[80px]" />

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Boost Your Productivity?
            </h2>

            <p className="max-w-2xl text-lg md:text-xl text-blue-100/80 mb-12 leading-relaxed">
              Explore our dual ecosystem: Master multi-language variations in
              the
              <span className="text-primary font-semibold">
                {" "}
                Language Hub
              </span>{" "}
              or experiment safely in the
              <span className="text-primary font-semibold">
                {" "}
                Tools Dev Sandbox
              </span>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
              {/* Chuyển button thành Link và thêm href */}
              <Link
                href="/language-hub"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-950 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg active:scale-95"
              >
                <Languages className="w-5 h-5 text-primary" />
                Language Hub
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>

              {/* Chuyển button thành Link và thêm href */}
              <Link
                href="/dev-sandbox"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white border-2 border-white/20 rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95"
              >
                <Code2 className="w-5 h-5 text-primary" />
                Tools Dev Sandbox
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
