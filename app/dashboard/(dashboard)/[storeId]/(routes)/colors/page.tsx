import { db } from "@/lib/db"
import { ColorsClient } from "./components/client"
import { format } from "date-fns"

const ColorsPage = async({params}:{params : {stroreId : string}})=>{ 
    const colors = await db.color.findMany({
        where :{
            storeId: params.stroreId
        }
    })
const formattedColors = colors.map((item) => ({
    id : item.id,
    name: item.name,
    value : item.value,
    createdAt : format(item.createdAt, 'MMMM do,yyyy')
}))
    return (    
        <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6 ">
          <ColorsClient data={formattedColors} />
        </div>
      </div>
    )
}

export default ColorsPage