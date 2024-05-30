"use client"
import * as z from "zod"
import axios from "axios"
import { useStoreModal } from "@/hooks/use-storeModal"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Modal } from "../ui/modal"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useState } from "react"
import toast from "react-hot-toast"
const formSchema = z.object({
    name: z.string().min(2)
})
export const StoreModal = () => {
    const storeModal = useStoreModal()

    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ""
        }
    })
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true);
            const response = await axios.post('/api/stores', values);
       toast.success('Store created successfully');
       window.location.assign(`/dashboard/${response.data.id}`);

          } catch (error) {
            toast.error('Something went wrong');
          } finally {

            setLoading(false);
          }    }
    return (
        <Modal
            title="Create Store"
            discription="Create your store"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            create store
            <div>
                <div className="w-full  space-y-4 py-2 pb-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} >
                            <FormField control={form.control}
                                name="name"
                                render={({ field }) =>
                                (
                                    <FormItem>
                                        <FormLabel>
                                            Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input disabled={loading} placeholder="Store Name" {...field} />
                                        </FormControl>
                                        <FormMessage>
                                            
                                        </FormMessage>
                                    </FormItem>
                                )
                                } />
                            <div className="pt-6 space-x-2 items-center flex justify-end" >
                                <Button disabled={loading} onClick={storeModal.onClose} variant={"outline"}>
                                    Cancel
                                </Button>
                                <Button disabled={loading} type="submit">
                                    Create
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </Modal>
    )
}