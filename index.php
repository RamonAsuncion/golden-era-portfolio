<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <title>Ramon Asuncion</title>
  <link rel="stylesheet" href="https://unpkg.com/98.css" />
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <div class="wordart-header-absolute-center">
    <span class="purple-wordart-wrapper">
      <span class="purple-wordart">My Portfolio</span>
    </span>
    <span class="rainbow-wrapper" data-content="Projects">
      <span class="rainbow">Projects</span>
    </span>
  </div>
  <div class="marquee-bar">
    <marquee behavior="alternate" direction="left" scrollamount="16">
      <span class="blinking"><span>Check out my blog!</span></span>
    </marquee>
  </div>

  <div id="desktop">
    <div style="margin: 32px 0 0 32px"></div>

    <div class="icon" onclick="openWindow('exampleWindow')">
      <img src="images/folder.png" alt="" />
      <div>My Project</div>
    </div>

    <div class="icon" onclick="window.open('blog.php', '_blank')">
      <img src="images/news.png" alt="" />
      <div>My Blog</div>
    </div>

    <div class="icon" onclick="window.open('https://www.youtube.com/@meanmetrics', '_blank')">
      <img src="images/camera.png" alt="" />
      <div>YouTube</div>
    </div>

    <div class="icon" onclick="window.open('https://www.linkedin.com/in/ramonasuncion/', '_blank')">
      <img src="images/linkedin.jpeg" alt="" />
      <div>LinkedIn</div>
    </div>
  </div>

  <div id="windows">
    <div class="window" id="exampleWindow">
      <div class="title-bar">
        <div class="title-bar-text">My Projects - File Explorer</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close" onclick="closeWindow('exampleWindow')"></button>
        </div>
      </div>
      <div class="window-body">
        <div class="explorer-menubar">
          <span class="menu-item">File</span>
          <span class="menu-item">Edit</span>
          <span class="menu-item">View</span>
          <span class="menu-item">Tools</span>
          <span class="menu-item">Help</span>
        </div>
        <div class="explorer-toolbar">
          <button class="toolbar-btn">Back</button>
          <button class="toolbar-btn">Forward</button>
          <button class="toolbar-btn">Up</button>
          <div class="address-bar">
            <span>Address: </span>
            <input type="text" value="C:\Ramon\Projects\" readonly />
          </div>
        </div>
        <div class="explorer-content">
          <div class="explorer-sidebar">
            <ul class="tree-view">
              <li>My Computer</li>
              <li>Desktop</li>
              <li>
                <details open>
                  <summary>Projects</summary>
                  <ul>
                    <li>Web Development</li>
                    <li>Mobile Apps</li>
                    <li>APIs</li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div class="explorer-main">
            <div class="file-header">
              <div class="column-header">Name</div>
              <div class="column-header">Type</div>
              <div class="column-header">Size</div>
              <div class="column-header">Modified</div>
            </div>
            <div class="file-list">
              <div class="project-item" onclick="openProject('blog')">
                <img src="images/news.png" alt="blog" class="project-icon" />
                <span class="file-name">Personal Blog</span>
                <span class="file-type">Web App</span>
                <span class="file-size">2.5 MB</span>
                <span class="file-date">06/01/2024</span>
              </div>
            </div>
          </div>
        </div>
        <div class="explorer-statusbar">
          <span>6 objects</span>
          <span>Ready</span>
        </div>
      </div>
    </div>
  </div>

  <div
    style="position: fixed; left: 0; right: 0; bottom: 0; z-index: 200; pointer-events: none; display: flex; justify-content: center; align-items: flex-end; width: 100vw; gap: 12px;">
    <img src="images/construction.gif" alt="Under Construction"
      style="height:48px; image-rendering: pixelated; pointer-events: auto; margin: 4px 0; background: none;" />
    <img src="images/construction.gif" alt="Under Construction"
      style="height:48px; image-rendering: pixelated; pointer-events: auto; margin: 4px 0; background: none;" />
  </div>

  <div style="position: fixed; top: 16px; right: 24px; z-index: 300; display: flex; gap: 8px;">
    <img src="images/us.gif" alt="English" id="lang-en"
      style="width:32px; height:20px; cursor:pointer; border:2px solid #fff; box-shadow:0 1px 2px #888; background:#eee;" />
    <img src="images/spain.gif" alt="Español" id="lang-es"
      style="width:32px; height:20px; cursor:pointer; border:2px solid #fff; box-shadow:0 1px 2px #888; background:#eee;" />
  </div>

  <img src="images/alien.gif" alt="Dancing Alien" class="dancing-alien" />

  <img src="images/laptop.gif" alt="Laptop" class="laptop-decoration" />

  <img src="images/cat.gif" alt="Cat" class="cat-decoration" />

  <img src="images/dvd.gif" alt="DVD Logo" class="dvd-logo" id="dvdLogo" />

  <script src="js/script.js"></script>
  <script src="https://unpkg.com/cursor-effects@latest/dist/browser.js"></script>
</body>

</html>