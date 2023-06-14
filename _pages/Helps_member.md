---
title: "Ribocentre - Helps"
layout: piclay
excerpt: "Ribocentre -- Helps"
permatemlink: /me/
---

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/tempics/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }} <!--<br>email: &lt;{{ member.email }}&gt;</i> -->
  <ul style="overflow: hidden">

  {% if member.number_educ == 1 %}
  <temli> {{ member.education1 }} </temli>
  {% endif %}

  {% if member.number_educ == 2 %}
  <temli> {{ member.education1 }} </temli>
  <temli> {{ member.education2 }} </temli>
  {% endif %}

  {% if member.number_educ == 3 %}
  <temli> {{ member.education1 }} </temli>
  <temli> {{ member.education2 }} </temli>
  <temli> {{ member.education3 }} </temli>
  {% endif %}

  {% if member.number_educ == 4 %}
  <temli> {{ member.education1 }} </temli>
  <temli> {{ member.education2 }} </temli>
  <temli> {{ member.education3 }} </temli>
  <temli> {{ member.education4 }} </temli>
  {% endif %}

  {% if member.number_educ == 5 %}
  <temli> {{ member.education1 }} </temli>
  <temli> {{ member.education2 }} </temli>
  <temli> {{ member.education3 }} </temli>
  <temli> {{ member.education4 }} </temli>
  <temli> {{ member.education5 }} </temli>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 or forloop.last %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}
