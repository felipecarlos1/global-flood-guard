"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// Define níveis esperados
type Nivel = "baixo" | "medio" | "alto";

// Ícones conforme nível
const icons: Record<Nivel, L.Icon> = {
  baixo: new L.Icon({
    iconUrl: "/icone-verde.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  }),
  medio: new L.Icon({
    iconUrl: "/icone-amarelo.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  }),
  alto: new L.Icon({
    iconUrl: "/icone-vermelho.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  }),
};

interface Alerta {
  id: number;
  tipoAlerta: string;
  descricao: string;
  dataHora: string;
  localizacao: string; // se latitude/longitude vierem em localizacao, precisamos parse
  gravidade: string;
  latitude?: number;
  longitude?: number;
}

export default function Mapa() {
  const [alertas, setAlertas] = useState<Alerta[]>([]);
  const [filtroNivel, setFiltroNivel] = useState("todos");

  useEffect(() => {
    fetch("/api/alertas")
      .then(res => res.json())
      .then((data: Alerta[]) => {
        // se localizacao for string tipo "lat,lng", separa:
        const parsed = data.map(a => {
          let lat: number | undefined, lng: number | undefined;
          if (a.latitude && a.longitude) {
            lat = a.latitude; lng = a.longitude;
          } else if (a.localizacao?.includes(",")) {
            const [sLat, sLng] = a.localizacao.split(",");
            lat = parseFloat(sLat);
            lng = parseFloat(sLng);
          }
          return { ...a, latitude: lat, longitude: lng };
        });
        setAlertas(parsed);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="flex gap-2 justify-center mb-4">
        {["todos", "baixo", "medio", "alto"].map(n => (
          <button
            key={n}
            onClick={() => setFiltroNivel(n)}
            className={`px-4 py-1 rounded text-white ${filtroNivel === n
              ? (n === "baixo" ? "bg-green-600"
                : n === "medio" ? "bg-yellow-500" : "bg-red-600")
              : "bg-gray-300 text-black"}`}
          >
            {n.charAt(0).toUpperCase() + n.slice(1)}
          </button>
        ))}
      </div>

      <div className="h-[500px] w-full">
        <MapContainer center={[-23.55, -46.63]} zoom={11} scrollWheelZoom style={{ height: "100%", width: "100%" }}>
          <TileLayer attribution="&copy; OpenStreetMap" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {alertas
            .filter(a => {
              const nivel = (a.gravidade || "baixo").toLowerCase();
              return filtroNivel === "todos" || nivel === filtroNivel;
            })
            .map(a => {
              if (a.latitude == null || a.longitude == null) return null;
              const nivel = (a.gravidade || "baixo").toLowerCase() as Nivel;
              const icon = icons[nivel] || icons.baixo;
              return (
                <Marker key={a.id} position={[a.latitude, a.longitude]} icon={icon}>
                  <Popup>
                    <strong>{a.tipoAlerta}</strong><br/>
                    {a.descricao}<br/>
                    <em>{a.localizacao}</em><br/>
                    <small>{new Date(a.dataHora).toLocaleString()}</small>
                  </Popup>
                </Marker>
              );
            })}
        </MapContainer>
      </div>
    </div>
  );
}
