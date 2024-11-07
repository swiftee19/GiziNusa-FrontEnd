// index.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MealPlansPage from "./pages/mealPlansPage";
import MessagesPage from "./pages/MessagesPage";
import NotFoundPage from "./pages/NotFoundPage";
import RootLayout from "./rootLayout";
import TrackingPage from "./pages/TrackingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage/>,
      },
      {
        path: "/tracking",
        element: <TrackingPage />,
      },
      {
        path: "/messages",
        element: <MessagesPage />,
      },
      {
        path: "/mealplans",
        element: <MealPlansPage />,
      },
      {
        path: "*",
        element: <NotFoundPage/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);