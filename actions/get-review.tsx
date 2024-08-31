import { Review } from "@/types"

const url =`${process.env.Next_PUBLIC_API_URL}/reviews`

const getReview = async(id:string):Promise<Review>=>{
    const res = await fetch (`${url}/${id}`)
    return (res.json()) 

}
export default getReview