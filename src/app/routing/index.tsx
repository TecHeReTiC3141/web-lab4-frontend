import { createBrowserRouter, Outlet } from "react-router-dom";
import { HomePage, MainPage } from "@/pages";
import { Root } from "./Root.tsx";
import { Error } from "@/components";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "/app",
                element: <MainPage/>
            }
        ]
    }
])