import { registerSchema, RegisterState } from "@components/forms/schema.ts";
import { FormProps } from "./types.ts";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@components/forms/Input.tsx";
import { useEffect } from "react";

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

    const formState = useWatch({ control })

    useEffect(() => {
        updateState(prev => ({...prev, ...formState}))
    }, [formState]);

    function handleRegister() {

    }

    return (
        <form onSubmit={handleSubmit(handleRegister)}
              className="mt-4 mb-3 border border-dark-primary dark:border-light-primary rounded-2xl flex flex-col items-center gap-y-4 p-2 pb-3 w-80">
            <h3 className="text-2xl font-bold">Register</h3>
            <Input register={register} label="name" errors={errors} required={true}/>
            <Input register={register} label="email" errors={errors} required={true}/>
            <Input register={register} label="password" errors={errors} required={true}/>
        </form>
    )
}