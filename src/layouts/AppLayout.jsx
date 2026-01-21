import { Outlet } from "react-router-dom";
import { LayoutNavbar } from "../components/Navbar";
import LayoutFooter from "./Footer";

export default function AppLayout() {
  return (
    <div className='min-h-screen w-full bg-gray-100 dark:bg-gray-900'>
      <LayoutNavbar />

      <main className="p-4">
        <Outlet />
      </main>
      <LayoutFooter />
    </div>
  );
}