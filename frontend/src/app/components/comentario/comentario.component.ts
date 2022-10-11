import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ComunidadServService} from '../../services/comunidad-serv.service';
import { NgForm } from '@angular/forms';
import{comentario_modelo} from '../../models/comentario'
import{Router} from '@angular/router'

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  constructor(private ruta: ActivatedRoute,public ComunidadServ: ComunidadServService, private router:Router) { }

  ngOnInit(): void {
    this.listadorespuesta();
    this.listadocomentario();
  }

  id_url= this. ruta.snapshot.params['id'];

  listadorespuesta(){
    this.ComunidadServ.obtenerRespuesta(this.id_url).subscribe({
      next:(res)=>{
        console.log("-----Obteniendo comentarios---------")
        this.ComunidadServ.documentos_res = res;
      }, //si sirve
      error:(err)=>console.log(err), //si no sirve  
    });
  }

  listadocomentario(){
    this.ComunidadServ.obtenerComentario(this.id_url).subscribe({
      next:(res)=>{
        console.log("-----Obteniendo comentarios---------")
        this.ComunidadServ.documentos_com = res;
      }, //si sirve
      error:(err)=>console.log(err), //si no sirve  
    });
  }


  agregarrespuesta(formulario: NgForm) {

    if (formulario.value._id) {
      this. ComunidadServ.modificarRespuesta(formulario.value).subscribe({
        next: (res) => {
          this.listadorespuesta();
          formulario.reset();
        },
        error: (err) => console.log(err),
      });
    } else {
      this.ComunidadServ.insertarRespuesta(formulario.value,this.id_url).subscribe({
        next: (res) => {
          this.listadorespuesta();
          formulario.reset();
        },
        error: (err) => console.log(err),
      });
    }
  }
}