---
title: "Riboswitch - Home"
layout: homelay
excerpt: "Riboswitch: A riboswitch database"
sitemap: True
permalink: /home_test
---
<html>
<head>
    <style>
        .slideshow-container {
            max-width: 500px;
            position: relative;
            margin: auto;
        }

        .slideshow-container img {
            width: 100%;
            height: auto;
        }

        .slideshow-container .slide {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
        }

        .slideshow-container .slide.active {
            display: block;
        }
    </style>
</head>
<body>
    <div class="slideshow-container">
        <div class="slide active">
            <img src="https://static.runoob.com/images/mix/img_fjords_wide.jpg" alt="Image 1">
        </div>
        <div class="slide">
            <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg" alt="Image 2">
        </div>
        <div class="slide">
            <img src="https://static.runoob.com/images/mix/img_mountains_wide.jpg" alt="Image 3">
        </div>
    </div>

    <script>
        // Automatic slideshow
        var slides = document.querySelectorAll('.slide');
        var currentSlide = 0;
        var slideInterval = setInterval(nextSlide, 2000);

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
    </script>
</body>
</html>
