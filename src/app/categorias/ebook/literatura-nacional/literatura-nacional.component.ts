import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-literatura-nacional',
  templateUrl: './literatura-nacional.component.html',
  styleUrls: ['./literatura-nacional.component.css']
})
export class LiteraturaNacionalComponent implements OnInit {

  //Ativando o menu
  menu: boolean = false;
  aberto(){
    this.menu = !this.menu;
  }

  //Adicionando os produtos com o ngFor
  nacional: any = [
    {
      image: 'assets/ebook/nacional/ideias.jpg',
      name: 'Ideias para adiar o fim do mundo',
      old_price: 'R$ 16,90',
      new_price: 'R$ 16,72',
      description: 'Ailton Krenak nasceu na região do vale do rio Doce, um lugar cuja ecologia se encontra profundamente afetada pela atividade de extração mineira. Neste livro, o líder indígena critica a ideia de humanidade como algo separado da natureza, uma "humanidade que não reconhece que aquele rio que está em coma é também o nosso avô".'
    },

    {
      image: 'assets/ebook/nacional/maximas.jpg',
      name: 'Máximas, pensamentos e ditos agudos',
      old_price: 'R$ 16,90',
      new_price: 'R$ 8,00',
      description: 'Composto por trechos selecionados de correspondências, crônicas e textos críticos escritos por Machado de Assis entre 1858 e as vésperas de sua morte, em 1908, este volume traz à luz a posição do escritor diante das principais questões de seu tempo.'
    },

    {
      image: 'assets/ebook/nacional/vida.png',
      name: 'A vida como ela é... em 100 inéditos',
      old_price: 'R$ 16,90',
      new_price: 'R$ 14,00',
      description: '"A vida como ela é..." dispensa maiores apresentações. Já nos anos 1950, quando estrearam, essas histórias de ciúme, obsessão, dilemas morais, inveja, desejos desgovernados, adultério e morte atraíram os leitores, tornando-se um grande sucesso. De lá para cá, a popularidade dos contos de Nelson Rodrigues só fez aumentar com as inúmeras adaptações que sofreram, passando das páginas do jornal a programa de rádio, fotonovela, filme, peça de teatro e até série de televisão.Tamanho era o sucesso da coluna que, em 1961, o próprio autor fez uma seleção de cem contos para publicar em livro, incluindo ali narrativas que ficaram célebres, como "A dama do lotação" e "A coroa de orquídeas", entre outras.Agora, nesta nova reunião, comemorativa do seu centenário, tentamos escolher textos tão expressivos e representativos de "A vida como ela é..." quanto os da primeira coletânea. E todos inéditos em livro.'
    },

    {
      image: 'assets/ebook/nacional/cartas.jpg',
      name: 'Cartas brasileiras: Correspondências históricas, políticas, célebres, hilárias e inesquecíveis que marcaram o país',
      old_price: 'R$ 107,90',
      new_price: 'R$ 44,90',
      description: 'Uma seleção espirituosa e diversificada de oitenta cartas brasileiras inesquecíveis, fartamente ilustrada por fac-símiles das correspondências originais e dezenas de fotos.Intrigas, confissões, ameaças, estratégias, declarações de amor. Descortina-se um universo inimaginável quando se lê a correspondência dos personagens marcantes da história do Brasil. Dando um novo olhar aos fatos já conhecidos e trazendo à luz missivas inéditas ou pouco difundidas, o jornalista Sérgio Rodrigues apresenta uma saborosa coletânea de oitenta cartas dignas de nota, recebidas ou enviadas por escritores, artistas e políticos — de Elis Regina a Olga Benário, de Chico Buarque a Santos Dumont, de Renato Russo a d. Pedro I —, entre outros personagens.'
    },
    
    {
      image: 'assets/ebook/nacional/palavras.jpg',
      name: 'AS PALAVRAS E O TEMPO',
      old_price: 'R$ 49,90',
      new_price: 'R$ 47,40',
      description: 'Clarice Lispector é uma das personalidades mais citadas na mídia e nas redes sociais, pelas características e força das suas frases. Embora escritas dentro do contexto de cada romance, conto, crônica ou carta, as citações, mesmo isoladamente, têm vida própria, musicalidade e sentido poético. Reunindo mais de 4.500 frases de Clarice Lispector, As palavras e o tempo oferece aos leitores vislumbres de todos os seus livros, servindo como um convite à descoberta da sua literatura. Nesta edição acrescentamos 180 novas citações destacadas e atualizadas com as últimas publicações de sua obra.'
    },

    {
      image: 'assets/ebook/nacional/falencia.jpg',
      name: 'A Falência: Coleção Biblioteca Luso-Brasileira: Volume 1 ',
      old_price: 'R$ 16,90',
      new_price: 'R$ 16,11',
      description: 'Em um cenário de romances amorosos, Júlia Lopes de Almeida narra com crueza o enredo de uma mulher adúltera em busca de realização, entremeado à derrocada de um exportador de café. Camila, de origem pobre e casada com Francisco Theodoro em virtude da comodidade que a riqueza do marido lhe traz, descobre a paixão tardiamente nos braços do doutor Gervásio. Francisco de nada desconfia, mas terá seu ideal de família perfeita abalado após um mau negócio que o leva à falência. A Falência, segundo biografia ainda não publicada pela filha da autora, levou mais de quinze anos para ser produzido, tornando-se a obra-prima de Júlia Lopes de Almeida, uma das maiores escritoras da literatura brasileira.'
    },

    {
      image: 'assets/ebook/nacional/mario.jpg',
      name: 'Box Obras de Mário de Andrade',
      old_price: 'R$ 69,90',
      new_price: 'R$ 13,47',
      description: 'Mário de Andrade foi poeta, escritor, crítico literário, musicólogo, folclorista, cronista, ensaísta e um dos pioneiros da poesia brasileira. Essas facetas ficam evidentes nos quatro livros reunidos aqui: "Pauliceia desvairada", "Amar, verbo intransitivo", "Macunaíma" e "Contos novos". Conheça as inovações, o surreal, as lendas e o essencial de Mário de Andrade, em suas diferentes verves, que se misturam e revelam os mais diversos traços de nossa formação cultural, sendo até hoje, anos depois, lido tanto pela sua qualidade como por sua irreverência e pioneirismo.'
    },

    {
      image: 'assets/ebook/nacional/dom.jpg',
      name: 'Dom Casmurro',
      old_price: 'R$ 29,90',
      new_price: 'R$ 2,90',
      description: 'Com Dom Casmurro, Machado de Assis encerra a chamada “trilogia realista”, depois de Memórias póstumas de Brás Cubas e Quincas Borba. Neste grande clássico da literatura brasileira, Bento Santiago, o Dom Casmurro, decide escrever suas memórias desde a mocidade. A narrativa se dá durante o Segundo Império, no Rio de Janeiro. Ao longo do livro, Bentinho relata suas suspeitas a respeito da esposa, Capitu. Mas, aqui, o narrador não está fora do enredo, não é um observador externo e imparcial, ele é um dos personagens da trama, o que dá margem a conjecturas acerca da objetividade de seu relato. Teriam suas suspeitas uma base real ou aquilo que Bentinho supostamente vê seria produto de uma imaginação ciumenta? Dom Casmurro é um romance magistral de Machado de Assis que nunca cessa de instigar os leitores.'
    },

    {
      image: 'assets/ebook/nacional/sabias.jpg',
      name: 'Os sabiás da crônica',
      old_price: 'R$ 52,90',
      new_price: 'R$ 47,61',
      description: 'Esta antologia é um convite à leitura de textos que resistiram à passagem do tempo. Além de reunir seis mestres da crônica, do lírico Rubem Braga ao rebelde José Carlos Oliveira, projeta um olhar inteiramente novo sobre a cultura brasileira. As noventa crônicas que compõem o volume formam um riquíssimo painel dos anos 1930 até a virada do século XXI: é o retrato de toda uma época.'
    },

    {
      image: 'assets/ebook/nacional/prosa.jpg',
      name: 'Da prosa',
      old_price: '',
      new_price: 'R$ 39,90',
      description: 'Em Da prosa, este e todos os outros títulos da lavra ficcional da autora de Rútilo nada aparecem reunidos pela primeira vez. A cada página, o leitor pode notar como a escrita de Hilda, que nos anos 1990 daria "adeus à literatura séria" para se dedicar a sua trilogia erótica, se mantém profundamente autêntica, transgressora e, sobretudo, atual. Em caixa com dois volumes, esta edição inclui textos inéditos de Daniel Galera e Carola Saavedra — dois aclamados escritores da nova geração, leitores e admiradores de Hilda — e de Alcir Pécora, que organizou a obra da escritora nos anos 2000 para a editora Globo. Da prosa reúne os livros Fluxo-floema (1970), Kadosh (1973), Pequenos discursos. E um grande (1977), Tu não te moves de ti (1980), A obscena senhora D (1982), Com meus olhos de cão (1986), O caderno rosa de Lori Lamby (1990), Contos d-escárnio Textos grotescos (1990), Cartas de um sedutor (1991), Rútilo nada (1993) e Estar sendo. Ter sido (1997).'
    },
    

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
