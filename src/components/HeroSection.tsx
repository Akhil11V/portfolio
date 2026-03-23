import React, { useState, forwardRef } from "react";
import { FaHandPaper, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface HeroSectionProps {
  skills: Skill[];
}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ skills }, ref) => {
    const [isHovered, setIsHovered] = useState<string | null>(null);

    return (
      <section
        ref={ref}
        id="hero"
        className="py-8 px-4 sm:px-6 md:px-8 lg:px-12 bg-linear-to-br from-(--bg) to-(--bg-secondary) relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-(--accent-bg) rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-(--accent-bg) rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center relative z-10">
          <div className="md:col-span-8">
            <div className="inline-flex items-center gap-2 bg-(--accent-bg) backdrop-blur-md p-2 px-4 rounded-[20px] text-(--accent) text-sm font-medium mb-6 border border-(--accent-border)">
              <FaHandPaper style={{ color: "#FFD700" }} />
              <span>Frontend Engineer</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-(--text-h)">
              Hi, I'm{" "}
              <span className="highlight text-(--accent)">Akhil Verma</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 text-(--text)">
              Senior Frontend Engineer
            </h2>
            <p className="text-(--text-secondary) leading-relaxed mb-6">
              Senior Frontend Engineer with 4.7 years of experience building scalable
              and high-performance web applications using React, TypeScript, JavaScript (ES6+),
              and modern frontend frameworks.
            </p>
            <div className="flex gap-4 mt-8 flex-wrap">
              <a
                href="mailto:avsakhil11@gmail.com"
                target="_blank"
                className="inline-flex items-center gap-2 bg-linear-to-r from-(--accent) to-(--primary-color) text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                onMouseEnter={() => setIsHovered("email")}
                onMouseLeave={() => setIsHovered(null)}
              >
                <span>Get In Touch</span>
                <span className={isHovered === "email" ? "animate-bounce" : ""}>
                  <SiGmail style={{ color: "#EA4335" }} />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/akhil11verma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-(--bg-secondary) text-(--text) border-2 border-(--border) px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-(--accent-bg) hover:text-(--accent) hover:border-(--accent-border) hover:-translate-y-0.5"
                onMouseEnter={() => setIsHovered("linkedin")}
                onMouseLeave={() => setIsHovered(null)}
              >
                <span>LinkedIn</span>
                <span
                  className={isHovered === "linkedin" ? "animate-bounce" : ""}
                >
                  <FaLinkedin style={{ color: "#0077B5" }} />
                </span>
              </a>
            </div>
          </div>
          <div className="flex-col md:col-span-4 items-center justify-center hidden md:block">
            <div className="w-48 h-48 relative flex items-center justify-center mx-auto mb-8">
              <img src="/profile.jpeg" alt="Akhil Verma" className="w-full h-full object-cover rounded-full shadow-2xl relative overflow-hidden ring-4 ring-offset-4 ring-(--accent) dark:ring-offset-(--bg-primary)" />
            </div>
          </div>
        </div>

        <div className="hero-skills mt-8 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-(--text-h) mb-2">
                Technical Stack
              </h3>
              <p className="text-(--text-secondary)">
                Technologies I work with daily
              </p>
            </div>
            <div className="skills-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {skills.map((skill: Skill, index: number) => (
                <div
                  key={index}
                  className="skill-item group bg-(--bg-card) border border-(--border) rounded-xl p-3 sm:p-4 text-center transition-all duration-300 hover:bg-(--accent-bg) hover:border-(--accent-border) hover:shadow-lg hover:-translate-y-2 cursor-pointer"
                  onMouseEnter={() => setIsHovered(`skill-${index}`)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="skill-icon text-2xl sm:text-3xl mb-2 transition-all duration-300 group-hover:scale-110 flex justify-center">
                    {skill.icon}
                  </div>
                  <div className="skill-name text-xs sm:text-sm font-medium text-(--text-h) transition-all duration-300 group-hover:text-(--accent)">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  },
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
