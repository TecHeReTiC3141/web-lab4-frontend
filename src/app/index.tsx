import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "react-auth-kit";
import { authStore } from "./auth/store.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing";
import { ReactQueryDevtools } from "react-query/devtools";
import { useEffect } from "react";

const queryClient = new QueryClient()

export default function App() {

    useEffect(() => {
        document.documentElement.classList.toggle("dark",
            localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
    }, []);

    return (
        <QueryClientProvider client={queryClient} >
            <AuthProvider store={authStore}>
                <RouterProvider router={router} />
                <ReactQueryDevtools />
            </AuthProvider>
        </QueryClientProvider>
    )
}

