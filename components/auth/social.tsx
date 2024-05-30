"use client"
import { FcGoogle } from "react-icons/fc"
import { FaFacebookF } from "react-icons/fa6"
import { Button } from "../ui/button"
import { signIn } from "next-auth/react"
export const Social = () => {
    const onClick = (provider:"google"|"facebook") => {
        signIn(provider, { callbackUrl: "/" })  
    }
    return (

        <div className="flex items-center w-full gap-x-2 text-blue-500">
            <Button onClick={() => onClick("google")}  variant={"outline"} size="lg" className ="w-full bg-black border-black"> <FcGoogle className="w-6 h-6" /></Button>
        </div>
    )
}