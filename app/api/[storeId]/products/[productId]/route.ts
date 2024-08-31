import { NextResponse } from "next/server";
import  {db} from "@/lib/db";
import { auth } from "@/auth";
export async function GET(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    if (!params.productId) {
      return new NextResponse("Product id is required", { status: 400 });
    }
    const product = await db.product.findUnique({
      where: {
        id: params.productId
      },
      include: {
      
        images: true,
        category: true,
        size: true,
        color: true,
        reviews: {
          include:{
            user:{
              select:{
                name:true,
                image:true
              }
            }
          }
        }
      }
    });
    return NextResponse.json(product)
  } catch (error) {
    console.log('[PRODUCT_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function DELETE(
  req: Request,
  { params }: { params: { productId: string, storeId: string } }
) {
  try {
    const  userId  =await auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.productId) {
      return new NextResponse("Product id is required", { status: 400 });
    }

    const storeByUserId = await db.store.findFirst({
      where: {
        id: params.storeId,
        userId: userId.user.id
      }
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const product = await db.product.deleteMany({
      where: {
        id: params.productId,
      }
    });
  
    return NextResponse.json(product);
  } catch (error) {
    console.log('[PRODUCT_DELETE]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};


export async function PATCH(
  req: Request,
  { params }: { params: { productId: string, storeId: string } }
) {
  try {   
    const  userId  = await auth();

    const body = await req.json();
    
    const { 
        name ,
        price ,
        categoryId,
        colorId,
        sizeId,
         images ,
         reviews,
        isFeatured,
        isArchived,
        description
        } = body;
    
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }
   
  
      if (!name) {
        return new NextResponse("Name is required", { status: 400 });
      }
  
      if (!price) {
        return new NextResponse("Price  is required", { status: 400 });
      }
  
      if (!categoryId) {
        return new NextResponse("Category Id  is required", { status: 400 });
      }
      if (!description) {
        return new NextResponse("Description  is required", { status: 400 });
      }
  
      // if (!colorId) {
      //   return new NextResponse("color Id  is required", { status: 400 });
      // }
      // if (!sizeId) {
      //   return new NextResponse("size Id  is required", { status: 400 });
      // }
      if (!images) {
        return new NextResponse("Image url is required", { status: 400 });
      }

    if (!params.productId) {
      return new NextResponse("Billboard id is required", { status: 400 });
    }

    const storeByUserId = await db.store.findFirst({
      where: {
        id: params.storeId,
        userId: userId.user.id
      }
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    await db.product.update({
        where:{
            id:params.productId
        },
        data:{
            name,
            price,
            categoryId,
            colorId,
            sizeId,
            images:{
              deleteMany:{}
            },
            reviews,
            isFeatured,
            isArchived,
            description
        }
    })
     
    const product = await db.product.update({
      where: {
        id: params.productId,
      },
      data: {
        images:{
            createMany:{
                data:[...images.map((image:{url:string})=>(image))],
            }
        },
      }
    });
  
    return NextResponse.json(product);
  } catch (error) {
    console.log('[BILLBOARD_PATCH]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};