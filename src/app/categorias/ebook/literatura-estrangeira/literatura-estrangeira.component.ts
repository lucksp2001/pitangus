import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-literatura-estrangeira',
  templateUrl: './literatura-estrangeira.component.html',
  styleUrls: ['./literatura-estrangeira.component.css']
})
export class LiteraturaEstrangeiraComponent implements OnInit {

  //Ativando o menu
  menu: boolean = false;
  aberto(){
    this.menu = !this.menu;
  }

  //Adicionando os produtos com o ngFor
  estrangeiro: any = [
    {
      image: 'assets/ebook/estrangeiro/ana.jpg',
      name: 'Anna Kariênina',
      old_price: 'R$ 39,90',
      new_price: 'R$ 37,52',
      description: '"Toda a diversidade, todo o encanto, toda a beleza da vida é feita de sombra e de luz", escreve Liev Tolstói no romance que Fiódor Dostoiévski definiu como "impecável". Publicado originalmente em forma de fascículos entre 1875 e 1877, antes de finalmente ganhar corpo de livro em 1877, Anna Kariênina continua a causar espanto. Como pode uma obra de arte se parecer tanto com a vida? Com absoluta maestria, Tolstói conduz o leitor por um salão repleto de música, perfumes, vestidos de renda, num ambiente de imagens vívidas e quase palpáveis que têm como pano de fundo a Rússia czarista.'
    },

    {
      image: 'assets/ebook/estrangeiro/george.jpg',
      name: 'As obras revolucionárias de George Orwell - Box com 3 livros',
      old_price: 'R$ 19,90',
      new_price: 'R$ 17,91',
      description: 'George Orwell é um dos escritores mais importantes do século XX. Foi autor de romances, ensaios, críticas e artigos jornalísticos, com textos de fácil compreensão, inteligentes e críticos, apontando as injustiças sociais. Suas obras trazem oposição ao totalitarismo, o que as tornaram influentes na cultura popular, mas também na política. Conheça a essência de Orwell em 1984, A revolução dos bichos e Dentro da baleia e outros ensaios.'
    },

    {
      image: 'assets/ebook/estrangeiro/conde.jpg',
      name: 'O conde de Monte Cristo: edição comentada e ilustrada',
      old_price: '',
      new_price: 'R$ 17,46',
      description: 'O conde de Monte Cristo é um clássico da literatura mundial que mexe com a imaginação e a sensibilidade de milhões de leitores há mais de 170 anos. E essa obra-prima está de volta na edição brasileira que merece, que traz o texto integral na tradução viva que venceu o prêmio Jabuti, 170 gravuras de época e mais de 500 notas explicativas, além de uma magnífica apresentação e cronologia de vida e obra do autor. Manipulando com maestria os cordões da trama, Alexandre Dumas prende o leitor numa teia de peripécias de tirar o fôlego – traições, denúncias anônimas, tesouros fabulosos, envenenamentos e vinganças – e apresenta uma galeria de personagens que retrata o espectro social de um mundo em transformação. Um livro maravilhoso numa edição imperdível.'
    },

    {
      image: 'assets/ebook/estrangeiro/divino.jpg',
      name: 'A Divina Comédia (Clássicos da literatura mundial)',
      old_price: 'R$ 7,47',
      new_price: 'R$ 7,11',
      description: ' A Divina Comédia é um poema clássico da literatura italiana e mundial com características épica e teológica, escrito por Dante Alighieri no século XIV período renascentista e dividido em três partes: o Inferno, o Purgatório e o Paraíso. São cem cantos protagonizados pelo próprio Dante em companhia do poeta romano Virgílio , que percorreu uma jornada espiritual pelos três reinos além-túmulo.'
    },

    {
      image: 'assets/ebook/estrangeiro/vidro.jpg',
      name: 'A redoma de vidro: Nova edição',
      old_price: 'R$ 35,94',
      new_price: 'R$ 17,97',
      description: 'Publicado originalmente em 1963, esta edição, com tradução de Chico Mattoso, traz nova capa e desenhos da autora. Lançado semanas antes da morte de Sylvia, o livro é repleto de referências autobiográficas, e a narrativa é inspirada nos acontecimentos do verão de 1952, quando Silvia Plath tentou o suicídio e foi internada em uma clínica psiquiátrica. "A redoma de vidro continuará a ressoar nas pessoas ao longo dos anos e merecerá inúmeras releituras, pois fala de contradições e de problemas humanos. Um livro para refletir sobre a representação da mulher na sociedade, os desafios profissionais e a solidão nas metrópoles e sobre alguém que tinha tudo para ser feliz." Juliana Gomes, co-criadora do projeto Leia Mulheres'
    },

    {
      image: 'assets/ebook/estrangeiro/natal.jpg',
      name: 'Uma canção de Natal',
      old_price: '',
      new_price: 'R$ 19,90',
      description: 'Incapaz de compartilhar momentos de amizade e de compreender a magia do Natal, Ebenezer Scrooge só encontra refúgio na riqueza e na solidão. Até que, num 24 de dezembro, recebe a visita do fantasma de Jacob Marley, seu ex-sócio falecido há sete anos. É ele quem avisa a Scrooge que mais três espíritos o visitarão para lhe dar a chance de mudar seu triste fim e ser poupado de vagar a esmo depois de morto, como Marley. Assim, o Fantasma dos Natais Passados, o Fantasma do Natal Presente e o Fantasma dos Natais Futuros levarão o protagonista para uma viagem no tempo, mostrando-lhe que a generosidade é sempre a melhor escolha. Um dos livros mais carismáticos da literatura inglesa, Uma canção de Natal recebe o crédito por ter concebido a celebração desse evento como a entendemos hoje: uma ocasião para agradecer e ajudar o próximo.'
    },

    {
      image: 'assets/ebook/estrangeiro/admiravel.jpg',
      name: 'Admirável mundo novo',
      old_price: 'R$ 26,94',
      new_price: 'R$ 13,47',
      description: 'Um clássico moderno, o romance distópico de Aldous Huxley é indispensável para quem busca leituras sobre autoritarismo, manipulação genética, ficção especulativa e outros temas que, embora tenham surgido com força durante a primeira metade do século XX, se tornam cada dia mais atuais.'
    },

    {
      image: 'assets/ebook/estrangeiro/grey.jpg',
      name: 'O Retrato de Dorian Gray',
      old_price: 'R$ 10,95',
      new_price: 'R$ 9,81',
      description: 'Único romance escrito por Oscar Wilde, O retrato de Dorian Gray foi publicado em 1890 na revista Lippincott`s Monthly Magazine. Na ocasião, sem avisar o autor, os editores optaram por suprimir mais de quinhentas palavras do romance, por considerá-lo indecente. Esse ato revoltou Wilde, que republicaria o texto em livro no ano seguinte, revisado e ampliado – esta é a versão que trazemos nesta edição. A obsessão estética e a vida de aparências são temas centrais de O retrato de Dorian Gray. Ao retratar uma questão humana que persiste por séculos, Wilde criou uma obra-prima da literatura que merece seu lugar entre os maiores clássicos da história.'
    },

    {
      image: 'assets/ebook/estrangeiro/mulheres.jpg',
      name: 'Mulherzinhas – Adoráveis Mulheres',
      old_price: 'R$ 29,90',
      new_price: 'R$ 26,91',
      description: 'Esta é a história de amadurecimento dessas quatro jovens. Mulherzinhas aborda questões feministas de forma leve e aberta e ao mesmo tempo exalta valores como a virtude, a igualdade de gênero e a realização individual. A obra foi novamente adaptada para o cinema em 2019 em uma superprodução com participação de Meryl Streep, Emma Watson e Laura Dern. Mulherzinhas foi publicado nos Estados Unidos pela primeira vez em dois volumes. A primeira parte, em 1868. Em virtude do grande sucesso da obra, Louisa May Alcott apressou-se em produzir uma sequência que seria publicada no ano seguinte.'
    },

    {
      image: 'assets/ebook/estrangeiro/medico.jpg',
      name: 'O médico e o monstro: O estranho caso do dr. Jekyll e sr. Hyde',
      old_price: '',
      new_price: 'R$ 9,90',
      description: 'Um médico que faz experimentos no próprio corpo buscando entender as contradições da alma é o mote desse clássico do horror. Poucos clássicos da literatura são tão conhecidos e adorados como O médico e o monstro. Escrito quando o autor tinha trinta e cinco anos de idade, em 1885, o romance foi um sucesso imediato de público e inseriu Robert Louis Stevenson no grupo seleto dos grandes escritores da literatura universal. Ao narrar as experiências de um médico que, numa "noite maldita", tomou uma poção fumegante de coloração avermelhada e descobriu "a dualidade absoluta e primordial do homem", o autor escocês criou uma história de suspense e horror, em que o perigo iminente não está do lado de fora, mas do lado de dentro, na parte obscura da alma.'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
