---
layout: post
title:  "PRA"
date:   2023-05-15 00:00:00
author: Wenjian Liao
permalink: /docs/PRA/
---
<p style="font-size: 24px"><strong>Rfam ID: [RF02974](https://rfam.xfam.org/family/RF02974)(<i>Fibro-purF</i>)</strong> <br /></p>

<html lang="zh-cn">
<head>
<meta charset="utf-8"> 
<style>
  .header_box {
    border: none;
    border-bottom: 4px solid #005826;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.25);
    font-size:32px
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
       <p >Discovery of <i>Fibro-purF</i> motif by comparative analysis</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/28977401/" target="_blank">2017</a><sup>[1]</sup></div>
     </div>
    </li>
        

    <li class="day">
     <div class="events">
       <p >The <i>Fibro-purF</i> motif is a candidate riboswitch binding to 5-phospho-D-ribosylamine (PRA)</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/32843366/" target="_blank">2020</a><sup>[2]</sup></div>
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
<font size="4">The PRA riboswitch (<i>Fibro-purF</i> RNA motif) is a conserved RNA structure that was discovered by bioinformatics. All known <i>Fibro-purF</i> RNAs are found upstream of <i>purF</i> genes, which encode amidophosphoribosyltransferase, which participates in the biosynthesis of biological purine molecules. Due to the instability of the proposed ligand, 5-phospho-D-ribosylamine, direct experiments to confirm this ligand have not yet been conducted (From Wikipedia)<sup></sup>.</font>
<p><br /></p>
            
> Gene association
        
<font size="4">All <I>Fibro-purF</I> motif RNA representatives where determinations can be made are found upstream of a purF gene, which codes for an enzyme, amidophosphoribosyltransferase, that catalyzes the first committed step in the purine biosynthesis pathway.<sup>[1-2]</sup>.</font>
<p><br /></p>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;">
<tr >
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_association/PRA_riboswitch_gene_association" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                
> Gene regulation
            
<font size="4"><p>Putative mechanisms for regulation of gene expression by PRA riboswitches. The Shine-Dalgarno sequence are shaded in orange<sup>[2]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/PRA_riboswitch_gene_regulation1.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<p><br /></p>
                    
<p class="header_box">Structure and Ligand recognition</p>
> 2D representation
        
<font size=4>Left: Consensus sequence and secondary structure model for the PRA riboswitch. <sup>[1-2]</sup>.</font><br>
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
                <img src="/images/2D/PRA_riboswitch_2D1.svg" alt="drawing" style="width:400px" />
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
            
<font size=4>
<p>Chemical structures of PRA and C-PRA. In vitro experiments have corroborated the predicted structure, but no ligand has been established<sup>[3]</sup>.<br /><br /></p>
</font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;">
<tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/ligand_recognition/PRA_riboswitch_ligand_recognition.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                
<p class="header_box">References</p>
<p><br /></p>
            
<p><strong>[1]Detection of 224 candidate structured RNAs by comparative analysis of specific subsets of intergenic regions.</strong><br />
Weinberg, Z. et al<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/28977401/" target="_blank">Nucleic Acids Res. 45, (2017)</a><br /><br /></p>
                
<p><strong>[2]A rare bacterial RNA motif is implicated in the regulation of the purF gene whose encoded enzyme synthesizes phosphoribosylamine.</strong><br />
Malkowski, S. N., Atilho, R. M., Greenlee, E. B., Weinberg, C. E. & Breaker, R. R<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/32843366/" target="_blank">RNA 26, (2020)</a><br /><br /></p>
                