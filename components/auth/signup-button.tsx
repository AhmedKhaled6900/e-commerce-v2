"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface ButtonProps {
children: React.ReactNode;
mode?: "modal" | "redirect";
asChild?: boolean;
}
export const SignupButton = (
    {children, mode = "redirect", asChild }: ButtonProps) => {
        const router = useRouter();
const onClick = () => {
router.replace("/auth/login")
}
    return (
      <span onClick={onClick} className="cursor-pointer">
        {children}
      </span>
           
   
    )
}