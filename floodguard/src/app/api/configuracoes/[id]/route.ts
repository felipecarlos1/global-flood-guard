import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://gs-api-floodguard-production.up.railway.app/configuracoes";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const res = await fetch(`${BASE_URL}/${params.id}`);
  const data = await res.json();
  return NextResponse.json(data);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const res = await fetch(`${BASE_URL}/${params.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data);
}