import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemon-class';
import { POKEMONS } from './pokemons-mock';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  arrayOfPokemons: Pokemon[] = POKEMONS;

  constructor() {}

  getPokemonList() {
    return this.arrayOfPokemons;
  }
}
