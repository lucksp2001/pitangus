import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hqs-mangas',
  templateUrl: './hqs-mangas.component.html',
  styleUrls: ['./hqs-mangas.component.css']
})
export class HqsMangasComponent implements OnInit {

  //Ativando o menu
  menu: boolean = false;
  aberto(){
    this.menu = !this.menu;
  }

  //Adicionando os produtos com o ngFor
  mangas: any = [
    {
      image: 'assets/livros/hqs-mangas/batman-noir.jpg',
      name: 'Batman Noir: O Cavaleiro das Trevas',
      old_price: 'R$ 110,90',
      new_price: 'R$ 89,90',
      description: 'Escrita e desenhada por Frank Miller, a história, mostrando um Cavaleiro das Trevas envelhecido e amargurado voltando à ativa após anos de aposentadoria, ultrapassou as fronteiras do que se convencionava considerar histórias em quadrinhos, estabelecendo novos parâmetros, tanto em narrativa como em temática, e influenciando tudo o que veio depois.'
    },

    {
      image: 'assets/livros/hqs-mangas/bidu.jpg',
      name: 'Graphic MSP - Bidu. Caminhos',
      old_price: 'R$ 19,90',
      new_price: 'R$ 14,90',
      description: 'Em Caminhos, os autores Eduardo Damasceno e Luís Felipe Garrocho reimaginam de modo belíssimo a forma como Bidu e Franjinha, os dois primeiros personagens criados por Mauricio de Sousa, se tornaram melhores amigos. Uma aventura cheia de problemas, surras, desvios de rota, chuva, cachorros, decisões difíceis e ternura. Mais uma edição que nasce clássica, apresentando a reinterpretação de personagens do maior quadrinista brasileiro sob a ótica de novos autores do quadrinho nacional.'
    },

    {
      image: 'assets/livros/hqs-mangas/fabulas.png',
      name: 'Fabulas - Edição De Luxo Vol. 07',
      old_price: 'R$ 89,90',
      new_price: 'R$ 60,83',
      description: 'As fábulas desferiram um duro golpe contra o Adversário ao destruírem seus bens mais preciosos exatamente no coração do Império, mas também podem ter preparado o caminho para uma sangrenta guerra entre mundos! Enquanto o governante das Terras Natais lambe as feridas e reúne suas forças, os moradores da Cidade das Fábulas têm uma rara chance de desfrutar a breve paz que a vitória lhes trouxe. Mas todos sabem que essa é apenas a calmaria que precede a tempestade - e é hora de se cobrar juramentos de lealdade daqueles que ainda estão em cima do muro. Antes que seja tarde!'
    },

    {
      image: 'assets/livros/hqs-mangas/incal.jpg',
      name: 'Incal - Vol 1',
      old_price: '',
      new_price: 'R$ 149,90',
      description: 'A maior ficção científica dos quadrinhos está de volta ao Brasil. A Editora Pipoca e Nanquim orgulhosamente apresenta Incal, a obra-prima de Alejandro Jodorowsky e Moebius. Em um mundo distópico e degenerado, John Difool, um detetive particular de quinta categoria, vê sua vida virar de cabeça para baixo quando encontra um antigo artefato místico chamado "Incal". Em pouco tempo, ele se vê envolvido num conflito épico entre o Metabarão, o maior guerreiro da galáxia, e os descomunais poderes científicos do Tecnopapa. Movido por situações cada vez inusitadas, Difool terá que lutar não só pela sua sobrevivência, mas pela de todo o universo.'
    },

    {
      image: 'assets/livros/hqs-mangas/maus.jpg',
      name: 'Maus',
      old_price: '64,90',
      new_price: 'R$ 51,19',
      description: 'Clássico contemporâneo dos quadrinhos, Maus é um relato comovente sobre Auschwitz e um acerto de contas do artista com o pai. Única história em quadrinhos a receber o Prêmio Pulitzer. Maus ("rato", em alemão) é a história de Vladek Spiegelman, judeu polonês que sobreviveu ao campo de concentração de Auschwitz, narrada por ele próprio ao filho Art. O livro é considerado um clássico contemporâneo das histórias em quadrinhos. Foi publicado em duas partes, a primeira em 1986 e a segunda em 1991. No ano seguinte, o livro ganhou o prestigioso Prêmio Pulitzer de literatura.'
    },

    {
      image: 'assets/livros/hqs-mangas/ninguem-adulto.jpg',
      name: 'Ninguém vira adulto de verdade',
      old_price: '42,90',
      new_price: 'R$ 26,95',
      description: 'Um livro para quem não está nem um pouco empolgado com os desafios da vida adulta. As tirinhas certeiras de Sarah Andersen, que já contam com mais de 1 milhão de fãs no Facebook, registram lindos fins de semana passados de pernas pro ar na internet, a agonia de andar de mãos dadas com alguém de quem estamos a fim (e se os dedos ficarem suados?!), a longa espera diária para chegar em casa e vestir o pijama, e a eterna dúvida de quando, exatamente, a vida adulta começa. Em outras palavras, este livro é sobre as estranhezas e peculiaridades de ser um jovem adulto na vida moderna. A sinceridade com que Sarah Andersen lida com temas como autoestima, timidez, relacionamentos e a frequência com que lavamos o sutiã torna impossível não se identificar com esses quadrinhos hilários e carismáticos.'
    },

    {
      image: 'assets/livros/hqs-mangas/ogiva.jpg',
      name: 'Ogiva – Graphic Novel Volume Único',
      old_price: '79,90',
      new_price: 'R$ 54,33',
      description: 'O mundo não é mais nosso! Monstros que se alimentam de humanos chegaram misteriosamente e dominaram tudo. Uma década depois da invasão, as poucas pessoas que restaram lutam para sobreviver em uma terra devastada. Entre elas está Pilar, uma mulher que assumiu a responsabilidade de cuidar de Sara, uma garota órfã, e acompanhá-la em uma longa e perigosa jornada até seu único familiar vivo. Este é o primeiro quadrinho escrito por um dos três integrantes do canal e editora Pipoca & Nanquim! Ogiva marca a estreia de Bruno Zago como roteirista de quadrinhos, ao lado de Guilherme Petreca na arte, com seu traço único. '
    },

    {
      image: 'assets/livros/hqs-mangas/persepolis.jpg',
      name: 'Persépolis - Completo',
      old_price: '59,90',
      new_price: 'R$ 39,90',
      description: 'Marjane Satrapi tinha apenas dez anos quando se viu obrigada a usar o véu islâmico, numa sala de aula só de meninas. Nascida numa família moderna e politizada, em 1979 ela assistiu ao início da revolução que lançou o Irã nas trevas do regime xiita - apenas mais um capítulo nos muitos séculos de opressão do povo persa. Vinte e cinco anos depois, com os olhos da menina que foi e a consciência política à flor da pele da adulta em que se transformou, Marjane emocionou leitores de todo o mundo com essa autobiografia em quadrinhos, que só na França vendeu mais de 400 mil exemplares. Em Persépolis, o pop encontra o épico, o oriente toca o ocidente, o humor se infiltra no drama - e o Irã parece muito mais próximo do que poderíamos suspeitar.'
    },

    {
      image: 'assets/livros/hqs-mangas/traco-giz.jpg',
      name: 'Traço de Giz',
      old_price: '64,90',
      new_price: 'R$ 51,92',
      description: 'O quadrinho mais premiado da história da Espanha! Lançada originalmente em 1992, Traço de Giz é uma das realizações mais representativas de Miguelanxo Prado e um clássico das HQs europeias. Foi agraciada com o prêmio de Melhor Álbum Estrangeiro no Festival de Angoulême, Melhor Álbum no Salão de Quadrinhos de Barcelona e indicado aos prêmios Eisner, na categoria Melhor Pintor/Artista Multimídia, e Harvey, na categoria Melhor Quadrinho Estrangeiro.'
    },

    {
      image: 'assets/livros/hqs-mangas/v-vinganca.jpg',
      name: 'V de Vingança',
      old_price: '',
      new_price: 'R$ 114,90',
      description: 'Uma poderosa e aterradora história sobre a perda da liberdade e cidadania em um mundo totalitário bem possível, V DE VINGANÇA permanece como uma das maiores obras dos quadrinhos e o trabalho que revelou ao mundo seus criadores, Alan Moore e David Lloyd. Encenada em uma Inglaterra de um futuro imaginário que se entregou ao fascismo, esta arrebatadora história captura a natureza sufocante da vida em um estado policial autoritário e a força redentora do espírito humano que se rebela contra esta situação. Obra de surpreendente clareza e inteligência, V DE VINGANÇA traz inigualável profundidade de caracterizações e verossimilhança, em um audacioso conto de opressão e resistência.'
    },

    {
      image: 'assets/livros/hqs-mangas/attack-titan.jpg',
      name: 'Attack on Titan - Vol 1',
      old_price: '29,90',
      new_price: 'R$ 22,02',
      description: 'O mundo foi dominado por Titãs, criaturas gigantescas devoradoras de humanos! Os poucos sobreviventes viram sua civilização reduzida a um território protegido por muralhas, que foram capazes de manter a ameaça afastada por mais de cem anos. Mas tanto tempo de tranquilidade está prestes a ruir, com o ataque de um titã mais alto e poderoso do que a enorme muralha!'
    },

    {
      image: 'assets/livros/hqs-mangas/beastars.jpg',
      name: 'Beastars - Vol. 1 ',
      old_price: '29,90',
      new_price: 'R$ 21,50',
      description: 'Um mundo compartilhado por carnívoros e herbívoros. Um mundo cheio de esperanças, paixões e receios. Legosi, integrante do clube de teatro da escola Cherryton, é um lobo sensível e delicado. Neste drama antropomórfico ele e seus colegas do mundo animal vão compartilhar os altos e baixos da juventude!!'
    },

    {
      image: 'assets/livros/hqs-mangas/berserk.jpg',
      name: 'Berserk - Vol 01: Edição de Luxo',
      old_price: '',
      new_price: 'R$ 24,90',
      description: 'O misterioso Guts, o "Espadachim Negro", carrega em sua mão mecânica uma enorme espada, e em seu pescoço uma estranha marca que atrai forças demoníacas. Em sua busca por vingança contra um antigo inimigo, nem tudo sai a seu favor, e ele recebe ajuda de uma fantástica criatura.'
    },

    {
      image: 'assets/livros/hqs-mangas/demon-slayer.jpg',
      name: 'Demon Slayer - Kimetsu No Yaiba - Vol 8',
      old_price: '29,90',
      new_price: 'R$ 19,90',
      description: 'Usando a Dança do Deus do Fogo, Tanjirou lança a técnica "Céu Límpido e Azul" em Enmu, o oni dos sonhos, mas quais serão as consequências desta batalha?! Além disso, qual a verdadeira identidade daquele que aparece diante do grupo do garoto? E finalmente Kyoujurou Rengoku, o Hashira das Chamas, entra em ação. O que Tanjirou viu além das palavras ditas por alguém tão poderoso?!'
    },

    {
      image: 'assets/livros/hqs-mangas/monster.jpg',
      name: 'Monster Kanzenban - Vol 1',
      old_price: '79,90',
      new_price: 'R$ 75,90',
      description: 'Em 1986, na Alemanha Ocidental, o promissor neurocirurgião Kenzo Tenma salva um garoto, desobedecendo a ordens superiores. Ele só não imaginava que, ao fazê-lo, influenciaria a vida de inúmeras pessoas, incluindo a sua. Tenma então parte em busca do passado de seu paciente e descobre que Anna, a irmã gêmea do garoto, ainda está viva e corre grande perigo.'
    },

    {
      image: 'assets/livros/hqs-mangas/naruto.jpg',
      name: 'Naruto Gold - Vol 4',
      old_price: '29,90',
      new_price: 'R$ 20,33',
      description: 'Sasuke desmaia ao proteger Naruto...!! Nesse momento, o garoto, tomado por ira e tristeza, sofre uma transformação. O que vai ser de Haku, atingido pelo punho enfurecido de Naruto...?! E que rumo tomará o combate entre Zabuza e Kakashi?! O “arco do País das Ondas” chega a um fim turbulento!!'
    },

    {
      image: 'assets/livros/hqs-mangas/record-ragnarok.jpg',
      name: 'Record of Ragnarok - Vol 01 (Shuumatsu no Valkyrie)',
      old_price: '29,90',
      new_price: 'R$ 23,92',
      description: 'Na conferência milenar dos deuses, responsável por definir o futuro da raça humana, foi decidido extingui-la. Para evitar isso, treze supremos da humanidade vão lutar por sua sobrevivência contra os treze deuses supremos dos reinos dos céus!! Dá-se o início das batalhas valendo o destino da humanidade!!!'
    },

    {
      image: 'assets/livros/hqs-mangas/spyxfamily.jpg',
      name: 'Spy X Family - Vol. 6',
      old_price: '29,90',
      new_price: 'R$ 20,33',
      description: 'Twilight e Nightfall participam de um torneio clandestino em busca de pistas sobre um dossiê secreto da época da guerra!! Porém, as atitudes de Nightfall - que, devido a sua secreta admiração por Twilight, decide que é a pessoa mais apropriada para o papel de esposa - acabam colocando o casamento dos Forger em risco...?!'
    },

    {
      image: 'assets/livros/hqs-mangas/your-name.jpg',
      name: 'Your Name Edição Única',
      old_price: '59,90',
      new_price: 'R$ 39,92',
      description: 'O romance do anime com maior sucesso de bilheteria de todos os tempos. Mitsuha é uma estudante que vive em uma pequena cidade nas montanhas. Apesar de sua vida tranquila, ela sempre se sentiu atraída pelo cotidiano das grandes cidades. Um dia, Mitsuha tem um sonho estranho em que se torna um garoto. No sonho, ela acorda em um quarto que não é dela, tem amigos que nunca viu e passeia por Tóquio. E assim aproveita ao máximo seu dia na cidade grande, onde ela adoraria viver. Curiosamente, um estudante chamado Taki, que mora em Tóquio, também tem um sonho estranho: ele é uma garota que mora em uma cidadezinha nas montanhas. Qual é o segredo por trás desses sonhos tão vívidos? Assim começa a fascinante história de dois jovens cujos caminhos nunca deveriam ter se cruzado.'
    },

    {
      image: 'assets/livros/hqs-mangas/akira.jpg',
      name: 'Akira - Vol 4',
      old_price: '',
      new_price: 'R$ 76,90',
      description: 'A profecia de Miyako havia sido realizada. Uma tragédia envolvendo Takashi e Akira causa o despertar do Nº 28, destruindo toda Neo-Tokyo. Os sobreviventes observavam incrédulos as ruínas do que um dia foi a capital do Japão… 42 dias depois da catástrofe causada por Akira, na área oeste das ruínas de Neo-Tokyo, havia surgido uma potência chamada de Grande Império de Tokyo, no qual Akira era idolatrado como o “Grande Despertado”, e Tetsuo imperava com demonstrações públicas de seu poder. Qual o rumo que o Japão irá tomar?!'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

