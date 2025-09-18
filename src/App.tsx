import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">
            ChatMe UI Library
          </h1>
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-blue-500 text-white">
              Live Demo
            </button>
          </div>
        </div>
      </nav>

      <div className="h-[calc(100vh-56px)] overflow-hidden">
        <HomePage />
      </div>
    </>
  );
}

export default App;
