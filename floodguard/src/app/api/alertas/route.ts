import { NextResponse } from "next/server";

let alertas: any[] = [];

export async function GET() {
  return NextResponse.json(alertas);
}

export async function POST(req: Request) {
  const body = await req.json();
  const novoAlerta = {
    id: alertas.length + 1,
    data: new Date().toISOString(),
    ...body,
    latitude: parseFloat(body.latitude),
    longitude: parseFloat(body.longitude),
  };
  alertas.push(novoAlerta);
  return NextResponse.json(novoAlerta, { status: 201 });
}