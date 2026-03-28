---
layout: article
title: "The hidden cost of ELT done wrong"
description: "Everyone talks about the benefits of ELT. Few talk about what happens when transformations sprawl without governance."
date_display: "February 2026"
tag: "data engineering"
hero: /writing/img/elt-cost.svg
hero_alt: "ELT pipeline diagram showing transformation sprawl"
---

ELT won the debate. Load raw data into the warehouse, transform it there, leverage the compute you're already paying for. The pattern is solid. The problem is what teams do with it once they've bought in.

Without structure, ELT becomes a dumping ground. Raw tables accumulate. Transformations multiply. Nobody knows which model is the source of truth for revenue. The warehouse is full of data and empty of trust.

## The sprawl problem

In ETL, transformation logic lived outside the warehouse — in code, in jobs, in pipelines that were at least visible. In ELT, that logic lives inside the warehouse, often written by whoever needed it first, never reviewed, never tested.

> Six months in, you have forty models, three definitions of "active user", and a weekly meeting where someone asks which number is right.

The tool doesn't cause this — dbt, Spark, whatever you're using is fine. The cause is the absence of a model layer contract. Who owns each model? What's the expected grain? What breaks if this changes?

## Testing is not optional

The teams that use ELT well treat transformation code like application code. Tests on primary keys. Tests on referential integrity. Freshness checks. Not because the framework requires it, but because the data is a product and products need quality guarantees.

Most teams skip this because it feels slow at the start. It is slow at the start. It's far slower to debug a broken metric in production with no lineage and no tests.

## A practical starting point

Agree on a layer structure before writing the first model. Staging, intermediate, marts — whatever vocabulary fits your team, use it consistently. Define what each layer is responsible for and what it's not. Write that down. The structure will outlast the people who built it.

ELT is a good pattern. The cost of doing it wrong is paid slowly, then all at once.
