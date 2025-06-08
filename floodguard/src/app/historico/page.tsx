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
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b py-2 text-left">Data</th>
            <th className="border-b py-2 text-left">Local</th>
            <th className="border-b py-2 text-left">Nível</th>
          </tr>
        </thead>
        <tbody>
          {historico.map((h: any) => (
            <tr key={h.id} className="border-t">
              <td className="py-2">{new Date(h.dataHora).toLocaleString()}</td>
              <td className="py-2">{h.localizacao}</td>
              <td className="py-2">{h.nivelMaximo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}