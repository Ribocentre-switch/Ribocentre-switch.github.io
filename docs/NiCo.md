---
layout: post
title:  "NiCo"
date:   2023-04-27 00:00:00
author: Yuanlin He, Xiaowei Lin
permalink: /docs/NiCo/
---
<p style="font-size: 24px"><strong>Rfam ID: <a href="https://rfam.org/family/RF02683" target="_blank">RF02683</a></strong> (NiCo riboswitch)<br /></p>
 
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
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/25794617/" target="_blank">2015</a><sup>[<a href="#ref1">1</a>]</sup>&emsp;Discovery of NiCo riboswitch</p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >The NiCo riboswitch can respond to multiple divalent transition metals, including Fe<sup>II</sup>&emsp;<a href="https://pubmed.ncbi.nlm.nih.gov/32250107/" target="_blank">2020</a><sup>[<a href="#ref2">2</a>]</sup></p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/32790410/" target="_blank">2020</a><sup>[<a href="#ref3">3</a>]</sup>&emsp;Presenting the first single-molecule fluorescence resonant energy transfer (smFRET) studies of the NiCo riboswitch and providing comprehensive kinetic and thermodynamic information on folding into a biochemically competent structure</p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >To review the evidence that the primary function of the NiCo riboswitch is response to iron&emsp;<a href="https://pubmed.ncbi.nlm.nih.gov/35427920/" target="_blank">2022</a><sup>[<a href="#ref4">4</a>]</sup></p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/35996475/" target="_blank">2022</a><sup>[<a href="#ref5">5</a>]</sup>&emsp;Reconsidering the NiCo Riboswitch as an Iron Riboswitch</p>
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
<font >The NiCo riboswitch is a riboswitch that senses nickel or cobalt ions. Thus, it is an RNA molecule that specifically binds these metal ions, and regulates genes accordingly. The riboswitch is thought to be a part of a system that responds to toxic levels of these metal ions, although the riboswitch might also participate in dealing with the situation where insufficient levels of these trace elements are present in the cell. The crystal structure of a NiCo riboswitch has been determined, and available evidence suggests that the riboswitches bind their metal-ion ligands cooperatively (From Wikipedia)<sup></sup>.</font>
<p><br /></p>
             
> Gene association
            
<font><p>The predicted metal transporters regulated by <i>czcD</i> riboswitches fall into three classes: P<sub>1B4</sub>-type ATPases (exporters), P<sub>3</sub>-type ATPases (importers), and cation diffusion facilitators (CDFs, usually exporters). These riboswitches were identified in Gram-positive, obligate anaerobes primarily from the human gut<sup>[<a href="#ref4">4</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
<tr >
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_association/NiCo_riboswitch_gene_association.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                 
> Gene regulation
                
<font><p>Potential mechanism of the NiCo riboswitch for controlling gene expression in <i>E. bacterium</i>. The NiCo riboswitch is an “on” transcription-termination riboswitch. In the ligand-unbound form, a terminator stem is formed, which leads to transcription to be aborted by RNA polymerase. Binding of the ligand induces a conformational change in which part of the terminator stem sequence is sequestered, allowing transcription read-through and expression of the downstream gene. We present the  prototypical mechanism, but not all possible mechanisms<sup>[<a href="#ref4">4</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/NiCo_riboswitch_gene_regulation.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<br><br>
                         
<p class="header_box" id="Structure and Ligand recognition">Structure and Ligand recognition</p>
> 2D representation
        
<font><p>Top: Consensus sequence and secondary structure model for the NiCo riboswitch. Bottom: Secondary structure depictions of the <i>E. bacterium</i> NiCo riboswitch according to PDB ID: 4RUM. Helices P1-P2 (pink) and P3-P4 (blue) form a 'H'-shaped structure stabilized at the junction by four Co<sup>2+</sup> ions. Inner sphere (filled symbols) mediated contacts to different metals are shown in key<sup>[<a href="#ref2">2</a>]</sup>.</p></font>
<font><p>5'GGGAACUGAGCAGGCAAUGACCAGAGCGGUCAUGCAGCCGGGCUGCGAAAGCGGCAACAGAUGAUUACACGCACAUCUGUGGGACAGUUCCCAC3' (Sequence from bottom structure )</p><br></font>
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
                            <img id="image-a0" src="/images/2D/NiCo_riboswitch_2D1.svg" width="200" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="big.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage0('/images/2D/NiCo_riboswitch_2D1.svg');">&lt;&lt; Switch to</a>
                            </div>
                        </div>
                        <div class="image-wrapper" >
                            <img id="image-b" src="/images/2D/NiCo_riboswitch_2D2.svg" width="200" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="down.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage0('/images/2D/NiCo_riboswitch_2D2.svg');">&lt;&lt; Switch to</a>
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
    /* Mouse Hover Style */
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
                
<font >The overall structure of the <i>E. bacterium</i> NiCo riboswitch was generated from PDB ID: 4RUM at 2.64 Å resolution bound to cobalt. Crystal structure of NiCo shows two sets of coaxially stacked helices: P1-P2 (pink) and P3-P4 (blue). Interhelical nucleotides coordinate four Co<sup>2+</sup> ions (red). Anti-terminator nucleotides 78 to 98 (cyan) are sequestered within P4 and P1, making direct contacts with Co<sup>2+</sup> ions. Additional available structures that have been solved and detailed information are accessible on <i>Structures</i> page <sup>[<a href="#ref1">1</a>]</sup>.</font>
<div ><font ><p style="text-align:right;margin-bottom: 0px;">(Clicking the "Settings/Controls info" to turn Spin off)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></font>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/NiCo_riboswitch_3D.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
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
                    
<font><p>Left: Surface representation of the binding pocket of the <i>E. bacterium</i> NiCo riboswitch generated from PDB ID: 4RUM at 2.64 Å resolution. The Co<sup>2+</sup> ions are labeled in red. Right: Co<sup>2+</sup> ions (red) bound to NiCo are coordinated by interhelical nucleotides from diametrically opposite sides of the RNA. G87 coordinates cobalt 1 via N7 and cobalt 2 via its ribose oxygen. G45 coordinates cobalt 2 via water mediated contacts with a ribosyl oxygen and cobalt 3 via its N7. These long-range connections extend from A14 to G86 via G45 and G87, connecting three of the Co<sup>2+</sup> sites<sup>[<a href="#ref1">1</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/NiCo_riboswitch_ binding_pockets1.svg" alt="drawing" style="width:500px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/NiCo_riboswitch_ binding_pockets2.svg" alt="drawing" style="width:500px"  px="" /></td>
</tr>
</table>
<p><br /></p>
                     
> Ligand recognition
                

<font><p>Isothermal titration calorimetry studies of the native <i>czcD</i> riboswitches show no response to Mn<sup>II</sup>, a weak response to Zn<sup>II</sup>, and similar dissociation constants (∼1μM) and conformational responses for Fe<sup>II</sup>, Co<sup>II</sup>, and Ni<sup>II</sup>. Refer to the corresponding references for comprehensive details regarding reaction conditions and species information in measuring the dissociation constant displayed below<sup>[<a href="#ref4">4</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
<tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/ligand_recognition/NiCo_riboswitch_ligand_recognition.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<br /><br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Bacterial riboswitches cooperatively bind Ni(2+) or Co(2+) ions and control  expression of heavy metal transporters.</strong></font><br />
Furukawa, K. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/25794617/" target="_blank">Mol. Cell 57, 1088–1098 (2015).</a>
<br />
                
<a id="ref2"></a><font><strong>[2] The (NiCo) Riboswitch Responds to Iron(II).</strong></font><br />
Xu, J. & Cotruvo, J. A., Jr.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/32250107/" target="_blank">Biochemistry 59, 1508–1516 (2020).</a>
<br />
                
<a id="ref3"></a><font><strong>[3] Sequential Folding of the Nickel/Cobalt Riboswitch Is Facilitated by a Conformational Intermediate: Insights from Single-Molecule Kinetics and Thermodynamics.</strong></font><br />
Sung, H.-L. & Nesbitt, D. J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/32790410/" target="_blank">J. Phys. Chem. B 124, 7348–7360 (2020).</a>
<br />
                
<a id="ref4"></a><font><strong>[4] Iron-responsive riboswitches.</strong></font><br />
Xu, J. & Cotruvo, J. A., Jr.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/35427920/" target="_blank">Curr. Opin. Chem. Biol. 68, 102135 (2022).</a>
<br />
                
<a id="ref5"></a><font><strong>[5] Reconsidering the (NiCo) Riboswitch as an Iron Riboswitch.</strong></font><br />
Xu, J. & Cotruvo, J. A., Jr.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/35996475/" target="_blank">ACS Bio Med Chem Au 2, 376–385 (2022).</a>
<br />
                