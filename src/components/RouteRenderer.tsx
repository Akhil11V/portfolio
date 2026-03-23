import { Routes, Route } from "react-router-dom";
import { routeConfig } from "../config/routes";
import type { RouteConfig } from "../types/routes";

const RouteRenderer = () => {
  const renderRoute = (route: RouteConfig) => {
    const Component = route.component;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={<Component />}
      />
    );
  };

  return (
    <Routes>
      {routeConfig.map(renderRoute)}
    </Routes>
  );
};

export default RouteRenderer;
