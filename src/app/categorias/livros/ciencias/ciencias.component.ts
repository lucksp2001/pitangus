import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciencias',
  templateUrl: './ciencias.component.html',
  styleUrls: ['./ciencias.component.css']
})
export class CienciasComponent implements OnInit {

  //Ativando o menu
  menu: boolean = false;
  aberto(){
    this.menu = !this.menu;
  }

  //Adicionando os produtos com o ngFor
  ciencia: any = [
    {
      image: 'assets/livros/ciencias/arvores.jpg',
      name: 'A vida secreta das árvores ',
      old_price: 'R$ 44,90',
      new_price: 'R$ 17,30',
      description: 'Em A vida secreta das árvores, o engenheiro florestal alemão Peter Wohlleben alia seus 20 anos de experiência às últimas descobertas científicas para examinar o dia a dia desses seres fantásticos. Com um ponto de vista surpreendente e inovador, o livro se tornou um fenômeno na Alemanha, entrou para a lista de mais vendidos do The New York Times e teve seus direitos negociados para 18 países. Essa viagem fascinante pela vida das árvores e florestas é um convite a repensarmos nossa relação com a natureza.'
    },

    {
      image: 'assets/livros/ciencias/bebado.jpg',
      name: 'O andar do bêbado: Como o acaso determina nossas vidas',
      old_price: 'R$ 39,90',
      new_price: 'R$ 27,13',
      description: 'Best-seller nacional e internacional, com cerca de 180 mil exemplares vendidos no Brasil! Esta edição comemorativa celebra os 10 anos de lançamento do best-seller O andar do bêbado, do físico e matemático Leonard Mlodinow. Não estamos preparados para lidar com o aleatório e por isso não percebemos como o acaso interfere em nossas vidas.Nesse livro notável, Mlodinow combina os mais diferentes exemplos para mostrar que as notas escolares, diagnósticos médicos, sucesso de bilheteria e resultados eleitorais são, como muitas outras coisas, determinados por eventos imprevisíveis'
    },

    {
      image: 'assets/livros/ciencias/cosmos.jpg',
      name: 'Cosmos',
      old_price: 'R$ 69,90',
      new_price: 'R$ 48,93',
      description: 'Escrito por um dos maiores divulgadores de ciência do século XX, Cosmos retraça 14 bilhões de anos de evolução cósmica, explorando tópicos como a origem da vida, o cérebro humano, hieróglifos egípcios, missões espaciais, a morte do sol, a evolução das galáxias e as forças e indivíduos que ajudaram a moldar a ciência moderna. Numa prosa transparente, Carl Sagan revela os segredos do planeta azul habitado por uma forma de vida que apenas começa a descobrir sua própria identidade e a se aventurar no vasto oceano do espaço sideral. Aqui, o tratamento dos temas científicos está sempre imbricado com outros campos de estudo tradicionais, como história, antropologia, arte e filosofia.'
    },

    {
      image: 'assets/livros/ciencias/gene.jpg',
      name: 'O gene egoísta',
      old_price: 'R$ 82,90',
      new_price: 'R$ 46,60',
      description: 'O gene egoísta foi publicado em 1976. Propunha-se a condensar o enorme corpo teórico já produzido para compreender como espécies surgem e se diversificam, como indivíduos se relacionam e colaboram entre si - e a ir além. Richard Dawkins inovou de muitas maneiras. Introduziu uma linguagem informal e metafórica numa área dominada por reflexões densas e fórmulas matemáticas.Um dos livros mais aclamados da história da divulgação científica, ele não só apresenta a biologia evolutiva de forma acessível, mas acrescenta uma interpretação metafórica que inspirou gerações de biólogos e simpatizantes: somos máquinas de sobrevivência a serviço dos genes.'
    },

    {
      image: 'assets/livros/ciencias/homo.jpg',
      name: 'Homo Deus',
      old_price: 'R$ 67,90',
      new_price: 'R$ 47,50',
      description: 'Neste Homo Deus: uma breve história do amanhã, Yuval Noah Harari, autor do estrondoso best-seller Sapiens: uma breve história da humanidade, volta a combinar ciência, história e filosofia, desta vez para entender quem somos e descobrir para onde vamos. Sempre com um olhar no passado e nas nossas origens, Harari investiga o futuro da humanidade em busca de uma resposta tão difícil quanto essencial: depois de séculos de guerras, fome e pobreza, qual será nosso destino na Terra? A partir de uma visão absolutamente original de nossa história, ele combina pesquisas de ponta e os mais recentes avanços científicos à sua conhecida capacidade de observar o passado de uma maneira inteiramente nova. Assim, descobrir os próximos passos da evolução humana será também redescobrir quem fomos e quais caminhos tomamos para chegar até aqui.'
    },

    {
      image: 'assets/livros/ciencias/labirinto.jpg',
      name: 'No labirinto do cérebro',
      old_price: 'R$ 59,90',
      new_price: 'R$ 31,80',
      description: 'Em No labirinto do cérebro, o dr. Paulo Niemeyer Filho divide com o leitor sua experiência como neurocirurgião e, de forma clara e acessível, descreve não só o funcionamento do cérebro como as mais recentes descobertas nessa área, explorando temas tão variados como a formação da memória, os mistérios da dor ou os efeitos por vezes inusitados de um distúrbio cerebral. A essa narrativa somam-se ainda as histórias fascinantes ― e às vezes surpreendentes ― de casos que acompanhou desde o início de sua carreira, e também os que ouviu de seu pai, o dr. Paulo Niemeyer, considerado o maior nome da neurocirurgia brasileira. A ideia deste livro surgiu justamente quando percebeu a enorme curiosidade que seus casos médicos exerciam em amigos e familiares.'
    },

    {
      image: 'assets/livros/ciencias/mate.jpg',
      name: 'O livro da matemática',
      old_price: 'R$ 69,90',
      new_price: 'R$ 46,70',
      description: 'O livro da matemática descomplica as teorias e fórmulas que costumam assustar os estudantes na escola. Com linguagem simples, esquemas visuais, infográficos e explicações concisas, ele é perfeito para todos: desde os mais experientes até os leitores que nunca tiveram contato com os conceitos apresentados. Prepare-se para se encantar com a perfeição dos números e com a presença da matemática em nosso cotidiano!'
    },

    {
      image: 'assets/livros/ciencias/oraculo.jpg',
      name: 'O oráculo da noite: A história e a ciência do sonho',
      old_price: 'R$ 82,90',
      new_price: 'R$ 51,70',
      description: ' O que é, afinal, o sonho? Para que ele serve? Como extrair sentido de seus tantos símbolos, repletos de detalhes e significados? Neste livro, o renomado neurocientista Sidarta Ribeiro responde a essas e muitas outras questões sobre um dos grandes enigmas da humanidade ao recuperar narrativas literárias e históricas do mundo todo. Ele mostra como os sonhos eram importantes às civilizações antigas, como no Egito e na Grécia, situando-os no cerne da ciência e da política, ou como as culturas ameríndias preservam alguns dos exemplos mais bem documentados de profecias oníricas capazes de guiar povos inteiros. Ao mobilizar os principais debates da psicanálise, da medicina, da biologia molecular e da neurofisiologia, O oráculo da noite apresenta uma história da mente humana pelo fio condutor do sonho.'
    },

    {
      image: 'assets/livros/ciencias/planta-mundo.jpg',
      name: 'A planta do mundo',
      old_price: 'R$ 59,90',
      new_price: 'R$ 52,20',
      description: 'A planta do mundo, novo livro do botânico e fundador da neurobiologia vegetal Stefano Mancuso, dá destaque à inclinação literária desse cientista apaixonado pelas plantas. Ganhador do prêmio Galileo de escrita literária de divulgação científica de 2018 com o best-seller A revolução das plantas, neste novo livro Mancuso reúne narrativas saborosas sobre curiosidades históricas que de um modo ou de outro envolvem plantas. O livro trata das árvores da liberdade plantadas na Revolução Francesa, das cidades sem plantas, dos troncos de árvore especiais para fazer violinos Stradivarius, de sementes enviadas à Lua e até mesmo do caso em que um perito botânico ofereceu provas para desvendar um crime. As plantas estão em toda parte para quem está aberto a percebê-las.'
    },

    {
      image: 'assets/livros/ciencias/sapiens.jpg',
      name: 'Sapiens (Nova edição): Uma breve história da humanidade',
      old_price: 'R$ 64,90',
      new_price: 'R$ 45,40',
      description: 'O planeta Terra tem cerca de 4,5 bilhões de anos. Numa fração ínfima desse tempo, uma espécie entre incontáveis outras o dominou: nós, humanos. Somos os animais mais evoluídos e mais destrutivos que jamais viveram. Sapiens é a obra-prima de Yuval Noah Harari e o consagrou como um dos pensadores mais brilhantes da atualidade. Num feito surpreendente, que já fez deste livro um clássico contemporâneo, o historiador israelense aplica uma fascinante narrativa histórica a todas as instâncias do percurso humano sobre a Terra. Da Idade da Pedra ao Vale do Silício, temos aqui uma visão ampla e crítica da jornada em que deixamos de ser meros símios para nos tornarmos os governantes do mundo. Harari se vale de uma abordagem multidisciplinar que preenche as lacunas entre história, biologia, filosofia e economia, e, com uma perspectiva macro e micro, analisa não apenas os grandes acontecimentos, mas também as mudanças mais sutis notadas pelos indivíduos.'
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
