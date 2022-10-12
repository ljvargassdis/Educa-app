import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  public name: string = "";
  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
  }

}
