---
layout: post
title:  "T-box"
date:   2023-05-15 00:00:00
author: Xiaoxue Chen, Zhizhong Lu, Mengxiao Li
permalink: /docs/T-box/
---
<p style="font-size: 24px"><strong>Rfam ID: [RF00230](https://rfam.xfam.org/family/RF00230,target="_blank")</strong> (T-box leader)<br /></p>

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
       <p >Discovery of T-box riboswitch</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/1735721/" target="_blank">1992</a><sup>[1]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >tRNA as a regulator of transcription antitermination</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/8348614/" target="_blank">1993</a><sup>[2]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Biochemical evidence for structural switch depend on the charge of bound tRNA</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/15890195/" target="_blank">2005</a><sup>[3]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Co-crystal structure of a T-box riboswitch stem I domain in complex with its cognate tRNA</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/23892783/" target="_blank">2013</a><sup>[4]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >A T-box riboswitch subclass regulates at the level of translation initiation</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/25583497/" target="_blank">2015</a><sup>[5]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Crystal structure of full-length T-box from <i>Mycobacterium tuberculosis</i></p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/31740853/" target="_blank">2019</a><sup>[6]</sup></div>
     </div>
    </timelineli>
        

    <timelineli class="day">
     <div class="events">
       <p >Cryo-EM structures of <i>Bacillus subtilis</i> T-box-tRNA complexes</p>
       <div class="date"><a href="https://pubmed.ncbi.nlm.nih.gov/31740854/" target="_blank">2019</a><sup>[7]</sup></div>
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
<font >Usually found in gram-positive bacteria, the T box leader sequence is an RNA element that controls gene expression through the regulation of translation by binding directly to a specific tRNA and sensing its aminoacylation state. This interaction controls expression of downstream aminoacyl-tRNA synthetase genes, amino acid biosynthesis, and uptake-related genes in a negative feedback loop. The uncharged tRNA acts as the effector for transcription antitermination of genes in the T-box leader family. The anticodon of a specific tRNA base pairs to a specifier sequence within the T-box motif, and the NCCA acceptor tail of the tRNA base pairs to a conserved bulge in the T-box antiterminator hairpin (From Wikipedia)<sup></sup>.</font>
<p><br /></p>
            
> Gene association
        
<font >The T-box mechanism is a common regulatory strategy used for modulating the expression of genes of amino acid metabolism-related operons in gram-positive bacteria, especially members of the Firmicutes.  Amino acid biosynthesis that are regulated by the T-box mechanism. the T-box regulation of genes involved in the biosynthesis of Ala, Gly, Ser, Pro, Arg, Met, Cys, Ile, Leu, Val, Tyr, Phe, Trp, His, Asn, Asp, and Thr was confirmed<sup>[8]</sup>.</font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;">
<tr >
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_association/nan" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
</td>
</tr>
</table>
<p><br /></p>
                
> Gene regulation
            
<font ><p>tRNA is outlined in purple surface and is shown as a ribbon. Solid and dotted lines represent common elements and variable elements, respectively, of T-boxes. Left, uncharged tRNA binds to a T-box through base pairing between the anticodon (green) and specifier sequence (yellow) and between the acceptor end (blue) and discriminatory sequence (red). These interactions drive formation of the antiterminator. Right, a tRNA charged with an amino acid (pink oval) is rejected by the T-box; this yields an alternative (terminator) conformation of the RNA<sup>[9]</sup>.</p></font>
<table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/gene_regulation/T-box_riboswitch_gene_regulation.svg" alt="drawing" style="width:800px;margin-top: 0px;margin-bottom: 0px;" >
  </td>
</tr>
</table>
<p><br /></p>
                    
<p class="header_box" id="Structure and Ligand recognition">Structure and Ligand recognition</p>
> 2D representation
        
<font >Left: Consensus sequence and secondary structure model for the T-box riboswitch. Middle: Secondary structure depictions of the T-box riboswitch according to PDB ID: 6UFG. Right: Secondary structure depictions of the THF-I riboswitch according to PDB ID: 6POM. tRNA is colored in pale purple<sup>[6],[7]</sup>.</font><br>
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
                <img src="/images/2D/T-box_riboswitch_2D1.svg" alt="drawing" style="width:400px" />
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
                <img src="/images/2D/T-box_riboswitch_2D2.svg" alt="drawing" style="width:400px" />
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
<!--2D模3--------------------------->
<td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
<style>
.zoom-wrapper3 {
    width: 400px;
    height: 400px;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
    <div class="main-container">
        <div class="zoom-wrapper3">
            <div class="zoom-area3">
                <img src="/images/2D/T-box_riboswitch_2D3.svg" alt="drawing" style="width:400px" />
            </div>
        </div>
    </div>
    <script src="https://www.ribocentre.org/js/panzoom.js"></script>
    <script type='text/javascript'>
      var zoomWraper3 = document.querySelector(".zoom-wrapper3");
      var panzoom3 = Panzoom(document.querySelector(".zoom-area3"), {
      maxScale: 6
      });
      zoomWraper3.addEventListener("wheel", panzoom3.zoomWithWheel);
      panzoom3.zoom(0.8);
    </script>
</td>
</tr></table><br>
<p><br /></p>
                    
> 3D visualisation
            
<font >Co-crystal structure of  <i>M. tuberculosis ileS</i>  T-box in complex with tRNA-3'-OH was generated from PDB ID: 6UFG at 2.93 Å resolution. tRNA is colored in pale purple <sup>[6]</sup>.</font>
  <table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/T-box_riboswitch_3D1.svg" alt="drawing" style="width:400px;height:400px;margin-top: 0px;margin-bottom: 0px;" >
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
  end_residue_number:29, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:30, 
  end_residue_number:44, 
  color:{r:255,g:135,b:10}
},
{
  struct_asym_id: 'A', 
  start_residue_number:49, 
  end_residue_number:66, 
  color:{r:255,g:135,b:10}
},
{
  struct_asym_id: 'A', 
  start_residue_number:67, 
  end_residue_number:78, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:79, 
  end_residue_number:97, 
  color:{r:255,g:223,b:92}
},
{
  struct_asym_id: 'A', 
  start_residue_number:98, 
  end_residue_number:118, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'A', 
  start_residue_number:119, 
  end_residue_number:166, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'B', 
  start_residue_number:1, 
  end_residue_number:77, 
  color:{r:194,g:194,b:255}
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
        url:'/docs/pdbfiles/6ufg.pdb',
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
                
<font >4.9-Å resolution cryo-EM structure of a full-length <i>B. subtilis glyQS</i> T-box-tRNA<sup>Gly</sup> complex was generated from PDB ID: 6POM. tRNA is colored in pale purple <sup>[7]</sup>.</font>
  <table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
  <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px">
  <img src="/images/3D/T-box_riboswitch_3D2.svg" alt="drawing" style="width:400px;height:400px;margin-top: 0px;margin-bottom: 0px;" >
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
          .viewerSection2 {
            padding-top: 0px;
          }
          .controlsSection2 {
            width: 300px;
              display: flex;
              float:left;
              padding: 0px 0 0 0;
              height:25px;
            }
            .controlBox2 {
              border: 0px solid lightgray;
              padding: 0px;
              margin-bottom: 0px;
            }
          #myViewer2{
            float:left;
            width:400px;
            height: 400px;
            position:relative;
          }
        </style>
    </head>
    <body onload="customize()">
        <div class="controlsSection2">
            <button onclick="
              var selectSections2 = [
                {
  struct_asym_id: 'A', 
  start_residue_number:13, 
  end_residue_number:42, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:44, 
  end_residue_number:86, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:88, 
  end_residue_number:114, 
  color:{r:128,g:219,b:158}
},
{
  struct_asym_id: 'A', 
  start_residue_number:118, 
  end_residue_number:121, 
  color:{r:255,g:255,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:122, 
  end_residue_number:126, 
  color:{r:255,g:223,b:92}
},
{
  struct_asym_id: 'A', 
  start_residue_number:127, 
  end_residue_number:133, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'A', 
  start_residue_number:140, 
  end_residue_number:146, 
  color:{r:255,g:170,b:220}
},
{
  struct_asym_id: 'A', 
  start_residue_number:147, 
  end_residue_number:148, 
  color:{r:255,g:135,b:10}
},
{
  struct_asym_id: 'A', 
  start_residue_number:149, 
  end_residue_number:158, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'A', 
  start_residue_number:159, 
  end_residue_number:161, 
  color:{r:10,g:11,b:255}
},
{
  struct_asym_id: 'A', 
  start_residue_number:162, 
  end_residue_number:162, 
  color:{r:255,g:124,b:128}
},
{
  struct_asym_id: 'A', 
  start_residue_number:163, 
  end_residue_number:167, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'A', 
  start_residue_number:172, 
  end_residue_number:176, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'A', 
  start_residue_number:177, 
  end_residue_number:177, 
  color:{r:255,g:124,b:128}
},
{
  struct_asym_id: 'A', 
  start_residue_number:178, 
  end_residue_number:182, 
  color:{r:9,g:254,b:254}
},
{
  struct_asym_id: 'B', 
  start_residue_number:1, 
  end_residue_number:75, 
  color:{r:194,g:194,b:255}
}
              ]
            viewerInstance2.visual.select({ data: selectSections2, nonSelectedColor: {r:255,g:255,b:255}})" style="float:right;height:25px;width: 120px;">Color Selection</button><br><br>
          <button button style="float: left;height:25px;width: 120px;" onclick="viewerInstance2.visual.clearSelection()">Clear Selection</button><br><br>
      </div>
    <div class="viewerSection2">
    <!-- Molstar container -->
      <div id="myViewer2"></div>
    </div>
    <script>
      var viewerInstance2 = new PDBeMolstarPlugin();
      var options2 = {
        customData:{
        url:'/docs/pdbfiles/6pom.pdb',
        format: 'pdb'},
        expanded: false,
        hideControls: true,
        bgColor: {r:255, g:255, b:255},
        }
      var viewerContainer2 = document.getElementById('myViewer2');
      viewerInstance2.render(viewerContainer2, options2);
    </script>
    </body>
    </html></td>
  </tr></table><br>
  <p><br /></p>
                
> Interface
                
   <font ><p>Details of the T-box riboswitch-tRNA interface. A, Overall structure of  T-box riboswitch-tRNA (PDB ID: 6UFG), tRNA is colored in pale purple. S1: the <i>Mtb-ileS</i> aminoacylation sensing module bound to tRNA<sup>Ile</sup> (pale purple) with the linker (yellow), Stem-III (pink) and AntiS (cyan) domains. S2: the Stem-II and its interaction with the codon-anticodon pair  between Stem-I (green) and tRNA<sup>Ile</sup> (pale purple). B, C, D, Enlarged aminoacylation sensing module (S1 in A). E, F, G, H, Enlarged decoding module (S2 in A) <sup>[6]</sup>.<br /></p></font>
   <table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
   <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/interface/T-box_riboswitch_interface1.svg" alt="drawing" style="width:800px"  px="" /></td>
   </tr>
   </table>
   <p><br /></p>
                                       
   <font ><p>Details of the T-box riboswitch-tRNA (PDB ID: 6POM)  interface. A, Overall structure of  T-box riboswitch-tRNA (PDB ID: 6UFG), tRNA is colored in pale purple. S1: the interface between the tRNA 3′ end and the discriminator. S2: interface between the tRNA anticodon and the T-box specifier. S3: interface between the tRNA elbow and  stem I distal interdigitated T-loops. B, C, D, Enlarged aminoacylation sensing module (S1 in A). E, F, Enlarged decoding module (S2 in A). G, Enlarged decoding module (S3 in A)<sup>[7]</sup>.<br /></p></font>
   <table class="table table-bordered" style="table-layout:fixed;width:800px;margin-left:auto;margin-right:auto;"><tr>
   <td style="text-align:center;padding-bottom: 0px;padding-left: 0px;padding-top: 0px;padding-right: 0px"><img src="/images/interface/T-box_riboswitch_interface2.svg" alt="drawing" style="width:800px"  px="" /></td>
   </tr>
   </table>
   <p><br /></p>
                                       
> Ligand recognition
            
<p class="header_box" id="references">References</p>
            
<p><strong>[1] Analysis of the Bacillus subtilis tyrS gene: conservation of a regulatory sequence in multiple tRNA synthetase genes.</strong><br />
Henkin, T. M., Glass, B. L. & Grundy, F. J.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/1735721/" target="_blank">J. Bacteriol. 174, (1992).</a>
<br /><br /></p>
                
<p><strong>[2] tRNA as a positive regulator of transcription antitermination in B. subtilis.</strong><br />
Grundy, F. J. & Henkin, T. M.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/8348614/" target="_blank">Cell 74, 475–482 (1993).</a>
<br /><br /></p>
                
<p><strong>[3] Structural transitions induced by the interaction between tRNA(Gly) and the Bacillus subtilis glyQS T box leader RNA.</strong><br />
Yousef, M. R., Grundy, F. J. & Henkin, T. M.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/15890195/" target="_blank">J. Mol. Biol. 349, 273–287 (2005).</a>
<br /><br /></p>
                
<p><strong>[4] Co-crystal structure of a T-box riboswitch stem I domain in complex with its cognate tRNA.</strong><br />
Zhang, J. & Ferré-D’Amaré, A. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/23892783/" target="_blank">Nature 500, 363–366 (2013).</a>
<br /><br /></p>
                
<p><strong>[5] T box riboswitches in Actinobacteria: translational regulation via novel tRNA interactions.</strong><br />
Sherwood, A. V., Grundy, F. J. & Henkin, T. M.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/25583497/" target="_blank">Proc. Natl. Acad. Sci. U. S. A. 112, 1113–1118 (2015).</a>
<br /><br /></p>
                
<p><strong>[6] Structural basis for tRNA decoding and aminoacylation sensing by T-box riboregulators.</strong><br />
Battaglia, R. A., Grigg, J. C. & Ke, A.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/31740853/" target="_blank">Nat. Struct. Mol. Biol. 26, 1106–1113 (2019).</a>
<br /><br /></p>
                
<p><strong>[7] Structural basis of amino acid surveillance by higher-order tRNA-mRNA interactions.</strong><br />
Li, S. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/31740854/" target="_blank">Nat. Struct. Mol. Biol. 26, 1094–1105 (2019).</a>
<br /><br /></p>
                
<p><strong>[8] Biochemical features and functional implications of the RNA-based T-box regulatory mechanism.</strong><br />
Gutiérrez-Preciado, A., Henkin, T. M., Grundy, F. J., Yanofsky, C. & Merino, E.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/19258532/" target="_blank">Microbiol. Mol. Biol. Rev. 73, 36–61 (2009).</a>
<br /><br /></p>
                
<p><strong>[9] T-box RNA gets boxed.</strong><br />
Weaver, J. W. & Serganov, A.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/31792446/" target="_blank">Nat. Struct. Mol. Biol. 26, 1081–1083 (2019).</a>
<br /><br /></p>
                