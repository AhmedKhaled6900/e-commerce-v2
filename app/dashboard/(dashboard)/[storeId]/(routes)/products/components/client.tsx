"use client"

import { Heading } from "@/components/dashboard/heading"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { ProductColumn, columns } from "./columns"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"
interface ProductsClientProps{
    data:ProductColumn[]
}
export const ProductsClient : React.FC<ProductsClientProps> = ({data}) =>{
  
  const params =useParams()
  const router =useRouter()
    return (
        <>
        <div className="flex items-center justify-between">
            <Heading title= {`Products (${data.length}) `}
             description="Manage your products" 
             >
               
            </Heading>
            <Button className="font-bold"  style={{backgroundImage: "linear-gradient(160deg, #a54e07, #b47e11, #fef1a2, #bc881b, #a54e07)" ,color:"black"}} onClick={() => {router.push(`/dashboard/${params.storeId}/products/new`)}}>
                <Plus/>
                  Add new
            
            </Button>
        </div>
        <Separator/>
        <DataTable searchKey="name" data={data} columns={columns}  ></DataTable>

        </>

    )
}