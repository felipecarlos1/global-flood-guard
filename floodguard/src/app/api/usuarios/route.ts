import { NextRequest, NextResponse } from "next/server";

const API_BASE = "https://gs-api-floodguard-production.up.railway.app";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await fetch(`${API_BASE}/usuarios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro na rota de proxy POST /usuarios:", error);
    return NextResponse.json({ error: "Erro ao cadastrar" }, { status: 500 });
  }
}