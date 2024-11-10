import { useState } from "react";
import { RegisterState } from "@components/forms/schema.ts";
import { LoginForm, RegisterForm } from "@/components";

enum AuthFormModes {
    LOGIN = "login",
    REGISTER = "register"
}

export function HomePage() {
    const [ authFormMode, setAuthFormMode ] = useState<AuthFormModes>(AuthFormModes.LOGIN)

    const [ formState, setFormState ] = useState<RegisterState>({
        email: "",
        password: "",
        name: ""
    })

    return (
        <div className="mt-24 text-center flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Web Lab4 Graph app</h1>
            <h4 className="text-xl">Let me know how you are first</h4>
            {authFormMode === AuthFormModes.LOGIN ? <LoginForm defaultValues={formState} updateState={setFormState}/>
                : <RegisterForm defaultValues={formState}  updateState={setFormState}/>}
            <button className="text-sm text-light-secondary dark:text-dark-secondary hover:underline"
                    onClick={() => setAuthFormMode(authFormMode === AuthFormModes.LOGIN ? AuthFormModes.REGISTER : AuthFormModes.LOGIN)}>
                {authFormMode === AuthFormModes.LOGIN ? "Do not have an account? Go to register" : "Already have an account? Go to login"}
            </button>
        </div>
    )
}