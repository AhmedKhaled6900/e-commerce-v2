import { NextResponse } from 'next/server';

import {db} from '@/lib/db';
import { auth } from '@/auth';
 
export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const userId  =  await auth();

    const body = await req.json();

    const { name, billboardId } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!billboardId) {
      return new NextResponse("Billboard Id is required", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
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

    const category = await db.category.create({
      data: {
        name: name,
        billboardId: billboardId,
        storeId: params.storeId,
      }
    });
  
    return NextResponse.json(category);
  } catch (error) {
    console.log('[CATEGORIES_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function GET(
 
  req: Request,
  { params }: { params: { storeId: string } }
  
) {


  try {
    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const categories = await db.category.findMany({
      where: {
        storeId: params.storeId
      }
    });
    return Response.json(categories);
  } catch (error) {
    console.log('[CATEGORIES_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
