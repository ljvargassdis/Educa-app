import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{comentario_modelo} from '../models/comentario'
import{respuesta_modelo} from '../models/respuesta'

@Injectable({
  providedIn: 'root'
})
export class ComunidadServService {

  constructor(private http: HttpClient) { }

  URL_API='http://localhost:3000'

  documentos: comentario_modelo[]=[];
  documentos_res: respuesta_modelo[]=[];
  documentos_com:comentario_modelo[]=[];

  datosInput: comentario_modelo = {
    user:'',
    pfp:'',
    type:'',
    text: '',
    title:'',
    file: '',
    date:new Date()
  };
  respuestaInput: respuesta_modelo = {
    user:'',
    pfp:'',
    text: '',
    comentario:'',
    date:new Date()
  };
   
  obtenerComunidad() {
    //Vamos a hacer una petición al servidor
    // petición por GET a http://localhost:3000/videos
    let peticion = this.http.get<comentario_modelo[]>(this.URL_API + '/comunidad');
    return peticion;
  }


  insertarComentario(datos: comentario_modelo) {
    //Hacemos una petición por POST a http://localhost:3000/insertar_video
    let peticion = this.http.post(this.URL_API + '/insertar_comentario', datos);
    return peticion;
  }
  obtenerComentario(id:string) {
    //Vamos a hacer una petición al servidor
    // petición por GET a http://localhost:3000/videos
    let peticion = this.http.get<comentario_modelo[]>(this.URL_API + '/comentario/'+id);
    return peticion;
  }

  obtenerRespuesta(id:string) {
    //Vamos a hacer una petición al servidor
    // petición por GET a http://localhost:3000/videos
    let peticion = this.http.get<respuesta_modelo[]>(this.URL_API + '/respuesta/'+id);
    return peticion;
  }

  insertarRespuesta(datos: respuesta_modelo,id:string) {
    //Hacemos una petición por POST a http://localhost:3000/insertar_video
    let peticion = this.http.post(this.URL_API + '/insertar_respuesta/'+id, datos);
    return peticion;
  }

  eliminarComentario(id: string) {
    //Hacemos una petición por DELETE a http://localhost:3000/eliminar_video/123123123213123
    let peticion = this.http.delete(this.URL_API + '/eliminar_comentario/' + id);
    return peticion;
  }

  modificarComentarios(datos: comentario_modelo) {
    //Hacemos una petición por PUT a http://localhost:3000/modificar_video/123123123213
    let peticion = this.http.put(
      this.URL_API + '/modificar_comentario/' + datos._id,
      datos
    );
    return peticion;
  }

  modificarRespuesta(datos2: respuesta_modelo) {
    //Hacemos una petición por PUT a http://localhost:3000/modificar_video/123123123213
    let peticion = this.http.put(
      this.URL_API + '/modificar_respuesta/' + datos2._id,
      datos2
    );
    return peticion;
  }
}