import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import MainPages from "./pages/MainPages";
import DetailSuratPage from "./pages/DetailSuratPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPages />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/DetailSurat/:nomor",
    element: <DetailSuratPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
