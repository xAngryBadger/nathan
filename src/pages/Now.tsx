import PageTitle from "../components/PageTitle";

export default function Now() {
  return (
    <section className="px-5 sm:px-0">
      <PageTitle subtitle="/now" title="Now" />
      <p className="prose" style={{ maxWidth: "36rem" }}>
        O que estou fazendo agora. Última atualização: Maio 2026.
      </p>
      <div className="prose" style={{ maxWidth: "36rem" }}>
<h2>Foco</h2>
<ul>
  <li>HarpIA — motor de automação criativa com 7+ modelos de IA (GPT-4.1, DALL-E 3, Flux, Sora, Veo)</li>
  <li>SRF System — planejamento operacional para restauração florestal em larga escala</li>
  <li>ForestAI — detecção e classificação de espécies florestais com Deep Learning (projeto de pesquisa)</li>
  <li>Estudando técnicas de RAG, jailbreaks e prompt optimization para agentes com skills</li>
  <li>Engenharia da Computação na Cruzeiro do Sul</li>
</ul>
        <h2>Descobertas &amp; Obsessões</h2>
        <ul>
          <li>TEA + TDAH — diagnosticado tarde, finalmente entendendo porque meu cérebro funciona do jeito que funciona</li>
          <li>RAG pipelines e arquiteturas de agentes — não consigo parar de ler sobre</li>
          <li>Awwwards — cronicamente online procurando inspiração de design</li>
          <li>Artigos sobre autismo, TDAH, política, tecnologia — o espectro completo</li>
        </ul>
        <h2>Jogando</h2>
        <ul>
          <li>Ainda na trilogia Dark Souls (900h+ e contando)</li>
          <li>Elden Ring — 250h fundo</li>
        </ul>
        <h2>Ouvindo</h2>
        <ul>
          <li>SOAD em repeat — veio do HD do meu pai, agora é meu</li>
          <li>Crystal Castles quando preciso de caos digital</li>
          <li>Seekae — Tais, Stars Below, Test &amp; Recognise no loop</li>
          <li>OneRepublic — Counting Stars nunca envelhece</li>
        </ul>
        <h2>Otherwise</h2>
        <p>
          Morando em Minas Gerais, Brasil. Cronicamente online. Lendo sobre
          TDAH, autismo, política e tecnologia. Navegando no Awwwards por
          inspiração. Este site é meu canto da internet — não é currículo, sou
          eu.
        </p>
      </div>
    </section>
  );
}
