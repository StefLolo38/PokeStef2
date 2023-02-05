import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemon-class';
import { POKEMONS } from './pokemons-mock';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  arrayOfPokemonsFromService: Pokemon[] = POKEMONS;

  constructor() {}

  getPokemonList() {
    return this.arrayOfPokemonsFromService;
  }

  addPokemon(newpokemon: Pokemon) {
    this.arrayOfPokemonsFromService.push(newpokemon);
  }
}
