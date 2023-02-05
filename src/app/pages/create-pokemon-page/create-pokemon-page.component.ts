import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/Pokemon-class';
import { PokedexService } from 'src/app/shared/pokedex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.css'],
})
export class CreatePokemonPageComponent implements OnInit {
  formPokemon: Pokemon = new Pokemon('', '', '');
  arrayOfPokemon: Pokemon[] = [];

  constructor(public pokedexService: PokedexService, private router: Router) {}

  ngOnInit() {
    this.arrayOfPokemon = this.pokedexService.getPokemonList();
  }

  onSubmit(): void {
    this.arrayOfPokemon.push(this.formPokemon);
    this.router.navigate(['/']);
  }
}
