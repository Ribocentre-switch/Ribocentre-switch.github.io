---
layout: post
title:  "NAD<sup>+</sup>-II"
date:   2023-05-15 00:00:00
author: Xuemei Peng, Xiaoxue Chen
permalink: /docs/NAD2/
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
      font-weight: bold;
      border: 1px solid #005826;
      border-radius: 5px;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
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
       <p >Discovery of NAD<sup>+</sup>-II riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/33970790/" target="_blank">2021</a><sup>[1]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Biochemical validation of NAD<sup>+</sup>-II riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/33087526/" target="_blank">2021</a><sup>[2]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Crystal structure of NAD<sup>+</sup>-II riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/36610789/" target="_blank">2023</a><sup>[3]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Crystal structure of NAD<sup>+</sup>-II riboswitch reveal two distinct ligand-binding pockets</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/36840714/" target="_blank">2023</a><sup>[4]</sup></div>
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
<p><br /></p>
         
<p class="header_box" id="description">Description</p>
<font >NAD<sup>+</sup>-II riboswitch is the second class of riboswitches that recognize NAD<sup>+</sup>. It is usually associated with pnuC genes, and PnuC proteins are known to transport nicotinamide riboside (NR), which is a component of the ubiquitous and abundant enzyme cofactor nicotinamide adenine dinucleotide (NAD<sup>+</sup>). Thus, “pnuC motif” was inferred to function as aptamers for a novel class of NAD<sup>+</sup>-sensing riboswitches<sup></sup>.</font>
<p><br /></p>
             
> Gene association
            
<font >Schematic representation of pnuC as a NR transporter involved in NAD+ synthesis. NAD+-II riboswitch representatives are found exclusively upstream of pnuC genes<sup>[2]</sup>.</font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;">
<tr >
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_association/NAD+-II_riboswitch_gene_association.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                 
> Gene regulation
                
<font ><p>Potential mechanism of translation regulation by the NAD<sup>+</sup>-II riboswitch.The ribosome binding site (RBS) is showed on green<sup>[4]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/NAD+-II_gene_regulation.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<p><br /></p>
                         
<p class="header_box" id="Structure and Ligand recognition">Structure and Ligand recognition</p>
> 2D representation
        
<font >(Left) Consensus sequence and secondary structure model for the NAD<sup>+</sup>-II riboswitch. (Right) Secondary structure depictions of the NAD<sup>+</sup>-II riboswitch according to PDB ID:8I3Z<sup>[2,4]</sup>.</font><br>
<html>
<div>
    <div class="entry-content clearfix" itemprop="articleBody description">
        <div style="display: flex; justify-content: center;">
        <div>
        <div id="image-caption" style="text-align: left; margin-left: 20px;"></div>
            <table class="clear" cellspacing="5" style="border-spacing: 0; margin: 0 auto;">
                <tr>
                    <td style="border: 1px solid black;width:640px">
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
                            <img id="image-a0" src="/images/2D/NAD+-II_riboswitch_2D.svg" width="160" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="big.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage0('/images/2D/NAD+-II_riboswitch_2D.svg');">&lt;&lt; Show big</a>
                            </div>
                        </div>
                        <div class="image-wrapper" >
                            <img id="image-b" src="/images/2D/NAD+-II_riboswitch_2D2.svg" width="160" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="down.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage0('/images/2D/NAD+-II_riboswitch_2D2.svg');">&lt;&lt; Show big</a>
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
        width: 600px;
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
<p><br></p>
                     
> 3D visualisation
                
<font >Crystal structure of NAD<sup>+</sup>-II riboswitch <sup>[3]</sup>.</font>
  <table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/NAD+-II_riboswitvh_3D.svg" alt="drawing" style="width:400px;height:400px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>PDBe Molstar</title>
      <!-- Molstar CSS & JS -->
      <link rel="stylesheet" type="text/css" href="https://www.ebi.ac.uk/pdbe/pdb-component-library/css/pdbe-molstar-1.2.1.css">
      <script src="https://www.ebi.ac.uk/pdbe/pdb-component-library/js/pdbe-molstar-plugin-1.2.1.js"></script>
        <style>
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }
          .msp-plugin ::-webkit-scrollbar-thumb {
              background-color: #474748  !important;
          }
          .viewerSection1 {
            padding-top: 0px;
          }
          .controlsSection1 {
            width: 300px;
              display: flex;
              float:left;
              padding: 0px 0 0 0;
              height:25px;
            }
            .controlBox1 {
              border: 0px solid lightgray;
              padding: 0px;
              margin-bottom: 0px;
            }
          #myViewer1{
            float:left;
            width:400px;
            height: 400px;
            position:relative;
          }
        </style>
    </head>
    <body onload="customize()">
        <div class="controlsSection1">
            <button onclick="
              var selectSections1 = [
                {
  struct_asym_id: 'A', 
  start_residue_number:1, 
  end_residue_number:1, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:2, 
  end_residue_number:5, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:6, 
  end_residue_number:9, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:10, 
  end_residue_number:14, 
  color:{r:255,g:223,b:92}
},
{
  struct_asym_id: 'A', 
  start_residue_number:15, 
  end_residue_number:18, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:19, 
  end_residue_number:23, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'A', 
  start_residue_number:24, 
  end_residue_number:24, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'B', 
  start_residue_number:26, 
  end_residue_number:30, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'B', 
  start_residue_number:31, 
  end_residue_number:33, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'B', 
  start_residue_number:34, 
  end_residue_number:37, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'B', 
  start_residue_number:38, 
  end_residue_number:40, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'B', 
  start_residue_number:41, 
  end_residue_number:45, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'B', 
  start_residue_number:46, 
  end_residue_number:50, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'B', 
  start_residue_number:51, 
  end_residue_number:54, 
  color:{r:255,g:223,b:92}
},
{
  struct_asym_id: 'B', 
  start_residue_number:55, 
  end_residue_number:56, 
  color:{r:194,g:194,b:255}
},{
  struct_asym_id: 'B', 
  start_residue_number:101, 
  end_residue_number:102, 
  color:{r:255,g:11,b:12}
},
              ]
            viewerInstance1.visual.select({ data: selectSections1, nonSelectedColor: {r:255,g:255,b:255}})" style="float:right;height:25px;width: 120px;">Color Selection</button><br><br>
          <button button style="float: left;height:25px;width: 120px;" onclick="viewerInstance1.visual.clearSelection()">Clear Selection</button><br><br>
      </div>
    <div class="viewerSection1">
    <!-- Molstar container -->
      <div id="myViewer1"></div>
    </div>
    <script>
      var viewerInstance1 = new PDBeMolstarPlugin();
      var options1 = {
        customData:{
        url:'/docs/pdbfiles/8I3Z.pdb',
        format: 'pdb'},
        expanded: false,
        hideControls: true,
        bgColor: {r:255, g:255, b:255},
        }
      var viewerContainer1 = document.getElementById('myViewer1');
      viewerInstance1.render(viewerContainer1, options1);
    </script>
    </body>
    </html></td>
  </tr></table><br>
  <p><br /></p>
                 
> Binding pocket
                    
<font ><p>(Left) Surface representation of the binding site 1 and 2 of NAD-II riboswitch generated from PDB ID:8I3Z. NMN (shown in sticks) is labeled in red. (Right) The hydrogen bonds of the two binding sites of the NAD-II riboswitch bound with NMN<sup>[4]</sup>.<br /></p></font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/NAD+-II_riboswitch_binding_pockets1.svg" alt="drawing" style="width:400px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/NAD+-II_riboswitch_binding_pockets2.svg" alt="drawing" style="width:400px"  px="" /></td>
</tr>
</table>
<p><br /></p>
                     
<p class="header_box" id="references">References</p>
                
<p><strong>[1] Comprehensive discovery of novel structured noncoding RNAs in 26 bacterial genomes</strong><br />
Brewer, K. I. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/33970790/" target="_blank">RNA Biol. 18, 2417–2432 (2021).</a>
<br /><br /></p>
                
<p><strong>[2] A second riboswitch class for the enzyme cofactor NAD</strong><br />
Panchapakesan, S. S. S., Corey, L., Malkowski, S. N., Higgs, G. & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/33087526/" target="_blank">RNA 27, 99–105 (2021).</a>
<br /><br /></p>
                
<p><strong>[3] Structure-based investigations of the NAD<sup>+</sup>-II riboswitch</strong><br />
Xu, X. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/36610789/" target="_blank">Nucleic Acids Res. 51, 54–67 (2023).</a>
<br /><br /></p>
                
<p><strong>[4] Crystal structures of the NAD<sup>+</sup>-II riboswitch reveal two distinct ligand-binding pockets</strong><br />
Peng, X., Liao, W., Lin, X., Lilley, D. M. J. & Huang, L.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/36840714/" target="_blank">Nucleic Acids Res. 51, 2904–2914 (2023).</a>
<br /><br /></p>
                