"use server"

import { LoginSchema } from "@/schemas"
import { error } from "console"
import { z } from "zod"


export const Login = async( values: z.infer<typeof LoginSchema>)=>{
const validatedFields = LoginSchema.parse(values)

if(!validatedFields)
     return {error: "Invalid email or password"}

return{success:"Email sent"}

}