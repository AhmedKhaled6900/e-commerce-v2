"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog"

interface ModalProps {
    title: string
    discription: string
    isOpen :boolean
    onClose: ()=>void
    children? :React.ReactNode
}
export const Modal:React.FC<ModalProps> =({
    title,
    discription,
    isOpen,
    onClose,
    children
})=>{
    const onChange =(open :boolean)=>{
        if(!open)
        onClose()
    }
    return (
        <div>
            <Dialog open={isOpen} onOpenChange={onChange}>
                <DialogContent>
                <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                    {discription}
                </DialogDescription>
                </DialogHeader>
             
<div>
{children}

</div>
                </DialogContent>
            </Dialog>
        </div>
    )

}