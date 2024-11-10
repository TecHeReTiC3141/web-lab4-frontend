import { Footer, Header } from "@components/";
import { Outlet } from "react-router-dom";

export function Root() {
    return (
        <div className="flex flex-col items-center w-full gap-y-3 bg-gray-100 dark:bg-gray-800">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}