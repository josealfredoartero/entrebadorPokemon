import React from 'react'
import "@/app/styles/card.css"
import { useRouter } from "next/navigation";

interface props {
    pokemon : any
}
const PokemonCard = ({pokemon} : props) => {
    const router = useRouter();
    // redireccionar a los detalles de un pokemon enviando el id
    const showDetalle = (id: number) => {
        router.push( `/pokemon?id=${id}`)
    }
    // mostrar antes de que los datos cargen
    if (!pokemon || !pokemon.stats) {
        console.log(pokemon);
        
        return <div>Loading...</div>; // Handle loading state
    }
  return (
    <>
        {/* card para los datos del pokemon */}
        <div className="carta">
            <div className="nombre">{pokemon.name}</div>
            <div className="tipo">Tipo: {pokemon.types[0].type.name}</div>
            <img src={pokemon.sprites.front_default} alt="" className="imagen" />
            <div className="stats">
            {
                pokemon.stats.map((stack : any, index: number) => (
                    <div key={index}>
                        <div className='stat'>{stack.stat.name} : {stack.base_stat}</div>
                    </div>
                ))
            }
            </div>
            <button className='detalles' onClick={() => {showDetalle(pokemon.id)}} >Ver más</button>
        </div>
    </>
  )
}

export default PokemonCard