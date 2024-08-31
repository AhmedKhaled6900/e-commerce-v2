import {format} from "date-fns";
import { db } from "@/lib/db";
// import { OrdersClient } from "./components/client";
import Image from "next/image";
import {formatter} from "@/lib/utils"
// import { OrdersClient } from "./components/client";
const OrdersPage = async ({ params }: { params: { storeId: string } }) => {
const orders = await db.order.findMany({
    where: {
        storeId: params.storeId,
    },
    include:{
        orderItems:{
            include:{
                product:true
            }
        }
    },
    orderBy: { 
        createdAt: "desc" 
    },
  });

  const formattedOrders = orders.map((order) => ({
    id : order.id,
phone :order.phone,
address :order.address,
products:order.orderItems.map((orderitem)=> orderitem.product.name).join(", "),
totalPrice : formatter.format(order.orderItems.reduce((total ,item)=>{
    return total + Number(item.product.price)
},0)),
isPaid:order.isPayed,
    createdAt : format(order.createdAt, 'MMMM do,yyyy')
  }))
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6 ">
        {/* <OrdersClient data = {formattedOrders} /> */}
      </div>
    </div>
  );
};
export default OrdersPage;
