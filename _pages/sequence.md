---
title: "Sequence-info"
layout: gridlay
excerpt: "sequence info "
sitemap: false
permalink: /sequences/
---

<h1 class="post-title" itemprop="name headline">Sequence</h1>
<strong> Shows the sequence of Ribozyme (Rfam ID for fasta file download). We keep the U in the partial sequence because it is consistent with the sequence information in the fasta file. ( We provide the script could change T into U on the page).<strong> <a href="https://www.ribocentre.org/downloads/sequence-T2U.ipynb" target="_blank" download="sequence-T2U.ipynb"><button class="btn btn-secondary"><span class="glyphicon glyphicon-download-alt"></span>&nbsp;&nbsp;Download Script</button></a><br><br>

<html>
  <head>
    <title>Sequence search</title>
  </head>
  <body>
    <rnacentral-sequence-search
            databases='["ribocentre"]'
            examples='[
              {"description": "Hepatitis delta virus", "urs": "", "sequence": "TCGGGTCGGCATGGCATCTCCACCTCCTCGCGGTCCGACCTGGGCATCCGAAGGAGGACGCACGTCCACTCGGATGGCTAAGGGAGAGCCACT"},
              {"description": "Group II self-splicing intron", "urs": "", "sequence": "AGGAGCCGTGCGAGATGAAAGTCTCATGCACGGTTTTGCATGATAGAAAGAAGCGAGGAATCCTCTTTTCGACTCTGAC"}
            ]'
            rfam="true"
    />
  <script type="text/javascript" src="https://www.ribocentre.org/js/RNAcentral-sequence-search.js"></script></body>
</html>
