import PageTitle from "../components/PageTitle";

export default function About() {
  return (
    <section className="px-5 sm:px-0">
      <PageTitle subtitle="/about" title="About" />
      <div className="prose" style={{ maxWidth: "36rem" }}>
        <p>
          Sou Isaac Nathan — a maioria só me chama de Nathan. Estudante de
          Engenharia da Computação na Cruzeiro do Sul, vindo da Química (UFOP
          Industrial → UFSJ Engenharia Química → finalmente encontrei meu lugar
          na Computação). Essa virada levou anos de indecisão aos 17-18, passando
          por múltiplas universidades até encontrar o que clicou. A versão curta:
          encontrei Python em 2022, caí de cabeça, e nunca olhei pra trás.
        </p>
        <p>
          De dia construo sistemas de IA com impacto em produção — pipelines de
          agentes, integrações LLM, aplicações full-stack. Técnicas de RAG,
          jailbreaks, prompt engineering, agentes com skills — é isso que me
          consome. Atualmente trabalhando no SRF System e ForestAI, dois projetos
          muito ativos e renomeados. De noite sou entusiasta Linux rodando CachyOS
          com um rice no Hyprland que nunca fica pronto. Meu setup é uma extensão
          de como penso: minimal, keyboard-driven, customizado pro meu cérebro.
        </p>
        <h2>Além do terminal</h2>
        <p>
Sou do espectro do autismo (TEA + TDAH, diagnosticado tarde). Isso
significa que eu hiperfoco nas coisas que me agarram — e é assim que
acumulo 900+ horas em Dark Souls, 250 em Elden Ring, ou leio sobre
como a CIA usou o MoMA pra exportar Expressionismo Abstrato como
propaganda da Guerra Fria pro Brasil às 2 da manhã. Sou um mural de
vidros quebrados/estilhaçados — diferentes cores e formas coladas
juntas, e no final das contas, isso é o cérebro TEA + TDAH resumido.
        </p>
        <p>
          Sou cronicamente online. Navego no Awwwards procurando sites bonitos.
          Leio artigos que vão de TDAH, autismo, política e tecnologia. Faço
          piada em inglês e português. Minha biblioteca musical tem centenas de
          músicas em todos os gêneros — rock do HD do meu pai, phonk, jungle,
          country, pop descoberto via Shazam em loja de roupa. Não tem nada que
          eu não tenha ouvido e não tenha um exemplo.
        </p>
        <h2>O que me formou</h2>
        <p>
          Minha filosofia de vida vem de Life is Strange. Minha drive pra lutar
          por um mundo melhor vem de Dark Souls — mesmo contra forças
          imparáveis, podemos ser os escolhidos, não por alguém acima de nós, mas
          no sentido de protagonismo da própria vida. Far Cry 5 me fez sentir um
          cowboy com uma puma companheira e um arco composto. Alter Ego mudou
          minha mentalidade e me apresentou Kafka, Dostoevsky e Dazai. Todos os
          jogos carregam lições e ideias que se fixaram permanentemente em mim.
        </p>
        <p>
          Só jogo no modo difícil — é isso ou nada. Sou fã obcecado de Como
          Treinar Seu Dragão (filmes, séries, todos os livros e edições
          especiais) e Avatar (vi os dois primeiros filmes 9 vezes combinadas,
          li partes dos quadrinhos). Li mais de cem livros — do Guia do
          Mochileiro das Galáxias à análise de Serge Guilbaut sobre como Nova
          York roubou a ideia de arte moderna.
        </p>
        <h2>Este site</h2>
        <p>
          Este é meu canto pessoal da internet. Não é portfólio, não é CV — é
          só um lugar pras coisas que me importam fora do trabalho. Minha
          estante, os jogos que amo, o que tô ouvindo, como é minha mesa. O tipo
          de coisa que costumava viver em páginas do Neocities antes de tudo virar
          marca.
        </p>
        <p>
          Construído com React, GSAP e Tailwind. Inspirado no layout split-panel
          do Kyrylo Orlov. Escuro porque tela clara dói meus olhos de noite.
        </p>
      </div>
    </section>
  );
}
