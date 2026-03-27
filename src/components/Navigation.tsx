import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getNavigationItems } from "../config/routes";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return (
      localStorage.getItem("darkMode") === "true" ||
      (!localStorage.getItem("darkMode") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const getIcon = (iconString: string) => {
    switch (iconString) {
      case "🏠":
        return <FaHome style={{ color: "#8B5CF6" }} />;
      case "👤":
        return <FaUser style={{ color: "#3B82F6" }} />;
      case "💼":
        return <FaBriefcase style={{ color: "#10B981" }} />;
      case "📧":
        return <FaEnvelope style={{ color: "#EF4444" }} />;
      default:
        return iconString;
    }
  };

  const navItems = getNavigationItems();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    // Set initial theme on mount
    const savedTheme = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldBeDark = savedTheme === "true" || (!savedTheme && prefersDark);

    if (shouldBeDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("darkMode")) {
        // Only auto-update if user hasn't manually set a preference
        const newTheme = e.matches ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`flex justify-between items-center py-2 px-4 sm:px-6 lg:px-8 border-b border-(--border) bg-(--bg) sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-opacity-80 shadow-lg" : "backdrop-blur-none"}`}
      >
        <div className="flex justify-between items-center w-full max-w-281.5 mx-auto">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-(--text-h) no-underline transition-all duration-300 p-2 px-3 sm:px-4 rounded-lg hover:bg-(--social-bg) hover:-translate-y-0.5"
              onClick={closeMobileMenu}
            >
              <span className="text-[1.5rem] sm:text-[1.8rem] transition-transform duration-300 group-hover:rotate-10 group-hover:scale-110">
                💻
              </span>
              <span className="font-bold bg-linear-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent hidden sm:inline">
                Burle Vineeth
              </span>
              <span className="font-bold bg-linear-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent sm:hidden">
                BV
              </span>
            </Link>
          </div>

          <button
            className="sm:hidden bg-none border-none cursor-pointer p-2 rounded-lg transition-all duration-300 z-1001 hover:bg-(--social-bg)"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block relative w-6 h-5 ${isMobileMenuOpen ? "active" : ""}`}
            >
              <span
                className={`block absolute h-0.5 w-full bg-(--text) rounded-sm opacity-100 left-0 transition-all duration-300 ${isMobileMenuOpen ? "top-2 rotate-45" : "top-0 rotate-0"}`}
              ></span>
              <span
                className={`block absolute h-0.5 w-full bg-(--text) rounded-sm opacity-100 left-0 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 left-0" : "top-2"}`}
              ></span>
              <span
                className={`block absolute h-0.5 w-full bg-(--text) rounded-sm opacity-100 left-0 transition-all duration-300 ${isMobileMenuOpen ? "top-2 -rotate-45" : "top-4"}`}
              ></span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden sm:flex list-none m-0 p-0 gap-2 items-center">
            <li className="relative">
              <button
                className="flex items-center gap-2 text-(--text) bg-none border-none p-2 sm:p-3 px-3 sm:px-5 rounded-xl cursor-pointer font-medium transition-all duration-300 relative overflow-hidden hover:text-(--text-h) hover:bg-(--social-bg) hover:-translate-y-0.5 hover:shadow-lg"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                <span className="text-[1.2rem] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-180">
                  {isDarkMode ? (
                    <FaSun style={{ color: "#F59E0B" }} />
                  ) : (
                    <FaMoon style={{ color: "#6366F1" }} />
                  )}
                </span>
                <span className="font-semibold hidden lg:inline">
                  {isDarkMode ? "Light" : "Dark"}
                </span>
              </button>
            </li>
            {navItems.map((item, index) => (
              <li
                key={item.path}
                className="nav-item"
                style={{ "--item-index": index } as React.CSSProperties}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 text-(--text) no-underline font-medium p-2 sm:p-3 px-3 sm:px-5 rounded-xl transition-all duration-300 relative overflow-hidden hover:text-(--text-h) hover:bg-(--social-bg) hover:-translate-y-0.5 hover:shadow-lg ${location.pathname === item.path ? "text-(--accent) bg-(--accent-bg) border border-(--accent-border) shadow-md" : ""}`}
                >
                  <span className="text-[1.2rem] transition-transform duration-300">
                    {getIcon(item.icon)}
                  </span>
                  <span className="font-semibold hidden md:inline">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
            <li className="relative">
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Akhil_Verma_Resume.pdf"
                className="flex items-center gap-2 text-white bg-linear-to-r from-(--accent) to-(--primary-color) no-underline font-medium p-2 sm:p-3 px-3 sm:px-5 rounded-xl transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg"
                title="Download your resume"
              >
                <span className="text-[1.2rem] transition-transform duration-300">
                  <FaDownload style={{ color: "white" }} />
                </span>
                <span className="font-semibold hidden md:inline">Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-(--bg) border-l border-(--border) shadow-2xl transform transition-transform duration-300 ease-in-out z-1000 sm:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-(--border) bg-(--bg-secondary)">
            <div className="flex items-center gap-2">
              <span className="text-[1.8rem]">💻</span>
              <span className="font-bold bg-linear-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                Burle Vineeth
              </span>
            </div>
            <button
              className="bg-(--bg-card) border border-(--border) cursor-pointer p-2 rounded-lg transition-all duration-300 hover:bg-(--bg-secondary) hover:border-(--border) shadow-sm"
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <span className="text-[1.5rem] text-(--text)">
                <FaTimes style={{ color: "currentColor" }} />
              </span>
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="list-none m-0 p-0 space-y-3">
              <li className="relative">
                <button
                  className="w-full flex items-center gap-3 text-(--text) bg-(--bg-secondary) border border-(--border) p-4 rounded-xl cursor-pointer font-medium transition-all duration-300 relative overflow-hidden hover:text-(--text-h) hover:bg-(--accent-bg) hover:border-(--accent-border) hover:-translate-y-0.5 hover:shadow-lg"
                  onClick={toggleDarkMode}
                  aria-label="Toggle dark mode"
                >
                  <span className="text-[1.3rem] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-180">
                    {isDarkMode ? (
                      <FaSun style={{ color: "#F59E0B" }} />
                    ) : (
                      <FaMoon style={{ color: "#6366F1" }} />
                    )}
                  </span>
                  <span className="font-semibold text-(--text)">
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </span>
                </button>
              </li>
              {navItems.map((item, index) => (
                <li
                  key={item.path}
                  className="nav-item"
                  style={{ "--item-index": index } as React.CSSProperties}
                >
                  <Link
                    to={item.path}
                    className={`w-full flex items-center gap-3 text-(--text) bg-(--bg-card) border border-(--border) no-underline font-medium p-4 rounded-xl transition-all duration-300 relative overflow-hidden hover:text-(--text-h) hover:bg-(--social-bg) hover:border-(--accent-border) hover:-translate-y-0.5 hover:shadow-lg ${location.pathname === item.path ? "text-(--accent) bg-(--accent-bg) border-(--accent-border) shadow-md" : ""}`}
                    onClick={closeMobileMenu}
                  >
                    <span className="text-[1.3rem] transition-transform duration-300">
                      {getIcon(item.icon)}
                    </span>
                    <span className="font-semibold text-(--text)">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-(--border) bg-(--bg-secondary)">
            <div className="text-center text-(--text-secondary) text-sm font-medium">
              <p>© 2024 Burle Vineeth</p>
              <p className="mt-1 text-(--accent)">Frontend Engineer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-999 sm:hidden animate-fadeIn"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navigation;
