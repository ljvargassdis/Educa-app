import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.css']
})
export class PrivadoComponent implements OnInit {

  @ViewChild('name') nameKey!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

}
