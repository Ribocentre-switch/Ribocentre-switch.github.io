---
layout: post
title:  "NiCo"
date:   2023-04-27 00:00:00
author: Yuanlin He, Jie Deng
permalink: /docs/NiCo/
---
**Rfam ID: [RF02683](https://rfam.xfam.org/family/RF02683)(NiCo riboswitch)** <br>

<html lang="zh-cn">
<head>
<meta charset="utf-8"> 
<style>
  .header_box {
    border: none;
    border-bottom: 4px solid #005826;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.25);
    font-size:40px
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
       <p >Discovery of NiCo riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/25794617/" target="_blank">2015</a><sup>[1]</sup></div>
     </div>
    </li>
        

    <li class="day">
     <div class="events">
       <p >The NiCo riboswitch can respond to multiple divalent transition metals, including Fe<sup>II</sup></p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/32250107/" target="_blank">2020</a><sup>[2]</sup></div>
     </div>
    </li>
        

    <li class="day">
     <div class="events">
       <p >To review the evidence that the primary function of the NiCo riboswitch is response to iron</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/35427920/" target="_blank">2022</a><sup>[3]</sup></div>
     </div>
    </li>
        

    <li class="day">
     <div class="events">
       <p >Reconsidering the NiCo Riboswitch as an Iron Riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/35996475/" target="_blank">2022</a><sup>[4]</sup></div>
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
<font size="4">The NiCo riboswitch is a riboswitch that senses nickel or cobalt ions. Thus, it is an RNA molecule that specifically binds these metal ions, and regulates genes accordingly. The riboswitch is thought to be a part of a system that responds to toxic levels of these metal ions, although the riboswitch might also participate in dealing with the situation where insufficient levels of these trace elements are present in the cell. The crystal structure of a NiCo riboswitch has been determined, and available evidence suggests that the riboswitches bind their metal-ion ligands cooperatively (From Wikipedia)<sup></sup>.</font>
<p><br /></p>
            
> Gene association
        
<font size="4">（暂缺）<sup></sup>.</font>
<p><br /></p>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;">
<tr >
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_association/" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                
> Gene regulation
            
<font size="4"><p>The NiCo riboswitch is an “on” transcription-termination riboswitch. In the ligand-unbound form, a terminator stem is formed, which leads to transcription to be aborted by RNA polymerase. Binding of the ligand induces a conformational change in which part of the terminator stem sequence is sequestered, allowing transcription read-through and expression of the downstream gene<sup>[3]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/NiCo_riboswitch_gene_regulation.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<p><br /></p>
                    
<p class="header_box">Structure and Ligand recognition</p>
> 2D representation
        
<font size=4>Left: Consensus sequence and secondary structure model for the NiCo riboswitch. Right: Secondary structure depictions of the NiCo riboswitch according to PDB ID: 4RUM<sup>[2]</sup>.</font><br>
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
                <img src="/images/2D/NiCo_riboswitch_2D1.svg" alt="drawing" style="width:400px" />
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
            
<font size=4>The overall structure of the NiCo riboswitch was generated from PDB ID: 4RUM at 2.64 Å resolution bound to cobalt. Crystal structure of NiCo shows two sets of coaxially stacked helices: P1-P2 (pink) and P3-P4 (palegreen). Interhelical nucleotides coordinate four Co<sup>2+</sup> ions (red). Anti-terminator nucleotides 78 to 98 (cyan) are sequestered within P4 and P1, making direct contacts with Co<sup>2+</sup> ions <sup>[1]</sup>.</font>
  <table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/NiCo_riboswitch_3D.svg" alt="drawing" style="width:400px;height:400px;margin-top: 0px;margin-bottom: 0px;" >
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
  start_residue_number:6, 
  end_residue_number:43, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'A', 
  start_residue_number:90, 
  end_residue_number:99, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'A', 
  start_residue_number:44, 
  end_residue_number:78, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:79, 
  end_residue_number:89, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'A', 
  start_residue_number:101, 
  end_residue_number:101, 
  color:{r:124,g:55,b:184}
},
{
  struct_asym_id: 'A', 
  start_residue_number:102, 
  end_residue_number:102, 
  color:{r:124,g:55,b:184}
},
{
  struct_asym_id: 'A', 
  start_residue_number:103, 
  end_residue_number:103, 
  color:{r:124,g:55,b:184}
},
{
  struct_asym_id: 'A', 
  start_residue_number:104, 
  end_residue_number:104, 
  color:{r:124,g:55,b:184}
},
{
  struct_asym_id: 'A', 
  start_residue_number:105, 
  end_residue_number:105, 
  color:{r:124,g:55,b:184}
},
{
  struct_asym_id: 'A', 
  start_residue_number:106, 
  end_residue_number:106, 
  color:{r:124,g:55,b:184}
},
{
  struct_asym_id: 'A', 
  start_residue_number:107, 
  end_residue_number:107, 
  color:{r:124,g:55,b:184}
},
{
  struct_asym_id: 'A', 
  start_residue_number:108, 
  end_residue_number:108, 
  color:{r:255,g:11,b:12}
},
{
  struct_asym_id: 'A', 
  start_residue_number:109, 
  end_residue_number:109, 
  color:{r:255,g:11,b:12}
},
{
  struct_asym_id: 'A', 
  start_residue_number:110, 
  end_residue_number:110, 
  color:{r:255,g:11,b:12}
},
{
  struct_asym_id: 'A', 
  start_residue_number:111, 
  end_residue_number:111, 
  color:{r:255,g:11,b:12}
},
{
  struct_asym_id: 'A', 
  start_residue_number:112, 
  end_residue_number:112, 
  color:{r:0,g:239,b:0}
},
{
  struct_asym_id: 'A', 
  start_residue_number:113, 
  end_residue_number:113, 
  color:{r:0,g:239,b:0}
},
{
  struct_asym_id: 'A', 
  start_residue_number:114, 
  end_residue_number:114, 
  color:{r:0,g:239,b:0}
},
{
  struct_asym_id: 'A', 
  start_residue_number:115, 
  end_residue_number:115, 
  color:{r:0,g:239,b:0}
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
        url:'/docs/pdbfiles/4RUM.pdb',
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
                
<font size=4><p>Left: Surface representation of the binding pocket of the NiCo riboswitch generated from PDB ID: 4RUM. The Co<sup>2+</sup> ions are labeled in red. Right: Co<sup>2+</sup> ions (red) bound to NiCo are coordinated by interhelical nucleotides from diametrically opposite sides of the RNA. G87 coordinates cobalt 1 via N7 and cobalt 2 via its ribose oxygen. G45 coordinates cobalt 2 via water mediated contacts with a ribosyl oxygen and cobalt 3 via its N7. These long-range connections extend from A14 to G86 via G45 and G87, connecting three of the Co<sup>2+</sup> sites<sup>[1]</sup>.<br /></p></font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/NiCo_riboswitch_ binding_pockets1.svg" alt="drawing" style="width:400px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/NiCo_riboswitch_ binding_pockets2.svg" alt="drawing" style="width:400px"  px="" /></td>
</tr>
</table>
                    
> Ligand recognition
            
<font size=4>
<p>Isothermal titration calorimetry studies of the native <i>czcD</i> riboswitches show no response to Mn<sup>II</sup>, a weak response to Zn<sup>II</sup>, and similar dissociation constants (∼1μM) and conformational responses for Fe<sup>II</sup>, Co<sup>II</sup>, and Ni<sup>II</sup><sup>[4]</sup>.<br /><br /></p>
</font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;">
<tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/ligand_recognition/NiCo_riboswitch_ligand_recognition.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                
<p class="header_box">References</p>
<p><br /></p>
            
<p><strong>[1]Bacterial riboswitches cooperatively bind Ni(2+) or Co(2+) ions and control  expression of heavy metal transporters.</strong><br />
Furukawa, K. et al<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/25794617/" target="_blank">Mol. Cell 57, 1088–1098 (2015)</a><br /><br /></p>
                
<p><strong>[2]The (NiCo) Riboswitch Responds to Iron(II).</strong><br />
Xu, J. & Cotruvo, J. A., Jr<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/32250107/" target="_blank">Biochemistry 59, 1508–1516 (2020)</a><br /><br /></p>
                
<p><strong>[3]Iron-responsive riboswitches.</strong><br />
Xu, J. & Cotruvo, J. A., Jr<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/35427920/" target="_blank">Curr. Opin. Chem. Biol. 68, 102135 (2022)</a><br /><br /></p>
                
<p><strong>[4]Reconsidering the (NiCo) Riboswitch as an Iron Riboswitch.</strong><br />
Xu, J. & Cotruvo, J. A., Jr<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/35996475/" target="_blank">ACS Bio Med Chem Au 2, 376–385 (2022)</a><br /><br /></p>
                