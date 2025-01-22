import axios from "axios";
import {Pokemon} from "@/types/pokemon"
// peticion para buscar un pokemon por nombre o id
export const getPokemon = async (namePokemon: string | number) => {
      const response = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
    
      return response.data
      
};
