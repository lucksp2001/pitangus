import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infantil',
  templateUrl: './infantil.component.html',
  styleUrls: ['./infantil.component.css']
})
export class InfantilComponent implements OnInit {

  //Ativando o menu
  menu: boolean = false;
  aberto(){
    this.menu = !this.menu;
  }

  //Adicionando os produtos com o ngFor
  infantil: any = [
    {
      image: 'assets/ebook/infantil/pequeno-principe.jpg',
      name: 'O pequeno príncipe',
      old_price: '',
      new_price: 'R$ 2,33',
      description: 'Livro de adulto também, pois todo homem traz dentro de si o menino que foi. Como explicar a adoção deste livro por povos tão variados, em tantos países de todos os continentes? Como explicar que ele seja lido sempre por tantos milhões e milhões de pessoas? Como explicar a atualidade deste livro traduzido em oitenta línguas diferentes? Como compreender que uma história aparentemente tão ingênua seja comovente para tantas pessoas? O pequeno príncipe devolve a cada um o mistério da infância. De repente retornam os sonhos. Reaparece a lembrança de questionamentos, desvelam-se incoerências acomodadas, quase já imperceptíveis na pressa do dia a dia. Voltam ao coração escondidas recordações. O reencontro, o homem-menino.'
    },

    {
      image: 'assets/ebook/infantil/boaventura.jpg',
      name: 'Sr. Boaventura',
      old_price: 'R$ 24,90',
      new_price: 'R$ 22,41',
      description: ' Sr. Boaventura é uma história contada por J.R.R. Tolkien aos seus filhos pequenos na década de 1930. Além de escrever tudo à mão, Tolkien também fez as ilustrações que compõem o livro. Considerado um conto de excentricidade, seu enredo e desenhos são comparados a clássicos da literatura infantil como As Aventuras de Alice no País das Maravilhas, de Lewis Carrol, Pedro Coelho, de Beatrix Potter, e A Book of Nonsense, de Edward Lear.'
    },

    {
      image: 'assets/ebook/infantil/arvore.jpg',
      name: 'A árvore generosa',
      old_price: 'R$ 23,90',
      new_price: 'R$ 20,72',
      description: ' Todos os dias um menino vai até uma árvore para se pendurar em seus galhos, comer suas maçãs e descansar sob sua sombra. O menino ama a árvore e ela, feliz, o ama também. Porém, à medida que o tempo passa, o garoto cresce e começa a desejar mais do que a simples companhia de sua amiga para brincar e repousar. Ele passa a querer dinheiro, uma casa, uma esposa... E a árvore, sem muitos recursos para ajudá-lo mas disposta a qualquer coisa para vê-lo feliz, vai abrindo mão de sua própria vida.'
    },

    {
      image: 'assets/ebook/infantil/emocionario.jpg',
      name: 'Emocionário',
      old_price: 'R$ 29,99',
      new_price: 'R$ 26,91',
      description: 'Emocionário é um dicionário de emoções que nos ajuda a entender melhor o que se passa em nosso coração. Prazer, ódio, entusiasmo, insegurança, orgulho e muitos outros sentimentos são representados por ilustrações inspiradoras e explicados de forma simples e delicada. Com esse livro, crianças de todas as idades vão aprender a reconhecer suas emoções e expressar seus sentimentos.'
    },

    {
      image: 'assets/ebook/infantil/cansado.jpg',
      name: 'Muito cansado e bem acordado',
      old_price: '',
      new_price: 'R$ 18,32',
      description: 'O porco-espinho, a raposa, o burrico, o pelicano e o jacaré estão todos dormindo, muito cansados… Mas a foca está bem acordada. E ela não quer saber de ficar na cama! E agora? O que os outros dorminhocos vão fazer? Este livro, para leitores bem pequenos, torna a hora de dormir um momento mais divertido e gostoso para toda a família.'
    },

    {
      image: 'assets/ebook/infantil/nunca-dorme.jpg',
      name: 'O Mundo Nunca Dorme',
      old_price: 'R$ 24,90',
      new_price: 'R$ 22,18',
      description: 'Meia-noite. Estrelas salpicam a escuridão com pontinhos de luz. Uma barata desliza pelo chão da cozinha para apanhar uma migalha de pão esquecida. No quintal, uma aranha fia uma teia enredada na cerca. Insetos alados dançam e cintilam ao redor da luz da varanda. Dia e noite, pequenas criaturas estão ocupadas trabalhando, comendo, caçando, se escondendo... O Mundo Nunca Dorme.'
    },

    {
      image: 'assets/ebook/infantil/monica.jpg',
      name: 'Como cuidar do seu dinheiro',
      old_price: '',
      new_price: 'R$ 13,41',
      description: 'Os best-sellers Mauricio de Sousa e Thiago Nigro, o Primo Rico, unem-se para uma difícil empreitada: ensinar aos pequenos como lidar com dinheiro. O que significa ter dinheiro? Para que serve? Como alguém consegue ganhar dinheiro? Dá para comprar uma mesma coisa gastando menos? O livro começa com uma curta história em quadrinhos, que apresenta diversas possibilidades de usar o dinheiro. Depois disso, em páginas de texto com algumas ilustrações, Thiago usa uma linguagem simples e divertida para ensinar a turminha como o dinheiro é importante não só para comprar brinquedos, roupas e comida, mas também para realizar grandes sonhos, como fazer uma viagem ou mesmo um curso de medicina. O leitor é incentivado a questionar e refletir sobre diversos assuntos ligados ao uso do dinheiro, como comportamento consumista, inflação, juros e compra por impulso.'
    },

    {
      image: 'assets/ebook/infantil/principe-preto.jpg',
      name: 'O pequeno príncipe preto',
      old_price: '',
      new_price: 'R$ 24,90',
      description: 'Em um minúsculo planeta, vive o Pequeno Príncipe Preto. Além dele, existe apenas uma árvore Baobá, sua única companheira. Quando chegam as ventanias, o menino viaja por diferentes planetas, espalhando o amor e a empatia. O texto é originalmente uma peça infantil que já rodou o país inteiro. Agora, Rodrigo França traz essa delicada história no formato de conto, presenteando o jovem leitor com uma narrativa que fala da importância de valorizarmos quem somos e de onde viemos - além de nos mostrar a força de termos laços de carinho e afeto. Afinal, como diz o Pequeno Príncipe Preto, juntos e juntas todos ganhamos.'
    },

    {
      image: 'assets/ebook/infantil/menino.jpg',
      name: 'O Livro do Sim (Coleção Menino Maluquinho)',
      old_price: 'R$ 24,90',
      new_price: 'R$ 22,41',
      description: 'Nesta vida, já tem muita gente dizendo aos meninos e às meninas o que NÃO fazer. Faltava alguém pra dizer o que é pra fazer, SIM. É ou não é? Aqui está seu amigo, o Menino Maluquinho, pra cumprir esse papel. Nem imaginava que ele fosse um pensador, não é? Mas o que você acha que ele estava cozinhando dentro daquela panelinha? Ideias, ora!'
    },

    {
      image: 'assets/ebook/infantil/todo-mundo.jpg',
      name: 'Todo mundo junto (De Todo Mundo)',
      old_price: 'R$ 30,20',
      new_price: 'R$ 29,61',
      description: 'A professora de Geografia tem um desafio: fazer a turma do quinto ano integrar os quatro novos alunos estrangeiros, que vieram de Angola, Peru, Bolívia e Síria. Eles são tão diferentes que a galera acha graça de suas roupas, nomes e sotaques, fazendo-os se sentirem mal. Ainda bem que a professora é atenta e sensível, e coloca em ação um projeto para transformar a curiosidade das crianças em aprendizado e respeito. Neste livro, não há lugar para o preconceito, e o leitor vai viajar para outros países e culturas através das ricas ilustrações.'
    }
    
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
