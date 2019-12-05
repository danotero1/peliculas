import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasServicesService } from '../../../services/peliculas-services.service';
import { Res } from '../../interfaces/respuesta.interface';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  /*var id tipo string
    var res tipo Res importado de interface Res
  */
  id: string;
  res: Res;
  /*
  Contructor
  parametros: servico peliculas
  router acceso a rutas url
  */

  constructor(private peli: PeliculasServicesService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(data => {
      this.id = data.id;
      console.log(this.id);
      this.peli.getPeliculas(this.id).subscribe(da=>{
        this.res = JSON.parse(JSON.stringify(da));
        console.log(da);
      });
    });
   }

  ngOnInit() {
  }

}
