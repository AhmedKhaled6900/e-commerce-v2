import { auth } from '@/auth';
;
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';


export async function POST(
  req: Request,
) {
  try {
    const userId =await auth();
    console.log(userId);
    const body = await req.json();
    const { name } = body;
    console.log(body);
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const store = await db.store.create({
      data: {
        name,
        userId: userId.user.id,
      }
    });
  
    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORES_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
