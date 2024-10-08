import {format} from "date-fns";
import { db } from "@/lib/db";
import { ProductsClient } from "./components/client";
import Image from "next/image";
import { formatter } from "@/lib/utils";
import { ProductColumn } from "./components/columns";

const ProductsPage = async ({ params }: { params: { storeId: string } }) => {
const products = await db.product.findMany({
    where: {
        storeId: params.storeId,
    },
  include:{
    category :true,
    size:true,
    color:true,
    reviews:true,
    // description:true
  }
    ,
    orderBy: { 
        createdAt: "desc" 
    },
  });
   const categories = await db.category.findMany({
    where: {
        storeId: params.storeId,
    },
   })
  const formattedProducts : ProductColumn[] = products.map((item) => ({
    id : item.id,
    name: item.name,
    isFeatured : item.isFeatured,
    isArchived :item.isArchived,
    price: formatter.format(item.price.toNumber()),
    reviews: item.reviews.length,
    // reviews:item.reviews,
    category :item.category.name,
    size: item.size.name,
    
    color:item.color.value,
    description: item.description,
    createdAt : format(item.createdAt, 'MMMM do,yyyy'),
    updatedAt : format(item.createdAt, 'MMMM do,yyyy')
  }))
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6 ">
        <ProductsClient data = {formattedProducts} />
      </div>
    </div>
  );
};
export default ProductsPage;
