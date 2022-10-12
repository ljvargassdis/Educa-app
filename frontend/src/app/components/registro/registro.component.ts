import { Component, NgProbeToken, OnInit } from '@angular/core';
import {RegistroService} from '../../services/registro.service';
import { NgForm } from '@angular/forms';
import {Usuario_modelo} from '../../models/usuarios'
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import swal from'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  titularAlerta:string='';

  constructor(
    public registroServ:RegistroService,
    private router: Router) { }

  ngOnInit(): void {
   this.listadoUsuario();
  }


  listadoUsuario() {
    //llamamos al metodo de nuestro servicio
    this.registroServ.obtenerUsuario().subscribe({
      next: (res) => {
        this.registroServ.documentos = res;
      },
      error: (err) => console.log(err),
    });
  }
  
  agregarUsuario(formulario: NgForm) {

      this.registroServ.insertarUsuario(formulario.value).subscribe({
        next: (res) => {
          this.listadoUsuario();
          formulario.reset();
          console.log(res);
          swal.fire('Muy bien!', 'Estudiante registrado con exito!', 'info');

          swal.update({
            icon: 'success'
          })

          localStorage.setItem('token', res.token);
          this.router.navigate(['/privado']);
          
        },
        error: (err) => console.log(err),
      });
    }


  eliminarUsuario(id: any) {
    let confirmacion = confirm('Desea eliminar el usuario #' + id + '?');
    console.log(confirmacion);
    if (confirmacion == true) {
      //Llamar al metodo de nuestro Servicio, para eliminar el usuario
      this.registroServ.eliminarUsuario(id).subscribe({
        next: (res) => {
          //Cuando se elimina un usuario, llamo/ejecuto el metodo para (re)cargar el listado
          this.listadoUsuario();
        },
        error: (err) => console.log(err),
      });
    }
  }


  modificarUsuario(usuario: Usuario_modelo) {
    console.log(usuario);
    this.registroServ.datosForm = usuario;
  }

}
