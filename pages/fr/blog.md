---
layout: page
title: Carnet
permalink: /blog/
description: Carnet de recherche et billets.
comments: false
lang: fr
translation_key: blog
---

<ul class="card-list">
  {% assign posts = site.posts | where: "lang", "fr" %}
  {% for post in posts %}
  <li class="card">
    <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a>
    <p class="meta">{{ post.date | date: "%d/%m/%Y" }}</p>
    {% if post.description %}<p>{{ post.description }}</p>{% endif %}
  </li>
  {% endfor %}
</ul>
