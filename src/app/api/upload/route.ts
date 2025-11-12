import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

const MAX_FILE_SIZE = 250 * 1024 * 1024; // 250 MB

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");

  if (!file || !(file instanceof File)) {
    return NextResponse.json(
      { error: "File is required." },
      { status: 400 },
    );
  }

  if (file.size > MAX_FILE_SIZE) {
    return NextResponse.json(
      { error: "File exceeds 250MB limit." },
      { status: 413 },
    );
  }

  const safeName = file.name
    ? file.name.replace(/[^a-zA-Z0-9.-]+/g, "-").toLowerCase()
    : `upload-${randomUUID()}`;

  const key = `${Date.now()}-${safeName}`;
  const bucketBase =
    process.env.CAREERS_UPLOAD_BASE_URL ??
    "https://mock.alpha-star-properties.com/uploads";

  // Mock persistence: consume the stream to simulate processing.
  await file.arrayBuffer();

  console.log(
    `[careers/upload] Received ${file.name} (${file.size} bytes) -> ${bucketBase}/${key}`,
  );

  return NextResponse.json({
    url: `${bucketBase}/${key}`,
    fileName: file.name,
  });
}


