import * as z from "zod"
export const LoginSchema = z.object({
    email: z.string().email({
        message:"Email is required"
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters"
    })
})
export const RegisterSchema = z.object({
    email: z.string().email({
        message:"Email is required"
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters"
    }),
    confirmPassword: z.string().min(8, {
        message: "Password must be at least 8 characters"
    }),
    name: z.string().min(2, {
        message: "Name must be at least 2 characters"
    }),
    phone: z.string().min(13, {
        message: "Phone must be at least 10 characters"
    })
})