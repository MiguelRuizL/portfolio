import { useState, useEffect, useRef } from "react";
import { MX, US, FR, DE, CN } from 'country-flag-icons/react/3x2';
import { Navbar, NavbarBrand, NavbarToggle } from "flowbite-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggleButton from "./ui/ThemeToggleButton";
import { LanguageButton } from "./ui/Buttons";
import { div } from "framer-motion/client";

function LayoutNavbar({ currentLanguage, setLanguage }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        // Si el scroll vertical es mayor a 0, activa estado
        setIsScrolled(window.scrollY > 0);
      };

      const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        window.removeEventListener("scroll", handleScroll);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

    const switchLanguage = (language) => {
      setLanguage(language);
      setIsOpen(false);
    }

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
        <ul className="flex flex-col font-medium md:flex-row md:space-x-8">
          {[
            { Icon: MX, label: "Español", language: "spanish" },
            { Icon: US, label: "English", language: "english" },
            { Icon: FR, label: "Français", language: "french"  },
            { Icon: DE, label: "Deutsch", language: "german"  },
            { Icon: CN, label: "普通话", language: "mandarin"  },
          ].map(({ Icon, label, language }) => {
            const classN = (language === currentLanguage) 
              ? "text-white bg-sky-700/80 rounded md:bg-transparent md:text-cyan-700 md:p-0 dark:text-white" 
              : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
            return (
              <li key={label}>
                <button 
                  onClick={() => switchLanguage(language)}
                  type="button" 
                  className={`w-full flex items-center gap-2 py-2 pl-3 pr-4 ${classN}`}>
                  <Icon className="w-5 h-5" /> <span>{label}</span>
                </button>
              </li>
            )
          })}
        </ul>
    );

    return (
        <div  className="sticky top-0 z-50 transition-all duration-300 ">
        <Navbar ref={navRef} fluid rounded className={`${navbarClasses}`}>
          <NavbarBrand href="/">
              <span className="self-center whitespace-nowrap text-xl font-semibold text-green-600 dark:text-green-400">Portafolio</span>
          </NavbarBrand>
  
          {/* --- MENÚ PARA ESCRITORIO (Visible siempre en md+) --- */}
          <div className="hidden w-full md:block md:w-auto">
              <NavLinks />
          </div>
  
          <div className="flex md:order-2 gap-1">
              <div className="">
                <ThemeToggleButton />
              </div>
              {/* Toggle para móvil */}
              <div className="md:hidden">
              <LanguageButton  
                onClick={() => setIsOpen(!isOpen)}
                setLanguage={setLanguage}
              />
              </div>
          </div>
        </Navbar>
        {/* menú móvil */}
        <div className={`absolute top-full left-0 w-full md:hidden bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm`}>
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
          </div>
        </div>
    );
}

export { LayoutNavbar };