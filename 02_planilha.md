---
layout: page
title: Planilha
permalink: /planilha/
body-class: planilha
---

<span id="loading"></span>

<table id="spreadsheet" class="stripe hover row-border" style="width: 100%;">
  <thead>
    <tr>
      <th data-priority="2">Data</th>
      <th data-priority="1">Publicação</th>
      <th>UF</th>
      <th data-priority="1">Tipo</th>
      <th data-priority="2">Assunto</th>
      <th>Complemento</th>
      <th>Localização</th>
      <th data-priority="2">Recorte</th>
      <th>Interesse</th>
    </tr>
  </thead>
  <tbody>
    {% for recorte in site.data.planilha %}
    <tr>
      <td>
        {%- if recorte['Data'] -%}
          {{ recorte['Data'] }}
        {%- else -%}
          -
        {%- endif -%}
      </td>
      <td>
        {%- if recorte['Publicação'] -%}
          {{ recorte['Publicação'] }}
        {%- else -%}
          -
        {%- endif -%}
      </td>
      <td>
        {%- if recorte['UF'] -%}
          {{ recorte['UF'] }}
        {%- else -%}
          -
        {%- endif -%}
      </td>
      <td>
        {%- if recorte['Tipo'] -%}
          {{ recorte['Tipo'] }}
        {%- else -%}
          -
        {%- endif -%}
      </td>
      <td>
        {%- if recorte['Assunto'] -%}
          {{ recorte['Assunto'] }}
        {%- else -%}
          -
        {%- endif -%}
      </td>
      <td>
        {%- if recorte['Complemento'] -%}
          {{ recorte['Complemento'] }}
        {%- else -%}
          -
        {%- endif -%}
      </td>
      <td>
        {%- assign espaco = recorte['Localização'] | split: " " -%}
        {%- if espaco[0] == "Vários:" -%}
          {%- assign varios = recorte['Localização'] | split: "Vários: " -%}
          <div class="location"><a href="javascript:;" class="location-label">Vários</a><span class="location-addresses">{{ varios[1] }}</span></div>
        {%- else -%}
          {%- if recorte['Localização'] -%}
            {{ recorte['Localização'] }}
          {%- else -%}
            -
          {%- endif -%}
        {%- endif -%}
      </td>
      <td>
        {%- if recorte['Recorte'] -%}
          <a href="/assets/images/highlight/{{recorte['Recorte']}}" data-lightbox="{{recorte['Recorte']}}">{{recorte['Recorte']}}</a>
        {%- else -%}
          -
        {%- endif -%}
      </td>
      <td>
        {%- if recorte['Interesse'] -%}
          {{ recorte['Interesse'] }}
        {%- else -%}
          -
        {%- endif -%}
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>
