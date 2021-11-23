import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canetas',
  templateUrl: './canetas.component.html',
  styleUrls: ['./canetas.component.css']
})
export class CanetasComponent implements OnInit {

  //Ativando o menu
  menu: boolean = false;
  aberto(){
    this.menu = !this.menu;
  }

  //Adicionando os produtos com o ngFor
  caneta: any = [

    {
      image: 'assets/papelaria/canetas-marcadores/pen-cores.jpg',
      name: 'Caneta Stabilo Pen 68 10 Cores',
      old_price: '',
      new_price: 'R$ 97,97',
      description: ''
    },

    {
      image: 'assets/papelaria/canetas-marcadores/verde.jpg',
      name: 'Marcador de Texto Stabilo Boss Verde Claro 33',
      old_price: '',
      new_price: 'R$ 13,10',
      description: ''
    },

    {
      image: 'assets/papelaria/canetas-marcadores/kaweco.jpg',
      name: 'Caneta Tinteiro Classic Sport Black Kaweco',
      old_price: '',
      new_price: 'R$ 269,80',
      description: ''
    },

    {
      image: 'assets/papelaria/canetas-marcadores/pelikan.png',
      name: 'Caneta Tinteiro Pelikan Twist Berry',
      old_price: '',
      new_price: 'R$ 128,30',
      description: ''
    },

    {
      image: 'assets/papelaria/canetas-marcadores/posca-soft.png',
      name: 'Kit Caneta Posca Uni-Ball PC-3M 8 Cores Pastéis',
      old_price: '',
      new_price: 'R$ 297,12',
      description: ''
    },

    {
      image: 'assets/papelaria/canetas-marcadores/estojo-posca.png',
      name: 'Estojo Caneta Posca Uni Ball PC-7M 15 Unidades',
      old_price: '',
      new_price: 'R$ 798,79',
      description: ''
    },

    {
      image: 'assets/papelaria/canetas-marcadores/yellow.jpg',
      name: 'Caneta Para Vidro Window Marker Amarelo',
      old_price: '',
      new_price: 'R$ 29,40',
      description: ''
    },

    {
      image: 'assets/papelaria/canetas-marcadores/sakura.png',
      name: 'Marcador Permanente Pen Touch 5.0mm Ouro Sakura',
      old_price: '',
      new_price: 'R$ 34,94',
      description: ''
    },

    {
      image: 'assets/papelaria/canetas-marcadores/verde-marc.jpg',
      name: 'Caneta Para Vidro Window Marker Verde',
      old_price: '',
      new_price: 'R$ 29,40',
      description: ''
    },

    {
      image: 'assets/papelaria/canetas-marcadores/promaker.jpg',
      name: 'Marcador Promarker Designer 24 Cores Winsor&Newton',
      old_price: '',
      new_price: 'R$ 854,70',
      description: ''
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
