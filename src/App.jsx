import Tooltip from "./components/Tooltip"; // Import the Tooltip component

function App() {
  return (
    // Center the content vertically and horizontally using flexbox
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Tooltip component with position set to 'right' and custom text */}
      <Tooltip position="right" text="Thanks for hovering! I'm a tooltip">
        {/* Button inside the Tooltip component with Tailwind CSS classes for styling */}
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded">
          Hover over me!
        </button>
      </Tooltip>
    </div>
  );
}

export default App; // Export the App component as the default export
