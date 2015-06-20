  <!-- Slajder
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->

  <div id="slides">

    <div class="slide">
      <img src="public/images/example-slide-1.jpg">
      <div class="inner-info">
        <div class="info-wrap">
          <span>
            <p class="cena">100</p>
            <p class="rsd">dinara</p>
          </span>
          <h1>Kobaja grande</h1>
          <p>Ljuta austrijska Kobaja, probajte ovo ludilo ovo brale nije normalno svega mi</p>
        </div>
      </div>
    </div>

    <div class="slide">
      <img src="public/images/example-slide-2.jpg">
      <div class="inner-info">
        <div class="info-wrap">
          <span>
            <p class="cena">100</p>
            <p class="rsd">dinara</p>
          </span>
          <h1>Kobaja</h1>
          <p>Ljuta austrijska Kobaja, probajte ovo ludilo ovo brale nije normalno svega mi</p>
        </div>
      </div>
    </div>

    <div class="slide">
      <img src="public/images/example-slide-3.jpg">
      <div class="inner-info">
        <div class="info-wrap">
          <span>
            <p class="cena">100</p>
            <p class="rsd">dinara</p>
          </span>
          <h1>Kobaja</h1>
          <p>Ljuta austrijska Kobaja, probajte ovo ludilo ovo brale nije normalno svega mi</p>
        </div>
      </div>
    </div>

    <div class="slide">
      <img src="public/images/example-slide-4.jpg"> 
      <div class="inner-info">
        <div class="info-wrap">
          <span>
            <p class="cena">100</p>
            <p class="rsd">dinara</p>
          </span>
          <h1>Kobaja</h1>
          <p>Ljuta austrijska Kobaja, probajte ovo ludilo ovo brale nije normalno svega mi</p>
        </div>
      </div>
    </div>

      <a href="#" class="slidesjs-previous slidesjs-navigation slides-button"><span class="fa fa-chevron-left fa-4x"></span></a>
      <a href="#" class="slidesjs-next slidesjs-navigation slides-button"><span class="fa fa-chevron-right fa-4x"></span></a>
  
  </div>


  <!-- Set position of captions -->
  <script type="text/javascript">
  var Brand = document.getElementById("brand");
  t = Brand.getBoundingClientRect();
  Captions = document.getElementsByClassName("inner-info");

  for(var i = 0, length = Captions.length; i < length; i++) {
    Captions[i].style.left = t.left + "px";
  }

  </script>



  <!-- Content top
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <div class="top-content">
    <div class="container">

      <div class="welcome-section">
        <h2>Novo u vašem komšiluku!</h2>
        <p>Fast food Grande Wurst vam na vrata donosi najbolje austrijske proizvode od kobasica!</p>
      </div>

      <div class="row">
        <div class="one-third column value">
          <div class="info-section">
            <img class="info-kruzici" src="public/images/aus-flag.png" />
          </div>
          <h5 class="value-heading">Austrijske kobaje</h5>
          <p class="value-description">Percentage of users more likely to purchase on mobile friendly site.</p>
        </div>
        
        <div class="one-third column value">
          <div class="info-section">
            <img class="info-kruzici" src="public/images/porudzbina.png" />
          </div>
          <h5 class="value-heading">Minimalna porudžbina</h5>
          <p class="value-description">Most of the world accesses the internet on multiple devices.</p>
        </div>
        
        <div class="one-third column value">
          <div class="info-section">
            <img class="info-kruzici" src="public/images/snaga.png" />
          </div>
          <h5 class="value-heading">Puno proteina</h5>
          <p class="value-description">Percentage of users that are frustrated with page load times.</p>
        </div>
      </div>
    </div><!--end container-->
  </div><!--end top-content-->


  <!--Slide JS-->
  <script type="text/javascript">
    $(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 450,
        navigation: false,
        pagination: false,

        play: {
          effect: "fade",
          interval: 4000,
          auto: true
        }
      });
    });
  </script>
  <script>
    $('#slides').hover(function() {
            $('.slidesjs-navigation').fadeIn();
        }, function() {
            $('.slidesjs-navigation').fadeOut();        
    });
  </script>