import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Providers from "./containers/Providers";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers />
    <Toaster />
  </React.StrictMode>
);
