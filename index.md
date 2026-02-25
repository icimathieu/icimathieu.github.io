---
layout: default
title: Accueil
description: Site personnel de recherche et d'écriture.
---

<section>
  <h1>Humanités numériques, histoire, philosophie</h1>
  <p>
    Je publie ici un carnet de recherche, des projets, des publications et des ressources vidéo.
    Le site sert de point central entre écrits natifs, articles externes, GitHub et YouTube.
  </p>
</section>

<section>
  <h2>Derniers articles</h2>
  <ul class="card-list">
    {% for post in site.posts limit:3 %}
    <li class="card">
      <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a>
      <p class="meta">{{ post.date | date: "%d/%m/%Y" }}</p>
      {% if post.description %}<p>{{ post.description }}</p>{% endif %}
    </li>
    {% endfor %}
  </ul>
  <p><a href="{{ '/blog/' | relative_url }}">Voir tous les articles</a></p>
</section>

<section>
  <h2>Projets mis en avant</h2>
  {% assign featured = site.projects | where: "featured", true %}
  {% if featured.size < 3 %}
    {% assign featured = site.projects | sort: "date" | reverse %}
  {% endif %}
  <ul class="card-list">
    {% for project in featured limit:3 %}
    <li class="card">
      <a href="{{ project.url | relative_url }}"><strong>{{ project.title }}</strong></a>
      {% if project.description %}<p>{{ project.description }}</p>{% endif %}
    </li>
    {% endfor %}
  </ul>
  <p><a href="{{ '/projets/' | relative_url }}">Voir tous les projets</a></p>
</section>

<section>
  <h2>Liens</h2>
  <p>
    <a href="https://github.com/icimathieu" target="_blank" rel="noopener">GitHub</a> ·
    <a href="https://www.youtube.com/" target="_blank" rel="noopener">YouTube</a>
  </p>
</section>
