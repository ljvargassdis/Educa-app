import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { RegistroService } from './services/registro.service';
import { InicioService } from'./services/inicio.service'
import {Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private registroService: RegistroService,
    private inicioService: InicioService,
    private router: Router
  ){}

  canActivate(): boolean {
    if (this.registroService.loggedIn()) {
      return true;
    }

    this.router.navigate(['/inicio']);
    console.log('Usuario no registrado')
    return false;
  }

  }
  
  

