import axios from "axios";
import { getPokemonsFilter } from "./getPokemons";
// consulta de las habilidades a filtrar
export const getAbilities = async() => {
    const abilities = await axios.get("https://pokeapi.co/api/v2/ability?limit=100");

    return abilities.data.results;
}
// peticion de los pokemons por habilidad
export const filterAbility = async (url : string) => {
    const response = await axios.get<any>(url);

    const pokemons = getPokemonsFilter(response.data.pokemon);

    return pokemons
}