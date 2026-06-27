---
title: "DECIDON — NER sur débats parlementaires"
date: 2026-05-01
last_update: 2026-06-27
status: "en cours"
progress: "Annotation et benchmark de modèles de NER."
project_order: 3
featured: true
comments: true
categories: [projet]
tags: [ner, tal, annotation, parlement, histoire]
lang: fr
translation_key: project-decidon
---

## Objectif

Stage de recherche (mai – décembre 2026) sur le projet ANR **DECIDON** (EPITA · ENC · EHESS). Le projet mène une étude computationnelle de la vie parlementaire (compte rendu in-extenso des débats parlementaires) sous la IIIe République (1870-1940) : circulation des problèmes publics entre presse et Parlement, et mécanismes de mise à l'agenda. Ma contribution porte sur la **reconnaissance d'entités nommées (NER)** (WP3) appliquée à des débats parlementaires numérisés et océrisés.

## Entités annotées

Orateurs, fonctions, personnes mentionnées, titres de section, didascalies.

## État actuel & Prochaines étapes

- Conception du guide et du schéma d'annotation, et coordination des annotations (Label Studio).
- Corpus de vérité terrain annoté ; plusieurs pipelines de NER comparées (regex, spaCy-CNN, BERTs, GLiNER2, GLiNER-bi-V2, LLM). Aucun choix définitif pour l'instant.
- Sources OCR : PERO OCR et un modèle de vision-langage (Chandra) en cours d'intégration.
- Suite : passage à l'échelle sur le corpus puis détection d'évènements / entités géographiques.

## Ressources

- Dépôt initial public du projet : [decidon-ner](https://github.com/HueyNemud/decidon-ner).

## Journal de progression

- **05/2026** : début du stage ; conception du schéma d'annotation et reprise des annotations.
- **06/2026** : benchmark de plusieurs approches de NER (règles, spaCy, BERT, GLiNER, LLM).
