import qs from "query-string"
import { Product } from "@/types"
// interface productsProps{
//     data:Product[]
// }
interface QueryProps {
    categoryId?: string,
    colorId?: string,
    sizeId?: string,
    isFeatured?: boolean,


}
const URL =  `${process.env.NEXT_PUBLIC_API_URL}/products`
const getProducts = async (query: QueryProps): Promise<Product[]> => {
const url = qs.stringifyUrl({
   url:URL,
    query:{
        colorId: query.colorId,
        sizeId: query.sizeId,
        categoryId: query.categoryId,
        isFeatured: query.isFeatured
      
    },
});
    const res = await fetch(url)
    return res.json()
}
export default getProducts