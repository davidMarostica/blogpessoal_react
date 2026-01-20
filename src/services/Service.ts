import axios from "axios";
import type { Usuario } from "../models/Usuario";
import type UsuarioLogin from "../models/UsuarioLogin";
import type Tema from "../models/Tema";

const api = axios.create({
  baseURL: "https://blogpessoal-nest-1-wxh2.onrender.com",
});

export const cadastrarUsuario = async (
  url: string,
  dados: Usuario,
  setDados: (data: Usuario) => void,
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
  setDados: (data: UsuarioLogin) => void,
): Promise<void> => {
  try {
    const resposta = await api.post<UsuarioLogin>(url, dados);
    setDados(resposta.data);

    if (resposta.data.token) {
      localStorage.setItem("token", resposta.data.token);
    }
  } catch (erro) {
    console.error("Erro ao fazer login:", erro);
    throw erro;
  }
};

export const buscar = async (
  url: string,
  setDados: (data: unknown) => void,
  header: Record<string, unknown>,
): Promise<void> => {
  try {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
    throw erro;
  }
};

export const cadastrarTema = async (
  url: string,
  dados: Tema,
  setDados: (data: Tema) => void,
  header: Record<string, unknown>,
): Promise<void> => {
  try {
    const resposta = await api.post(url, dados, header);
    setDados(resposta.data);
  } catch (erro) {
    console.error("Erro ao cadastrar tema:", erro);
    throw erro;
  }
};

export const atualizarTema = async (
  url: string,
  dados: Tema,
  setDados: (data: Tema) => void,
  header: Record<string, unknown>,
): Promise<void> => {
  try {
    const resposta = await api.put(url, dados, header);
    setDados(resposta.data);
  } catch (erro) {
    console.error("Erro ao atualizar tema:", erro);
    throw erro;
  }
};

// Deletar Tema (DELETE)
export const deletarTema = async (
  url: string,
  header: Record<string, unknown>,
): Promise<void> => {
  try {
    await api.delete(url, header);
  } catch (erro) {
    console.error("Erro ao deletar tema:", erro);
    throw erro;
  }
};
