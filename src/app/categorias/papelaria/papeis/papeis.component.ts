import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-papeis',
  templateUrl: './papeis.component.html',
  styleUrls: ['./papeis.component.css']
})
export class PapeisComponent implements OnInit {

  //Ativando o menu
  menu: boolean = false;
  aberto(){
    this.menu = !this.menu;
  }

  //Adicionando os produtos com o ngFor
  papel: any = [

    {
      image: 'assets/papelaria/papeis/sketch-50.jpg',
      name: 'Bloco de Papel Sketch Clairefontaine A4',
      old_price: '',
      new_price: 'R$ 54,00',
      description: ''
    },

    {
      image: 'assets/papelaria/papeis/canson.png',
      name: 'Pochette C à Grain Canson A3 29,7X42cm 220g/m² 8 Folhas',
      old_price: '',
      new_price: 'R$ 65,09',
      description: ''
    },

    {
      image: 'assets/papelaria/papeis/galo.png',
      name: 'Bloco Para Aquarela Edição Aniversário Hahnemühle 30x40cm 50 Folhas',
      old_price: '',
      new_price: 'R$ 292,96',
      description: ''
    },

    {
      image: 'assets/papelaria/papeis/cardinal.jpg',
      name: 'Papel Para Aquarela Cardinal 50x65cm 300g/m² Clairefontaine (Unidade)',
      old_price: '',
      new_price: 'R$ 33,90',
      description: ''
    },

    {
      image: 'assets/papelaria/papeis/arches.jpg',
      name: 'Bloco de Papel Arches Sketch Canson 105g/m²',
      old_price: '',
      new_price: 'R$ 115,20',
      description: ''
    },

    {
      image: 'assets/papelaria/papeis/letraset.jpg',
      name: 'Bloco Para Marcador Bleedproof LetraSet A3 70g/m² 50 Folhas²',
      old_price: '',
      new_price: 'R$ 166,10',
      description: ''
    },

    {
      image: 'assets/papelaria/papeis/newton.png',
      name: 'Bloco de Papel Tinta Óleo Winsor & Newton 230g A4 10 Folhas Textura de Linho',
      old_price: '',
      new_price: 'R$ 134,00',
      description: ''
    },

    {
      image: 'assets/papelaria/papeis/canvas.jpg',
      name: 'Bloco de Papel Telado 21x29,7cm 210g Clairefontaine',
      old_price: '',
      new_price: 'R$ 118,00',
      description: ''
    },

    {
      image: 'assets/papelaria/papeis/bristol.png',
      name: 'Bloco de Papel Desenho Bristol A3 205g/m² Clairefontaine',
      old_price: '',
      new_price: 'R$ 136,00',
      description: ''
    },

    {
      image: 'assets/papelaria/papeis/papel-canson.jpg',
      name: 'Papel Canson Vivaldi A4 120g/m² 15 Folhas 20 Verde Escuro',
      old_price: '',
      new_price: 'R$ 15,88',
      description: ''
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
