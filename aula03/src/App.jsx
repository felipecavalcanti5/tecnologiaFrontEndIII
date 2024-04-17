import React from 'react'
import Aluno from './components/Aluno'
import estouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'


const App = () => {

  return (
    <div>
      <estouConseguindoAprenderReact/>
    </div>
  )
  /*
  return (
    <>
      {
        [
         {nome: "João", email: "joao@email.com", curso: "Direito", media: 7},
         {nome: "Maria", email: "maria@email.com", curso: "Sistemas", media: 8},
         {nome: "José", email: "jose@email.com", curso: "Engenharia", media:5}
        ].map((aluno) =>
          <Aluno nome={aluno.nome} curso={aluno.curso} email={aluno.email} media={aluno.media}/>
        )
      }
    </>*/
}

export default App