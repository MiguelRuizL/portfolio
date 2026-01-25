import { Outlet } from "react-router-dom";
import { LayoutNavbar } from "../components/Navbar";
import LayoutFooter from "./Footer";
import { useState } from "react";

export default function AppLayout() {
  const [language, setLanguage] = useState("spanish");

  return (
    <div className='min-h-screen w-full bg-gray-100 dark:bg-gray-900'>
      <LayoutNavbar currentLanguage={language} setLanguage={setLanguage} />

      <main className="p-4">
        <Outlet context={{ language }}/>
      </main>
      <LayoutFooter currentLanguage={language}/>
    </div>
  );
}