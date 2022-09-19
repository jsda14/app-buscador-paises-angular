import { Component, Output } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { SearchCountries } from '../../interfaces/pais.interace';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  cities: SearchCountries[] = [];
  @Output() placeholderInput: string = "Por capital";

  constructor(private paisServices: PaisService) { }

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;

    this.paisServices.buscarCapital(termino)
      .subscribe( (cities) => {
        this.cities = cities;
        console.log(this.cities);

      }, (err) => {
        this.hayError = true;
        this.cities = [];
      });
  }

  sugerencias(termino: string){
    this.hayError = false;
    //ToDo: Crear sugerencias
  }

}
