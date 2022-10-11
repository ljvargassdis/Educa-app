import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Usuario_modelo} from '../models/usuarios'
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http:HttpClient) { }
  URL_API = 'http://localhost:3000';

  documentos: Usuario_modelo[] = [];

  datosForm: Usuario_modelo = {
    nombre: '',
    email: '',
    password: '',
  };

  obtenerUsuario() {
    //Vamos a hacer una petición al servidor
    // petición por GET a http://localhost:3000/usuarios
    let peticion = this.http.get<Usuario_modelo[]>(this.URL_API + '/usuarios');
    return peticion;
  }

  insertarUsuario(datos: Usuario_modelo) {
    //Hacemos una petición por POST a http://localhost:3000/registrar
    let peticion = this.http.post<any>(this.URL_API + '/registrar', datos);
    return peticion;
  }
  
  eliminarUsuario(id: string) {
    //Hacemos una petición por DELETE a http://localhost:3000/eliminar_usuario/1235
    let peticion = this.http.delete(this.URL_API + '/eliminar_usuario/' + id);
    return peticion;
  }
  modificarUsuario(datos: Usuario_modelo) {
    //Hacemos una petición por PUT a http://localhost:3000/modificar_usuario/123123123213
    let peticion = this.http.put(
      this.URL_API + '/modificar_usuario/' + datos._id,
      datos
    );

    return peticion;
  }
  
  loggedIn(){
   return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
