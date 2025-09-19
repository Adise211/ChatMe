import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import { Switch } from "@/components/ui/switch";
import useIsMobile from "./hooks/useIsMobile";

function App() {
  const [isMobileView, setIsMobileView] = useState(false);
  const isScreenIsMobile = useIsMobile();
  useEffect(() => {
    setIsMobileView(isScreenIsMobile);
  }, [isScreenIsMobile]);

  return (
    <>
      {!isScreenIsMobile && (
        <>
          <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 px-4 py-2">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-gray-800">
                ChatMe UI Library
              </h1>
              <div className="flex space-x-4 items-center">
                <button className="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-blue-500 text-white">
                  Live Demo
                </button>
                <label htmlFor="mobile-view" className="text-sm font-medium">
                  Mobile View
                </label>
                <Switch
                  id="mobile-view"
                  checked={isMobileView || isScreenIsMobile}
                  onCheckedChange={setIsMobileView}
                />
              </div>
            </div>
          </nav>
        </>
      )}

      <div className="h-[calc(100vh-56px)] overflow-hidden">
        <HomePage isMobileView={isMobileView} />
      </div>
    </>
  );
}

export default App;
