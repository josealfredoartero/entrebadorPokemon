// PokemonContext.js
import { Pokemon } from '@/types/pokemon';
import React, { createContext, useState, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
// creando el contexto para guardar la lista de los pokemons
const PokemonContext = createContext();

export const usePokemonContext = () => {
    return useContext(PokemonContext);
};
// 
export const PokemonProvider = ({ children }) => {
    // consultando los datos del local storage
    const [team, setTeam] = useLocalStorage('team', [])
    // funcion para guardar el pokemon en la lista
    const addPokemon = (pokemon:Pokemon) => {
        setTeam((prevTeam) => [...prevTeam, pokemon]);
    };
    // quitar el pokemon por nombre de la lista
    const removePokemon = (pokemonName: string) => {
        setTeam((prevTeam) => prevTeam.filter(p => p.name !== pokemonName));
    };

    return (
        <PokemonContext.Provider value={{ team, addPokemon, removePokemon }}>
            {children}
        </PokemonContext.Provider>
    );
};