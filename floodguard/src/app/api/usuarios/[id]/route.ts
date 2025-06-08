import { NextRequest, NextResponse } from "next/server";
import { usuarios } from "@/lib/usuariosDB";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const body = await req.json();
  const index = usuarios.findIndex((u) => u.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
  }

  usuarios[index] = { ...usuarios[index], ...body };
  return NextResponse.json(usuarios[index]);
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const usuario = usuarios.find((u) => u.id === id);

  if (!usuario) {
    return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
  }

  return NextResponse.json(usuario);
}