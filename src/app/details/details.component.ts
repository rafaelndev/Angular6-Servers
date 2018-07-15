import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  mostrarSenha =  false;
  logList: Date[] = [];

  constructor() { }

  ngOnInit() {
  }

  onClickDisplayDetails() {
    this.mostrarSenha = !this.mostrarSenha;
    this.logList.push(new Date());
  }

}
