import React from "react";
import { ShieldCheck, Zap, Infinity } from "lucide-react";

// Định nghĩa dữ liệu tĩnh để code sạch và dễ bảo trì (DRY Principle)
const PROPOSITIONS = [
  {
    title: "100% Private",
    description:
      "Mostly everything runs locally in your browser via JavaScript. Your files and data never leave your device in most of the tools.",
    icon: ShieldCheck,
    // Màu sắc icon được tùy chỉnh nhẹ để tạo điểm nhấn trực quan (Visual Hierarchy)
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    title: "Lightning Fast",
    description:
      "No server round-trips means instant processing. Convert, compress, and generate in milliseconds.",
    icon: Zap,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Free to Start",
    description:
      "Many tools are completely free with no limits. Advanced features available with subscription plans for power users.",
    icon: Infinity,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

const ValuePropositionSection = () => {
  return (
    <section className="py-24 px-6 bg-base">
      <div className="max-w-6xl mx-auto">
        {/* Header Section: Sử dụng Center Alignment theo mẫu */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-content">
            Why htcUtils?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted">
            Built for developers and power users who value privacy and speed.
            Over 20+ professional tools at your fingertips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROPOSITIONS.map((prop, index) => (
            <div
              key={index}
              className="p-8 bg-surface border border-base rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
            >
              {/* Icon Container */}
              <div
                className={`p-3 rounded-xl ${prop.iconBg} ${prop.iconColor} mb-6`}
              >
                <prop.icon size={28} strokeWidth={2.5} />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-content mb-3">
                {prop.title}
              </h3>
              <p className="text-muted leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
