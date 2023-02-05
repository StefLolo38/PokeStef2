import { Component } from '@angular/core';
import { Pokemon } from 'src/app/shared/Pokemon-class';
import { PokedexService } from 'src/app/shared/pokedex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.css'],
})
export class CreatePokemonPageComponent {
  newPokemon: Pokemon = new Pokemon('', '', '');

  constructor(public pokedexService: PokedexService, private router: Router) {}

  onSubmit(): void {
    this.pokedexService.addPokemon(this.newPokemon);
    this.router.navigate(['/']);
  }
}
