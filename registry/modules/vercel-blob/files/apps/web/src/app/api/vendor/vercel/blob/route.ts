import { NextResponse } from "next/server";

import { uploadBlob } from "@/lib/vercel/blob";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");
  if (!(file instanceof Blob)) return NextResponse.json({ error: "file is required" }, { status: 400 });

  const blob = await uploadBlob("uploads/" + crypto.randomUUID(), file);
  return NextResponse.json(blob);
}
