<!-- Footer
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <footer>
    <div class="container">
      <div class="row">

        <div class="four columns">
          <div class="bottom-nav">
            <ul>
              <li><a href="#">Početna</a></li>
              <li><a href="#">Meni</a></li>
              <li><a href="#">Dostava</a></li>
              <li><a href="#">Kontakti</a></li>
            </ul>
          </div>
        </div>

        <div class="four columns">
          <address class="address">
            <ul>
              <li>Email: grandewurst@gmail.com</li>
              <li>Adresa: Bul. Zorana Đinđića</li>
              <li>Tel. za porudžbine: 062 55 12 55</li>
              <li>Radno vreme: 08 - 23h</li>
            </ul>
          </address>
        </div>

        <div class="four columns">
          <div class="social-bott">
            <ul>
              <li><a class="fa fa-facebook fa-2x" href="#" ></a></li>
              <li><a class="fa fa-twitter fa-2x" href="#" ></a></li>
              <li><a class="fa fa-google-plus fa-2x" href="#" ></a></li>
            </ul>
          </div><!--end social-->
        </div>
      </div><!--end row-->
    </div><!--end container-->
  </footer>


<!-- Bottom
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <div class="bottom-copyr">
    <div class="container">
      <p>GRANDE WURST © 2014 All rights reserved</p>
    </div><!--end container>-->
  </div>

  
  <!--Dropdown nav
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
  -->

<script>
  $(window).load(function() {
    // When the page has loaded
    $("body").css("visibility", "visible");
  });
</script>
  
<!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>

</html>
