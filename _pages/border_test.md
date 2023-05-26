---
layout: post
title:  "THF"
date:   2023-03-12T14:25:52-05:00
author: Lin Xiaowei
permalink: /bordertest/
---

<!--3D模块1-->
> 3D visualisation
<font size=4>The overall structure of the THF I riboswitch was generated from PDB ID:4LVV at 2.10 Å resolution bound with 6S-folinic acid.6S-folinic acid (shown in sticks) is labeled in red.【4】 </font>

<table class="table"  cellspacing=0 style="table-layout:fixed;width:1050px;margin-left:auto;margin-right:auto;"><tr>
<td style="text-align:center" border:0>
<img src="/images/ribo_imig/3D/THF.png" alt="drawing" style="width:469px;height:416px;" border=0 >
</td>
<td style="text-align:center">
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
        .viewerSection {
          padding-top: 0px;
        }
        .controlsSection {
          width: 300px;
            display: flex;
            float:left;
            padding: 0px 0 0 0;
            height:25px;
          }
          .controlBox {
            border: 0px solid lightgray;
            padding: 0px;
            margin-bottom: 0px;
          }
        #myViewer1{
          float:left;
          width:469px;
          height: 416px;
          position:relative;  
        }    
      </style>
  </head>
  <body onload="customize()">
      <div class="controlsSection">
          <button onclick="
            var selectSections1 = [
              {
                struct_asym_id: 'A', 
                start_residue_number:1, 
                end_residue_number: 10, 
                color:{r:0,g:111,b:222}
              },
            ]
          viewerInstance1.visual.select({ data: selectSections1, nonSelectedColor: {r:255,g:255,b:255}})" style="float:right;height:25px;width: 150px;">Color Selection</button><br><br>
        <button button style="float: left;height:25px;width: 150px;" onclick="viewerInstance1.visual.clearSelection()">Clear Selection</button><br><br>
    </div>
  
  <div class="viewerSection">
  <!-- Molstar container -->
    <div id="myViewer1"></div>
  </div>
  
  <script>
    var viewerInstance1 = new PDBeMolstarPlugin();
    var options1 = {
      moleculeId: '4lvv',
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
