import type { ComponentType } from "react";

export interface RouteConfig {
  path: string;
  label: string;
  icon: string;
  component: ComponentType;
  exact?: boolean;
  requireAuth?: boolean;
  meta?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export interface NavigationItem {
  path: string;
  label: string;
  icon: string;
  exact?: boolean;
}
