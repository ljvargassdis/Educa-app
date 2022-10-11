import { Component, OnInit } from '@angular/core';
import { ComunidadServService} from '../../services/comunidad-serv.service';
import { NgForm } from '@angular/forms';
import{comentario_modelo} from '../../models/comentario'
import{Router} from '@angular/router'

@Component({
  selector: 'crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(public ComunidadServ: ComunidadServService, private router:Router) { }

  ngOnInit(): void {
    this.listadocomunidad();
  }

  listadocomunidad(){
    this.ComunidadServ.obtenerComunidad().subscribe({
      next:(res)=>{
        console.log("-----Obteniendo comentarios---------")
        this.ComunidadServ.documentos = res;
      }, //si sirve
      error:(err)=>console.log(err), //si no sirve  
    });
  }


  agregarcomentario(formulario: NgForm) {

    if (formulario.value._id) {
      this. ComunidadServ.modificarComentarios(formulario.value).subscribe({
        next: (res) => {
          this.listadocomunidad();
          formulario.reset();
        },
        error: (err) => console.log(err),
      });
    } else {
      this.ComunidadServ.insertarComentario(formulario.value).subscribe({
        next: (res) => {
          this.listadocomunidad();
          formulario.reset();
          this.router.navigate(["/comunidad"])
        },
        error: (err) => console.log(err),
      });
    }
  }
}
