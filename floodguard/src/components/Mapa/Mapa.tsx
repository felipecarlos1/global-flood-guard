"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// Tipagem para níveis
type Nivel = "baixo" | "medio" | "alto";

const icons: Record<Nivel, L.Icon> = {
  baixo: new L.Icon({
    iconUrl: "/leaflet/marker-icon-verde.png",
    shadowUrl: "/leaflet/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  }),
  medio: new L.Icon({
    iconUrl: "/leaflet/marker-icon-amarelo.png",
    shadowUrl: "/leaflet/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  }),
  alto: new L.Icon({
    iconUrl: "/leaflet/marker-icon-vermelho.png",
    shadowUrl: "/leaflet/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  }),
};

export default function Mapa() {
  const [alertas, setAlertas] = useState<any[]>([]);
  const [filtroNivel, setFiltroNivel] = useState("todos");

  useEffect(() => {
    fetch("/api/alertas")
      .then((res) => res.json())
      .then(setAlertas)
      .catch(console.error);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex gap-2 justify-center">
        {["todos", "baixo", "medio", "alto"].map((nivel) => (
          <button
            key={nivel}
            onClick={() => setFiltroNivel(nivel)}
            className={`px-4 py-1 rounded text-white text-sm transition ${
              filtroNivel === nivel
                ? nivel === "baixo"
                  ? "bg-green-600"
                  : nivel === "medio"
                  ? "bg-yellow-500"
                  : nivel === "alto"
                  ? "bg-red-600"
                  : "bg-gray-600"
                : "bg-gray-300 text-black"
            }`}
          >
            {nivel.charAt(0).toUpperCase() + nivel.slice(1)}
          </button>
        ))}
      </div>

      <div className="h-[500px] w-full z-0">
        <MapContainer center={[-23.55, -46.63]} zoom={11} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {alertas
            .filter((a) => filtroNivel === "todos" || a.nivel.toLowerCase() === filtroNivel)
            .map((alerta) => {
              const nivel = alerta.nivel.toLowerCase() as Nivel;
              const icon = icons[nivel] || icons.baixo;

              return (
                <Marker
                  key={alerta.id}
                  position={[alerta.latitude, alerta.longitude]}
                  icon={icon}
                >
                  <Popup>
                    <strong>{alerta.nivel}</strong><br />
                    {alerta.descricao}<br />
                    <small>{new Date(alerta.data).toLocaleString()}</small>
                  </Popup>
                </Marker>
              );
            })}
        </MapContainer>
      </div>
    </div>
  );
}
