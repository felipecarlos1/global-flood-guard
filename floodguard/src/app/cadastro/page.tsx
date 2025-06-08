"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { postUsuario } from "@/lib/api";

export default function CadastroPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    cidade: "",
    bairro: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await postUsuario(form);
    if (res?.id) {
      localStorage.setItem("logado", "true");
      localStorage.setItem("usuarioId", res.id);
      window.location.href = "/";
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Cadastro</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded shadow p-6 space-y-4"
      >
        <input
          type="text"
          placeholder="Nome"
          className="w-full border p-2 rounded"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full border p-2 rounded"
          value={form.senha}
          onChange={(e) => setForm({ ...form, senha: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Cidade"
          className="w-full border p-2 rounded"
          value={form.cidade}
          onChange={(e) => setForm({ ...form, cidade: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Bairro"
          className="w-full border p-2 rounded"
          value={form.bairro}
          onChange={(e) => setForm({ ...form, bairro: e.target.value })}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Cadastrar
        </button>
        <p className="text-sm text-center">
          Já tem uma conta?{" "}
          <a href="/login" className="text-blue-600 underline">
            Fazer login
          </a>
        </p>
      </form>
    </section>
  );
}