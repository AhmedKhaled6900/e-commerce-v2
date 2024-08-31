import { db } from "@/lib/db";
import {  SizeForm } from "./components/sizes-form";
// import { BillboardForm } from "./components/billboard-form";

const SizePage = async({params}:{params:{sizeId:string , storeId:string}})=>{
    const Size = await db.size.findUnique({
        where: {
            id: params.sizeId
        }
    })
    // const billboards =await db.billboard.findMany({
    //     where: {
    //         storeId: params.storeId
    //     }
    // })
    return (
        <>
<div className="flex-col">
    <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm  initialData={Size}></SizeForm>

    </div>
</div>
        </>
    )
}
export default SizePage