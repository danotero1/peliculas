import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/peliculas/pelicula/pelicula.component';
import { PeliculasServicesService } from './services/peliculas-services.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ImgPPipe } from './pipes/img-p.pipe';
@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    PeliculaComponent,
    ImgPPipe,
   
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
