import { NextResponse } from "next/server";

interface Leitura {
  id: number;
  sensor: string;
  valor: number;
  unidade: string;
  dataHora: string;
}

export async function GET() {
  const leituras: Leitura[] = [
    {
      id: 1,
      sensor: "chuva-01",
      valor: 25.4,
      unidade: "mm",
      dataHora: "2025-06-08T14:00:00Z",
    },
    {
      id: 2,
      sensor: "nivel-rio-02",
      valor: 3.2,
      unidade: "m",
      dataHora: "2025-06-08T14:05:00Z",
    },
  ];

  return NextResponse.json(leituras);
}
