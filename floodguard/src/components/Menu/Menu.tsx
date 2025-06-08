"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/api";

export default function Menu() {
  const router = useRouter();
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLogado = localStorage.getItem("logado") === "true";
      setLogado(isLogado);
    }
  }, []);

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  return (
    <nav className="menu flex justify-between items-center px-6 py-4">
      <span className="text-3xl font-extrabold text-blue-700">FloodGuard</span>
      <ul>
        <li className="inline p-10"><Link href="/">Início</Link></li>
        <li className="inline p-10"><Link href="/mapa">Mapa</Link></li>
        {!logado && (
          <>
            <li className="inline p-10"><Link href="/login">Login</Link></li>
            <li className="inline p-10"><Link href="/cadastro">Cadastro</Link></li>
          </>
        )}
        {logado && (
          <>
            <li className="inline p-10"><Link href="/alertas">Alertas</Link></li>
            <li className="inline p-10"><Link href="/historico">Histórico</Link></li>
            <li className="inline p-10"><Link href="/configuracoes">Configurações</Link></li>
            <li className="inline p-10">
              <button onClick={handleLogout} className="text-red-600">Sair</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}