import { Component, NgProbeToken, OnInit } from '@angular/core';
import {InicioService} from '../../services/inicio.service';
import { NgForm } from '@angular/forms';
import {Usuario_modelo} from '../../models/usuarios'
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


import swal from'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  titularAlerta:string='';

  constructor(
    public inicioServ:InicioService,
    private router: Router) { }


 
    ngOnInit(): void {
      this.listadoUsuario();
     }
    

  listadoUsuario() {
    //llamamos al metodo de nuestro servicio
    this.inicioServ.obtenerUsuario().subscribe({
      next: (res) => {
        this.inicioServ.documentos = res;
      },
      error: (err) => console.log(err),
    });
  }  

    
  inicioUsuario(formulario: NgForm) {

    this.inicioServ.inicioUsuario(formulario.value).subscribe({
      next: (res) => {
        this.listadoUsuario();
        formulario.reset();
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/privado']);
        
      },
      error: (err) => swal.fire({
        icon: 'error',
        title: 'Lo sentimos!',
        text: 'Estudiante no registrado',
      })
    });
  }

}
