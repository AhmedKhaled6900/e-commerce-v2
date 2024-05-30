"use server"
// This is a server action component it should be used in a server action
// this file should lay in the actions folder in the root of app
// import bcrypt from "bcryptjs"
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcrypt"
import { db } from "@/lib/db";
import { create } from "domain";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByEmail } from "@/data/verification-token";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
// import { db } from "@/lib/db";
// import { generateVerificationToken } from "@/lib/tokens";
// import { getUserByEmail } from "@/data/user";
// import { sendVerificationEmail } from "@/lib/mail";
export const register =  async( values: z.infer<typeof RegisterSchema>) => {
//validate the values
const validatedFields =RegisterSchema.safeParse(values)
const passwordMatches = values.password === values.confirmPassword

if(!passwordMatches){
    return {error:"Passwords do not match"}
}
if(!validatedFields.success){
     return {error:"validation error"};
     
}
const {email,password,name,phone } = validatedFields.data
// console.log(validatedFields)

const hashedPassword = await bcrypt.hash(password,10)
const existingUser =await getUserByEmail(email)
if(existingUser){
    return {error:"Email already in use"}
}
await db.user.create({
    data:{
        email,
        name,
        password: hashedPassword,
        phone
    }
})
const verificationToken = await generateVerificationToken(email)
await sendVerificationEmail(
    verificationToken.email,
    verificationToken.token
)
// const { email,password,name}=validatedFields.data
// const hashedPassword = await bcrypt.hash(password,10)

// const existingUser = await getUserByEmail(email)

// if(existingUser){
//     return {error:"Email already in use"}
// }
// await db.user.create({
//     data:{
//         email,
//         name,
//        password: hashedPassword

//     }
// });
// const verificationToken = await generateVerificationToken(email)
// await sendVerificationEmail(
//     verificationToken.email,
//     verificationToken.token
//     ) 
return{ success:"User created Check your email for verification" }
}
