# icimathieu.github.io

Site personnel académique statique (Jekyll + GitHub Pages).

## Démarrage local

```bash
bundle install
bundle exec jekyll serve --livereload --drafts
```

Le site est disponible sur `http://127.0.0.1:4000`.

## Structure

- `_posts/`: billets de blog/carnet
- `_projects/`: projets
- `_publications/`: publications
- `_videos/`: vidéos
- `search.json`: index de recherche locale
- `assets/js/search.js`: logique client-side de recherche

## Front matter minimal (obligatoire)

```yml
title:
description:
date:
lang: fr
tags: []
categories: []
comments: false
published: true
```

## Commentaires (giscus)

Renseigner dans `_config.yml`:

```yml
giscus:
  repo: "OWNER/REPO"
  repo_id: "..."
  category: "Commentaires"
  category_id: "..."
  mapping: "pathname"
```

Ensuite activer GitHub Discussions sur le dépôt.

## Déploiement

Le workflow `.github/workflows/pages.yml` déploie automatiquement sur GitHub Pages à chaque push sur `main`.
