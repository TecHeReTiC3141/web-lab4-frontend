import { FormProps } from "./types.ts";
import { LoginState, loginSchema } from "./schema.ts";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./Input.tsx";
import { useEffect } from "react";

export function LoginForm({ defaultValues, updateState }: FormProps<LoginState>) {

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

    function handleLogin() {

    }

    return (
        <form onSubmit={handleSubmit(handleLogin)}
              className="mt-4 mb-3 border border-dark-primary dark:border-light-primary rounded-2xl flex flex-col items-center gap-y-4 p-2 pb-3 w-80">
            <h3 className="text-2xl font-bold">Login</h3>
            <Input register={register} label="email" errors={errors} required={true}/>
            <Input register={register} label="password" errors={errors} required={true}/>
        </form>
    )
}