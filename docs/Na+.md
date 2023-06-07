---
layout: post
title:  "Na<sup>+</sup>"
date:   2023-05-23 00:00:00
author: Yuanlin He, Xiaowei Lin
permalink: /docs/Na<sup>+</sup>/
---
<p style="font-size: 24px"><strong>Rfam ID: [RF03071](https://rfam.xfam.org/family/RF03071,target="_blank")(Na+ riboswitch (DUF1646 RNA))</strong> <br /></p>

<br />
<html>
<head>
  <title>横向排列的点击按钮</title>
  <style>
    /* 按钮容器样式 */
    .button-container {
      display: flex;
      justify-content: left;
      align-items: center;
      height: 50px;
    }
    
    /* 按钮样式 */
    .button {
      display: block;
      padding: 10px;
      margin-right: 10px;
      text-align: center;
      background-color: #efefef;
      color: #005826;
      text-decoration: none;
      font-weight: bold;
    }
    
    /* 鼠标悬停样式 */
    .button:hover {
      background-color: #999;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <p style="font-size: 24px">Click into different sections:</p>
  
  <div class="button-container">
    <a class="button" href="#timeline" style="bold">Timeline</a>
    <a class="button" href="#description">Description</a>
    <a class="button" href="#Structure and Ligand recognition">Structure&recognition</a>
    <a class="button" href="#references">References</a>
  </div>
</body>
</html>

<html lang="zh-cn">
<head>
<meta charset="utf-8"> 
<style>
  .header_box {
    border: none;
    background: #efefef;
    font-size:28px
  }
  blockquote {
  margin: 0 0 0px;
  }
</style>
</head>
<p><br /></p>
<p class="header_box">Timeline</p>
<div class="timeline" id="timeline">
  <div class="year">
    <div class="inner">
      <span>Start</span>
    </div>
  </div>
  <ul class="days">
          
    <li class="day">
     <div class="events">
       <p >Discovery of DUF1646 motif</p>
       <div class="date"><ali href="https://pubmed.ncbi.nlm.nih.gov/28977401/" target="_blank">2017</ali><sup>[1]</sup></div>
     </div>
    </li>
        

    <li class="day">
     <div class="events">
       <p >Identify the DUF1646 motif as a Na+ riboswitch</p>
       <div class="date"><ali href="https://pubmed.ncbi.nlm.nih.gov/35879547/" target="_blank">2022</ali><sup>[2]</sup></div>
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
<p><br /></p>
        
<p class="header_box" id="description">Description</p>
<font size="4">The DUF1646 RNA motif is a conserved RNA structure that was discovered by bioinformatics. One of the two DUF1646 RNAs in <i>Enterococcus faecalis</i> was independently detected by term-seq. Data from both discoveries suggest that DUF1646 RNAs are cis-regulatory RNAss, and that at least some DUF1646 RNAs use Rho-independent transcription terminators as their mechanism to regulate gene expression.
The genes apparently regulated by DUF1646 RNAs are often related to the transportation of sodium ions. Among the two most commonly regulated gene classes are those encoding sodium/proton antiporters whose relationship to sodium ion transport is obvious. The other highly common gene class encodes proteins containing a DUF1646 domain, whose biochemical and biological function is unknown. Also regulated are genes encoding proteins that transport sodium using ATP, as well as genes encoding oxaloacetate carboxyltransferase. The reaction catalyzed by oxaloacetate carboxyltransferase is tied to transporting a sodium ion across the membrane. DUF1646 RNAs rarely occur upstream of c-di-AMP riboswitches, and in these cases they apparently regulate genes that are typical for c-di-AMP signalling. In these cases, the association to sodium is at least not direct.
A DUF1646 RNA occurs upstream of an operon in <i>Enterococcus</i> hirae that was shown to regulate the downstream genes based on sodium ion concentrations. However, it is unclear whether this DUF1646 RNA participates in sodium-based gene regulation (From Wikipedia)<sup></sup>.</font>
<p><br /></p>
            
> Gene association
        
<font size="4">Existing annotations of the protein products whose genes are associated with DUF1646 motif RNAs<sup>[2]</sup>.</font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;">
<tr >
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_association/Na+_riboswitch_gene_association.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                
> Gene regulation
            
<p class="header_box" id="Structure and Ligand recognition">Structure and Ligand recognition</p>
> 2D representation
        
<font size=4>Consensus secondary structure and sequence conservation of DUF1646 RNA<sup>[2]</sup>.</font><br>
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
                <img src="/images/2D/Na+_riboswitch_2D1.svg" alt="drawing" style="width:40px" />
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
                <img src="/images/2D/" alt="drawing" style="width:40px" />
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
<p><br /></p>
                
> 3D visualisation
            
> Binding pocket
                
> Ligand recognition
            
<font size=4>
<p>Na+ riboswitches exhibit dissociation constants in the low mM range, and strongly reject all other alkali and alkaline earth ions<sup>[2]</sup>.<br /><br /></p>
</font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;">
<tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/ligand_recognition/" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                
<p class="header_box" id="references">References</p>
            
<p><strong>[1] Detection of 224 candidate structured RNAs by comparative analysis of specific subsets of intergenic regions.</strong><br />
Weinberg, Z. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/28977401/" target="_blank">Nucleic Acids Res. 45, 10811–10823 (2017).</a>
<br /><br /></p>
                
<p><strong>[2] Na riboswitches regulate genes for diverse physiological processes in bacteria.</strong><br />
White, N., Sadeeshkumar, H., Sun, A., Sudarsan, N. & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/35879547/" target="_blank">Nat. Chem. Biol. 18, 878–885 (2022).</a>
<br /><br /></p>
                