import { IoLanguage } from "react-icons/io5";

function LanguageButton({ onClick, className }) {
    return (
        <>
        <button
            onClick={onClick}
            type="button"
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition-colors"
        >
            <IoLanguage className="w-5 h-5 text-gray-500 dark:text-white" />
            <span className="sr-only">Cambiar idioma</span>
        </button>
        </>
    );
}

export {
    LanguageButton
}