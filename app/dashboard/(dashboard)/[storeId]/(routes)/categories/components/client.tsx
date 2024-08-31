"use client"

import { Heading } from "@/components/dashboard/heading"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { CategoryColumn, columns } from "./columns"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"
interface CategoryClientProps{
    data:CategoryColumn[]
}
export const CategoriesClient : React.FC<CategoryClientProps> = ({data}) =>{
  
  const params =useParams()
  const router =useRouter()
    return (
        <>
        <div className="flex items-center justify-between">
            <Heading title= {`Categories (${data.length}) `}
             description="Manage your Categories" 
             >              
            </Heading>                     
            <Button className="font-bold"  style={{backgroundImage: "linear-gradient(160deg, #a54e07, #b47e11, #fef1a2, #bc881b, #a54e07)" ,color:"black"}} onClick={() => {router.push(`/dashboard/${params.storeId}/categories/new`)}}>
                <Plus/>
                  Add new
            </Button>
        </div>
        <Separator/>
        <DataTable searchKey="name" data={data} columns={columns}  ></DataTable>

        </>

    )
}