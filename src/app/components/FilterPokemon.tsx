import { getAbilities } from '@/lib/api/getAbilities'
import { getListPokemons } from '@/lib/api/getPokemons'
import { filterType, getTypes } from '@/lib/api/getTypes'
import { AbilitiesPokemon } from '@/types/ability'
import { TypesPokemon } from '@/types/type'
import React, { useEffect, useState } from 'react'
import "@/app/styles/filter.css"

interface props {
    setPokemons:any
}
// componente para filtrar los pokemons
const FilterPokemon = ({setPokemons}: props) => {
    const [types, setTypes] = useState<TypesPokemon[]>([])
    const [abilities, setAbilities] = useState<AbilitiesPokemon[]>([])
    const [error, setError] = useState<string | null>()
    // consulta la lista de tipos de pokemons
    const filterPokemon = async() => {
        try {
            const data:Array<TypesPokemon> = await getTypes();
            setTypes(data)
            setError("");
          } catch (error) {
            setError("no se encontraron tipos");
            setTypes([]);
          }
        
    }
    // consulta de la lista de habilidades de los pokemons
    const abilityFilter = async () => {
        try {
            const data:Array<TypesPokemon> = await getAbilities();
            setAbilities(data)
            setError("");
          } catch (error) {
            setError("no se encontraron habilidades");
            setTypes([]);
          }
    }
    // funcion para filtrar los pokemons por tipo cuando selecciona un tipo
    const handlerType = async(e : React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value == ""){
            const pokemons = await getListPokemons();
            setPokemons(pokemons)
        }else{
            const pokemons = await filterType(e.target.value) 
            setPokemons(pokemons)
        }
        
    }
    // funcion para filtrar los pokemons por habilidades cuando selecciona una habilidad
    const habdlerAbility = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        if(e.target.value == ""){
            const pokemons = await getListPokemons();
            setPokemons(pokemons)
        }else{
            const pokemons = await filterType(e.target.value) 
            setPokemons(pokemons)
        }
    }
    // ejecuta las funciones de consulta de lista de habilidades y tipos
    useEffect(() => {
        filterPokemon()
        abilityFilter()
    }, [])
    
  return (
    <>
        <div className='select-container'>
            <label className="">Tipo: </label>
            <select onChange={handlerType} className="" name="tipo" id="tipo">
                <option value="" >Todos</option>
                {
                    types.map((type, index) =>(
                        <option className='cursor-pointer select-none p-2 hover:bg-gray-200' key={index} value={type.url}>{type.name}</option>
                    ))
                }
            </select>
        </div>
        <div className='select'>
            <label>Habilidad</label>
            <select onChange={habdlerAbility} name="abilidad" id="ablidad" >
                <option value="">Todos</option>
                {
                    abilities.map((ability, index) =>(
                        <option key={index} value={ability.url}>{ability.name}</option>
                    ))
                }
            </select>
        </div>
    </>
  )
}

export default FilterPokemon