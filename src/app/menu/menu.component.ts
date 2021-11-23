import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //Usando o SwitchCase para exibir as páginas
  categorias:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
