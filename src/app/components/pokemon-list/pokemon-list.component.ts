import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/shared/Pokemon-class';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  // récupération du tableau à afficher
  @Input() arrayOfPokemonForChild: Pokemon[] = [];

  @Output() sendDescription: EventEmitter<string> = new EventEmitter<string>();

  //au clic sur l'image d'un pokemon, envoyer la description du pokemon dans le composant pokemonDetail:
  getDescription(pokemon: any) {
    this.sendDescription.emit(pokemon.description);
  }
}
