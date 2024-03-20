import React from 'react'

const Aluno = ({nome, email, curso, media}) => {
  return (
    <div>
        <p>Nome: {nome} </p>
        <p>Email: {email}</p>
        <p>Curso: {curso}</p>
        <p>Status: {media >= 7? <span><b>aprovado</b></span>: <span><b>reprovado</b></span>}</p>
        <p>______________</p>

    </div>
  )
}

export default Aluno