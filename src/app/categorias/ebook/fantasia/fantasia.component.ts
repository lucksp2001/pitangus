import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fantasia',
  templateUrl: './fantasia.component.html',
  styleUrls: ['./fantasia.component.css']
})
export class FantasiaComponent implements OnInit {

  //Ativando o menu
  menu: boolean = false;
  aberto(){
    this.menu = !this.menu;
  }

  //Adicionando os produtos com o ngFor
  fantasia: any = [
    {
      image: 'assets/ebook/fantasia/duna.jpg',
      name: 'Duna (Crônicas de Duna Livro 1)',
      old_price: 'R$ 62,93',
      new_price: 'R$ 56,61',
      description: 'A vida do jovem Paul Atreides está prestes a mudar radicalmente. Após a visita de uma mulher misteriosa, ele é obrigado a deixar seu planeta natal para sobreviver ao ambiente árido e severo de Arrakis, o Planeta Deserto. Envolvido numa intrincada teia política e religiosa, Paul divide-se entre as obrigações de herdeiro e seu treinamento nas doutrinas secretas de uma antiga irmandade, que vê nele a esperança de realização de um plano urdido há séculos. Ecos de profecias ancestrais também o cercam entre os nativos de Arrakis. Seria ele o eleito que tornaria viáveis seus sonhos e planos ocultos? Ao lado das trilogias Fundação, de Isaac Asimov, e O Senhor dos Anéis, de J. R. R. Tolkien, Duna é considerada uma das maiores obras de fantasia e ficção científica de todos os tempos. Um premiado best-seller já levado às telas de cinema pelas mãos do consagrado diretor David Lynch.'
    },

    {
      image: 'assets/ebook/fantasia/phantastes.jpg',
      name: 'Phantastes',
      old_price: 'R$ 29,90',
      new_price: 'R$ 26,91',
      description: 'O pai da Fantasia moderna "Ouvi dizer que, para os que entram no Reino das Fadas, não há volta. Devem continuar e atravessá-lo. Como, eu não faço a menor ideia." A obra de fantasia clássica que influenciou C.S. Lewis e J.R.R. Tolkien, considerada uma das obras mais importantes de George MacDonald, é a história do jovem Anodos e suas aventuras no reino das fadas que, em última análise, revelam a condição humana. "Escrevo não para crianças", disse George MacDonald, "mas para crianças, sejam elas de cinco, cinquenta ou setenta e cinco anos". Tudo escrito com um capricho inocente e um anseio cheio de alma, o coração da jornada de Anodos através do Reino das Fadas revela uma busca espiritual que requer uma entrega de si mesmo.'
    },

    {
      image: 'assets/ebook/fantasia/hobbit.jpg',
      name: 'O Hobbit',
      old_price: 'R$ 34,90',
      new_price: 'R$ 31,41',
      description: 'Lançado em 1937, O Hobbit é um divisor de águas na literatura fantástica mundial. Mais de 80 anos após a sua publicação, o livro que antecede os ocorridos em O Senhor dos Anéis continua arrebatando fãs de todas as idades, talvez pelo seu tom brincalhão com uma pitada de magia élfica, ou talvez porque J.R.R. Tolkien tenha escrito o melhor livro infanto-juvenil de todos os tempos.'
    },

    {
      image: 'assets/ebook/fantasia/narnia.jpg',
      name: 'As Crônicas de Nárnia',
      old_price: 'R$ 66,40',
      new_price: 'R$ 25,36',
      description: '"As crônicas de Nárnia" transcenderam o gênero da fantasia para se tornar parte do cânone da literatura clássica. Por mais de sessenta anos, milhões de leitores de todo o mundo se encantam com a história mágica de C. S. Lewis sobre um mundo onde o inverno é eterno, onde há mais animais falantes do que seres humanos e onde centauros, gigantes e faunos lutam entre si. À primeira vista simples, os eventos descritos na prosa imortal de C. S. Lewis continuam cativando os leitores com aventuras, personagens e fatos que falam a pessoas de todas as idades. Este volume único apresenta todas as sete crônicas - "O sobrinho do mago", "O leão, a feiticeira e o guarda-roupa", "O cavalo e seu menino", "Príncipe Caspian", "A viagem do Peregrino da Alvorada", "A cadeira de prata" e "A última batalha". Os livros foram organizados de acordo com a ordem de preferência de Lewis e cada capítulo conta com uma ilustração da artista Pauline Baynes.Esta edição contém também o ensaio "Três maneiras de escrever para crianças".'
    },

    {
      image: 'assets/ebook/fantasia/senhor-aneis.jpg',
      name: 'O Senhor dos Anéis: A Sociedade do Anel',
      old_price: 'R$ 19,96',
      new_price: 'R$ 17,91',
      description: 'O volume inicial de O Senhor dos Anéis, lançado originalmente em julho de 1954, foi o primeiro grande épico de fantasia moderno, conquistando milhões de leitores e se tornando o padrão de referência para todas as outras obras do gênero até hoje. A imaginação prodigiosa de J.R.R. Tolkien e seu conhecimento profundo das antigas mitologias da Europa permitiram que ele criasse um universo tão complexo e convincente quanto o mundo real.'
    },

    {
      image: 'assets/ebook/fantasia/tronos.jpg',
      name: 'A guerra dos tronos (As Crônicas de Gelo e Fogo Livro 1)',
      old_price: '',
      new_price: 'R$ 39,90',
      description: 'O verão pode durar décadas. O inverno, toda uma vida. E a guerra dos tronos começou. Como Guardião do Norte, lorde Eddard Stark não fica feliz quando o rei Robert o proclama a nova Mão do Rei. Sua honra o obriga a aceitar o cargo e deixar seu posto em Winterfell para rumar para a corte, onde os homens fazem o que lhes convém, não o que devem... e onde um inimigo morto é algo a ser admirado. Longe de casa e com a família dividida, Eddard se vê cada vez mais enredado nas intrigas mortais de Porto Real, sem saber que perigos ainda maiores espreitam a distância. Nas florestas ao norte de Winterfell, forças sobrenaturais se espalham por trás da Muralha que protege a região. E, nas Cidades Livres, o jovem Rei Dragão exilado na Rebelião de Robert planeja sua vingança e deseja recuperar sua herança de família: o Trono de Ferro de Westeros. "A guerra dos tronos é a maior obra de fantasia desde que Bilbo encontrou o Anel." — SF Reviews'
    },

    {
      image: 'assets/ebook/fantasia/witcher.jpg',
      name: 'The Witcher - Box digital: Série Completa',
      old_price: 'R$ 200,00',
      new_price: 'R$ 63,36',
      description: 'Box digital contendo os 8 volumes da série The Witcher • O Último Desejo - Livro 1 • A Espada do Destino - Livro 2 • O Sangue dos Elfos - Livro 3 • Tempo do Desprezo - Livro 4 • Batismo de Fogo - Livro 5 • A Torre da Andorinha - Livro 6 • A Senhora do Lago - Livro 7 • Tempo de Tempestade - Prelúdio'
    },

    {
      image: 'assets/ebook/fantasia/harry-potter.jpg',
      name: 'Harry Potter e o enigma do Príncipe',
      old_price: 'R$ 24,90',
      new_price: 'R$ 22,41',
      description: 'Lá estava, pairando no céu sobre a escola: o crânio verde flamejante com uma língua de cobra, a marca deixada pelos Comensais da Morte sempre que entravam em um prédio... sempre que matavam... Quando Dumbledore chega à Rua dos Alfeneiros numa certa noite de verão para buscar Harry Potter, a mão com que segura a varinha está enrugada e enegrecida, mas ele não revela o motivo. Segredos e suspeitas se espalham pelo Mundo Bruxo, e a própria Hogwarts não é mais segura. Harry está convencido de que Malfoy porta a Marca Negra: há um Comensal da Morte entre eles. Harry precisará de magia poderosa e amigos verdadeiros para explorar os segredos mais sombrios de Voldemort, e Dumbledore se prepara para encarar seu destino...'
    },

    {
      image: 'assets/ebook/fantasia/hey-club.jpg',
      name: 'Hey Hey Club',
      old_price: '',
      new_price: 'R$ 35,00',
      description: '"Uma pequena cidade no nordeste americano, o futuro no espaço sideral, um pequeno jornal em Illinois, um reino mágico, dois músicos fugitivos e um bravo cavaleiro. Sabe onde você encontra tudo isso? Em Hey Hey Club. Não se trata apenas de um livro de contos, mas de uma obra com um toque especial. Lugares, personagens, enredos e até estruturas diferentes, que não deixam o leitor desgrudar os olhos das páginas. São diversas viagens para outros tempos e mundos, narrados de modo agradável e simples. Para embarcar nesta aventura, tudo o que você precisa fazer é iniciar a leitura."'
    },

    {
      image: 'assets/ebook/fantasia/dragoes.jpg',
      name: 'Caçadores de Bruxas (Dragões de Éter Livro 1)',
      old_price: 'R$ 32,90',
      new_price: 'R$ 19,28',
      description: 'Com diversas referências contemporâneas, que vão de séries como Final Fantasy e contos de fadas sombrios a bandas de rock como Limp Bizkit e Nirvana, Dragões de Éter desenvolve uma trama em que romances, guerras, intrigas, diálogos filosóficos, fantasia e sonho juvenis se entrelaçam para construir uma jornada épica de profundidade espiritual.'
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
