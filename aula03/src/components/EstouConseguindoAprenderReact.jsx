import React from 'react'

const estouConseguindoAprenderReact = (props) => {

  const estouConseguindo = props.estouConseguindo;
  
  return (

    <div>{estouConseguindo?<h1>Estou indo bem</h1>: <h1>Preciso estudar mais</h1>}</div>
  )
}

export default estouConseguindoAprenderReact