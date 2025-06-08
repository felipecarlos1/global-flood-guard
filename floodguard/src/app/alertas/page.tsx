"use client";

import { useEffect, useState } from "react";
import { getAlertas } from "@/lib/api";
import Botao from "@/components/Botao/Botao";

interface Alerta {
  id: number;
  nivel?: string;
  gravidade?: string;
  descricao: string;
  latitude: number;
  longitude: number;
  data?: string;
  dataHora?: string;
}

export default function AlertasPage() {
  const [alertas, setAlertas] = useState<Alerta[]>([]);
  const [filtroNivel, setFiltroNivel] = useState("todos");

  useEffect(() => {
    getAlertas()
      .then((data) => {
        console.log("Alertas recebidos:", data);
        setAlertas(data);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Alertas Ativos</h1>

      <div className="flex gap-2 mb-6">
        {["todos", "baixo", "medio", "alto"].map((nivel) => (
          <Botao
            key={nivel}
            onClick={() => setFiltroNivel(nivel)}
            className={`text-sm ${
              filtroNivel === nivel
                ? nivel === "baixo"
                  ? "bg-green-600 hover:bg-green-700"
                  : nivel === "medio"
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : nivel === "alto"
                  ? "bg-red-600 hover:bg-red-700"
                  : ""
                : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
          >
            {nivel.charAt(0).toUpperCase() + nivel.slice(1)}
          </Botao>
        ))}
      </div>

      <ul className="space-y-4">
        {alertas
          .filter((a) => {
            const nivel = (a.nivel || a.gravidade || "").toLowerCase();
            return filtroNivel === "todos" || nivel === filtroNivel;
          })
          .map((alerta) => (
            <li key={alerta.id} className="border p-4 rounded shadow-sm bg-white">
              <strong className="block mb-1 capitalize">
                Nível: {alerta.nivel || alerta.gravidade}
              </strong>
              <p className="text-sm text-gray-700 mb-1">{alerta.descricao}</p>
              <p className="text-xs text-gray-500">
                Lat: {alerta.latitude} | Lng: {alerta.longitude}
              </p>
              <p className="text-xs text-gray-400">
                {new Date(alerta.data || alerta.dataHora || "").toLocaleString()}
              </p>
            </li>
          ))}
      </ul>
    </section>
  );
}