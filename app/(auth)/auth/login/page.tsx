import { LoginForm } from "@/components/auth/login-form"
import { Suspense } from "react"

function  LoginPage  ()  {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>

            <LoginForm></LoginForm>

            </Suspense>

          
        </div>
    )       
}

export default LoginPage