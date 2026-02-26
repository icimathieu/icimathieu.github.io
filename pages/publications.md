---
layout: page
title: Publications
permalink: /publications/
description: Publications académiques et textes longs.
comments: false
---

<ul class="card-list">
  {% assign publications = site.publications | sort: "year" | reverse %}
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
