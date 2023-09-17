---
title: "Ribocentre - TandemRS"
layout: piclay
excerpt: "Riboswitches: A riboswitch database"
sitemap: True
permalink: /tandom_riboswitches/
---

<h1 class="post-title" itemprop="name headline">Tandem Riboswitches</h1>
<font>Tandem riboswitches refer to the arrangement of aptamers or complete riboswitches in tandem, creating RNA systems with more complex gene regulatory functions. Various types of independent tandem riboswitches have been identified. We present three categories for discussing multi-ligand sensing and regulation by riboswitches and tandem riboswitches: 'Single riboswitch sensing multiple ligand molecules', 'Tandem riboswitches sensing identical ligands', and 'Tandem riboswitches sensing multiple ligands'.</font>
<br><br>

<html>
<head>
  <title>横向排列的点击按钮</title>
  <style>
    /* 按钮容器样式 */
    .button-container {
      display: flex;
      justify-content: left;
      align-items: center;
      height: 50px;}

    
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
      border: 1px solid #005826;
      border-radius: 5px;
      
      
    }
    
    
    /* 鼠标悬停样式 */
    .button:hover {
      background-color: #999;
      cursor: pointer;
    }
    .header_box {
    border: none;
    background: #efefef;
    font-size:24px
  }
  blockquote {
  margin: 0 0 0p}
  </style>
</head>
<body>
<p id="Single riboswitch sensing multiple ligand molecules"> </p>

  <p style="font-size: 16px">Click the buttons to navigate to different sections:</p>
  <div class="button-container">
    <a class="button" href="#Single riboswitch sensing multiple ligand molecules" >Single RS-multiple ligands</a>
    <a class="button" href="#Tandem riboswitches sensing identical ligands">Tandem RS-identical ligands</a>
    <a class="button" href="#Tandem riboswitches sensing multiple ligands">Tandem RS-multiple ligands</a>
  </div>
</body>
</html>
<br>  
        
<p class="header_box" >Single riboswitch sensing more than one molecules of ligands</p>
<font><p>A single riboswitch not only can bind a single metabolite molecule, but also can sense two or more molecules of the ligand. Here shows three examples, the c-di-AMP riboswitch (A) from <i>Thermoanaerobacter tengcongensis</i>, the guanidine-II riboswitch (B) from <i>Pseudomonas aeruginosa</i> and the PreQ<sub>1</sub>-I type 1 riboswitch (C) from <i>Carnobacterium antarcticus</i>, describing how a single riboswitch sensing more than one molecules of ligands to regulate gene expression.</p></font>    
        
<div style="weight:400px;display:block;margin:0 auto;border:solid 1px;border-radius:0;">
<img src="/images/tandem/Tandem_RS_1.svg" alt="drawing" >
</div>
<div style="display: flex; justify-content: center;">
<a href="/downloads/tandem/Tandem_RS_1.pdf" target="_blank" download="Tandem_RS_1.pdf"><button class="btn btn-secondary"><span class="glyphicon 
glyphicon-download-alt"></span>&nbsp;&nbsp;Download above picture</button></a>
</div><br>
                                            
<html>
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <title>Ribozyme applications </title>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css">
</head>
    <style>
        th {background-color: #005826;
        color: rgba(255,255,255,0.9);
            cursor: pointer;
        }
    </style>
  <script type="text/javascript"  src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script type="text/javascript"  src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript"  src="https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js"></script>
    <script type="text/javascript"  src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js"></script>
    <script type="text/javascript">

        $(document).ready(function() {
            $.noConflict();
            $('#Dnatable').DataTable( {
                dom: 'Bfrtip', 
                buttons: [
                    'copy', 'csv', 'excel', 'pdf', 
                ]

            } );
        } );
   </script>
<table id="Dnatable" class="table table-striped table-bordered" cellspacing="0" width="100%">
  <thead>
  <tr>
    <th>Riboswitch name</th>
    <th>Species</th>
    <th>Description </th>
    <th>First author</th>
    <th>Corresponding author</th>
    <th>Time</th>
    <th>Reference</th>
    <th>Journal</th>
  </tr>
 </thead>
 <tbody>
        
  <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/Magnesium" target="_blank"><b>Mg<sup>2+</sup>-I riboswitch</b></a></td>
    <td><i>Bacillus subtilis</i></td>
    <td>This study identified a previously uncharacterized orphan riboswitch as M-box (Mg<sup>2+</sup>-I) riboswitch by a combination of genetic, biochemical, and biophysical techniques. And a crystal structure was determined at 2.6 Å to provide molecular details, which demonstrated that this riboswitch binds six tightly associated magnesium.</td>
    <td>Charles E. Dann III</td>
    <td>Wade C. Winkler</td>
    <td>2007</td>
    <td>Structure and Mechanism of a Metal-Sensing Regulatory RNA</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/17803910/"  target="_blank" ><b>cell</b></a></td>
  </tr>
    
                    
  <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/Magnesium" target="_blank"><b>Mg<sup>2+</sup>-I riboswitch</b></a></td>
    <td><i>Bacillus subtilis</i></td>
    <td>The authors used nucleotide analog interference mapping (NAIM) to investigate the ability of Mg<sup>2+</sup>-I riboswitch RNAs to fold in varying levels of magnesium. They found that there were three metal binding cores within RNA containing a third potential unidentified metal binding core and Mg<sup>2+</sup>-I RNAs require specific binding of a network of metal ions for partial fulfillment of their metalloregulatory functions</td>
    <td>Catherine A. Wakeman</td>
    <td>Wade C. Winkler</td>
    <td>2009</td>
    <td>Multiple metal-binding cores are required for metalloregulation by M-box riboswitch RNAs</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/19619558/"  target="_blank" ><b>J Mol Biol</b></a></td>
  </tr>
    
                    
  <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/NiCo" target="_blank"><b>NiCo/Fe<sup>2+</sup> riboswitch</b></a></td>
    <td><i>Clostridium scindens</i>, Erysipelotrichaceae bacterium</td>
    <td>This paper reported their identification of NiCo riboswitches, which selectively responds to low abundance metal ions, Co<sup>2+</sup> and Ni<sup>2+</sup>. The authors resolved an atomic resolution model of Co<sup>2+</sup>-bound NiCo RNA at 2.6 Å using X-ray crystallography, experimentally locating 4 Co<sup>2+</sup> sites.</td>
    <td>Kazuhiro Furukawa</td>
    <td>Wade C. Winkler, Ronald R. Breaker </td>
    <td>2015</td>
    <td>Bacterial riboswitches cooperatively bind Ni(2+) or Co(2+) ions and control expression of heavy metal transporters</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/25794617/"  target="_blank" ><b>Mol Cell</b></a></td>
  </tr>
    
                    
  <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/NiCo" target="_blank"><b>NiCo/Fe<sup>2+</sup> riboswitch</b></a></td>
    <td>Erysipelotrichaceae bacterium</td>
    <td>This study showed that czcD (NiCo) riboswitches respond to Fe(II) both in vitro and in cells and that the genes regulated by these riboswitches assist in detoxification of iron in a heterologous expression system. The authors suggested that Fe(II) merits consideration as a plausible physiological ligand for czcD riboswitches.</td>
    <td>Jiansong Xu</td>
    <td>Joseph A. Cotruvo Jr</td>
    <td>2020</td>
    <td>The czcD (NiCo) Riboswitch Responds to Iron(II)</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/32250107/"  target="_blank" ><b>Biochemistry</b></a></td>
  </tr>
    
                    
  <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/THF" target="_blank"><b>THF-I riboswitch</b></a></td>
    <td><i>Streptococcus</i> mutans</td>
    <td>In this paper, a crystal structure of a single THF-I riboswitch aptamer domain bound to two molecules of folinic acid was determined at 2.27 Å. At physiological magnesium concentrations, strongly cooperative binding of the two ligands was obeserved. </td>
    <td>Jeremiah J. Trausch</td>
    <td>Robert T. Batey</td>
    <td>2011</td>
    <td>The structure of a tetrahydrofolate-sensing riboswitch reveals two ligand binding sites in a single aptamer</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/21906956/"  target="_blank" ><b>Structure</b></a></td>
  </tr>
    
                    
  <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/c-di-AMP" target="_blank"><b>c-di-AMP riboswitch</b></a></td>
    <td><i>Thermoanaerobacter pseudethanolicus</i>, <i>Thermovirga lienii</i></td>
    <td>This study determined the crystal structures of the c-di-AMP riboswitch from two species at ∼3.0-Å resolution, revealing a unique RNA architecture and unforeseen binding of two ligand molecules to a single riboswitch domain.</td>
    <td>Ang Gao</td>
    <td>Alexander Serganov</td>
    <td>2014</td>
    <td>Structural insights into recognition of c-di-AMP by the <i>ydaO</i> riboswitch</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/25086507/"  target="_blank" ><b>Nat Chem Biol</b></a></td>
  </tr>
    
                    
  <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/c-di-AMP" target="_blank"><b>c-di-AMP riboswitch</b></a></td>
    <td><i>Thermoanaerobacter tengcongensis</i></td>
    <td>This study also determined a crystal structures of the c-di-AMP riboswitch bound to two molecules of c-di-AMP at 2.73 Å.</td>
    <td>Aiming Ren</td>
    <td>Dinshaw J. Patel</td>
    <td>2014</td>
    <td>c-di-AMP binds the <i>ydaO</i> riboswitch in two pseudo-symmetry-related pockets</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/25086509/"  target="_blank" ><b>Nat Chem Biol</b></a></td>
  </tr>
    
                    
  <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/c-di-AMP" target="_blank"><b>c-di-AMP riboswitch</b></a></td>
    <td><i>Bacillus subtilis</i></td>
    <td>This study determined the crystal structure of a c-di-AMP riboswitch at 3.1 Å. Small-angle X-ray scattering experiments indicate that global folding of the riboswitch is induced by the two bound cyclic dinucleotides, which bridge the two symmetric three-helix domains.</td>
    <td>Christopher P. Jones</td>
    <td>Adrian R Ferré-D'Amaré</td>
    <td>2014</td>
    <td>Crystal structure of a c-di-AMP riboswitch reveals an internally pseudo-dimeric RNA</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/25271255/"  target="_blank" ><b>EMBO J</b></a></td>
  </tr>
    
                    
  <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/GlcN6P" target="_blank"><b>GlcN6P riboswitch</b></a></td>
    <td><i>Bacillus subtilis</i></td>
    <td>This in vivo study showed that the <i>glmS</i> (GlcN6P) riboswitch undergoes inhibition by products of hexose metabolism as well as activation by aminohexose ligands, and proposed that a single ligand-binding site in the <i>glmS</i> riboswitch can integrate information from both activating and inhibitory signals in vivo.</td>
    <td>Peter Y. Watson</td>
    <td>Martha J. Fedor</td>
    <td>2011</td>
    <td>The glmS riboswitch integrates signals from activating and inhibitory metabolites in vivo</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/21317896/"  target="_blank" ><b>Nat Struct Mol Biol</b></a></td>
  </tr>
    
                    
  <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/Guanine" target="_blank"><b>guanidine-II riboswitch</b></a></td>
    <td><i>Gloeobacter violaceus</i></td>
    <td>This paper showed the biochemical validation of mini-<i>ykkC</i> motif RNAs as guanidine-II riboswitches, surprisingly finding that each of the two stem-loop structures that comprise the mini-<i>ykkC</i> motif appears to directly bind free guanidine in a cooperative manner.</td>
    <td>Madeline E. Sherlock</td>
    <td>Ronald R. Breaker</td>
    <td>2017</td>
    <td>Biochemical Validation of a Second Guanidine Riboswitch Class in Bacteria</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/28001368/"  target="_blank" ><b>Biochemistry</b></a></td>
  </tr>
    
                    
  <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/Guanine" target="_blank"><b>guanidine-II riboswitch</b></a></td>
    <td><i>Gloeobacter violaceus</i>, <i>Escherichia coli</i></td>
    <td>This study splitted the integrated structures of a guanidine-II riboswitch into two independent single stem loops,called the P1 and P2 stem loops, and respectively determined their crystal structures with and without bound ligands, all of which were in dimerization. </td>
    <td>Lin Huang, Jia Wang</td>
    <td>David M.J. Lilley</td>
    <td>2017</td>
    <td>The Structure of the Guanidine-II Riboswitch</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/28529131/"  target="_blank" ><b>Cell Chem Biol</b></a></td>
  </tr>
    
                    
  <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/Guanine" target="_blank"><b>guanidine-II riboswitch</b></a></td>
    <td><i>Pseudomonas aeruginosa</i></td>
    <td>This study determined the crystal structures of the P2 stem loop bound to guanidine at 1.57 Å, which was also observed to be dimerized.</td>
    <td>Caroline W Reiss</td>
    <td>Scott A. Strobel</td>
    <td>2017</td>
    <td>Structural basis for ligand binding to the guanidine-II riboswitch</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/28600356/"  target="_blank" ><b>RNA</b></a></td>
  </tr>
    
                    
  <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/NAD" target="_blank"><b>NAD<sup>+</sup>-I riboswitch</b></a></td>
    <td><i>Acidobacterium ailaaui</i></td>
    <td>This paper showed the evidence from a combination of bioinformatic, biochemical and genetic analysises that nadA motif RNAs function as NAD<sup>+</sup> riboswitches (NAD<sup>+</sup>-I), revealing their tandem architectures of two aptamer domains.</td>
    <td>Sarah N. Malkowski</td>
    <td>Ronald R. Breaker</td>
    <td>2019</td>
    <td>Evidence that the <i>nadA</i> motif is a bacterial riboswitch for the ubiquitous enzyme cofactor NAD<sup>+</sup></td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/31467147/"  target="_blank" ><b>RNA</b></a></td>
  </tr>
    
                    
  <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/NAD" target="_blank"><b>NAD<sup>+</sup>-I riboswitch</b></a></td>
    <td><i>koribacter versatilis</i></td>
    <td>The authors solved the crystal structures of the NAD<sup>+</sup>-I riboswitch domain I bound to NADH, ADP and other NAD<sup>+</sup>-related compounds by X-ray crystallography, but in each case only the ADP moiety is observed. </td>
    <td>Lin Huang</td>
    <td>David M.J. Lilley</td>
    <td>2020</td>
    <td>Structure and ligand binding of the ADP-binding domain of the NAD<sup>+</sup> riboswitch</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/32295864/"  target="_blank" ><b>RNA</b></a></td>
  </tr>
    
                    
  <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/NAD" target="_blank"><b>NAD<sup>+</sup>-I riboswitch</b></a></td>
    <td><i>Acidobacterium capsulatum</i></td>
    <td>This study reported crystal structures of both individual domains of the NAD<sup>+</sup> riboswitch, each bound to NAD<sup>+</sup>. Furthermore, the authors demonstrated that domain 2 requires significantly higher concentrations of NAD<sup>+</sup> (or ADP retaining analogs) compared to domain 2, and proposed a putative mechanistic role for a time-controlled signal.</td>
    <td>Hao Chen</td>
    <td>Aiming Ren</td>
    <td>2020</td>
    <td>Structural distinctions between NAD<sup>+</sup> riboswitch domains 1 and 2 determine differential folding and ligand binding</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/33170270/"  target="_blank" ><b>Nucleic Acids Res</b></a></td>
  </tr>
    
                    
  <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/PreQ" target="_blank"><b>PreQ<sub>1</sub>-I type 1 riboswitch</b></a></td>
    <td><i>Carnobacterium antarcticus</i></td>
    <td>This paper determined the crystal structure of a preQ<sub>1</sub>-I type 1 riboswitch at 2.60 Å, bound to two preQ<sub>1</sub> ligands in a single binding pocke. It is demonstrated that two preQ<sub>1</sub> effectors bind with positive cooperativity.</td>
    <td>Griffin M. Schroeder</td>
    <td>Joseph E. Wedekind</td>
    <td>2022</td>
    <td>A small RNA that cooperatively senses two stacked metabolites in one pocket for gene control</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/35017488/"  target="_blank" ><b>Nat Commun</b></a></td>
  </tr>
    
                    
  <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/NAD2" target="_blank"><b>NAD<sup>+</sup>-II riboswitch</b></a></td>
    <td><i>Streptococcus parasanguinis</i></td>
    <td>This study resolved the crystal structures of the NAD<sup>+</sup>-II riboswitch complexed with the ligands NMN and NAD<sup>+</sup> at high resolution. It revealed that the riboswitch accommodates two molecules of either NMN or NAD<sup>+</sup> ligand.</td>
    <td>Xuemei Peng</td>
    <td>Lin Huang</td>
    <td>2023</td>
    <td>Crystal structures of the NAD<sup>+</sup>-II riboswitch reveal two distinct ligand-binding pockets</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/36840714/"  target="_blank" ><b>Nucleic Acids Res</b></a></td>
  </tr>
    
                    
</tbody>
</table>
</html>
            
<p id="Tandem riboswitches sensing identical ligands"> </p>
<br><br>        
<p class="header_box" >Tandem riboswitches sensing identical ligands</p>
<font>Some classes of riboswitches regulate gene expression by employing multiple aptamer domains, followed by a single expression platform for regulation. For instance, the majority of glycine riboswitches incorporate two aptamer domains that function cooperatively to closely mimic a two-state genetic switch. In the subsequent figure, we depict the tandem 'ON' glycine riboswitch (A) from <i>Bacillus subtilis</i>, alongside the tandem TPP riboswitch (B) from <i>Bacillus anthracis</i>.</font><br>      
            
<div style="weight:400px;display:block;margin:0 auto;border:solid 1px;border-radius:0;">
<img src="/images/tandem/Tandem_RS_2.svg" alt="drawing" >
</div>
<div style="display: flex; justify-content: center;">
<a href="/downloads/tandem/Tandem_RS_2.pdf" target="_blank" download="Tandem_RS_2.pdf"><button class="btn btn-secondary"><span class="glyphicon 
glyphicon-download-alt"></span>&nbsp;&nbsp;Download above picture</button></a>
</div><br>
                                                    
<html>
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <title>Ribozyme applications </title>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css">
</head>
    <style>
        th {background-color: #005826;
        color: rgba(255,255,255,0.9);
            cursor: pointer;
        }
    </style>
  <script type="text/javascript"  src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script type="text/javascript"  src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript"  src="https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js"></script>
    <script type="text/javascript"  src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js"></script>
    <script type="text/javascript">

        $(document).ready(function() {
            $.noConflict();
            $('#SBtable').DataTable( {
                dom: 'Bfrtip', 
                buttons: [
                    'copy', 'csv', 'excel', 'pdf', 
                ]

            } );
        } );
   </script>
<table id="SBtable" class="table table-striped table-bordered" cellspacing="0" width="100%">
  <thead>
   <tr>
    <th>Riboswitch name</th>
    <th>Species</th>
    <th>Description </th>
    <th>First author</th>
    <th>Corresponding author</th>
    <th>Time</th>
    <th>Reference</th>
    <th>Journal</th>
  </tr>
 </thead>
 <tbody>
            
   <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/Guanine" target="_blank"><b>glycine riboswitch</b></a></td>
    <td><i>Bacillus subtilis</i>, <i>Vibrio cholerae</i></td>
    <td>This study identified a previously unknown riboswitch class in bacteria that is selectively triggered by glycine, and found that most glycine riboswitches integrate two aptamer domains that function cooperatively to more closely approximate a two-state genetic switch.</td>
    <td>Maumita Mandal</td>
    <td>Ronald R. Breaker</td>
    <td>2004</td>
    <td>A glycine-dependent riboswitch that uses cooperative binding to control gene expression</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/15472076/"  target="_blank" ><b>Science</b></a></td>
  </tr>
    
                    
   <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/Guanine" target="_blank"><b>glycine riboswitch</b></a></td>
    <td><i>Vibrio cholerae</i></td>
    <td>This study solved the crystal structures of the second glycine-sensing domain from the <i>Vibrio cholerae</i> riboswitch in the ligand-bound and unbound states. In addition, their structural and footprinting data provided further evidence indicating that adjacent aptamer domains of the glycine riboswitch could form specific interdomain interactions, thereby potentially contributing to the cooperative response.</td>
    <td>Lili Huang, Alexander Serganov</td>
    <td>Dinshaw J. Patel</td>
    <td>2010</td>
    <td>Structural insights into ligand recognition by a sensing domain of the cooperative glycine riboswitch</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/21145485/"  target="_blank" ><b>Mol Cell</b></a></td>
  </tr>
    
                    
   <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/Guanine" target="_blank"><b>glycine riboswitch</b></a></td>
    <td><i>Fusobacterium nucleatum</i></td>
    <td>This study determined the crystal structure of the tandem glycine riboswitch aptamer domains at 3.6 Å, which showed an extensive network of interactions, largely mediated by asymmetric A-minor contacts, that serve to communicate ligand binding status between the aptamers.</td>
    <td>Ethan B. Butler</td>
    <td>Scott A. Strobel</td>
    <td>2011</td>
    <td>Structural basis of cooperative ligand binding by the glycine riboswitch</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/21439473/"  target="_blank" ><b>Chem Biol</b></a></td>
  </tr>
    
                    
   <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/Guanine" target="_blank"><b>glycine riboswitch</b></a></td>
    <td><i>Vibrio cholerae</i>, <i>Bacillus subtilis</i></td>
    <td>The authors applied a sequencing-based high-throughput technique to study the wild-type (WT) tandem ON switch from <i>Bacillus subtilis</i> and compared it with the tandem OFF switch variant from <i>Streptococcus pyogenes</i>. They found that the two binding pockets are differentially conserved between ON and OFF switches, which showed the versatility of genetic switches.</td>
    <td>Chad D. Torgerson</td>
    <td>Scott A. Strobel</td>
    <td>2020</td>
    <td>The asymmetry and cooperativity of tandem glycine riboswitch aptamers</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/31992591/"  target="_blank" ><b>RNA</b></a></td>
  </tr>
    
                    
   <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/Glutamine" target="_blank"><b>glutamine-I riboswitch</b></a></td>
    <td><i>Cyanobacteria</i>, marine metagenomic sequences</td>
    <td>This paper demonstrated that the <i>glnA</i> and Downstream-peptide motifs are naturally occurring aptamers that selectively bind l-glutamine, and interestingly found that over half of the <i>glnA</i> RNAs are arranged in tandem orientations composed of two or sometimes three aptamer domains.</td>
    <td>Tyler D. Ames</td>
    <td>Ronald R. Breaker</td>
    <td>2011</td>
    <td>Bacterial aptamers that selectively bind glutamine</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/21282981/"  target="_blank" ><b>RNA Biol</b></a></td>
  </tr>
    
                    
   <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/Glutamine" target="_blank"><b>glutamine-I riboswitch</b></a></td>
    <td><i>Synechococcus elongatus</i></td>
    <td>This paper determined the crystal structure of the glutamine-I riboswitch (<i>glnA</i> motif) in the ligand-bound and unbound states, showing that ligand binding was in the junction connecting riboswitch stems with large rearrangement.</td>
    <td>Aiming Ren, Yi Xue</td>
    <td>Hashim M. Al-Hashimi, Dinshaw J. Patel</td>
    <td>2015</td>
    <td>Structural and Dynamic Basis for Low-Affinity, High-Selectivity Binding of L-Glutamine by the Glutamine Riboswitch</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/26655897/"  target="_blank" ><b>Cell Rep</b></a></td>
  </tr>
    
                    
   <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/TPP" target="_blank"><b>TPP riboswitch</b></a></td>
    <td><i>Bacillus anthracis</i></td>
    <td>This research had examined an example of a tandem riboswitch in <i>Bacillus anthracis</i> that includes two complete riboswitches for thiamine pyrophosphate (TPP). It is found that both riboswitches respond independently to TPP and are predicted to function in concert to generate a more digital response to changing ligand concentrations when two aptamers bind ligands cooperatively.</td>
    <td>Rüdiger Welz</td>
    <td>Ronald R. Breaker</td>
    <td>2007</td>
    <td>Ligand binding and gene control characteristics of tandem riboswitches in <i>Bacillus anthracis</i></td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/17307816/"  target="_blank" ><b>RNA</b></a></td>
  </tr>
    
                    
   <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/MoCo&Wco" target="_blank"><b>MoCo & Wco riboswitch</b></a></td>
    <td><i>Syntrophomonas wolfei</i> and <i>Moorella thermoacetica</i></td>
    <td>This paper identified a highly conserved RNA motif controling gene expression in response to molybdenum cofactor (Moco). Furthermore, the authors identify variants of this RNA that are likely to be triggered by the related tungsten cofactor (Tuco). Multiple arrangements these RNAs were both observed.</td>
    <td>Elizabeth E. Regulski</td>
    <td>Ronald R. Breaker</td>
    <td>2008</td>
    <td>A widespread riboswitch candidate that controls bacterial genes involved in molybdenum cofactor and tungsten cofactor metabolism</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/18363797/"  target="_blank" ><b>Mol Microbiol</b></a></td>
  </tr>
    
                    
   <tr>
    <td><a href="https://ribocentre-switch.github.io/docs/Li" target="_blank"><b>Li<sup>+</sup>-I riboswitch</b></a></td>
    <td>environmental bacterial sample</td>
    <td>This study identified two distinct classes of Li<sup>+</sup>-sensing bacterial riboswitches, refered as Li<sup>+</sup>-I and Li<sup>+</sup>-II, and several instances among environmental bacterial sequences wherein riboswitches conforming to the Li<sup>+</sup>-I class reside in tandem.</td>
    <td>Neil White</td>
    <td>Ronald R. Breaker</td>
    <td>2022</td>
    <td>Lithium-sensing riboswitch classes regulate expression of bacterial cation transporter genes</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/36352003/"  target="_blank" ><b>Sci Rep</b></a></td>
  </tr>
    
                    
    </tbody>
    </table>
    </html>
                
<p id="Tandem riboswitches sensing multiple ligands"> </p>
<br><br>
<p class="header_box" >Tandem riboswitches sensing multiple ligands</p>
<font>Among the remarkable discoveries in the field of riboswitches is the identification of riboswitches with distinct binding sites for various ligands. Occasionally, these riboswitches feature a single expression platform subsequent to the final aptamer domain. In other instances, riboswitches exhibit two distinct, independently functioning regulatory units arranged in tandem. To enhance comprehension of the genetic regulation mechanism of these tandem riboswitches, we illustrate this concept using two examples: Tandem SAM-I and AdoCbl riboswitch from <i>Bacillus clausii</i>, and Tandem Guanine and PRPP riboswitch from <i>Syntrophothermus lipocalidus</i>.</font><br>      
            
<div style="weight:400px;display:block;margin:0 auto;border:solid 1px;border-radius:0;">
<img src="/images/tandem/Tandem_RS_3.svg" alt="drawing" >
</div>
<div style="display: flex; justify-content: center;">
<a href="/downloads/tandem/Tandem_RS_3.pdf" target="_blank" download="Tandem_RS_3.pdf"><button class="btn btn-secondary"><span class="glyphicon 
glyphicon-download-alt"></span>&nbsp;&nbsp;Download above picture</button></a>
</div><br>
                                                    
<html>
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <title>Ribozyme applications </title>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css">
</head>
    <style>
        th {background-color: #005826;
        color: rgba(255,255,255,0.9);
            cursor: pointer;
        }
    </style>
  <script type="text/javascript"  src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script type="text/javascript"  src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript"  src="https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js"></script>
    <script type="text/javascript"  src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js"></script>
    <script type="text/javascript">

        $(document).ready(function() {
            $.noConflict();
            $('#Bbtable').DataTable( {
                dom: 'Bfrtip', 
                buttons: [
                    'copy', 'csv', 'excel', 'pdf', 
                ]

            } );
        } );
   </script>
<table id="Bbtable" class="table table-striped table-bordered" cellspacing="0" width="100%">
  <thead>
   <tr>
    <th>Riboswitch name</th>
    <th>Species</th>
    <th>Description </th>
    <th>First author</th>
    <th>Corresponding author</th>
    <th>Time</th>
    <th>Reference</th>
    <th>Journal</th>
  </tr>
 </thead>
 <tbody>
            
   <tr>
    <td><b>Tandem SAM-I and AdoCbl riboswitch</b></td>
    <td><i>Bacillus clausii</i></td>
    <td>This study found that the 5' region of the <i>metE</i> gene from <i>Bacillus clausii</i> carries sequences and structures that conform respectively to SAM-I riboswitch and AdoCbl riboswitch, suggesting that the two ligands can independently repress <i>metE</i>. Thus, the tandem SAM-I and AdoCbl riboswitch arrangement is expected to function as a natural Boolean NOR logic gate.</td>
    <td>Narasimhan Sudarsan</td>
    <td>Ronald R. Breaker</td>
    <td>2006</td>
    <td>Tandem riboswitch architectures exhibit complex gene control functions</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/17038623/"  target="_blank" ><b>Science</b></a></td>
  </tr>
    
                    
   <tr>
    <td><b>Tandem SAM-II and SAM-V riboswitch</b></td>
    <td><i>Candidatus Pelagibacter ubique</i></td>
    <td>The authors described a fifth class of SAM binding aptamer, termed SAM-V and  identified numerous examples of a tandem SAM-II/SAM-V aptamer architecture, where the SAM-II aptamer is always positioned 5' of the SAM-V aptamer. The SAM-II aptamer always occurs first, followed by an apparent intrinsic transcription terminator stem, and the SAM-V aptamer contains an SD sequence. It is speculated that the two aptamers independently function as riboswitches at two different stages of the gene expression pathway.</td>
    <td>Elena Poiata</td>
    <td>Ronald R. Breaker</td>
    <td>2009</td>
    <td>A variant riboswitch aptamer class for S-adenosylmethionine common in marine bacteria</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/19776155/"  target="_blank" ><b>RNA</b></a></td>
  </tr>
    
                    
   <tr>
    <td><b>Tandem c-di-GMP riboswitch and group I self-splicing intron</b></td>
    <td><i>Clostridium difficile</i></td>
    <td>This paper identified a tandem RNA sensory system consisting of a c-di-GMP riboswitch and a group I self-splicing intron, wherein self-splicing is regulated by upstream c-di-GMP riboswitch. The findings indicated that some self-splicing ribozymes are harnessed by cells as metabolite sensors and genetic regulators.</td>
    <td>Elaine R. Lee, Jenny L. Baker</td>
    <td>Ronald R. Breaker</td>
    <td>2010</td>
    <td>An allosteric self-splicing ribozyme triggered by a bacterial second messenger</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/20705859/"  target="_blank" ><b>Science</b></a></td>
  </tr>
    
                    
   <tr>
    <td><b>Tandem c-di-GMP riboswitch and group I self-splicing intron</b></td>
    <td><i>Clostridium difficile</i></td>
    <td>This study found that the tandem c-di-GMP riboswitch and group I self-splicing intron architecture provides the riboswitch with a mechanism for extended regulation after splicing has occurred or as a backup mechanism for suppression of translation in the event of misregulated splicing.</td>
    <td>Andy G.Y. Chen</td>
    <td>Ronald R. Breaker</td>
    <td>2011</td>
    <td>Mechanism for gene control by a natural allosteric group I ribozyme</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/21960486/"  target="_blank" ><b>RNA</b></a></td>
  </tr>
    
                    
   <tr>
    <td><b>Tandem THF-I and ZTP riboswitch</b></td>
    <td><i>Clostridium kluyveri</i></td>
    <td>This study identified a new-found RNA class as THF-I riboswitch, which was found to be located immediately downstream of a <i>pfl</i> RNA representative (ZTP riboswitch) in <i>Clostridium kluyveri</i>.</td>
    <td>Tyler D. Ames</td>
    <td>Ronald R. Breaker</td>
    <td>2010</td>
    <td>A eubacterial riboswitch class that senses the coenzyme tetrahydrofolate</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/20659680/"  target="_blank" ><b>Chem Biol</b></a></td>
  </tr>
    
                    
   <tr>
    <td><b>Tandem ppGpp and T-box riboswitch</b></td>
    <td>Phylum Firmicutes</td>
    <td>This paper reported the discovery and biochemical validation of a natural riboswitch class that selectively binds guanosine tetraphosphate (ppGpp), and found that in ∼40% of the instances when the ppGpp riboswitch is found in the 5′UTR of branched-chain amino acid biosynthesis genes, a leucine T-box RNA is found either directly upstream or downstream of the riboswitch in the same UTR.</td>
    <td>Madeline E. Sherlock</td>
    <td>Ronald R. Breaker</td>
    <td>2018</td>
    <td>Riboswitches for the alarmone ppGpp expand the collection of RNA-based signaling systems</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/29784782/"  target="_blank" ><b>Proc Natl Acad Sci U S A</b></a></td>
  </tr>
    
                    
   <tr>
    <td><b>Tandem Guuanine and PRPP riboswitch</b></td>
    <td><i>Bacillus megaterium</i></td>
    <td>This paper reported the discovery of riboswitch aptamers for phosphoribosyl pyrophosphate (PRPP) that naturally exist either in singlet arrangements, or occur in tandem with guanine aptamers. Tandem guanine-PRPP riboswitches can bind the target ligands, either independently or in combination, to approximate the function expected for an IMPLY Boolean logic gate to regulate transcription of messenger RNAs for <i>de novo</i> purine biosynthesis in bacteria.</td>
    <td>Madeline E. Sherlock</td>
    <td>Ronald R. Breaker</td>
    <td>2018</td>
    <td>Tandem riboswitches form a natural Boolean logic gate to control purine metabolism in bacteria</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/29504937/"  target="_blank" ><b>Elife</b></a></td>
  </tr>
    
                    
   <tr>
    <td><b>Tandem Guuanine and PRPP riboswitch</b></td>
    <td><i>Syntrophothermus lipocalidus</i></td>
    <td>This paper showed the crystal structure of PRPP (phosphoribosyl pyrophosphate) riboswitch in the presence or absence of PRPP and  provided a clue on the mechanism of the IMPLY logic gate of the tandem guanine-PRPP riboswitches, wherein transcription proceeds in all cases except when guanine is present and PRPP is not.</td>
    <td>Alla Peselis</td>
    <td>Alexander Serganov</td>
    <td>2018</td>
    <td>ykkC riboswitches employ an add-on helix to adjust specificity for polyanionic ligands</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/30120360/"  target="_blank" ><b>Nat Chem Biol</b></a></td>
  </tr>
    
                    
   <tr>
    <td><b>Tandem Guuanine and PRPP riboswitch</b></td>
    <td><i>Thermoanaerobacter mathranii</i></td>
    <td>This paper also solved the crystal structure of PRPP (phosphoribosyl pyrophosphate) riboswitch bound to PRPP at 2.5 Å, and the present structural data shed additional light on the potential mechanism of switching in tandem guanine-PRPP riboswitches that PRPP binding stabilizes P0 and disrupts the P1 helix of the guanine aptamer.</td>
    <td>Andrew John Knappenberger, Caroline Wetherington Reiss</td>
    <td>Scott A. Strobel</td>
    <td>2018</td>
    <td>Structures of two aptamers with differing ligand specificity reveal ruggedness in the functional landscape of RNA</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/29877798/"  target="_blank" ><b>Elife</b></a></td>
  </tr>
    
                    
   <tr>
    <td><b>Tandem TPP and HMP-PP riboswitch</b></td>
    <td><i>Bacillus subtilis</i></td>
    <td>This study demonstrated that thiS motif RNAs function as sensors of the thiamin precursor HMP-PP, and found that approximately 30% of the representatives of HMP-PP riboswitches reside in tandem with TPP riboswitches. Both riboswitches carries their own intrinsic terminator expression platform.</td>
    <td>Ruben M Atilho</td>
    <td>Ronald R. Breaker</td>
    <td>2019</td>
    <td>A bacterial riboswitch class for the thiamin precursor HMP-PP employs a terminator-embedded aptamer</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/30950790/"  target="_blank" ><b>Elife</b></a></td>
  </tr>
    
                    
   <tr>
    <td><b>Tandem SAM-I riboswitch and Met tRNA-binding site </b></td>
    <td><i>Xanthomonas campestris</i></td>
    <td>This study characterized a SAM-I riboswitch (SAM-IXcc) from the Xanthomonas campestris, whose expression platform not only can repress gene expression in response to SAM binding to SAM-IXcc aptamer but also can sense and bind uncharged initiator Met tRNA.</td>
    <td>Dong-Jie Tang, Xinyu Du, Qiang Shi, Jian-Ling Zhang</td>
    <td>Hongzhou Gu, Ji-Liang Tang</td>
    <td>2020</td>
    <td>A SAM-I riboswitch with the ability to sense and respond to uncharged initiator tRNA</td>
    <td><a href="https://pubmed.ncbi.nlm.nih.gov/32493973/"  target="_blank" ><b>Nat Commun</b></a></td>
  </tr>
    
                    
    </tbody>
    </table>
    </html>
                