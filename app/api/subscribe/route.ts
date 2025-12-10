import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const response = await fetch(
      "https://default19c5fbd0b8174474a78b2d48ff2c5e.c5.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/d8de7ea855f04510884a51085c365703/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=xeRI9cyX5-A7rzOApeQ3RmqrAhJ1wD8Zf0m3L0UwXcU",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (!response.ok) {
      console.error("Power Automate error:", await response.text());
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}

