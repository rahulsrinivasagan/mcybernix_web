import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, timeline, date, message } = body;

    const payload = {
      timestamp: new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }) + " (IST)",
      name: name || "",
      email: email || "",
      phone: phone || "",
      service: service || "",
      budget: budget || "",
      timeline: timeline || "",
      preferredDate: date || "",
      message: message || "",
    };

    // Forward to Google Apps Script Webhook URL if configured
    const googleSheetUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      process.env.GOOGLE_SHEETS_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

    if (googleSheetUrl) {
      try {
        const response = await fetch(googleSheetUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          console.warn("Google Sheets submission returned status:", response.status);
        }
      } catch (sheetErr) {
        console.error("Failed to forward to Google Sheets webhook:", sheetErr);
      }
    } else {
      console.log("Contact submission received:", payload);
    }

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}
