export interface Pokemon {
    id:string;
    name: string;
    url: string;
    sprites: PokemonImage;
    types: Array<PokemonTypes>;
    abilities: Array<PokemonAbilities>;
    stats: Array<PokemonStats>;
  }

  interface PokemonImage {
    front_default: string;
  }

  interface PokemonType {
    name: string;
    url: string;
  }

  interface PokemonTypes {
    type: PokemonType[];
  }

  interface PokemonAbilities {
    ability: PokemonAbility[];
  }

  interface PokemonAbility {
    name: string;
    url: string;
  }

  interface PokemonStat{
    name: string;
  }
  
  interface PokemonStats {
    base_stat: string;
    stat: PokemonStat[];
  }
  
  export interface Pokemons {
    name: string;
    url: string;
  }

  export interface PokemonResponse {
    results: Pokemons[];
  }