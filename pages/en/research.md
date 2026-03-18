---
layout: page
title: Research
permalink: /en/research/
comments: false
lang: en
translation_key: research
---

<p>Local search across titles, content, tags, and categories.</p>
<input class="search-box" type="search" placeholder="Example: digital humanities" data-search-input>
<div class="search-results" data-search-results>
  <p>Type at least 2 characters.</p>
</div>

<script>
  window.__SEARCH_INDEX_URL = "{{ '/en/search.json' | relative_url }}";
  window.__SEARCH_TEXTS = {
    indexUnavailable: "Search index unavailable.",
    noResults: "No results.",
    minChars: "Type at least 2 characters.",
    fallbackType: "content"
  };
</script>
<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
