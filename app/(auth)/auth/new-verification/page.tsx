
import { NewVerificationFormPage } from '@/components/auth/new-verificationForm'
import { Suspense } from 'react'
const  VerificationPage=()=> {
  return (
    <Suspense fallback={<div>Loading...</div>}>
<NewVerificationFormPage></NewVerificationFormPage>

    </Suspense>
  )
}

export default VerificationPage