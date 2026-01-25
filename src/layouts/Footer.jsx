import { FaCircle } from "react-icons/fa";
import { Languages } from '../constants/languages';

export default function LayoutFooter({ currentLanguage }) {
  const currentYear = new Date().getFullYear();
  const f = Languages[currentLanguage].footer;

  return (
    <footer className="w-full py-6 mt-auto border-t border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 flex flex-col justify-between items-center gap-4 text-sm">
        
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex justify-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
            © {currentYear}. <span className="text-slate-900 dark:text-white">Miguel Ruiz</span>
          </div>
          <div className="flex justify-center items-center">
            <FaCircle className="text-sky-400 dark:text-cyan-800 w-2 h-2" />
          </div>
          <div className="text-slate-500 dark:text-slate-400 italic">
            {f.madeWith}
          </div>
        </div>
        
      </div>
    </footer>
  );
}