---
layout: post
title:  "c-di-AMP"
date:   2023-05-31 00:00:00
author: Jie Deng,Yuhang Luo
permalink: /docs/c-di-AMP/
---
<p style="font-size: 24px"><strong>Rfam ID: <a href="https://rfam.org/family/RF00379" target="_blank">RF00379</a></strong> (YdaO/YuaA leader)<br /></p>
 
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
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/15096624/" target="_blank">2004</a><sup>[<a href="#ref1">1</a>]</sup>&emsp;The ydaO motif was first identified</p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >The ydaO motif specifically bound ATP&emsp;<a href="https://pubmed.ncbi.nlm.nih.gov/23086297/" target="_blank">2012</a><sup>[<a href="#ref3">3</a>]</sup></p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/24141192/" target="_blank">2013</a><sup>[<a href="#ref4">4</a>]</sup>&emsp;c-di-AMP is the real ligand of ydaO motif</p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Crystal structure of the <i>Thermoanaerobacter tengcongensis</i> c-di-AMP riboswitch binding with c-di-AMP&emsp;<a href="https://pubmed.ncbi.nlm.nih.gov/25086509/" target="_blank">2014</a><sup>[<a href="#ref5">5</a>]</sup></p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/25086507/" target="_blank">2014</a><sup>[<a href="#ref6">6</a>]</sup>&emsp;Crystal structures of the c-di-AMP riboswitch from <i>Thermoanaerobacter pseudethanolicus</i> and <i>Thermovirga lienii</i></p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Crystal structure of the  <i>Bacillus subtilis</i> c-di-AMP riboswitch&emsp;<a href="https://pubmed.ncbi.nlm.nih.gov/25271255/" target="_blank">2014</a><sup>[<a href="#ref7">7</a>]</sup></p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/31044176/" target="_blank">2019</a><sup>[<a href="#ref8">8</a>]</sup>&emsp;The combination of c-di-AMP and riboswitch promotes the internal termination of blocking kdpFABC transcription</p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Structure of Human pir-miRNA-202 Apical Loop and One-base-pair Fused to the c-di-AMP riboswitch Scaffold&emsp;<a href="https://doi.org/10.1101/2020.05.05.078014" target="_blank">2020</a><sup>[<a href="#ref9">9</a>]</sup></p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/36838266/" target="_blank">2023</a><sup>[<a href="#ref10">10</a>]</sup>&emsp;c-di-AMP riboswitch may affect the translation of downstream genes</p>
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
<font >The YdaO/YuaA leader (now called the cyclic di-AMP riboswitch) is a conserved RNA structure found upstream of the ydaO and yuaA genes in Bacillus subtilis and related genes in other bacteria. Its secondary structure and gene associations were predicted by bioinformatics. These RNAs function as riboswitches, and sense the signaling molecule cyclic di-AMP<sup></sup>.</font>
<p><br /></p>
             
> Gene regulation
                
<font><p>Potential mechanism of the c-di-AMP riboswitch for controlling gene expression in  <i>Caldanaerobacter subterraneus subsp</i>. The ribosome binding site (c-di-AMP) is showed on red. We present the  prototypical mechanism, but not all possible mechanisms<sup>[<a href="#ref8">8</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/c-di-AMP_gene_regulation.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<br><br>
                         
<p class="header_box" id="Structure and Ligand recognition">Structure and Ligand recognition</p>
> 2D representation
        
<font><p>Top: Consensus sequence and secondary structure model for the c-di-AMP riboswitch. Bottom: Secondary structure depictions of the <i>Caldanaerobacter subterraneus subsp</i> c-di-AMP riboswitch according to PDB ID: 4QLM. The molecule of the Cyclic diadenylate (c-di-AMP) observed in the crystal structure are denoted in red<sup>[<a href="#ref5">5</a>]</sup>.</p></font>
<font><p>5'GGAUCGCUGAACCCGAAAGGGGCGGGGGACCCAGAAAUGGGGCGAAUCUCUUCCGAAAGGAAGAGUAGGGUUACUCCUUCGACCCGAGCCCGUCAGCUAACCUCGCAAGCGUCCGAAGGAGAAUC3' (Sequence from bottom structure )</p><br></font>
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
                            <img id="image-a0" src="/images/2D/c-di-AMP_2D1.svg" width="200" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="big.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage0('/images/2D/c-di-AMP_2D1.svg');">&lt;&lt; Switch to</a>
                            </div>
                        </div>
                        <div class="image-wrapper" >
                            <img id="image-b" src="/images/2D/c-di-AMP_2D2.svg" width="200" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="down.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage0('/images/2D/c-di-AMP_2D2.svg');">&lt;&lt; Switch to</a>
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
                
<font >The overall structure of the <i>Caldanaerobacter subterraneus subsp</i> c-di-AMP riboswitch was generated from PDB ID: 4QLM at 2.72 Å resolution bound with 6<i>S</i>-c-di-AMP. 6<i>S</i>-c-di-AMP (shown in sticks) is colored in red. Additional available structures that have been solved and detailed information are accessible on <i>Structures</i> page <sup>[<a href="#ref5">5</a>]</sup>.</font>
<div ><font ><p style="text-align:right;margin-bottom: 0px;">(Clicking the "Settings/Controls info" to turn Spin off)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></font>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/c-di-AMP_3D.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
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
  start_residue_number:3, 
  end_residue_number:4, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:5, 
  end_residue_number:9, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:10, 
  end_residue_number:12, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:22, 
  end_residue_number:28, 
 color:{r:255,g:135,b:10}
},
{
  struct_asym_id: 'A', 
  start_residue_number:29, 
  end_residue_number:31, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:32, 
  end_residue_number:32, 
  color:{r:255,g:11,b:12}
},
{
  struct_asym_id: 'A', 
  start_residue_number:33, 
  end_residue_number:34, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:39, 
  end_residue_number:39, 
  color:{r:255,g:11,b:12}
},
{
  struct_asym_id: 'A', 
  start_residue_number:40, 
  end_residue_number:44, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'A', 
  start_residue_number:45, 
  end_residue_number:46, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:47, 
  end_residue_number:66, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'A', 
  start_residue_number:67, 
  end_residue_number:72, 
  color:{r:255,g:223,b:92}
},
{
  struct_asym_id: 'A', 
  start_residue_number:73, 
  end_residue_number:73, 
  color:{r:255,g:11,b:12}
},
{
  struct_asym_id: 'A', 
  start_residue_number:74, 
  end_residue_number:80, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:81, 
  end_residue_number:86, 
  color:{r:255,g:223,b:92}
},
{
  struct_asym_id: 'A', 
  start_residue_number:87, 
  end_residue_number:91, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'A', 
  start_residue_number:92, 
  end_residue_number:93, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:94, 
  end_residue_number:94, 
  color:{r:255,g:11,b:12}
},
{
  struct_asym_id: 'A', 
  start_residue_number:95, 
  end_residue_number:95, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:96, 
  end_residue_number:96, 
  color:{r:255,g:11,b:12}
},
{
  struct_asym_id: 'A', 
  start_residue_number:97, 
  end_residue_number:99, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:100, 
  end_residue_number:106, 
  color:{r:255,g:135,b:10}
},
{
  struct_asym_id: 'A', 
  start_residue_number:107, 
  end_residue_number:111, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:112, 
  end_residue_number:112, 
  color:{r:255,g:11,b:12}
},
{
  struct_asym_id: 'A', 
  start_residue_number:113, 
  end_residue_number:114, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:115, 
  end_residue_number:121, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:122, 
  end_residue_number:123, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:201, 
  end_residue_number:202, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:203, 
  end_residue_number:204, 
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
        url:'/docs/pdbfiles/4QLM.pdb',
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
                    
<font><p>Left: Surface representation of the binding pocket of the <i>Caldanaerobacter subterraneus subsp</i> c-di-AMP riboswitch generated from PDB ID: 4QLM at 2.72 Å resolution. 6<i>S</i>-c-di-AMP (6<i>S</i>-c-di-AMP) (shown in sticks) is labeled in red. Right: The hydrogen bond of  binding sites of the c-di-AMP riboswitch bound with 6<i>S</i>-c-di-AMP.Both Aα and Aβ of c-di-AMP molecule A are wedged between bases of the RNA and their base and cyclic dinucleotide backbone form similar patterns of intermolecular hydrogen bonds with the sugar-phosphate backbone<sup>[<a href="#ref5">5</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/c-di-AMP_binding_pockets1.svg" alt="drawing" style="width:500px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/c-di-AMP_binding_pockets2.svg" alt="drawing" style="width:500px"  px="" /></td>
</tr>
</table>
<p><br /></p>
                     
> Ligand recognition
                

<font><p>Chemical structures of Cyclic diadenylate(c-di-AMP) and its analogs. The apparent K<sub>D</sub> of each compound of c-di-AMP riboswitch is shown on bottom. Refer to the corresponding references for comprehensive details regarding reaction conditions and species information in measuring the dissociation constant displayed below<sup>[<a href="#ref4">4</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
<tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/ligand_recognition/c-di-AMP_ligand_recognition.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<br /><br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] New RNA motifs suggest an expanded scope for riboswitches in bacterial genetic control.</strong></font><br />
Barrick, J. E. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/15096624/" target="_blank">Proc. Natl. Acad. Sci. U. S. A. 101, 6421–6426 (2004).</a>
<br />
                
<a id="ref2"></a><font><strong>[2] Structural and biochemical determinants of ligand binding by the c-di-GMP riboswitch</strong></font><br />
Kathryn, D. S. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/20690679/" target="_blank">Biochemistry34,(2010)</a>
<br />
                
<a id="ref3"></a><font><strong>[3] The ydaO motif is an ATP-sensing riboswitch in Bacillus subtilis.</strong></font><br />
Watson, P. Y. & Fedor, M. J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/23086297/" target="_blank">Nat. Chem. Biol. 8, 963–965 (2012).</a>
<br />
                
<a id="ref4"></a><font><strong>[4] Riboswitches in eubacteria sense the second messenger c-di-AMP.</strong></font><br />
Nelson, J. W. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/24141192/" target="_blank">Nat. Chem. Biol. 9, 834–839 (2013).</a>
<br />
                
<a id="ref5"></a><font><strong>[5] c-di-AMP binds the ydaO riboswitch in two pseudo-symmetry-related pockets.</strong></font><br />
Ren, A. & Patel, D. J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/25086509/" target="_blank">Nat. Chem. Biol. 10, 780–786 (2014).</a>
<br />
                
<a id="ref6"></a><font><strong>[6] Structural insights into recognition of c-di-AMP by the ydaO riboswitch.</strong></font><br />
Gao, A. & Serganov, A.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/25086507/" target="_blank">Nat. Chem. Biol. 10, 787–792 (2014).</a>
<br />
                
<a id="ref7"></a><font><strong>[7] Crystal structure of a c-di-AMP riboswitch reveals an internally pseudo-dimeric RNA.</strong></font><br />
Jones, C. P. & Ferré-D’Amaré, A. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/25271255/" target="_blank">EMBO J. 33, 2692–2703 (2014).</a>
<br />
                
<a id="ref8"></a><font><strong>[8] A c-di-AMP riboswitch controlling kdpFABC operon transcription regulates the potassium transporter system in Bacillus thuringiensis.</strong></font><br />
Wang, X. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/31044176/" target="_blank">Commun Biol 2, 151 (2019).</a>
<br />
                
<a id="ref9"></a><font><strong>[9] Structures of microRNA-precursor apical junctions and loops reveal noncanonical base pairs important for processing</strong></font><br />
Shoffner, G.M., Peng, Z., Guo, F.<br />
<a href="https://doi.org/10.1101/2020.05.05.078014" target="_blank">bioRxiv; 2020.</a>
<br />
                
<a id="ref10"></a><font><strong>[10] C-di-AMP Is a Second Messenger in Corynebacterium glutamicum That Regulates Expression of a Cell Wall-Related Peptidase via a Riboswitch.</strong></font><br />
Reich, S. J. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/36838266/" target="_blank">Microorganisms 11, (2023).</a>
<br />
                