function AnchorLink({href, children}) {
    return (
        <a
            href={href}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 dark:text-blue-400"
        >
            {children}
        </a>
    );
}

export { AnchorLink };