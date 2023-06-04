---
layout: post
title:  "SAM-VI"
date:   2023-04-28 00:00:00
author: Zhizhong Lu, Wenjian Liao
permalink: /docs/SAM-VI/
---
<p style="font-size: 24px"><strong>Rfam ID: [RF02885](https://rfam.xfam.org/family/RF02885,target="_blank")(SAM-VI riboswitch)</strong> <br /></p>

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
       <p >Discovery of SAM-VI riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/29106323/" target="_blank">2018</a><sup>1</sup></div>
     </div>
    </li>
        

    <li class="day">
     <div class="events">
       <p >Crystal structure of SAM-VI riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/31844059/" target="_blank">2019</a><sup>2</sup></div>
     </div>
    </li>
        

    <li class="day">
     <div class="events">
       <p >NMR and smFRET research on SAM-VI riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/37087479/" target="_blank">2023</a><sup>3</sup></div>
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
<font size="4">SAM-VI is a member of the riboswitch family. It is predominantly found in Bifidobacterium and exhibits some similarities to the SAM-III (Smk box) riboswitch class, but lacks most of the highly conserved nucleotides of SAM-III class. SAM-VI aptamers bind the cofactor S-adenosylmethinine SAM (a key metabolite in sulphur metabolism) and discriminate strongly against S-adenosylhomocysteine SAH. The class was discovered by further analysis of Bifido-meK motif RNAs. (from WiKi)<sup></sup>.</font>
<p><br /></p>
            
> Gene association
        
<font size="4">Pathways for sulphate assimilation and biosynthesis of cysteine and methionine.SAM-VI riboswitch (red bar) is involved in multiple gene regulation in the synthetic pathway<sup>[1]</sup>.</font>
<p><br /></p>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;">
<tr >
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_association/SAM-VI riboswitch_gene_association.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                
> Gene regulation
            
<font size="4"><p>Model of SAM-VI riboswitch sequential folding and translational control<sup>[2]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/SAM-VI_riboswitch_gene_regulation.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<p><br /></p>
                    
<p class="header_box">Structure and Ligand recognition</p>
> 2D representation
        
<font size=4>Left: Consensus sequence and secondary structure model for the SAM-VI riboswitch. Right: Secondary structure depictions of the SAM-VI riboswitch according to PDB ID:6las<sup></sup>.</font><br>
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
                <img src="/images/2D/SAM-VI_riboswitch_2D1.svg" alt="drawing" style="width:400px" />
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
                <img src="/images/2D/SAM-VI_riboswitch_2D2.svg" alt="drawing" style="width:400px" />
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
            
<font size=4>2.71-Å resolution crystal structure of an S-adenosylmethionine (SAM) riboswitch from thermoanaerobacter tengcongensis complexed with S-adenosylmethionine.SAM (shown in sticks) is labeled in red <sup>[2]</sup>.</font>
  <table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/SAM-VI_riboswitch_3D.svg" alt="drawing" style="width:400px;height:400px;margin-top: 0px;margin-bottom: 0px;" >
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
  start_residue_number:40, 
  end_residue_number:49, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'A', 
  start_residue_number:1, 
  end_residue_number:6, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:50, 
  end_residue_number:55, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:7, 
  end_residue_number:8, 
  color:{r:194,g:194,b:255}
}, 
{
  struct_asym_id: 'A', 
  start_residue_number:33, 
  end_residue_number:39, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:9, 
  end_residue_number:32, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'A', 
  start_residue_number:101, 
  end_residue_number:101, 
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
        url:'/docs/pdbfiles/6las.pdb',
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
                
> Binding pocket
                
<font size=4><p>Left: Surface representation of the binding pocket of the SAM-VI riboswitch generated from PDB ID:6LAS. S-adenosylmethionine (SAM) (shown in sticks) is labeled in red.Right: Hydrogen bonding between SAM and adjacent bases<sup>[2]</sup>.<br /></p></font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/SAM-VI_riboswitch_binding_pockets1.svg" alt="drawing" style="width:400px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/SAM-VI_riboswitch_binding_pockets2.svg" alt="drawing" style="width:400px"  px="" /></td>
</tr>
</table>
                    
> Ligand recognition
            
<font size=4>
<p>Chemical structures of various compounds used to probe the binding characteristics of the SAM-VI riboswitch<sup>[2]</sup>.<br /><br /></p>
</font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;">
<tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/ligand_recognition/SAM-VI_riboswitch_ligand_recognition.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                
<p class="header_box">References</p>
<p><br /></p>
            
<p><strong>[1]SAM-VI RNAs selectively bind S-adenosylmethionine and exhibit similarities to SAM-III riboswitches..</strong><br />
Mirihana Arachchilage, G., Sherlock, M. E., Weinberg, Z., & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/29106323/" target="_blank">RNA Biol. 15, 371–378 (2018).</a><br /><br /></p>
                
<p><strong>[2]SAM-VI riboswitch structure and signature for ligand discrimination..</strong><br />
Sun, A., Gasser, C., Li, F., Chen, H., Mair, S., Krasheninina, O., Micura, R., & Ren, A.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/31844059/" target="_blank">Nat. Commun. 10, 5728 (2019).</a><br /><br /></p>
                
<p><strong>[3]Observation of structural switch in nascent SAM-VI riboswitch during transcription at single-nucleotide and single-molecule resolution..</strong><br />
Xue, Y., Li, J., Chen, D., Zhao, X., Hong, L., & Liu, Y.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/37087479/" target="_blank">Nat. Commun. 14, 2320 (2023).</a><br /><br /></p>
                