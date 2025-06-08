import { NextRequest, NextResponse } from "next/server";

const API_BASE = "https://gs-api-floodguard-production.up.railway.app";

// GET /api/alertas → lista todos os alertas
export async function GET() {
  const res = await fetch(`${API_BASE}/alertas`);
  const data = await res.json();
  return NextResponse.json(data);
}

// POST /api/alertas → cria novo alerta
export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch(`${API_BASE}/alertas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
