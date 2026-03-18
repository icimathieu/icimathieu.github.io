---
layout: page
title: Archives
permalink: /en/archives/
comments: false
lang: en
translation_key: archives
---

## External archives (older articles and videos)

{% assign en_archives = site.archives | where: "lang", "en" %}
{% assign archived_articles = en_archives | where: "archive_type", "article" | sort: "date" | reverse %}
{% assign archived_videos = en_archives | where: "archive_type", "video" | sort: "date" | reverse %}

{% if archived_articles.size > 0 %}
### External articles

<ul class="card-list">
  {% for item in archived_articles %}
  <li class="card">
    <a href="{{ item.external_url }}" target="_blank" rel="noopener"><strong>{{ item.title }}</strong></a>
    <p class="meta">{{ item.date | date: "%d/%m/%Y" }}</p>
  </li>
  {% endfor %}
</ul>
{% endif %}

{% if archived_videos.size > 0 %}
### YouTube videos (Histosef)

<ul class="card-list">
  {% for item in archived_videos %}
  <li class="card">
    <a href="{{ item.external_url }}" target="_blank" rel="noopener"><strong>{{ item.title }}</strong></a>
    <p class="meta">{{ item.date | date: "%d/%m/%Y" }}</p>
  </li>
  {% endfor %}
</ul>
{% endif %}
