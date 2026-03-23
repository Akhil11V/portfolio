import Navigation from "./components/Navigation";
import RouteRenderer from "./components/RouteRenderer";
import { useRouteMeta } from "./hooks/useRouteMeta";

function App() {
  useRouteMeta();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex justify-center p-0">
        <div className="w-full max-w-full mx-auto">
          <RouteRenderer />
        </div>
      </main>
    </div>
  );
}

export default App;
