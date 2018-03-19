  $(document).ready(function() {
  
    $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {   
      $('#dialog-overlay, #dialog-box').hide();   
      return false;
    });
  
  //$("#mapBtn").hide();
  $("#mapBtn").click(function () {
    ShowPopup($("#mapBtn").attr('dir'));
  });


  $('#s1').click(function(){
    $('.part2 #icon').attr("src","photo/elctronics.png");

    $('.bdy #title').text("Electronics");

    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("A range of the latest electronics in an exciting shopping experience that have been selected especially for you");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s2').click(function(){
    $('.part2 #icon').attr("src","photo/LTC.png");

    $('.bdy #title').text("Confectionary,  Liquor & Tobacco");

    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>We have selceted the best international Tobacco, Confectionary and liquor which will meet your safecitecated taste. </p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s3').click(function(){
    $('.part2 #icon').attr("src","photo/muscat--market.png");
    $('.bdy #title').text("Muscat Market");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>Pick up  your quick Confectionary and snaks  through Muscat Market </p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s4').click(function(){
    $('.part2 #icon').attr("src","photo/p-and-c.png");
    $('.bdy #title').text("Perfumes and Cosmetics");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>The leatest skin care prudcuts and the redolence scentes is now in your hand. </p>");
  });
  $('#s5').click(function(){
    $('.part2 #icon').attr("src","photo/amounge.png");
    $('.bdy #title').text("Amouge Boutique");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>Oman based international fragrance house. Offering a wide veraity  of luxerioues prefumes</p>");
  });
  $('#s6').click(function(){
    $('.part2 #icon').attr("src","photo/fashion-jewelry.png");
    $('.bdy #title').text("Fashion Jewellery");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Shining & specular Jwellery with variouse shapes and colors now under your demand.");
  });
  $('#s7').click(function(){
    $('.part2 #icon').attr("src","photo/kids-kingdom.png");
    $('.bdy #title').text("Kids Kingdom");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Let your kids enjoy the Joyfull proudects of Kids Kingdom where the fun is unlimited. ");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s8').click(function(){
    $('.part2 #icon').attr("src","photo/gourmet-store.png");
    $('.bdy #title').text("Gourmet Store");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Never miss the freshly made delicious nuts and the fine roasted pure chocolate  that comes in different flavors");
  });
              $('#s9').click(function(){
                $('.part2 #icon').attr("src","photo/Pure Gold.jpg");
                $('.bdy #title').text("Pier Stores (North, South and West)");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("The pier stores act as a last minute opportunity for passengers to purchase Duty Free products including Liquor, tobacco, fragrances and top selling gifting and snacking packs of confectionary.");
              });
              $('#s10').click(function(){
                $('.part2 #icon').attr("src","photo/arrivals.png");
                $('.bdy #title').text("Arrivals Store");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("Another chance to pick up a gift or any other desirable item through Arrival store");
              });
              $('#s11').click(function(){
                $('.part2 #icon').attr("src","photo/luxury-fashion-avenue.png");
                $('.bdy #title').text("Luxury Fashion Avenue");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("Lateast trends and fashion available at the Luxury Fashion Avenue");
                $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
              });
              $('#s12').click(function(){
                $('.part2 #icon').attr("src","photo/high-street-fashion.png");
                $('.bdy #title').text("High Street Fashion");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("Enjoy different collections of elegent clothing,  sportwear, shoes, wathces and bags at High Street Fashion . ");
                $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
              });
               $('#s13').click(function(){
                $('.part2 #icon').attr("src","photo/spectrum.png");
                $('.bdy #title').text("Sunglasses");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').html("Our Spectrum Sunglasses concept store caters to the needs of the international, brand savvy, style conscious traveler who wishes to indulge in an accessible luxury or lifestyle accessory. </br>Spectrum supplies an array of the most iconic and up to date fashionable luxury styles, while also providing cutting edge high performance technology eyewearModren, sleek & classic Sunglasses designed to fit your taste");
              });
  $('#s14').click(function(){
    $('.part2 #icon').attr("src","photo/blank.png");
    $('.bdy #title').text("Wh Smith");

    $('.bdy #desc').text("In a hurry to catch a flight? Grab a snack or book to read on your way to your gate. ");
  });
  $('#s15').click(function(){
    $('.part2 #icon').attr("src","photo/blank.png");
    $('.bdy #title').text("Souq of Oman");

    $('.bdy #desc').text("Experience the traditional souqs of Oman in the heart of the airport and check out the local and traditional fine collectables and souvenirs.");
  });
  $('#s16').click(function(){
    $('.part2 #icon').attr("src","photo/blank.png");
    $('.bdy #title').text("Be relax");

    $('.bdy #desc').text("The airport spa for a massage, manicure, padicure and beauty care before your flight. ");
  });
  $('#s17').click(function(){
    $('.part2 #icon').attr("src","photo/blank.png");
    $('.bdy #title').text("Gallery Argan");

    $('.bdy #desc').text("The most eye-catching jewellary designs.");
  });
  $('#s18').click(function(){
    $('.part2 #icon').attr("src","photo/blank.png");
    $('.bdy #title').text("Muscat Pharmacy");

    $('.bdy #desc').text("Your store to get range of pharmacitals products, baby care and health products.");
  });
              //Change to English
              $('#change-us').click(function(){
               
              
              });

              //Change to Arabic
              $('#change-ar').click(function(){
                location.href = "index.htm";
                writeCookie("lang","arabic");
                window.external.ChangeLanguage("ar-eg");
          

              });



                    $('#btn').hide();
                    //$('#leftmenu ul').hide();        
                    $('#leftmenu h3,h5').click( 
                        function() {
                            /*var $this = $(this);
                            $this.next('ul').siblings('ul').slideUp();
                            $this.next('ul').find('ul').slideUp();
                            $this.next().slideToggle(300); */
                    });

        

     });

  function ShowPopup(src){

// get the screen height and width  
  var maskHeight = $(document).height();  
  var maskWidth = $(window).width();
  
  // calculate the values for center alignment
  var dialogTop =  (maskHeight/3) - ($('#dialog-box').height());  
  var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2); 
  
  // assign values to the overlay and dialog box
  $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
  $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
  
  document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+ src +'"/></div></div>';
  //$("#dialog-box").append('<div class="dialog-content"><div id="dialog-message">'+ message +'</div><a href="#" class="button">Close</a></div>');
        

}