---
layout: page
title: Projets
permalink: /projets/
description: Projets de recherche et de développement.
comments: false
---

<ul class="card-list">
  {% assign projects = site.projects | sort: "date" | reverse %}
  {% for project in projects %}
  <li class="card">
    <a href="{{ project.url | relative_url }}"><strong>{{ project.title }}</strong></a>
    {% if project.status %}<p class="meta">{{ project.status }}</p>{% endif %}
    {% if project.description %}<p>{{ project.description }}</p>{% endif %}
  </li>
  {% endfor %}
</ul>
