---
layout: post
title:  "c-AMP-GMP"
date:   2023-05-28 00:00:00
author: Yuhang Luo, Yuanlin He
permalink: /docs/c-AMP-GMP/
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
  <p style="font-size: 16px">Click into different sections:</p>
  
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
<p><br /></p>
        
<p class="header_box" id="description">Description</p>
<font >c-AMP-GMP riboswitches (also known as c-GAMP riboswitches) form a class of ribose switches that bind specifically to cyclic AMP-GMP. Previously annotated as the c-di-GMP-I ribose switch, its mutant cyclic AMP-GMP riboswitch is able to bind to a second messenger, c-AMP-GMP. The cyclic AMP-GMP ribose switch recognizes c-AMP-GMP and controls a group of genes important for utilizing iron oxide (III) in external power generation.Approximately 6,800 sequences conform to the c-di-GMP-I riboswitch class consensus , which was formerly called the Genes for the Environment, for Membranes and for Motility (GEMM) motif .Predominantly found in species of Bacillales, Clostridia, Deltaproteobacteria, and Gammaproteobacteria , the vastmajority have aptamer sequences and gene associations that aretypical for c-di-GMP binding and control<sup>[1-2, 4-5]</sup>.</font>
<p><br /></p>
            
> Gene association
        
<font >This figure depicts genes predicted to be regulated by the c-AMP-GMP riboswitch<sup>[2]</sup>.</font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;">
<tr >
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_association/c-AMP-GMP_riboswitch_gene_association.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                
> Gene regulation
            
<font ><p>Putative mechanisms for regulation of gene expression by c-AMP-GMP riboswitches<sup>[4]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/c-AMP-GMP_riboswitch_gene_regulation.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<p><br /></p>
                    
<p class="header_box" id="Structure and Ligand recognition">Structure and Ligand recognition</p>
> 2D representation
        
<font >Left: Consensus sequence and secondary structure model for the c-AMP-GMP riboswitch. Right: Secondary structure depictions of the c-AMP-GMP riboswitch according to PDB ID: 4YAZ<sup>[3]</sup>.</font><br>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
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
                <img src="/images/2D/c-AMP-GMP_riboswitch_2D1.svg" alt="drawing" style="width:400px" />
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
                <img src="/images/2D/c-AMP-GMP_riboswitch_2D2.svg" alt="drawing" style="width:400px" />
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
      panzoom2.zoom(0.8);
    </script>
</td>
</tr></table><br>
<p><br /></p>
                    
> 3D visualisation
            
<font >The overall structure of the c-GAMP riboswitch was generated from PDB ID: 4YAZ at  2.00 Å resolution bound with c-GAMP. c-GAMP (shown in sticks) is labeled in red <sup>[3]</sup>.</font>
  <table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/c-AMP-GMP_riboswitch_3D.svg" alt="drawing" style="width:400px;height:400px;margin-top: 0px;margin-bottom: 0px;" >
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
}，
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
    </script>
    </body>
    </html></td>
  </tr></table><br>
  <p><br /></p>
                
> Binding pocket
                
<font ><p>Left: Surface representation of the binding pocket of the c-GAMP riboswitch generated from PDB ID: 4YAZ. c-GAMP (shown in sticks) is labeled in red. Right: The hydrogen bonds of the binding sites of the c-GAMP riboswitch bound with c-GAMP<sup>[3]</sup>.<br /></p></font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/c-AMP-GMP_riboswitch_binding_pockets1.svg" alt="drawing" style="width:400px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/c-AMP-GMP_riboswitch_binding_pockets2.svg" alt="drawing" style="width:400px"  px="" /></td>
</tr>
</table>
<p><br /></p>
                    
> Ligand recognition
            
<font >
<p>Chemical structures of ppGpp and its analogs. The apparent K<sub>D</sub> is shown on bottom<sup>[3]</sup>.<br /><br /></p>
</font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;">
<tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/ligand_recognition/c-AMP-GMP_riboswitch_ligand_recognition.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                
<p class="header_box" id="references">References</p>
            
<p><strong>[1] Identification of 22 candidate structured RNAs in bacteria using the CMfinder comparative genomics pipeline.</strong><br />
Weinberg, Z. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/17621584/" target="_blank">Nucleic Acids Res. 35, 4809–4819 (2007).</a>
<br /><br /></p>
                
<p><strong>[2] Control of bacterial exoelectrogenesis by c-AMP-GMP.</strong><br />
Nelson, J. W. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/25848023/" target="_blank">Proc. Natl. Acad. Sci. U. S. A. 112, 5389–5394 (2015).</a>
<br /><br /></p>
                
<p><strong>[3] Structural basis for molecular discrimination by a 3',3'-cGAMP sensing riboswitch.</strong><br />
Ren, A. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/25818298/" target="_blank">Cell Rep. 11, 1–12 (2015).</a>
<br /><br /></p>
                
<p><strong>[4] GEMM-I riboswitches from Geobacter sense the bacterial second messenger cyclic AMP-GMP.</strong><br />
Kellenberger, C. A. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/25848022/" target="_blank">Proc. Natl. Acad. Sci. U. S. A. 112, 5383–5388 (2015).</a>
<br /><br /></p>
                
<p><strong>[5] Adenine protonation enables cyclic-di-GMP binding to cyclic-GAMP sensing riboswitches.</strong><br />
Keller, H., Weickhmann, A. K., Bock, T. & Wöhnert, J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/30006500/" target="_blank">RNA 24, 1390–1402 (2018).</a>
<br /><br /></p>
                
<p><strong>[6] Structural Studies of the 3',3'-cGAMP Riboswitch Induced by Cognate and Noncognate Ligands Using Molecular Dynamics Simulation.</strong><br />
Li, C., Zhao, X., Zhu, X., Xie, P. & Chen, G.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/30423927/" target="_blank">Int. J. Mol. Sci. 19, (2018).</a>
<br /><br /></p>
                
<p><strong>[7] The Signaling Pathway That cGAMP Riboswitches Found: Analysis and Application of Riboswitches to Study cGAMP Signaling in Geobacter sulfurreducens.</strong><br />
Tan, Z. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/35163114/" target="_blank">Int. J. Mol. Sci. 23, (2022).</a>
<br /><br /></p>
                