
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();


function AppThemeProvider({ children }) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        // document.body.setAttribute("data-theme", theme)
        document.body.setAttribute("data-bs-theme", theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => {
            const newTheme = prev === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children} {/* This ensures other components can access the context */}
        </ThemeContext.Provider>
    )
}

export default AppThemeProvider;