import { useState, useEffect } from "react"

import Perfil from "./components/Perfil/perfil"
import ReposList from "./components/ReposList/reposlist";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [gitUsuario, setGitUsuario] = useState('');
  const [deuErro, setDeuErro] = useState(false);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    if (nomeUsuario.trim() === '') {
      setGitUsuario('');
      setDeuErro(true);
      setMensagem('Não existe nenhum dado para pesquisar');
      return;
    }

    if (nomeUsuario.length > 0) {
      fetch(`https://api.github.com/users/${nomeUsuario}`)
        .then(res => {
          if (!res.ok) {
            setDeuErro(true)
            setMensagem(`O usuário ${nomeUsuario} não existe ou houve um erro na comunicação`);
          }
          return res.json();
        })
        .then(resJson => {
          if(!resJson.name) {
            setGitUsuario(resJson);
            setDeuErro(true);
            setMensagem(`O usuário ${nomeUsuario} não está configurado de forma completa no Github`);
          } else {
            setGitUsuario(resJson);
            setDeuErro(false);
            setMensagem('');
          }
        })
        .catch(err => {
          setDeuErro(true);
          setMensagem(err.message || 'Erro desconhecido');
        })
    }
  }, [nomeUsuario]);

  return(
    <>
      <div className="container">
        <p>Digite o nome do usuário que você deseja pesquisar no Github:</p>
        <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Digite o nome do usuário"/>
      </div>
      {deuErro && (
        <div className="container container-erro">
          <p><b>{mensagem}</b></p>
        </div>
      )}
      {!deuErro && gitUsuario && (
        <>
          <Perfil nomeUsuario={gitUsuario.name} userUsuario={gitUsuario.login} />
          <ReposList userUsuario={gitUsuario.login} />
        </>
      )}
    </>
  );
}

export default App