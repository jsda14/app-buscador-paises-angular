import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { SearchCountries } from '../../interfaces/pais.interace';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {

  pais!: SearchCountries;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .subscribe( ({ id }) => {
        this.paisService.buscarPaisPorCodigo(id)
          .subscribe( pais => {
            this.pais = pais[0];
          })
      });

    // Forma alternativa

    // this.activatedRoute.params
    //   .pipe(
    //     switchMap( ({ id }) => this.paisService.buscarPaisPorCodigo(id)),
    //     tap(console.log)
    //     )
    //   .subscribe( pais => {
    //     this.pais = pais;
    //   })
  }

}
