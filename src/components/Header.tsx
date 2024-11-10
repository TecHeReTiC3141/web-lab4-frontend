import logo from "/images/logo.png"
import { NavLink } from "react-router-dom";
import { ThemeSwitcher } from "@components/ThemeSwitcher.tsx";
import clsx from "clsx";

export function Header() {
    return (
        <header className="w-full border-b shadow border-gray-800 dark:border-gray-100 flex justify-between items-center gap-x-3 px-8 py-3">
            <img src={logo} alt="Logo" className="w-12 h-12"/>
            <h2 className="text-2xl font-bold">Web Lab4</h2>
            <div className="flex-1" />
            <NavLink to="/" className={({ isActive}) => clsx("hover:underline text-lg border border-dark-primary dark:border-light-primary rounded-lg py-1.5 px-2 hover:shadow",
                isActive && "font-bold")}>Home</NavLink>
            <NavLink to="/app" className={({ isActive}) => clsx("hover:underline text-lg border border-dark-primary dark:border-light-primary rounded-lg py-1.5 px-2 hover:shadow",
                isActive && "font-bold")}>Graph app</NavLink>
            <ThemeSwitcher />
        </header>
    )
}