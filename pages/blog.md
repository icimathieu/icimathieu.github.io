---
layout: page
title: Blog
permalink: /blog/
description: Carnet de recherche et billets.
comments: false
---

<ul class="card-list">
  {% for post in site.posts %}
  <li class="card">
    <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a>
    <p class="meta">{{ post.date | date: "%d/%m/%Y" }}</p>
    {% if post.description %}<p>{{ post.description }}</p>{% endif %}
  </li>
  {% endfor %}
</ul>
