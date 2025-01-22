"use client"
import { usePokemonContext } from '@/context/Teamcontext'
import { Pokemon } from '@/types/pokemon'
import { useRouter } from 'next/navigation'

interface props {
    pokemon: Pokemon
}

const CardTeam = ({pokemon}: props) => {
    const router = useRouter();
    const {removePokemon} = usePokemonContext()
        // redirigir hacia los detales del pokemon por id
        const showDetalle = (id: number | string) => {
            router.push( `/pokemon?id=${id}`)
        }
  return (
    <>
        <div className="carta2">
            <div className="nombre2">{pokemon.name}</div>
            <div className='removePokemon'><button onClick={()=>removePokemon(pokemon.name)}><img className="remove" src="https://cdn3.iconfinder.com/data/icons/faticons/32/remove-01-512.png" title="Quitar del equipo" width="20" alt=""/></button></div>
            <img src={pokemon.sprites.front_default} alt="" className="imagen" />
            <div className="stats2">
            {
                pokemon.stats.slice(0, 3).map((stack : any, index: number) => (
                    <div key={index}>
                        <div className='stat'>{stack.stat.name} : {stack.base_stat}</div>
                    </div>
                ))
            }
            </div>
            <button className='detalles2' onClick={() => {showDetalle(pokemon.id)}} >Ver más</button>
        </div>
    </>
  )
}

export default CardTeam