import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

type ContactPayload = {
  name: string;
  email: string;
  organization?: string;
  eventType?: string;
  message?: string;
};

// Simple in-memory rate limiting
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now > record.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body: ContactPayload = await request.json();

    // Validation
    if (!body.name?.trim() || !body.email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const sanitized = {
      name: body.name.trim().slice(0, 200),
      email: body.email.trim().toLowerCase().slice(0, 254),
      organization: body.organization?.trim().slice(0, 200) || null,
      eventType: body.eventType?.trim().slice(0, 100) || null,
      message: body.message?.trim().slice(0, 2000) || null,
    };

    // Persist to database if available, otherwise log
    if (prisma) {
      await prisma.contactSubmission.create({
        data: sanitized,
      });
    } else {
      console.log("[contact] Submission (no DB connected):", sanitized);
    }

    return NextResponse.json(
      { success: true, message: "Inquiry received." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[contact] Error processing submission:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
