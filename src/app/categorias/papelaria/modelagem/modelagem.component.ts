import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modelagem',
  templateUrl: './modelagem.component.html',
  styleUrls: ['./modelagem.component.css']
})
export class ModelagemComponent implements OnInit {

  //Ativando o menu
  menu: boolean = false;
  aberto(){
    this.menu = !this.menu;
  }

  //Adicionando os produtos com o ngFor
  massa: any = [

    {
      image: 'assets/papelaria/modelagem/das.png',
      name: 'Pasta Para Modelar Sintética 500g Terracota DAS',
      old_price: '',
      new_price: 'R$ 18,19',
      description: ''
    },

    {
      image: 'assets/papelaria/modelagem/chamote.jpg',
      name: 'Argila Para Escultura e Artesanato Branca Chamote Fino 10 Kg',
      old_price: '',
      new_price: 'R$ 95,00',
      description: ''
    },

    {
      image: 'assets/papelaria/modelagem/massinha.jpg',
      name: 'Massa de Modelar Plastilina Acrilex 520 Preto 500g',
      old_price: '',
      new_price: 'R$ 22,71',
      description: ''
    },

    {
      image: 'assets/papelaria/modelagem/rosa.png',
      name: 'Massa Plastilina Para Escultura Corfix 500g 341 Rosa',
      old_price: '',
      new_price: 'R$ 42,28',
      description: ''
    },

    {
      image: 'assets/papelaria/modelagem/estaca.jpg',
      name: 'Esteca de Madeira Para Modelagem 15',
      old_price: '',
      new_price: 'R$ 6,00',
      description: ''
    },

    {
      image: 'assets/papelaria/modelagem/estica.jpg',
      name: 'Esteca de Madeira Para Modelagem 13',
      old_price: '',
      new_price: 'R$ 6,00',
      description: ''
    },

    {
      image: 'assets/papelaria/modelagem/modelador.jpg',
      name: 'Pincel Modelador de Silicone N° 02 Keramik 05 Peças',
      old_price: '',
      new_price: 'R$ 78,89',
      description: ''
    },

    {
      image: 'assets/papelaria/modelagem/kit.jpg',
      name: 'Ferramentas Para Modelagem Completa 08 Peças',
      old_price: '',
      new_price: 'R$ 92,00',
      description: ''
    },

    {
      image: 'assets/papelaria/modelagem/torno.jpg',
      name: 'Torno Base Giratória Para Modelagem e Cerâmica ',
      old_price: '',
      new_price: 'R$ 148,38',
      description: ''
    },

    {
      image: 'assets/papelaria/modelagem/gira.png',
      name: 'Torno Base Giratória Para Modelagem Profissional',
      old_price: '',
      new_price: 'R$ 321,20',
      description: ''
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
