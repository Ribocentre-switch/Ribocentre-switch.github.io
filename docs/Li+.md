---
layout: post
title:  "Li<sup>+</sup>"
date:   2023-05-23 00:00:00
author: Yuanlin He, Xiaowei Lin
permalink: /docs/Li<sup>+</sup>/
---
**Rfam ID: [RF03057](https://rfam.xfam.org/family/RF03057)(nhaA-I RNA)** <br>
&emsp;&emsp;&emsp;&emsp;**[RF03038](https://rfam.xfam.org/family/RF03038)(nhaA-II RNA)** <br>

<html lang="zh-cn">
<head>
<meta charset="utf-8"> 
<style>
  .header_box {
    border: none;
    border-bottom: 4px solid #005826;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.25);
    font-size:40px
  }
</style>
</head>
<p><br /></p>
<p class="header_box">Timeline</p>
<p><br /></p>
<div class="timeline">
  <div class="year">
    <div class="inner">
      <span>start</span>
    </div>
  </div>
  <ul class="days">
          
    <li class="day">
     <div class="events">
       <p style="width: 380px;">Discovery of <i>nhaA</i>-I and <i>nhaA</i>-II motif</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/28977401/" target="_blank">2017</a><sup>[1]</sup></div>
     </div>
    </li>
        

    <li class="day">
     <div class="events">
       <p style="padding-left: 30px;">The experimental validation of two distinct classes of  Li<sup>+</sup> riboswitches</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/36352003/" target="_blank">2022</a><sup>[2]</sup></div>
     </div>
    </li>
        

  </ul>
  <div class="year year--end">
    <div class="inner">
      <span>2023...</span>
    </div>
  </div>
</div>
</html>
        
<p class="header_box">Description</p>
***
<font size="4">The <i>nhaA</i>-I RNA motif is a conserved RNA structure that was discovered by bioinformatics. <i>nhaA</i>-I motif RNAs are found in Acidobacteriota, alpha-, beta- and Gammaproteobacteria, Verrucomicrobiota and the tentative phylum NC10 (see bacterial phyla and List of taxa with candidatus status).
<i>nhaA</i>-I motif RNAs likely function as cis-regulatory elements, in view of their positions upstream of protein-coding genes. Indeed, it is reasonable to speculate that <i>nhaA</i>-I RNAs directly bind a ligand, and therefore function as riboswitches, in view of their widespread distribution and conserved nucleotide positions. <i>nhaA</i>-I RNAs typically occur upstream of genes that encode exchangers of sodium ions and protons. More rarely, they also exist upstream of genes that encode DUF1646 protein domains, or that are involved in cell signaling or peptidoglycan. DUF1646-coding genes are also regulated by the DUF1646 RNA motif, which also has a potential association with sodium ions. <i>nhaA</i>-I RNAs also sometimes occur in tandem pairs, with two such RNAs nearby to one another. Such arrangements have been proposed to implement cooperative binding to more digitally regulate gene expression, although the biology underlying these tandem arrangements of <i>nhaA</i>-I RNAs is, as of 2018, unknown.
The <i>nhaA</i>-II RNA motif is a conserved RNA structure that was discovered by bioinformatics. <i>nhaA</i>-II motifs are found in Caulobacterales.
<i>nhaA</i>-II motif RNAs likely function as cis-regulatory elements, in view of their positions upstream of protein-coding genes. nhaA-I RNAs typically occur upstream of genes that encode exchangers of sodium ions and protons. More rarely, they also exist upstream of methyltransferases that use S-adenosylmethionine as a donor.
In 2022, Breaker et al. identified <i>nhaA</i>-I motif and <i>nhaA</i>-II motif as Li<sup>+</sup>-I and Li<sup>+</sup>-II riboswitches, respectively (From Wikipedia)<sup></sup>.</font>
<p><br /></p>
            
> Gene association
        
<font size="4">Annotated functions of proteins encoded by genes commonly associated with the two riboswitch candidates<sup>[2]</sup>.</font>
<p><br /></p>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;">
<tr >
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_association/Li+_riboswitch_gene_association.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                
> Gene regulation
            
<p class="header_box">Structure and Ligand recognition</p>
> 2D representation
        
<font size=4>Consensus secondary structure and sequence conservation of Li<sup>+</sup> riboswitch<sup></sup>.</font><br>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<style>
   body {
    width: 100%;
    height: 100vh;
}
   button {
   margin-right: 0px;
}
   .main-container {
    display: flex;
    align-items: left;
    justify-content: center;
    height: 100%;
}
   .zoom-wrapper1 {
    width: 400px;
    height: 400px;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
    <div class="main-container">
        <div class="zoom-wrapper1">
            <div class="zoom-area1">
                <img src="/images/2D/Li+_riboswitch_2D.svg" alt="drawing" style="width:400px" />
            </div>
        </div>
    </div>
    <script src="https://www.ribocentre.org/js/panzoom.js"></script>
    <script type='text/javascript'>
      var zoomWraper1 = document.querySelector(".zoom-wrapper1");
      var panzoom1 = Panzoom(document.querySelector(".zoom-area1"), {
      maxScale: 6
      });
      zoomWraper1.addEventListener("wheel", panzoom1.zoomWithWheel);
      panzoom1.zoom(300 / document.querySelector(".zoom-area1 img").height);
      </script>
</td>
<!--2D模2--------------------------->
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
<style>
.zoom-wrapper2 {
    width: 400px;
    height: 400px;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
    <div class="main-container">
        <div class="zoom-wrapper2">
            <div class="zoom-area2">
                <img src="/images/2D/" alt="drawing" style="width:400px" />
            </div>
        </div>
    </div>
    <script src="https://www.ribocentre.org/js/panzoom.js"></script>
    <script type='text/javascript'>
      var zoomWraper2 = document.querySelector(".zoom-wrapper2");
      var panzoom2 = Panzoom(document.querySelector(".zoom-area2"), {
      maxScale: 6
      });
      zoomWraper2.addEventListener("wheel", panzoom2.zoomWithWheel);
      panzoom2.zoom(300 / document.querySelector(".zoom-area2 img").height);
    </script>
</td>
</tr></table><br>
                
> 3D visualisation
            
> Binding pocket
                
> Ligand recognition
            
<p class="header_box">Reference</p>
<p><br /></p>
            
<p><strong>[1]Detection of 224 candidate structured RNAs by comparative analysis of specific subsets of intergenic regions.</strong><br />
Weinberg, Z. et al<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/28977401/" target="_blank">Nucleic Acids Res. 45, 10811–10823 (2017)</a><br /><br /></p>
                
<p><strong>[2]Lithium-sensing riboswitch classes regulate expression of bacterial cation transporter genes.</strong><br />
White, N., Sadeeshkumar, H., Sun, A., Sudarsan, N. & Breaker, R. R<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/36352003/" target="_blank">Sci. Rep. 12, 19145 (2022)</a><br /><br /></p>
                