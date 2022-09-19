import { Component, Input } from '@angular/core';
import { SearchCountries } from '../../interfaces/pais.interace';


@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
})
export class PaisTablaComponent {

  @Input() paises: SearchCountries[] = []

  constructor() { }

}
