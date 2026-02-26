---
layout: page
title: Archives
permalink: /archives/
description: Archives chronologiques des billets du carnet.
comments: false
---

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year in posts_by_year %}
## {{ year.name }}

<ul class="card-list">
  {% for post in year.items %}
  <li class="card">
    <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a>
    <p class="meta">{{ post.date | date: "%d/%m/%Y" }}</p>
    {% if post.description %}<p>{{ post.description }}</p>{% endif %}
  </li>
  {% endfor %}
</ul>
{% endfor %}
