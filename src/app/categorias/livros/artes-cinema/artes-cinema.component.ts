import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artes-cinema',
  templateUrl: './artes-cinema.component.html',
  styleUrls: ['./artes-cinema.component.css']
})
export class ArtesCinemaComponent implements OnInit {

  //Ativando o menu
  menu: boolean = false;
  aberto(){
    this.menu = !this.menu;
  }

  //Adicionando os produtos com o ngFor
  arte: any = [
    {
      image: 'assets/livros/artes-cinema/a-cor.jpg',
      name: 'A cor no processo criativo : Um estudo sobre a Bauhaus e a teoria de Goethe',
      old_price: 'R$ 137,00',
      new_price: 'R$ 89,66',
      description: 'Como ainda são raros no Brasil os estudos sobre as manifestações artística e expressiva da cor, bem como sua importância nos diversos elementos de comunicação e design, a autora inova ao mostrar, a partir do legado deixado pela Bauhaus, como a cor pode ser inserida no processo criativo e quais suas implicações na transmissão de sentimentos, sensações e mensagens. Para isso ela avalia a metodologia didática de quatro de seus grandes mestres, além da marcante influência da obra de Goethe sobre a escola.'
    },

    {
      image: 'assets/livros/artes-cinema/arte-360.jpg',
      name: '360° Arte - Vol. Único: Conjunto ',
      old_price: 'R$ 255,00',
      new_price: 'R$ 198,98',
      description: 'A obra 360° Arte é composta de livro-texto em volume único com conteúdo integrado para os três anos do Ensino Médio. O material também conta com um Caderno de infográficos, que aproximam os conteúdos de cada disciplina às situações cotidianas. Os infográficos contribuem para o desenvolvimento das habilidades de leitura e interpretação de representações gráficas, fotos e esquemas.'
    },

    {
      image: 'assets/livros/artes-cinema/arte-cinema.jpg',
      name: 'A Arte do Cinema: uma Introdução',
      old_price: 'R$ 275,00',
      new_price: 'R$ 195,00',
      description: 'A arte do cinema marcou de modo duradouro os estudos de cinema. Suas contínuas reedições e traduções fizeram essa influência perdurar. A obra impressiona pela extensão da formação cinéfila de seus autores, sustentando a exposição a partir de ampla diversidade de exemplos ilustrados. O caráter inovador do livro está em basear seus desenvolvimentos na utilização sistemática de fotogramas, parte inerente da narrativa fílmica, e não mais de fotos de cena (stills). David Bordwell e Kristin Thompson concentram-se na importância fundamental do plano para a análise cinematográfica.'
    },

    {
      image: 'assets/livros/artes-cinema/arte-moderna.jpg',
      name: 'Arte moderna',
      old_price: '242,90',
      new_price: 'R$ 178,76',
      description: '"Giulio Carlo Argan foi o último representante de uma grande tradição crítica que corresponde historicamente aos movimentos modernos da arte. De fato, o crítico e ensaísta italiano provém de uma escola (a de Adolfo e Lionello Venturi) que procura o sentido da arte na sua história, mais do que em faculdades inatas ou em princípios absolutos. Foi Argan, aliás, que levou essa orientação até as últimas conseqüências: se a arte é um fenômeno histórico, não há garantia de que ela seja eterna. O desaparecimento do artesanato, de que a arte era guia e modelo, e o surgimento da produção industrial, que se baseia sobre outros princípios, pode muito bem determinar o fim da arte como atividade culturalmente relevante. Essa tese é o pano de fundo desta Arte moderna."Lorenzo Mammì.'
    },

    {
      image: 'assets/livros/artes-cinema/bacurau.jpg',
      name: 'Três roteiros: O som ao redor, Aquarius, Bacurau',
      old_price: '69,90',
      new_price: 'R$ 47,53',
      description: 'Nem sempre é possível ter acesso à construção de uma obra de arte. Poucas formas artísticas se prestam tão bem a essa análise retrospectiva quanto um filme e seu roteiro, principalmente se roteirista e diretor forem a mesma pessoa. Ao ler os roteiros finalizados de Kleber Mendonça Filho é possível identificar as decisões tomadas por ele como diretor, com as filmagens já em movimento, e compreender de forma muito mais elaborada o processo criativo de um dos principais cineastas da atualidade. '
    },

    {
      image: 'assets/livros/artes-cinema/beleza.jpg',
      name: 'O abuso da beleza: A estética e o conceito de arte',
      old_price: '49,90',
      new_price: 'R$ 29,78',
      description: 'Danto apresenta a evolução do conceito de beleza durante o último século. Mostra que ela foi removida da definição de arte: antes era quase unânime que o propósito final de uma obra de arte era ser bela; no século XX, essa ideia foi refutada e a beleza destronada, chegando, em alguns casos, a ser considerada um crime estético. Para Danto, a beleza não deve ser a finalidade da obra de arte, e muito menos ser evitada. Ele expande esta reflexão sobre a importância da beleza comentando as ideias de artistas e críticos como Rimbaud, Fry, Matisse, os Dadaístas, Duchamp e Greenberg, além dos filósofos Hume, Kant e Hegel.'
    },

    {
      image: 'assets/livros/artes-cinema/cinema-historia.jpg',
      name: 'A História do Cinema para quem tem pressa ',
      old_price: '39,90',
      new_price: 'R$ 25,89',
      description: 'A palavra pressa é o particípio passado, em latim, do verbo premere (apertar). Assim, pode-se dizer que A História do Cinema para Quem Tem Pressa se propõe a contar uma das maiores sagas do século 20 (e deste início do 21) para quem precisa apertar o passo ou está apertado de tempo. E quem não está?Em 200 páginas, contextualizado com cada momento histórico, e escrito em linguagem clara e acessível, Sabadin traça um panorama do cinema – linguagem que há mais de um século revoluciona nossa maneira de ver a vida –, desde a época em que seus inventores nem sabiam direito o que fazer com ele, até os dias de hoje, quando movimenta bilhões de dólares pelos cinco continentes.'
    },

    {
      image: 'assets/livros/artes-cinema/dali.jpg',
      name: 'Dalí - A obra pintada',
      old_price: 'R$ 400,00',
      new_price: 'R$ 288,99',
      description: 'Com seis anos, Salvador Dalí (1904-1989) queria ser cozinheiro. Com sete anos, eu queria ser Napoleão. "A partir desse momento", disse ele mais tarde, "minha ambição não parou de crescer e, com ela, minha megalomania. Agora eu só quero ser Salvador Dalí, não tenho maior desejo. ” No decorrer de sua vida, Dalí se tornou Dalí, ou seja, um dos artistas e excêntricos mais importantes do século XX.Este volume imponente é o estudo mais completo da obra pictórica de Dalí já publicada. Após anos de pesquisa, Robert Descharnes e Gilles Néret localizaram as pinturas do professor que permaneceram inacessíveis por um longo tempo; tantos, de fato, que quase metade dos que ilustram o livro são pouco conhecidos.'
    },

    {
      image: 'assets/livros/artes-cinema/discurso.jpg',
      name: 'Da criação ao roteiro: Teoria e prática',
      old_price: 'R$ 141,90',
      new_price: 'R$ 93,90',
      description: 'Depois de quarenta anos de uma vida dedicada ao ato de escrever para o cinema, o teatro e a televisão no Brasil e na Europa, Doc Comparato concebe uma nova visão do trabalho do roteirista. Nos apresenta de maneira única um novo recorte e panorama para quem quer se dedicar aos meios de comunicação no terceiro milênio. Nascem novas definições, atribuições e concepções, que abrangem exemplos e exercícios inovadores, aplicados em roteiros inéditos. A obra tem a missão de trazer o que existe de mais moderno na criação para streaming, realidade virtual, webséries, game e inteligência artificial, e aborda ainda contratos, adaptações, festivais, contatos profissionais, universitários e muito mais. De forma magistral, o atualíssimo Da criação ao roteiro mantém o equilíbrio entre o texto teórico e o pragmatismo do manual que ensina como fazer hoje e no futuro.'
    },

    {
      image: 'assets/livros/artes-cinema/doc.jpg',
      name: 'Da criação ao roteiro: Teoria e prática',
      old_price: '',
      new_price: 'R$ 114,90',
      description: 'Uma poderosa e aterradora história sobre a perda da liberdade e cidadania em um mundo totalitário bem possível, V DE VINGANÇA permanece como uma das maiores obras dos quadrinhos e o trabalho que revelou ao mundo seus criadores, Alan Moore e David Lloyd. Encenada em uma Inglaterra de um futuro imaginário que se entregou ao fascismo, esta arrebatadora história captura a natureza sufocante da vida em um estado policial autoritário e a força redentora do espírito humano que se rebela contra esta situação. Obra de surpreendente clareza e inteligência, V DE VINGANÇA traz inigualável profundidade de caracterizações e verossimilhança, em um audacioso conto de opressão e resistência.'
    },

    {
      image: 'assets/livros/artes-cinema/fernanda.jpg',
      name: 'Fernanda Montenegro: itinerário fotobiográfico',
      old_price: '160,00',
      new_price: 'R$ 122,84',
      description: 'Organizada pela própria atriz, a obra reúne imagens que contam a trajetória pessoal e profissional de Fernanda Montenegro, 88 anos, que se mistura à memória da dramaturgia nacional. Além de uma seleção de fotos inéditas de seu acervo pessoal, e outras que registram cenas memoráveis ao lado de grandes nomes como Paulo Autran, Sérgio Britto e Nathalia Timberg – muitas acompanhadas de legendas com as impressões de Fernanda –, o leitor terá contato com documentos emblemáticos, artigos e depoimentos de escritores, diretores, críticos de arte, atores e amigos. Há ainda seções especiais dedicadas às diversas premiações recebidas ao longo da carreira e uma comovente homenagem a Fernando Torres, seu companheiro de trabalho e vida.'
    },

    {
      image: 'assets/livros/artes-cinema/isso-arte.jpg',
      name: 'Isso é arte?: 150 anos de arte moderna do impressionismo até hoje',
      old_price: '92,90',
      new_price: 'R$ 63,17',
      description: 'Original, irreverente, acessível e tecnicamente impecável, Isso é arte? conduz o leitor por uma excitante viagem através de mais de 150 anos de arte moderna, do impressionismo até os dias de hoje. E não poderia haver guia melhor que o editor de artes da BBC Will Gompertz. Com estilo envolvente - que mescla profundo conhecimento do assunto, ótimo texto e um delicioso senso de humor - ele conta a história dos movimentos, dos artistas e das maravilhosas obras de arte que não apenas mudaram a arte para sempre, mas ajudaram a criar e definir o mundo moderno. Dos nenúfares de Monet aos girassóis de Van Gogh, das latas de sopa de Andy Warhol ao tubarão em conserva de Damien Hirst, fique sabendo as histórias por trás das obras-primas, conheça os artistas e descubra do que realmente se trata a arte moderna.'
    },

    {
      image: 'assets/livros/artes-cinema/odisseia.jpg',
      name: '2001: uma odisseia no espaço: Stanley Kubrick, Arthur C. Clarke, e a criação de uma obra-prima',
      old_price: 'R$ 98,90',
      new_price: 'R$ 45,99',
      description: 'inquenta anos após seu lançamento, 2001: Uma odisseia no espaço segue desafiando e hipnotizando os espectadores. Neste trabalho de fôlego, Michael Benson esmiúça os bastidores das filmagens e, baseado em entrevistas com Arthur C. Clarke e Christiane Kubrick, investiga seus mistérios e significados. Em 1964, Stanley Kubrick e Arthur C. Clarke se juntaram para, nas palavras do diretor, “fazer o primeiro filme de ficção científica que não seja considerado lixo”. Quatro anos depois, 2001: Uma odisseia no espaço seria lançado. Se hoje o filme da lendária dupla é reconhecido como uma obra-prima, a crítica da época desmereceu o lançamento como um tedioso exercício de estilo.'
    },

    {
      image: 'assets/livros/artes-cinema/psico-cores.jpg',
      name: 'A psicologia das cores: Como as cores afetam a emoção e a razão',
      old_price: 'R$ 169,90',
      new_price: 'R$ 123,90',
      description: 'Este livro aborda a relação das cores com os nossos sentimentos e mostra como as duas coisas não se combinam por acaso, já que as relações entre ambas não são apenas questões de gosto, mas sim experiências universais profundamente enraizadas na nossa linguagem e no nosso pensamento. Organizada em treze capítulos, correspondentes a treze cores diferentes, a obra oferece um rico painel de informações sobre as cores: de ditados e saberes populares até sua utilização na área de design de produto, os diversos testes baseados em cores, as terapias cromáticas, a manipulação de pessoas, os nomes e sobrenomes relacionados com as cores etc. A diversidade desta abordagem faz do trabalho de Eva Heller uma ferramenta indispensável para todos os que trabalham com cores: artistas, terapeutas, designers gráficos e industriais, decoradores, arquitetos, designers de moda, publicitários, entre outros.'
    },

    {
      image: 'assets/livros/artes-cinema/psiqui.jpg',
      name: 'Box Coleção cinema e psicanálise',
      old_price: 'R$ 160,00',
      new_price: 'R$ 79,90',
      description: 'Box exclusivo reunindo os 5 volumes da coleção Cinema e Psicanálise, que traz uma analogia histórica sobre cada um dos temas abordados, despertando no leitor a atenção para analisar os filmes além de sua narrativa primária e encontrar neles significados que façam sentido para si.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
