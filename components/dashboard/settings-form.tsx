"use client"
import { Store } from "@prisma/client";
import { Heading } from "./heading";
import { title } from "process";
import { Button } from "../ui/button";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { updateStoreSettings } from "@/actions/store-settings";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AlertModal } from "../modals/alert-modal";

interface SettingsFormProps {
   initialdata: Store
}

export const formSchema = z.object({
    name: z.string().min(2),
})
type SettingsFormValues = z.infer<typeof formSchema>;
 export  const SettingsForm :React.FC<SettingsFormProps> = ({initialdata}) => {
    const handleDeleteStore = async () => {
        try {
            setLoading(true);
            await axios.delete(`/api/stores/${params.storeId}`);
            router.refresh();
            router.push("/dashboard");
            toast.success("Store deleted.");
          } catch (error) {
            toast.error("Something went wrong.");
          } finally {
            setLoading(false);
          }
    }
const params =useParams()
const router =useRouter()
    const [open , setOpen] =useState(false)
const [loading , setLoading] =useState(false)

    const form =useForm< SettingsFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues:initialdata
    })

const onSubmit = async (values: SettingsFormValues) => {
    try{
        setLoading(true)
        await axios.patch(`/api/stores/${params.storeId}`,values)
        router.refresh();
        toast.success('Store Name updated.');
    }
    catch(error :any){
        toast.error("something went wrong")
    

    }
    finally
    {
setLoading(false)
    }
    // updateStoreSettings(values)
    // console.log(values)
}
    return (  <>
    <AlertModal
    isOpen={open}
    onClose={() => setOpen(false)}
    onConfirm={handleDeleteStore}
    loading={loading}
    ></AlertModal>
        <div className="flex items-center justify-between">
         <Heading title = "Settings" description ="Manage Your Store Prefrences" >
            
         </Heading>
         <Button onClick={() => setOpen(true)} disabled={loading} size={"sm"} variant="destructive" className="mr-5" >
<Trash2Icon/>
    
      </Button>
        </div>
   <Separator/>
   <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
<div>
    <FormField control={form.control} name="name" render={({ field })=>(
        <FormItem>
<FormLabel> Store Name </FormLabel>
<FormControl>
    <Input placeholder="Store Name" {...field}  />
</FormControl>
<FormMessage/>
        </FormItem>
    )} >

     
    </FormField>
</div>
<Button type="submit" className="mt-3">
    Save changes
</Button>
    </form>
   </Form>
    </>

    );
}
 
