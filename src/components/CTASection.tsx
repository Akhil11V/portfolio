import React from "react";
import { FaEnvelopeOpenText, FaLinkedin } from "react-icons/fa";

interface CTASectionProps {
  visibleSections?: Set<string>;
  isHovered: string | null;
  setIsHovered: (hovered: string | null) => void;
}

const CTASection: React.FC<CTASectionProps> = ({ isHovered, setIsHovered }) => {
  return (
    <section
      id="cta"
      className="p-4 sm:p-6 md:p-8 lg:p-16 bg-linear-to-br from-(--accent-color) to-(--primary-color) relative overflow-hidden transition-all duration-700 opacity-100 translate-y-0"
    >
      {/* Simple Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 dark:bg-white/5 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-white/20 dark:bg-black/20 backdrop-blur-md px-4 py-2 rounded-full text-white dark:text-white text-sm font-semibold mb-8 border border-white/30 dark:border-white/20"
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 0.8s ease 200ms",
          }}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span>Open to Frontend Engineer Opportunities</span>
        </div>

        {/* Headline */}
        <h2
          className="text-4xl sm:text-5xl font-bold text-white dark:text-white mb-6"
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 0.8s ease 400ms",
          }}
        >
          <span className="block text-3xl sm:text-4xl mt-2 text-white/90 dark:text-white/90">
            Seeking Frontend Engineer Roles
          </span>
        </h2>

        {/* Description */}
        <p
          className="text-lg sm:text-xl text-white/90 dark:text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 0.8s ease 600ms",
          }}
        >
          Experienced Frontend Engineer with 4.7+ years in React, TypeScript, and modern frontend development. Looking for full-time opportunities where
          I can build scalable applications and contribute to innovative teams.
        </p>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 0.8s ease 800ms",
          }}
        >
          <a
            href="mailto:avsakhil11@gmail.com"
            target="_blank"
            className="group inline-flex items-center gap-2 bg-white dark:bg-white text-(--accent-color) px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl dark:shadow-black/20"
            onMouseEnter={() => setIsHovered("cta-email")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <FaEnvelopeOpenText size={20} />
            <span>Discuss Opportunities</span>
            <span
              className={`transition-all duration-300 ${isHovered === "cta-email" ? "translate-x-1" : ""}`}
            >
              →
            </span>
          </a>
          <a
            href="https://linkedin.com/in/akhil11verma"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-white/20 dark:bg-black/20 backdrop-blur-md text-white dark:text-white border-2 border-white/30 dark:border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-white/30 dark:hover:bg-black/30 hover:border-white/50 dark:hover:border-white/30 hover:-translate-y-1"
            onMouseEnter={() => setIsHovered("cta-linkedin")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <FaLinkedin size={20} />
            <span>Connect on LinkedIn</span>
            <span
              className={`transition-all duration-300 ${isHovered === "cta-linkedin" ? "translate-x-1" : ""}`}
            >
              →
            </span>
          </a>
        </div>

        {/* Status */}
        <div
          className="mt-8 text-white/80 dark:text-white/80 text-sm"
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 0.8s ease 1000ms",
          }}
        >
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-400 dark:bg-green-400 rounded-full animate-pulse"></span>
            <span>
              Actively seeking full-time Frontend Engineer positions • Immediate
              availability
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
