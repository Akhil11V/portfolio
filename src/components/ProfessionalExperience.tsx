import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaFileAlt } from "react-icons/fa";
import { GoDot } from "react-icons/go";

interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  projects: string[];
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

interface ProfessionalExperienceProps {
  professionalExperience: Experience[];
}

const ProfessionalExperience: React.FC<ProfessionalExperienceProps> = ({
  professionalExperience,
}) => {
  return (
    <section
      id="featured"
      className="pt-6 p-4 sm:p-6 md:p-8 lg:p-16 pb-6 bg-(--bg-primary) transition-all duration-700 opacity-100 translate-y-0"
    >
      <div
        className="text-center mb-12 transition-all duration-600"
        style={{
          opacity: 1,
          transform: "translateY(0)",
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-(--accent-color) to-(--primary-color) bg-clip-text text-transparent mb-4">
          Professional Experience
        </h2>
        <div className="text-lg text-(--text-secondary) max-w-2xl mx-auto">
          My journey as a Frontend Engineer specializing in Angular and
          cross-platform development
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="max-w-7xl mx-auto mb-4">
        {professionalExperience.map((exp, index) => (
          <div
            key={index}
            className="relative mb-6"
            style={{
              opacity: 1,
              transform: "translateY(0)",
              transition: `all 0.6s ease ${index * 0.2}s`,
            }}
          >
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-(--accent-border) hidden sm:block"></div>

            {/* Experience Card */}
            <div className="relative flex items-start gap-4 sm:gap-8">
              {/* Timeline Dot */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-r from-(--accent-color) to-(--primary-color) rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg z-10 shrink-0">
                <FaRocket />
              </div>

              {/* Content */}
              <div className="flex-1 bg-(--bg-card) rounded-xl p-4 sm:p-6 md:p-8 shadow-sm border border-(--border) hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-(--text-primary) mb-2">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-3 text-(--accent) font-semibold mb-2">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="bg-(--accent-bg) text-(--accent) px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                    <span className="text-(--text-secondary) font-medium">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-(--text-secondary) leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-(--text-primary) mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <span className="text-(--accent) mt-1">
                          <GoDot size={8} />
                        </span>
                        <span className="text-(--text-secondary) leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-(--text-primary) mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-linear-to-r from-(--accent-color) to-(--primary-color) text-white px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Related Projects */}
                <div>
                  <h4 className="text-lg font-semibold text-(--text-primary) mb-3">
                    Key Projects
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.projects.map((project, projIndex) => (
                      <span
                        key={projIndex}
                        className="bg-(--bg-secondary) text-(--text-primary) px-4 py-2 rounded-lg text-sm font-medium border border-(--border)"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;
