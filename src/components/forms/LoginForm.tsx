import { FormProps } from "./types.ts";
import { LoginState, loginSchema } from "./schema.ts";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./Input.tsx";
import { useEffect, useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";

export function LoginForm({ defaultValues, updateState }: FormProps<LoginState>) {

    const signIn = useSignIn()
    const navigate = useNavigate()
    const [ error, setError ] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm<LoginState>({
        defaultValues,
        resolver: zodResolver(loginSchema)
    })

    const formState = useWatch({ control })

    useEffect(() => {
        updateState(prev => ({...prev, ...formState}))
    }, [formState]);

    function handleLogin(data: LoginState) {
        console.log(data)
        // TODO: fetch auth token from backend here
        if (signIn({
            auth: {
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpbGx5QG1haWwucnUiLCJwYXNzd29yZCI6ImJpbGx5MTIzIn0.IBzZjS1vA8tDcN59zIKf9O8jTkRXM5tPUD54b5F-974',
                type: 'Bearer'
            },
            userState: data
        })) {
            navigate('/app')
        } else {
            setError("Error while logging in, try again later")
        }
    }

    return (
        <form onSubmit={handleSubmit(handleLogin)} className="form">
            <h3 className="text-2xl font-bold">Login</h3>
            <Input register={register} label="email" errors={errors} required={true} placeholder="email@mail.com"/>
            <Input register={register} label="password" errors={errors} required={true} type="password" placeholder="******"/>
            <button className="font-bold bg-blue-500 hover:bg-blue-700 dark:bg-purple-500 dark:hover:bg-purple-700 transition duration-300 rounded-lg px-4 py-3 text-light-primary hover:shadow active:scale-95">
                Log in
            </button>
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        </form>
    )
}