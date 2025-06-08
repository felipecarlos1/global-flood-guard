"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", senha: "" });
  const [mensagem, setMensagem] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.email === "admin@admin.com" && form.senha === "admin") {
      localStorage.setItem("logado", "true");
      localStorage.setItem("usuarioId", "1");
      router.push("/mapa");
    } else {
      setMensagem("Email ou senha inválidos.");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-white shadow rounded">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={form.senha}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Entrar
          </button>
        </form>
        {mensagem && <p className="text-sm text-red-500 mt-2 text-center">{mensagem}</p>}
        <p className="text-sm text-center mt-4">
          Ainda não tem uma conta? <a href="/cadastro" className="text-blue-600 underline">Cadastre-se</a>
        </p>
      </div>
    </section>
  );
}
