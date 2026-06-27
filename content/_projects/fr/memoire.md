---
title: "Mémoire"
date: 2025-10-01
last_update: 2026-03-18
status: "en cours"
progress: "Prémices"
project_order: 1
featured: true
comments: true
repo_url: "https://github.com/icimathieu/scraping_pdf"
repo_url_secondary: "https://github.com/icimathieu/transcription"
repo_url_third: "https://github.com/icimathieu/latex_memoire"
categories: [projet]
tags: [memoire, recherche]
lang: fr
translation_key: project-memoire
---

## Objectif

Documenter l'avancement du mémoire, les choix méthodologiques et les jalons de rédaction.

## Fait

- téléchargement sous-corpus de presse généraliste (qualité dégueulasse)
- pipeline de scraping pdfs Gallica (revues scientifiques essentiellement) avec 2 voies : une pdf (en cours) et une IIIF (en cours). 
- premier script d'ocr avec tesseract et reconstruction colonnes --> nous sommes passés sur pero-ocr après benchmark. JORF actuellement traité.
- corpus scientifique délimité (entièrement disponible sur Gallica)
- mini-mémoire rédigé en LaTeX : [latex_memoire](https://github.com/icimathieu/latex_memoire) avec historio, introduction, pbmtique, etc.

## État actuel & Prochaines étapes

- Terminer scraping, structuration et océrisation.
- Délimitation du corpus à finaliser.
- Dépôts actifs: [scraping_pdf](https://github.com/icimathieu/scraping_pdf) et [transcription](https://github.com/icimathieu/transcription).
- Structuration : passer de sous-corpus océrisés à des articles ! LLM ou regex ?

## Journal de progression

- **26/02/2026** : création de la page projet et structuration initiale.
- **18/03/2026** : fin pipeline de scraping pdfs avec APIs gallica et selenium. Lancement de scripts en background. Sous-corpus scientifique d'une 50aine de revues d'horizons diverses (agricoles, médicales, industrielles, de biologie, etc.)
- **05/2026** : mini-mémoire torché !
