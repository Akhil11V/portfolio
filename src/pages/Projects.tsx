import { useState, useMemo, useEffect } from "react";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(new Set());

  const projectsData = useMemo(
    () => [
      {
        title: "LDGERS",
        description:
          "A scalable financial operations platform for enterprise restaurant management systems.",
        technologies: ["React", "TypeScript", "Redux Toolkit", "Material UI", "Vite"],
        features: [
          "Cash-up system for 50+ outlets",
          "Procurement (PR & PO)",
          "Pay Desk automation",
          "Insights Dashboard",
          "Automated PDF generation (EJS & Puppeteer)",
          "Third-party system integration (Xero, EPOS)",
        ],
        link: "#",
        category: "Web",
      },
      {
        title: "Maya SVM",
        description:
          "Healthcare application used by Auxiliary Nurse Midwives (ANMs) for rural health surveys and lab test orderings.",
        technologies: ["React", "JavaScript", "ApexCharts", "REST APIs"],
        features: [
          "Dynamic dashboards for state-level data",
          "Third-party lab API integration",
          "Test ordering and report generation",
          "Translation & localization",
        ],
        link: "#",
        category: "Web",
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
        category: "Web",
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
        category: "Web",
      },
    ],
    [],
  );

  const categories = ["All", "Web", "Mobile", "Full Stack"];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [projectsData, searchTerm, selectedCategory]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = entry.target.getAttribute("data-project-id");
            if (projectId) {
              setVisibleProjects((prev) => new Set(prev).add(projectId));
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    const projectElements = document.querySelectorAll(".project-card");
    projectElements.forEach((el) => observer.observe(el));

    return () => {
      projectElements.forEach((el) => observer.unobserve(el));
    };
  }, [filteredProjects]);

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
            My Projects
          </h1>
          <div className="text-(--text-secondary) leading-relaxed max-w-3xl mx-auto text-lg mb-8">
            Explore my latest work and see how I turn ideas into reality through
            code. From enterprise applications to innovative mobile solutions.
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-12">
        {/* Search and Filter Controls */}
        <section className="mb-8">
          <div className="bg-(--bg-card) border border-(--border) rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search Input */}
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-(--text-secondary)">🔍</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-(--bg-secondary) border border-(--border) rounded-xl text-(--text-h) placeholder-(--text-secondary) focus:outline-none focus:ring-2 focus:ring-(--accent) focus:border-transparent transition-all duration-200"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-(--text-secondary) hover:text-(--accent) transition-colors"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Category Filters */}
              {/* <div className="flex flex-wrap gap-2 items-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${selectedCategory === category
                      ? "bg-linear-to-r from-(--accent) to-(--primary-color) text-white shadow-lg"
                      : "bg-(--bg-secondary) text-(--text-secondary) hover:text-(--text-h) hover:bg-(--accent-bg)"
                      }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div> */}
            </div>

            {/* Results Count */}
            <div className="mt-4 text-(--text-secondary)">
              Showing {filteredProjects.length} of {projectsData.length}{" "}
              projects
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="mb-12">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className={`project-card group relative transition-all duration-700 ${visibleProjects.has(`project-${index}`)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                  data-project-id={`project-${index}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-linear-to-r from-(--accent) to-(--primary-color) rounded-2xl opacity-0 transition-opacity duration-300"></div>
                  <div className="relative bg-(--bg-card) border border-(--border) rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    {/* Project Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-(--accent-bg) text-(--accent) px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </div>
                    </div>

                    {/* Project Title and Description */}
                    <h3 className="text-xl font-bold text-(--text-h) mb-3 group-hover:text-(--accent) transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-(--text-secondary) leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
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

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-(--text-h) mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
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
                        {project.features.length > 3 && (
                          <li className="text-(--text-secondary) text-sm">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Project Links */}
                    {/* <div className="flex gap-3">
                      <a
                        href={project.link}
                        className="flex-1 bg-linear-to-r from-(--accent) to-(--primary-color) text-white px-4 py-2 rounded-lg font-medium text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        className="flex-1 bg-(--bg-secondary) text-(--text-h) border border-(--border) px-4 py-2 rounded-lg font-medium text-center transition-all duration-300 hover:bg-(--accent-bg) hover:text-(--accent)"
                      >
                        GitHub
                      </a>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-(--text-h) mb-2">
                No projects found
              </h3>
              <p className="text-(--text-secondary) mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-linear-to-r from-(--accent) to-(--primary-color) text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Projects;
