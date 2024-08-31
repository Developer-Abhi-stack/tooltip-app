


# React Tooltip Component

This is a simple React application that includes a customizable tooltip component built using React and Tailwind CSS. The tooltip appears when the user hovers over a button and can be positioned to the top, bottom, left, or right of the element.

## Features

- **Positioning**: The tooltip can be positioned on any side of the element (top, bottom, left, or right).
- **Hover Trigger**: The tooltip appears when the user hovers over the button.
- **Responsive Design**: The application is responsive and adjusts to different screen sizes.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Developer-Abhi-stack/tooltip-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tooltip-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The application should now be running on `http://localhost:5174`.

## Usage

The tooltip component (`Tooltip`) accepts the following props:

- **position** (`string`): The position of the tooltip relative to the child element. Can be `top`, `bottom`, `left`, or `right`.
- **text** (`string`): The text content to be displayed inside the tooltip.
- **children** (`ReactNode`): The child element that triggers the tooltip on hover.

### Example

Here's an example of how to use the `Tooltip` component in my application:

```jsx
import React from "react";
import Tooltip from "./components/Tooltip";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Tooltip position="right" text="Thanks for hovering! I'm a tooltip">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded">
          Hover over me!
        </button>
      </Tooltip>
    </div>
  );
}

export default App;
```

In this example, the tooltip is positioned to the right of the button, and it displays the text "Thanks for hovering! I'm a tooltip" when the user hovers over the button.

## Customization

You can easily customize the appearance of the tooltip by modifying the Tailwind CSS classes in the `Tooltip` component. For example, you can change the background color, text color, padding, and more.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
```

### Explanation:
- **Installation and Usage Instructions**: This section guides users through cloning the repository, installing dependencies, and starting the development server.
- **Props Explanation**: Details about the `Tooltip` component's props are provided to help users understand how to use and customize it.
- **Customization**: Encourages users to modify Tailwind CSS classes to style the tooltip as desired.
- **License**: Includes a placeholder for licensing information.