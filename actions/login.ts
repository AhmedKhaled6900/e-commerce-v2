"use server"

import { signIn } from "@/auth"
import { LoginSchema } from "@/schemas"
import { error } from "console"
import { AuthError } from "next-auth"
import { z } from "zod"


export const Login = async( values: z.infer<typeof LoginSchema>)=>{
const validatedFields = LoginSchema.safeParse(values)

if(!validatedFields.success)
     return {error: "Invalid email or password"}

const {email,password} = validatedFields.data
try{
     await signIn("credentials", {
          email ,
          password ,
          redirectTo: "/",
     })
} catch(error){
     if (error instanceof AuthError) {
       switch (error.type) {
          case "CredentialsSignin" :
               return {error: "Invalid email or password"}
               default :
               return {error: "Something went wrong"}
               
           
       }
     // return {error: "Invalid email or password"}
}
throw error
// return{success:"Email sent"}

}}