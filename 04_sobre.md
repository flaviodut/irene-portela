---
layout: page
title: Sobre
permalink: /sobre/
body-class: sobre
---

<span id="loading"></span>

<p>Homenagem à cantora, compositora e violonista, <strong>Irene Portela</strong>, maranhense de Codó, nascida em 29/06/1945 e falecida em 29/06/1999.</p>

<figure>
  <img src="{{ '/assets/images/irene-portela-camarim.jpg' | relative_url }}" alt="Irene Portela no camarim">
  <figcaption>Irene Portela no camarim</figcaption>
</figure>

<h2>O projeto</h2>
<p>A ideia desse projeto nasceu da vontade que eu tinha de homenagear a mãe, Irene, e presentear a filha, Iris Li. O início da pesquisa se deu em julho de 2018 e foi concluída em janeiro de 2019, com consideráveis hiatos ao longo do caminho. Nesta primeira etapa, foram pesquisados os acervos online da <a href="//memoria.bn.br/" title="Hemeroteca da Biblioteca Nacional" target="_blank" rel="noreferrer">Hemeroteca da Biblioteca Nacional</a>, o <a href="//acervo.folha.com.br/" title="Acervo da Folha de S. Paulo" target="_blank" rel="noreferrer">Acervo da Folha de S. Paulo</a> e o <a href="//www.funarte.gov.br/brasilmemoriadasartes/acervo/pixinguinha" title="Projeto Pixinguinha no Memoria das Artes da Funarte" target="_blank" rel="noreferrer">Acervo da Funarte - Projeto Pixinguinha</a> (<a href="//www.funarte.gov.br/brasilmemoriadasartes/arquivos/2011/02/apost-pixing-79.pdf" title="Download da apostila Memoria das Artes - Projeto Pixinguinha 79" target="_blank" rel="noreferrer">baixar PDF</a>). O resultado da pesquisa apresenta um panorâma geral sobre a evolução da carreira de Irene, clarificando e organizando informações que com o passar do tempo vão se perdendo no espaço-tempo.</p>
<p>Somando ao conteúdo de recortes de jornais, faz parte do projeto reunir discos que conta com a participação da Irene; seja uma coletânea, a participação de Irene em uma música no disco de um outro artista ou a interpretação de outros artistas (muitas vezes amigos) de composições da Irene.</p>
<table id="catalogo_reunidos" class="stripe hover row-border compact">
  <caption>Discos reunidos e presenteados</caption>
  <thead>
    <tr>
      <th data-priority="2">Artista</th>
      <th data-priority="2">Disco</th>
      <th data-priority="2">Ano</th>
      <th>Música</th>
      <th>Formato</th>
      <th>Detalhe</th>
    </tr>
  </thead>
  <tbody>
    {% for disco in site.data.catalogo %}
    {% if disco.Comprar == 'Comprado' %}
    <tr>
      <td>{{ disco.Artista }}</td>
      <td>{{ disco.Disco }}</td>
      <td>{{ disco.Ano }}</td>
      <td>{{ disco.Musica }}</td>
      <td>{{ disco.Formato }}</td>
      <td>{{ disco.Detalhe }}</td>
    </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>
<table id="catalogo_outros" class="stripe hover row-border compact">
  <caption>Outros discos</caption>
  <thead>
    <tr>
      <th data-priority="2">Artista</th>
      <th data-priority="2">Disco</th>
      <th data-priority="2">Ano</th>
      <th>Música</th>
      <th>Formato</th>
      <th>Detalhe</th>
    </tr>
  </thead>
  <tbody>
    {% for disco in site.data.catalogo %}
    {% if disco.Comprar != 'Comprado' %}
    <tr>
      <td>{{ disco.Artista }}</td>
      <td>{{ disco.Disco }}</td>
      <td>{{ disco.Ano }}</td>
      <td>{{ disco['Música'] }}</td>
      <td>{{ disco.Formato }}</td>
      <td>{{ disco.Detalhe }}</td>
    </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>
<p>A Irene lançou em 1979 o LP 'Rumo Norte', com composições próprias e do conterrâneo João do Vale, pelo selo Discos Marcus Pereira. Ele foi relançado posteriormente em CD, nos anos 90, com algumas faixas extras. Porém, como esse já é um álbum muito difundido na família, não foi incluído na coleção.</p>

<h2>Apresentação do conteúdo</h2>
<p>As informações obtidas durante a pesquisa foram organizadas em uma planilha que a partir dela, derivei para outros formatos para melhor apresentar o conteúdo e para que pudesse ficar disponível online. Foi gerada uma <a href="apresentacao.html" title="Veja a apresentação dos recortes">apresentação</a>, organizada por projeto e tempo, e uma <a href="planilha.html" title="Veja a planilha de recortes">planilha</a> mais enxuta com acesso mais fácil aos recortes.</p>

<h2>O responsável pela pesquisa, organização e disponibilização das informações</h2>
<p>Me chamo Flávio Alberto Dutra, sou paulista, nascido e criado em São Caetano do Sul, Programador Front-end, entusiasta em Genealogia e História da Família.</p>
<p>Qualquer dúvida, sugestão ou correção, me contate através dos canais abaixo:</p>
<ul>
  <li><a href="//facebook.com/flaviodutra" title="Entre em contato através do Facebook" target="_blank" rel="noreferrer">Facebook</a></li>
  <li><a href="//twitter.com/flaviodut" title="Entre em contato através do Twitter" target="_blank" rel="noreferrer">Twitter</a></li>
  <li><a href="mailto:flavio.adore@gmail.com" title="Entre em contato através do e-mail" rel="noreferrer">E-mail</a></li>
</ul>

<h2>Próximos passos</h2>
<ul>
  <li>Ir no Cedoc da Funarte no Rio de Janeiro e pegar reproduções das fotografias dos shows da Banda de Pífaros de Caruaru e Quinteto Violado do Projeto Pixinguinha de 79 e 80</li>
  <li>Procurar as notícias com fotos em jornal físico - coleção da Folha ou particular</li>
  <li>Pesquisar pela peça de <b>Oi Vento... tudo bem?</b> para determinar o período em cartaz e procurar fotos do espetáculo</li>
  <li>Pesquisar pela peça de <b>Palomares</b> para determinar o período em cartaz e procurar fotos do espetáculo</li>
  <li>Pesquisar pela peça de <b>Ao Acaso das Ruas</b> para determinar o período em cartaz e procurar fotos do espetáculo</li>
  <li>Pesquisar no acervo online do jornal Estadão (SP)</li>
  <li>Pesquisar no acerto online do jornal O Globo (RJ)</li>
  <li>Pesquisar em outros acervos online de jornais brasileiros</li>
  <li>Criar novas páginas: Galeria de Fotos, História, Depoimentos e Contribuição</li>
</ul>
