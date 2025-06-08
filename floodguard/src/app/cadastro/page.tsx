"use client";

import { useState } from "react";
import { cadastrarUsuario } from "@/lib/api";

export default function CadastroPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    cidade: "",
    bairro: "",
  });
  const [mensagem, setMensagem] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await cadastrarUsuario(form);
      setMensagem("Usuário cadastrado com sucesso!");
      console.log("Resposta:", res);
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      setMensagem("Erro ao cadastrar usuário.");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-white shadow rounded">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">Cadastro</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={form.nome}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
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
          <input
            type="text"
            name="cidade"
            placeholder="Cidade"
            value={form.cidade}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            name="bairro"
            placeholder="Bairro"
            value={form.bairro}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
          >
            Cadastrar
          </button>
        </form>
        {mensagem && <p className="text-sm text-center text-gray-700 mt-2">{mensagem}</p>}
      </div>
    </section>
  );
}
