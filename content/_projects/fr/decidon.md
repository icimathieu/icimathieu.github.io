---
title: "DECIDON — NER sur débats parlementaires"
description: "Stage de recherche (projet ANR DECIDON) : reconnaissance d'entités nommées sur des débats parlementaires de la IIIe République."
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

Stage de recherche (mai – décembre 2026, équivalent à cinq mois à temps plein) sur le projet ANR **DECIDON** (EPITA · ENC · EHESS). Le projet mène une étude computationnelle de la vie parlementaire sous la IIIe République (1870-1940) : circulation des problèmes publics entre presse et Parlement, et mécanismes de mise à l'agenda. Ma contribution porte sur la **reconnaissance d'entités nommées (NER)** appliquée à des débats parlementaires numérisés et océrisés.

## Mon rôle

- Conception du guide et du schéma d'annotation, et coordination des annotations (Label Studio).
- Sélection, entraînement et inférence de modèles de NER : comparaison de plusieurs approches (règles, spaCy, BERT/CamemBERT, GLiNER, LLM affinés).
- Évaluation selon les conventions du domaine (HIPE, micro-F1).
- À venir : détection d'évènements.

## Entités annotées

Orateurs, fonctions, personnes mentionnées, titres de section, didascalies.

## État actuel & Prochaines étapes

- Corpus de vérité terrain annoté ; plusieurs pipelines de NER comparées.
- Sources OCR : PERO OCR et un modèle de vision-langage (Chandra) en cours d'intégration.
- Suite : passage à l'échelle sur le corpus puis détection d'évènements.

## Ressources

- Dépôt initial public du projet : [decidon-ner](https://github.com/HueyNemud/decidon-ner).

## Journal de progression

- **05/2026** : début du stage ; conception du schéma d'annotation et coordination des annotations.
- **06/2026** : benchmark de plusieurs approches de NER (règles, spaCy, BERT, GLiNER, LLM).
