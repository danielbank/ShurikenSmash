import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/bangers";
import "@fontsource/rajdhani/500.css";
import "@fontsource/rajdhani/700.css";
import "@fontsource/noto-serif-jp/japanese-900.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
