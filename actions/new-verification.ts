"use server"
import { getUserByEmail } from "@/data/user"
import { getVerificationTokenByToken } from "@/data/verification-token"
import { db } from "@/lib/db"

export const NewVerification = async (token: string) =>{

    const existingToken = await getVerificationTokenByToken(token)


console.log(existingToken)
if (!existingToken) return { error:" Token does not exist"}
        
      const hasExpired = new Date(existingToken.expires) < new Date()
if(hasExpired){
   return {Error:"Token has expired"}
}
const existingUser = await getUserByEmail(existingToken.email)
if(!existingUser){
    return{  Error:" Email not found"}
}

await db.user.update({

    where:{
        id:existingUser.id
    },
    data:{
        emailVerified:new Date(),
        email: existingToken.email
    }
})
    

// await db.verificationToken.delete({
//     where:{
//         id:existingToken.id
//     }
// })
return { success:"Email verified"}
}
// import { newVerification } from "@/actions/new-verification";

// export default async function handler(req, res) {
//   try {
//     const token = req.query.token;
//     const data = await newVerification(token);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ error: "An error occurred" });
//   }
