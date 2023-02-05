import { Injectable } from '@angular/core';
import { POKEMONS } from './pokemons-mock';


@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  arrayOfPokemons = POKEMONS;

  constructor() {}
}
