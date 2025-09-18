import { useState } from "react";
import HomePage from "./pages/HomePage";
import DemoPage from "./pages/DemoPage";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "demo">("demo");

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">
            ChatMe UI Library
          </h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentPage("demo")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === "demo"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              }`}
            >
              Live Demo
            </button>
            <button
              onClick={() => setCurrentPage("home")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === "home"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              }`}
            >
              Development
            </button>
          </div>
        </div>
      </nav>

      <div className="h-[calc(100vh-60px)]">
        {currentPage === "demo" ? <DemoPage /> : <HomePage />}
      </div>
    </>
  );
}

export default App;
