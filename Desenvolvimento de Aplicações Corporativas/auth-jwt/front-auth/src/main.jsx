import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// importa o CSS global
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
