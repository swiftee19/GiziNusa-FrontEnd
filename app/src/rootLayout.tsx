import { Outlet } from "react-router-dom";
import Sidebar from "./components/general/sidebar/sidebar";

export default function RootLayout() {
  return (
    <>
      <div className="flex p-0 m-0 min-h-screen min-w-[100vw]">
        <Sidebar />
        <main className="flex-1 bg-offwhite">
          <Outlet />
        </main>
      </div>
    </>
  );
}
