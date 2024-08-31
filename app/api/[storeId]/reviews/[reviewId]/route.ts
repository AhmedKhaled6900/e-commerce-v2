import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// Delete a review
export async function DELETE(req: NextRequest, { params }: { params: { reviewId: string } }) {
  try {
    const session = await auth(); // Fetch the current session
    const { reviewId } = params;
const userId =session ?.user.id
    if (!userId) {
      return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 });
    }

    if (!reviewId) {
      return NextResponse.json({ error: 'Review ID is required.' }, { status: 400 });
    }

    // Fetch the review to check ownership
    const review = await db.review.findUnique({
      where: { id: reviewId },
    });

    if (!review) {
      return NextResponse.json({ error: 'Review not found.' }, { status: 404 });
    }

    // Check if the current user is the owner of the review
    if (review.userId !== userId) {
      return NextResponse.json({ error: 'Not authorized.' }, { status: 403 });
    }

    // Delete the review
    await db.review.delete({
      where: { id: reviewId },
    });

    return NextResponse.json({ message: 'Review deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting review:', error);
    return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 });
  }
}
