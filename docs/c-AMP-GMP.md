---
layout: post
title:  "c-AMP-GMP"
date:   2023-05-28 00:00:00
author: Yuhang Luo, Yuanlin He
permalink: /docs/c-AMP-GMP/
---
<p style="font-size: 24px"><strong>Rfam ID: <a href="https://rfam.xfam.org/family/nan" target="_blank">nan</a></strong> (nan)<br /></p>
 
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
       <p >Discovery of GEMM motif</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/17621584/" target="_blank">2007</a><sup>[1]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Discovery of cGAMP riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/25848023/" target="_blank">2015</a><sup>[2]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Structure of cGAMP riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/25818298/" target="_blank">2015</a><sup>[3]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Visualization of cAG signaling in live bacteria using the GEMM Ib riboswitch (cGAMP riboswitch)</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/25848022/" target="_blank">2015</a><sup>[4]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Adenine protonation enables cyclic-di-GMP binding to cyclic-GAMP sensing riboswitches</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/30006500/" target="_blank">2018</a><sup>[5]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Structural features of 3', 3'-cGAMP ligand-induced 3', 3'-cGAMP riboswitches and specificity of ligand recognition</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/30423927/" target="_blank">2018</a><sup>[6]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >The Signaling Pathway That cGAMP Riboswitches Found</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/35163114/" target="_blank">2022</a><sup>[7]</sup></div>
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
<font >c-AMP-GMP riboswitches (also known as c-GAMP riboswitches) form a class of ribose switches that bind specifically to cyclic AMP-GMP. Previously annotated as the c-di-GMP-I ribose switch, its mutant cyclic AMP-GMP riboswitch is able to bind to a second messenger, c-AMP-GMP. The cyclic AMP-GMP ribose switch recognizes c-AMP-GMP and controls a group of genes important for utilizing iron oxide (III) in external power generation.Approximately 6,800 sequences conform to the c-di-GMP-I riboswitch class consensus , which was formerly called the Genes for the Environment, for Membranes and for Motility (GEMM) motif .Predominantly found in species of Bacillales, Clostridia, Deltaproteobacteria, and Gammaproteobacteria , the vastmajority have aptamer sequences and gene associations that aretypical for c-di-GMP binding and control<sup>[1-2, 4-5]</sup>.</font>
<p><br /></p>
             
> Gene association
            
<font><p>This figure depicts genes predicted to be regulated by the c-AMP-GMP riboswitch<sup>[2]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
<tr >
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_association/c-AMP-GMP_riboswitch_gene_association.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                 
> Gene regulation
                
<font><p>Putative mechanisms for regulation of gene expression by c-AMP-GMP riboswitches<sup>[4]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/c-AMP-GMP_riboswitch_gene_regulation.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<br><br>
                         
<p class="header_box" id="Structure and Ligand recognition">Structure and Ligand recognition</p>
> 2D representation
        
<font><p>Top: Consensus sequence and secondary structure model for the c-AMP-GMP riboswitch. Bottom: Secondary structure depictions of the c-AMP-GMP riboswitch according to PDB ID: 4YAZ<sup>[3]</sup>.</p><br></font>
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
                            <img id="image-a0" src="/images/2D/c-AMP-GMP_riboswitch_2D1.svg" width="200" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="big.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage0('/images/2D/c-AMP-GMP_riboswitch_2D1.svg');">&lt;&lt; Show big</a>
                            </div>
                        </div>
                        <div class="image-wrapper" >
                            <img id="image-b" src="/images/2D/c-AMP-GMP_riboswitch_2D2.svg" width="200" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="down.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage0('/images/2D/c-AMP-GMP_riboswitch_2D2.svg');">&lt;&lt; Show big</a>
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
                     
> 3D visualisation
                
<font >The overall structure of the c-AMP-GMP riboswitch was generated from PDB ID: 4YAZ at  2.00 Å resolution bound with c-AMP-GMP. c-AMP-GMP (shown in sticks) is labeled in red <sup>[3]</sup>.</font>
<div ><font ><p style="text-align:right;margin-bottom: 0px;">(Clicking the "Settings/Controls info" to turn Spin off)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></font>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/c-AMP-GMP_riboswitch_3D.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
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
  end_residue_number:8, 
  color:{r:255,g:223,b:92}
},
{
  struct_asym_id: 'A', 
  start_residue_number:9, 
  end_residue_number:14, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:15, 
  end_residue_number:40, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:41, 
  end_residue_number:41, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:42, 
  end_residue_number:73, 
  color:{r:10,g:11,b:255}
}, 
 {
  struct_asym_id: 'A', 
  start_residue_number:74, 
  end_residue_number:75, 
  color:{r:194,g:194,b:255}
},{
  struct_asym_id: 'A', 
  start_residue_number:76, 
  end_residue_number:84, 
  color:{r:255,g:223,b:92}
},
{
  struct_asym_id: 'A', 
  start_residue_number:103, 
  end_residue_number:103, 
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
        url:'/docs/pdbfiles/4YAZ.pdb',
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
                 
> Binding pocket
                    
<font><p>Left: Surface representation of the binding pocket of the c-AMP-GMP riboswitch generated from PDB ID: 4YAZ. c-AMP-GMP (shown in sticks) is labeled in red. Right: The hydrogen bonds of the binding sites of the c-AMP-GMP riboswitch bound with c-AMP-GMP<sup>[3]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/c-AMP-GMP_riboswitch_binding_pockets1.svg" alt="drawing" style="width:500px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/c-AMP-GMP_riboswitch_binding_pockets2.svg" alt="drawing" style="width:500px"  px="" /></td>
</tr>
</table>
<p><br /></p>
                     
> Ligand recognition
                

<font><p>Chemical structures of c-AMP-GMP and its analogs. The apparent K<sub>D</sub> is shown on bottom<sup>[3]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
<tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/ligand_recognition/c-AMP-GMP_riboswitch_ligand_recognition.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<br /><br>
                 
<p class="header_box" id="references">References</p>
                
<font><strong>[1] Identification of 22 candidate structured RNAs in bacteria using the CMfinder comparative genomics pipeline.</strong></font>
Weinberg, Z. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/17621584/" target="_blank">Nucleic Acids Res. 35, 4809–4819 (2007).</a>
<br />
                
<font><strong>[2] Control of bacterial exoelectrogenesis by c-AMP-GMP.</strong></font>
Nelson, J. W. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/25848023/" target="_blank">Proc. Natl. Acad. Sci. U. S. A. 112, 5389–5394 (2015).</a>
<br />
                
<font><strong>[3] Structural basis for molecular discrimination by a 3',3'-cGAMP sensing riboswitch.</strong></font>
Ren, A. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/25818298/" target="_blank">Cell Rep. 11, 1–12 (2015).</a>
<br />
                
<font><strong>[4] GEMM-I riboswitches from Geobacter sense the bacterial second messenger cyclic AMP-GMP.</strong></font>
Kellenberger, C. A. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/25848022/" target="_blank">Proc. Natl. Acad. Sci. U. S. A. 112, 5383–5388 (2015).</a>
<br />
                
<font><strong>[5] Adenine protonation enables cyclic-di-GMP binding to cyclic-GAMP sensing riboswitches.</strong></font>
Keller, H., Weickhmann, A. K., Bock, T. & Wöhnert, J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/30006500/" target="_blank">RNA 24, 1390–1402 (2018).</a>
<br />
                
<font><strong>[6] Structural Studies of the 3',3'-cGAMP Riboswitch Induced by Cognate and Noncognate Ligands Using Molecular Dynamics Simulation.</strong></font>
Li, C., Zhao, X., Zhu, X., Xie, P. & Chen, G.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/30423927/" target="_blank">Int. J. Mol. Sci. 19, (2018).</a>
<br />
                
<font><strong>[7] The Signaling Pathway That cGAMP Riboswitches Found: Analysis and Application of Riboswitches to Study cGAMP Signaling in Geobacter sulfurreducens.</strong></font>
Tan, Z. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/35163114/" target="_blank">Int. J. Mol. Sci. 23, (2022).</a>
<br />
                