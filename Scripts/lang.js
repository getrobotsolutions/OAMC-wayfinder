
$(document).ready(function(){
   ShowTime();

     $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {   
      $('#dialog-overlay, #dialog-box').hide();   
      return false;
    });
    var welcomeMessage= "";
    var lan="ar-eg";
    var volume=0.4;
                
                $('#content_term').text("محطة A");
                //$('#content_air').text("");
                $('#content_fly').text("اضغط هنا للبدء");

                $('#content_eat').html("مطاعم");

                $('#content_shop').text("تسوق");
                $('#content_info').html("المعلومات");
                $('#content_map').html("خريطة المبنى");
                $('#content_flights').html("معلومات الرحلات");
                $('#content_scan').html("مرر تذكرة صعود الطائرة");
                $('#content_avatar').html("الصّورة الرّمزية");
                $('#content_selfie').text("التقاط صورة");
                $('#content_fly').hide();
              if(readCookie("lang")=="arabic"){
                writeCookie("lang","arabic");


              
                /*var welcomeMessage="مرحبا. مرحبا بكم في مطارنا. للبدء، يرجى الضغط على أحد الأزرار أدناه.";
                var lan="ar-eg";
                volume=0.4;*/
                var welcomeMessage=" ";

                $('#content_fly').hide();

                $('#change-us').removeClass('active');
                $('#change-ar').addClass('active');

              
                $('#content_fly').text("اضغط هنا للبدء");


                $('#content_eat').html("مطاعم");

                $('#content_shop').text("تسوق");
                $('#content_info').html("المعلومات");
                $('#content_map').html("خريطة المبنى");
                $('#content_flights').html("معلومات الرحلات");
                $('#content_scan').html("مرر تذكرة صعود الطائرة");
                $('#content_avatar').html("الصّورة الرّمزية");
                $('#content_selfie').text("التقاط صورة");
                //$('#content_dance').html("صورتك في <br>الوجه الآلي");
              }
              else if(readCookie("lang")=="english"){
                writeCookie("lang","english");

                welcomeMessage="Hi. Welcome to our airport. To begin, please press one of the buttons below.";
                lan="en-gb"; 
                volume=1;
                //$('#change-us').toggleClass('active');
                //$('#change-ar').toggleClass('active');
                
                $('#change-us').addClass('active');
                $('#change-ar').removeClass('active');

                //$('#content_term').text("Terminal A");
                //$('#content_air').text("Riyadh Airport");
                 $('#content_fly').show();
                $('#content_fly').html("PRESS HERE TO <b>START</b>");
                $('#content_eat').text("EAT");
                $('#content_shop').text("SHOP");
                $('#content_map').html("TERMINAL MAP");
                $('#content_info').text("INFORMATION");

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
                volume=1;
                
                $('#change-us').addClass('active');
                $('#change-ar').removeClass('active');

                //$('#content_term').text("Terminal A");
                 $('#content_fly').show();
                $('#content_fly').html("PRESS HERE TO <b>START</b>");
                $('#content_eat').text("EAT");
                $('#content_shop').text("SHOP");

                $('#content_info').text("INFORMATION");
                $('#content_map').html("TERMINAL MAP");

                $('#content_flights').html("FLIGHTS");
                $('#content_scan').html("SCAN YOUR<br> BOARDING PASS");
                $('#content_avatar').text("CHANGE AVATAR");
                $('#content_selfie').text("TAKE SELFIE");
                //$('#content_dance').text("Dance");
              
              });

              //Change to Arabic
              $('#change-ar').click(function(){
                var welcomeMessage=" ";
                /*welcomeMessage="مرحبا. مرحبا بكم في مطارنا. للبدء، يرجى الضغط على أحد الأزرار أدناه.";
                lan="ar-eg";
                volume=0.4;*/
                writeCookie("lang","arabic");
                $('#change-us').removeClass('active');
                $('#change-ar').addClass('active');

                 $('#content_fly').hide();

                $('.fly').text("رحلات طيران");
                $('.scan').text("مسح الصعود تمريرة الخاص بك");
                $('.map').text("خريطة المحطة الطرفية");
                $('.lang').text("Change Language");

                //$('#content_term').text("محطة A");
                //$('#content_air').text("");
                $('#content_fly').text("اضغط هنا للبدء");

                $('#content_eat').html("مطاعم");

                $('#content_shop').text("تسوق");
                $('#content_info').html("المعلومات");
                $('#content_map').html("خريطة المبنى");
                $('#content_flights').html("معلومات الرحلات");
                $('#content_scan').html("مرر تذكرة صعود الطائرة");
                $('#content_avatar').html("الصّورة الرّمزية");
                $('#content_selfie').text("التقاط صورة");
               
              });
              $('#content_fly').click(function(){
                    ChangeLanguage("lan");
                    window.external.ChangeLanguage(lan);
                    window.external.SetVolume(volume);
                    PlaySpeech(welcomeMessage);
              });
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
      ShowPopup2('images/infographic.png');
      if(readCookie("lang")=="english"){
        window.external.ChangeLanguage("en-gb");
        window.external.SetVolume(1);
        PlaySpeech("Here is some information about the new Muscat International Airport.");
    }
   

  });
     $("#t-popup").click(function () {
      if(readCookie("lang")=="english"){
      window.external.ChangeLanguage("en-gb");
      window.external.SetVolume(1);
      PlaySpeech("Find your way around our airport.");
     
      
    }
    /*else if (readCookie("lang")=="arabic") {
      
      window.external.ChangeLanguage("ar-eg");
      window.external.SetVolume(0.4);
      PlaySpeech("اعرف طريقك في مطارنا.");
      
    }*/
    ShowPopup();
  });

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
  
  document.getElementById('dialog-box').innerHTML = '<a href="#" class="button popup-close">Close</a><div class="dialog-content"><div id="dialog-message"><h1>Wait to the 20th of March.</h1></div></div>';
  //$("#dialog-box").append('<div class="dialog-content"><div id="dialog-message">'+ message +'</div><a href="#" class="button">Close</a></div>');
        

}

function ShowPopup2(src){

// get the screen height and width  
  var maskHeight = $(document).height();  
  var maskWidth = $(window).width();
  
  // calculate the values for center alignment
var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());  
var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2); 
  
  // assign values to the overlay and dialog box
  $('#dialog-overlay-info').css({height:maskHeight, width:maskWidth}).show();
  $('#dialog-box-info').css({top:dialogTop, left:dialogLeft}).show();
  
  document.getElementById('dialog-box-info').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content-info"><div id="dialog-message-info"><img width="650" src="'+ src +'"/></div></div>';
  //$("#dialog-box").append('<div class="dialog-content"><div id="dialog-message">'+ message +'</div><a href="#" class="button">Close</a></div>');
        
$('#dialog-box-info a').click(function(){
$('#dialog-overlay-info').hide();
$('#dialog-box-info').hide();
});
}

