(function () {
  const input = document.querySelector('[data-search-input]');
  const resultsRoot = document.querySelector('[data-search-results]');

  if (!input || !resultsRoot) return;

  const normalize = (text) =>
    (text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const tokenize = (query) => normalize(query).split(/\s+/).filter(Boolean);

  const includes = (source, token) => normalize(source).includes(token);

  let docs = [];

  const indexUrl = window.__SEARCH_INDEX_URL || "/search.json";

  fetch(indexUrl)
    .then((res) => res.json())
    .then((data) => {
      docs = data;
    })
    .catch(() => {
      resultsRoot.innerHTML = '<p>Index de recherche indisponible.</p>';
    });

  function score(doc, tokens, rawQuery) {
    let s = 0;
    const title = doc.title || "";
    const content = doc.content || "";
    const tags = (doc.tags || []).join(" ");
    const categories = (doc.categories || []).join(" ");
    const description = doc.description || "";

    tokens.forEach((t) => {
      if (includes(title, t)) s += 30;
      if (includes(tags, t)) s += 12;
      if (includes(categories, t)) s += 8;
      if (includes(description, t)) s += 6;
      if (includes(content, t)) s += 3;
    });

    if (normalize(title).includes(normalize(rawQuery))) s += 20;
    return s;
  }

  function excerpt(content, query) {
    const nContent = normalize(content);
    const nQuery = normalize(query);
    const at = nContent.indexOf(nQuery);
    if (at < 0) return (content || "").slice(0, 180) + "...";

    const start = Math.max(0, at - 60);
    const end = Math.min(content.length, at + query.length + 120);
    return (start > 0 ? "..." : "") + content.slice(start, end) + (end < content.length ? "..." : "");
  }

  function render(items, query) {
    if (!items.length) {
      resultsRoot.innerHTML = "<p>Aucun résultat.</p>";
      return;
    }

    resultsRoot.innerHTML = items
      .map((item) => {
        const snippet = excerpt(item.content || "", query).replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return `
          <article class="search-item">
            <a href="${item.url}"><strong>${item.title}</strong></a>
            <div class="meta">${item.type || "contenu"}${item.date ? " · " + item.date : ""}</div>
            <p>${snippet}</p>
          </article>
        `;
      })
      .join("");
  }

  input.addEventListener("input", function () {
    const query = input.value.trim();
    if (query.length < 2) {
      resultsRoot.innerHTML = "<p>Saisissez au moins 2 caractères.</p>";
      return;
    }

    const tokens = tokenize(query);
    const ranked = docs
      .map((doc) => ({ ...doc, _score: score(doc, tokens, query) }))
      .filter((doc) => doc._score > 0)
      .sort((a, b) => b._score - a._score)
      .slice(0, 20);

    render(ranked, query);
  });
})();
