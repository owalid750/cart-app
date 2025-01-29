import { useContext } from "react";
import { CustomButton } from "./CustomButton";
import { ThemeContext } from "../context/ThemeContext";


function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);


    return (
        <CustomButton
            text={theme === "light" ? "🌙" : "☀️"}
            onClick={toggleTheme}
            className={`theme-toggle-btn ${theme}`}
        />
    )
}


export default ThemeToggle;