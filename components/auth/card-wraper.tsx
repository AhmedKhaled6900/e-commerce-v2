 "use client"

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { AuthHeader } from "./auth-header"
import { BackButton } from "./back-button"
import { Social } from "./social"

 interface CardWrapperProps {   

    children: React.ReactNode
    headerLabel: string
    backButtonLabel: string
    backButtonHref: string
    showSocial?: boolean
 }
 export default function CardWrapper({
   children,
   headerLabel,
   backButtonLabel,
   backButtonHref,
   showSocial
 }: CardWrapperProps) {
   return (
<>


<Card className="  border-0 w-[400px] shadow-2xl text-center z-20  bg-gradient-to-b from-black to-blue-500 border-black ">

 
<CardHeader>
        <AuthHeader label={headerLabel} ></AuthHeader>
        </CardHeader>
        <CardContent>
        {children}

        </CardContent>
        {
            showSocial && (
                <CardFooter>
                    <Social/>
                </CardFooter>
            )
        }
        <CardFooter>
            <BackButton href={backButtonHref} label={backButtonLabel} />
        </CardFooter>
</Card>

</>

   )
 }
 