import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pinceis',
  templateUrl: './pinceis.component.html',
  styleUrls: ['./pinceis.component.css']
})
export class PinceisComponent implements OnInit {

  //Ativando o menu
  menu: boolean = false;
  aberto(){
    this.menu = !this.menu;
  }

  //Adicionando os produtos com o ngFor
  pincel: any = [

    {
      image: 'assets/papelaria/pinceis/pincel-real.png',
      name: 'Kit de Pincéis Princeton 9118',
      old_price: '',
      new_price: 'R$ 43,60',
      description: ''
    },

    {
      image: 'assets/papelaria/pinceis/oleo.jpg',
      name: 'Kit de Pincéis Cromacolor Acrílico e Óleo c/18',
      old_price: '',
      new_price: 'R$ 89,50',
      description: ''
    },

    {
      image: 'assets/papelaria/pinceis/aquarela.png',
      name: 'Kit de Pincéis Princeton 9312',
      old_price: '',
      new_price: 'R$ 46,00',
      description: ''
    },

    {
      image: 'assets/papelaria/pinceis/hobby.jpg',
      name: 'Kit de Pincéis Hobby & Art Sinoart 10 Peças',
      old_price: '',
      new_price: 'R$ 105,60',
      description: ''
    },

    {
      image: 'assets/papelaria/pinceis/newton.jpg',
      name: 'Kit Pincéis Winsor & Newton Azanta Black 4 Unidades',
      old_price: '',
      new_price: 'R$ 120,00',
      description: ''
    },

    {
      image: 'assets/papelaria/pinceis/kolibri.png',
      name: 'Kit de Pincéis Kolibri 4 Peças Hobby 190 334',
      old_price: '',
      new_price: 'R$ 155,20',
      description: ''
    },

    {
      image: 'assets/papelaria/pinceis/lefranc.jpg',
      name: 'Kit de Pincéis Lefranc & Bourgeois 3 Unidades 405171',
      old_price: '',
      new_price: 'R$ 259,00',
      description: ''
    },

    {
      image: 'assets/papelaria/pinceis/chato.jpg',
      name: 'Kit de Pincéis Chato Sintético Sinoart 05 Peças SFB0192',
      old_price: '',
      new_price: 'R$ 102,70',
      description: ''
    },

    {
      image: 'assets/papelaria/pinceis/reeves.jpg',
      name: 'Kit de Pincéis Para Pintura Óleo Reeves 4 Unidades Cabo Longo',
      old_price: '',
      new_price: 'R$ 48,00',
      description: ''
    },

    {
      image: 'assets/papelaria/pinceis/foundation.jpg',
      name: 'Kit Pincéis Winsor & Newton Foundation 6 Unidades',
      old_price: '',
      new_price: 'R$ 144,00',
      description: ''
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
