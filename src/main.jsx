import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./Pages/Home/Home.jsx";
import "./index.css";
import ExploreAll from "./Pages/ExploreAll/ExploreAll.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import ProductDetails from "./Pages/ProductDetails/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "explore/all",
        element: <ExploreAll />,
      },
      {
        path: "product/:ptitle/:id",
        element: <ProductDetails />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
