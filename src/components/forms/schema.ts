import { z } from "zod"

export const loginSchema = z.object({
    email: z.string({
        required_error: "Login is required",
        invalid_type_error: "Login must be a string",
    }).min(3, "Must be at 3 chars long").email("Must be correct email"),
    password: z.string({
        required_error: "Password is required",
        invalid_type_error: "Login must be a string",
    }).min(3, "Must be at 3 chars long")
}).required()

export type LoginState = z.infer<typeof loginSchema>

export const registerSchema = loginSchema.extend({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }).min(3, "Must be at 3 chars long"),
}).required()

export type RegisterState = z.infer<typeof registerSchema>
