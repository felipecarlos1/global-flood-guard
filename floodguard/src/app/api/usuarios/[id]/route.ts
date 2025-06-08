import { NextRequest, NextResponse } from "next/server";

const API_BASE = "https://gs-api-floodguard-production.up.railway.app";

// GET /api/usuarios/:id → retorna um usuário específico
export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const res = await fetch(`${API_BASE}/usuarios/${params.id}`);
  const data = await res.json();
  return NextResponse.json(data);
}

// PUT /api/usuarios/:id → atualiza um usuário
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();

  const res = await fetch(`${API_BASE}/usuarios/${params.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
