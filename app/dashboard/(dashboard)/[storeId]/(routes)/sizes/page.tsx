import { db } from "@/lib/db"
import { SizesClient } from "./components/client"
import { format } from "date-fns"
import { SizeColumn } from "./components/columns"

const SizesPage = async({params}:{params : {stroreId : string}})=>{ 
    const sizes = await db.size.findMany({
        where :{
            storeId: params.stroreId
        }
    })
const formattedSizes :SizeColumn[] = sizes.map((item) => ({
    id : item.id,
    name: item.name,
    value : item.value,
    createdAt : format(item.createdAt, 'MMMM do,yyyy')
}))
    return (    
        <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6 ">
          <SizesClient data={formattedSizes} />
        </div>
      </div>
    )
}

export default SizesPage