---
title: "Ribocentre - Home"
layout: homelay
excerpt: "Ribocentre: A ribozyme database"
sitemap: false
permalink: /home_v2/
---
<html lang="zh-cn">
<head>
<meta charset="utf-8"> 
<style>
  .header_box {
    border: none;
    background: #efefef;
    font-size:24px
  }
  button, input, optgroup, select, textarea {
    color: #005826;
    font: inherit;
    font-weight: bold;
    margin: 0;
}
  .box_style{
    background: #f4f4f4;
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
  .well {
    max-width: 70%;
    margin: 0 auto;
    border-top: 3px solid black;
    }
  .smallwell {
    max-width: 100%;
    margin: 0 auto;
    border-top: 3px solid black;
    }
  table:not(.table-bordered)>thead>tr>th,table:not(.table-bordered)>tbody>tr>th,table:not(.table-bordered)>tfoot>tr>th,table:not(.table-bordered)>thead>tr>td,table:not(.table-bordered)>tbody>tr>td,table:not(.table-bordered)>tfoot>tr>td,.table:not(.table-bordered)>thead>tr>th,.table:not(.table-bordered)>tbody>tr>th,.table:not(.table-bordered)>tfoot>tr>th,.table:not(.table-bordered)>thead>tr>td,.table:not(.table-bordered)>tbody>tr>td,.table:not(.table-bordered)>tfoot>tr>td {
    border-color: transparent;
    border: 1px solid #fff
}

   /* 弹窗样式 */
      .click-here {
      cursor: pointer;
      font-weight: bold;
      color: #005826; /* Add the green color */
    }
        .popup {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 300px;
            padding: 10px;
            background-color: #f0f0f0;
            border: 2px solid #ccc;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            z-index: 9999;
        }
        .popup-image {
      display: inline;
      width: 40px; /* Adjust the size as needed */
      margin-right: 10px;
    }
        /* 关闭按钮样式 */
        .close-btn {
            display: block;
            margin-top: 10px;
            text-align: center;
            cursor: pointer;
        }
        .popup-title {
      font-size: 24px;
      
    }
        /* 弹窗样式 */
</style>
</head>
<body>
  <!-- 弹窗内容开始 -->
    <div class="popup" id="myPopup">
        <div class="popup-title">
      <img class="popup-image" src="/images/light.svg" alt="Image">
      Need helps
    </div>
        <a href="https://riboswitch.ribocentre.org/helps/" class="hidden-link" id="link1" target="_blank"></a>
      How to use the database, <span onclick="openLink('link1')" class="click-here">click here</span><br>
      <a href="https://docs.google.com/spreadsheets/d/1QWMju5Y1uzZ9tL10eDpD7j4IMYvkP9VWAkgVgvU8HqY/edit#gid=0" class="hidden-link" id="link2" target="_blank"></a>
      How to provide feedback, <span onclick="openLink('link2')" class="click-here">click it</span>
        
        <button class="close-btn" onclick="closePopup()">Close pop-up window</button>
    </div>

  <!-- 弹窗内容结束 -->
<div class="wrapper box_style" >
<br>
  <div class="well" style="border: 1px solid #C9C9C9; background-color: #fff;">
    <section class="sectiontitle"> 
    <h1 class="post-title" itemprop="name headline"><strong>Welcome to Ribocentre-switch</strong></h1>
    <div>
    <div markdown="0" id="carousel" class="carousel slide" data-ride="carousel" data-interval="4000" data-pause="hover" >
     <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
         <li data-target="#carousel" data-slide-to="4"></li>
        
    </ol>

    <!-- Items -->
    <div class="carousel-inner" markdown="0">
         <div class="item active ">
            <img src="/images/home_page/home_page_picture1.svg" alt="Slide 1" style=" width:1000px; object-fit: cover;border-radius:0%;display: block; margin: 0 auto;"/>
        </div>
        <div class="item ">
            <img src="/images/home_page/home_page_picture2.svg" alt="Slide 1" style=" width:1000px; object-fit: cover;border-radius:0%;display: block; margin: 0 auto;"/>
        </div>
        <div class="item">
            <img src="/images/home_page/home_page_picture3.svg" alt="Slide 2" style=" width:1000px; object-fit: cover;border-radius:0%;display: block; margin: 0 auto;"/>
        </div>
        <div class="item">
            <img src="/images/home_page/home_page_picture4.svg" alt="Slide 3" style="width:1000px; object-fit: cover;border-radius:0%;display: block; margin: 0 auto;"/>
        </div>
        <div class="item">
            <img src="/images/home_page/home_page_picture5.svg" alt="Slide 4" style=" width:1000px; object-fit: cover;border-radius:0%;display: block; margin: 0 auto;"/>
        </div>
  <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<br>
        <strong style="color:#005826;font-weight: bold">Riboswitch</strong>  is a regulatory segment of a messenger RNA molecule that binds a small molecule, resulting in a change in production of the proteins encoded by the mRNA. Thus, an mRNA that contains a riboswitch is directly involved in regulating its own activity, in response to the concentrations of its effector molecule. The discovery that modern organisms use RNA to bind small molecules, and discriminate against closely related analogs, expanded the known natural capabilities of RNA beyond its ability to code for proteins, catalyze reactions, or to bind other RNA or protein macromolecules.

        The original definition of the term "riboswitch" specified that they directly sense small-molecule metabolite concentrations. Although this definition remains in common use, some biologists have used a broader definition that includes other cis-regulatory RNAs. However, this article will discuss only metabolite-binding riboswitches.

        Most known riboswitches occur in bacteria, but functional riboswitches of one type (the TPP riboswitch) have been discovered in archaea, plants and certain fungi. TPP riboswitches have also been found in eukaryotes eukaryotes that function via alternative splicing of mRNA <a href="https://en.wikipedia.org/wiki/Riboswitch " target="_blank" >(from Wiki).</a>
        <br><br>
    
  <div class="wrapper box_style " style="background-color: #fff">

  <button class="tablink" onclick="openPage('Home', this, 'white' )" id="defaultOpen" style="font-size: 20px;">Search by sequence</button>
  <button class="tablink" onclick="openPage('Contact', this, 'white')" style="font-size: 20px;">Search by text</button>
<div class="wrapper search_bg " style="border: 1px solid #C9C9C9;">

<div id="Home" class="tabcontent" style="width: 100%;height: 250px; overflow-x:hidden;overflow-y: auto;">
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
</div>

<div id="Contact" class="tabcontent" style="width: 100%;height: 250px; overflow-x:hidden;overflow-y: auto;">
<html>
      <!--<div class="well">-->
  <div class="left-aligned" style="width: 82%;">
    <div style="text-align:left;"><font size="5"> &nbsp;&nbsp; Search in Riboswitch </font></div>
    <!--<div class="well">-->
    <script async src="https://cse.google.com/cse.js?cx=83f482a688df849e9"></script>
    <div class="gcse-search"></div>
    <p>
        <b>&nbsp;&nbsp;  Quick links:&nbsp;</b>
        <a href="https://riboswitch.ribocentre.org/riboswitches/">Riboswitches</a>&nbsp;&nbsp;
        <a href="https://riboswitch.ribocentre.org/sequences/">Sequences</a>&nbsp;&nbsp;
        <a href="https://riboswitch.ribocentre.org/docs/THF/" target="_blank">THF</a>&nbsp;&nbsp;
        <a href="https://riboswitch.ribocentre.org/helps/">Teams</a>&nbsp;&nbsp;
    </p>
  </div>
      
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
<script>
        // 打开弹窗
        function openPopup() {
            var popup = document.getElementById('myPopup');
            popup.style.display = 'block';
        }

        // 关闭弹窗
        function closePopup() {
            var popup = document.getElementById('myPopup');
            popup.style.display = 'none';
        }

        // 页面加载完成后自动打开弹窗
        window.onload = function() {
            openPopup();
        };
        function openLink(linkId) {
        // 根据 linkId 参数获取链接元素
        const linkElement = document.getElementById(linkId);
        // 点击链接
        linkElement.click();
    }
    </script>
      
<br>












  
 






