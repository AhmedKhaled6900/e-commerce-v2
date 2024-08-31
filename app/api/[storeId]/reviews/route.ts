// // app/api/reviews/route.ts

// import { db } from '@/lib/db';
// import { NextResponse } from 'next/server';
// import { auth } from '@/auth';
// export async function POST(req: Request,
//     { params }: { params: { productId: string} }
// ) {
//   try {
//     const body = await req.json();
//     const {productId,  rating, comment } = body;

// const userId = await auth();
//     // Input validation
//     if (!params.productId || !userId || !rating) {
//       return NextResponse.json({ error: 'Product ID, User ID, and Rating are required.' }, { status: 400 });
//     }

    
//     // Create a new review in the database
//     const newReview = await db.review.create({
//       data: {
//         productId,
//         userId: userId.user.id,
//         rating,
//         comment,
//       },
//       // product: {
//       //   connect: { id: productId },
//       // },
//       // user: {
//       //   connect: { id: userId },
//       // },
//       // connect:{
//       //   productId:productId
//       // }
//     });

//     return NextResponse.json(newReview, { status: 200 });
//   } catch (error) {
//     console.error('Error adding review:', error);
//     return NextResponse.json({ error: 'Failed to add review. Please try again.' }, { status: 400 });
//   }
// }
// app/api/[storeId]/reviews/route.ts

import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { productId, userId,  rating, comment } = await req.json();

// console.log(productId)
// console.log(userId)
    // Validate input
    if (!productId ) {
      return NextResponse.json({ error: 'Product ID, is required.' }, { status: 400 });
    }
    if (!userId ) {
      return NextResponse.json({ error: 'User ID, is required.' }, { status: 400 });
    }
    if (!rating ) {
      return NextResponse.json({ error: 'rating , is required.' }, { status: 400 });
    }

    // Create the review
    const review = await db.review.create({
      data: {
        productId,
        userId,
        rating: parseInt(rating, 10),
        comment,
      },
   
    });

    const user = await db.user.findUnique({
      where: { id: userId },
      select: {
        name: true,
        image: true,
      },
    });
    console.log(user)
    const userReview ={
      ...review , 
      user
    }

    return NextResponse.json(userReview, { status: 201 });
  } catch (error) {
    console.error('Error adding review:', error);
    return NextResponse.json({ error: 'Failed to add review' }, { status: 500 });
  }
}
