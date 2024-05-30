
"use client"
import * as z from "zod"
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";

import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { RegisterSchema } from "@/schemas"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
// import { FormError } from "../form-error"
// import { FormSuccess } from "../form-success"
import { register } from "@/actions/register"
import { useState, useTransition } from "react"
import CardWrapper from "./card-wraper"
import { FormError } from "./form-error"
import { FormSuccess } from "./form-success"

export const RegisterForm = ()=> {
    const[showpassword,setShowPassword] = useState("password" || "text") 
    const[showConfirmedpassword,setShowConfirmedPassword] = useState("password" || "text") 
  const [error ,setError] =useState< string|undefined>("")
  const [success ,setSuccess] =useState< string|undefined>("")

  const [ispending,starttransition] = useTransition()
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver : zodResolver(RegisterSchema),
    defaultValues : {
      email:"",
      password:"",
      name:"",
      phone:"",
      // confirmPassword:""
      
    }
  })
  const onSubmit = (values:z.infer<typeof RegisterSchema>)=>{
    setShowPassword("password")
    setError("")
    setSuccess("")

    starttransition(()=>{
      register(values)
      .then((data)=>{
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
register(values)
  }
  return (
<CardWrapper 
headerLabel='Create account'
    backButtonLabel='Already have an account'
    backButtonHref='/auth/login'
    showSocial
    >
<Form {...form} >
<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-h[100vh]">
<div className="space-y-y4">
<FormField control={form.control}
name="email"
render={({field})=>(
  <FormItem>
    <FormLabel className="text-white">Email</FormLabel>
    <FormControl>
<Input className="border-black text-center text-white"
 {...field}
 disabled ={ispending}

 placeholder="Email@example.com"
 type="email"
 />
    </FormControl>
    <FormMessage/>
  </FormItem>
)}/>
<FormField control={form.control}
name="name"
render={({field})=>(
  <FormItem>
    <FormLabel className="text-white">Name</FormLabel>
    <FormControl>
<Input className="border-black text-center text-white"
 {...field}
 disabled ={ispending}

 placeholder="Your Name"
 type="name"
 />
    </FormControl>
    <FormMessage/>
  </FormItem>
)}/>
<FormField control={form.control}
name="password"
render={({field})=>(
  <FormItem>
    <FormLabel className="text-white">Password</FormLabel>
    <FormControl>
        <div className="relative w-full">
        <Input  className="border-black text-center text-white"
 {...field}
 disabled ={ispending}
 placeholder="********"
 type={showpassword}

 >

</Input>

<span onClick={()=>{

setShowPassword(showpassword ==="password"?"text":"password")
}}

className="absolute right-2 top-1/2 -translate-y-1/2 text-center items-center cursor-pointer text-white   "> 
  
  
  

{showpassword ==="password"?<FaRegEyeSlash className="w-6 h-6 "/>:
<MdOutlineRemoveRedEye className="w-6 h-6 "/>}
  </span>

        </div>


    </FormControl>

    <FormMessage/>
  </FormItem>
)}/>
<FormField control={form.control}
name="confirmPassword"
render={({field})=>(
  <FormItem>
    <FormLabel className="text-white">  Confirm Password</FormLabel>
    <FormControl>
    <div className="relative w-full">
<Input className="border-black text-center text-white"
 {...field}
 disabled ={ispending}
 placeholder="********"
 type={showConfirmedpassword}
 />
 <span onClick={()=>{

setShowConfirmedPassword(showConfirmedpassword ==="password"?"text":"password")
}}

className="absolute right-2 top-1/2 -translate-y-1/2 text-center items-center cursor-pointer text-white   "> 
{showConfirmedpassword ==="password"?<FaRegEyeSlash className="w-6 h-6 "/>:
<MdOutlineRemoveRedEye className="w-6 h-6 "/>}
  </span>
  </div>
    </FormControl>
    <FormMessage/>
  </FormItem>
)}/>
<FormField control={form.control}
name="phone"
render={({field})=>(
  <FormItem>
    <FormLabel className="text-white">Mobile Number</FormLabel>
    <FormControl>
<Input className="border-black text-center text-white"
 {...field}
 disabled ={ispending}
 placeholder="0123456789"
 type="text"
 />
    </FormControl>
    <FormMessage/>
  </FormItem>
)}/>
</div>
<FormError message={error}/>
<FormSuccess message ={success}/>



<Button disabled={ispending} type="submit" className="w-full mt-5">
Register</Button>
</form>
</Form>
</CardWrapper>
  )
}

