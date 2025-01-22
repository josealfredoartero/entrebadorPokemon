"use client"
import { getPokemon } from "@/lib/api/getPokemon";
import { Pokemon } from "@/types/pokemon";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "@/app/styles/card-detalle.css"
import { usePokemonContext } from "@/context/Teamcontext";


const PokemonId = () => {
    // estados 
    const [pokemon, setPokemon] = useState()
    const {team, addPokemon, removePokemon} = usePokemonContext();
    // sacar el id de la url
    const searchParams = useSearchParams();
    const id  = searchParams.get("id");
    // consulta del pokemon por id
    const getPokemonId = async() => {
        const data: pokemon = await getPokemon(id);
        // guardar los datos del pokemon
        setPokemon(data)
    }
    // funcion para mostrar botones si esta ya en el equipo
    const isPokemonInTeam = (pokemonName) => {
        return team.some(pokemon => pokemon.name === pokemonName);
    };
    // ejecuta la funcion para tarer los datos del pokemon
    useEffect(() => {
      getPokemonId();
    }, [])
    // mostrando antes de cargar los datos del pokemon
    if(pokemon == undefined){
        return <div>Loading ...</div>
    }
    
    
  return (
    <div className="card-detalles">
        <div className="addPokemon">
            {
               isPokemonInTeam(pokemon.name) ? 
               <button onClick={()=>removePokemon(pokemon.name)}><img className="remove" src="https://cdn3.iconfinder.com/data/icons/faticons/32/remove-01-512.png" title="Quitar del equipo" width="20" alt=""/></button> :
               <button onClick={()=>addPokemon(pokemon)}><img className="add" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqfCJvhqIwh0PoSOkNZ9ot8kD50CNT24EPqg&s" width="20" title="Agregar a equipo" alt=""/></button> 
            }
        </div>
        <div className="img">
            <img src={pokemon.sprites.front_default} alt="" className="imagenPokemon" />
        </div>
        <div className="details">
            <p className="name">{pokemon.name}</p>
            <div className="types">
                <h3>Tipos:</h3>
                <ul>
                    {pokemon.types.map((type, index) => (
                    <li key={index}>
                        {type.type.name}
                    </li>
                    ))}
                </ul>
            </div>
            <div className="abilities">
                <h3>Habilidades:</h3>
                <ul>
                    {pokemon.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                    ))}
                </ul>
            </div>
            <div className="statsPokemon">
                <h3>Estadisticas:</h3>
                <ul>
                    {pokemon.stats.map((stat, index) => (
                    <li key={index}>
                    {stat.stat.name}: <strong>{stat.base_stat}</strong>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="detail">
                <b>Height: {pokemon.height}</b>
                <b>Weight: {pokemon.weight}</b>
            </div>
        </div>
    </div>
  )
}

export default PokemonId