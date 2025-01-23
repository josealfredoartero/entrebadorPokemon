import { TypesPokemon } from "@/types/type";
import axios from "axios";
import { getPokemonsFilter } from "./getPokemons";
// trae la lista de tipos de pokemons
export const getTypes = async () => {
    const types = await axios.get<any>(`${process.env.NEXT_PUBLIC_API_URL}type?&limit=21`);

    return types.data.results;
}
// peticion para traer la lista de pokemons filtrados
export const filterType = async(url : string) => {
    const response = await axios.get<any>(url);

    const pokemons = getPokemonsFilter(response.data.pokemon);

    return pokemons
}