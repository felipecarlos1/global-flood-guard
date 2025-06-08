import { NextResponse } from "next/server";

let historico: any[] = [];

export async function GET() {
  return NextResponse.json(historico);
}

export async function POST(req: Request) {
  const body = await req.json();
  const novoRegistro = {
    id: historico.length + 1,
    data: new Date().toISOString(),
    ...body,
  };
  historico.push(novoRegistro);
  return NextResponse.json(novoRegistro, { status: 201 });
}