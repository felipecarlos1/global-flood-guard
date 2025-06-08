interface Usuario {
  nome: string;
  email: string;
  senha: string;
  cidade: string;
  bairro: string;
  tipo_usuario?: string;
  id?: number;
}

export const usuarios: Usuario[] = [];