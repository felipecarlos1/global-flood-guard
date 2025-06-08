import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://gs-api-floodguard-production.up.railway.app/historico-enchentes";

export async function GET() {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data);
}