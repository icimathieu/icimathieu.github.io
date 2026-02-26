---
layout: page
title: Projets
permalink: /projets/
comments: false
---

<ul class="card-list">
  {% assign projects = site.projects | sort: "project_order" %}
  {% for project in projects %}
  <li class="card">
    <a href="{{ project.url | relative_url }}"><strong>{{ project.title }}</strong></a>
    {% if project.status %}<p class="meta">{{ project.status }}</p>{% endif %}
    {% if project.last_update %}<p class="meta">Dernière mise à jour: {{ project.last_update | date: "%d/%m/%Y" }}</p>{% endif %}
    {% if project.description %}<p>{{ project.description }}</p>{% endif %}
  </li>
  {% endfor %}
</ul>
