import {
  FaReact,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaRocket,
  FaFileAlt,
  FaCog,
  FaMobileAlt,
  FaBolt,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact as FaReactIcon } from "react-icons/fa";

// Import components
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import ProfessionalExperience from "../components/ProfessionalExperience";
import TechnicalExpertise from "../components/TechnicalExpertise";

const Home = () => {
  const skills = [
    { name: "HTML5", icon: <FaReact style={{ color: "#E34F26" }} /> },
    { name: "CSS3", icon: <SiTypescript style={{ color: "#1572B6" }} /> },
    { name: "JavaScript", icon: <FaGitAlt style={{ color: "#F7DF1E" }} /> },
    { name: "React", icon: <FaReactIcon style={{ color: "#61DAFB" }} /> },
    { name: "Redux", icon: <FaGitAlt style={{ color: "#764ABC" }} /> },
    { name: "TypeScript", icon: <FaDocker style={{ color: "#3178C6" }} /> },
    { name: "Tailwind CSS", icon: <FaAws style={{ color: "#06B6D4" }} /> },
    { name: "Vite", icon: <FaBolt style={{ color: "#646CFF" }} /> },
    { name: "Jest", icon: <FaReact style={{ color: "#C21325" }} /> },
    { name: "Figma", icon: <FaGitAlt style={{ color: "#F24E1E" }} /> },
    { name: "Material UI", icon: <FaReact style={{ color: "#007FFF" }} /> },
    { name: "Redux Toolkit", icon: <FaRocket style={{ color: "#764ABC" }} /> },
  ];

  const stats = [
    {
      number: "4.7+",
      label: "Years Experience",
      icon: <FaRocket style={{ color: "#FF6B6B" }} />,
      description: "Software Development",
    },
    {
      number: "40%",
      label: "Reconciliation Error Reduction",
      icon: <FaFileAlt style={{ color: "#4A90E2" }} />,
      description: "Efficiency Boost",
    },
    {
      number: "30%",
      label: "Workflow Efficiency",
      icon: <FaMobileAlt style={{ color: "#3880FF" }} />,
      description: "Process Automation",
    },
    {
      number: "50+",
      label: "Outlets Monitored",
      icon: <FaReact style={{ color: "#61DAFB" }} />,
      description: "Scalability",
    },
  ];

  const professionalExperience = [
    {
      company: "Daffodil Software Pvt. Ltd.",
      position: "Associate Software Engineer",
      duration: "Aug 2021 - Present",
      location: "Gurugram, Haryana",
      type: "Full-time",
      description:
        "Senior Frontend Engineer with 4.7 years of experience building scalable and high-performance web applications.",
      achievements: [
        "Designed and developed scalable web applications using React, TypeScript, Redux Toolkit, and Material UI.",
        "Built reusable React components using React Hooks and modular component architecture.",
        "Integrated REST APIs and managed complex application state using Redux Toolkit and asynchronous data handling.",
        "Improved application maintainability and scalability through code reviews, reusable component architecture, and frontend best practices.",
        "Collaborated with product managers, clients, and backend teams in Agile development cycles.",
        "Improved frontend performance through optimized rendering, memoization, and efficient state management."
      ],
      technologies: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Material UI",
        "Vite",
        "Git"
      ],
      projects: ["LDGERS", "Maya SVM", "HRMS", "iBASEt"],
    }
  ];

  return (
    <div className="bg-(--bg-primary)">
      <HeroSection skills={skills} />
      <StatsSection stats={stats} />
      <ProfessionalExperience
        professionalExperience={professionalExperience}
      />
      <TechnicalExpertise
        expertiseData={[
          {
            category: "Frontend Development",
            text: "Expert in React, TypeScript, and modern JavaScript. Strong experience with responsive design, state management, and performance optimization.",
            technologies: "React, TypeScript, Redux, Tailwind CSS",
            role: "Core Technologies",
            icon: <FaReactIcon style={{ color: "#61DAFB" }} />,
          },
          {
            category: "UI/UX & Performance",
            text: "Focused on delivering highly optimized, accessible, and pixel-perfect user interfaces with smooth animations and responsive design.",
            technologies: "Material UI, Ant Design, Styled Components, Chrome DevTools",
            role: "User Experience",
            icon: <FaRocket style={{ color: "#E34F26" }} />,
          },
          {
            category: "Tools & Technologies",
            text: "Experience with Git, Docker, AWS, and CI/CD pipelines. Proficient in agile development methodologies and testing frameworks.",
            technologies: "Git, Docker, AWS, Jenkins",
            role: "Development Tools",
            icon: <FaCog style={{ color: "#6C757D" }} />,
          },
        ]}
      />
      {/* <CTASection isHovered={isHovered} setIsHovered={setIsHovered} /> */}
    </div>
  );
};

export default Home;
