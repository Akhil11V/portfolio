import React from "react";

interface Expertise {
  category: string;
  text: string;
  technologies: string;
  role: string;
  icon: React.ReactNode;
}

interface TechnicalExpertiseProps {
  expertiseData: Expertise[];
  visibleSections?: Set<string>;
}

const TechnicalExpertise: React.FC<TechnicalExpertiseProps> = ({
  expertiseData,
}) => {
  return (
    <section
      id="technical"
      className="p-4 sm:p-6 md:p-8 lg:p-16 py-6 bg-(--bg-secondary) transition-all duration-700 opacity-100 translate-y-0"
    >
      <div
        className="text-center mb-4 transition-all duration-600"
        style={{
          opacity: 1,
          transform: "translateY(0)",
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-(--accent-color) to-(--primary-color) bg-clip-text text-transparent mb-4">
          Technical Expertise
        </h2>
        <div className="text-lg text-(--text-secondary) max-w-2xl mx-auto">
          Core competencies and technical skills
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {expertiseData.map((expertise, index) => (
          <div
            key={index}
            className="bg-(--bg-card) border border-(--border) rounded-xl p-4 sm:p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            style={{
              opacity: 1,
              transform: "translateY(0)",
              transition: `all 0.6s ease ${index * 0.1}s`,
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center text-2xl shrink-0">
                {expertise.icon}
              </div>
              <div className="flex-1">
                <div className="text-lg font-semibold text-(--text-primary) mb-1">
                  {expertise.category}
                </div>
                <div className="text-sm text-(--text-secondary) mb-3">
                  {expertise.role}
                </div>
              </div>
            </div>

            <p className="text-(--text-secondary) leading-relaxed mb-6 text-sm">
              {expertise.text}
            </p>

            <div className="flex flex-wrap gap-2">
              {expertise.technologies.split(", ").map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-linear-to-r from-(--accent-color) to-(--primary-color) text-white px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalExpertise;
