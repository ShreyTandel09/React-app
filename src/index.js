import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the App component

const myFirstElement = <h1>Hell!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myFirstElement);
root.render(<App />);
