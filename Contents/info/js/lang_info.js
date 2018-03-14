$(document).ready(function() {
  ShowTime();
          $('#factFig').click(function(){
            ShowPopup('factFig.png');
          });
          $('#list1').hide(); 

          //Change to English
              $('#change-us').click(function(){
                writeCookie("lang","english");
                $('#change-us').addClass('active');
                $('#change-ar').removeClass('active');
                $('.titl1').text("Oman Airport Information page");
                $('#txt1').text("Here you can discover all of the important services, and where they are located.");
                $('#txt2').text("Select a button on the down left to get started.");

                $('#cafe').text("Cafe");
                $('#restau').text("Restaurants");
                $('#arloung').text("Airport Lounges");
                $('#inside').text("Inside Airport");
                $('#outside').text("Outside Airport");

                $('#c3').text("Starbucks 1");
                $('#c4').text("Battler");
                $('#c5').text("Mamma Roti Cafe");
                $('#c6').text("Caribou Coffee");
                $('#c7').text("Wayne's Coffee");
                $('#c8').text("Dunkin' Donuts");
                $('#c9').text("Java Coffee");
                $('#c10').text("Starbucks 2");

               
                $('#r18').text("Outback");

                $('#10').text("Alfursan Lounges");
                $('#11').text("Lounge 1");
                $('#12').text("Lounge 2");
                $('#btn').text("View Menu");
                
            });

              //Change to Arabic
              $('#change-ar').click(function(){
                writeCookie("lang","arabic");
                $('#change-us').removeClass('active');
                $('#change-ar').addClass('active');
                $('.titl1').text("صفحة معلومات مطار الرياض");
                $('#txt1').text("هنا يمكنك اكتشاف جميع الخدمات الهامة، وحيث أنها تقع.");
                $('#txt2').text("حدد زر في أسفل اليسار للبدء.");

                $('#cafe').text("كافيه");
                $('#restau').text("مطاعم");
                $('#arloung').text("صالات المطار");
                $('#inside').text("داخل المطار");
                $('#outside').text("خارج المطار");

                $('#c3').text("ستاربكس 1");
                $('#c4').text("المقاتل");
                $('#c5').text("ماما روتي كافيه");
                $('#c6').text("كاريبو، بني اللون");
                $('#c7').text("قهوة واين");
                $('#c8').text("دنكن \"للكعك المقلي");
                $('#c9').text("قهوة جافا");
                $('#c10').text("ستاربكس 2");

                $('#r11').text("برغر كينغ");
                $('#r12').text("مطعم دجاج");
                $('#r13').text("بينك بيري");
                $('#r14').text("بيتزا دومينوز");
                $('#r15').text("مطعم غلوب");
                $('#r16').text("بيتو");
                $('#r17').text("قرية نجد");
                $('#r18').text("المناطق النائية");

                $('#10').text("صالات الفرسان");
                $('#11').text("صالة 1");
                $('#12').text("صالة 2");
                $('#btn').text("عرض القائمة");

                
              });

                    $(".hr-ver-menu ul").siblings().before("<span class='hr_tog'></span>");
                    var subM = $(".hr-ver-menu ul");
                    $(".hr_tog ~ a").click(function(){
                      //Disable URL from Toggle Click 
                      $(this).attr('href','#');
                      //Formatting active tabs
                      $(this).siblings().toggleClass("pl-active");
                      $(this).toggleClass("hr-active");
                      //Close Other tabs
                      var mp = $(this).next("ul").parents(".hr-ver-menu").find('ul').slideUp();
                      //Open current tabs only
                      $(this).next("ul").slideToggle();
                    })
        

          function display(data)
          { 
              console.log(data);
                function createCallback(num){

                      return function(){  
                         //alert('you clicked' + num);
                        $("#bdyt"+num).html(data.Book1[num].DETAIL_BASE);
                        //$("#add"+num).text("Location : "+data.Book1[num].ADDRESS_BASE);
                        //$("#ph"+num).text("Phone : "+data.Book1[num].PHONE_BASE);
                  }
                }
                 


                //Info
                $('#btn1').click(function(){
                     $("#hotel,#lounges,#nursery,#atm,#cr,#payphones,#wr").hide(); $("#info").show();
                     $('.v-menu-title').text("info");
                     //var url = "photo/submenu/buyuk/about.jpg";
                     var url = data.Book1[0].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 45%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 0; i <= 0; i++) {
                        $('#info'+i).text(data.Book1[i].NAME_BASE);
                        $('#info' + i).click( createCallback( i ) );
                      }
                 });

                //Hotels
                $('#btn2').click(function(){
                     $("#info,#lounges,#nursery,#atm,#cr,#payphones,#wr").hide(); $("#hotel").show();
                     $('.v-menu-title').text("Hotels");
                     // var url = "photo/submenu/buyuk/information.jpg";
                     var url = data.Book1[1].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 48%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 1; i <= 1; i++) {
                        $('#hotel'+i).text(data.Book1[i].NAME_BASE);
                        $('#hotel' + i).click( createCallback( i ) );
                      }
                 });

                //Airport Lounges
                $('#btn3').click(function(){
                     $("#info,#hotel,#nursery,#atm,#cr,#payphones,#wr").hide(); $("#lounges").show();
                     $('.v-menu-title').text("Lounges");
                     var url = data.Book1[2].IMG_SRC;
                     //var url = "photo/submenu/buyuk/ticket.jpg";
                     
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 34%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 2; i <= 4; i++) {
                        $('#lounges'+i).text(data.Book1[i].NAME_BASE);
                        $('#lounges' + i).click( createCallback( i ) );
                      }
                 });

                //Nursery
                $('#btn4').click(function(){
                     $("#info,#hotel,#lounges,#atm,#cr,#payphones,#wr").hide(); $("#nursery").show();
                     $('.v-menu-title').text("Nursery");
                     var url = data.Book1[5].IMG_SRC;
                     // var url = "photo/submenu/buyuk/baggage.jpg";
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 30%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 5; i <= 5; i++) {
                        $('#nursery'+i).text(data.Book1[i].NAME_BASE);
                        $('#nursery' + i).click( createCallback( i ) );
                      }
                 });

                //Atms
                $('#btn5').click(function(){
                     $("#info,#hotel,#lounges,#nursery,#cr,#payphones,#wr").hide(); $("#atm").show();
                     $('.v-menu-title').text("Atms");
                     var url = data.Book1[6].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 30%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 6; i <= 6; i++) {
                        $('#atm'+i).text(data.Book1[i].NAME_BASE);
                        $('#atm' + i).click( createCallback( i ) );
                      }
                 });

                //Currecny Exchange
                $('#btn6').click(function(){
                     $("#info,#hotel,#lounges,#nursery,#atm,#payphones,#wr").hide(); $("#cr").show();
                     $('.v-menu-title').text("Currency Exchange");
                     var url = data.Book1[7].IMG_SRC;
                     //var url = "photo/submenu/buyuk/taxi.jpg";
                    $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 30%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 7; i <= 8; i++) {
                        $('#cr'+i).text(data.Book1[i].NAME_BASE);
                        $('#cr' + i).click( createCallback( i ) );
                      }
                 });
                //Payphones
                $('#btn7').click(function(){

                     $("#info,#hotel,#lounges,#nursery,#atm,#cr,#wr").hide(); $("#payphones").show();
                     $('.v-menu-title').text("Payphones");
                     var url = data.Book1[9].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"99% 42%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 9; i <= 9; i++) {
                        
                        $('#payphones'+i).html(data.Book1[i].NAME_BASE);
                       
                        $('#payphones'+ i).click( createCallback( i ) );
                      }
                 });

                //Luggage Wrapping
                $('#btn8').click(function(){

                     $("#info,#hotel,#lounges,#nursery,#atm,#cr,#payphones").hide(); $("#wr").show();
                     $('.v-menu-title').text("Luggage Wrapping");
                     var url = data.Book1[10].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"99% 42%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 10; i <= 10; i++) {
                        
                        $('#wr'+i).html(data.Book1[i].NAME_BASE);
                       // var html1 = data.Book1[i].NAME_BASE; 
                        //$('#r'+i).html(html1);
                        $('#wr'+ i).click( createCallback( i ) );
                      }
                 });

                

                

                

                

                

                

                
                      
          }
          function display_ar(data)
          { 
              console.log(data);
                function createCallback(num){

                      return function(){  
                        // alert('you clicked' + num);
                        $("#bdyt"+num).html(data.Book1[num].DETAIL_LOCAL);
                        //$("#add"+num).text("Location : "+data.Book1[num].ADDRESS_LOCAL);
                        //$("#ph"+num).text("Phone : "+data.Book1[num].PHONE_LOCAL);
                  }
                }
                //Rent a car
                $('#btn1').click(function(){
                     $("#tsale,#ainfo,#bag,#smoke,#taxi,#aryd,#htl").hide(); $("#rcar").show();
                     $('.v-menu-title').text("وسائل النقل");
                     var url = data.Book1[7].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"99% 42%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 7; i <= 10; i++) {
                        
                        $('#r'+i).html(data.Book1[i].NAME_LOCAL);
                       // var html1 = data.Book1[i].NAME_BASE; 
                        //$('#r'+i).html(html1);
                        $('#r'+ i).click( createCallback( i ) );
                      }
                 });

                //Prayer Room
                $('#btn2').click(function(){
                     $("#rcar,#ainfo,#bag,#smoke,#taxi,#aryd,#htl").hide(); $("#tsale").show();
                     $('.v-menu-title').text("غرفة الصلاة");
                     var url = data.Book1[0].IMG_SRC;
                     //var url = "photo/submenu/buyuk/ticket.jpg";
                     
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 34%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 0; i <= 6; i++) {
                        $('#t'+i).text(data.Book1[i].NAME_LOCAL);
                        $('#t' + i).click( createCallback( i ) );
                      }
                 });

                //Airport Lounges
                $('#btn3').click(function(){
                     $("#tsale,#rcar,#bag,#smoke,#taxi,#aryd,#htl").hide(); $("#ainfo").show();
                     $('.v-menu-title').text("صالات المطار");
                     // var url = "photo/submenu/buyuk/information.jpg";
                     var url = data.Book1[11].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 48%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 11; i <= 13; i++) {
                        $('#a'+i).text(data.Book1[i].NAME_LOCAL);
                        $('#a' + i).click( createCallback( i ) );
                      }
                 });

                //Ticket Sale
                /*$('#btn2').click(function(){
                     $("#rcar,#ainfo,#bag,#smoke,#taxi,#aryd,#htl").hide(); $("#tsale").show();
                     $('.v-menu-title').text("بيع التذاكر");
                     var url = data.Book1[0].IMG_SRC;
                     //var url = "photo/submenu/buyuk/ticket.jpg";
                     
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 34%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 0; i <= 6; i++) {
                        $('#t'+i).text(data.Book1[i].NAME_LOCAL);
                        $('#t' + i).click( createCallback( i ) );
                      }
                 });

                //Rent a car
                $('#btn1').click(function(){
                     $("#tsale,#ainfo,#bag,#smoke,#taxi,#aryd,#htl").hide(); $("#rcar").show();
                     $('.v-menu-title').text("استئجار سيارة");
                     var url = data.Book1[7].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"99% 42%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 7; i <= 13; i++) {
                        $('#r'+i).html(data.Book1[i].NAME_LOCAL);
                        $('#r'+ i).click( createCallback( i ) );
                      }
                 });

                //Airport Info
                $('#btn3').click(function(){
                     $("#tsale,#rcar,#bag,#smoke,#taxi,#aryd,#htl").hide(); $("#ainfo").show();
                     $('.v-menu-title').text("معلومات المطار");
                     // var url = "photo/submenu/buyuk/information.jpg";
                     var url = data.Book1[19].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 48%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 18; i <= 24; i++) {
                        $('#a'+i).text(data.Book1[i].NAME_LOCAL);
                        $('#a' + i).click( createCallback( i ) );
                      }
                 });

                //Baggage
                $('#btn4').click(function(){
                     $("#tsale,#rcar,#ainfo,#smoke,#taxi,#aryd,#htl").hide(); $("#bag").show();
                     $('.v-menu-title').text("أمتعة");
                     var url = data.Book1[20].IMG_SRC;
                     // var url = "photo/submenu/buyuk/baggage.jpg";
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 30%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 20; i <= 20; i++) {
                        $('#b'+i).text(data.Book1[i].NAME_LOCAL);
                        $('#b' + i).click( createCallback( i ) );
                      }
                 });

                //Smoking Area
                $('#btn5').click(function(){
                     $("#tsale,#rcar,#ainfo,#bag,#taxi,#aryd,#htl").hide(); $("#smoke").show();
                     $('.v-menu-title').text("منطقة مخصصة للتدخين");
                     var url = data.Book1[21].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 70%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 21; i <= 24; i++) {
                        $('#s'+i).text(data.Book1[i].NAME_LOCAL);
                        $('#s' + i).click( createCallback( i ) );
                      }
                 });

                //Taxi
                $('#btn6').click(function(){
                     $("#tsale,#rcar,#ainfo,#bag,#smoke,#aryd,#htl").hide(); $("#taxi").show();
                     $('.v-menu-title').text("سيارة اجره");
                     var url = data.Book1[25].IMG_SRC;
                     //var url = "photo/submenu/buyuk/taxi.jpg";
                    $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 30%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 25; i <= 25; i++) {
                        $('#t'+i).text(data.Book1[i].NAME_LOCAL);
                        $('#t' + i).click( createCallback( i ) );
                      }
                 });

                //About Riyadh
                $('#btn7').click(function(){
                     $("#tsale,#rcar,#ainfo,#bag,#smoke,#taxi,#htl").hide(); $("#aryd").show();
                     $('.v-menu-title').text("عن الرياض");
                     //var url = "photo/submenu/buyuk/about.jpg";
                     var url = data.Book1[27].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 45%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 26; i <= 27; i++) {
                        $('#ar'+i).text(data.Book1[i].NAME_LOCAL);
                        $('#ar' + i).click( createCallback( i ) );
                      }
                 });

                 //Hotels
                $('#btn8').click(function(){
                     $("#tsale,#rcar,#ainfo,#bag,#smoke,#taxi,#aryd").hide(); $("#htl").show();
                     $('.v-menu-title').text("الفنادق");
                     var url = data.Book1[28].IMG_SRC;
                     $('#content').css({"background-image": "url("+url+")",
                                  "background-size":"100% 43%"});
                     $('#icon').hide();  $('#list1').show();  
                      for(var i = 28; i <= 33; i++) {
                        $('#h'+i).text(data.Book1[i].NAME_LOCAL);
                        $('#h' + i).click( createCallback( i ) );
                      }
                 });*/
                      
          }


            $.ajax({
              type: "GET",


              //url: "https://api.myjson.com/bins/yxdsx",
url:"https://api.myjson.com/bins/7052h",
crossDomain: true,

dataType: "JSON",
              success: function(data) {
                display(data);
                $('#change-us').click(function(event){
                    display(data);
                  });
                
                $('#change-ar').click(function(event){
                 display_ar(data);
                });
             } 

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
  
  document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="650" src="'+ src +'"/></div></div>';
  //$("#dialog-box").append('<div class="dialog-content"><div id="dialog-message">'+ message +'</div><a href="#" class="button">Close</a></div>');
        
$('#dialog-box a').click(function(){
$('#dialog-overlay').hide();
$('#dialog-box').hide();
});
}

     });
/* */
