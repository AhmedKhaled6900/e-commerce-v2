import { Billboard } from "@/types"

const url =`${process.env.Next_PUBLIC_API_URL}/billboards`

const getBillboard = async(id:string):Promise<Billboard>=>{
    const res = await fetch (`${url}/${id}`)
    return (res.json()) 

}
export default getBillboard