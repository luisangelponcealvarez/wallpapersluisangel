import React from "react";
import ReactDOM from "react-dom/client";
import { Error404 } from "./Components/Error/404.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/*",
    element: <Error404 />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
