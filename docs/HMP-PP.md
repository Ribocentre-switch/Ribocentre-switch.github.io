---
layout: post
title:  "HMP-PP"
date:   2023-03-19 00:00:00
author: Xiaowei Lin, Yuanyin Huang
permalink: /docs/HMP-PP/
---
<p style="font-size: 24px"><strong>Rfam ID: [nan](https://rfam.xfam.org/family/nan,target="_blank")</strong> (nan)<br /></p>
 
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
      font-size:24px;
      margin-right: 10px;
      text-align: center;
      background-color: #efefef;
      color: #005826;
      text-decoration: none;
      border: 1px solid #005826;
      border-radius: 5px;
    }
    
    /* 鼠标悬停样式 */
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
       <p >Discovery of HMP-PP riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/30902049/" target="_blank">2019</a><sup>[2]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Bioinformatic and biochemical validation of the ligand for the HMP-PP riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/30950790/" target="_blank">2019</a><sup>[3]</sup></div>
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
<font >HMP-PP riboswitches are a class of homologous RNAs in certain bacteria that function as sensors of the thiamin precursor HMP-PP, which is fused with HET-P ultimately to form the final active coenzyme thiamin pyrophosphate (TPP). The HMP-PP riboswitch was initially named as the ‘thiS motif' because of its frequent association with a gene coding for the ThiS protein, which delivers sulfur to form the thiazole moiety of the thiamin precursor HET-P, which was firstly reported by using a computational approach to identify new riboswitches in bacteria in 2019. Unlike with many other riboswitches,the small ligand sensing aptamer of the HMP-PP riboswitch was embedded within a terminator, rather than being a separate entity. The 3D structure of the HMP-PP riboswitch has not been solved yet<sup>[2-3]</sup>.</font>
<p><br /></p>
             
> Gene association
            
<font><p>Typical biosynthetic pathways for the pyrimidine and thiazole moieties of thiamin, and their eventual conversion into the enzyme cofactor thiamin pyrophosphate (TPP). Genes coding for the enzymes involved in HET transport and catalysis of various biosynthetic steps are showed. The genes colored in red are associated with the HMP-PP riboswitch<sup>[1-3]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
<tr >
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_association/HMP-PP_riboswitch_gene_association.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                 
> Gene regulation
                
<font><p>Potential mechanism of transcription termination regulation for the HMP-PP riboswitch. The shaded nucleotides highlight possible base-pairs of the predicted pseudoknot. Complementary sequences and alternate base-pairing are shown in blue<sup>[3]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/HMP-PP_riboswitch_gene_regulation.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<br><br>
                         
<p class="header_box" id="Structure and Ligand recognition">Structure and Ligand recognition</p>
> 2D representation
        
<font><p>Left: The consensus models and two possible secondary structure models based on 400 representatives for the HMP-PP riboswitch. Right: Sequence and predicted secondary structure of the HMP-PP riboswitch of <i>C. sp.</i> Maddingley (depicted in presumed ‘ON' state), where the shaded nucleotides highlight possible base-pairs of the predicted pseudoknot. Red nucleotides are >97% conserved as depicted in the HMP-PP riboswitch consensus model<sup>[2-3]</sup>.</p><br></font>
<html>
<div>
    <div class="entry-content clearfix" itemprop="articleBody description" style="overflow: auto;">
        <div style="display: flex; justify-content: center;">
        <div>
        <div id="image-caption" style="text-align: left; margin-left: 20px;"></div>
            <table class="clear" cellspacing="5" style="border-spacing: 0; margin: 0 auto;">
                <tr>
                    <td style="border: 1px solid black;width:800px">
                        <div id="layer_pdb" style="display: block">
                            <a id="image-link0" href="#" title="">
                                <div id="zoom-wrapper0" class="zoom-wrapper0">
                                    <div id="zoom-area0" class="zoom-area0">
                                        <img id="image-preview0" src="#" height="500" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </td>
                    <td class="left" style="border: none; padding: 0; vertical-align: top">
                        <div class="image-wrapper" style="margin-bottom: 40px;">
                            <img id="image-a0" src="/images/2D/HMP-PP_riboswitch_2D1.svg" width="200" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="big.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage0('/images/2D/HMP-PP_riboswitch_2D1.svg');">&lt;&lt; Show big</a>
                            </div>
                        </div>
                        <div class="image-wrapper" >
                            <img id="image-b" src="/images/2D/HMP-PP_riboswitch_2D2.svg" width="200" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="down.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage0('/images/2D/HMP-PP_riboswitch_2D2.svg');">&lt;&lt; Show big</a>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        </div>
    </div>
</div>

<style>
    .image-wrapper {
        display: block;
        text-align: center;
        margin-bottom: 20px;
    }

    .button-wrapper {
        text-align: left;
    }

    .btn {
      
      padding: 10px;
      font-size:16px;
      margin-right: 10px;
      text-align: left;
      background-color: #efefef;
      color: #005826;
      text-decoration: none;
      font-weight: bold;
      border: 1px solid #005826;
      border-radius: 5px;
      
    }
    /* 鼠标悬停样式 */
    .btn:hover {
      color: #005826;
      background-color: #999;
      cursor: pointer;
    }
    
    

    .zoom-wrapper0 {
        width: 800px;
        border: 1px solid #fff;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
</style>

<script src="https://www.ribocentre.org/js/panzoom.js"></script>
<script type="text/javascript">
    function showImage0(imageUrl) {
        var imagePreview = document.getElementById("image-preview0");
        var imageLink = document.getElementById("image-link0");
        var imageCaption = document.getElementById("image-caption");

        imagePreview.src = imageUrl;
        imageLink.href = imageUrl;

       
    }

    window.addEventListener('DOMContentLoaded', (event) => {
        var imagePreview = document.getElementById("image-preview0");
        var imageLink = document.getElementById("image-link0");
        var rightImage = document.getElementById("image-a0");

        imagePreview.src = rightImage.src;
        imageLink.href = rightImage.src;
        
        var zoomArea = document.getElementById("zoom-area0");
        var panzoom = Panzoom(zoomArea, {
            maxScale: 6,
        });
        zoomArea.addEventListener("wheel", function(e) {
            e.preventDefault();
            panzoom.zoomWithWheel(e);
        });
        panzoom.zoom(0.8);
    });
</script>
</html>
 <p><br /></p>
                     
> Ligand recognition
                

<font><p>Chemical structures of hydroxymethyl-pyrimidine pyrophosphate (HMP-PP) and its precursors. The apparent K<sub>D</sub>  of each compound is shown on bottom<sup>[3]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
<tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/ligand_recognition/HMP-PP_riboswitch_ligand_recognition.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<br /><br>
                 
<p class="header_box" id="references">References</p>
                
<font><strong>[1] Thiamin biosynthesis in prokaryotes.</strong></font>
Begley, T. P. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/10382260/" target="_blank">Arch. Microbiol. 171, (1999).</a>
<br />
                
<font><strong>[2] Genome-wide discovery of structured noncoding RNAs in bacteria.</strong></font>
Stav, S. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/30902049/" target="_blank">BMC Microbiol. 19, (2019).</a>
<br />
                
<font><strong>[3] A bacterial riboswitch class for the thiamin precursor HMP-PP employs a terminator-embedded aptamer.</strong></font>
Atilho, R. M., Mirihana, A. G., Greenlee, E. B., Knecht, K. M. & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/30950790/" target="_blank">Elife 8, (2019).</a>
<br />
                