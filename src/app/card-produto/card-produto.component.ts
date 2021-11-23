import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  //Lógica do menu
  menu: boolean = false;
  aberto(){
    this.menu = !this.menu;
  }

  //Adicionando os produtos com o ngFor
  

  constructor() { 
  }

  ngOnInit(): void {
  }

}
