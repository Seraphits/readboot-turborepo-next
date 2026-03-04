import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const body = await request.json();

  // 1. Verify the secret matches your.env.local
  if (secret!== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  // 2. Clear the specific post or category path sent by WordPress
  const pathToRevalidate = body.path; // e.g. /docs/blog/tech/nextjs-guide
  if (pathToRevalidate) {
    revalidatePath(pathToRevalidate);
    return NextResponse.json({ revalidated: true, now: Date.now() });
  }

  return NextResponse.json({ message: 'No path provided' }, { status: 400 });
}
