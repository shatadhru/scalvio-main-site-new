import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || body.name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters." },
        { status: 400 },
      );
    }
    if (!body.email || !body.email.includes("@")) {
      return NextResponse.json(
        { error: "Valid work email required." },
        { status: 400 },
      );
    }
    if (!body.description || body.description.trim().length < 10) {
      return NextResponse.json(
        { error: "Description must be at least 10 characters." },
        { status: 400 },
      );
    }

    console.log("[Scalvio Lead Received]:", {
      name: body.name,
      email: body.email,
      company: body.company || "N/A",
      projectType: body.projectType,
      description: body.description,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process inquiry. Please email hello@scalvio.com" },
      { status: 500 },
    );
  }
}
