// "use client"

import { auth } from "@/auth";
import {SettingsForm} from "@/components/dashboard/settings-form";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { TrashIcon } from "@radix-ui/react-icons";
import { Trash2Icon } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";

interface Props {
params : {
    storeId: string
}

}
const SettingsPage =async   ({params}: Props) => {

// const handleDelete = async () => {
//     try {
//         setLoading(true)
//         await db.store.delete({
//             where: {
//                 id: params.storeId
//             }
//         })
//         redirect("/dashboard")
//     } catch (error) {
//         console.log(error)
//     } finally {
//         setLoading(false)
//     }
// }

const userId = await auth()


    // if(!userId) {
    //     redirect("/auth/login")
    // }
const store = await db.store.findFirst({
    where: {
        id: params.storeId,
        userId: userId?.user.id
    }
})
if(!store) {
    redirect("/dashboard")
}
    return ( 
<>
        <div className=" flex items-center justify-between">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <SettingsForm initialdata={store} />
        </div>

      </div>

</>

     );
}
 
export default SettingsPage;