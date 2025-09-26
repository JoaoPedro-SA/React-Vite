import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppWithProfile } from "./App.jsx";

const rootElement = document.getElementById("root");
const demoElement = document.getElementById("demo");
const button = document.getElementById("alunos");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

button.onclick = () => {
  if (demoElement) {
    createRoot(demoElement).render(
      <StrictMode>
        <AppWithProfile />
      </StrictMode>
    );
  }
};
