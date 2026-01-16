import axios from "axios";
import type { Usuario } from "../models/Usuario";
import type UsuarioLogin from "../models/UsuarioLogin";

const api = axios.create({
  baseURL: "https://blogpessoal-nest-1-wxh2.onrender.com",
});

export const cadastrarUsuario = async (
  url: string,
  dados: Usuario,
  setDados: (data: Usuario) => void
): Promise<void> => {
  try {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
  } catch (erro) {
    console.error("Erro ao cadastrar usuário:", erro);
    throw erro;
  }
};

export const login = async (
  url: string,
  dados: { usuario: string; senha: string },
  setDados: (data: UsuarioLogin) => void
): Promise<void> => {
  try {
    const resposta = await api.post<UsuarioLogin>(url, dados);
    setDados(resposta.data);
    // Armazenar token no localStorage para autenticação futura
    if (resposta.data.token) {
      localStorage.setItem("token", resposta.data.token);
    }
  } catch (erro) {
    console.error("Erro ao fazer login:", erro);
    throw erro;
  }
};
