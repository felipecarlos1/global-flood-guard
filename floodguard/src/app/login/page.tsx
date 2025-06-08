"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getUsuarios } from "@/lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const usuarios = await getUsuarios();
    const user = usuarios.find((u: any) => u.email === email && u.senha === senha);

    if (user) {
      localStorage.setItem("logado", "true");
      localStorage.setItem("usuarioId", user.id);
      window.location.href = "/";
    } else {
      alert("Email ou senha inválidos");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Login</h1>
      <form onSubmit={handleLogin} className="w-full max-w-md bg-white rounded shadow p-6 space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full border p-2 rounded"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Entrar
        </button>
        <p className="text-sm text-center">
          Ainda não tem uma conta?{" "}
          <a href="/cadastro" className="text-blue-600 underline">
            Cadastre-se
          </a>
        </p>
      </form>
    </section>
  );
}