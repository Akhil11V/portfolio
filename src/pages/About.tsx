import { useEffect, useMemo, useRef, useState } from "react";

const About = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set([
      "skills",
      "personal-projects",
      "education",
      "certifications",
      "journey",
    ]),
  );
  const [animatedSkills, setAnimatedSkills] = useState<Set<number>>(
    new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  );
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const skills = useMemo(
    () => [
      { name: "JavaScript", level: 90, category: "Languages" },
      { name: "TypeScript", level: 85, category: "Languages" },
      { name: "HTML5 & CSS3", level: 90, category: "Languages" },
      { name: "React", level: 90, category: "Frontend Frameworks" },
      { name: "Material UI", level: 85, category: "Frontend Frameworks" },
      { name: "Ant Design", level: 80, category: "Frontend Frameworks" },
      { name: "Redux Toolkit", level: 85, category: "State Management" },
      { name: "Context API", level: 85, category: "State Management" },
      { name: "Vite & Webpack", level: 80, category: "Tools" },
      { name: "Git & GitHub", level: 90, category: "Tools" },
      { name: "Jira & Figma", level: 85, category: "Tools" },
      { name: "React Testing Library", level: 80, category: "Testing" },
      { name: "Jest", level: 80, category: "Testing" },
    ],
    [],
  );

  const education = useMemo(
    () => [
      {
        degree: "B.Tech in Computer Science and Engineering",
        field: "Computer Science Engineering",
        institution: "KIET Group of Institutions, Ghaziabad",
        period: "2017 - 2021",
        description: "Focus on software engineering, data structures, and web technologies.",
        coursework: [
          "Data Structures & Algorithms",
          "Web Development",
          "Software Engineering",
          "Database Management",
        ],
        achievements: [
          "Developed core programming skills",
          "Built foundational knowledge in computer science",
        ],
      },
    ],
    [],
  );

  const personalProjects = useMemo(
    () => [
      {
        title: "LDGERS",
        description:
          "A scalable financial operations platform for enterprise restaurant management systems.",
        technologies: ["React", "JavaScript", "TypeScript", "Redux Toolkit", "Material UI", "Vite"],
        features: [
          "Cash-up system across 50+ outlets",
          "Procurement (PR & PO) modules",
          "Pay Desk automation",
          "Insights Dashboard",
          "Automated PDF generation (EJS & Puppeteer)"
        ],
        challenges: [
          "Integrating third-party APIs (Xero, EPOS)",
          "Reducing reconciliation errors by 40%",
        ],
        liveUrl: "#",
      },
      {
        title: "Maya SVM",
        description:
          "Healthcare application used by Auxiliary Nurse Midwives (ANMs) for rural health surveys.",
        technologies: ["React", "JavaScript", "TypeScript", "Redux Toolkit", "ApexCharts"],
        features: [
          "Dynamic dashboards for state-level data visualization",
          "Third-party lab API integration for test ordering",
          "Translation & localization for multiple languages",
        ],
        challenges: [
          "Ensuring accessibility for varied rural regions",
          "Handling complex localized content",
        ],
        liveUrl: "#",
      },
      {
        title: "HRMS",
        description:
          "Human Resource Management System focusing on hiring, onboarding, attendance, and payroll.",
        technologies: ["React", "TypeScript", "Redux Toolkit", "Material UI", "EJS", "Puppeteer"],
        features: [
          "Reusable React components for core HR modules",
          "Integration of insurance and e-bikes features",
          "Automated PDF generation",
        ],
        challenges: [
          "Supporting diverse overall system functionality",
        ],
        liveUrl: "#",
      },
      {
        title: "iBASEt",
        description:
          "Manufacturing platform integrating real-time data across production and quality operations.",
        technologies: ["React", "TypeScript", "Redux Toolkit", "Material UI"],
        features: [
          "Frontend modules for manufacturing workflows",
          "Improved operational visibility",
        ],
        challenges: [
          "Real-time data integration across operations",
        ],
        liveUrl: "#",
      },
    ],
    [],
  );

  const certifications = useMemo(
    () => [
      {
        name: "Kudos Recognition (LDGERS Project)",
        issuer: "Daffodil Software",
        year: "2025",
        credentialId: "",
        details:
          "Recognized for outstanding performance and impactful contributions.",
      },
      {
        name: "Client Appreciation Letter (Maya SVM Project)",
        issuer: "Daffodil Software",
        year: "2023",
        credentialId: "",
        details:
          "Received for exceeding expectations and delivering a high volume of features under tight deadlines.",
      },
    ],
    [],
  );

  const journey = useMemo(
    () => [
      {
        year: "2017",
        title: "Started Engineering Journey",
        description:
          "Began Bachelor's degree in Computer Science and Engineering at KIET Group of Institutions.",
        milestone: "Academic Foundation",
      },
      {
        year: "2021",
        title: "Graduation & First Job",
        description:
          "Completed B.Tech and joined Daffodil Software Pvt. Ltd. as an Associate Software Engineer.",
        milestone: "Career Launch",
      },
      {
        year: "Present",
        title: "Senior Frontend Engineer",
        description:
          "Building scalable operations platforms, leading feature developments, and optimizing enterprise applications.",
        milestone: "Professional Growth",
      },
    ],
    [],
  );

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));

            // Animate skill bars when skills section is visible
            if (entry.target.id === "skills") {
              skills.forEach((_, index) => {
                setTimeout(() => {
                  setAnimatedSkills((prev) => new Set(prev).add(index));
                }, index * 100);
              });
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [skills]);

  return (
    <div className="bg-(--bg-primary) min-h-screen">
      {/* Hero Section */}
      <section className="p-4 pt-2 sm:px-6 md:px-8 lg:px-12 bg-linear-to-br from-(--bg-primary) to-(--bg-secondary) relative overflow-hidden">
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-(--accent-bg) rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-(--accent-bg) rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-(--text-h)">
            About My Journey
          </h1>
          <div className="text-(--text-secondary) leading-relaxed max-w-3xl mx-auto text-lg mb-8">
            A detailed look at my technical expertise, educational background,
            and the projects that shaped my development career.
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Akhil_Verma_Resume.pdf"
              className="inline-flex items-center gap-2 bg-linear-to-r from-(--accent) to-(--primary-color) text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <span>📄</span>
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-12">
        {/* Journey Timeline */}
        <section
          className={`transition-all duration-700 ${visibleSections.has("journey") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          id="journey"
          ref={(el) => {
            sectionRefs.current["journey"] = el;
          }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-(--accent) to-(--primary-color) bg-clip-text text-transparent mb-6">
              My Development Journey
            </h2>
            <div className="text-(--text-secondary) text-lg max-w-3xl mx-auto leading-relaxed">
              Key milestones and experiences that shaped my technical career
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-(--border) hidden md:block"></div>
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-(--border) md:hidden"></div>
            {journey.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  } justify-start`}
              >
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0
                    ? "md:text-right md:pr-8 text-left pl-16 md:pl-0"
                    : "md:text-left md:pl-8 text-left pl-16 md:order-2"
                    }`}
                >
                  <div className="bg-(--bg-card) border border-(--border) rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-(--accent) font-bold text-sm mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-(--text-h) mb-2">
                      {item.title}
                    </h3>
                    <p className="text-(--text-secondary) mb-2">
                      {item.description}
                    </p>
                    <span className="inline-block bg-(--accent-bg) text-(--accent) px-3 py-1 rounded-full text-sm font-medium">
                      {item.milestone}
                    </span>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-(--accent) rounded-full border-4 border-(--bg-primary) z-10"></div>
                <div
                  className={`hidden md:block md:w-5/12 ${index % 2 === 0
                    ? "md:pl-8 md:order-3"
                    : "md:pr-8 md:order-1"
                    }`}
                ></div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section
          className={`transition-all duration-700 ${visibleSections.has("skills") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} mt-16`}
          id="skills"
          ref={(el) => {
            sectionRefs.current["skills"] = el;
          }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-(--accent) to-(--primary-color) bg-clip-text text-transparent mb-6">
              Technical Skills Deep Dive
            </h2>
            <div className="text-(--text-secondary) text-lg max-w-3xl mx-auto leading-relaxed">
              Comprehensive skill assessment with proficiency levels and
              practical experience
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(
              skills.reduce(
                (acc, skill) => {
                  if (!acc[skill.category]) acc[skill.category] = [];
                  acc[skill.category].push(skill);
                  return acc;
                },
                {} as Record<string, typeof skills>,
              ),
            ).map(([category, categorySkills]) => (
              <div key={category} className="group relative">
                <div className="absolute inset-0 bg-linear-to-r from-(--accent) to-(--primary-color) rounded-2xl opacity-0 transition-opacity duration-300"></div>
                <div className="relative bg-(--bg-card) border border-(--border) rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-(--text-h)">
                      {category}
                    </h3>
                    <div className="bg-(--accent-bg) text-(--accent) p-2 rounded-full text-xs font-semibold">
                      {categorySkills.length} skills
                    </div>
                  </div>

                  <div className="space-y-6">
                    {categorySkills.map((skill, index) => {
                      const globalIndex = skills.indexOf(skill);
                      return (
                        <div key={index} className="group/skill">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-(--accent) rounded-full opacity-60 group-hover/skill:opacity-100 transition-opacity"></div>
                              <span className="font-semibold text-(--text-h) text-base group-hover/skill:text-(--accent) transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-(--accent) bg-(--accent-bg) px-3 py-1 rounded-lg min-w-15 text-center">
                                {skill.level}%
                              </span>
                            </div>
                          </div>

                          <div className="relative">
                            <div className="h-1.5 bg-(--bg-secondary) rounded-full overflow-hidden">
                              <div
                                className="h-full bg-linear-to-r from-(--accent) via-(--primary-color) to-(--accent) rounded-full transition-all duration-1500 ease-out relative"
                                style={{
                                  width: animatedSkills.has(globalIndex)
                                    ? `${skill.level}%`
                                    : "0%",
                                }}
                              >
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                              </div>
                            </div>

                            <div className="flex justify-between items-center mt-2">
                              <span
                                className={`text-xs font-medium ${skill.level >= 90
                                  ? "text-green-500"
                                  : skill.level >= 75
                                    ? "text-blue-500"
                                    : skill.level >= 60
                                      ? "text-yellow-500"
                                      : "text-gray-500"
                                  }`}
                              >
                                {skill.level >= 90
                                  ? "Expert"
                                  : skill.level >= 75
                                    ? "Advanced"
                                    : skill.level >= 60
                                      ? "Intermediate"
                                      : "Familiar"}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Projects Section */}
        <section
          className={`transition-all duration-700 ${visibleSections.has("personal-projects") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} mt-12`}
          id="personal-projects"
          ref={(el) => {
            sectionRefs.current["personal-projects"] = el;
          }}
        >
          <div className="text-center mb-6">
            <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-(--accent) to-(--primary-color) bg-clip-text text-transparent mb-6">
              Professional Projects Portfolio
            </h2>
            <div className="text-(--text-secondary) text-lg max-w-3xl mx-auto leading-relaxed">
              In-depth look at professional projects showcasing technical challenges
              and solutions
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-linear-to-r from-(--accent) to-(--primary-color) rounded-2xl opacity-0 transition-opacity duration-300"></div>
                <div className="relative bg-(--bg-card) border border-(--border) rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-(--text-h)">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {/* <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-(--text-secondary) hover:text-(--accent) transition-colors duration-200"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a> */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-(--text-secondary) hover:text-(--accent) transition-colors duration-200"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p className="text-(--text-secondary) leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-(--text-h) mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-(--accent-bg) text-(--accent) px-3 py-1 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-(--text-h) mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-(--text-secondary) text-sm flex items-start gap-3"
                        >
                          <span className="text-green-500 mt-1 shrink-0">
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-(--text-h) mb-3">
                      Technical Challenges:
                    </h4>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, challengeIndex) => (
                        <li
                          key={challengeIndex}
                          className="text-(--text-secondary) text-sm flex items-start gap-3"
                        >
                          <span className="text-yellow-500 mt-1 shrink-0">
                            ⚡
                          </span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section
          className={`transition-all duration-700 ${visibleSections.has("education") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} mt-8`}
          id="education"
          ref={(el) => {
            sectionRefs.current["education"] = el;
          }}
        >
          <div className="text-center mb-6">
            <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-(--accent) to-(--primary-color) bg-clip-text text-transparent mb-6">
              Educational Background
            </h2>
            <div className="text-(--text-secondary) text-lg max-w-3xl mx-auto leading-relaxed">
              Academic foundation and continuous learning journey
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-linear-to-r from-(--accent) to-(--primary-color) rounded-2xl opacity-0 transition-opacity duration-300"></div>
                <div className="relative bg-(--bg-card) border border-(--border) rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl mb-4 text-center">🎓</div>
                  <h3 className="text-xl font-bold text-(--text-h) mb-2">
                    {edu.degree}
                  </h3>
                  <div className="text-(--text-secondary) mb-2">
                    {edu.field}
                  </div>
                  <div className="text-(--accent) font-semibold mb-2">
                    {edu.institution}
                  </div>
                  <div className="text-(--text-secondary) text-sm mb-4">
                    {edu.period}
                  </div>
                  <div className="text-(--text-secondary) text-sm font-medium mb-4">
                    {edu.description}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-(--text-h) mb-2">
                      Key Coursework:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="bg-(--bg-secondary) text-(--text-secondary) px-2 py-1 rounded text-xs"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-(--text-h) mb-2">
                      Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="text-(--text-secondary) text-sm flex items-start gap-2"
                        >
                          <span className="text-green-500 mt-1 shrink-0">
                            ✓
                          </span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section
          className={`transition-all duration-700 ${visibleSections.has("certifications") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} my-6`}
          id="certifications"
          ref={(el) => {
            sectionRefs.current["certifications"] = el;
          }}
        >
          <div className="text-center mb-6">
            <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-(--accent) to-(--primary-color) bg-clip-text text-transparent mb-6">
              Achievements & Recognition
            </h2>
            <div className="text-(--text-secondary) text-lg max-w-3xl mx-auto leading-relaxed">
              Professional recognitions and impactful contributions
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-linear-to-r from-(--accent) to-(--primary-color) rounded-2xl opacity-0 transition-opacity duration-300"></div>
                <div className="relative bg-(--bg-card) border border-(--border) rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-lg font-bold text-(--text-h) mb-2">
                    {cert.name}
                  </h3>
                  <div className="text-(--accent) font-semibold mb-2">
                    {cert.issuer}
                  </div>
                  <div className="text-(--text-secondary) text-sm mb-3">
                    {cert.year}
                  </div>
                  <p className="text-(--text-secondary) text-xs leading-relaxed mb-3">
                    {cert.details}
                  </p>
                  {cert.credentialId && (
                    <div className="text-(--text-secondary) text-xs font-mono bg-(--bg-secondary) px-3 py-2 rounded-lg">
                      ID: {cert.credentialId}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
