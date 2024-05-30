
"use client"
// import { Header } from "./header";
import { BackButton } from "./back-button";

import {Card,CardFooter,
CardHeader} from "@/components/ui/card"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import CardWrapper from "./card-wraper";

export const ErrorCard =()=>{

    return (  
        <CardWrapper
        headerLabel= "Oops! Something went wrong "
        backButtonLabel="Back to Login Page"
        backButtonHref="/auth/login">
                <div className="w-full flex justify-center items-center">
                    <ExclamationTriangleIcon className="text-destructive" />
                </div>
        </CardWrapper>

    )
}