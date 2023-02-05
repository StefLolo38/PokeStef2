import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/shared/pokedex.service';
import { Pokemon } from 'src/app/shared/Pokemon-class';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css'],
})
export class PokedexPageComponent implements OnInit {
  arrayOfPokemon: Pokemon[] = [];
  pokemonDescription: string = '';

  constructor(public pokedexService: PokedexService) {}

  ngOnInit() {
    this.arrayOfPokemon = this.pokedexService.getPokemonList();
  }

  getDescription(event: any) {
    this.pokemonDescription = event;
  }
}
