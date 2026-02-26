---
layout: page
title: Archives
permalink: /archives/
description: Archives chronologiques des billets du carnet.
comments: false
---

## Archives externes (articles et vidéos plus anciens)

{% assign archived_articles = site.archives | where: "archive_type", "article" | sort: "date" | reverse %}
{% assign archived_videos = site.archives | where: "archive_type", "video" | sort: "date" | reverse %}

{% if archived_articles.size > 0 %}
### Articles externes

<ul class="card-list">
  {% for item in archived_articles %}
  <li class="card">
    <a href="{{ item.external_url }}" target="_blank" rel="noopener"><strong>{{ item.title }}</strong></a>
    <p class="meta">{{ item.date | date: "%d/%m/%Y" }}</p>
    {% if item.description %}<p>{{ item.description }}</p>{% endif %}
  </li>
  {% endfor %}
</ul>
{% endif %}

{% if archived_videos.size > 0 %}
### Vidéos (ancienne chaîne)

<ul class="card-list">
  {% for item in archived_videos %}
  <li class="card">
    <a href="{{ item.external_url }}" target="_blank" rel="noopener"><strong>{{ item.title }}</strong></a>
    <p class="meta">{{ item.date | date: "%d/%m/%Y" }}</p>
    {% if item.description %}<p>{{ item.description }}</p>{% endif %}
  </li>
  {% endfor %}
</ul>
{% endif %}
