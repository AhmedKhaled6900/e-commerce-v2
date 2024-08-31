"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { CellActions } from "./cell-actions"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ColorColumn = {
  id: string
  name: string
  value: string
  createdAt: string

}

export const columns: ColumnDef<ColorColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Value",
    cell: ({ row }) => (
      <div className="flex items-center justify-between gap-x-2">
      
        <div className="h-6 w-6 border rounded-full" style={{
          backgroundColor: row.original.value
        }}/>

      </div>
    )
  },
  {
accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => (
        <CellActions data={row.original}/>
    ),
  }

]
