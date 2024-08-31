"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { CellActions } from "./cell-actions"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type SizeColumn = {
  id: string
  name: string
  value: string
  createdAt: string

}

export const columns: ColumnDef<SizeColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Value",
    cell: ({ row }) => row.original.value,
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
