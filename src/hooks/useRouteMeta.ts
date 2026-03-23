import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteByPath } from "../config/routes";

export const useRouteMeta = () => {
  const location = useLocation();
  const currentRoute = getRouteByPath(location.pathname);

  useEffect(() => {
    if (currentRoute?.meta) {
      const { title, description, keywords } = currentRoute.meta;

      // Update document title
      if (title) {
        document.title = title;
      }

      // Update meta description
      if (description) {
        const metaDescription = document.querySelector(
          'meta[name="description"]',
        );
        if (metaDescription) {
          metaDescription.setAttribute("content", description);
        } else {
          const meta = document.createElement("meta");
          meta.name = "description";
          meta.content = description;
          document.head.appendChild(meta);
        }
      }

      // Update meta keywords
      if (keywords && keywords.length > 0) {
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
          metaKeywords.setAttribute("content", keywords.join(", "));
        } else {
          const meta = document.createElement("meta");
          meta.name = "keywords";
          meta.content = keywords.join(", ");
          document.head.appendChild(meta);
        }
      }
    }
  }, [currentRoute]);

  return currentRoute;
};
