---
layout: page
title: Apresentação
permalink: /apresentacao/
body-class: apresentacao
---

<span id="loading"></span>

<div id="slider">
  {% for slide in site.data.apresentacao %}
  <div>
    {% assign slideId = slide.id | times: 1 %}
    {% if slideId < 10 %}
      {% assign slideNumber = "0" | append: slideId %}
    {% else %}
      {% assign slideNumber = slideId %}
    {% endif %}
    <img data-lazy="/assets/images/slides/slide-{{ slideNumber }}.png" alt="">
    {% if slide.has_aud == '1' %}
    <div class="audio">
      <span class="audio-icon"></span>
      <div class="audio-inner">
        <audio controls>
          <source src="/assets/audio/{{ slide.file_aud }}" type="audio/{{ slide.format_aud }}">
          Seu navegador não dá suporte para o elemento &lt;audio&gt;.
        </audio>
        <p class="audio-info"><span class="audio-artist">{{ slide.artist_aud }}</span><span class="audio-music">{{ slide.music_aud }}</span></p>
      </div>
    </div>
    {% endif %}
  </div>
  {% endfor %}
</div>
<div class="indicator">
  <div class="indicator-wrapper">
    <span id="indicatorCurrent">1</span>
    <span>de</span>
    <span id="indicatorTotal">--</span>
  </div>
</div>
