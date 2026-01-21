import { useState, useEffect } from "react";
import { MX, US, FR, DE, CN } from 'country-flag-icons/react/3x2';
import { Navbar, NavbarBrand, NavbarToggle } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggleButton from "./ui/ThemeToggleButton";

function LayoutNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        // Si el scroll vertical es mayor a 0, activa estado
        setIsScrolled(window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navbarClasses = isScrolled
      ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm"
      : "bg-white dark:bg-gray-900 border-transparent";

    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { 
            opacity: 1, 
            height: "auto",
            transition: { duration: 0.3, ease: "easeInOut" } 
        }
    };
    
    const NavLinks = () => (
        <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
          <li>
            <a href="#" className="flex items-center gap-2 py-2 pl-3 pr-4 text-white bg-cyan-700 rounded md:bg-transparent md:text-cyan-700 md:p-0 dark:text-white" aria-current="page">
              <MX className="w-5 h-5" /> <span>Español</span>
            </a>
          </li>
          {[
            { Icon: US, label: "English" },
            { Icon: FR, label: "Français" },
            { Icon: DE, label: "Deutsch" },
            { Icon: CN, label: "普通话" },
          ].map(({ Icon, label }) => (
            <li key={label}>
              <a href="#" className="flex items-center gap-2 py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <Icon className="w-5 h-5" /> <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
    );

    return (
        <>
        <Navbar fluid rounded className={`sticky top-0 z-50 transition-all duration-300 ${navbarClasses}`}>
          <NavbarBrand href="/">
              <span className="self-center whitespace-nowrap text-xl font-semibold text-green-600 dark:text-green-400">Portafolio</span>
          </NavbarBrand>
  
          {/* --- MENÚ PARA ESCRITORIO (Visible siempre en md+) ---
          <div className="hidden w-full md:block md:w-auto">
              <NavLinks />
          </div>
  
          <div className="flex md:order-2">
              {/* Toggle para móvil *
              <div className="md:hidden">
              <NavbarToggle onClick={() => setIsOpen(!isOpen)} />
              </div>
          </div>
  
          {/* --- MENÚ PARA MÓVIL (Animado con Framer Motion) --- *
          <div className="w-full md:hidden"> 
              <AnimatePresence>
              {isOpen && (
                  <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuVariants}
                  className="overflow-hidden"
                  >
                  <NavLinks />
                  </motion.div>
              )}
              </AnimatePresence>
          </div> */}
          <div className="flex md:order-2">
            <ThemeToggleButton />
          </div>
        </Navbar>
        </>
    );
}

export { LayoutNavbar };