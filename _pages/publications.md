---
title: "Miao Lab - Publications"
layout: gridlay
excerpt: "Miao Lab -- Publications."
sitemap: false
permalink: /publicati/
---


# Publications

(^ co-first author, # corresponding author)

## Group highlights

(For a full list of publications and patents see [below](#full-list-of-publications) or go to 
[Google Scholar](https://scholar.google.com/citations?user=OUFQCssAAAAJ), 
[ORCID](https://orcid.org/0000-0002-5777-9815))

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ publi.title }}</pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="33%" style="float: left" />
  <p>{{ publi.description }}</p>
  <p>{{ publi.authors }}</p>
  <p><em><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></em></p>
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<p> &nbsp; </p>


## Full List of publications

{% for publi in site.data.publist %}

  <b>{{ publi.title }}</b> <br />
  {{ publi.authors }} <br /><em><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></em>

{% endfor %}
