import { useState } from 'react';

// Tooltip component that takes in 'position', 'text', and 'children' as props
const Tooltip = ({ position, text, children }) => {
  // useState hook to manage the visibility of the tooltip
  const [visible, setVisible] = useState(false);

  // Object containing the CSS classes for positioning the tooltip based on the 'position' prop
  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2", // Tooltip appears above the element
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2", // Tooltip appears below the element
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",  // Tooltip appears to the left of the element
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2"   // Tooltip appears to the right of the element
  };

  return (
    // Wrapper div to position the tooltip relative to its child element
    <div 
      className="relative flex items-center justify-center"
      // Set tooltip visibility to true when mouse enters the element
      onMouseEnter={() => setVisible(true)}
      // Set tooltip visibility to false when mouse leaves the element
      onMouseLeave={() => setVisible(false)}
    >
      {/* Conditional rendering: Tooltip is only visible when 'visible' is true */}
      {visible && (
        <div 
          className={`absolute whitespace-no-wrap p-2 bg-red-700 w-40 text-white text-sm rounded ${positionClasses[position]}`}
        >
          {/* Text content inside the tooltip */}
          {text}
        </div>
      )}
      {/* Render the children elements, which are the elements that trigger the tooltip on hover */}
      {children}
    </div>
  );
};

export default Tooltip;
