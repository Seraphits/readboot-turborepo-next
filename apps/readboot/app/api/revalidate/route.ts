import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const body = await request.json();

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  const pathToRevalidate = body.path;
  if (pathToRevalidate) {
    revalidatePath(pathToRevalidate);
    return NextResponse.json({ revalidated: true, now: Date.now() });
  }

  return NextResponse.json({ message: "No path provided" }, { status: 400 });
}
