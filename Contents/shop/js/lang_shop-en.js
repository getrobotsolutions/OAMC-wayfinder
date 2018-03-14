  $(document).ready(function() {
    ShowTime();
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
    $('.bdy #desc').text("Our store offers a range of the latest electronics in an exciting shopping experience that have been selected especially for the discerning traveler. The store combines the best brands, latest innovations and a trendsetting shopping environment all specifically tailored to travelers. Here you will find the latest smartphones and gadgets from Apple, Samsung and Bose.");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s2').click(function(){
    $('.part2 #icon').attr("src","photo/LTC.png");

    $('.bdy #title').text("LTC (Liquor, Tobacco and Confectionary)");

    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>Muscat Duty Free has positioned the core Duty Free Liquor, Tobacco and Confectionary store in this 955sqm footprint on the right hand side as Muscat originating passengers enter the departures lounge. This store will include a complete brand experience and customized footprints for the most popular Scotch whiskey brands including Johnnie Walker and John Dewar’s. </p><p> The Tobacco area includes a walk in Humidor containing hand-rolled cigars from Cuba, Honduras, Nicaragua and the Dominican Republic. The Cigarette area includes international brands such as Marlboro and L&M. </p><p>Passengers will also be treated to an experience filled with pure chocolate and indulgence from brands such as Bateel and Al Rifai.</p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s3').click(function(){
    $('.part2 #icon').attr("src","photo/muscat--market.png");
    $('.bdy #title').text("Muscat Market");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>Positioned on the left hand side as Muscat originating passengers enter the departures lounge, this market measuring 900sqm is a shopping destination for value conscious Indian sub-continent bound passengers.</p><p>Drawing its design theme from the palms of the Omani landscape, the Muscat Market is stocked with products and international brands such as Cadburys, Nestle, Mars and Kinder.</p><p>As you enter the store you will find our iconic Kit Kat chocolate bench which will provide our passengers the perfect opportunity for a preflight photo with friends and family.</p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s4').click(function(){
    $('.part2 #icon').attr("src","photo/p-and-c.png");
    $('.bdy #title').text("Perfume and Cosmetics ");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>This area is divided into two main kidney shaped footprints with defined passenger walkways and a circular central feature measuring 900sqm.</p><p>Four destination brands, Chanel, Estee Lauder, Lancôme and Christian Dior will be the iconic footprints at each of the entrances.</p><p>Within the perfume area you will find the Essence of Oman, a multi sensorial area of approximately 90sqm drawing strongly from the influences of the Frankincense of Oman to the scents of Arabia. It includes elements that tell the story of the history of fragrance and its roots in Oman and Arabia, with local, natural fragrance ingredients such as Frankincense, Myrrh, Rose petals, Oud chips, and Jasmine petals (refreshed daily) for customers to touch and smell.</p>");
  });
  $('#s5').click(function(){
    $('.part2 #icon').attr("src","photo/amounge.png");
    $('.bdy #title').text("Amouage Boutique");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>The Amouage brand is the number 1 fragrance brand in Muscat Duty Free and we have dedicated a 100sqm to this flagship store concept.</p><p>The store sells Men’s, Women’s and Unisex Fragrances, deluxe bath and body lines, home fragrances and a newly developed Italian leather accessories range.</p>");
  });
  $('#s6').click(function(){
    $('.part2 #icon').attr("src","photo/fashion-jewelry.png");
    $('.bdy #title').text("Fashion Jewellery");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("With this well designed self-service solution and friendly, expert in store staff we have created a memorable experience for passengers with international brands Swarovski, Pandora and Tous.");
  });
  $('#s7').click(function(){
    $('.part2 #icon').attr("src","photo/kids-kingdom.png");
    $('.bdy #title').text("Kids Kingdom");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("This store is an unexpected delight for passengers of all ages, no matter what type of trip they are on. The store will stock classic toy favourites from brands such as Lego, Mattel and Disney. The key feature in this store is our life size Sinbad Sailor made entirely of Lego located on our Omani Dhow. The store will also include an interactive environment offering kids a fun in store experience while their parents shop");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
              });
              $('#s8').click(function(){
                $('.part2 #icon').attr("src","photo/gourmet-store.png");
                $('.bdy #title').text("Gourmet Store");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("This store is a treasure trove aimed at passengers buying luxury sweet and savory edible products either as gifts or as treats for themselves. It will contain the best of Oman and the Gulf regions foodie delights.");
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
                $('.bdy #desc').text("Located in the baggage hall before Customs you will find a 665sqm store that will cater to all international arriving passengers. The area contains a high profile Shop & Collect pick point, positioned for ease of sight for returning resident shoppers. The store also stocks international brands across categories such as liquor, tobacco, fragrances and confectionary. Our Arrivals store also includes a walk in Cigar Humidor and a delicatessen area which will include a refrigerated gourmet food section including premium products from Europe and around the world that are not easily found in Oman.");
              });
              $('#s11').click(function(){
                $('.part2 #icon').attr("src","photo/luxury-fashion-avenue.png");
                $('.bdy #title').text("Luxury Fashion Avenue");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("Our luxury fashion avenue concept contains Mont Blanc alongside a multi branded area including Tumi, Porsche Design, Tatossian and Tag Heuer, located within this area is also our luxury watches area. This leads into our Ralph Lauren store followed by Hugo Boss and then Michael Kors.");
                $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
              });
              $('#s12').click(function(){
                $('.part2 #icon').attr("src","photo/high-street-fashion.png");
                $('.bdy #title').text("High Street Fashion");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("Our High Street Fashion area includes a multi brand store stocking international fashion brands such as Lacoste, Cerruti, Hackett and Vilebrequin to name but a few. This store then leads into our sports store catering to the outdoor enthusiast with brands such as North Face and Columbia. Located next door you will find our Victoria’s Secrets and Pandora stores.");
                $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
              });
               $('#s13').click(function(){
                $('.part2 #icon').attr("src","photo/spectrum.png");
                $('.bdy #title').text("Sunglasses");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').html("Our Spectrum Sunglasses concept store caters to the needs of the international, brand savvy, style conscious traveler who wishes to indulge in an accessible luxury or lifestyle accessory. </br>Spectrum supplies an array of the most iconic and up to date fashionable luxury styles, while also providing cutting edge high performance technology eyewear");
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