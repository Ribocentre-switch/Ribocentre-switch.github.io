---
layout: post
title:  "Adenine"
date:   2023-04-25 00:00:00
author: Wenjian Liao, Zhizhong Lu
permalink: /docs/Adenine/
---
<p style="font-size: 24px"><strong>Rfam ID: <a href="https://rfam.org/family/RF00167" target="_blank">RF00167</a></strong> (Purine riboswitch)<br /></p>
 
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
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/9098051/" target="_blank">1997</a><sup>[<a href="#ref1">1</a>]</sup>&emsp;Discovery of <i>xpt-pbuX</i> operon</p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Discovery of the adenine riboswitch&emsp;<a href="https://pubmed.ncbi.nlm.nih.gov/14718920/" target="_blank">2004</a><sup>[<a href="#ref3">3</a>]</sup></p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/15610857/" target="_blank">2004</a><sup>[<a href="#ref4">4</a>]</sup>&emsp;Crystal structures of <i>add</i> adenine riboswitch bound to adenine</p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >The function of adenine riboswitch depends on the relative rates of ligand binding and the transcriptional process&emsp;<a href="https://pubmed.ncbi.nlm.nih.gov/16931335/" target="_blank">2006</a><sup>[<a href="#ref6">6</a>]</sup></p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/20022916/" target="_blank">2010</a><sup>[<a href="#ref7">7</a>]</sup>&emsp;Crystal structures of the U65C mutant <i>ydhL</i> adenine riboswitch in ligand-free state</p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Cotranscriptional folding in an adenine riboswitch directs the gene-regulatory transcription outcome&emsp;<a href="https://pubmed.ncbi.nlm.nih.gov/23087247/" target="_blank">2012</a><sup>[<a href="#ref8">8</a>]</sup></p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/27841871/" target="_blank">2017</a><sup>[<a href="#ref9">9</a>]</sup>&emsp;Four structures of the <i>add</i> adenine riboswitch during the course of a reaction were determined using femtosecond X-ray free electron laser (XFEL) pulses</p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Characterization of the ligand-dependent conformational dynamics of the full-length <i>add</i> adenine riboswitch by NMR and single-molecule FRET (smFRET) spectroscopy&emsp;<a href="https://pubmed.ncbi.nlm.nih.gov/28204648/" target="_blank">2017</a><sup>[<a href="#ref10">10</a>]</sup></p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/33963862/" target="_blank">2021</a><sup>[<a href="#ref11">11</a>]</sup>&emsp;The <i>add</i> adenine riboswitch relies on the folding of a structural intermediate that pre-organizes the aptamer global structure and the ligand binding site to allow efficient metabolite sensing and riboswitch genetic regulation</p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Using adenine riboswitch as an initial aptamer-like RNA to engineer well-folded cell-compatible fluorogenic aptamers and devices&emsp;<a href="https://pubmed.ncbi.nlm.nih.gov/34937909/" target="_blank">2022</a><sup>[<a href="#ref12">12</a>]</sup></p>
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
<font >Carrying an aptamer domain similar in sequence and secondary structure to the guanine riboswitch, the adenine riboswitch selectively recognizes adenine, and contains a uracil ribonucleotide in position 74 of the adenine-binding aptamer domain. in <i>Bacillus subtilis ydhL</i> (also called <i>pbuE</i>) and two RNAs (<i>add</i> genes) from <i>Clostridium perfringens</i> and <i>Vibrio vulnificus</i> harbor adenine riboswitches in their mRNA elements. The <i>ydhL</i> adenine riboswitch has been shown to control gene expression through transcriptional activation, while the add adenine riboswitch controls gene expression through translational activation<sup>[<a href="#ref3">3</a>,<a href="#ref4">4</a>]</sup>.</font>
<p><br /></p>
             
> Gene association
            
<font><p>Purine salvage, interconversion, and catabolic pathways in <i>Bacillus subtilis</i>. It has been demonstrated that the <i>ydhL</i> gene, encoding for the putative purine efflux pump, and the <i>add</i> gene, encoding for adenine deaminase<sup>[<a href="#ref1">1</a>-<a href="#ref4">4</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
<tr >
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_association/Adenine_riboswitch_gene_association.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                 
> Gene regulation
                
<font ><p>Mechanisms for regulation of gene expression by adenine riboswitches in <i>Bacillus subtilis</i>. The Shine-Dalgarno GAA sequence and the initiation codon are shaded in orange and blue respectively. We present the  prototypical mechanism, but not all possible mechanisms<sup>[<a href="#ref3">3</a>,<a href="#ref4">4</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/Adenine_riboswitch_gene_regulation1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/Adenine_riboswitch_gene_regulation2.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<br><br>
                         
<p class="header_box" id="Structure and Ligand recognition">Structure and Ligand recognition</p>
> 2D representation
        
<font><p>Top: Consensus sequence and secondary structure model for the adenine riboswitch. Bottom: Secondary structure depictions of the adenine riboswitch in <i>Bacillus subtilis</i> according to PDB ID: 1Y26<sup>[<a href="#ref4">4</a>]</sup>.</p></font>
<font><p>5' CGCUUCAUAUAAUCCUAAUGAUAUGGUUUGGGAGUUUCUACCAAGAGCCUUAAACUCUUGAUUAUGAAGUG 3' (Sequence from bottom structure )</p><br></font>
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
                            <img id="image-a0" src="/images/2D/Adenine_riboswitch_2D1.svg" width="200" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="big.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage0('/images/2D/Adenine_riboswitch_2D1.svg');">&lt;&lt; Switch to</a>
                            </div>
                        </div>
                        <div class="image-wrapper" >
                            <img id="image-b" src="/images/2D/Adenine_riboswitch_2D2.svg" width="200" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="down.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage0('/images/2D/Adenine_riboswitch_2D2.svg');">&lt;&lt; Switch to</a>
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
                
<font >The overall structure of the <i>Bacillus subtilis</i> adenine riboswitch was generated from PDB ID: 1Y26 at 2.10 Å resolution bound with adenine. Adenine (shown in sticks) is labeled in red. Additional available structures that have been solved and detailed information are accessible on <i>Structures</i> page <sup>[<a href="#ref4">4</a>]</sup>.</font>
<div ><font ><p style="text-align:right;margin-bottom: 0px;">(Clicking the "Settings/Controls info" to turn Spin off)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></font>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/Adenine_riboswitch_3D1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
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
  struct_asym_id: 'X', 
  start_residue_number:13, 
  end_residue_number:21, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'X', 
  start_residue_number:22, 
  end_residue_number:24, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'X', 
  start_residue_number:25, 
  end_residue_number:31, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'X', 
  start_residue_number:32, 
  end_residue_number:38, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'X', 
  start_residue_number:39, 
  end_residue_number:45, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'X', 
  start_residue_number:46, 
  end_residue_number:53, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'X', 
  start_residue_number:54, 
  end_residue_number:59, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'X', 
  start_residue_number:60, 
  end_residue_number:66, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'X', 
  start_residue_number:67, 
  end_residue_number:72, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'X', 
  start_residue_number:73, 
  end_residue_number:74, 
  color:{r:255,g:135,b:10}
},
{
  struct_asym_id: 'X', 
  start_residue_number:75, 
  end_residue_number:83, 
  color:{r:194,g:194,b:255}
}, 
{
  struct_asym_id: 'X', 
  start_residue_number:90, 
  end_residue_number:90, 
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
        url:'/docs/pdbfiles/1Y26.pdb',
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
                    
<font><p>Left: Surface representation of the binding pocket of the <i>Bacillus subtilis</i> adenine riboswitch in generated from PDB ID: 1Y26 at 2.10 Å. Adenine (shown in sticks) is labeled in red. Right: The hydrogen bonds of the binding sites of the adenine riboswitch bound with adenine<sup>[<a href="#ref4">4</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/Adenine_riboswitch_binding_pockets1.svg" alt="drawing" style="width:500px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/Adenine_riboswitch_binding_pockets2.svg" alt="drawing" style="width:500px"  px="" /></td>
</tr>
</table>
<p><br /></p>
                     
> Ligand recognition
                

<font><p>Chemical structures of adenine and its analogs. The apparent K<sub>D</sub> of each compound of the <i>ydhL</i> adenine riboswitch is shown on bottom. Refer to the corresponding references for comprehensive details regarding reaction conditions and species information in measuring the dissociation constant displayed below<sup>[<a href="#ref3">3</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
<tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/ligand_recognition/Adenine_riboswitch_ligand_recognition.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<br /><br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Xanthine metabolism in Bacillus subtilis: characterization of the xpt-pbuX operon and evidence for purine- and nitrogen-controlled expression of genes involved in xanthine salvage and catabolism.</strong></font><br />
Christiansen, L. C., Schou, S., Nygaard, P. & Saxild, H. H.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/9098051/" target="_blank">J. Bacteriol. 179, (1997).</a>
<br />
                
<a id="ref2"></a><font><strong>[2] Definition of a second Bacillus subtilis pur regulon comprising the pur and  xpt-pbuX operons plus pbuG, nupG (yxjA), and pbuE (ydhL).</strong></font><br />
Johansen, L. E., Nygaard, P., Lassen, C., Agersø, Y. & Saxild, H. H.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/12923093/" target="_blank">J. Bacteriol. 185, (2003).</a>
<br />
                
<a id="ref3"></a><font><strong>[3] Adenine riboswitches and gene activation by disruption of a transcription terminator.</strong></font><br />
Mandal, M. & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/14718920/" target="_blank">Nat. Struct. Mol. Biol. 11, (2004).</a>
<br />
                
<a id="ref4"></a><font><strong>[4] Structural Basis for Discriminative Regulation of Gene Expression by Adenine- and Guanine-Sensing mRNAs.</strong></font><br />
Serganov, A. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/15610857/" target="_blank">Chem. Biol. 11, (2004).</a>
<br />
                
<a id="ref5"></a><font><strong>[5] The Kinetics of Ligand Binding by an Adenine-Sensing Riboswitch.</strong></font><br />
Wickiser, J. K., Cheah, M. T., Breaker, R. R. & Crothers, D. M.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/16201765/" target="_blank">Biochemistry 44, (2005).</a>
<br />
                
<a id="ref6"></a><font><strong>[6] Folding of the Adenine Riboswitch.</strong></font><br />
Lemay, J. F., Penedo, J. C., Tremblay, R., Lilley, D. M. & Lafontaine, D. A.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/16931335/" target="_blank">Chem. Biol. 13, (2006).</a>
<br />
                
<a id="ref7"></a><font><strong>[7] Riboswitch structure: an internal residue mimicking the purine ligand.</strong></font><br />
Delfosse, V. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/20022916/" target="_blank">Nucleic Acids Res. 38, (2010).</a>
<br />
                
<a id="ref8"></a><font><strong>[8] Direct observation of cotranscriptional folding in an adenine riboswitch.</strong></font><br />
Frieda, K. L. & Block, S. M.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/23087247/" target="_blank">Science 338, (2012).</a>
<br />
                
<a id="ref9"></a><font><strong>[9] Structures of riboswitch RNA reaction states by mix-and-inject XFEL serial crystallography.</strong></font><br />
Stagno, J. R. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/27841871/" target="_blank">Nature 541, (2017).</a>
<br />
                
<a id="ref10"></a><font><strong>[10] Ligand-modulated folding of the full-length adenine riboswitch probed by NMR and single-molecule FRET spectroscopy.</strong></font><br />
Warhaut, S. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/28204648/" target="_blank">Nucleic Acids Res. 45, 5512–5522 (2017).</a>
<br />
                
<a id="ref11"></a><font><strong>[11] A structural intermediate pre-organizes the add adenine riboswitch for ligand recognition.</strong></font><br />
St-Pierre, P. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/33963862/" target="_blank">Nucleic Acids Res. 49, (2021).</a>
<br />
                
<a id="ref12"></a><font><strong>[12] Repurposing an adenine riboswitch into a fluorogenic imaging and sensing tag.</strong></font><br />
Dey, S. K. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/34937909/" target="_blank">Nat. Chem. Biol. 18, 180–190 (2022).</a>
<br />
                