import React from "react";
import ReactDOM, { Container } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./app/router";

const root = ReactDOM.createRoot(document.getElementById("root") as Container);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// reportWebVitals();
