import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direito',
  templateUrl: './direito.component.html',
  styleUrls: ['./direito.component.css']
})
export class DireitoComponent implements OnInit {

  //Ativando o menu
  menu: boolean = false;
  aberto(){
    this.menu = !this.menu;
  }

  //Adicionando os produtos com o ngFor
  direito: any = [
    {
      image: 'assets/livros/direito/iguais.jpg',
      name: 'Iguais perante a lei: Um guia prático para você garantir seus direitos',
      old_price: 'R$ 46,90',
      new_price: 'R$ 31,89',
      description: 'Neste livro, o advogado criminalista Augusto de Arruda Botelho oferece o manual de justiça para leigos. Este é um livro que foge do juridiquês tão temido. Aqui, você aprenderá as regras essenciais do sistema de justiça, como funciona um processo e a melhor maneira de lidar com algumas situações concretas que pode vir a passar, como o que fazer se sofrer violência doméstica, xingar muito no Twitter, passar por uma abordagem policial ou for detido em manifestação. Você terá em mãos o conhecimento mínimo necessário para lutar pelos seus direitos – e contribuir para que todos nós, de fato, sejamos iguais perante a lei.'
    },

    {
      image: 'assets/livros/direito/delitos.jpg',
      name: 'Dos Delitos e das Penas ',
      old_price: 'R$ 21,90',
      new_price: 'R$ 14,65',
      description: 'Desde a sua primeira edição, em 1764, Dos Delitos e Das Penas provocou (e continua provocando) as mais intensas polêmicas, devido principalmente ao seu embasamento francamente humanista. Os temas aqui discutidos – pena de morte, acusações secretas, prisão, torturas, roubo, contrabando, entre outros – continuam despertando o interesse de profissionais, pesquisadores e estudiosos, tornando esta obra, hoje clássica, uma permanente e profícua fonte de inspiração e reflexão para todos os que se preocupam com os Direitos Humanos. A presente obra constitui-se num tratado que impulsionou grandes modificações no Direito Penal internacional e também nas Constituições Brasileiras, cuja influência encontra-se presente nos princípios da anterioridade, da legalidade, da responsabilidade pessoal, da irretroatividade da lei penal, da presunção de inocência, da proporcionalidade da pena, entre outros.'
    },

    {
      image: 'assets/livros/direito/imobi.jpg',
      name: 'Direito Imobiliário - Teoria e Prática',
      old_price: 'R$ 398,00',
      new_price: 'R$ 298,50',
      description: 'Trata-se de obra de grande atualidade, que focaliza os problemas imobiliários com acuidade e coragem, pois o autor, com a experiência de quem milita na área, traz questões e debate temas oferecendo soluções novas que fogem do tradicionalismo. Apresenta ao leitor uma visão especializada do Direito Imobiliário voltado para a prática, sem perder de vista os aspectos doutrinários e jurisprudenciais relevantes, expostos com a necessária profundidade, e a legislação que rege a matéria.'
    },

    {
      image: 'assets/livros/direito/platao.jpg',
      name: 'As Leis (ou da legislação): Incluindo Epinomis',
      old_price: 'R$ 119,00',
      new_price: 'R$ 80,92',
      description: 'Este é o último Diálogo de autoria indiscutível de Platão. E o mais extenso e abrangente de todos os textos do mestre da Academia. As Leis representa um dos mais valiosos registros de cunho jurídico de toda a história do pensamento ocidental. A riqueza e a profundidade de sua temática, exaltadas pela extrema maturidade filosófica que exibe, tornam este livro uma obra indispensável para os estudantes e estudiosos do direito, da filosofia e das demais ciências humanas.'
    },

    {
      image: 'assets/livros/direito/penal.jpg',
      name: 'Prática Jurídica Penal - 16 ª Edição 2021',
      old_price: 'R$ 136,00',
      new_price: 'R$ 90,31',
      description: 'Data de fechamento: 9-12-2020. Elaborada para auxiliar os candidatos na preparação para a prova do Exame de Ordem, esta obra contempla teoria e prática de modo sistematizado e objetivo.Com linguagem simples e de fácil compreensão, o leitor encontrará na parte teórica os principais temas exigidos na 2ª fase do Exame da OAB, e na parte prática o método para a elaboração da peça, além de dicas e observações que o ajudarão na sua preparação.A obra contempla também questões do Exame da OAB com gabarito nos critérios exigidos pela banca, proporcionando ao leitor uma melhor compreensão de como o assunto é cobrado nas provas.O leitor conta com uma ferramenta de estudo indispensável para alcançar a aprovação no Exame de Ordem.'
    },

    {
      image: 'assets/livros/direito/manual.jpg',
      name: 'Manual de Direito Civil contemporâneo - 2ª edição de 2019',
      old_price: 'R$ 199,00',
      new_price: 'R$ 121,60',
      description: 'O Manual oferece ao leitor um curso completo de Direito Civil sintetizado em um volume único. O autor expõe os conceitos fundamentais da disciplina e enfrenta as questões mais atuais na matéria. Com caráter interativo, a obra oferece ao leitor, uma série de recursos adicionais ao texto em si, como vídeos e materiais complementares de aprofundamento e atualização. O Manual é fruto da experiência de mais de quinze anos em aulas de graduação e pós-graduação e reúne em um só volume todos os ramos do Direito Civil, além de oferece ao leitor uma visão, a um só tempo, sintética e profunda da disciplina. Em linguagem didática e informal, o Professor Anderson Schreiber apresenta não apenas os tradicionais fundamentos do Direito Civil, mas também as novas teorias e construções que vêm sendo aplicadas pelos nossos tribunais.'
    },

    {
      image: 'assets/livros/direito/justica.jpg',
      name: 'A Justiça ',
      old_price: 'R$ 21,90',
      new_price: 'R$ 17,51',
      description: 'Este diálogo foi extraído de A República, a mais traduzida, difundida, estudada e influente obra de Platão, consagrada como um dos mais expressivos textos de filosofia de todos os tempos! Composto por um diálogo narrado em primeira pessoa por Sócrates, este livro apresenta como questão fundamental o tema da justiça, permeado por discussões acerca de qual é a sua natureza e de que ela é constituída. Um tema de caráter amplo, e que alcança os mais diversos campos de reflexão - transitando do âmbito pessoal ao social e desembocando no plano universal -, que merece ser estudado e apreciado por todos aqueles que buscam compreender, refletir e transcender os limites deste conceito universalmente presente na formação, na organização e na evolução das sociedades passadas, presentes e futuras.'
    },

    {
      image: 'assets/livros/direito/teoria.jpg',
      name: 'Teoria do Ordenamento Jurídico',
      old_price: 'R$ 54,00',
      new_price: 'R$ 30,50',
      description: ' A Teoria do Ordenamento Jurídico é uma das mais importantes obras do debate jurídico. Tanto no Brasil como no mundo. Noberto Bobbio é considerado um dos mais respeitados jusfilósofos da atualidade. Para o Professor Celso Lafer. A Filosofia do Direito de Bobbio, como uma filosofia do Direito subspecie juris, é uma admirável expressão da razão jurídica, voltada para esclarecer as operações intelectuais e práticas na criação do Direito e na sua aplicação. É nesse campo que Bobbio se move, é desse modo que se pode situar a Teoria de Ordenamento e realçar sua importância.'
    },

    {
      image: 'assets/livros/direito/direito-penal.jpg',
      name: 'Curso de direito penal 2 : Parte especial - 19ª edição de 2019: Parte Especial (arts. 121 a 212): Volume 2',
      old_price: 'R$ 204,00',
      new_price: 'R$ 61,90',
      description: 'O Curso de Direito Penal, de Fernando Capez, composto em 4 volumes, é referência nacional no estudo do Direito Penal, escrito em uma linguagem descomplicada, com objetividade, sem perder a riqueza do conteúdo, facilitando o entendimento dos institutos. O volume 2 trata da Parte Especial do Código Penal - Dos Crimes contra a pessoa a Dos Crimes contra o sentimento religioso e contra o respeito aos mortos (arts. 121 a 21). A obra foi revista e atualizada, de acordo com as Leis n. 13.641, 13.654, 13.606 de 2018.'
    },

    {
      image: 'assets/livros/direito/argumentar.jpg',
      name: 'Interpretar e Argumentar',
      old_price: '',
      new_price: 'R$ 131,90',
      description: 'esta obra, Guastini passa por diversas áreas do direito e tem a rara felicidade de abordar, com precisão e objetividade, as atividades dos partícipes do fenômeno jurídico ao interpretar suas fontes e argumentar sobre a criação e solução dos problemas que a eles se apresentam. A tarefa dos intérpretes e as estratégias argumentativas geralmente empregadas são reveladas em suas premissas, desenvolvimento e conclusão, o que permite ao leitor que também é operador do direito visualizar imediatamente a sua prática jurídica ao percorrer os temas que compõem este livro. Mas não apenas isso. Esta característica marcante da obra de Guastini também tem o mérito de possibilitar uma reflexão sobre o trabalho e método jurídicos.'
    }
    
  ]

  
  constructor() { }

  ngOnInit(): void {
  }

}
