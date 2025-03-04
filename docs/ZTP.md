---
layout: post
title:  "ZTP"
date:   2023-04-05 00:00:00
author: Bowen Xiao, Xiaowei Lin
permalink: /docs/ZTP/
---
<p style="font-size: 24px"><strong>Rfam ID: <a href="https://rfam.org/family/RF01750" target="_blank">RF01750</a></strong> (ZMP/ZTP riboswitch)<br /></p>
 
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
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/20230605/" target="_blank">2010</a><sup>[<a href="#ref1">1</a>]</sup>&emsp;Discovery of <i>pfl</i> motif as a riboswitch candidate</p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Identification and validation of <i>pfl</i> motif as ZTP riboswitch&emsp;<a href="https://pubmed.ncbi.nlm.nih.gov/25616067/" target="_blank">2015</a><sup>[<a href="#ref2">2</a>]</sup></p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/26118534/" target="_blank">2015</a><sup>[<a href="#ref3">3</a>]</sup>&emsp;Crystal structure of the ZTP riboswitch bound to ZMP</p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Crystal structure of the ZTP riboswitch bound to ZMP at 1.80 Å&emsp;<a href="https://pubmed.ncbi.nlm.nih.gov/26144884/" target="_blank">2015</a><sup>[<a href="#ref4">4</a>]</sup></p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/26280533/" target="_blank">2015</a><sup>[<a href="#ref5">5</a>]</sup>&emsp;Crystal structure of the <i>Fusobacterium ulcerans</i> ZTP riboswitch bound to ZMP</p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Co-crystal structure of the <i>Fusobacterium ulcerans</i> ZTP riboswitch using an X-ray free-electron laser&emsp;<a href="https://pubmed.ncbi.nlm.nih.gov/31282869/" target="_blank">2019</a><sup>[<a href="#ref6">6</a>]</sup></p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/31636437/" target="_blank">2019</a><sup>[<a href="#ref7">7</a>]</sup>&emsp;The proposed mechanism for the ZTP riboswitch antitermination</p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Design and cocrystal structure of synthetic ligands targeting the ZTP riboswitch&emsp;<a href="https://pubmed.ncbi.nlm.nih.gov/32795418/" target="_blank">2020</a><sup>[<a href="#ref8">8</a>]</sup></p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p ><a href="https://pubmed.ncbi.nlm.nih.gov/32913225/" target="_blank">2020</a><sup>[<a href="#ref9">9</a>]</sup>&emsp;The ZTP riboswitch is kinetically controlled which active as slower unwinding, strategic pausing</p>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >The ZTP riboswitch programmable dynamic range <i>in vivo</i> via tuning strand displacement kinetics&emsp;<a href="https://pubmed.ncbi.nlm.nih.gov/36864761/" target="_blank">2023</a><sup>[<a href="#ref10">10</a>]</sup></p>
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
<font >The ZMP/ZTP riboswitch (called the <i>pfl</i> RNA motif before) refers to a conserved RNA structure present in some bacteria and originally discovered using bioinformatics. ZMP/ZTP riboswitch are consistently present in genomic locations that likely correspond to the 5' untranslated regions (5' UTRs) of protein-coding genes. This arrangement in bacteria is commonly associated with <i>cis</i>-regulatory elements. Moreover, they are in presumed 5' UTRs of multiple non-homologous genes, suggesting that they function only in these locations. Additional evidence of <i>cis</i>-regulatory function came from the observation that predicted rho-independent transcription terminators overlap pfl RNAs. This overlap suggests that the alternate secondary structures of <i>pfl</i> RNA and the transcription terminator stem-loops compete with each other, and this is a common mechanism for <i>cis</i> gene control in bacteria. ZMP/ZTP riboswitch are found in a variety of phyla of bacteria, but are not found in all the species of that phylum. ZMP/ZTP riboswitch are common among species of orders <i>Actinomycetales</i> and <i>Clostridiales</i>, the classes <i>Alphaproteobacteria</i> and <i>Betaproteobacteria</i> and the genus <i>Deinococcus</i>. They are also found in isolated species of <i>Bacteroidota</i>, <i>Chloroflexota</i>, and <i>Deltaproteobacteria</i>. 

The genes regulated by ZMP/ZTP riboswitch relate to one-carbon metabolism. Most obviously, for example, formate-tetrahydrofolate ligase synthesizes 10-formyltetrahydrofolate. The <i>glyA</i> and <i>folD</i> convert between other one-carbon adducts of tetrahydrofolate. Another gene commonly associated with ZMP/ZTP riboswitch is <i>purH</i>, which catalyzes the formylation of the intermediate AICAR in <i>de novo</i> synthesis of purines. The formyl group is taken from formyltetrahydrofolate, and purine biosynthesis is often the dominant user of formyltetrahydrofolate. In similar fashions, if less directly, most ZMP/ZTP riboswitch are associated with genes that are directly or indirectly involved in one-carbon metabolism. It appears that the ZTP/ZMP purine derivatives can be used to regulate one-carbon metabolism by indirectly sensing a shortage of 10-formyl-tetrahydrofolate. The atomic-resolution structure has been solved by X-ray crystallography. These structures were deposited into the Protein Data Bank under accessions 4ZNP  (From Wikipedia)<sup></sup>.</font>
<p><br /></p>
             
> Gene association
            
<font><p>Purine biosynthesis pathway of the ZMP/ZTP riboswitch derived from the γ-proteobacterium <i>Pectobacterium carotovorum</i>. Genes most frequently associated with ZMP/ZTP riboswitch are highlighted in red and genes that are occasionally associated are highlighted in green. Genes in black have not been observed to be associated with ZMP/ZTP riboswitch<sup>[<a href="#ref2">2</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
<tr >
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_association/ZTP_riboswitch_gene_association.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                 
> Gene regulation
                
<font><p>Potential mechanism of translation regulation by the ZMP/ZTP riboswitch derived from the <i>rhtB</i> gene of the bacterial species <i>Pectobacterium carotovorum</i>. The ribosome binding site (RBS) is showed on red. We present the  prototypical mechanism, but not all possible mechanisms<sup>[<a href="#ref11">11</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/ZTP_riboswitch_gene_regulation1.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<br><br>
                         
<p class="header_box" id="Structure and Ligand recognition">Structure and Ligand recognition</p>
> 2D representation
        
<font><p>Top: Consensus sequence and secondary structure model for the ZMP/ZTP riboswitch. Bottom: Secondary structure depictions of the ZMP/ZTP riboswitch from the <i>pfl</i> motif of <i>Thermosinus carboxydivorans</i> according to PDB ID: 4ZNP<sup>[<a href="#ref3">3</a>]</sup>.</p></font>
<font><p>5'GGGAUACAGGACUGGCGGAUUAGUGGGAAACCACGUGGACUGUAUCCGAAAAAAAGCCGACCGCCUGGGCAUC3' (Sequence from bottom structure )</p><br></font>
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
                            <img id="image-a0" src="/images/2D/ZTP_riboswitch_2D1.svg" width="200" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="big.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage0('/images/2D/ZTP_riboswitch_2D1.svg');">&lt;&lt; Switch to</a>
                            </div>
                        </div>
                        <div class="image-wrapper" >
                            <img id="image-b" src="/images/2D/ZTP_riboswitch_2D2.svg" width="200" style="border: 1px solid black; cursor: zoom-in;margin-top: 0px;margin-bottom: 0px;" alt="down.png"/>
                            <div class="button-wrapper">
                                <a class="btn " href="javascript:showImage0('/images/2D/ZTP_riboswitch_2D2.svg');">&lt;&lt; Switch to</a>
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
                
<font >The overall structure of the <i>Thermosinus carboxydivorans</i> ZMP/ZTP riboswitch was generated from PDB ID: 4ZNP at 2.94 Å resolution bound with 5- amino-4-imidazole carboxamide ribose-5'- monophosphate (ZMP) and Mg<sup>2+</sup>. ZMP (shown in sticks) and Mg<sup>2+</sup> is labeled in red. Additional available structures that have been solved and detailed information are accessible on <i>Structures</i> page <sup>[<a href="#ref3">3</a>]</sup>.</font>
<div ><font ><p style="text-align:right;margin-bottom: 0px;">(Clicking the "Settings/Controls info" to turn Spin off)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></font>
  <table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/ZTP_riboswitch_3D1.svg" alt="drawing" style="width:500px;margin-top: 0px;margin-bottom: 0px;" >
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
  start_residue_number:1, 
  end_residue_number:11, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'A', 
  start_residue_number:12, 
  end_residue_number:20, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:21, 
  end_residue_number:36, 
  color:{r:255,g:223,b:92}
},
{
  struct_asym_id: 'A', 
  start_residue_number:37, 
  end_residue_number:48, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'A', 
  start_residue_number:49, 
  end_residue_number:55, 
  color:{r:194,g:194,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:56, 
  end_residue_number:59, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:60, 
  end_residue_number:66, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:67, 
  end_residue_number:73, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:101, 
  end_residue_number:101, 
  color:{r:255,g:11,b:12}
},
{
  struct_asym_id: 'A', 
  start_residue_number:102, 
  end_residue_number:102, 
  color:{r:255,g:11,b:12}
},
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
        url:'/docs/pdbfiles/4ZNP.pdb',
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
                    
<font><p>Left: Surface representation of the binding pocket of the <i>Thermosinus carboxydivorans</i> ZMP/ZTP riboswitch generated from PDB ID: 4ZNP at 2.94 Å resolution. 5- amino-4-imidazole carboxamide ribose-5'- monophosphate (ZMP) (shown in sticks) and Mg<sup>2+</sup> (M) is labeled in red. Right: The hydrogen bonds of the ZTP riboswitch bound with 5- amino-4-imidazole carboxamide ribose-5'- monophosphate (ZMP) and Mg<sup>2+</sup> (M)<sup>[<a href="#ref3">3</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/ZTP_riboswitch_binding_pockets1.svg" alt="drawing" style="width:500px"  px="" /></td>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/binding_pockets/ZTP_riboswitch_binding_pockets2.svg" alt="drawing" style="width:500px"  px="" /></td>
</tr>
</table>
<p><br /></p>
                     
> Ligand recognition
                

<font><p>Chemical structures of 5- amino-4-imidazole carboxamide ribose-5'-triphosphate (ZTP) and its analogs. The apparent K<sub>D</sub> of each compound of ZMP/ZTP riboswitch is shown on bottom. Refer to the corresponding references for comprehensive details regarding reaction conditions and species information in measuring the dissociation constant displayed below<sup>[<a href="#ref2">2</a>,<a href="#ref8">8</a>]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:1000px;margin-left:auto;margin-right:auto;">
<tr>
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/ligand_recognition/ZTP_riboswitch_ligand_recognition.svg" alt="drawing" style="width:1000px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<br /><br>
                 
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Comparative genomics reveals 104 candidate structured RNAs from bacteria, archaea, and their metagenomes</strong></font><br />
Weinberg, Z. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/20230605/" target="_blank">Genome Biol. 11, R31 (2010).</a>
<br />
                
<a id="ref2"></a><font><strong>[2] An ancient riboswitch class in bacteria regulates purine biosynthesis and one-carbon metabolism</strong></font><br />
Kim, P. B., Nelson, J. W. & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/25616067/" target="_blank">Mol. Cell 57, 317–328 (2015).</a>
<br />
                
<a id="ref3"></a><font><strong>[3] Global RNA Fold and Molecular Recognition for a pfl Riboswitch Bound to ZMP, a Master Regulator of One-Carbon Metabolism</strong></font><br />
Ren, A., Rajashankar, K. R. & Patel, D. J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/26118534/" target="_blank">Structure 23, 1375–1381 (2015).</a>
<br />
                
<a id="ref4"></a><font><strong>[4] Metal Ion-Mediated Nucleobase Recognition by the ZTP Riboswitch</strong></font><br />
Trausch, J. J., Marcano-Velázquez, J. G., Matyjasik, M. M. & Batey, R. T.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/26144884/" target="_blank">Chem. Biol. 22, 829–837 (2015).</a>
<br />
                
<a id="ref5"></a><font><strong>[5] Recognition of the bacterial alarmone ZMP through long-distance association of two RNA subdomains</strong></font><br />
Jones, C. P. & Ferré-D’Amaré, A. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/26280533/" target="_blank">Nat. Struct. Mol. Biol. 22, 679–685 (2015).</a>
<br />
                
<a id="ref6"></a><font><strong>[6] Co-crystal structure of the Fusobacterium ulcerans ZTP riboswitch using an X-ray free-electron laser</strong></font><br />
Jones, C. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/31282869/" target="_blank">Acta Crystallogr. Sect. F Struct. Biol. Cryst. Commun. 75, 496–500 (2019).</a>
<br />
                
<a id="ref7"></a><font><strong>[7] A ligand-gated strand displacement mechanism for ZTP riboswitch transcription control</strong></font><br />
Strobel, E. J., Cheng, L., Berman, K. E., Carlson, P. D. & Lucks, J. B.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/31636437/" target="_blank">Nat. Chem. Biol. 15, 1067–1076 (2019).</a>
<br />
                
<a id="ref8"></a><font><strong>[8] Parallel Discovery Strategies Provide a Basis for Riboswitch Ligand Design</strong></font><br />
Tran, B. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/32795418/" target="_blank">Cell Chem Biol 27, 1241–1249.e4 (2020).</a>
<br />
                
<a id="ref9"></a><font><strong>[9] Real-time monitoring of single ZTP riboswitches reveals a complex and kinetically controlled decision landscape</strong></font><br />
Hua, B. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/32913225/" target="_blank">Nat. Commun. 11, 4531 (2020).</a>
<br />
                
<a id="ref10"></a><font><strong>[10] Tuning strand displacement kinetics enables programmable ZTP riboswitch dynamic range in vivo</strong></font><br />
Bushhouse, D. Z. & Lucks, J. B.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/36864761/" target="_blank">Nucleic Acids Res. 51, 2891–2903 (2023).</a>
<br />
                
<a id="ref11"></a><font><strong>[11] Employing a ZTP Riboswitch to Detect Bacterial Folate Biosynthesis Inhibitors in a Small Molecule High-Throughput Screen</strong></font><br />
Perkins, K. R., Atilho, R. M., Moon, M. H. & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/31609568/" target="_blank">ACS Chem. Biol. 14, 2841–2850 (2019).</a>
<br />
                