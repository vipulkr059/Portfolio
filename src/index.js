import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Project from "./components/project/Project";
import Skills from "./components/skills/Skills";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "projects/:projectId",
        element: <Project />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
