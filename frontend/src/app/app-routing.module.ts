import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//COMPONENTES
import { TareasComponent } from '../app/components/tareas/tareas.component';
import { InicioComponent } from '../app/components/inicio/inicio.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { RegistroComponent } from './components/registro/registro.component';
import {ComunidadComponent} from './components/comunidad/comunidad.component';
import {ComentarioComponent} from './components/comentario/comentario.component';
import {CrearComponent} from './components/crear/crear.component'
import { QuestionComponent} from './components/question/question.component'


import { AuthGuard } from './auth.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: TareasComponent
  },
  {
    path: 'privado',
    component: PrivadoComponent,
    canActivate:[AuthGuard]
  }, 
  {
    path: 'question',
    component: QuestionComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'usuarios',
    component: RegistroComponent
  },

  {
    path: 'comunidad',
   component: ComunidadComponent
  },
  {
    path: 'crear',
     component: CrearComponent
    },
  {
    path: 'comentario/:id',
     component: ComentarioComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
