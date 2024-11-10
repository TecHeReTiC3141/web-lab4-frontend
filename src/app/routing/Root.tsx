import { Footer, Header } from "@components/";
import { Outlet } from "react-router-dom";

export function Root() {
    return (
        <div className="min-h-[100vh] flex flex-col items-center w-full gap-y-3 bg-gray-100 dark:bg-gray-800
        text-light-primary-content dark:text-dark-primary-content transition-colors duration-300">
            <Header/>
            <div className="container flex-1 mx-auto">
                <main className="w-full flex flex-col items-center">
                    <Outlet/>
                </main>
            </div>
            <Footer/>
        </div>
    )
}