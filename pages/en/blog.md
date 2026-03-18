---
layout: page
title: Blog
permalink: /en/blog/
description: Research notebook and short essays.
comments: false
lang: en
translation_key: blog
---

<ul class="card-list">
  {% assign posts = site.posts | where: "lang", "en" %}
  {% for post in posts %}
  <li class="card">
    <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a>
    <p class="meta">{{ post.date | date: "%d/%m/%Y" }}</p>
    {% if post.description %}<p>{{ post.description }}</p>{% endif %}
  </li>
  {% endfor %}
</ul>
