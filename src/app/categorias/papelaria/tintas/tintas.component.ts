import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tintas',
  templateUrl: './tintas.component.html',
  styleUrls: ['./tintas.component.css']
})
export class TintasComponent implements OnInit {

  //Ativando o menu
  menu: boolean = false;
  aberto(){
    this.menu = !this.menu;
  }

  //Adicionando os produtos com o ngFor
  tinta: any = [

    {
      image: 'assets/papelaria/tintas/estojo.jpg',
      name: 'Estojo Tinta Acrílica Winsor & Newton Galeria 60ml 06 Cores',
      old_price: '',
      new_price: 'R$ 378,00',
      description: ''
    },

    {
      image: 'assets/papelaria/tintas/estojo-leao.jpg',
      name: 'Estojo Tinta Acrílica Winsor & Newton Galeria Gift Collection 10 Peças',
      old_price: '',
      new_price: 'R$ 478,00',
      description: ''
    },

    {
      image: 'assets/papelaria/tintas/pastilha.jpg',
      name: 'Estojo Tinta Aquarela em Pastilha Winsor & Newton Cotman Floral',
      old_price: '',
      new_price: 'R$ 254,00',
      description: ''
    },

    {
      image: 'assets/papelaria/tintas/rose.jpg',
      name: 'Tinta Aquarela Cotman W&N Pastilha 502 Permanent Rose',
      old_price: '',
      new_price: 'R$ 28,00',
      description: ''
    },

    {
      image: 'assets/papelaria/tintas/blue.jpg',
      name: 'Tinta Aquarela Cotman W&N Tubo 8ml 139 Cerulean Blue Hue',
      old_price: '',
      new_price: 'R$ 39,00',
      description: ''
    },

    {
      image: 'assets/papelaria/tintas/estojo-ole.jpg',
      name: 'Estojo Tinta Óleo Winton 12ml 20 Tubos',
      old_price: '',
      new_price: 'R$ 648,00',
      description: ''
    },

    {
      image: 'assets/papelaria/tintas/orange.jpg',
      name: 'Tinta Guache Para Caligrafia Talens 16ml 235 Orange',
      old_price: '',
      new_price: 'R$ 26,95',
      description: ''
    },

    {
      image: 'assets/papelaria/tintas/gold.jpg',
      name: 'Tinta Óleo Artist 37ml Winsor & Newton S2 294 Green Gold',
      old_price: '',
      new_price: 'R$ 122,80',
      description: ''
    },

    {
      image: 'assets/papelaria/tintas/nanquim.jpg',
      name: 'Tinta Nanquim Colorida Koh-I-Noor Preto',
      old_price: '',
      new_price: 'R$ 13,10',
      description: ''
    },

    {
      image: 'assets/papelaria/tintas/guache.jpg',
      name: 'Tinta Guache Para Caligrafia Talens 16ml 205 Lemon Yellow (P)',
      old_price: '',
      new_price: 'R$ 26,95',
      description: ''
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
