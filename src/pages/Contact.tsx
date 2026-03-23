import { useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaChevronDown,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validate field on blur
    const fieldErrors = validateForm();
    if (fieldErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched(
        Object.keys(formData).reduce(
          (acc, key) => ({ ...acc, [key]: true }),
          {},
        ),
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Actual form submission using Web3Forms
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "0fae0a9b-df57-490b-8b6a-621672baf045",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTouched({});
        setErrors({});
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const getFieldError = (fieldName: string) => {
    return touched[fieldName] ? errors[fieldName] || "" : "";
  };

  const isFieldInvalid = (fieldName: string) => {
    return !!getFieldError(fieldName);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope style={{ color: "#aa3bff" }} />,
      title: "Email",
      value: "avsakhil11@gmail.com",
      link: "mailto:avsakhil11@gmail.com",
    },
    {
      icon: <FaLinkedin style={{ color: "#0077B5" }} />,
      title: "LinkedIn",
      value: "linkedin.com/in/akhil11verma",
      link: "https://linkedin.com/in/akhil11verma",
    },
    {
      icon: <FaGithub style={{ color: "#333" }} />,
      title: "GitHub",
      value: "https://github.com/Akhil11V",
      link: "https://github.com/Akhil11V",
    },
    {
      icon: <FaMapMarkerAlt style={{ color: "#aa3bff" }} />,
      title: "Location",
      value: "Gurugram, Haryana",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub style={{ color: "#333" }} />,
      link: "https://github.com/Akhil11V",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin style={{ color: "#0077B5" }} />,
      link: "https://linkedin.com/in/akhil11verma",
    },
  ];

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
            Get In Touch
          </h1>
          <div className="text-(--text-secondary) leading-relaxed max-w-3xl mx-auto text-lg mb-8">
            I'm currently open to Software Developer opportunities. Feel free to
            reach out if you'd like to discuss potential roles or
            collaborations!
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-(--text-h) mb-6">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    className="group relative bg-(--bg-card) border border-(--border) rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 block"
                    rel={
                      info.link?.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-(--accent) to-(--primary-color) rounded-2xl opacity-0 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-(--text-h) mb-1">
                          {info.title}
                        </h3>
                        <p className="text-(--text-secondary) text-sm">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links Section */}
            <div>
              <h3 className="text-2xl font-bold text-(--text-h) mb-6">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="group relative bg-(--bg-card) border border-(--border) rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-xl">{social.icon}</div>
                    <span className="font-medium text-(--text-h) group-hover:text-(--accent) transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-(--bg-card) border border-(--border) rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-3xl font-bold text-(--text-h) mb-6">
              Send Me a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-(--text-h) mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-xl border bg-(--bg-primary) text-(--text-h) placeholder-(--text-secondary) transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-(--accent) focus:border-transparent ${isFieldInvalid("name")
                      ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                      : "border-(--border)"
                      }`}
                  />
                  {getFieldError("name") && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {getFieldError("name")}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-(--text-h) mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 rounded-xl border bg-(--bg-primary) text-(--text-h) placeholder-(--text-secondary) transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-(--accent) focus:border-transparent ${isFieldInvalid("email")
                      ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                      : "border-(--border)"
                      }`}
                  />
                  {getFieldError("email") && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {getFieldError("email")}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-(--text-h) mb-2"
                >
                  Subject *
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 rounded-xl border bg-(--bg-primary) text-(--text-h) transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-(--accent) focus:border-transparent appearance-none cursor-pointer pr-10 ${isFieldInvalid("subject")
                      ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                      : "border-(--border)"
                      }`}
                  >
                    <option value="">Select a subject</option>
                    <option value="job">Job Opportunity</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="project">Project Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <FaChevronDown className="w-5 h-5 text-(--text-secondary)" />
                  </div>
                </div>
                {getFieldError("subject") && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {getFieldError("subject")}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-(--text-h) mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={6}
                  required
                  placeholder="Tell me about a potential opportunity or inquiry..."
                  className={`w-full px-4 py-3 rounded-xl border bg-(--bg-primary) text-(--text-h) placeholder-(--text-secondary) transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-(--accent) focus:border-transparent resize-none ${isFieldInvalid("message")
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                    : "border-(--border)"
                    }`}
                />
                {getFieldError("message") && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {getFieldError("message")}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linear-to-r from-(--accent) to-(--primary-color) text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {submitStatus === "success" && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-4 py-3 rounded-xl">
                  ✅ Message sent successfully! I'll get back to you soon
                  regarding your inquiry.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded-xl">
                  ❌ Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
