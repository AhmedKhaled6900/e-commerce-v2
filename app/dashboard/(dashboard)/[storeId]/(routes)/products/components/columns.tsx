"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { CellActions } from "./cell-actions"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ProductColumn = {
  id: string
  name: string
  price: string
  size :string
  category :string
  color: string
  description:string
  reviews :number
  isFeatured: boolean
  isArchived: boolean
  createdAt: string

}


export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
accessorKey:"isArchived",
    header:"Archived",
  },
  {
    accessorKey:"isFeatured",
    header:"Featured",
  },
  {
    accessorKey:"price",
    header:"Price"
  },
  {
    accessorKey:"category",
    header:"Category"
  }
  ,
  {
    accessorKey:"size",
    header:"Size"
  }
  ,
  {
    accessorKey: "color",
    header: "Color",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        
        <div className="h-6 w-6 rounded-full border" style={{ backgroundColor : row.original.color }} />
      </div>
    )
  },
  
  {
    accessorKey: "reviews",
    header: "Reviews",
    // cell: ({ row }) => (
    //   <div key={row.original.id} className="flex items-center gap-x-2">
    //     {row.original.reviews.length}
    //     </div>
    // )
    
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => (
        <CellActions data={row.original}/>
    //   <Button
    //     variant="outline"
    //     size="sm"
    //     onClick={() => row.toggleExpanded()}
    //     className="h-8 w-8 p-0"
    //   >
    //     <span className="sr-only">Toggle expanded</span>
    //     <MoreHorizontal className="h-4 w-4" />
    //   </Button>
    ),
  }

]
