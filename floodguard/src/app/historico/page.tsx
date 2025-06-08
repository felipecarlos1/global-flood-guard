"use client";
import { useEffect, useState } from "react";
import { getHistorico } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function HistoricoPage() {
  const [historico, setHistorico] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("logado")) {
      router.push("/login");
      return;
    }
    getHistorico().then(setHistorico).catch(console.error);
  }, []);

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Histórico de Enchentes</h1>
      <table className="w-full">
        <thead><tr><th>Data</th><th>Local</th><th>Nível</th></tr></thead>
        <tbody>
          {historico.map((h: any) => (
            <tr key={h.id} className="border-t">
              <td>{h.data}</td>
              <td>{h.localizacao}</td>
              <td>{h.nivel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
