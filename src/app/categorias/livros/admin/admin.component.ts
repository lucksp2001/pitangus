import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  //Ativando o menu
  menu: boolean = false;
  aberto(){
    this.menu = !this.menu;
  }

  //Adicionando os produtos com o ngFor
  admin: any = [
    {
      image: 'assets/livros/admin/admin-humano.jpg',
      name: 'Administração de recursos humanos',
      old_price: 'R$ 188,90',
      new_price: 'R$ 122,89',
      description: 'A tradução da 16ª edição norte-americana de Administração de Recursos Humanos colocará à disposição de professores e estudantes o entendimento de como as organizações podem obter vantagem competitiva sustentável por meio das pessoas. O papel dos gerentes de RH não está mais limitado a funções relacionadas a serviços, como o recrutamento e a seleção de empregados. Atualmente, os gerentes de RH assumem um papel ativo no planejamento estratégico e na tomada de decisões em suas organizações. Nesta edição, há muitas informações novas que se destinam a promover a reflexão acerca da administração de recursos humanos no mundo empresarial contemporâneo e a ajudar o leitor a entender as questões de gestão de recursos humanos de forma mais ampla e eficaz. Fazem parte desta edição os quadros “Aplicação para um pequeno negócio”, nos quais são apresentadas sugestões de políticas e práticas de RH aplicadas a pequenas empresas.'
    },

    {
      image: 'assets/livros/admin/admini.jpg',
      name: 'Administração para não administradores: a gestão de negócios ao alcance de todos',
      old_price: 'R$ 118,00',
      new_price: 'R$ 39,90',
      description: 'Administrar uma organização, empresa ou empreendimento envolve mais do que sorte, boa vontade ou esforço pessoal, por isso é preciso saber utilizar todos os recursos e competências disponíveis e possíveis para aproveitar as oportunidades de mercado e alcançar o sucesso no negócio. Independente de qual seja o ramo de atividade ou o tipo de organização, saber administrar um negócio constituiu hoje uma necessidade comum à grande maioria das profissões. ? Você sabe o que é administrar? ? Por que administrar? ? Como administrar? Neste livro, você encontra as resposta para essas e outros perguntas e aprenderá a lidar com os aspectos mais importantes que envolvem a gestão de uma organização - seja ela pública ou privada, lucrativa ou não lucrativa, industrial ou não industrial -, e com as questões financeiras, de marketing, de produção/operações, de logística, até com a gestão da equipe de colaboradores.'
    },

    {
      image: 'assets/livros/admin/planeja.jpg',
      name: 'Planejamento estratégico para pequenas empresas',
      old_price: 'R$ 59,90',
      new_price: 'R$ 44,48',
      description: 'Este livro, de fácil leitura, interpretação e aplicação, tem o objetivo de auxiliar os dirigentes de pequenas empresas no desenvolvimento de habilidades para planejar racionalmente e melhorar a competitividade empresarial. Com uma abordagem essencialmente prática, este livro apresenta os procedimentos necessários para que os dirigentes de empresas de pequeno porte possam substituir a improvisação e a informalidade pelo planejamento estratégico, um importante instrumento de apoio às atividades empresariais. Cada uma das etapas do processo de planejamento estratégico é apresentada com clareza e objetividade, simplificando assim a sua operacionalização e transformação em resultados. O livro apresenta também um exemplo real de planejamento estratégico, o que certamente facilitará o desenvolvimento do processo pelos dirigentes das pequenas empresas.'
    },

    {
      image: 'assets/livros/admin/gestao.jpg',
      name: 'Gestão do Amanhã: Tudo o que você precisa saber sobre gestão, inovação e liderança para vencer na 4ª Revolução Industrial',
      old_price: 'R$ 64,90',
      new_price: 'R$ 27,50',
      description: 'Não existe outro momento mais vibrante na história recente da humanidade. Um ambiente repleto de desafios reserva oportunidades até então não mapeadas. O mundo está em aberto. A vida está em aberto. O que fez empresas como Netflix, Airbnb e Uber assumirem o lugar de companhias e modelos de negócios aparentemente consagrados e indestrutíveis? O que nos reserva o futuro? Embora muito se tenha falado sobre esses novos players do mercado, ainda há inúmeras dúvidas sobre como será o futuro do mundo corporativo, com seus diversos modelos de empresas e negócios, muitos dos quais ainda se consideram inabaláveis. O fato, porém, é que, diariamente, o mundo passa por mudanças em todas as áreas. Hoje coabitam, no mesmo momento, o novo – representado pelas novas tecnologias, inovações e rupturas – com o clássico, o tradicional, forjado ao longo de séculos de convivência e desenvolvimento humano. Essa nova Era é conhecida como a 4ª Revolução Industrial, a mais abrangente, profunda e ampla da história. É a única que harmoniza descobertas transformadoras integrando, pela primeira vez, o mundo físico, digital e biológico em um mesmo ambiente.'
    },

    {
      image: 'assets/livros/admin/public.jpg',
      name: 'Gestão Pública: Abordagem Integrada da Administração e do Direito Administrativo ',
      old_price: 'R$ 214,00',
      new_price: 'R$ 165,88',
      description: 'Esta obra equilibra conteúdos de Direito Administrativo e Administração, selecionados conforme um critério de utilidade continuada. Isso significa que esses conteúdos são ideias – definições, doutrinas, conceitos e ferramentas clássicas – de validade comprovada pela prática e de uso cotidiano, independentemente da conjuntura. Um livro, em resumo, para ser utilizado como texto no ambiente de aprendizagem, seja na graduação ou em escolas especializadas na capacitação de servidores públicos, e também como material de consulta profissional.'
    },

    {
      image: 'assets/livros/admin/habito.jpg',
      name: 'O poder do hábito',
      old_price: 'R$ 69,90',
      new_price: 'R$ 48,90',
      description: 'Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões dentro do cérebro dela mudaram de maneira fundamental. Publicitários da Procter & Gamble observaram vídeos de pessoas fazendo a cama. Tentavam desesperadamente descobrir como vender um novo produto chamado Febreze, que estava prestes a se tornar um dos maiores fracassos na história da empresa. De repente, um deles detecta um padrão quase imperceptível - e, com uma sutil mudança na campanha publicitária, Febreze começa a vender um bilhão de dólares por anos.'
    },

    {
      image: 'assets/livros/admin/oceano.jpg',
      name: 'A estratégia do oceano azul: Como criar novos mercados e tornar a concorrência irrelevante',
      old_price: 'R$ 59,90',
      new_price: 'R$ 37,87',
      description: 'Fenômeno global com mais de 3,6 milhões de exemplares vendidos, A estratégia do oceano azul foi publicado em 44 idiomas e se tornou uma obra de referência, adotada por organizações do mundo inteiro, ao desafiar tudo aquilo que se julgava saber sobre os requisitos para o sucesso estratégico. “Uma leitura essencial para todo estrategista ou empreendedor disposto a deixar as águas intensamente competitivas e infestadas de tubarões para mergulhar no oceano aberto, repleto de oportunidades.” – Business Insider.'
    },

    {
      image: 'assets/livros/admin/psico.jpg',
      name: 'A psicologia financeira: lições atemporais sobre fortuna, ganância e felicidade',
      old_price: 'R$ 49,90',
      new_price: 'R$ 26,30',
      description: 'A forma como lidamos com o dinheiro ― finanças pessoais, investimentos, decisões de negócios ― costuma ser explicada como um campo puramente matemático, no qual dados e fórmulas nos dizem o que fazer. A verdade, porém, é que grandes decisões monetárias não são tomadas diante de uma planilha, mas durante jantares com a família e reuniões com os colegas de trabalho. Além disso, cada decisão é um reflexo da história pessoal e das dificuldades enfrentadas pelo indivíduo que a tomou.Abordando a gestão financeira de maneira inédita, Morgan Housel apresenta casos de sucessos e fracassos que demonstram a importância do fator psicológico nas finanças, oferecendo aprendizados para administrar e fazer o dinheiro render em busca do maior objetivo de todos nós: a felicidade.'
    },

    {
      image: 'assets/livros/admin/resumo.png',
      name: 'Resumo de Direito Administrativo Descomplicado',
      old_price: 'R$ 159,00',
      new_price: 'R$ 108,12',
      description: 'Edição atualizada com a Lei nº 14.133/2021 – Nova Lei de Licitações e Contratos AdministrativosEm Resumo de Direito Administrativo Descomplicado, que tem como texto-base o reconhecido Direito Administrativo Descomplicado, são abordados os principais tópicos da disciplina, em uma linguagem clara e objetiva. De maneira resumida, os autores buscam apresentar as construções doutrinárias essenciais relativas a cada assunto estudado, analisar as normas constitucionais ou legais envolvidas e expor a jurisprudência pertinente, sobretudo a do Supremo Tribunal Federal, acompanhada dos comentários necessários.O livro proporcionará ao leitor uma visão rápida e abrangente dos diferentes temas de Direito Administrativo, atendendo tanto aos que buscam obter noções básicas ou gerais sobre o tema,quanto aos que dominam a disciplina e desejam um material útil para revisão e fixação dos seus mais relevantes pontos. Para um estudo extensivo, leia Direito Administrativo Descomplicado.?'
    },

    {
      image: 'assets/livros/admin/teoria.jpg',
      name: 'Introdução à Teoria Geral da Administração - Uma Visão Abrangente da Moderna Administração das Organizações',
      old_price: 'R$ 203,00',
      new_price: 'R$ 138,04',
      description: 'A 10ª edição do livro apresenta, de maneira didática, as diversas abordagens da área da Administração (clássica, humanística, estruturalista, neoclássica, comportamental, sistêmica e contingencial), bem como suas novas características e seu perfil atual. O livro dá acesso à Sala de Aula Virtual do professor Chiavenato, uma ferramenta inovadora que reúne diversos objetos educacionais: vídeos do autor, textos para reflexão e casos para discussão, além de quizzes, mapas mentais e um glossário interativo.'
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
