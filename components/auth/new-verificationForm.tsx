"use client"
// import { CardWrapper } from "./cadr-wrapper"
import { BeatLoader } from "react-spinners"
import { useSearchParams } from "next/navigation"
import { startTransition, useCallback, useEffect, useState } from "react"
import { NewVerification } from "@/actions/new-verification"
import CardWrapper from "./card-wraper"
import { FormSuccess } from "./form-success"
import { FormError } from "./form-error"


export  const NewVerificationFormPage =()=>{
const [error, setError] = useState<string | undefined>("");
const [success, setSuccess] = useState<string | undefined>("");

    const seearchParams = useSearchParams();
    const token = seearchParams.get(`token`);
    const onSubmit =useCallback(()=>{
        setError("")
        setSuccess("")
        NewVerification(token as string)
            .then((data)=>{
            setError(data.error)
            setSuccess(data.success)}) 
.catch(()=>{
    setError(error);
    console.error("ror fetching verification token:", error);
    throw error; // Re-throw the error for further handling
 
})
    },[token])


    useEffect(()=>{
        onSubmit()
    
     },[onSubmit])
    return (
<CardWrapper
headerLabel="confirming your email"
backButtonLabel="Back to Login Page"
backButtonHref="/auth/login"
>
    <div className="w-full flex justify-center items-center">

        {! success && ! error && (
            <BeatLoader  color="black" size={20} loading={true} />
        )
        }

<FormSuccess message={success} />
<FormError message={error} />
    </div>


</CardWrapper>
    )
}