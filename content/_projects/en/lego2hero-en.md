---
title: "FromLego2Hero — mosaic reassembly"
description: "Reassembling fragmented mosaics with VLMs and GNNs, using large-scale synthetic data generation (LEGO mosaics)."
date: 2026-05-01
last_update: 2026-06-21
status: "in progress"
progress: "Synthetic dataset published; YOLO/GNN & VLM training underway."
project_order: 4
featured: true
comments: true
repo_url: "https://github.com/icimathieu/forge_LAR_YOLO_lego2hero"
categories: [project]
tags: [python, vlm, gnn, yolo, synthetic-data, vision]
lang: en
translation_key: project-lego2hero
permalink: /en/projects/lego2hero/
---

## Objective

Group project (advanced Python course, Digital Humanities master's): reassemble **fragmented mosaics** into tesserae — or groups of tesserae — using vision-language models (VLMs) and/or graph neural networks (GNNs). The project massively generates **synthetic data** (fragmented LEGO mosaics) to enable knowledge transfer toward real mosaics, with data-degradation techniques to generalize learning.

## Pipeline

- Upstream forge: image → LEGO mosaic (color quantization onto a LEGO palette, packing, rendering).
- Parameterizable synthetic fragmentation + degradations (erosion, holes, missing fragments), organized as a **curriculum** (from easiest to most degraded).
- Training-ready outputs: YOLO-Seg annotations and graphs for GNNs.
- Transfer target: real frescoes (RePAIR benchmark).

## Current state & Next steps

- Forge and feature extraction finalized; a dataset of ~25,000 instances published on HuggingFace. Adjust generation to get closer to the target use case.
- Dataset: [lego2hero-100mosaics](https://huggingface.co/datasets/icimathieu/lego2hero-100mosaics).
- Underway: YOLO-Seg training on my side, first transfer experiments + figuring out when a YOLO becomes good (learning curve?).
- Gathering all mosaic corpora, whether synthetic or real.

## Progress log

- **05/2026**: first forge pipeline validated.
- **06/2026**: dataset of 100 mosaics / 25,000 instances generated and published on HuggingFace; fragmentation modes and curriculum set up.
