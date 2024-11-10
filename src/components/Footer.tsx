import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="container text-center border-t border-dark-primary dark:border-light-primary rounded-t-lg pt-3 pb-3">
            <p className="mb-2">{new Date().getFullYear()}. <span className="font-bold">Web Lab4</span></p>
            <p className="text-sm">Made by <Link to="https://github.com/TecHeReTiC3141" className="hover:underline italic">TecHeReTiC</Link> with love and dedication</p>
        </footer>
    )
}