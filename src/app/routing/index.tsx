import { createBrowserRouter } from "react-router-dom";
import { HomePage, MainPage } from "../../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/app",
        element: <MainPage />
    }
])