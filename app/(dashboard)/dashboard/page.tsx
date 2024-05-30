import React from 'react'
import {auth} from "@/auth"
import { redirect } from "next/navigation";
import { db } from '@/lib/db';
 export default async function page(){
    const UserId =await auth();
    if(!UserId) {
        redirect("/auth/login")
    }
const store =await db.store.findFirst({
    where: {
        userId: UserId.user.id
    }
})
if(store){
    redirect(`dashboard/${store.id}`)

}
if(!store){
    redirect(`/create-store`)
}

    return(
        <div>
            page
        </div>
    )
 }