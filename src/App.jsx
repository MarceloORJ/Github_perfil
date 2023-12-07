import { useState } from 'react';

import viteLogo from '/vite.svg'

import Perfil from "./components/Perfil";
import Formulario from './components/Formulario';
import ReposList from './components/ReposList';


function App() {
  /*const nome = 'marcelo'
  function retornaNome(){
    return nome;
  }
  const pessoa = {
    nome: 'Maria',
  }
  let estaDeDia = true; */
  const [FormularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <> 
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>
      

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/* {FormularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!FormularioEstaVisivel)} type="button">toggle form</button> */}
    {/* coisas como 'h1 e h2' se colocar mais de um, precisa colocar dentro de uma tag como 'div, header, footer, etc', se não o codigo quebra 
      <h1>Olá, {pessoa.nome}</h1>
      <h2>Subtitulo</h2>
      {estaDeDia === true ? 'Bom dia' : 'Boa tarde'} mesma coisa que a de baixo
      {estaDeDia ? 'Bom dia' : 'Boa tarde'} 
      {estaDeDia && 'Bom dia'} usando o '&&' só retornaremos se for verdadeira */}
    </>
  )
}

export default App
