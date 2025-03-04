---
layout: post
title:  "THF"
date:   2023-04-05 00:00:00
author: Xiaowei Lin, Yuanyin Huang
permalink: /docs/THF_original/
---
<p style="font-size: 24px"><strong>Rfam ID: <a href="https://rfam.xfam.org/family/RF01831" target="_blank">RF01831</a></strong> (THF riboswitch)<br /></p>
<p style="font-size: 24px"><strong>&emsp;&emsp;&emsp;&emsp;<a href="https://rfam.xfam.org/family/RF02977" target="_blank">RF02977</a></strong> (<i>folE</i> RNA) <br /></p>
 
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
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/20659680/" target="_blank">2010</a><sup><a href="#ref1">[1]</a></sup>&emsp;Discovery of THF-I riboswitch</p>       
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/21873197/" target="_blank">2011</a><sup>[2]</sup>&emsp;Single binding site of THF-I riboswitch</p>
       
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Two binding sites of THF-I riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/21906956/" target="_blank">2011</a><sup>[3]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >The correlation between binding affinity and regulation</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/24388757/" target="_blank">2014</a><sup>[4]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Discovery of THF-II riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/28977401/" target="_blank">2017</a><sup>[5]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Biochemical validation of THF-II riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/31186369/" target="_blank">2019</a><sup>[6]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Molecular basis for gene regulation</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/33571639/" target="_blank">2021</a><sup>[7]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Structure of THF-II riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/36620887/" target="_blank">2023</a><sup>[8]</sup></div>
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
<font >Tetrahydrofolate riboswitches are a class of homologous RNAs in certain bacteria that bind tetrahydrofolate (THF). It is almost exclusively located in the probable 5' untranslated regions of protein-coding genes, and most of these genes are known to encode either folate transporters or enzymes involved in folate metabolism. For these reasons it was inferred that the RNAs function as riboswitches. THF riboswitches are found in a variety of Bacillota, specifically the <i>orders Clostridiales</i> and <i>Lactobacillales</i>, and more rarely in other lineages of bacteria. The THF riboswitch was one of many conserved RNA structures found in a project based on comparative genomics. The 3-d structure of the tetrahydrofolate riboswitch has been solved by separate groups using X-ray crystallography. These structures were deposited into the Protein Data Bank under accessions 3SD1 and 3SUX, with other entries containing variants.

The <i>folE</i> RNA motif, now known as the THF-II riboswitch, is a conserved RNA structure that was discovered by bioinformatics. <i>folE</i> motifs are found in Alphaproteobacteria. <i>folE</i> motif RNAs likely function as cis-regulatory elements, in view of their positions upstream of protein-coding genes. Instances of the <i>folE</i> RNA motif are often located nearby to the predicted Shine-Dalgarno sequence of the downstream gene. This arrangement is consistent with a model of cis-regulation where the RNA allosterically controls access to the Shine-Dalgarno sequence, thus regulating the gene translationally. All known <i>folE</i> RNAs are present upstream of genes encoding GTP cyclohydrolase I, which performs a step in folate metabolism. folE RNAs have been shown to bind tetrahydrofolate and related molecules, leading to their designation as a second structural class of tetrahydrofolate riboswitches, called THF-II riboswitches (From Wikipedia)<sup></sup>.</font>
<p><br /></p>
             
> Gene association
            
<font><p>Folate biosynthesis and uptake pathway. Genes under control of the THF-I (red bars) and THF-II (cyan bars) riboswitch are highlighted with relative frequency of regulatory interaction reflected by the heights of the bars<sup>[1,6]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
<tr >
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_association/THF_riboswitch_gene_association.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                 
> Gene regulation
                
<font><p>Potential mechanism of translation regulation by the THF-I riboswitch. The ribosome binding site (RBS) is showed on red<sup>[7]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/THF_riboswitch_gene_regulation1.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<br><br>
                        
<font><p>Potential mechanism of translation regulation by the THF-II riboswitch. The ribosome binding site (RBS) is showed on red<sup>[8]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/THF_riboswitch_gene_regulation2.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<br><br>
                         
<p class="header_box" id="Structure and Ligand recognition">Structure and Ligand recognition</p>
> 2D representation
        
<font><p>Top: Consensus sequence and secondary structure model for the THF-I riboswitch. Bottom: Secondary structure depictions of the THF-I riboswitch according to PDB ID: 4LVV. The two molecules of folinic acid (FA) observed in the crystal structure are denoted in red<sup></sup>.</p></font>
<font><p>5'-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA-3' (Sequence from bottom structure )</p><br></font>


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
                            <img id="image-a0" src="/images/2D/THF-I_riboswitch_2D1.svg" width="200" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="big.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage0('/images/2D/THF-I_riboswitch_2D1.svg');">&lt;&lt; Show big</a>
                            </div>
                        </div>
                        <div class="image-wrapper" >
                            <img id="image-b" src="/images/2D/THF-I_riboswitch_2D2.svg" width="200" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="down.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage0('/images/2D/THF-I_riboswitch_2D2.svg');">&lt;&lt; Show big</a>
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
                    
<font><p>Top: Consensus sequence and secondary structure model for the THF-II riboswitch. Bottom: Secondary structure depictions of the THF-II riboswitch according to PDB ID: 7WI9. Residues are numbered according to THF-II-loti<sub>62</sub> WT RNA. The ribosome binding site (RBS) is boxed in red<sup></sup>.</p></font>
<font><p>5'-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA-3' (Sequence from bottom structure )</p><br></font>
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
                            <a id="image-link1" href="#" title="">
                                <div id="zoom-wrapper1" class="zoom-wrapper1">
                                    <div id="zoom-area1" class="zoom-area1">
                                        <img id="image-preview1" src="#" height="500" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </td>
                    <td class="left" style="border: none; padding: 0; vertical-align: top">
                        <div class="image-wrapper" style="margin-bottom: 40px;">
                            <img id="image-a1" src="/images/2D/THF-II_riboswitch_2D1.svg" width="200" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="big.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage1('/images/2D/THF-II_riboswitch_2D1.svg');">&lt;&lt; Show big</a>
                            </div>
                        </div>
                        <div class="image-wrapper" >
                            <img id="image-b" src="/images/2D/THF-II_riboswitch_2D2.svg" width="200" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="down.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage1('/images/2D/THF-II_riboswitch_2D2.svg');">&lt;&lt; Show big</a>
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
    
    

    .zoom-wrapper1 {
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
    function showImage1(imageUrl) {
        var imagePreview = document.getElementById("image-preview1");
        var imageLink = document.getElementById("image-link1");
        var imageCaption = document.getElementById("image-caption");

        imagePreview.src = imageUrl;
        imageLink.href = imageUrl;

       
    }

    window.addEventListener('DOMContentLoaded', (event) => {
        var imagePreview = document.getElementById("image-preview1");
        var imageLink = document.getElementById("image-link1");
        var rightImage = document.getElementById("image-a1");

        imagePreview.src = rightImage.src;
        imageLink.href = rightImage.src;
        
        var zoomArea = document.getElementById("zoom-area1");
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
                     
> 3D visualisation
                
<font >The overall structure of the THF-I riboswitch was generated from PDB ID: 4LVV at 2.10 Å resolution bound with 6<i>S</i>-folinic acid. 6<i>S</i>-folinic acid (shown in sticks) is colored in red <sup>[4]</sup>.</font>
<div ><font ><p style="text-align:right;margin-bottom: 0px;">(Clicking the "Settings/Controls info" to turn Spin off)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></font>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/THF_riboswitch_3D1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
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
      <script src="/js/mol/ro_pdbe-molstar-plugin-1.2.1.js"></script>
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
            width:500px;
            height: 500px;
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
  end_residue_number:5, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'A', 
  start_residue_number:6, 
  end_residue_number:6, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'A', 
  start_residue_number:7, 
  end_residue_number:7, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:8, 
  end_residue_number:20, 
  color:{r:255,g:223,b:92}
},
{
  struct_asym_id: 'A', 
  start_residue_number:21, 
  end_residue_number:22, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:23, 
  end_residue_number:35, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:36, 
  end_residue_number:41, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'A', 
  start_residue_number:42, 
  end_residue_number:55, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:56, 
  end_residue_number:56, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:57, 
  end_residue_number:58, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:59, 
  end_residue_number:62, 
  color:{r:194,g:194,b:255}
}, 
{
  struct_asym_id: 'A', 
  start_residue_number:63, 
  end_residue_number:64, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:65, 
  end_residue_number:78, 
  color:{r:255,g:223,b:92}
},
{
  struct_asym_id: 'A', 
  start_residue_number:79, 
  end_residue_number:83, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'A', 
  start_residue_number:84, 
  end_residue_number:89, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'A', 
  start_residue_number:101, 
  end_residue_number:101, 
  color:{r:255,g:11,b:12}
},
{
  struct_asym_id: 'A', 
  start_residue_number:102, 
  end_residue_number:102, 
  color:{r:255,g:11,b:12}
}
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
        url:'/docs/pdbfiles/4lvv.pdb',
        format: 'pdb'},
        expanded: false,
        hideControls: true,
        bgColor: {r:255, g:255, b:255},
        }
      var viewerContainer1 = document.getElementById('myViewer1');
      viewerInstance1.render(viewerContainer1, options1);
  window.addEventListener('load', function() {
    var colorSelectionButton1 = document.querySelector('.controlsSection1 button');
    colorSelectionButton1.click();
  });


    </script>
    </body>
    </html></td>
  </tr></table><br>
  </div>
  <p><br /></p>
                
<font >The overall structure of the THF-II riboswitch was generated from PDB ID: 7WI9 at 2.98 Å resolution bound with THF. THF (shown in sticks) is colored in red <sup>[8]</sup>.</font>
<div ><font ><p style="text-align:right;margin-bottom: 0px;">(Clicking the "Settings/Controls info" to turn Spin off)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></font>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/THF_riboswitch_3D2.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
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
      <script src="/js/mol/ro_pdbe-molstar-plugin-1.2.1.js"></script>
        <style>
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }
          .msp-plugin ::-webkit-scrollbar-thumb {
              background-color: #474748  !important;
          }
          .viewerSection2 {
            padding-top: 0px;
          }
          .controlsSection2 {
            width: 300px;
              display: flex;
              float:left;
              padding: 0px 0 0 0;
              height:25px;
            }
            .controlBox2 {
              border: 0px solid lightgray;
              padding: 0px;
              margin-bottom: 0px;
            }
          #myViewer2{
            float:left;
            width:500px;
            height: 500px;
            position:relative;
          }
        </style>
    </head>
    <body onload="customize()">
        <div class="controlsSection2">
            <button onclick="
              var selectSections2 = [
                {
  struct_asym_id: 'V', 
  start_residue_number:6, 
  end_residue_number:17, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'V', 
  start_residue_number:18, 
  end_residue_number:24, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'V', 
  start_residue_number:25, 
  end_residue_number:43, 
  color:{r:255,g:135,b:10}
},
{
  struct_asym_id: 'V', 
  start_residue_number:44, 
  end_residue_number:44, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'V', 
  start_residue_number:45, 
  end_residue_number:56, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'V', 
  start_residue_number:101, 
  end_residue_number:101, 
  color:{r:255,g:11,b:12}
}
              ]
            viewerInstance2.visual.select({ data: selectSections2, nonSelectedColor: {r:255,g:255,b:255}})" style="float:right;height:25px;width: 120px;">Color Selection</button><br><br>
          <button button style="float: left;height:25px;width: 120px;" onclick="viewerInstance2.visual.clearSelection()">Clear Selection</button><br><br>
      </div>
    <div class="viewerSection2">
    <!-- Molstar container -->
      <div id="myViewer2"></div>
    </div>
    <script>
      var viewerInstance2 = new PDBeMolstarPlugin();
      var options2 = {
        customData:{
        url:'/docs/pdbfiles/7wi9.pdb',
        format: 'pdb'},
        expanded: false,
        hideControls: true,
        bgColor: {r:255, g:255, b:255},
        }
      var viewerContainer2 = document.getElementById('myViewer2');
      viewerInstance2.render(viewerContainer2, options2);
  window.addEventListener('load', function() {
    var colorSelectionButton2 = document.querySelector('.controlsSection2 button');
    colorSelectionButton2.click();
  });


    </script>
    </body>
    </html></td>
  </tr></table><br>
  </div>
  <p><br /></p>
                 
> Binding pocket
                    
<font><p>Left: Surface representation of th
e binding pocket of the THF-I riboswitch generated from PDB ID: 4LVV. 6<i>S</i>-folinic acid (6<i>S</i>-FA) (shown in sticks) is labeled in red. Right: The hydrogen bonds of two binding sites of the THF-I riboswitch bound with 6<i>S</i>-FA<sup>[4]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/THF_riboswitch_binding_pockets1.svg" alt="drawing" style="width:500px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/THF_riboswitch_binding_pockets2.svg" alt="drawing" style="width:500px"  px="" /></td>
</tr>
</table>
<p><br /></p>
                    
<font><p>Left: Surface representation of the binding pocket of the THF-II riboswitch generated from PDB ID: 7WI9. THF (shown in sticks) is labeled in red. Right: The hydrogen bonds of the binding site of the THF-II riboswitch bound with THF<sup>[8]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/THF_riboswitch_binding_pockets3.svg" alt="drawing" style="width:500px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/THF_riboswitch_binding_pockets4.svg" alt="drawing" style="width:500px"  px="" /></td>
</tr>
</table>
<p><br /></p>
                     
> Ligand recognition
                

<font><p>Chemical structures of tetrahydrofolate (THF) and its analogs. The apparent K<sub>D</sub> of each compound of THF-I and THF-II riboswitch is shown on bottom<sup>[1,4,6]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
<tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/ligand_recognition/THF_riboswitch_ligand_recognition.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<br /><br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] A eubacterial riboswitch class that senses the coenzyme tetrahydrofolate.</strong></font>
Ames, T. D., Rodionov, D. A., Weinberg, Z. & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/20659680/" target="_blank">Chem. Biol. 17, (2010).</a>
<br />
                
<font><strong>[2] Long-range pseudoknot interactions dictate the regulatory response in the tetrahydrofolate riboswitch.</strong></font>
Huang, L., Ishibe-Murakami, S., Patel, D. J. & Serganov, A.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/21873197/" target="_blank">Proc. Natl. Acad. Sci. U. S. A. 108, (2011).</a>
<br />
                
<font><strong>[3] The structure of a tetrahydrofolate-sensing riboswitch reveals two ligand binding sites in a single aptamer.</strong></font>
Trausch, J. J., Ceres, P., Reyes, F. E. & Batey, R. T.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/21906956/" target="_blank">Structure 19, (2011).</a>
<br />
                
<font><strong>[4] A disconnect between high-affinity binding and efficient regulation by antifolates and purines in the tetrahydrofolate riboswitch.</strong></font>
Trausch, J. J. & Batey, R. T.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/24388757/" target="_blank">Chem. Biol. 21, (2014).</a>
<br />
                
<font><strong>[5] Detection of 224 candidate structured RNAs by comparative analysis of specific subsets of intergenic regions.</strong></font>
Weinberg, Z. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/28977401/" target="_blank">Nucleic Acids Res. 45, (2017).</a>
<br />
                
<font><strong>[6] Biochemical validation of a second class of tetrahydrofolate riboswitches in bacteria.</strong></font>
Chen, X., Mirihana, A. G. & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/31186369/" target="_blank">RNA 25, (2019).</a>
<br />
                
<font><strong>[7] Tying the knot in the tetrahydrofolate (THF) riboswitch: A molecular basis for gene regulation.</strong></font>
Wilt, H. M., Yu, P., Tan, K., Wang, Y. X. & Stagno, J. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/33571639/" target="_blank">J. Struct. Biol. 213, (2021).</a>
<br />
                
<font><strong>[8] Structural insights into translation regulation by the THF-II riboswitch.</strong></font>
Xu, L., Xiao, Y., Zhang, J. & Fang, X.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/36620887/" target="_blank">Nucleic Acids Res. 51, (2023).</a>
<br />
                