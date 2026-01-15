export const customModalTheme = {
  root: {
    base: "fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto overflow-x-hidden",
    backdrop: "fixed inset-0 bg-gray-900/70 backdrop-blur-sm",
  },
  content: {
    base: "relative w-full md:h-full",
    inner: "relative rounded-2xl bg-white shadow-2xl dark:bg-slate-900/90 border border-white/10 backdrop-blur-xl max-h-none flex flex-col",
  },
  header: {
    base: "flex items-start justify-between rounded-t-2xl border-b border-gray-400/50 dark:border-white/5 p-5 dark:bg-green-950/20",
    title: "text-xl font-bold text-gray-900 dark:text-green-400",
    close: {
      base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-green-900/50 dark:hover:text-white",
    }
  },
  body: {
    base: "p-6 flex-1 overflow-auto dark:text-gray-300",
  },
  footer: {
    base: "flex items-center space-x-2 rounded-b-2xl border-t border-white/5 p-6 dark:bg-green-950/10",
  }
};