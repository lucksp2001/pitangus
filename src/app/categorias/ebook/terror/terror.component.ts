import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.css']
})
export class TerrorComponent implements OnInit {

  //Ativando o menu
  menu: boolean = false;
  aberto(){
    this.menu = !this.menu;
  }

  //Adicionando os produtos com o ngFor
  terror: any = [
    {
      image: 'assets/ebook/terror/outsider.jpg',
      name: 'Outsider',
      old_price: '',
      new_price: 'R$ 39,90',
      description: 'Um crime indescritível. Uma investigação inexplicável. Uma das histórias mais perturbadoras de Stephen King dos últimos tempos. O corpo de um menino de onze anos é encontrado abandonado no parque de Flint City, brutalmente assassinado. Testemunhas e impressões digitais apontam o criminoso como uma das figuras mais conhecidas da cidade — Terry Maitland, treinador da Liga Infantil de beisebol, professor de inglês, casado e pai de duas filhas. O detetive Ralph Anderson não hesita em ordenar uma prisão rápida e bastante pública, fazendo com que em pouco tempo toda a cidade saiba que o Treinador T é o principal suspeito do crime. Maitland tem um álibi, mas Anderson e o promotor público logo têm amostras de DNA para corroborar a acusação. O caso parece resolvido. Mas conforme a investigação se desenrola, a história se transforma em uma montanha-russa, cheia de tensão e suspense. Terry Maitland parece ser uma boa pessoa, mas será que isso não passa de uma máscara? A aterrorizante resposta é o que faz desta uma das histórias mais perturbadoras de Stephen King.'
    },

    {
      image: 'assets/ebook/terror/instituto.jpg',
      name: 'O instituto',
      old_price: '',
      new_price: 'R$ 39,90',
      description: 'No meio da noite, em uma casa no subúrbio de Minneapolis, um grupo de invasores assassina os pais de Luke e sequestra silenciosamente o menino de doze anos. A operação leva menos de dois minutos. Quando Luke acorda, ele está no Instituto, em um quarto que parece muito o dele, exceto pelo fato de que não tem janela. E do lado de fora tem outras portas, e atrás delas, outras crianças com talentos especiais, que chegaram àquele lugar do mesmo jeito que Luke. O grupo formado por ele, Kalisha, Nick, George, Iris e o caçula, Avery Dixon, de apenas dez anos, está na Parte da Frente. Outros jovens, Luke descobre, foram levados para a Parte de Trás e nunca mais vistos. Nessa instituição sinistra, a equipe se dedica impiedosamente a extrair dessas crianças toda a força de seus poderes paranormais. Não existem escrúpulos. Conforme cada nova vítima vai desaparecendo para a Parte de Trás, Luke fica mais e mais desesperado para escapar e procurar ajuda. Mas até hoje ninguém nunca conseguiu fugir do Instituto. Tão aterrorizante quanto A incendiária e tão espetacular quando It: a Coisa, este novo livro de Stephen King mostra um mundo onde o bem nem sempre vence o mal.'
    },

    {
      image: 'assets/ebook/terror/it.jpg',
      name: 'It: A Coisa',
      old_price: '',
      new_price: 'R$ 39,90',
      description: 'Durante as férias escolares de 1958, em Derry, pacata cidadezinha do Maine, Bill, Richie, Stan, Mike, Eddie, Ben e Beverly aprenderam o real sentido da amizade, do amor, da confiança e... do medo. O mais profundo e tenebroso medo. Naquele verão, eles enfrentaram pela primeira vez a Coisa, um ser sobrenatural e maligno que deixou terríveis marcas de sangue em Derry. Quase trinta anos depois, os amigos voltam a se encontrar. Uma nova onda de terror tomou a pequena cidade. Mike Hanlon, o único que permanece em Derry, dá o sinal. Precisam unir forças novamente. A Coisa volta a atacar e eles devem cumprir a promessa selada com sangue que fizeram quando crianças. Só eles têm a chave do enigma. Só eles sabem o que se esconde nas entranhas de Derry. O tempo é curto, mas somente eles podem vencer a Coisa. Em It: A Coisa, clássico de Stephen King em nova edição, os amigos irão até o fim, mesmo que isso signifique ultrapassar os próprios limites.'
    },

    {
      image: 'assets/ebook/terror/colecionador.png',
      name: 'O Colecionador',
      old_price: '',
      new_price: 'R$ 42,90',
      description: 'O COLECIONADOR é a história de Frederick Clegg, um homem solitário, de origem humilde, menosprezado por uma sociedade esnobe, que encontra o grande amor de sua vida. Tudo o que ele deseja é passar um tempo a sós com ela, demonstrar seus nobres sentimentos e deixar claro que eles nasceram um para o outro.O COLECIONADOR também é a história de Miranda Gray, uma jovem estudante de artes sequestrada por um maníaco que acha que pode obrigá-la a se apaixonar por ele. Tudo o que ela deseja é escapar do cativeiro, e vai usar de toda sua inteligência para sobreviver ao inferno em que sua vida se transformou. O romance é narrado por dois personagens antagônicos: o sequestrador e sua vítima. Frederick e Miranda. Todos temos um pouco dos dois dentro de nós, concluímos ao final de suas páginas ― quem consegue se desgrudar delas?'
    },

    {
      image: 'assets/ebook/terror/amigo-imaginario.jpg',
      name: 'Amigo imaginário',
      old_price: 'R$ 49,90',
      new_price: 'R$ 44,91',
      description: 'Determinada a buscar uma vida melhor para ela e para o filho Christopher, ela abandona um relacionamento abusivo e escapa no meio da noite junto com seu garotinho. Eles acabam se sentindo atraídos pela agradável comunidade de Mill Grove, na Pensilvânia, uma cidadezinha distante de tudo e de todos, com apenas uma estrada de acesso. A princípio, Mill Grove parece o lugar perfeito para eles se estabelecerem. Porém, Christopher desaparece por seis longos dias sem deixar nenhum rastro. O desespero toma conta de Kate, e a polícia da cidade faz buscas incansáveis para descobrir o paradeiro do menino. Até que ele surge no meio da noite saindo de um bosque nos limites da cidade. Ileso, mas mudado. Christopher volta com uma voz na cabeça que apenas ele pode ouvir e com uma missão que apenas ele pode cumprir: construir uma casa na árvore no bosque da Mission Street antes do Natal; caso contrário, sua mãe e todos na cidade sofrerão as consequências.'
    },

    {
      image: 'assets/ebook/terror/love.jpg',
      name: 'Love: A história de Lisey',
      old_price: 'R$ 39,90',
      new_price: 'R$ 28,00',
      description: ' Dois anos após a morte do marido, Lisey Landon decide que é hora de colocar os papéis dele em ordem. Afinal, Scott Landon era um escritor de sucesso, e há diversas partes interessadas em qualquer trabalho inédito deixado por ele, embora ela esteja determinada a recusar qualquer oferta.Casados por vinte e cinco anos, os dois compartilhavam de uma intimidade profunda e muitas vezes assustadora. Logo no início do relacionamento, Lisey descobriu de onde Scott tirava suas ideias — um lugar capaz de curá-lo ou devorá-lo, chamado Boo`ya Moon. Quando é contatada por Zack McCool, um homem desagradável que diz que ela deve entregar os manuscritos ou sofrer as consequências, chega a vez de Lisey encarar os demônios que assombravam Scott — e que agora podem ajudar a protegê-la. Assim, o esforço de uma viúva para organizar o escritório de seu célebre marido se transforma em uma jornada quase fatal ao mundo sombrio que ele habitava.'
    },

    {
      image: 'assets/ebook/terror/tubarao.png',
      name: 'Tubarão',
      old_price: 'R$ 39,90',
      new_price: 'R$ 35,91',
      description: 'Devore ou seja devorado Você não está vendo, mas ele está lá no fundo, observando suas pernas se mexerem nas águas turvas. A mais perfeita máquina assassina da natureza, o predador que mantém seu posto no topo da cadeia alimentar desde a época dos dinossauros. Um torpedo de carne, ossos e dentes. Não há para onde fugir. Se você sempre devorou livros, chegou a hora da revanche. Tubarão é o clássico romance de Peter Benchley que deu origem ao primeiro blockbuster de Steven Spielberg. Mas, mesmo antes do sucesso na telona, o frenesi alimentar de Jaws se transformou num fenômeno de vendas. O best-seller internacional foi o principal responsável em elevar a fera de barbatanas dorsais ao status de perfeita encarnação do mal. Se já existiu um bicho-papão na natureza, ele está dentro d`água. A história se passa em Amity, um balneário ficcional situado em Long Island, Nova York. Quando o corpo de uma turista é encontrado na praia o chefe de polícia Martin Brody ordena o fechamento das praias da região.'
    },

    {
      image: 'assets/ebook/terror/exorcista.jpg',
      name: 'O exorcista',
      old_price: 'R$ 29,90',
      new_price: 'R$ 26,91',
      description: 'Quatro décadas após chocar o mundo inteiro, a obra-prima de terror de William Peter Blatty permanece uma metáfora moderna do combate entre a fé e o profano na forma de um dos romances mais macabros já escritos. Edição comemorativa aos 40 anos do livro em 2012 e 40 do filme em 2013. O livro apresenta um capítulo inédito."Uma história incrível... intensa, forte e completamente viciante, uma combinação hipnótica de lição de moral e história de investigação sobrenatural. Uma parábola de nossos tempos, uma conquista surpreendente."'
    },

    {
      image: 'assets/ebook/terror/iluminado.jpg',
      name: 'O iluminado: Coleção Biblioteca Stephen King',
      old_price: '',
      new_price: 'R$ 39,90',
      description: '"O lugar perfeito para recomeçar", é o que pensa Jack Torrance ao ser contratado como zelador para o inverno. Hora de deixar para trás o alcoolismo, os acessos de fúria, os repetidos fracassos. Isolado pela neve com a esposa e o filho, tudo o que Jack deseja é um pouco de paz para se dedicar à escrita. Mas, conforme o inverno se aprofunda, o local paradisíaco começa a parecer cada vez mais remoto... e mais sinistro. Forças malignas habitam o Overlook, e tentam se apoderar de Danny Torrance, um garotinho com grandes poderes sobrenaturais. Possuir o menino, no entanto, se mostra mais difícil do que esperado. Então os espíritos resolvem se aproveitar das fraquezas do pai...'
    },

    {
      image: 'assets/ebook/terror/lovecraft.jpg',
      name: 'Território Lovecraft (Lovecraft Country)',
      old_price: 'R$ 44,90',
      new_price: 'R$ 16,31',
      description: 'Um retrato caleidoscópico do racismo — o fantasma que até hoje assombra o mundo —, a obra de Matt Ruff une ficção histórica e pulp noir ao horror e à fantasia de Lovecraft para explorar os terrores da época de segregação racial nos Estados Unidos. Nos Estados Unidos segregados da década de 1950, Atticus é um rapaz negro, veterano da Guerra da Coreia, fã de H. P. Lovecraft e outros escritores de pulp fiction. Ao descobrir que o pai desapareceu, ele volta à cidade natal para, com o tio e a amiga, partir em uma missão de resgate. Na viagem até a mansão do herdeiro da propriedade que mantinha um dos ancestrais de Atticus escravizado, o grupo enfrentará sociedades secretas, rituais sanguinolentos e o preconceito de todos os dias.'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
