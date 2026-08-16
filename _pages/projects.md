---
layout: page
title: Projects
permalink: /projects/
description: Our lab specialises in leveraging statistical machine learning and Bayesian statistics across diverse fields, with a strong focus on clinical and environmental AI applications. 
  We are dedicated to pioneering innovative machine learning techniques and creating impactful solutions to address critical challenges in dentistry and oral health, biodiversity, and computational statistics. 
nav: true
nav_order: 3
display_categories: [Projects]
horizontal: false
---

## Research funding

Our work is supported by:

- **[NIHR Invention for Innovation (i4i) Product Development Award](https://fundingawards.nihr.ac.uk/award/NIHR204566)**, _[Development and pre-market evaluation of AI-assisted dental disease detection with radiography](https://www.kcl.ac.uk/news/dentists-could-soon-have-a-new-ai-co-pilot-to-detect-tooth-decay)_, £1.75M, 2023 to 2026.
- **[NERC Innovation in Environmental Monitoring](https://www.ukri.org/news/uk-invests-in-monitoring-of-natural-environment/)**, _[HumBug II: enabling large-scale acoustic monitoring for invasive insect species](https://humbug.ox.ac.uk/the-humbug-ii-project)_, £599K, 2024 to 2027.
- **[The MPS Foundation](https://www.thempsfoundation.org/)**, _[Trustworthy AI-supported dental record self-auditing and risk mitigation](https://www.thempsfoundation.org/our-research/article/ai-supported-dental-record-self-auditing)_, £199K, 2026 to 2027.
- **EPSRC Industrial CASE doctoral studentship**, _Differentiable particle filters for data-driven sequential inference_, £118K, 2023 to 2026.

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <!-- uncomment to restore display category -->
  <h2 class="category"></h2>
  <!-- <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a> -->
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
