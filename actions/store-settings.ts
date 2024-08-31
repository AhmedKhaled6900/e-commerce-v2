"use server "

import { formSchema } from "@/components/dashboard/settings-form"
import { db } from "@/lib/db"
import { currentUser } from "@/lib/user"
import { z } from "zod"

export const updateStoreSettings = async (values: z.infer<typeof formSchema>) => {
const user = await currentUser()

if (!user) {
    return { error: "Not logged in" }
}
const store = await db.store.findUnique({
    where: {
        id: values.name
    }
})
await db.store.update({
    where: {
        id: user?.id
    },
    data: {
        ...values
    }
})

return { success: "Store settings updated" }

}