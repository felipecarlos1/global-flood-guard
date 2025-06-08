const BASE = "/api";

export async function getAlertas() {
  const res = await fetch(`${BASE}/alertas`);
  return res.json();
}

export async function postAlerta(data: any) {
  const res = await fetch(`${BASE}/alertas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getHistorico() {
  const res = await fetch(`${BASE}/historico`);
  return res.json();
}

export async function postHistorico(data: any) {
  const res = await fetch(`${BASE}/historico`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getLeituras() {
  const res = await fetch(`${BASE}/leituras`);
  return res.json();
}

export async function postLeitura(data: any) {
  const res = await fetch(`${BASE}/leituras`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getUsuarios() {
  const res = await fetch(`${BASE}/usuarios`);
  return res.json();
}

export async function postUsuario(data: any) {
  const res = await fetch(`${BASE}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getConfiguracoes() {
  const res = await fetch(`${BASE}/configuracoes`);
  return res.json();
}

export async function postConfiguracao(data: any) {
  const res = await fetch(`${BASE}/configuracoes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export function logout() {
  localStorage.removeItem("logado");
  localStorage.removeItem("usuarioId");
}