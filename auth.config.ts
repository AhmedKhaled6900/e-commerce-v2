import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./schemas"
import type { NextAuthConfig } from "next-auth"
import { getUserByEmail } from "./data/user"
 import bcryptjs from "bcryptjs"
export default { providers: [ Credentials({
    async authorize(credentials) {
        const validatedFields  = LoginSchema.safeParse(credentials)
        if(validatedFields.success){
            const {email, password} = validatedFields.data
            const user  = await getUserByEmail(email)
            if(!user || !user.password ){
                return user
            }
            const passwordMatches = await bcryptjs.compare(password, user.password)
            if(passwordMatches){
               return user 
            }
    }
return null
}

}) ,   Google(
    {
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string
    }
) , Facebook] } satisfies NextAuthConfig