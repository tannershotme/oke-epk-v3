import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  organization?: string;
  eventType?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Log for now — wire to email service (Resend, SendGrid, etc.) in production
    console.log("Contact form submission:", body);

    return NextResponse.json(
      { success: true, message: "Inquiry received." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
