---
layout: default
title: Home
description: Personal website for research and writing.
permalink: /en/
lang: en
translation_key: home
---

<section>
  <h1>Digital humanities, history, journalism (& philosophy)</h1>
  <p>
    I publish a research notebook, projects, publications, and video resources here.
    The website is a central hub connecting original writing, external articles, GitHub, and YouTube.
    I am a first-year student in the Digital Humanities master's program at Ecole des Chartes,
    and I am currently working on a history of science thesis about Pasteurians and the Third Republic.
  </p>
  <p class="meta">
    The <a href="{{ '/en/research/' | relative_url }}">Research</a> section lets you run keyword searches across the site.
  </p>
  <p class="meta">
    The <a href="{{ '/feed.xml' | relative_url }}">RSS</a> link in the footer lets you subscribe to new publications (blog posts, archived videos, and publications) in any RSS reader.
  </p>
</section>

<section>
  <h2>Latest Posts</h2>
  {% assign latest_posts = site.posts | where: "lang", "en" %}
  <ul class="card-list">
    {% for post in latest_posts limit:3 %}
    <li class="card">
      <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a>
      <p class="meta">{{ post.date | date: "%d/%m/%Y" }}</p>
      {% if post.description %}<p>{{ post.description }}</p>{% endif %}
    </li>
    {% endfor %}
  </ul>
  <p><a href="{{ '/en/blog/' | relative_url }}">View all posts</a></p>
</section>

<section>
  <h2>Featured Projects</h2>
  {% assign featured = site.projects | where: "lang", "en" | where: "featured", true | sort: "project_order" %}
  {% if featured.size < 3 %}
    {% assign featured = site.projects | where: "lang", "en" | sort: "project_order" %}
  {% endif %}
  <ul class="card-list">
    {% for project in featured limit:3 %}
    <li class="card">
      <a href="{{ project.url | relative_url }}"><strong>{{ project.title }}</strong></a>
      {% if project.description %}<p>{{ project.description }}</p>{% endif %}
    </li>
    {% endfor %}
  </ul>
  <p><a href="{{ '/en/projects/' | relative_url }}">View all projects</a></p>
</section>
