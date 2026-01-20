import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <div>Erro ao carregar contexto</div>;
  }

  const { handleLogout } = authContext;

  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("/");
  }

  return (
    <div className="w-full bg-indigo-900 text-white flex justify-center py-4">
      <div className="container flex justify-between items-center text-lg">
        <Link to="/home" className="text-2xl font-bold">
          Blog Pessoal
        </Link>

        <div className="flex gap-4 items-center">
          <Link to="/postagens" className="hover:underline">
            Postagens
          </Link>
          <Link to="/temas" className="hover:underline">
            Temas
          </Link>
          <Link to="/cadastrar-tema" className="hover:underline">
            Cadastrar tema
          </Link>
          <Link to="/perfil" className="hover:underline">
            Perfil
          </Link>
          <Link to="" onClick={logout} className="hover:underline">
            Sair
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
