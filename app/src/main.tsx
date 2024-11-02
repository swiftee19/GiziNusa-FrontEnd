// RootLayout.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "./components/general/sidebar/Sidebar";

const RootLayout = () => {
  return (
    <div className="flex p-0 m-0 min-h-screen min-w-[100vw]">
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

// index.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MealPlansPage from "./pages/mealPlansPage";

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