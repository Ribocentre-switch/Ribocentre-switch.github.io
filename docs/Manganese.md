---
layout: post
title:  "Manganese"
date:   2023-05-04 00:00:00
author: Yuanlin He, Xiaowei Lin
permalink: /docs/Manganese/
---
<p style="font-size: 24px"><strong>Rfam ID: [RF00080](https://rfam.xfam.org/family/RF00080,target="_blank")</strong> (<i>yybP-ykoY</i> manganese riboswitch)<br /></p>

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
       <p >Discovery of <i>yybP-ykoY</i> motif</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/15096624/" target="_blank">2004</a><sup>[1]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Identify the <i>yybP-ykoY</i> motif as a manganese ion sensor</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/25794618/" target="_blank">2015</a><sup>[2]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Mn(2+)-sensing mechanisms of <i>yybP-ykoY</i> riboswitches</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/25794619/" target="_blank">2015</a><sup>[3]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Demonstrating how the broad family of <i>yybP-ykoY</i> riboswitches use heptacoordination to selectively bind transition metal ions</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/29805037/" target="_blank">2018</a><sup>[4]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >The <i>S.pneumoniae</i> <i>yybP-ykoY</i> riboswitch functions to regulate Ca<sup>2+</sup> efflux</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/31165873/" target="_blank">2019</a><sup>[5]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >The ligand-dependent (un)folding path-way of the Mn<sup>2+</sup> sensing riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/31541094/" target="_blank">2019</a><sup>[6]</sup></div>
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
<font >The <i>yybP-ykoY</i> leader RNA element was originally discovered in <i>E</i>. coli during a large scale screen and was named SraF. This family was later found to exist upstream of related families of protein genes in many bacteria, including the yybP and ykoY genes in <i>B</i>. subtilis. The specific functions of these proteins are unknown, but this structured RNA element may be involved in their genetic regulation as a riboswitch. The <i>yybP-ykoY</i> element was later proposed to be manganese-responsive after another associated family of genes, YebN/MntP, was shown to encode Mn<sup>2+</sup> efflux pumps in several bacteria. Genetic data and a crystal structure confirmed that <i>yybP-ykoY</i> is a manganese riboswitch that directly binds Mn<sup>2+</sup> (From Wikipedia)<sup></sup>.</font>
<p><br /></p>
            
> Gene association
        
<font >Network of genes immediately downstream of the <i>yybP-ykoY</i> riboswitch are predicted to have roles in protecting against metal toxicity. P-ZnR denotes proteins with a peptidase-associated zinc-ribbon and MetJ-Arc denotes proteins with MetJ-Arc DNA-binding domains<sup>[2]</sup>.</font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;">
<tr >
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_association/yybP-ykoY_manganese_riboswitch_gene_association.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                
> Gene regulation
            
<font ><p>Potential mechanism of transcriptional regulation by the <i>yybP-ykoY</i> manganese riboswitch. RNA polymerase produced predominantly terminated transcripts in the absence of Mn<sup>2+</sup>. Addition of 0.5 millimolar (mM) Mn<sup>2+</sup>, but not other metals tested (Fe<sup>2+</sup>, Co<sup>2+</sup>, Ni<sup>2+</sup>,and Ca<sup>2+</sup>), led to highly efficient anti-termination<sup>[3]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/yybP-ykoY_manganese_riboswitch_gene_regulation.svg" alt="drawing" style="width:400px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/" alt="drawing" style="width:400px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<p><br /></p>
                    
<p class="header_box" id="Structure and Ligand recognition">Structure and Ligand recognition</p>
> 2D representation
        
<font >Left: Consensus sequence and secondary structure model for the <i>yybP-ykoY</i> manganese riboswitch. Right: Secondary structure depictions of the <i>yybP-ykoY</i> manganese riboswitch according to PDB ID: 4Y1I<sup>[3]</sup>.</font><br>
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
                <img src="/images/2D/yybP-ykoY_manganese_riboswitch_2D1.svg" alt="drawing" style="width:400px" />
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
                <img src="/images/2D/yybP-ykoY_manganese_riboswitch_2D2.svg" alt="drawing" style="width:400px" />
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
            
<font >The overall structure of the <i>yybP-ykoY</i> manganese riboswitch was generated from PDB ID: 4Y1I at 2.85 Å. The structure shows two series of coaxially stacked helices forming an overall hairpin shape, with the highly conserved L1 (yellow) and L3 (orange) docking together and binding two metal ions <sup>[3]</sup>.</font>
  <table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/yybP-ykoY_manganese_riboswitch_3D.svg" alt="drawing" style="width:400px;height:400px;margin-top: 0px;margin-bottom: 0px;" >
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
  start_residue_number:3, 
  end_residue_number:7, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:96, 
  end_residue_number:102, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:14, 
  end_residue_number:16, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:88, 
  end_residue_number:91, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:8, 
  end_residue_number:13, 
  color:{r:255,g:223,b:92}
},
{
  struct_asym_id: 'A', 
  start_residue_number:92, 
  end_residue_number:95, 
  color:{r:255,g:223,b:92}
},
{
  struct_asym_id: 'A', 
  start_residue_number:17, 
  end_residue_number:28, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'A', 
  start_residue_number:29, 
  end_residue_number:38, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:60, 
  end_residue_number:69, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:46, 
  end_residue_number:59, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:70, 
  end_residue_number:87, 
  color:{r:194,g:194,b:255}
}, 
{
  struct_asym_id: 'A', 
  start_residue_number:39, 
  end_residue_number:45, 
  color:{r:255,g:135,b:10}
},
{
  struct_asym_id: 'A', 
  start_residue_number:207, 
  end_residue_number:207, 
  color:{r:0,g:239,b:0}
},
{
  struct_asym_id: 'A', 
  start_residue_number:224, 
  end_residue_number:224, 
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
        url:'/docs/pdbfiles/4Y1I.pdb',
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
                
<font ><p>Left: Surface representation of the binding pocket of the <i>yybP-ykoY</i> manganese riboswitch generated from PDB ID: 4Y1I. The manganese ion is labeled in red. Right: The metal coordination scheme. Mg<sup>2+</sup> is coordinated octahedrally by five backbone phosphates and a water. The Mn<sup>2+</sup> contains five backbone phosphates and the N7 of A41. N6 of A41 also makes a H-bond to the phosphate of U39<sup>[3]</sup>.<br /></p></font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/yybP-ykoY_manganese_riboswitch_binding_pockets1.svg" alt="drawing" style="width:400px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/yybP-ykoY_manganese_riboswitch_binding_pockets2.svg" alt="drawing" style="width:400px"  px="" /></td>
</tr>
</table>
<p><br /></p>
                    
> Ligand recognition
            
<font >
<p>The Lactococcus lactis <i>yybP-ykoY</i> riboswitch binds Mn<sup>2+</sup> with an effective Kd of ~ 30–40 micromolar (μM), as monitored by both in vitro transcription (IVT) assays and selective 2’-hydroxyl acylation analyzed by primer extension (SHAPE)<sup>[3]</sup>.<br /><br /></p>
</font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;">
<tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/ligand_recognition/yybP-ykoY_manganese_riboswitch_ligand_recognition.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                
<p class="header_box" id="references">References</p>
            
<p><strong>[1] New RNA motifs suggest an expanded scope for riboswitches in bacterial genetic control.</strong><br />
Barrick, J. E. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/15096624/" target="_blank">Proc. Natl. Acad. Sci. U. S. A. 101, 6421–6426 (2004).</a>
<br /><br /></p>
                
<p><strong>[2] The ubiquitous yybP-ykoY riboswitch is a manganese-responsive regulatory element.</strong><br />
Dambach, M. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/25794618/" target="_blank">Mol. Cell 57, 1099–1109 (2015).</a>
<br /><br /></p>
                
<p><strong>[3] Mn(2+)-sensing mechanisms of yybP-ykoY orphan riboswitches.</strong><br />
Price, I. R., Gaballa, A., Ding, F., Helmann, J. D. & Ke, A.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/25794619/" target="_blank">Mol. Cell 57, 1110–1123 (2015).</a>
<br /><br /></p>
                
<p><strong>[4] Convergent Use of Heptacoordination for Cation Selectivity by RNA and Protein Metalloregulators.</strong><br />
Bachas, S. T. & Ferré-D’Amaré, A. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/29805037/" target="_blank">Cell Chem Biol 25, 962–973.e5 (2018).</a>
<br /><br /></p>
                
<p><strong>[5] A Mn-sensing riboswitch activates expression of a Mn2+/Ca2+ ATPase transporter in Streptococcus.</strong><br />
Martin, J. E. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/31165873/" target="_blank">Nucleic Acids Res. 47, 6885–6899 (2019).</a>
<br /><br /></p>
                
<p><strong>[6] Local-to-global signal transduction at the core of a Mn sensing riboswitch.</strong><br />
Suddala, K. C. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/31541094/" target="_blank">Nat. Commun. 10, 4304 (2019).</a>
<br /><br /></p>
                