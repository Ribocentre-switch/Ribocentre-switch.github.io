---
layout: post
title:  "ppGpp"
date:   2023-05-28 00:00:00
author: Yuhang Luo, Yuanlin He
permalink: /docs/ppGpp/
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
       <p >Identification of ykkC motif that exhibit characteristics of riboswitch function</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/15096624/" target="_blank">2004</a><sup>[1]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Separation of ykkC subtype 2</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/27989440/" target="_blank">2017</a><sup>[2]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Further classification of ykkC subtype 2 as subtypes 2a through 2d</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/29504937/" target="_blank">2018</a><sup>[3]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Validation of ykkC subtype 2a as ppGpp riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/29784782/" target="_blank">2018</a><sup>4</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Crystal structures of the ppGpp riboswitch bound to ppGpp</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/30120360/" target="_blank">2018</a><sup>5</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Monitor cellular ppGpp accumulation by ppGpp-specific riboswitch binding to fluorescent RNA aptamers</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/34487413/" target="_blank">2021</a><sup>6</sup></div>
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
<font >ppGpp riboswitches form a class of riboswitch that specifically bind guanosine tetraphosphate(ppGpp),which is a well-known alarmone produced during various stresses including stringent response,causing by a shortage of amino acids. ppGpp acts on many levels and affects replication,transcription and translation.ppGpp riboswitch were originally identified by bioinformatics as a conserved RNA-like structure called the "The ykkC motif"，which was proposed to represent the highly-conserved aptamer domain of a riboswitch candidate. ykkC RNAs have been organized into at least four major categories called subtypes 2a through 2d. Subtype 2a RNAs are riboswitches that sense the bacterial alarmone ppGpp, and typically regulate amino acid biosynthesisgenes.ppGpp riboswitches control genes involved in biosynthesis and transport of branched-chain amino acids and genes encoding for glutamate synthase and The ATP-binding cassette transporters（ABC transporters）<sup>[1, 3-5]</sup>.</font>
<p><br /></p>
            
> Gene association
        
<font >This figure depicts genes predicted to be regulated by the ppGpp riboswitch<sup>[4]</sup>.</font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;">
<tr >
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_association/ppGpp_riboswitch_gene_association.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                
> Gene regulation
            
<font ><p>Putative mechanisms for regulation of gene expression by ppGpp riboswitches<sup>[5]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/ppGpp_riboswitch_gene_regulation.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<p><br /></p>
                    
<p class="header_box" id="Structure and Ligand recognition">Structure and Ligand recognition</p>
> 2D representation
        
<font >Left: Consensus sequence and secondary structure model for the ppGpp riboswitch. Right: Secondary structure depictions of the ppGpp riboswitch according to PDB ID: 6DMC<sup>[5]</sup>.</font><br>
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
                <img src="/images/2D/ppGpp_riboswitch_2D1.svg" alt="drawing" style="width:400px" />
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
                <img src="/images/2D/ppGpp_riboswitch_2D2.svg" alt="drawing" style="width:400px" />
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
            
<font >The overall structure of the ppGpp riboswitch was generated from PDB ID: 6DMC at 2.20 Å bound with ppGpp. ppGpp (shown in sticks) is labeled in red <sup>[5]</sup>.</font>
  <table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/ppGpp_riboswitch_3D.svg" alt="drawing" style="width:400px;height:400px;margin-top: 0px;margin-bottom: 0px;" >
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
  end_residue_number:5, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'A', 
  start_residue_number:6, 
  end_residue_number:11, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'A', 
  start_residue_number:12, 
  end_residue_number:22, 
  color:{r:255,g:223,b:92}
},
{
  struct_asym_id: 'A', 
  start_residue_number:23, 
  end_residue_number:32, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:33, 
  end_residue_number:44, 
  color:{r:255,g:223,b:92}
}, 
 {
  struct_asym_id: 'A', 
  start_residue_number:45, 
  end_residue_number:50, 
  color:{r:9,g:254,b:254}
},{
  struct_asym_id: 'A', 
  start_residue_number:51, 
  end_residue_number:68, 
  color:{r:255,g:135,b:10}
},
{
  struct_asym_id: 'A', 
  start_residue_number:69, 
  end_residue_number:95, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:96, 
  end_residue_number:102, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'A', 
  start_residue_number:201, 
  end_residue_number:201, 
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
        url:'/docs/pdbfiles/6DMC.pdb',
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
                
<font ><p>Left: Surface representation of the binding pocket of the ppGpp riboswitch generated from PDB ID: 6DMC. ppGpp (shown in sticks) is labeled in red. Right: The hydrogen bonds of the binding sites of the ppGpp riboswitch bound with ppGpp<sup>[5]</sup>.<br /></p></font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/ppGpp_riboswitch_binding_pockets1.svg" alt="drawing" style="width:400px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/ppGpp_riboswitch_binding_pockets2.svg" alt="drawing" style="width:400px"  px="" /></td>
</tr>
</table>
<p><br /></p>
                    
> Ligand recognition
            
<font >
<p>Chemical structures of ppGpp and its analogs. The apparent K<sub>D</sub> is shown on bottom<sup>[5]</sup>.<br /><br /></p>
</font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;">
<tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/ligand_recognition/ppGpp_riboswitch_ligand_recognition.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                
<p class="header_box" id="references">References</p>
            
<p><strong>[1] New RNA motifs suggest an expanded scope for riboswitches in bacterial genetic control.</strong><br />
Barrick, J. E. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/15096624/" target="_blank">Proc. Natl. Acad. Sci. U. S. A. 101, 6421–6426 (2004).</a>
<br /><br /></p>
                
<p><strong>[2] Metabolism of Free Guanidine in Bacteria Is Regulated by a Widespread Riboswitch Class.</strong><br />
Nelson, J. W., Atilho, R. M., Sherlock, M. E., Stockbridge, R. B. & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/27989440/" target="_blank">Mol. Cell 65, 220–230 (2017).</a>
<br /><br /></p>
                
<p><strong>[3] Tandem riboswitches form a natural Boolean logic gate to control purine metabolism in bacteria.</strong><br />
Sherlock, M. E., Sudarsan, N., Stav, S. & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/29504937/" target="_blank">Elife 7, (2018).</a>
<br /><br /></p>
                
<p><strong>[4] Riboswitches for the alarmone ppGpp expand the collection of RNA-based signaling systems.</strong><br />
Sherlock, M. E., Sudarsan, N. & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/29784782/" target="_blank">Proc. Natl. Acad. Sci. U. S. A. 115, 6052–6057 (2018).</a>
<br /><br /></p>
                
<p><strong>[5] ykkC riboswitches employ an add-on helix to adjust specificity for polyanionic ligands. </strong><br />
Peselis, A. & Serganov, A.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/30120360/" target="_blank">Nat. Chem. Biol. 14, 887–894 (2018).</a>
<br /><br /></p>
                
<p><strong>[6] Live-Cell Imaging of Guanosine Tetra- and Pentaphosphate (p)ppGpp with RNA-based Fluorescent Sensors*.</strong><br />
Sun, Z. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/34487413/" target="_blank">Angew. Chem. Int. Ed Engl. 60, 24070–24074 (2021).</a>
<br /><br /></p>
                