---
layout: page
title: Publications
permalink: /en/publications/
description: Academic publications and long-form texts.
comments: false
lang: en
translation_key: publications
---

<ul class="card-list">
  {% assign publications = site.publications | where: "lang", "en" | sort: "year" | reverse %}
  {% for item in publications %}
  <li class="card">
    <a href="{{ item.url | relative_url }}"><strong>{{ item.title }}</strong></a>
    <p class="meta">
      {% if item.authors %}{{ item.authors | join: ", " }} · {% endif %}
      {% if item.venue %}{{ item.venue }}{% endif %}
      {% if item.year %} ({{ item.year }}){% endif %}
    </p>
  </li>
  {% endfor %}
</ul>
