$(document).ready(function(){
ShowTime();
  $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {   
      $('#dialog-overlay, #dialog-box').hide();   
      return false;
    });
  $("#btn").hide();
  //$("#mapBtn").hide();
  $("#btn").click(function () {
    ShowPopup($("#btn").attr('dir'));
    //$("$list1").show();

  });
  $("#mapBtn").click(function () {
    ShowPopup($("#mapBtn").attr('dir'));
    //$("$list1").show();

  });

  /*$('#restau').text("Restaurants");
  $('#c3').text("KFC");
  $('#c4').text("McDonalds");
  $('#c5').text("Spice Kitchen");
  $('#c6').text("Plenty");
  $('#c7').text("The Irish House");
  $('#c8').text("Moka & More");
  $('#c9').text("Sadaf");
  $('#c10').text("Subway");*/
                
  $('#c3').click(function(){
    $('.part2 #icon').attr("src","photo/KFC_logo.png");
    $('.bdy #title').text("KFC");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Well known fried chicken concept for the best taste and if you are in hurry.");
    

    $("#mapBtn").attr('dir','photo/maps/aribou-Coffee.jpg');
    $("#mapBtn").hide();
  });
  $('#c4').click(function(){
    $('.part2 #icon').attr("src","photo/Mcdonalds.png");

    $('.bdy #title').text("McDonalds");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("For burger and fast food lovers, enjou mcdonalds with movement of planes next to you.");
   

    $("#mapBtn").hide();
                
  });
  $('#c5').click(function(){
    $('.part2 #icon').attr("src","photo/spice-kitchen.png");

    $('.bdy #title').text("Spice Kitchen");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Indian Cuisine in a fast food concept for spicy food lovers.");
   

    $("#mapBtn").hide();
  });
  $('#c6').click(function(){
    $('.part2 #icon').attr("src","photo/plenty.png");

    $('.bdy #title').text("Plenty");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Healthy Concious? We have what you need. Just drop in and you calories will be maintained by us.");
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
    $("#mapBtn").show();
    
    //$('.list2').toggle();
  });
  $('#c61').click(function(){
    $('.part2 #icon').attr("src","photo/noor.png");
    $('.bdy #title').text("Noor");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Fine Arabic Cuisine, enjoy the breathtaking food and decoration where your eyes will love the food before your palates.");
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
    $("#mapBtn").show();
  });
  $('#c62').click(function(){
    $('.part2 #icon').attr("src","photo/Tickerdaze.png");
    $('.bdy #title').text("Tickerdaze");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Casual dinning with sports and bubbly beverages. Enjoy matches before boarding you fligth.");
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
    $("#mapBtn").show();
  });
  $('#c63').click(function(){
    $('.part2 #icon').attr("src","photo/luna.png");
    $('.bdy #title').text("Luna");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Ala cart Tapas Restaurant with Fine Beverages and quite zones with beautiful view of Muscat Beaches.");
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
    $("#mapBtn").show();
  });
  $('#c7').click(function(){
    $('.part2 #icon').attr("src","photo/mazoon.png");
    $('.bdy #title').text("Mazoon");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Café with premium coffee just for you and your palates");
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
    $("#mapBtn").show();           
  });
  $('#c8').click(function(){
    $('.part2 #icon').attr("src","photo/caffe-nero.png");

    $('.bdy #title').text("Café Nero");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Want to try the best coffee? Visit Café Nero and you will not regret it");
    
    $("#mapBtn").attr('dir','photo/maps/south-pier-departure(level-02).png');
    $("#mapBtn").show();
  });
  $('#c9').click(function(){
    $('.part2 #icon').attr("src","photo/Caribou-Coffee.png");
    $('.bdy #title').text("Caribou Coffee");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Caffeine Junkie? Boost your energy with Caribou Coffee");
    $("#mapBtn").attr('dir','photo/maps/north-pier-departure(level-02).png');
    $("#mapBtn").show();

  });
  $('#c10').click(function(){
    $('.part2 #icon').attr("src","photo/kahwaji-cafe.png");

    $('.bdy #title').text("Qahwaji Coffee");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Traditional Omani Café with best Omani Coffee and a chance to taste Oman before leaving Muscat.");
  });
   
  $('#c11').click(function(){
    $('.part2 #icon').attr("src","photo/traveler-club.png");
    $('.bdy #title').text("Travelers Club");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Café with relaxing seating to sip your coffee and enjoy your snacks.");
   
  });
  $('#c12').click(function(){
    $('.part2 #icon').attr("src","photo/cakes-&-bakes.png");
    $('.bdy #title').text("Cakes & Bakes");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Bakery and café for pasty lovers");
    $("#mapBtn").attr('dir','photo/maps/west-pier-departure(level-02).png');
    $("#mapBtn").show();
    
   
  });
  $('#c13').click(function(){
    $('.part2 #icon').attr("src","photo/seaside-park.png");
    $('.bdy #title').text("Seaside Park");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Kids heaven and amazing play ground and snacks.");
    $("#mapBtn").attr('dir','photo/maps/north-pier-departure(level-02).png');
    $("#mapBtn").show()
    
  });
  $('#c14').click(function(){
    $('.part2 #icon').attr("src","photo/hall.png");
    $('.bdy #title').text("Prime Class Lounge");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("CIP Passenger? Relax, dine, nap, shower, play and more in our world class lounge.");
   
  });
  $('#c15').click(function(){
    $('.part2 #icon').attr("src","photo/hall.png");
    $('.bdy #title').text("Aerotel Muscat Hotel");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Have long layover or want to sleep without any disturbance? Then visit Aerotel Muscat and you will enjoy the best rooms or swim in an In-Door swimming pool.");

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


                    //$('#btn').hide();
                    //$('#leftmenu ul').hide();        

                $('#leftmenu h3,h5').click( 
                  function() {
                    var $this = $(this);

                            /*$this.next('ul').siblings('ul').slideUp();
                            $this.next('ul').find('ul').slideUp();
                            $this.next().slideToggle(300); */
                    });

 



     });

function ShowPopup(src){

// get the screen height and width  
  var maskHeight = $(document).height();  
  var maskWidth = $(window).width();
  
  // calculate the values for center alignment
var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());  
var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2); 
  
  // assign values to the overlay and dialog box
  $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
  $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
  
  document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+ src +'"/></div></div>';
  //$("#dialog-box").append('<div class="dialog-content"><div id="dialog-message">'+ message +'</div><a href="#" class="button">Close</a></div>');
        

}