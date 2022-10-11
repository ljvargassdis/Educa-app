import { Component, OnInit } from '@angular/core';
import { ComunidadServService } from '../../services/comunidad-serv.service';

@Component({
  selector: 'comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css'],
})
export class ComunidadComponent implements OnInit {
  constructor(public ComunidadServ: ComunidadServService) {}

  ngOnInit(): void {
    this.listadocomunidad();
  }

  listadocomunidad() {
    this.ComunidadServ.obtenerComunidad().subscribe({
      next: (res) => {
        console.log('-----Obteniendo comentarios---------');
        this.ComunidadServ.documentos = res;
      }, //si sirve
      error: (err) => console.log(err), //si no sirve
    });
  }
}
