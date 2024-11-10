import { useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";


export function ThemeSwitcher() {

    const [ isDarkMode, setIsDarkMode ] = useState<boolean>(localStorage.getItem("theme") === "dark")

    function handleThemeSwitch() {
        const isPrevDark = localStorage.getItem("theme") === "dark"
        localStorage.setItem("theme", isPrevDark ? "light" : "dark")
        document.documentElement.classList.toggle("dark",   localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
        setIsDarkMode(isPrevDark)
    }

    return (
        <button className="ml-4 relative border-2 border-dark-primary dark:border-light-primary rounded-full p-1 w-14 h-8" onClick={handleThemeSwitch}>
            <div className="absolute rounded-full p-1  top-0.5 left-1 dark:left-6 bg-dark-primary dark:bg-light-primary transition-all duration-300">
                {isDarkMode ? <FaRegMoon size={16} className="text-dark-primary-content dark:text-light-primary-content"/>
                    : <FaRegSun size={16}  className="text-dark-primary-content dark:text-light-primary-content"/>}
            </div>
        </button>
    )
}