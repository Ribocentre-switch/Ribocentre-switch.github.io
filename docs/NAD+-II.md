---
layout: post
title:  "NAD<sup>+</sup>-II"
date:   2023-05-15 00:00:00
author: Xuemei Peng, Xiaoxue Chen
permalink: /docs/NAD<sup>+</sup>-II/
---
<p style="font-size: 24px"><strong>Rfam ID: [nan](https://rfam.xfam.org/family/nan,target="_blank")(nan)</strong> <br /></p>

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
       <p >Discovery of NAD<sup>+</sup>-II riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/33970790/" target="_blank">2021</a><sup>[1]</sup></div>
     </div>
    </li>
        

    <li class="day">
     <div class="events">
       <p >Biochemical validation of NAD<sup>+</sup>-II riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/33087526/" target="_blank">2021</a><sup>[2]</sup></div>
     </div>
    </li>
        

    <li class="day">
     <div class="events">
       <p >Crystal structure of NAD<sup>+</sup>-II riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/36610789/" target="_blank">2023</a><sup>[3]</sup></div>
     </div>
    </li>
        

    <li class="day">
     <div class="events">
       <p >Crystal structure of NAD<sup>+</sup>-II riboswitch reveal two distinct ligand-binding pockets</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/36840714/" target="_blank">2023</a><sup>[4]</sup></div>
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
<font size="4">NAD<sup>+</sup>-II riboswitch is the second class of riboswitches that recognize NAD<sup>+</sup>. It is usually associated with pnuC genes, and PnuC proteins are known to transport nicotinamide riboside (NR), which is a component of the ubiquitous and abundant enzyme cofactor nicotinamide adenine dinucleotide (NAD<sup>+</sup>). Thus, “pnuC motif” was inferred to function as aptamers for a novel class of NAD<sup>+</sup>-sensing riboswitches.<sup></sup>.</font>
<p><br /></p>
            
> Gene association
        
<font size="4">Schematic representation of pnuC as a NR transporter involved in NAD+ synthesis. NAD+-II riboswitch representatives are found exclusively upstream of pnuC genes.<sup>[2]</sup>.</font>
<p><br /></p>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;">
<tr >
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_association/NAD+-II_riboswitch_gene_association.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                
> Gene regulation
            
<font size="4"><p>Potential mechanism of translation regulation by the NAD-II riboswitch.The ribosome binding site (RBS) is showed on red.<sup>[4]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/NAD+-II_gene_regulation.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<p><br /></p>
                    
<p class="header_box">Structure and Ligand recognition</p>
> 2D representation
        
<font size=4>Consensus sequence and secondary structure model for the NAD-II riboswitch.<sup>[2,4]</sup>.</font><br>
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
                <img src="/images/2D/NAD+-II_riboswitch_2D.svg" alt="drawing" style="width:400px" />
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
            
<font size=4>Crystal structure of NAD<sup>+</sup>-II riboswitch <sup>[3]</sup>.</font>
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
                
> Binding pocket
                
<font size=4><p>(Left) Surface representation of the binding site 1 and 2 of NAD-II riboswitch generated from PDB ID:8I3Z. NMN (shown in sticks) is labeled in red. (Right) The hydrogen bonds of the two binding sites of the NAD-II riboswitch bound with NMN.<sup>[4]</sup>.<br /></p></font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/NAD+-II_riboswitch-binding_pockets.svg" alt="drawing" style="width:400px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/" alt="drawing" style="width:400px"  px="" /></td>
</tr>
</table>
                    
> Ligand recognition
            
<p class="header_box">References</p>
<p><br /></p>
            
<p><strong>[1]Comprehensive discovery of novel structured noncoding RNAs in 26 bacterial genomes</strong><br />
Brewer, K. I. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/33970790/" target="_blank">RNA Biol. 18, 2417–2432 (2021).</a><br /><br /></p>
                
<p><strong>[2]A second riboswitch class for the enzyme cofactor NAD</strong><br />
Panchapakesan, S. S. S., Corey, L., Malkowski, S. N., Higgs, G. & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/33087526/" target="_blank">RNA 27, 99–105 (2021).</a><br /><br /></p>
                
<p><strong>[3]Structure-based investigations of the NAD<sup>+</sup>-II riboswitch</strong><br />
Xu, X. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/36610789/" target="_blank">Nucleic Acids Res. 51, 54–67 (2023).</a><br /><br /></p>
                
<p><strong>[4]Crystal structures of the NAD<sup>+</sup>-II riboswitch reveal two distinct ligand-binding pockets</strong><br />
Peng, X., Liao, W., Lin, X., Lilley, D. M. J. & Huang, L.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/36840714/" target="_blank">Nucleic Acids Res. 51, 2904–2914 (2023).</a><br /><br /></p>
                