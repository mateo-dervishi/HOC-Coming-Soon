import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 1. Save to Supabase (for dashboard visibility)
    try {
      const { error: supabaseError } = await supabase
        .from("newsletter_subscribers")
        .upsert(
          {
            email: email.toLowerCase().trim(),
            source: "coming_soon",
            subscribed_at: new Date().toISOString(),
            is_active: true,
            converted_to_account: false,
          },
          {
            onConflict: "email",
          }
        );

      if (supabaseError) {
        console.error("Supabase error:", supabaseError);
        // Don't fail the request, continue to Power Automate
      }
    } catch (supabaseErr) {
      console.error("Supabase connection error:", supabaseErr);
      // Don't fail the request, continue to Power Automate
    }

    // 2. Also send to Power Automate (existing flow to Excel)
    try {
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
        // Don't fail - we already saved to Supabase
      }
    } catch (paError) {
      console.error("Power Automate connection error:", paError);
      // Don't fail - we already saved to Supabase
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
