
$(document).ready(function(){


  ShowTime();
  $("#GoHome").click(function(){
    $('#home-wrapper').show();
    $('#eat-wrapper').hide();
    $('#shop-wrapper').hide();
    $('#flights-wrapper').hide();
    $('#boarding-wrapper').hide();
  });
$("#scan-button").click(function(){
  $('#home-wrapper').hide();
  $('#boarding-wrapper').show();

});
$("#buton-pp").click(function(){
  $('#home-wrapper').hide();
  $('#take-photo-wrapper').show();

});




  var welcomeMessage="مرحبا. مرحبا بكم في مطارنا. للبدء، يرجى الضغط على أحد الأزرار أدناه.";
  var lan="ar-eg";
                
                $('#content_term').text("محطة A");
                //$('#content_air').text("");
                $('#content_fly').text("اضغط هنا للبدء");
                $('#content_eat').html("تناول");
                $('#content_shop').text("محل");
                $('#content_info').html("المعلومات");
                $('#content_map').html("خريطة المبنى");
                $('#content_flights').html("معلومات الرّحلة");
                $('#content_scan').html(" امسح بطاقة الصعود للطائرة ");
                $('#content_avatar').html("الصّورة الرّمزية");
                $('#content_selfie').text("التقاط صورة");
              if(readCookie("lang")=="arabic"){
                writeCookie("lang","arabic");
              
                var welcomeMessage="مرحبا. مرحبا بكم في مطارنا. للبدء، يرجى الضغط على أحد الأزرار أدناه.";
                var lan="ar-eg";

                $('#change-us').removeClass('active');
                $('#change-ar').addClass('active');

              
                $('#content_fly').text("اضغط هنا للبدء");

                $('#content_eat').html("تناول");
                $('#content_shop').text("محل");
                $('#content_info').html("المعلومات");
                $('#content_map').html("خريطة المبنى");
                $('#content_flights').html("معلومات الرّحلة");
                $('#content_scan').html(" امسح بطاقة الصعود للطائرة ");
                $('#content_avatar').html("الصّورة الرّمزية");
                $('#content_selfie').text("التقاط صورة");
                //$('#content_dance').html("صورتك في <br>الوجه الآلي");
              }
              else if(readCookie("lang")=="english"){
                writeCookie("lang","english");

                welcomeMessage="Hi. Welcome to our airport. To begin, please press one of the buttons below.";
                lan="en-gb"; 
                //$('#change-us').toggleClass('active');
                //$('#change-ar').toggleClass('active');
                
                $('#change-us').addClass('active');
                $('#change-ar').removeClass('active');

                //$('#content_term').text("Terminal A");
                //$('#content_air').text("Riyadh Airport");
                $('#content_fly').html("PRESS HERE TO <b>START</b>");
                $('#content_eat').text("EAT");
                $('#content_shop').text("SHOP");
                $('#content_map').html("TERMINAL MAP");
                $('#content_info').text("SEARCH & INFO");

                $('#content_flights').html("FLIGHTS");
                $('#content_scan').html("SCAN YOUR<br> BOARDING PASS");
                $('#content_avatar').text("CHANGE AVATAR");
                $('#content_selfie').text("TAKE SELFIE");                
                
              }
                      
              //Change to English
              $('#change-us').click(function(){

                // PlaySpeech("hello"); #337ab7
                writeCookie("lang","english");
                welcomeMessage="Hi. Welcome to our airport. To begin, please press one of the buttons below.";
                lan="en-gb"; 
                
                $('#change-us').addClass('active');
                $('#change-ar').removeClass('active');

                //$('#content_term').text("Terminal A");
                
                $('#content_fly').html("PRESS HERE TO <b>START</b>");
                $('#content_eat').text("EAT");
                $('#content_shop').text("SHOP");

                $('#content_info').text("SEARCH & INFO");
                $('#content_map').html("TERMINAL MAP");

                $('#content_flights').html("FLIGHTS");
                $('#content_scan').html("SCAN YOUR<br> BOARDING PASS");
                $('#content_avatar').text("CHANGE AVATAR");
                $('#content_selfie').text("TAKE SELFIE");
                //$('#content_dance').text("Dance");
              
              });

              //Change to Arabic
              $('#change-ar').click(function(){
                welcomeMessage="مرحبا. مرحبا بكم في مطارنا. للبدء، يرجى الضغط على أحد الأزرار أدناه.";
                lan="ar-eg";
                writeCookie("lang","arabic");
                $('#change-us').removeClass('active');
                $('#change-ar').addClass('active');

                $('.fly').text("رحلات طيران");
                $('.scan').text("مسح الصعود تمريرة الخاص بك");
                $('.map').text("خريطة المحطة الطرفية");
                $('.lang').text("Change Language");

                //$('#content_term').text("محطة A");
                //$('#content_air').text("");
                $('#content_fly').text("اضغط هنا للبدء");
                $('#content_eat').html("تناول");
                $('#content_shop').text("محل");
                $('#content_info').html("المعلومات");
                $('#content_map').html("خريطة المبنى");
                $('#content_flights').html("معلومات الرّحلة");
                $('#content_scan').html("امسح بطاقة الصعود للطائرة");
                $('#content_avatar').html("الصّورة الرّمزية");
                $('#content_selfie').text("التقاط صورة");
               
              });
              /*$('#content_fly').click(function(){
                    ChangeLanguage("lan");
                    window.external.ChangeLanguage(lan);
                    PlaySpeech(welcomeMessage);
              });*/
    var city = "Muscat";
    var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'";
    var queryURL = "https://query.yahooapis.com/v1/public/yql?q="+ searchtext + "&format=json";

    $.getJSON(queryURL, function (data) {
  
        var results = data.query.results
        var firstResult = results.channel.item.condition
        console.log(firstResult);
  
        var location = 'Unknown' // not returned in response
        var temp = firstResult.temp
        var text = firstResult.text
  
        $('#temp').append('The temperature is <strong>' + temp + '</strong><sup>°C</sup> Forecast calls for '+text);
  
    })
    $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {   
      $('#dialog-overlay, #dialog-box').hide();   
      return false;
    });
    $("#info-popup").click(function () {
      ShowPopup();
    });
    $("#t-map").click(function () {
      ShowPopup();
    });

    


function ShowPopup(){

// get the screen height and width  
  var maskHeight = $(document).height();  
  var maskWidth = $(window).width();
  
  // calculate the values for center alignment
  var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());  
  var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2); 
  
  // assign values to the overlay and dialog box
  $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
  $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
  
  document.getElementById('dialog-box').innerHTML = '<a href="#" class="button popup-close">Close</a><div class="dialog-content"><div id="dialog-message"><h1>Connection to server not found.</h1></div></div>';
  //$("#dialog-box").append('<div class="dialog-content"><div id="dialog-message">'+ message +'</div><a href="#" class="button">Close</a></div>');
        

}

});