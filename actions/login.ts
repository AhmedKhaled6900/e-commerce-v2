"use server"

import { signIn } from "@/auth"
import { getUserByEmail } from "@/data/user"
import { sendVerificationEmail } from "@/lib/mail"
import { generateVerificationToken } from "@/lib/tokens"
import { LoginSchema } from "@/schemas"
import { AuthError } from "next-auth"
import { z } from "zod"


export const Login = async( values: z.infer<typeof LoginSchema>)=>{
const validatedFields = LoginSchema.safeParse(values)

if(!validatedFields.success)
     return {error: "Invalid email or password"}

const {email,password} = validatedFields.data
const existingUser =await getUserByEmail(email)
if(!existingUser || !existingUser.password || !existingUser.email){ 
     return {error: "Invalid email or password"}
}
if(!existingUser.emailVerified){
     const verificationToken =await generateVerificationToken(email)
     await sendVerificationEmail(email,verificationToken.token)
     return{success:" Confirmation email sent. Please verify your email"}
}
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
}
throw error

}}