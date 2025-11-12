import { NextResponse } from "next/server";
import { z } from "zod";

const applicationSchema = z.object({
  intent: z
    .enum(["apply", "stay-informed", "newsletter"])
    .default("apply")
    .optional(),
  fullName: z.string().min(2).optional(),
  email: z.string().email(),
  whatsapp: z.string().min(6).optional(),
  visaStatus: z.string().optional(),
  drivingLicense: z.string().optional(),
  languages: z.string().optional(),
  coverLetter: z.string().optional(),
  cvUrl: z.string().url().optional(),
  cvFileName: z.string().optional(),
  videoUrl: z.string().url().optional(),
  videoFileName: z.string().optional(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const parseResult = applicationSchema.safeParse(body);

  if (!parseResult.success) {
    return NextResponse.json(
      { error: "Validation failed.", details: parseResult.error.flatten() },
      { status: 422 },
    );
  }

  const data = parseResult.data;
  const intent = data.intent ?? "apply";

  const payload = {
    intent,
    receivedAt: new Date().toISOString(),
    submission: data,
  };

  const webhook = process.env.CAREERS_WEBHOOK_URL;

  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error("[careers/apply] Webhook error", error);
      return NextResponse.json(
        { error: "Unable to forward application." },
        { status: 502 },
      );
    }
  } else {
    console.log("[careers/apply] Mock submission", payload);
  }

  return NextResponse.json({ status: "ok" });
}


