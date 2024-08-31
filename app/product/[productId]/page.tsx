import getProducts from "@/actions/get-products";
import getProduct from "@/actions/getProduct";
import { ProductsClient } from "@/app/dashboard/(dashboard)/[storeId]/(routes)/products/components/client";
import Container from "@/components/front-end/container";
import Gallery from "@/components/front-end/gallery";
import Info from "@/components/front-end/gallery/info";
import ProductList from "@/components/front-end/product-list";
import ReviewForm from "@/components/front-end/review-form";
import { Review } from "@/types";
import Image from "next/image";
import avatar from "@/public/images.png";
import UserReview from "@/components/front-end/user-reviews";
import getReview from "@/actions/get-review";
import { db } from "@/lib/db";

interface ProductPageProps{
    params:{
        productId:string
    }
}
const ProductPage:React.FC<ProductPageProps>  = async ({params}) => {
    const product =await getProduct(params.productId)

// const  reviewId = await db.review.findUnique({
//     where :{
//         id: product.
//     }
// })

const suggestedProducts = await getProducts({ categoryId:product.category.id})
    return <div>
<Container>
<div className="px-4 py-10 ">
<div className=" lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 lg:items-start lg:gap-x-8 gap-4 ">
<Gallery images={product.images}></Gallery>
<div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
<Info data={product}/>
<div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
    <ReviewForm data={product}></ReviewForm>
</div>
</div>



</div>
<hr className="my-10"/>

<div>

    <UserReview product={product}>

    </UserReview>
{/* {product.reviews.map((review:Review)=>(
 <><div key={review.id} className="flex justify-between items-center my-5 gap-x-5">
        <div className="flex flex-col justify-center items-center ">
            <div>
                <h3 className="font-semibold text-xl mb-3">
                    {review.user.name}
                </h3>
            </div>
            {review.user.image === null || undefined ?
                <Image src={avatar} width={50} height={50} alt="user image" /> :
                <Image src={`url${review.user.image}`}
                    width={50} height={50} alt={"user image"} />}

        </div>

        <div >
            <p className="mt-3">
            {review.comment}

            </p>
        </div>
    </div><hr className="my-10" /></>


))} */}
</div>
</div>
<hr className="my-10"/>
    <div className="mt-10 px-4 py-10 sm:mt-16  lg:mt-0">
        <ProductList title="Suggested Products" data={suggestedProducts} />

    </div>
</Container>

    </div>;
};
export default ProductPage;