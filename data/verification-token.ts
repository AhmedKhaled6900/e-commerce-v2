"use server"

import { db 
} from "@/lib/db";
export const getVerificationTokenByEmail = async (email: string) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({
            where: {
                email,
            }
        })
        return verificationToken
    }
    catch {
return  null ;
    }
}

export const getVerificationTokenByToken = async (token: string) => {
    try {
      console.log("Searching for token:", token);
      const verificationToken = await db.verificationToken.findUnique({
        where: { token }
      });
    //   if (!verificationToken) {
    //     console.error("Verification token not found");
    //   }
      return verificationToken;
    } catch (error) {
      console.error("Error fetching verification token:", error);
      // throw error;
       // Re-throw the error for further handling
    }
  };