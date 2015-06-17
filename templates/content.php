<!-- Slajder
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div id="slides">
      <img src="public/images/example-slide-1.jpg" alt="Photo by: Missy S Link: http://www.flickr.com/photos/listenmissy/5087404401/">
      <img src="public/images/example-slide-2.jpg" alt="Photo by: Daniel Parks Link: http://www.flickr.com/photos/parksdh/5227623068/">
      <img src="public/images/example-slide-3.jpg" alt="Photo by: Mike Ranweiler Link: http://www.flickr.com/photos/27874907@N04/4833059991/">
      <img src="public/images/example-slide-4.jpg" alt="Photo by: Stuart SeegerLink: http://www.flickr.com/photos/stuseeger/97577796/">   

      <a href="#" class="slidesjs-previous slidesjs-navigation slides-button"><span class="fa fa-chevron-left fa-4x"></span></a>
      <a href="#" class="slidesjs-next slidesjs-navigation slides-button"><span class="fa fa-chevron-right fa-4x"></span></a>
    </div>

    
  
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
            <img class="info-kruzici" src="public/images/kruzic.jpg" />
          </div>
          <h5 class="value-heading">Austrijske kobaje</h5>
          <p class="value-description">Percentage of users more likely to purchase on mobile friendly site.</p>
        </div>
        
        <div class="one-third column value">
          <div class="info-section">
            <img class="info-kruzici" src="public/images/kruzic.jpg" />
          </div>
          <h5 class="value-heading">Minimalna porudžbina</h5>
          <p class="value-description">Most of the world accesses the internet on multiple devices.</p>
        </div>
        
        <div class="one-third column value">
          <div class="info-section">
            <img class="info-kruzici" src="public/images/kruzic.jpg" />
          </div>
          <h5 class="value-heading">Puno proteina</h5>
          <p class="value-description">Percentage of users that are frustrated with page load times.</p>
        </div>
      </div>
    </div><!--end container-->
  </div><!--end top-content-->


  <!--Slide JS-->
  <script>
    $(function() {
      $('#slides').slidesjs({
        //width: 940,
        //height: 290,
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