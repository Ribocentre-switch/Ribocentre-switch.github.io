---
title: "Riboswitch - Riboswitch"
layout: riboswitch
excerpt: "Riboswitch - Riboswitch"
sitemap: false
permalink: /riboswitches1/
---
<html lang="en">
<head>
  <style>
    .header_box {
    border: none;
    background: #efefef;
    font-size:28px
  }
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
    /* 样式表格 */
    table {
        border: 2px solid #f8f8ff;
        border: 2px solid #767676;
		    border: 2px solid #767676;
		    border-radius: 5px;
		    background-color: #fff;
        }
		  th {
        background-color: #719B71;
        background-color: #719B71;
        background-color: #005826;
        color: rgba(255,255,255,0.9);
		    cursor: pointer;
        }
		  td {
		    background-color: #ffffff;
		    background-color: #f9f9f9;
		    background-color: #f9f9f9;
		    }		
		  th, td {
		  min-width: 90px;
		  padding: 10px 10px;
		}

    /* 隐藏所有 sheet */
    .sheet {
      display: none;
    }
    
  </style>
</head>
<body>
<p class="header_box">Riboswitch</p>
    
<strong>Riboswitches are structured noncoding RNA domains which are typically embedded in messenger RNAs in many bacteria, where they monitor the concentrations of their target ligands and regulate gene expression accordingly. Typically, riboswitches are composed of two parts: an 
aptamer that senses the target ligand and an expression platform that directly interfaces with components of the cell that affect gene expression.
In the past 20 years, more than 55 riboswitch classes have been experimentally validated and the ligands they sense comprise a diverse list of biologically relevant compounds including fundamental metabolites derived from RNA nucleotides or their precursors, amino acid, elementl ions and et al. For more detailed information about each riboswitches, please browse the table below and click on each riboswitch name.</strong><br>
<br>
  <!-- 按钮 -->
  <button onclick="showSheet('sheet1')">Cofactors</button>
  <button onclick="showSheet('sheet2')">RNA derivatives</button>
  <button onclick="showSheet('sheet3')">RNA precursors</button>
  <button onclick="showSheet('sheet4')">Signaling molecules</button>
  <button onclick="showSheet('sheet5')">Elemental ions</button>
  <button onclick="showSheet('sheet6')">Amino acids</button>
  <button onclick="showSheet('sheet7')">Sugars</button>
  <button onclick="showSheet('sheet8')">Others</button>
  <button onclick="showSheet('sheet9')">T-box</button>
  <br><br>
        
<div id="sheet1" class="sheet">
    <h2>Cofactors</h2>
    <table>
      <tr>
        <th>name</th>
        <th>Ligand</th>
        <th>Description</th>
        <th>Discovery</th>
        <th>Linker</th>
        <th>Rfam-name</th>
        <th>Rfam-ID</th>
      </tr>
      <tr>
        <td name="td0"><a href="https://ribocentre-switch.github.io/docs/Cobalamine" target="_blank"><b>AdoCbl</b></a></td>
        <td name="td1">Adenosylcobalamin</td>
        <td name="td2">Cobalamin riboswitch is a cis-regulatory element which is widely distributed in 5' untranslated regions of cobalamin related genes in bacteria to regulate adjacent genes related to cobalamin metabolism in response to cobalamin binding. Cobalamin riboswitches are broadly classified by the identity of the aptamer, and can be further classified into AdoCbl and AqCbl riboswitch.</td>
        <td name="td3"><a href="https://pubmed.ncbi.nlm.nih.gov/10852957/" target="_blank"><b>2000</b> </a></td>
        <td name="td4">AdoCbl riboswitch
Cobalamin riboswitch<br></td>
        <td name="td5">RF01482
RF00174</td>
      </tr>
    </table>
</div>
                