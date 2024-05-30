import { db } from "@/lib/db"
import {auth} from "@/auth"
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
  }: {
    children: React.ReactNode

}){
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
// if(!store){
//     redirect(`/`)
// }
    return (
        <div>
            {children}
        </div> 
    )
}