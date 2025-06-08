"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ConfiguracoesPage() {
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
    cidade: "",
    bairro: ""
  });
  const router = useRouter();

  useEffect(() => {
    const id = localStorage.getItem("usuarioId");
    if (!id) return router.push("/login");

    fetch(`/api/usuarios/${id}`)
      .then(res => res.json())
      .then(data => {
        setUsuario({
          email: data.email ?? "",
          senha: data.senha ?? "",
          cidade: data.cidade ?? "",
          bairro: data.bairro ?? ""
        });
      })
      .catch(console.error);
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsuario(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = localStorage.getItem("usuarioId");
    await fetch(`/api/usuarios/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    alert("Alterações salvas com sucesso.");
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Configurações</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded shadow p-6 space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={usuario.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Nova Senha"
          className="w-full border p-2 rounded"
          value={usuario.senha}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          className="w-full border p-2 rounded"
          value={usuario.cidade}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bairro"
          placeholder="Bairro"
          className="w-full border p-2 rounded"
          value={usuario.bairro}
          onChange={handleChange}
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Salvar Alterações
        </button>
      </form>
    </section>
  );
}