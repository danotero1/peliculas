import { Component, OnInit } from '@angular/core';
import { PeliculasServicesService } from '../../services/peliculas-services.service';
import { Result } from '../interfaces/result.interface';
import { Res } from '../interfaces/respuesta.interface';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  /*
  var peli tipo string: recibe ngModel de peliculas.html  
  */
  peli = '';
  // tslint:disable-next-line:ban-types
  /*
  var res tipo Res encargadod de almancenar respuesta del servicio con el fin de acceder a datos
  */
  res: Res = {
    status: '',
    copyright: '',
    has_more: null,
    num_results: null ,
    results:null,
  };
  constructor(private peliculas: PeliculasServicesService) { }

  ngOnInit() {
  }
  buscar(){
    this.peliculas.getPeliculas(this.peli).subscribe(data => {
      
      this.res = JSON.parse(JSON.stringify(data));
      
      console.log(this.res);
    
    })
  }

}
