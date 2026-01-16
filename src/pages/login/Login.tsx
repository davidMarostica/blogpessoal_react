import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/Service";
import { useState, type ChangeEvent, type FormEvent } from "react";

function Login() {
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState<boolean>(false);

  const [credenciais, setCredenciais] = useState({
    usuario: "",
    senha: "",
  });

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCredenciais({
      ...credenciais,
      [e.target.name]: e.target.value,
    });
  }

  async function logar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (credenciais.usuario && credenciais.senha) {
      setIsLoading(true);

      try {
        await login("/usuarios/logar", credenciais, () => {
          alert("Usuário logado com sucesso!");
          navigate("/home");
        });
      } catch {
        alert("Erro ao fazer login! Verifique as credenciais.");
        setCredenciais({ usuario: "", senha: "" });
      }
    } else {
      alert("Preencha todos os campos!");
    }

    setIsLoading(false);
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen">
        <form
          onSubmit={logar}
          className="flex justify-center items-center flex-col w-full px-8 py-12 gap-4"
        >
          <h2 className="text-slate-900 text-5xl">Entrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"
              value={credenciais.usuario}
              onChange={atualizarEstado}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={credenciais.senha}
              onChange={atualizarEstado}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="rounded bg-indigo-400 flex justify-center hover:bg-indigo-900 text-white w-1/2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{loading ? "Entrando..." : "Entrar"}</span>
          </button>

          <hr className="border-slate-800 w-full" />

          <p>
            Ainda não tem uma conta?{" "}
            <Link to="/cadastro" className="text-indigo-800 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
        <div className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] lg:block hidden bg-no-repeat w-full h-screen bg-cover bg-center"></div>
      </div>
    </>
  );
}

export default Login;
