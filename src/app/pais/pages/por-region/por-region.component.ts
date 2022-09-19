import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { SearchCountries } from '../../interfaces/pais.interace';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button{
      margin-right: 5px;
    }
  `]
})
export class PorRegionComponent
{

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paisesRegion: SearchCountries[] = [];

  constructor(private paiseService: PaisService) { }

  getClaseCSS(region: string){
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';

  }
  activarRegion(region:string){
    if(region === this.regionActiva) return;

    this.regionActiva = region;
    this.paisesRegion = [];
    this.paiseService.buscarPaisPorRegion(region).subscribe( resp => {
      this.paisesRegion = resp;
    });
  }


}
