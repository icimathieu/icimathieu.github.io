---
layout: page
title: Vidéos
permalink: /videos/
description: Sélection vidéo et interventions.
comments: false
---

<ul class="card-list">
  {% assign videos = site.videos | sort: "date" | reverse %}
  {% for item in videos %}
  <li class="card">
    <a href="{{ item.url | relative_url }}"><strong>{{ item.title }}</strong></a>
    {% if item.description %}<p>{{ item.description }}</p>{% endif %}
  </li>
  {% endfor %}
</ul>
