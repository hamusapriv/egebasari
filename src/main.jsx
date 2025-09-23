import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GoogleAuthProvider from "./auth/GoogleAuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleAuthProvider>
      <App />
    </GoogleAuthProvider>
  </StrictMode>
);
