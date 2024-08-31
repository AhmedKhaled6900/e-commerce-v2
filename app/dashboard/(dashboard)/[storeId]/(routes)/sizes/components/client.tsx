"use client"

import { Heading } from "@/components/dashboard/heading"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { SizeColumn, columns } from "./columns"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"
interface SizeClientProps{
    data:SizeColumn[]
}
export const SizesClient : React.FC<SizeClientProps> = ({data}) =>{
  
  const params =useParams()
  const router =useRouter()
    return (
        <>
        <div className="flex items-center justify-between">
            <Heading title= {`Sizes (${data.length}) `}
             description="Manage your Sizes" 
             >              
            </Heading>                     
            <Button className="font-bold"  style={{backgroundImage: "linear-gradient(160deg, #a54e07, #b47e11, #fef1a2, #bc881b, #a54e07)" ,color:"black"}} onClick={() => {router.push(`/dashboard/${params.storeId}/sizes/new`)}}>
                <Plus/>
                  Add new
            </Button>
        </div>
        <Separator/>
        <DataTable searchKey="name" data={data} columns={columns}  ></DataTable>

        </>

    )
}