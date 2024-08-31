"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { CellActions } from "./cell-actions"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BillboardColumn = {
  id: string
  label: string
  createdAt: string

}

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "label",
    header: "Label",
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
