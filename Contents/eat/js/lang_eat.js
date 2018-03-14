$(document).ready(function(){
ShowTime();
  $('a.btn-ok, #dialog-overlay-map, #dialog-box-map').click(function () {   
      $('#dialog-overlay-map, #dialog-box-map').hide();   
      return false;
    });
  //$("#btn").hide();
  //$("#mapBtn").hide();

  $("#mapBtn").click(function () {
    ShowPopupMap($("#mapBtn").attr('dir'));
    //$("$list1").show();

  });

  //Change to English
  /*$('#change-us').click(function(){
      location.href = "index-us.htm";
      writeCookie("lang","english");
      window.external.ChangeLanguage("en-gb");   
  });*/
 lan="ar-eg";
  //Change to Arabic
  $('#change-ar').click(function(){
      lan="ar-eg";
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
                

     
function changeEatToAr(){
  $('#c3').unbind();$('#c4').unbind();$('#c5').unbind();$('#c6').unbind();$('#c61').unbind();$('#c62').unbind();
  $('#c3').click(function(){
    $('.part2 #icon').attr("src","photo/KFC_logo.png");
    $('.bdy #title').text("دجاج كنتاكي");
    $('.bdy #location').text("Location:");

    $('.bdy #desc').text("اشهى قطع الدجاج المقلية لمن لا يملك الوقت الكافي للحاق بالطائرة.");
    //$("#btn").show();
    //$("#btn").attr('dir','photo/Caribou-Coffee-Prices.png');

    $("#mapBtn").attr('dir','photo/maps/aribou-Coffee.jpg');
    $("#mapBtn").hide();
  });
  $('#c4').click(function(){
    $('.part2 #icon').attr("src","photo/Mcdonalds.png");
    $('.bdy #title').text("ماكدونالدز");
                $('.bdy #location').text("Location:");

                $('.bdy #desc').text("لمحبي البرجر والماكولات السريعة، استمتع بمذاق ماكدونالدز الشهي مع حركة  الطائرات");
                //$("#btn").show();
                //$("#btn").attr('dir','photo/costa-drinks.png');

                $("#mapBtn").hide();
                
              });
              $('#c5').click(function(){
                $('.part2 #icon').attr("src","photo/spice-kitchen.png");
                $('.bdy #title').text("سبايس كيتشن");
                $('.bdy #location').text("Location:");

                $('.bdy #desc').text("لمحبي الماكولات الهندية والحارة، ندعوكم للاستمتاع بالطعام في ردهة المطاعم.");
                //$("#btn").show();
                //$("#btn").attr('dir','photo/dq-menu-prices.png');

                $("#mapBtn").hide();
              });
              $('#c6').click(function(){
                $('.part2 #icon').attr("src","photo/plenty.png");
                $('.bdy #title').text("بلنتي");
                $('.bdy #location').text("Location:");

                $('.bdy #desc').text("تهتم بصحتك؟ ما عليك الا زيارتنا والاستمتاع بالطعام ونحن سنقوم بحساب السعرات الحرارية عنك.");
                $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
                $("#mapBtn").show();
                $('.list2').toggle();
              });
              $('#c61').click(function(){
                $('.part2 #icon').attr("src","photo/noor.png");
                $('.bdy #title').text("نور");
                $('.bdy #location').text("Location:");

                $('.bdy #desc').text("وجبات عربية مع اجمل الوجبات والديكور حيث العيون ستستلذ بالطعام قبل معدتك .");
                $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
      $("#mapBtn").show();

              });
              $('#c62').click(function(){
                $('.part2 #icon').attr("src","photo/Tickerdaze.png");
                $('.bdy #title').text("تيكرداذ");
                $('.bdy #location').text("Location:");

                $('.bdy #desc').text("شاهد المباريات مباشرة وانت تستمتع بالماكولات  والمشروبات الشهية قبل صعودك للطائرة");
                $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
                $("#mapBtn").show();

              });
              $('#c63').click(function(){
                $('.part2 #icon').attr("src","photo/luna.png");
                $('.bdy #title').text("لونا");
                $('.bdy #location').text("Location:");

                $('.bdy #desc').text("مطعم يقدم لك تاباس مع المشروبات في منطقة هادئة ومنظر خلاب لشواطئ مسقط العامرة.");
                $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
                $("#mapBtn").show();

              });
              $('#c7').click(function(){
                $('.part2 #icon').attr("src","photo/mazoon.png");
                $('.bdy #title').text("مازون ");
                $('.bdy #location').text("Location:");

                $('.bdy #desc').text("قهوة عالمية وعالية الجودة لاجلك");
                $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
                $("#mapBtn").show();
                
              });
              $('#c8').click(function(){
                $('.part2 #icon').attr("src","photo/caffe-nero.png");
                $('.bdy #title').text("كافيه نيرو");
                $('.bdy #location').text("Location:");

                $('.bdy #desc').text("هل تريد تجربة افضل قهوة؟ قم بزيارة كافيه نيرو وستستمتع بمختلف انواع القهوة.");
                $("#mapBtn").attr('dir','photo/maps/south-pier-departure(level-02).png');
                $("#mapBtn").show();

              });
              $('#c9').click(function(){
                $('.part2 #icon').attr("src","photo/Caribou-Coffee.png");
                $('.bdy #title').text("قهوة كاريبو");
                $('.bdy #location').text("Location:");

                $('.bdy #desc').text("محبي الكافيين؟ اشحن طاقتاتك بقهوة كاريبو");
                

                $("#mapBtn").attr('dir','photo/maps/north-pier-departure(level-02).png');
                $("#mapBtn").show()
              });
              $('#c10').click(function(){
                $('.part2 #icon').attr("src","photo/kahwaji-cafe.png");
                $('.bdy #title').text("قهوة القهوجي");
                $('.bdy #location').text("Location:");

                $('.bdy #desc').text("كافيه عماني تقليدي مع القهوة العمانية المشهورة وفرصة لتذوق عمان قبل مغادرة مسقط");
                
              
              });
              $('#c11').click(function(){
                $('.part2 #icon').attr("src","photo/traveler-club.png");
                $('.bdy #title').text("نادي المسافرين");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("كافيه مع كراسي مريحة وفرصة للتمتع بالخفائف");
               
              
              });
              $('#c12').click(function(){
                $('.part2 #icon').attr("src","photo/cakes-&-bakes.png");
                $('.bdy #title').text("كيكس اند بيكس");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("كافيه وموقع لافضل المعجنات بمطار مسقط الدولي.");
                $("#mapBtn").attr('dir','photo/maps/west-pier-departure(level-02).png');
                $("#mapBtn").show();
                
              
              });
              $('#c13').click(function(){
                $('.part2 #icon').attr("src","photo/seaside-park.png");
                $('.bdy #title').text("سي سايد بارك");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("جنة الاطفال للترفيه عنهم ولتغذيهم بافضل الاطعمة الصحية لهم.");
                $("#mapBtn").attr('dir','photo/maps/north-pier-departure(level-02).png');
                $("#mapBtn").show()
                
              
              });
              $('#c14').click(function(){
                $('.part2 #icon').attr("src","photo/hall.png");
                $('.bdy #title').text("Prime Class Lounge");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("استرخي، تناول وغيره، استمتع بافضل صالة كبار الشخصيات وانت في مكان واحد.");
               
              
              });
              $('#c15').click(function(){
                $('.part2 #icon').attr("src","photo/hall.png");
                $('.bdy #title').text("Aerotel Muscat Hotel");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("هل لديك وقت طويل حتى موعد رحلتلك القادمة وتريد النوم بدون اي ازعاج؟ ما عليك الا ان تقوم بزيارة فندق ايروتل مسقط للراحة او السباحة في حوض داخل الفندق.");              
              });

}
function changeEatToEn(){
  $('#c3').unbind();$('#c4').unbind();$('#c5').unbind();$('#c6').unbind();$('#c61').unbind();$('#c62').unbind();
  $('#c3').click(function(){
    $('.part2 #icon').attr("src","photo/KFC_logo.png");
    $('.bdy #title').text("KFC");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("well known fried chicken concept for the best taste and if you are in hurry.");
    

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
    $('.bdy #desc').text("casual dinning with sports and bubbly beverages. Enjoy matches before boarding you fligth.");
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
    $("#mapBtn").show();
  });
  $('#c63').click(function(){
    $('.part2 #icon').attr("src","photo/luna.png");
    $('.bdy #title').text("Luna");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("ala cart Tapas Restaurant with Fine Beverages and quite zones with beautiful view of Muscat Beaches.");
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
    $('.bdy #desc').text("want to try the best coffee? Visit Café Nero and you will not regret it");
    
    $("#mapBtn").attr('dir','photo/maps/south-pier-departure(level-02).png');
    $("#mapBtn").show();
  });
  $('#c9').click(function(){
    $('.part2 #icon').attr("src","photo/Caribou-Coffee.png");
    $('.bdy #title').text("Caribou Coffee");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("ACaffeine Junkie? Boost your energy with Caribou Coffee");
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
    $('.bdy #desc').text("kids heaven and amazing play ground and snacks.");
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
    $('.bdy #desc').text("have long layover or want to sleep without any disturbance? Then visit Aerotel Muscat and you will enjoy the best rooms or swim in an In-Door swimming pool.");

  });
}

$('#content_eat').click(function(){
      $('#home-wrapper').hide();
      $('#eat-wrapper').show();
      if(lan=="en-gb"){
          alert(lan);
          changeEatToEn();
        }
      else if(lan=="ar-eg"){
        alert(lan);
        changeEatToAr();

      }
       
    });

function ShowPopupMap(src){

// get the screen height and width  
  var maskHeight = $(document).height();  
  var maskWidth = $(window).width();
  
  // calculate the values for center alignment
  var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());  
  var dialogLeft = (maskWidth/2) - ($('#dialog-box-map').width()/2); 
  
  // assign values to the overlay and dialog box
  $('#dialog-overlay-map').css({height:maskHeight, width:maskWidth}).show();
  $('#dialog-box-map').css({top:dialogTop, left:dialogLeft}).show();
  
  document.getElementById('dialog-box-map').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content-map"><div id="dialog-message-map"><img width="800" src="'+ src +'"/></div></div>';
  //$("#dialog-box").append('<div class="dialog-content"><div id="dialog-message">'+ message +'</div><a href="#" class="button">Close</a></div>');
        

}
});