import { NextRequest, NextResponse } from "next/server";
import { usuarios } from "@/lib/usuariosDB";

export async function GET() {
  return NextResponse.json(usuarios);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const novoUsuario = {
    id: usuarios.length + 1,
    nome: body.nome,
    email: body.email,
    senha: body.senha,
    cidade: body.cidade ?? "",
    bairro: body.bairro ?? "",
  };
  usuarios.push(novoUsuario);
  return NextResponse.json(novoUsuario, { status: 201 });
}