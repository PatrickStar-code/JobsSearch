import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { ClienteContextProvider } from "./Contexts/Cliente.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClienteContextProvider>
      <App />
    </ClienteContextProvider>
  </React.StrictMode>
);
