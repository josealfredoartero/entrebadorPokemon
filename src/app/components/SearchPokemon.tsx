import { getPokemon } from '@/lib/api/getPokemon';
import React, { useState } from 'react'
import { Pokemon } from "@/types/pokemon";

interface props {
    setPokemon : any
}
// componente oara la busqueda de pokemon
function SearchPokemon({setPokemon}: props) {
    const [namePokemon, setNamePokemon] = useState<string>("");
    const [error, setError] = useState("")
    // guardar el texto
    const handlerChange = (e: any) => {
        setNamePokemon(e.target.value)
    }
    // funcion para buscar un pokemon por nombre
    const searchPokemon = async(e: any) => {
        setError("");
        e.preventDefault();
        try {
            const pokemon = await getPokemon(namePokemon);
            setPokemon([pokemon])
        } catch (error) {
            setError("no se encontro ningun pokemon")
        }
    }

  return (
    <div>
        <div className="flex search">
            <input value={namePokemon} onChange={handlerChange} type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Buscar Pokémon"/>
            <button className="btn bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full ml-3" onClick={searchPokemon}>
            Buscar
            </button>
        </div>
        {error ? <p className='text-red-600 '>{error}</p>: <></> }
    </div>
  )
}

export default SearchPokemon