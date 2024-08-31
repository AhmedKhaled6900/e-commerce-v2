import { Product } from "@/types"
import { title } from "process"
import { NoResult } from "./no-results"
import ProductCard from "./product-card"

interface ProductListProps {
    title:string
    data:Product[]
}
  const ProductList :React.FC<ProductListProps> =({ title,data })=>{

    return(
        <div className="space-y-4 ">
     <h3 className="font-bold text-3xl ">
        {title}
     </h3>
     {!data.length && (     
         <NoResult></NoResult>        
     )}
<div className="grid grid-cols-2 lg:grid-cols-5 md:grid md:grid-cols-3 lg:items-start lg:gap-x-8 gap-4 ">
{
    data.map((product)=>(
        <ProductCard key={product.id} product={product}></ProductCard>
    ))
}
</div>

        </div>
    )
}
export default ProductList