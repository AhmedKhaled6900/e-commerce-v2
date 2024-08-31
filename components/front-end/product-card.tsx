"use client"
import { Product } from "@/types"
import Image from "next/image"
import IconButton from "./icon-button"
import { Expand, ShoppingCart } from 'lucide-react';
import { useRouter } from "next/navigation";

interface ProductCardProps{
    product: Product
}

const ProductCard :React.FC<ProductCardProps> =({product})=>{
    const router =useRouter()
const habdleClick =()=>{
    router.push(`/product/${product.id}`)
}
    return(


        <div onClick={habdleClick} className=" bg-white cursor-pointer rounded-xl p-3 group border  space-y-4  ">

            <div className="aspect-square rounded-xl bg-gray-200 relative">
            <Image
                className=" aspect-square object-cover  rounded-md"
                src={product.images[0].url}
                alt={product.name} fill>
            </Image>
            <div className="opacity-0 group-hover:opacity-100 transition absolute top-0 left-0 right-0 bottom-0 bg-black/50 rounded-xl">
            <div className=" h-full p-5 flex gap-x-6 justify-center items-center ">
                 <IconButton className="mt-auto  hover:text-white hover:bg-black" onClick={() => {}} icon={<Expand className="w-6 h-6 text-white  " />}/>
                 <IconButton className="mt-auto  hover:text-white hover:bg-black" onClick={() => {}} icon={<ShoppingCart className="w-6 h-6   text-white" />}/>

            </div>
            </div>
            </div>
            <div className="flex flex-col justify-start gap-x-2" >
              <h3 className="text-lg font-bold">
              { product.name} 
              </h3>
                <div>
                {product.category.name}
                </div>
                <div>
                {`$${product.price}`}
                </div>
                <div style={{backgroundColor:product.color.name}} className="w-3 h-3 rounded-full">
                    
                </div>
            </div>
            </div>
    )
}
export default ProductCard