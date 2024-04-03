import React, {useState} from 'react'



const HookMegaSena = () => {
    const [sorteado, setContador] = useState(0)
    let [arrayNumerosSorteados, setNumerosSorteados] = useState([]);

    function sortear (){
        if(arrayNumerosSorteados.length < 6){
            setContador(Math.floor(Math.random() * 60) + 1)
            setNumerosSorteados([...arrayNumerosSorteados , sorteado]);
        }else{
            alert(`Já temos 6 números sortedos!`);
        }

    }

    return(
        <div>
            <h1>Sorteador da Mega em React :D</h1>
            <button onClick={sortear}>
                Sortear número
            </button>
            <h2>Último número sorteado {sorteado}</h2>    

            <h2>Sorteados {arrayNumerosSorteados + ` `}</h2>
        </div>
    )  
}

export default HookMegaSena