---
title: "FromLego2Hero — reconstitution de mosaïques"
description: "Reconstitution de mosaïques fragmentées par VLM et GNN, avec génération massive de données synthétiques (mosaïques LEGO)."
date: 2026-05-01
last_update: 2026-06-21
status: "en cours"
progress: "Dataset synthétique publié ; entraînement YOLO/GNN en cours."
project_order: 4
featured: true
comments: true
repo_url: "https://github.com/icimathieu/forge_LAR_YOLO_lego2hero"
categories: [projet]
tags: [python, vlm, gnn, yolo, donnees-synthetiques, vision]
lang: fr
translation_key: project-lego2hero
---

## Objectif

Projet de groupe (cours de Python avancé, master Humanités numériques) : reconstituer des **mosaïques fragmentées** en tesselles — ou groupes de tesselles — à l'aide de modèles de vision-langage (VLM) et/ou de réseaux de neurones sur graphes (GNN). Le projet génère massivement des **données synthétiques** (mosaïques LEGO fragmentées) pour permettre un transfert de connaissance vers des mosaïques réelles, avec des techniques de dégradation de données pour généraliser l'apprentissage.

## Pipeline

- Forge amont : image → mosaïque LEGO (quantification des couleurs sur une palette LEGO, packing, rendu).
- Fragmentation synthétique paramétrable + dégradations (érosion, trous, fragments manquants), organisée en **curriculum** (du plus simple au plus dégradé).
- Sorties prêtes à l'entraînement : annotations YOLO-Seg et graphes pour GNN.
- Cible de transfert : fresques réelles (benchmark RePAIR).

## État actuel & Prochaines étapes

- Forge et extraction de descripteurs finalisées ; jeu de données de ~25 000 instances publié sur HuggingFace.
- Jeu de données : [lego2hero-100mosaics](https://huggingface.co/datasets/icimathieu/lego2hero-100mosaics).
- En cours : entraînement YOLO-Seg et GNN, premières expériences de transfert.
- Travail soumis à une conférence d'humanités numériques (CHR 2027).

## Journal de progression

- **05/2026** : première pipeline de forge validée.
- **06/2026** : dataset de 100 mosaïques / 25 000 instances généré et publié sur HuggingFace ; modes de fragmentation et curriculum mis en place.
