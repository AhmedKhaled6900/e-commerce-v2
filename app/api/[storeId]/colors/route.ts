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

    const { name, value } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("name is required", { status: 400 });
    }

    if (!value) {
      return new NextResponse("value  is required", { status: 400 });
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

    const color = await db.color.create({
      data: {
        name,
        value,
        storeId: params.storeId,
      }
    });
  
    return NextResponse.json(color);
  } catch (error) {
    console.log('[COLORS_POST]', error);
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

    const colors = await db.color.findMany({
      where: {
        storeId: params.storeId
      }
    });
  // console.log(NextResponse.json(billboards))
    return Response.json({colors});
  } catch (error) {
    console.log('[COLORS_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
