import { Component, Output } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { SearchCountries } from '../../interfaces/pais.interace';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor: pointer
    }

  `]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: SearchCountries[] = [];
  paisesSugeridos: SearchCountries[] = [];

  @Output() placeholderInput: string = "Por pais";

  mostrarSugerencias: boolean = false;

  constructor(private paisServices: PaisService) { }

  buscar( termino: string ){
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;

    this.paisServices.buscarPais(termino)
      .subscribe( (paises) => {
        this.paises = paises;
        console.log(this.paises);

      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisServices.buscarPais(termino)
      .subscribe(paises => {
        this.paisesSugeridos = paises.splice(0,5)
      },
      (err) => this.paisesSugeridos = []
      )
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
  }
}
