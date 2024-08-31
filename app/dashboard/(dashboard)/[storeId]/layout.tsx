// import "@/app/globals.css"
import { auth } from "@/auth";
import Navbar from "@/components/dashboard/navbar";
import { db } from "@/lib/db";
import { ModalProvider } from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { SessionProvider } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function StoreLayout({ children }: { children: React.ReactNode }) {
    // const userId = await auth()

    // const store =await db.store.findFirst({
    //     where: {
    //         userId: userId?.user.id
    //     }
    // })
    // if(store){
    //     redirect(`/${store.id}`)
    
    // }
    // if(!store){
    //     redirect(`/create-store`)
    // }
    return (

   
    <>
    
    <Navbar></Navbar>
   

   {children}

    
    </>

    
 

 
     


    )


     ;
}