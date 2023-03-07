import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ObjectId } from 'mongoose';
import Pokemon from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent implements OnInit {
  showformflag = false;
  pokemons: Pokemon[] = [];

  url1: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
  url2: string = ".png";
  finalurl: string = "726";
  @ViewChild('pokemonInput5') pokemonInput5!: ElementRef; //para tener acceso a this.pokemonInput5 en la seccion de creaer pokemon
  @ViewChild('pokemonInput10') pokemonInput10!: ElementRef;
  constructor(private pokemonService: PokemonService) { }

  showform() {
    this.showformflag = true;
  }
  cancelform() {
    this.showformflag = false;
  }

  ngOnInit() {
    this.pokemonService.getPokemons()
      .subscribe((pokemons: any) => this.pokemons = pokemons);
  }
  deletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemon(pokemon._id).subscribe(() => { this.ngOnInit() });
  }
  tipoPokemon: string[] = [];

  addPokemon(nombre: string, numero: number, generacion: number, region: string, tipo: [string, string], evolucion: boolean, legendario: boolean, cantidad: number, precio: number) {
    this.showformflag = false;
    this.pokemonService.createPokemon(nombre, numero, generacion, region, tipo, evolucion, legendario, cantidad, precio)
      .subscribe((pokemon: any) => { this.ngOnInit() });
  }



  getBoolean(value: string) {
    switch (value) {
      case "true":
        return true;
      default:
        return false;
    }

  }
}