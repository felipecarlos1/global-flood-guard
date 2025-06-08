"use client";

import dynamic from "next/dynamic";

// Importa o componente com SSR desabilitado
const Mapa = dynamic(() => import("@/components/Mapa/Mapa"), {
  ssr: false,
});

export default function PaginaMapa() {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mapa de Risco</h1>
      <Mapa />
    </section>
  );
}