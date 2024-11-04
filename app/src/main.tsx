// index.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MealPlansPage from "./pages/MealPlansPage";
import RootLayout from "./rootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <div>Hello world!</div>,
      },
      {
        path: "/mealplans",
        element: <MealPlansPage />,
      },
      {
        path: "*",
        element: <div>not found</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);