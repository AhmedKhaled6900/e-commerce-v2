import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CategoryColumn } from "./columns"
import { Button } from "@/components/ui/button"
import { Copy, Delete, Edit, MoreHorizontal, Trash } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { AlertModal } from "@/components/modals/alert-modal"
interface CellActionsprops{
    data :CategoryColumn
}

export const CellActions : React.FC<CellActionsprops> =({
    data
})=>{
    const router =useRouter()
    const params =useParams()
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const onCopy =()=>{
navigator.clipboard.writeText(data.id)
toast.success('Category Id copied')
    }
    const onDelete = async () => {
        try {
          setLoading(true);
          await axios.delete(`/api/${params.storeId}/categories/${data.id}`);
          router.refresh();
          router.push(`/dashboard/${params.storeId}/categories`);
          toast.success('Category deleted.');
        } catch (error: any) {
          toast.error('Make sure you removed all categories using this billboard first.');
        } finally {
          setLoading(false);
          setOpen(false);
        }
      }
    return (
        <>
        <AlertModal isOpen = {open} onClose={()=>{setOpen(false)}} onConfirm={onDelete} loading={loading}></AlertModal>
<DropdownMenu>
<DropdownMenuTrigger asChild>
<Button variant={"outline"} size="sm" className="h-8 w-8 p-0">
<MoreHorizontal className="h-4 w-4"/>
</Button>
</DropdownMenuTrigger>
<DropdownMenuContent align="end" >

<DropdownMenuItem onClick={()=>router.push(`/dashboard/${params.storeId}/categories/${data.id}`)} >
<Edit  className="mr-2 h-4 w-4"/>
    Update
</DropdownMenuItem>
<DropdownMenuItem onClick={onCopy}>
<Copy className="mr-2 h-4 w-4"/>
Copy Id
</DropdownMenuItem>
<DropdownMenuItem onClick={() => setOpen(true)}>
<Trash className="mr-2 h-4 w-4"/>
Delete
</DropdownMenuItem>
</DropdownMenuContent>

</DropdownMenu>
</>
        
    )

}