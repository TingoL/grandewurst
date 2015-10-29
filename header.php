<!DOCTYPE html>
<html lang="en">
<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>Grande Wurst</title>
  <meta name="description" content="Fast food Grande Wurst">
  <meta name="author" content="">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="public/fonts/font-awesome-4.2.0/css/font-awesome.min.css">
  <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'>

  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="public/css/normalize.css">
  <link rel="stylesheet" href="public/css/skeleton.css">
  <link rel="stylesheet" href="public/css/custom.css">

  <!-- JS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwhAzVFdubXaDjE3rVRs-cEcOOhjgFMsI"></script>
  <script src="public/js/jquery.slides.min.js"></script>
  <script type="public/js/tables.js"></script>
  <script src="public/js/scripts.js"></script>
  <script src="public/js/gmaps.js"></script>
  <script type="text/javascript" src="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/maplabel/src/maplabel-compiled.js"></script>

  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="public/images/favicon.png" />

</head>
<body>


  <!-- Header
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <header>
    <div class="container">
      <div class="twelve columns">
        <div id="brand">
          <a href="./">
            <span class="company-name"Grande Wurst></span>
            <img class="logo" src="public/images/logo_kobaja.png"></span>
          </a>
        </div>
      </div>
    </div><!--end container-->
  </header>

  <div class="nav-phone">
    <h3>060/ 000 000</h3>
    <h3>060/ 000 000</h3>
  </div>


  <!-- Navigation
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <nav>
    <div class="nav-wrap">
      <div class="container">
        <div class="twelve columns">
            <div class="primary">
              <ul>
                
                <li <?php if($current == 'pocetna') {echo 'class="current"';} ?>><a class="nav-link" href=".">Početna</a></li>
                <li <?php if($current == 'meni') {echo 'class="current"';} ?>><a class="nav-link" href="meni.php">Meni</a>

                  <!--
                  <ul>
                    <li><a href="#"><span>- </span>Akcije</a></li>
                    <li><a href="#"><span>- </span>Kobasice</a></li>
                    <li><a href="#"><span>- </span>Salate</a></li>
                    <li><a href="#"><span>- </span>Sendviči</a></li>
                    <li><a href="#"><span>- </span>Šejkovi</a></li>
                    <li><a href="#"><span>- </span>Pića</a></li>
                  </ul>
                  -->

                 </li>
                <li <?php if($current == 'dostava') {echo 'class="current"';} ?>><a class="nav-link" href="dostava.php">Dostava</a></li>
                <li <?php if($current == 'onama') {echo 'class="current"';} ?>><a class="nav-link" href="onama.php">O nama</a></li>

              </ul>
            </div><!--end primary-->
        </div>
      </div><!--end container-->
    </div>
  </nav>