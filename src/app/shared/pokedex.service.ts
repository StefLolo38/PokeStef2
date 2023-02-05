import { Injectable } from '@angular/core';
import { pokemons } from './pokemons-mock';
// import { Pokemon } from './Pokemon-class';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  arrayOfPokemons = pokemons;

  constructor() {}
}
