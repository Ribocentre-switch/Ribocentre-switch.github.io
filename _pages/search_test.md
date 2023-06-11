---
title: "Ribocentre - Home"
layout: homelay
excerpt: "Ribocentre: A ribozyme database"
sitemap: false
permalink: /search_test/
---



  <br>  


<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {box-sizing: border-box}
/* Set height of body and the document to 100% */

/* Style tab links */
.tablink {
  background-color: #f4f4f4;
  color: #005826;
  border: none;
  outline: none;
  cursor: pointer;
  padding:3px 12px;
  font-size: 20px;
  font-weight:bold
  
}
p {
    margin: 0 0 0px;
}
.tablink:hover {
  background-color: #777;
}

/* Style the tab content (and add height:100% for full page content) */
.tabcontent {
  color: black;
  display: none;
  padding: 20px 20px;
  height: 100%;
}
.search_bg{
    background: #f4f4f4;
  }
 .box_style{
    background: #f4f4f4;
  }
  .well {
    max-width: 70%;
    margin: 0 auto;
    border-top: 3px solid black;
    }
  .smallwell {
    max-width: 90%;
    margin: 0 auto;
    border-top: 3px solid black;
    }
  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: left;
    word-wrap: break-word;
    }
  .sectiontitle {
    display: block;
    max-width: 100%;
    margin: 0 auto ;
    text-align: left;
    background :#fff;
    }
    body {
    padding-top: 70px;
  }
</style>
</head>
<body>
<div class="wrapper box_style " >
<br>
<div class="well" style="border: 1px solid #C9C9C9; background-color: #fff;">
  <button class="tablink" onclick="openPage('Home', this, 'white' )" id="defaultOpen"><font size="4">Search by sequence</font></button>
  <button class="tablink" onclick="openPage('Contact', this, 'white')"><font size="4">Search by text</font></button>
<div class="wrapper search_bg " style="border: 1px solid #C9C9C9;">

<div id="Home" class="tabcontent" style="width: 100%;height: 300px; overflow-x:hidden;overflow-y: auto;">
<html>
  <head>
    <title>Sequence search</title>
  </head>
  <body>
    <rnacentral-sequence-search
            databases='["ribocentre"]'
            examples='[
              {"description": "Hepatitis delta virus", "urs": "", "sequence": "TCGGGTCGGCATGGCATCTCCACCTCCTCGCGGTCCGACCTGGGCATCCGAAGGAGGACGCACGTCCACTCGGATGGCTAAGGGAGAGCCACT"},
              {"description": "Group II self-splicing intron", "urs": "", "sequence": "AGGAGCCGTGCGAGATGAAAGTCTCATGCACGGTTTTGCATGATAGAAAGAAGCGAGGAATCCTCTTTTCGACTCTGAC"}
            ]'
            rfam="true"
    />
  <script type="text/javascript" src="https://www.ribocentre.org/js/RNAcentral-sequence-search.js"></script></body>
</html>
</div>

<div id="Contact" class="tabcontent" style="width: 100%;height: 300px; overflow-x:hidden;overflow-y: auto;">
<html>
<div style="text-align:center;"><font size="5"> Search in Ribocentre </font></div>
      <!--<div class="well">-->
      <script async src="https://cse.google.com/cse.js?cx=2dcb771063bc36a13"></script>
      <div class="gcse-searchbox-only" style="text-align:center;"></div>
        <p><b>Example:&nbsp;</b>
          <a href="https://www.ribocentre.org/search.html?q=rna#gsc.tab=0&gsc.q=rna&gsc.page=1"  target="_blank">RNA</a>&nbsp;&nbsp;
          <a href="https://www.ribocentre.org/search.html?q=Ribo#gsc.tab=0&gsc.q=Ribo&gsc.page=1"  target="_blank">Ribo</a>&nbsp;&nbsp;
          <a href="https://www.ribocentre.org/search.html?q=breaker#gsc.tab=0&gsc.q=breaker&gsc.page=1"  target="_blank">Breaker</a>&nbsp;&nbsp;<br>
          <b>Quick links:&nbsp;</b>
          <a href="https://www.ribocentre.org/ribozyme">Ribozymes</a>&nbsp;&nbsp;
          <a href="https://www.ribocentre.org/publications">Publications</a>&nbsp;&nbsp;
          <a href="https://www.ribocentre.org/docs/VS-ribozyme.html" target="_blank"> VS with 3D structures</a>&nbsp;&nbsp;
          <a href="https://www.ribocentre.org/Helps">Teams</a>&nbsp;&nbsp;
        </p>
      <br>
</html>
</div>


<script>
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>
</div>
</div>
</div>   
</body>

 </html>




  
 






