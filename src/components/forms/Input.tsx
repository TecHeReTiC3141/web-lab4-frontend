import { FieldErrors, Path, UseFormRegister } from "react-hook-form"
import { capitalize } from "@/shared/utils";
import { InputHTMLAttributes } from "react";

type InputProps<T> = InputHTMLAttributes<HTMLInputElement> & {
    label: Path<T>
    register: UseFormRegister<T>
    required: boolean,
    errors: FieldErrors<T>,
}

export function Input<T>({ label, register, required, errors, ...props }: InputProps<T>) {
    return (
        <div className="flex flex-col gap-y-2">
            <label className="place-self-start" htmlFor={label}>{capitalize(label)}</label>
            <div>
                <div className="w-64 px-4 py-2 border focus-within:ring-2 ring-light-secondary dark:ring-dark-secondary
                    border-dark-primary dark:border-light-primary rounded-lg shadow">
                    <input {...register(label, { required })} {...props} className="w-full bg-transparent focus:outline-none"/>
                </div>
                {errors[label] && <p className="text-error text-red-400 text-start text-sm mt-0.5">{errors[label].message}</p>}
            </div>
        </div>
    )
}