---
layout: page
title: Videos
permalink: /en/videos/
description: Selected videos and talks.
comments: false
lang: en
translation_key: videos
---

<ul class="card-list">
  {% assign videos = site.videos | where: "lang", "en" | sort: "date" | reverse %}
  {% for item in videos %}
  <li class="card">
    <a href="{{ item.url | relative_url }}"><strong>{{ item.title }}</strong></a>
    {% if item.description %}<p>{{ item.description }}</p>{% endif %}
  </li>
  {% endfor %}
</ul>
