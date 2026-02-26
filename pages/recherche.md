---
layout: page
title: Recherche
permalink: /recherche/
description: Recherche plein texte locale.
comments: false
---

<p>Recherche locale dans titres, contenus, tags et catégories.</p>
<input class="search-box" type="search" placeholder="Ex: humanités numériques" data-search-input>
<div class="search-results" data-search-results>
  <p>Saisissez au moins 2 caractères.</p>
</div>

<script>
  window.__SEARCH_INDEX_URL = "{{ '/search.json' | relative_url }}";
</script>
<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
