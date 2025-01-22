"use client"
import { usePokemonContext } from '@/context/Teamcontext'
import React from 'react'
import "@/app/styles/team.css"
import CardTeam from './components/CardTeam'
import { Pokemon } from '@/types/pokemon'

const page = () => {
  const {team} = usePokemonContext();
  
  if (!team > 0){
    return <div><h1>no tienes pokémons en tu equipo</h1></div>
  }
  return (
    <div>
      <div>
        <h1>Mi equipo pokémon</h1>
      </div>
      {/* mostrar la lista de pokemons de el equipo */}
      <div className='cards2'>
          {team.map((pokemon:Pokemon, index:number)=> (
            <div key={index}>
              <CardTeam pokemon={pokemon} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default page