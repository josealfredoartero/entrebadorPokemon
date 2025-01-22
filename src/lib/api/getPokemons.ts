import axios from "axios";
import {Pokemon, PokemonResponse, Pokemons} from "@/types/pokemon"
import { getPokemon } from "./getPokemon";
// peticiion para traer la lista de los pokemons
export const getListPokemons = async () => {
      const response = await axios.get<PokemonResponse>("https://pokeapi.co/api/v2/pokemon?limit=80");
      // llama la petion para traer los datos de lo lista de pokemons
      const pokemons = getPokemons(response.data.results);
      // retornando los datos del pokemon
      return pokemons;

};
// funcion para recorrer la lista de pokemons y consultar los datos del pokemon por nombre
export const getPokemons = async (data : Array<Pokemons>) : Promise<Array<Pokemon>> => {
      let pokemons = await Promise.all(
        
        data.map(async (element) => {
          const pokemon= await getPokemon(element.name);
          // retorna los datos del opokemon
          return pokemon
        })
      );
      // retornando los datos de todos los pokemon
      return pokemons;
}
// recorre la lista de pokemons en el filtrado por tipo y habilidad
export const getPokemonsFilter = async (data:any) => {
    let pokemons = await Promise.all(
          
      data.map(async (element:any) => {
        const pokemon= await getPokemon(element.pokemon.name);
        
        return pokemon
      })
    );
    // retorna la lista de pokemons con los datos
    return pokemons;
}