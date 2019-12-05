import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/peliculas/pelicula/pelicula.component';


const app_routes: Routes = [
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'pelicula/:id', component: PeliculaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'peliculas'}
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
