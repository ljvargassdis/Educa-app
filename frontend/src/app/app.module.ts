import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { TareasComponent } from './components/tareas/tareas.component';

import { AuthGuard } from './auth.guard';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { ComunidadComponent } from './components/comunidad/comunidad.component';
import { CrearComponent } from './components/crear/crear.component';
import { QuestionComponent } from './components/question/question.component';
import { ChangeBgDirective } from './change-bg.directive'

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    InicioComponent,
    PrivadoComponent,
    TareasComponent,
    ComentarioComponent,
    ComunidadComponent,
    CrearComponent,
    QuestionComponent,
    ChangeBgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
