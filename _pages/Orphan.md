---
title: "Ribocentre - Orphan_riboswitch"
layout: piclay
excerpt: "Riboswitches: A riboswitch database"
sitemap: True
permalink: /orphan_riboswitch/
---

<h1 class="post-title" itemprop="name headline">Orphan riboswitches</h1>
Orphan riboswitch candidates are noncoding RNA motifs whose representatives are believed to function as genetic regulatory elements; however, their specific ligands remain unidentified. In this section, we present a list of 30 orphan riboswitch candidates to draw attention to their most distinctive characteristics. The significance and quality of a riboswitch candidate can be assessed by considering the number of representatives discovered, the complexity displayed by its conserved sequence and secondary structure, and its associations with diverse gene types. We categorize these candidates as either strong or weak orphan riboswitch candidates based on the criterion, the strength of the characteristics of candidates listed above. This section was adapted from the work of Ron Breaker primarily<sup>[<a href="#ref1">1</a>]</sup>
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
  
   [id]:target {
  scroll-margin-top: 80px; /* 根据你的导航栏的高度调整 */
}
  
  </style>
</head>
<body>
<p id="Strong_orphan_riboswitch"> </p>
  <p style="font-size: 16px">Click the buttons to navigate to different sections:</p>
  <div class="button-container">
    <a class="button" href="#Strong_orphan_riboswitch" >Strong orphan riboswitches</a>
    <a class="button" href="#Weak_orphan_riboswitch">Weak orphan riboswitches</a>
    <a class="button" href="#References">References</a>
  </div>
</body>
</html>
<br>  
        
<html>
<p class="header_box" >Strong orphan riboswitches</p>
<p>Consensus sequence and secondary structure model for the strong orphan riboswitch candidates<sup>[<a href="#ref1">1</a>]</sup>.</p>      

<div style="width:1000px;display:block;margin:0 auto;border:solid 1px;border-radius:0;">
<img src="/images/orphan_riboswitch/Orphan_riboswitch_2D1.svg" alt="drawing" >
</div>
<div style="display: flex; justify-content: center;">
<a href="/downloads/orphan_riboswitch/Orphan_riboswitch_2D1.pdf" target="_blank" download="Orphan_riboswitch_2D1.pdf"><button class="btn btn-secondary"><span class="glyphicon 
glyphicon-download-alt"></span>&nbsp;&nbsp;Download above picture</button></a><br>
</div><br>
                        

<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    <title>Riboswitch orphan riboswitch </title>
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
                "order": [[0, "desc"]],
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
    <th>Name</th>
    <th>Rfam ID</th>
    <th>Unique representatives</th>
    <th>Conserved nucleotides</th>
    <th>Top genes (>10%)</th>
  </tr>
 </thead>
 <tbody>
        
  <tr>
    <td><i>ykkC</i> 2c<sup>[<a href="#ref2">2</a>-<a href="#ref5">5</a>]</sup></td>
    <td>None</td>
    <td>45</td>
    <td>66</td>
    <td>nudix hydrolase</td>
  </tr>
    
                    
  <tr>
    <td><i>ykkC</i> 2d<sup>[<a href="#ref2">2</a>-<a href="#ref5">5</a>]</sup></td>
    <td>None</td>
    <td>144</td>
    <td>38</td>
    <td>possible transporters of unknown specificity (phn_DUF6)</td>
  </tr>
    
                    
  <tr>
    <td><i>speF</i><sup>[<a href="#ref6">6</a>]</sup></td>
    <td>RF00518</td>
    <td>868</td>
    <td>92 (59)</td>
    <td>Ornithine decarboxylase</td>
  </tr>
    
                    
  <tr>
    <td><i>serC</i><sup>[<a href="#ref6">6</a>]</sup></td>
    <td>RF00517</td>
    <td>1274</td>
    <td>16</td>
    <td>phosphoserine aminotransferase</td>
  </tr>
    
                    
  <tr>
    <td><i>ybhL</i><sup>[<a href="#ref6">6</a>]</sup></td>
    <td>RF00520</td>
    <td>207</td>
    <td>26</td>
    <td>possible transporter of unknown specificity</td>
  </tr>
    
                    
  <tr>
    <td>ATPC<sup>[<a href="#ref7">7</a>]</sup></td>
    <td>RF01067</td>
    <td>222</td>
    <td>15</td>
    <td>ATP synthase component</td>
  </tr>
    
                    
  <tr>
    <td><i>sucA</i><sup>[<a href="#ref7">7</a>]</sup></td>
    <td>RF01070</td>
    <td>490</td>
    <td>16</td>
    <td>2-oxoglutarate dehydrogenase component</td>
  </tr>
    
                    
  <tr>
    <td><i>sucA-II</i><sup>[<a href="#ref8">8</a>]</sup></td>
    <td>RF01758</td>
    <td>294</td>
    <td>25</td>
    <td>2-oxoglutarate dehydrogenase component</td>
  </tr>
    
                    
  <tr>
    <td><i>aceE</i><sup>[<a href="#ref8">8</a>]</sup></td>
    <td>None</td>
    <td>181</td>
    <td>12</td>
    <td>pyruvate dehydrogenase component</td>
  </tr>
    
                    
  <tr>
    <td><i>gabT</i><sup>[<a href="#ref8">8</a>]</sup></td>
    <td>RF01738</td>
    <td>315</td>
    <td>21 (23)</td>
    <td>γ-aminobutyric acid transaminase</td>
  </tr>
    
                    
  <tr>
    <td><i>icd</i><sup>[<a href="#ref8">8</a>]</sup></td>
    <td>RF04189</td>
    <td>373</td>
    <td>14</td>
    <td>isocitrate dehydrogenase isozyme II</td>
  </tr>
    
                    
  <tr>
    <td><i>Lacto-usp</i><sup>[<a href="#ref8">8</a>]</sup></td>
    <td>RF01710</td>
    <td>63</td>
    <td>58</td>
    <td>protein of unknown function</td>
  </tr>
    
                    
  <tr>
    <td><i>manA</i><sup>[<a href="#ref8">8</a>]</sup></td>
    <td>RF01745</td>
    <td>527</td>
    <td>14 (15, 19)</td>
    <td>sugar pathways, various others</td>
  </tr>
    
                    
  <tr>
    <td>Moco-II<sup>[<a href="#ref8">8</a>]</sup></td>
    <td>RF01713</td>
    <td>20</td>
    <td>12</td>
    <td>molybdenum-binding proteins, others</td>
  </tr>
    
                    
  <tr>
    <td><i>msiK</i><sup>[<a href="#ref8">8</a>]</sup></td>
    <td>RF01747</td>
    <td>1124</td>
    <td>23</td>
    <td>component of transporters</td>
  </tr>
    
                    
  <tr>
    <td><i>potC</i><sup>[<a href="#ref8">8</a>]</sup></td>
    <td>RF01751</td>
    <td>221</td>
    <td>8</td>
    <td>peroxiredoxin, thiamin related proteins</td>
  </tr>
    
                    
  <tr>
    <td><i>psaA</i><sup>[<a href="#ref8">8</a>]</sup></td>
    <td>RF01752</td>
    <td>76</td>
    <td>52</td>
    <td>photosystem I component</td>
  </tr>
    
                    
  <tr>
    <td><i>Pseudomon</i>-GGDEF<sup>[<a href="#ref8">8</a>]</sup></td>
    <td>None</td>
    <td>65</td>
    <td>67</td>
    <td>signal protein of unknown function</td>
  </tr>
    
                    
  <tr>
    <td>SAM-Chlorobi<sup>[<a href="#ref8">8</a>]</sup></td>
    <td>RF01724</td>
    <td>40</td>
    <td>22</td>
    <td>S-adenosylmethionine synthase</td>
  </tr>
    
                    
  <tr>
    <td><i>wcaG</i><sup>[<a href="#ref8">8</a>]</sup></td>
    <td>RF01761</td>
    <td>137</td>
    <td>13</td>
    <td>NAD-dependent epimerase or hydratase</td>
  </tr>
    
                    
</tbody>
</table>
</html><br><br>
            
<html>
<p id="Weak_orphan_riboswitch"> </p>
<p class="header_box" >Weak orphan riboswitches</p>
<p>Consensus sequence and secondary structure model for the weak orphan riboswitch candidates<sup>[<a href="#ref1">1</a>]</sup>.</p>     
            
<div style="width:1000px;display:block;margin:0 auto;border:solid 1px;border-radius:0;">
<img src="/images/orphan_riboswitch/Orphan_riboswitch_2D2.svg" alt="drawing" >
</div>
<div style="display: flex; justify-content: center;">
<a href="/downloads/orphan_riboswitch/Orphan_riboswitch_2D2.pdf" target="_blank" download="Orphan_riboswitch_2D2.pdf"><button class="btn btn-secondary"><span class="glyphicon 
glyphicon-download-alt"></span>&nbsp;&nbsp;Download above picture</button></a><br>
</div><br>
                            

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
                "order": [[0, "desc"]],
                dom: 'Bfrtip', 
                buttons: [
                    'copy', 'csv', 'excel', 'pdf', 
                ]
                 

            } );
        Dnatable.order([[0, 'desc']]).draw();
        } );
   </script>
<table id="SBtable" class="table table-striped table-bordered" cellspacing="0" width="100%">
  <thead>
  <tr>
    <th>Name</th>
    <th>Rfam ID</th>
    <th>Unique representatives</th>
    <th>Conserved nucleotides</th>
    <th>Top genes (>10%)</th>
  </tr>
 </thead>
 <tbody>
            
  <tr>
    <td><i>sucC</i><sup>[<a href="#ref8">8</a>]</sup></td>
    <td>None</td>
    <td>72</td>
    <td>25</td>
    <td>succinyl-CoA synthetase component</td>
  </tr>
    
                    
  <tr>
    <td><i>rmf</i><sup>[<a href="#ref8">8</a>]</sup></td>
    <td>RF01755</td>
    <td>363</td>
    <td>50</td>
    <td>ribosomal modulation factor</td>
  </tr>
    
                    
  <tr>
    <td>Termite-<i>flg</i><sup>[<a href="#ref8">8</a>]</sup></td>
    <td>RF01729</td>
    <td>67</td>
    <td>18</td>
    <td>flagellin proteins</td>
  </tr>
    
                    
  <tr>
    <td><i>nuoG</i><sup>[<a href="#ref8">8</a>]</sup></td>
    <td>RF01748</td>
    <td>38</td>
    <td>24 (49)</td>
    <td>NADH-ubiquinone oxidoreductase component</td>
  </tr>
    
                    
  <tr>
    <td><i>livK</i><sup>[<a href="#ref8">8</a>]</sup></td>
    <td>RF01744</td>
    <td>88</td>
    <td>33</td>
    <td>Protein of unknown function</td>
  </tr>
    
                    
  <tr>
    <td>Polynucleobacter-1 <sup>[<a href="#ref8">8</a>]</sup></td>
    <td>None</td>
    <td>86</td>
    <td>19</td>
    <td>unclear</td>
  </tr>
    
                    
    </tbody>
    </table>
    </html><br><br>
                
<p id="References"> </p>
<p class="header_box" id="references">References</p>
                
<a id="ref1"></a><font><strong>[1] Challenges of ligand identification for the second wave of orphan riboswitch candidates.</strong></font><br />
Greenlee, E. B. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/29135333/" target="_blank">RNA Biol. 15, 377–390 (2018).</a>
<br />
                
<a id="ref2"></a><font><strong>[2] Riboswitches for the alarmone ppGpp expand the collection of RNA-based signaling systems.</strong></font><br />
Sherlock, M. E., Sudarsan, N. & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/29784782/" target="_blank">Proc. Natl. Acad. Sci. U. S. A. 115, 6052–6057 (2018).</a>
<br />
                
<a id="ref3"></a><font><strong>[3] Tandem riboswitches form a natural Boolean logic gate to control purine metabolism in bacteria.</strong></font><br />
Sherlock, M. E., Sudarsan, N., Stav, S. & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/29504937/" target="_blank">Elife 7, (2018).</a>
<br />
                
<a id="ref4"></a><font><strong>[4] New RNA motifs suggest an expanded scope for riboswitches in bacterial genetic control.</strong></font><br />
Barrick, J. E. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/15096624/" target="_blank">Proc. Natl. Acad. Sci. U. S. A. 101, 6421–6426 (2004).</a>
<br />
                
<a id="ref5"></a><font><strong>[5] Metabolism of Free Guanidine in Bacteria Is Regulated by a Widespread Riboswitch Class.</strong></font><br />
Nelson, J. W., Atilho, R. M., Sherlock, M. E., Stockbridge, R. B. & Breaker, R. R.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/27989440/" target="_blank">Mol. Cell 65, 220–230 (2017).</a>
<br />
                
<a id="ref6"></a><font><strong>[6] Evidence for a second class of S-adenosylmethionine riboswitches and other regulatory RNA motifs in alpha-proteobacteria.</strong></font><br />
Corbino, K. A. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/16086852/" target="_blank">Genome Biol. 6, R70 (2005).</a>
<br />
                
<a id="ref7"></a><font><strong>[7] Identification of 22 candidate structured RNAs in bacteria using the CMfinder comparative genomics pipeline.</strong></font><br />
Weinberg, Z. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/17621584/" target="_blank">Nucleic Acids Res. 35, 4809–4819 (2007).</a>
<br />
                
<a id="ref8"></a><font><strong>[8] Comparative genomics reveals 104 candidate structured RNAs from bacteria, archaea, and their metagenomes.</strong></font><br />
Weinberg, Z. et al.<br />
<a href="https://pubmed.ncbi.nlm.nih.gov/20230605/" target="_blank">Genome Biol. 11, R31 (2010).</a>
<br />
                