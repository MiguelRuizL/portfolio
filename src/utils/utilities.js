  export const getBrowserLanguage = () => {
    if (typeof window === "undefined") return "es"; // Fallback

    const browserLang = navigator.language.split('-')[0]; // 'es', 'en', etc.

    return browserLang;
}