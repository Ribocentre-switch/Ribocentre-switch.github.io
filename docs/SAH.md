---
layout: post
title:  "SAH"
date:   2023-04-29 00:00:00
author: Zhizhong Lu, Wenjian Liao
permalink: /docs/SAH/
---
<p style="font-size: 24px"><strong>Rfam ID: <a href="https://rfam.org/family/RF01057" target="_blank">RF01057</a></strong> (S-adenosyl-L-homocysteine riboswitch)<br /></p>
 
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
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/18374645/" target="_blank">2008</a><sup>[<a href="#ref1">1</a>]</sup>&emsp;Discovery of SAH riboswitch</p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Compare the features of SAM and SAH riboswitches&emsp;<a href="https://pubmed.ncbi.nlm.nih.gov/18443629/" target="_blank">2008</a><sup>[<a href="#ref2">2</a>]</sup></p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/20864509/" target="_blank">2010</a><sup>[<a href="#ref3">3</a>]</sup>&emsp;Crystal structure of SAH riboswitch</p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >SAH riboswitch has been shown to be capable of regulating gene expression in human cells&emsp;<a href="https://pubmed.ncbi.nlm.nih.gov/20435898/" target="_blank">2010</a><sup>[<a href="#ref4">4</a>]</sup></p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/36459353/" target="_blank">2023</a><sup>[<a href="#ref5">5</a>]</sup>&emsp;This review summarizes the current research progress on these SAM-related riboswitch families</p>
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
<font >SAH riboswitches are a kind of riboswitch that bind S-adenosylhomocysteine (SAH). When the coenzyme S-adenosylmethionine (SAM) is used in a methylation reaction, SAH is produced. SAH riboswitches typically up-regulate genes involved in recycling SAH to create more SAM (or the metabolically related methionine). This is particularly relevant to cells, because high levels of SAH can be toxic. Originally identified by bioinformatics, SAH riboswitches are apparent in many species of bacteria, predominantly certain Pseudomonadota and Actinomycetota. The atomic-resolution 3-dimensional structure of an SAH riboswitch has been solved using X-ray crystallography (from WiKi)<sup></sup>.</font>
<p><br /></p>
             
> Gene association
            
<font><p>Pathways for sulphate assimilation and biosynthesis of cysteine and methionine of <i>Escherichia coli</i> or <i>Pseudomonas syringae</i>. SAH riboswitch (red bar) is involved in multiple gene regulation in the synthetic pathway<sup>[<a href="#ref1">1</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
<tr >
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_association/SAH_riboswitch_gene_association.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                 
> Gene regulation
                
<font><p>Model of SAH riboswitch sequential folding and translational control in <i>Pseudomonas syringae</i>. We present the  prototypical mechanism, but not all possible mechanisms<sup>[<a href="#ref1">1</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/SAH_riboswitch_gene_regulation.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<br><br>
                         
<p class="header_box" id="Structure and Ligand recognition">Structure and Ligand recognition</p>
> 2D representation
        
<font><p>Top: Consensus sequence and secondary structure model for the SAH riboswitch. Bottom: Secondary structure depictions of the plant pathogen <i>Ralstonia solanacearum</i> SAH riboswitch according to PDB ID: 3NPQ<sup></sup>.</p></font>
<font><p>5'GGACGAGGAGCGCUGCAAGCGAGAGCCCAGGCUCGUCCGUUCAAACGGCGCUCA3' (Sequence from bottom structure )</p><br></font>
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
                            <img id="image-a0" src="/images/2D/SAH_riboswitch_2D1.svg" width="200" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="big.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage0('/images/2D/SAH_riboswitch_2D1.svg');">&lt;&lt; Switch to</a>
                            </div>
                        </div>
                        <div class="image-wrapper" >
                            <img id="image-b" src="/images/2D/SAH_riboswitch_2D2.svg" width="200" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="down.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage0('/images/2D/SAH_riboswitch_2D2.svg');">&lt;&lt; Switch to</a>
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
                
<font >2.18-Å resolution crystal structure of an SAH riboswitch from <i>Ralstonia solanacearum</i> complexed with S-adenosylmethionine. The figure reference from PDB ID: 3NPQ, SAM (shown in sticks) is labeled in red. Additional available structures that have been solved and detailed information are accessible on <i>Structures</i> page <sup>[<a href="#ref3">3</a>]</sup>.</font>
<div ><font ><p style="text-align:right;margin-bottom: 0px;">(Clicking the "Settings/Controls info" to turn Spin off)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></font>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/SAH_riboswitch_3D.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
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
  start_residue_number:8, 
  end_residue_number:13, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:47, 
  end_residue_number:54, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:14, 
  end_residue_number:31, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'A', 
  start_residue_number:43, 
  end_residue_number:46, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'A', 
  start_residue_number:1, 
  end_residue_number:7, 
  color:{r:255,g:135,b:10}
},
{
  struct_asym_id: 'A', 
  start_residue_number:32, 
  end_residue_number:39, 
  color:{r:255,g:135,b:10}
}, 
{
  struct_asym_id: 'A', 
  start_residue_number:55, 
  end_residue_number:55, 
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
        url:'/docs/pdbfiles/3NPQ.pdb',
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
                    
<font><p>Left: Surface representation of the binding pocket of the <i>Ralstonia solanacearum</i> SAH riboswitch generated from PDB ID: 3NPQ at 2.18-Å resolution. S-adenosylmethionine (SAM) (shown in sticks) is labeled in red. Right: Hydrogen bonding between SAM and adjacent bases<sup>[<a href="#ref3">3</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/SAH_riboswitch_binding_pockets1.svg" alt="drawing" style="width:500px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/SAH_riboswitch_binding_pockets2.svg" alt="drawing" style="width:500px"  px="" /></td>
</tr>
</table>
<p><br /></p>
                     
> Ligand recognition
                

<font><p>Chemical structures of various compounds used to probe the binding characteristics of the SAH riboswitch. Refer to the corresponding references for comprehensive details regarding reaction conditions and species information in measuring the dissociation constant displayed below<sup>[<a href="#ref3">3</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
<tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/ligand_recognition/SAH_riboswitch_ligand_recognition.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<br /><br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Riboswitches that sense S-adenosylhomocysteine and activate genes involved in coenzyme recycling.</strong></font><br />
Wang, J. X., Lee, E. R., Morales, D. R., Lim, J., & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/18374645/" target="_blank">Mol. Cell 29, 691–702 (2008).</a>
<br />
                
<a id="ref2"></a><font><strong>[2] Riboswitches that sense S-adenosylmethionine and S-adenosylhomocysteine.</strong></font><br />
Wang, J. X., & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/18443629/" target="_blank">Biochem. Cell Biol. 86, 157–168 (2008).</a>
<br />
                
<a id="ref3"></a><font><strong>[3] Structural basis for recognition of S-adenosylhomocysteine by riboswitches.</strong></font><br />
Edwards, A. L., Reyes, F. E., Héroux, A., & Batey, R. T.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/20864509/" target="_blank">RNA 16, 2144–2155 (2010).</a>
<br />
                
<a id="ref4"></a><font><strong>[4] Stimulation of -1 programmed ribosomal frameshifting by a metabolite-responsive RNA pseudoknot.</strong></font><br />
Chou, M. Y., Lin, S. C., & Chang, K. Y.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/20435898/" target="_blank">RNA 16, 1236–1244 (2010).</a>
<br />
                
<a id="ref5"></a><font><strong>[5] Structure-based insights into recognition and regulation of SAM-sensing riboswitches.</strong></font><br />
Zheng L, Song Q, Xu X, Shen X, Li C, Li H, Chen H, Ren A.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/36459353/" target="_blank">Sci China Life Sci.66(1):31-50 (2023).</a>
<br />
                