$(document).ready(function(){
ShowTime();
  $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {   
      $('#dialog-overlay, #dialog-box').hide();   
      return false;
    });
  //$("#btn").hide();
  //$("#mapBtn").hide();

  $("#mapBtn").click(function () {
    ShowPopup($("#mapBtn").attr('dir'));
    //$("$list1").show();

  });


  /*$('#c3').text("قهوة كاريبو.");

  $('#c4').text("كوستا");
  $('#c5').text("دي كيو جريل اند تشيل");
  $('#c6').text("منطقة الغذاء");
  $('#c63').text("آلي / أوتوماتيك");
  $('#c7').text("البيت الإيرلندي/ ذا ايريش هاوس");
  $('#c8').text("موكا والمزيد / موكا & مور");
  $('#c9').text("صدف");

  $('#c10').text("صبواي");*/

                
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

                $('.bdy #desc').text("تهتم بصحتك ما عليك إلا زيارتنا والاستمتاع بالطعام ونحن سنقوم بحساب السعرات الحرارية عنك.");
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
                $('.bdy #title').text("تيكردايز");
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

              



              //Change to English
              $('#change-us').click(function(){
                location.href = "index-us.htm";
                writeCookie("lang","english");
                window.external.ChangeLanguage("en-gb");
               
                
            });

              //Change to Arabic
              $('#change-ar').click(function(){
                
               
                
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