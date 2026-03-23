import type { RouteConfig } from "../types/routes";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export const routeConfig: RouteConfig[] = [
  {
    path: "/",
    label: "Home",
    icon: "🏠",
    component: Home,
    exact: true,
    meta: {
      title: "Home | Akhil Verma",
      description: "Welcome to my portfolio",
      keywords: ["portfolio", "home", "akhil verma"],
    },
  },
  {
    path: "/about",
    label: "About",
    icon: "👤",
    component: About,
    meta: {
      title: "About | Akhil Verma",
      description: "Learn more about me",
      keywords: ["about", "profile", "akhil verma"],
    },
  },
  {
    path: "/projects",
    label: "Projects",
    icon: "💼",
    component: Projects,
    meta: {
      title: "Projects | Akhil Verma",
      description: "View my work and projects",
      keywords: ["projects", "work", "portfolio"],
    },
  },
  {
    path: "/contact",
    label: "Contact",
    icon: "📧",
    component: Contact,
    meta: {
      title: "Contact | Akhil Verma",
      description: "Get in touch with me",
      keywords: ["contact", "email", "reach out"],
    },
  },
];

export const getRouteByPath = (path: string): RouteConfig | undefined => {
  return routeConfig.find((route) =>
    route.exact ? route.path === path : path.startsWith(route.path),
  );
};

export const getNavigationItems = () => {
  return routeConfig.map(({ path, label, icon, exact }) => ({
    path,
    label,
    icon,
    exact,
  }));
};
