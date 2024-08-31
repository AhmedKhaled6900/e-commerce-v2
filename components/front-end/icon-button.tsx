import { cn } from "@/lib/utils"
import React, { MouseEventHandler } from "react"

interface iconButtonProps {
onClick?:MouseEventHandler<HTMLButtonElement>|undefined
icon:React.ReactElement
className?: string

}

const IconButton:React.FC<iconButtonProps> =(
    {
        onClick,
        icon,
        className
    }
)=>{
    return (
        <button  onClick={onClick}
        className= {cn("rounded-full flex items-center hover:text-white hover:bg-black justify-center border shadow-md hover:shadow-lg hover:scale-100 p-2 " ,className)}>
{icon}
        </button>
    )
} 
export default IconButton