"use client"

import { Heading } from "@/components/dashboard/heading"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { BillboardColumn, columns } from "./columns"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"
interface BillboardClientProps{
    data:BillboardColumn[]
}
export const BillboardClient : React.FC<BillboardClientProps> = ({data}) =>{
  
  const params =useParams()
  const router =useRouter()
    return (
        <>
        <div className="flex items-center justify-between">
            <Heading title= {`Billboards (${data.length}) `}
             description="Manage your billboards" 
             >
               
            </Heading>
            {/* {initialData.map((billboard)=>(
                <Button
                key={billboard.id}
                onClick={()=>{
                    router.push(`/dashboard/${params.storeId}/billboards/${billboard.id}`)
                }}
                >
                    {billboard.label}
                </Button>
            ))} */}
            <Button className="font-bold"  style={{backgroundImage: "linear-gradient(160deg, #a54e07, #b47e11, #fef1a2, #bc881b, #a54e07)" ,color:"black"}} onClick={() => {router.push(`/dashboard/${params.storeId}/billboards/new`)}}>
                <Plus/>
                  Add new
            
            </Button>
        </div>
        <Separator/>
        <DataTable searchKey="label" data={data} columns={columns}  ></DataTable>

        </>

    )
}