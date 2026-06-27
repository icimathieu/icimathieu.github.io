---
title: "DECIDON — NER on parliamentary debates"
description: "Research internship (ANR project DECIDON): named-entity recognition on Third Republic parliamentary debates."
date: 2026-05-01
last_update: 2026-06-27
status: "in progress"
progress: "Annotation and model benchmarking for NER."
project_order: 3
featured: true
comments: true
categories: [project]
tags: [ner, nlp, annotation, parliament, history]
lang: en
translation_key: project-decidon
permalink: /en/projects/decidon/
---

## Objective

Research internship (May – December 2026, equivalent to five months full-time) on the ANR project **DECIDON** (EPITA · ENC · EHESS). The project carries out a computational study of parliamentary life under the Third Republic (1870-1940): how public problems circulate between the press and Parliament, and agenda-setting mechanisms. My contribution focuses on **named-entity recognition (NER)** applied to digitized, OCR-processed parliamentary debates.

## My role

- Designing the annotation guide and schema, and coordinating the annotation effort (Label Studio).
- Selecting, training, and running NER models: comparing several approaches (rules, spaCy, BERT/CamemBERT, GLiNER, fine-tuned LLMs).
- Evaluation following domain conventions (HIPE, micro-F1).
- Upcoming: event detection.

## Annotated entities

Speakers, functions, mentioned persons, section titles, stage directions.

## Current state & Next steps

- Annotated ground-truth corpus; several NER pipelines compared.
- OCR sources: PERO OCR and a vision-language model (Chandra) being integrated.
- Next: scaling up over the corpus, then event detection.

## Resources

- Initial public repository of the project: [decidon-ner](https://github.com/HueyNemud/decidon-ner).

## Progress log

- **05/2026**: internship begins; annotation schema design and annotation coordination.
- **06/2026**: benchmark of several NER approaches (rules, spaCy, BERT, GLiNER, LLM).
