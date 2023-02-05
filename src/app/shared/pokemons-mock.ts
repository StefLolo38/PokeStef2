import { Pokemon } from './Pokemon-class';

export const POKEMONS: Pokemon[] = [
  new Pokemon(
    'Pikachu ',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    'Quand il s’énerve, il libère instantanément l’énergie emmagasinée dans les poches de ses joues.'
  ),
  new Pokemon(
    'Mewtwo',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
    'Son ADN est presque le même que celui de Mew, mais sa taille et son caractère sont très différents.'
  ),
  new Pokemon(
    'Dracaufeu',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    'Son souffle brûlant peut faire fondre la roche. Il est parfois la cause d’incendies de forêt.'
  ),
];
