"use server"
import { getVerificationTokenByEmail } from '@/data/verification-token';
import {v4 as uuidv4} from 'uuid'
import { db } from '@/lib/db';
// import { getPasswordResetTokenByEmail } from '@/data/passwordResetToken';
import crypto from 'crypto'
// import { getTwoFactorTokenByEmail } from '@/data/two-factor-token';


// export const generateTwoFactorToken = async (email: string) => {
//     const token = crypto.randomInt(100_000, 1_000_000).toString(); ;
//     // console.log(token)
//     const  expires = new Date(new Date().getTime() + 5 * 60 * 1000);
//     const existingtoken = await getTwoFactorTokenByEmail(email)
//     if(existingtoken) {
//         await db.twoFactorToken.delete({
//             where: {
//                 id: existingtoken.id
//             }          
//         })
//     }
//     const twoFactorToken = await db.twoFactorToken.create({
//         data: {
//             email,
//             token,
//             expires
//         }
//     })

//     return twoFactorToken

// }

// export const generatePasswordResetToken = async (email: string) => {
//     const token =  uuidv4();
//     // console.log(token)
//     const  expires = new Date(new Date().getTime() + 3600*1000);
//  const existingtoken = await getPasswordResetTokenByEmail(email)
//  if (existingtoken) {
//     await db.passwordResetToken.delete({
//         where: {
//             id: existingtoken.id
//         }
       
//     })
//     const passwordResetToken = await db.passwordResetToken.create({
//         data: {
            
//             email,
//             token,
//             expires
        
//         }
//     })
//  return passwordResetToken
//  } 
 
//  const passwordResetToken = await db.passwordResetToken.create({
//     data: {
        
//         email,
//         token,
//         expires
    
//     }
//  })
//  return passwordResetToken
// }
export const generateVerificationToken = async (email: string) => {
    const token = uuidv4();
    const  expires = new Date(new Date().getTime() + 3600*1000);
 const existingtoken = await getVerificationTokenByEmail(email)

 if (existingtoken) {
    await db.verificationToken.delete({
        where: {
            id: existingtoken.id
        }
    })
 } 
 const verificationToken = await db.verificationToken.create({
    data: {
        email,
        token,
        expires
    }
 })
 return verificationToken
}