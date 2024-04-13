
"use client"
import {  useForm } from "react-hook-form"
import { useState, useTransition } from "react"
import { CardHeader } from "../ui/card"
import { AuthHeader } from "./auth-header"
import CardWrapper from "./card-wraper"
import { LoginSchema } from "@/schemas"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { FormError } from "./form-error"
import { FormSuccess } from "./form-success"
import { Login } from "@/actions/login"

export const LoginForm = () => {
  const [error, setError] = useState<string|undefined>("")
  const [success, setSuccess] = useState <string|undefined>("")
  const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("")
    setSuccess("")
    startTransition(() => {
      // console.log(values)
Login(values)
.then((data)=>{
  console.log(data)
  setError(data.error)
  setSuccess(data.success)
})
      
    })
  }
  return (
    <CardWrapper 
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}  >
        <form className="space-y-6   " onSubmit={form.handleSubmit(onSubmit)} >
          <div className="space-y-2">
            <FormField 
             control={form.control} 
            name="email" 
            render={({ field }) => 
            (
            <FormItem>
              <FormLabel className="text-white">
                Email
              </FormLabel>
              <FormControl>
                <Input disabled={isPending} className="border-black text-center text-white "
                 {...field}
                  type="email" 
                  placeholder="Enter your email"
                  />
                  

              </FormControl>
              <FormMessage/>

       
            </FormItem>
          )} />
            <FormField
             control={form.control} 
            name="password" 
            render={({ field }) => 
            (
            <FormItem>
              <FormLabel className="text-white">
                Password
              </FormLabel>
              <FormControl>
                <Input disabled={isPending} className="border-black text-center text-white"
                 {...field}
                  type="password" 
                  placeholder="Enter your password"
                  
                  />
                  

              </FormControl>
              <FormMessage/>

       
            </FormItem>
          )} />

          </div>
<FormError message={error}></FormError>
<FormSuccess message={success} ></FormSuccess>
          <Button type="submit" disabled={isPending}  className="w-full text-lg font-bold">
            Login
          </Button>
        </form>
      </Form>

    </CardWrapper>

  )
}