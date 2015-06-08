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
  <link href='//fonts.googleapis.com/css?family=Raleway:400,300,600' rel='stylesheet' type='text/css'>

  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="public/css/normalize.css">
  <link rel="stylesheet" href="public/css/skeleton.css">
  <link rel="stylesheet" href="public/css/custom.css">

  <!-- JS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
  <script src="public/js/jquery.slides.min.js"></script>
  <script type="public/js/tables.js"></script>
  <script src="public/js/scripts.js"></script>

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
        <div class="brand">
        
            <a href="./">
              <span class="company-name"Grande Wurst></span>
              <img class="logo" src="public/images/logo_kobaja.png"></span>
            </a>
          </h1>
        </div>
      </div>
    </div><!--end container-->
  </header>


  <!-- Navigation
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <nav>
    <div class="container">
      <div class="twelve columns">
        <div class="primary">
          <ul>

            <li><a href="#">Početna</a></li>
            <li><a href="#">Meni</a>

              <ul>
                <li><a href="#"><span>- </span>Akcije</a></li>
                <li><a href="#"><span>- </span>Kobasice</a></li>
                <li><a href="#"><span>- </span>Salate</a></li>
                <li><a href="#"><span>- </span>Sendviči</a></li>
                <li><a href="#"><span>- </span>Šejkovi</a></li>
                <li><a href="#"><span>- </span>Pića</a></li>
              </ul>

             </li>
            <li><a href="#">Dostava</a></li>
            <li><a href="#">Kontakt</a></li>

          </ul>
        </div><!--end primary-->
      </div>
    </div><!--end container-->
  </nav>

  <!--Dropdown nav-->
  <script type="text/javascript">
    $(document).ready(function(){

      //build dropdown
      $("<select />").appendTo(".primary");

      // Create default option "Go to..."
      $("<option/>", {
        "selected" : "selected",
        "value"    : "",
        "text"     : "Navigacija..."
      }).appendTo("nav select s");

      // Populate dropdown with menu items
      $("nav a").each(function() {
        var el = $(this);
        $("<option />", {
          "value"   : el.attr("href"),
          "text"    : el.text()
        }).appendTo("nav select");
      });

      //link dropdown menu
      $("nav select").change(function() {
        window.location = $(this).find("option:selected").val();
      });

    })
  </script>