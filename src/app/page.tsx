"use client"
import { getListPokemons } from "@/lib/api/getPokemons";
import { Pokemon } from "@/types/pokemon";
import { useEffect, useState } from "react";
import SearchPokemon from "./components/SearchPokemon";
import PokemonCard from "./components/PokemonCard";
import FilterPokemon from "./components/FilterPokemon";

export default function Home() {
  // creando estados 
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>();
  const [indiceActual, setIndiceActual] = useState<number>(0);

  // funcion para tarer los pokemons
  const loadPokemons = async () => {
    try {
      const data:Array<Pokemon> = await getListPokemons();
      setPokemons(data);
      setError("");
    } catch (error) {
      setError("no se encontraron pokemos");
      setPokemons([]);
    }
  }
  // ejecutar la funcion para traer los pokemons
  useEffect(() => {
      loadPokemons();
  }, [])
  // ejecutar para la navegacion de la lista de pokemons
  useEffect(() => {
    setIndiceActual(0)
    mostrarDatos()
  },[pokemons]) 
// mostrando los primeros pokemons
  const mostrarDatos = () => {
    return pokemons.slice(indiceActual, indiceActual + 8);
  };
// funcion para pasar a los siguientes pokemons
const siguiente = () => {
    if (indiceActual + 8 < pokemons.length) {
        setIndiceActual(indiceActual + 8);
    }
};
// regresar y mostrar los anteriores pokemons
const anterior = () => {
    if (indiceActual - 8 >= 0) {
        setIndiceActual(indiceActual - 8);
    }else{
      setIndiceActual(0)
    }
};
// mostrar un error 
  if (error ) {
      return <div>{error}</div>
  }
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-3 pb-20 gap-14 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* componentes para filtrar y buscar pokemons */}
      <div className="container">
        <FilterPokemon setPokemons={setPokemons} />                
        <SearchPokemon setPokemon={setPokemons} />
      </div>
      {/* mostrar las cards de los pokemons */}
      <div className="cards">
          {mostrarDatos().map((pokemon, index)=> (
            <div key={index}>
              <PokemonCard pokemon={pokemon} />
            </div>
          ))}
      
      </div>
      <div className="navegation">
        { 
          indiceActual <= 0 ? <></> : <button className="btn-navegation" onClick={anterior} >
              Anterior
          </button>
        }
        {
          indiceActual + 8 >= pokemons.length ? <></> :
          <button className="btn-navegation" onClick={siguiente} >
              Siguiente
          </button>
        }
      </div>
    </div>
  );
}
