import { registerSchema, RegisterState } from "@components/forms/schema.ts";
import { FormProps } from "./types.ts";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@components/forms/Input.tsx";
import { useEffect, useState } from "react";

export function RegisterForm({ defaultValues, updateState }: FormProps<RegisterState>) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm<RegisterState>({
        defaultValues,
        resolver: zodResolver(registerSchema)
    })

    const [ error, setError ] = useState<string | null>(null);

    const formState = useWatch({ control })

    useEffect(() => {
        updateState(prev => ({...prev, ...formState}))
    }, [formState]);

    function handleRegister() {

    }

    return (
        <form onSubmit={handleSubmit(handleRegister)}
              className="form">
            <h3 className="text-2xl font-bold">Register</h3>
            <Input register={register} label="name" errors={errors} required={true}/>
            <Input register={register} label="email" errors={errors} required={true}/>
            <Input register={register} label="password" errors={errors} required={true} type="password"/>
            <button className="font-bold bg-blue-500 hover:bg-blue-700 dark:bg-purple-500 dark:hover:bg-purple-700 transition duration-300 rounded-lg px-4 py-3 text-light-primary hover:shadow active:scale-95">
                Sign up
            </button>
            {error && <p className="texxt-red-400 text-sm text-center">{error}</p>}
        </form>
    )
}