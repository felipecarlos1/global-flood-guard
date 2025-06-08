import { NextResponse } from "next/server";

let configuracoes: any[] = [];

export async function GET() {
  return NextResponse.json(configuracoes);
}

export async function POST(req: Request) {
  const body = await req.json();
  const novaConfiguracao = {
    id: configuracoes.length + 1,
    ...body,
  };
  configuracoes.push(novaConfiguracao);
  return NextResponse.json(novaConfiguracao, { status: 201 });
}