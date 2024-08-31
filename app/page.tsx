import { SignupButton } from "@/components/auth/signup-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {db} from "@/lib/db"
import { auth } from "@/auth";
import SignOutButton from "@/components/auth/signout-button";
import Container from "@/components/front-end/container";
import { Billboardcomponenet } from "@/components/front-end/billboard";
import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import  ProductList  from "@/components/front-end/product-list";

export const revalidate = 0

export default async function Home() {
  const session =await auth()
  // console.log(session?.user.id)
  // const userId =await auth()
    const billboard = await getBillboard("334c5bec-5d2f-4ba4-9c45-30da0c415b5c")
    const products = await getProducts({isFeatured:true})

  return (
    <Container>
      <div className="space-y-10 pb-10">
<Billboardcomponenet data={billboard}/>
     
      <div className="flex flex-col gap-y-8 px-4 ">
    <ProductList title="Featured Products" data={products}/>
    </div>
      </div>
    </Container>
  );
}
