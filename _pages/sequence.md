---
title: "Sequence-info"
layout: gridlay
excerpt: "sequence info "
sitemap: false
permalink: /sequences/
---

<h1 class="post-title" itemprop="name headline">Sequence</h1>
Shows the sequence of Riboswitch (Rfam ID for fasta file download). We keep the U in the partial sequence because it is consistent with the sequence information in the fasta file. ( We provide the script could change T into U on the page). <a href="https://www.ribocentre.org/downloads/sequence-T2U.ipynb" target="_blank" download="sequence-T2U.ipynb"><button class="btn btn-secondary"><span class="glyphicon glyphicon-download-alt"></span>&nbsp;&nbsp;Download Script</button></a><br><br>

<html>
  <head>
    <title>Sequence search</title>
  </head>
  <body>
    <rnacentral-sequence-search
            databases='["ribocentre"]'
            examples='[
              {"description": "c-di-GMP-II-GAG riboswitch", "urs": "", "sequence": "CUGCACGCGGGAGGCUGUGAUCCGCCGGACGUACCGACUGCGGCCACCGCAGUCCGGCGGGGAGCCACUGGUGAGACCGGCCCCCGAAG"},
              {"description": "TPP riboswitch (THI element)", "urs": "", "sequence": "GTGTCCACTCACGGGTGCGCTTCATTAAGCGCTGAGAATAAACCGTTTGAACCTGATCCGGGTTATGCCGGCGATAGGAAGAGAATTATGCATAATG"}
            ]'
            rfam="true"
    />
  <script type="text/javascript" src="https://www.ribocentre.org/js/RNAcentral-sequence-search.js"></script></body>
</html>
<html>
<head>
<style>
     .header_box {
    border: none;
    background: #efefef;
    font-size:24px
  }
  h2{
    font-size:20px
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
      font-size: 20px;
      border: 1px solid #005826;
      border-radius: 5px;
      
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
<div class="button-container">
      <button class="button" onclick="showSheet('sheet1')">Download</button>
  </div>
        
<div id="sheet1" class="sheet">
    <h2>Download what you want</h2>
<table>
  <tr>
    <th>Name</th>
    <th>Download</th>
  </tr>
  <tr>
    <td>File 1</td>
    <td><a href="#" onclick="downloadFile('path/to/file1')">Download</a></td>
  </tr>
  <tr>
    <td>File 2</td>
    <td><a href="#" onclick="downloadFile('path/to/file2')">Download</a></td>
  </tr>
  <tr>
    <td>File 3</td>
    <td><a href="#" onclick="downloadFile('path/to/file3')">Download</a></td>
  </tr>
  <!-- Add more rows... -->
</table>

<script>
function showSheet(sheetId) {
      // 隐藏所有 sheet
      var sheets = document.getElementsByClassName('sheet');
      for (var i = 0; i < sheets.length; i++) {
        sheets[i].style.display = 'none';
      }

      // 显示选定的 sheet
      var sheet = document.getElementById(sheetId);
      sheet.style.display = 'block';
    }

function downloadFile(filePath) {
  // Create a temporary link element with the download URL
  var link = document.createElement('a');
  link.href = filePath;
  link.download = filePath.split('/').pop(); // Set the filename to the last part of the URL
  document.body.appendChild(link);

  // Trigger a click event on the link to start the download
  link.click();

  // Remove the link from the DOM
  document.body.removeChild(link);
}
</script>


</html>