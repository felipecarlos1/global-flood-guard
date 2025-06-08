import { NextResponse } from "next/server";

let leituras: any[] = [];

export async function GET() {
  return NextResponse.json(leituras);
}

export async function POST(req: Request) {
  const body = await req.json();
  const novaLeitura = {
    id: leituras.length + 1,
    data: new Date().toISOString(),
    ...body,
  };
  leituras.push(novaLeitura);
  return NextResponse.json(novaLeitura, { status: 201 });
}