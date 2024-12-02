import { useState } from "react"

import Perfil from "./components/Perfil/Perfil"
import Formulario from "./components/Formulario/formulario"
import ReposList from "./components/ReposList/reposlist";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return(
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

{/*
    {formularioEstaVisivel && (
      <Formulario />
    )}
    <button type="button" onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>toggle form</button>
*/}
    </>
  )
}

export default App