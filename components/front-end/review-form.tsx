"use client"
import { z } from "zod";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Review } from "@/types";
import { useRouter ,useParams } from "next/navigation";
import axios from "axios";

import { toast } from "react-hot-toast"
import { useState } from "react";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";



const formSchema = z.object({
    comment : z.string().min(2),
    rating : z.string().min(1),
})
type ReviewFormValues = z.infer<typeof formSchema>

interface ReviewFormProps {
   data: Review | null;

  };
const ReviewForm : React.FC<ReviewFormProps> = ({data }) => {
const router = useRouter()
const params= useParams()
// console.log(params)
const [loading, setLoading] = useState(false);

    const form = useForm<ReviewFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            comment:"",
            rating:"",
          
        }
      });
      const productId = data?.id
      const userId = useSession().data?.user.id

      const onSubmit = async (data: ReviewFormValues) => {
        try {
          setLoading(true);
          
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/reviews`, {...data , rating:Number(data.rating), productId, userId});
      
          
          router.refresh();
        //   router.push(`/dashboard/${params.storeId}/reviews`);
          toast.success("Review submitted");
        } catch (error: any) {
          toast.error('Something went wrong.');
        } finally {
          setLoading(false);
        }
      };
    return ( 
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                              <h1 className="my-10 font-semibold text-2xl">
                      Leave comment
                    </h1>
           <Form {...form}>
           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
           <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                  your comment
                  </FormLabel>
                  <FormControl>
                  <Input placeholder="Your comment" {...field} />
                   
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
           <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rate</FormLabel>
                  <FormControl>
                  <Input placeholder="Your rate" {...field} />
                   
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
               <Button disabled={loading} className="ml-auto" type="submit">
          Submit review
          </Button>
           </form>
           </Form>
        </div>
     );
}
 
export default ReviewForm;