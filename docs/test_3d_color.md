---
layout: post
title:  "ppGpp"
date:   2023-05-28 00:00:00
author: Yuhang Luo, Yuanlin He
permalink: /docs/3d_color/
---
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
 …[omitted]
    </style>
  </head>
  <body onload="initMolstar()">
    <div id="molstar-container"></div>
    <script>
      function initMolstar() {
        var config = {
          pdbId: '5ire',
          containerId: 'molstar-container',
          settings: {
            backgroundColor: 'white',
            rotationAnimationDurationMs: 2000,
            cameraType: 'perspective',
            lightColor: 'white',
            ambientIntensity: 0.2,
            diffuseIntensity: 0.8,
            specularIntensity: 0.3,
            materialShininess: 30,
            outlineEnabled: true,
            outlineColor: 'black',
            outlineThickness: 0.03,
            focusColor: 'red',
            focusDurationMs: 500,
            focusEasingFunction: 'easeOutCubic',
            mousePreset: 'default',
            mouseSensitivityZoom: 3.0,
            mouseSensitivityRotate: 1.0,
            mouseSensitivityPan: 0.5,
            mouseSensitivityFov: 1.0,
            mouseInvertZoom: false,
            mouseInvertRotate: false,
            mouseInvertPan: false,
            mouseInvertFov: false,
            mouseWheelZoomEnabled: true,
            mouseWheelZoomFactor: 1.5,
            touchSensitivityZoom: 3.0,
            touchSensitivityRotate: 1.0,
            touchSensitivityPan: 0.5,
            touchSensitivityFov: 1.0,
            touchInvertZoom: false,
            touchInvertRotate: false,
            touchInvertPan: false,
            touchInvertFov: false,
            touchPinchZoomEnabled: true,
            touchPinchZoomFactor: 0.5
          }
        };
        var molstar = PDBeMolstarPlugin.create(config);
        
        window.onload = function() {
          molstar.activateColorSelection();
        };
      }
    </script>
  </body>
</html>

 
