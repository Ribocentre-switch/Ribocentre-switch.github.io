---
layout: post
title:  "Azaaromatic"
date:   2023-04-23 00:00:00
author: Yuanyin Huang, Xiaowei Lin
permalink: /docs/Azaaromatic/
---
<p style="font-size: 24px"><strong>Rfam ID: <a href="https://rfam.org/family/RF01764" target="_blank">RF01764</a></strong> (<i>yjdF</i> RNA)<br /></p>
 
<br />
<html>
<head>
  <title>Horizontally arranged click buttons</title>
  <style>
    /* Button Container Styles */
    .button-container {
      display: flex;
      justify-content: left;
      align-items: center;
      height: 50px;
    }
    
    /* Button Style */
    .button {
      display: block;
      padding: 10px;
      font-size:24px;
      margin-right: 10px;
      text-align: center;
      background-color: #efefef;
      color: #005826;
      text-decoration: none;
      border: 1px solid #005826;
      border-radius: 5px;
    }
    
    /* Mouse Hover Style */
    .button:hover {
      background-color: #999;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <p style="font-size: 16px">Click the buttons to navigate to different sections:</p>
  
  <div class="button-container">
    <a class="button" href="#timeline" >Timeline</a>
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
    font-size:24px
  }
  blockquote {
  margin: 0 0 0px;
  }
</style>
</head>
<p><br /></p>
<p class="header_box" id="timeline">Timeline</p>
<div class="timeline" >
  <div class="year">
    <div class="inner">
      <span>Start</span>
    </div>
  </div>
  <ul class="days">
          
    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/26843526/" target="_blank">2016</a><sup>[<a href="#ref1">1</a>]</sup>&emsp;Discovery of azaaromatic(<i>yjdF</i>) riboswitch</p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >The genetic regulation mechanism of azaaromatic riboswitch&emsp;<a href="https://pubmed.ncbi.nlm.nih.gov/29223402/" target="_blank">2018</a><sup>[<a href="#ref2">2</a>]</sup></p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/35427649/" target="_blank">2022</a><sup>[<a href="#ref3">3</a>]</sup>&emsp;Its tRNA-like fold generates from SAXS with bingding ligand</p>
     </div>
    </timelineli>
        

  </ul>
  <div class="year year--end">
    <div class="inner">
      <span>2023...</span>
    </div>
  </div>
</div>
</html>
<br><br>
         
<font ><p class="header_box" id="description">Description</p></font>
<font >The azaaromatic riboswitch was named <i>yjdF</i> RNA. The <i>yjdF</i> RNA motif is a conserved RNA structure identified using bioinformatics. Most <i>yjdF</i> RNAs are located in bacteria classified within the phylum Bacillota. A <i>yjdF</i> RNA is found in the presumed 5' untranslated region (5' UTR) of the <i>yjdF</i> gene in <i>Bacillus subtilis</i>, and almost all <i>yjdF</i> RNAs are found in the 5' UTRs of homologs of this gene. <i>yjdF</i> RNAs appear to function as riboswitches that sense azaaromatic compounds, although the precise compound or set of compounds that is sensed by this riboswitch in the cell remains unclear (From Wikipedia)<sup></sup>.</font>
<p><br /></p>
             
> Gene regulation
                
<font><p>Potential mechanism of translation regulation by azaaromatic riboswitch in <i>B. subtilis</i>. RBS denotes ribosome binding site. We present the  prototypical mechanism, but not all possible mechanisms<sup>[<a href="#ref2">2</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/Azaaromatic_riboswitch_gene_regulation.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<br><br>
                         
<p class="header_box" id="Structure and Ligand recognition">Structure and Ligand recognition</p>
> 2D representation
        
<font><p>Consensus sequence and secondary structure model for azaaromatic riboswitch<sup>[<a href="#ref1">1</a>]</sup>.</p></font><br>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    width: 800px;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
    <div class="main-container">
        <div class="zoom-wrapper1">
            <div class="zoom-area1">
                <img src="/images/2D/Azaaromatic_riboswitch_2D1.svg" alt="drawing" style="width:1000px" />
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
      panzoom1.zoom(0.8);
      </script>
</td>
</tr></table><br>
<p><br /></p>
                     
> Ligand recognition
                

<font><p>Chemical structures of azaaromatic. The apparent K<sub>D</sub> of each compound of azaaromatic riboswitch is shown on bottom. Refer to the corresponding references for comprehensive details regarding reaction conditions and species information in measuring the dissociation constant displayed below<sup>[<a href="#ref1">1</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
<tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/ligand_recognition/Azaaromatic_riboswitch_ligand_recognition.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<br /><br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] The yjdF riboswitch candidate regulates gene expression by binding diverse azaaromatic compounds.</strong></font><br />
Li, S., Hwang, X. Y., Stav, S. & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/26843526/" target="_blank">RNA 22, 530–541 (2016).</a>
<br />
                
<a id="ref2"></a><font><strong>[2] Genetic regulation mechanism of the yjdF riboswitch.</strong></font><br />
Gong, S., Wang, Y., Wang, Z., Wang, Y. & Zhang, W.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/29223402/" target="_blank">J. Theor. Biol. 439, 152–159 (2018).</a>
<br />
                
<a id="ref3"></a><font><strong>[3] The bacterial yjdF riboswitch regulates translation through its tRNA-like fold.</strong></font><br />
Trachman, R. J., 3rd, Passalacqua, L. F. M. & Ferré-D’Amaré, A. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/35427649/" target="_blank">J. Biol. Chem. 298, 101934 (2022).</a>
<br />
                