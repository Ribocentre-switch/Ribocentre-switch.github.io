---
title: "Riboswitch - Riboswitch"
layout: riboswitch
excerpt: "Riboswitch - Riboswitch"
sitemap: false
permalink: /riboswitches_test.html/
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
<strong>content</strong><br>
<br>
<blockquote>
list content
</blockquote>
content   
<br>
  <!-- 按钮 -->
  <div class="button-container">
    <button class="button" onclick="showSheet('sheet1')">Sheet 1</button>
    <button class="button" onclick="showSheet('sheet2')">Sheet 2</button>
    <button class="button" onclick="showSheet('sheet3')">Sheet 3</button>
    <button class="button" onclick="showSheet('sheet4')">Sheet 4</button>
    <button class="button" onclick="showSheet('sheet5')">summary all</button>
  </div>
  <!-- 表格 -->
  
  <div id="sheet1" class="sheet">
    <h2>Sheet 1</h2>
    <table>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>
      <!-- 其他行... -->
    </table>
  </div>

  <div id="sheet2" class="sheet">
    <h2>Sheet 2</h2>
    <table>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
      <tr>
        <td>Data 3</td>
        <td>Data 2</td>
        <td>Data 1</td>
      </tr>
      <!-- 其他行... -->
    </table>
  </div>

  <div id="sheet3" class="sheet">
    <h2>Sheet 3</h2>
    <table>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>
      <!-- 其他行... -->
    </table>
  </div>

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
  </script>
</body>
</html>
