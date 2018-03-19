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
    $('.part2 #icon').attr("src","photo/LTC.png");
    $('.bdy #title').text("الحلويات والمشروبات الروحية و التبغ");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>استمتع بمجموعة مختارة من منتجات التبغ والحلويات و المشروبات الروحية التي تم اختيارهها لتناسب ذوقك الرفيع.</p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s2').click(function(){
    $('.part2 #icon').attr("src","photo/muscat--market.png");
    $('.bdy #title').text("متجر مسقط");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>اقتني مختلف منتجات الغذاء السريعة عند مرورك بمتجر مسقط</p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s3').click(function(){
    $('.part2 #icon').attr("src","photo/p-and-c.png");
    $('.bdy #title').text("العطور و مستحضرات التجميل");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>حيث أحدث منتجات العناية بالبشرة والجمال و أجمل العطور العالمية ستغمرك بعبقها</p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/map.jpg');
  });
  $('#s4').click(function(){
    $('.part2 #icon').attr("src","photo/amounge.png");
    $('.bdy #title').text("أمواج");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>أمواج توفر أرقى العطورالمتنوعة التي صنعتها الأيدي العمانية.</p>");
  });
  $('#s5').click(function(){
    $('.part2 #icon').attr("src","photo/fashion-jewelry.png");
    $('.bdy #title').text("المجوهرات العصرية");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>المجوهرات البراقة بكختلف لأشكال والألوان نضعها تحت طلبك في أسواق المجواهرات</p>");
  });
  $('#s6').click(function(){
    $('.part2 #icon').attr("src","photo/kids-kingdom.png");
    $('.bdy #title').text("مملكة الأطفال");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>مملكة الأطفال توفر لأبنائكم مختلف الألعاب والمنتجات الترفيهية التي ستضفي لزيارتهم تجربة ممتعة</p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s7').click(function(){                           
    $('.part2 #icon').attr("src","photo/gourmet-store.png");
    $('.bdy #title').text("متجر الذواقة");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>لا تفوت طعم المكسرات اللذيذة والطازجة وتلذذ بروعة طعم الشوكولاتة النقية المحشوة بنكهات مختلفة.</p>");
  });
  $('#s8').click(function(){
                $('.part2 #icon').attr("src","photo/gourmet-store.png");
                $('.bdy #title').text("متاجر الأجنحة (الشمال والجنوب والغرب)");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').html("<p>تعد متاجر الرصيف بمثابة الفرصة الأخيرة للركاب لشراء منتجات خالية من الرسوم  الجمركية بما في ذلك الخمور والتبغ والعطور والهدايا الأكثر مبيعا ووجبات الحلويات الخفيفة.</p>");
              });
              $('#s9').click(function(){
                $('.part2 #icon').attr("src","photo/arrivals.png");
                $('.bdy #title').text("متجر القادمون");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').html("<p>لم يفت الأوان لإقتناء الهدايا التذكارية والعطور ، متجر القادمون توفر لك فرصة أخرى لإرضاء رغباتك </p>");
              });
              $('#s10').click(function(){
                $('.part2 #icon').attr("src","photo/luxury-fashion-avenue.png");
                $('.bdy #title').text("حي الازياء الراقية");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').html("<p>أحدث صيحات الموضة والأزياء تتوفر في زقاق الأزياء الفاخرة </p>");
                $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
              });
              $('#s11').click(function(){
                $('.part2 #icon').attr("src","photo/high-street-fashion.png");
                $('.bdy #title').text("الازياء العصرية");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').html("<p>تمتع بمجموعة مختلفة من الملابس الأنيقة والرياضية والأحذية والساعات والحقائب</p>");
                $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
              });
              $('#s12').click(function(){
                $('.part2 #icon').attr("src","photo/spectrum.png");
                $('.bdy #title').text("النظارات");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').html("<p>ارتدي ما يناسب ذائقتك من مجموعة النظارات الشمسية الحديثة والكلاسيكية</p>");
              });
              $('#s13').click(function(){
                $('.part2 #icon').attr("src","photo/elctronics.png");
                $('.bdy #title').text("الالكترونيات");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').html("<p>مجموعة من أحدث الالكترونيات الذكية التي تم اختيارها خصيصا لك</p>");
              });
  $('#s14').click(function(){
    $('.part2 #icon').attr("src","photo/blank.png");
    $('.bdy #title').text("سميث");

    $('.bdy #desc').text("هل انت في عجلة على رحلتك؟ اشتري وجبة خفيفة أو كتاب للقراءة في طريقك إلى البوابة الخاصة بك.");
  });
  $('#s15').click(function(){
    $('.part2 #icon').attr("src","photo/blank.png");
    $('.bdy #title').text("سوق عمان");

    $('.bdy #desc').text("عش أجواء الأسواق العمانية التقليدية واقتني الهدايا التذكارية والمنتاجات المختلفة من سوق عمان");
  });
  $('#s16').click(function(){
    $('.part2 #icon').attr("src","photo/blank.png");
    $('.bdy #title').text("بي ريلاكس");

    $('.bdy #desc').text("اعد النشاط والحيوية لنفسك وقم بتجربة خدمات الإسترخاء والتدليك المتوفرة");
  });
  $('#s17').click(function(){
    $('.part2 #icon').attr("src","photo/blank.png");
    $('.bdy #title').text("جاليري أرجان");

    $('.bdy #desc').text("الحلي البراقة التي ستأسرناظريك ستجدينها في متجر جاليري أرجان ");
  });
  $('#s18').click(function(){
    $('.part2 #icon').attr("src","photo/blank.png");
    $('.bdy #title').text("صيدلية مسقط");

    $('.bdy #desc').text("المنتجات الطبية والأدوية الصحية تتوفر لكم في صيدلية مسقط");
  });


              //Change to English
              $('#change-us').click(function(){
               location.href = "index-en.htm";
                writeCookie("lang","english");
                window.external.ChangeLanguage("en-gb");
                /*$('.titl1').text("Oman Airport Shop page");
                $('#txt1').text("Here you can discover all of our retail and shopping options, and where they are located.");
                $('#txt2').text("Select a button on the down left to get started.");

                $('#market').text("Market");
                $('#shop').text("Shops");*/
   
              });

              //Change to Arabic
              $('#change-ar').click(function(){
                
                /*$('.titl1').text("مطار الرياض صفحة العرض");
                $('#txt1').text("هنا يمكنك اكتشاف كل من خيارات الطعام والشراب، حيث أنها تقع، وما هو على القائمة.");
                $('#txt2').text("حدد زر في أسفل اليسار للبدء.");

                $('#market').text("سوق");
                $('#shop').text("محلات");*/

              });



                    $('#btn').hide();
                    //$('#leftmenu ul').hide();        
                    $('#leftmenu h3,h5').click( 
                        function() {
                            var $this = $(this);
                            //$this.next('ul').siblings('ul').slideUp();
                            //$this.next('ul').find('ul').slideUp();
                            //$this.next().slideToggle(300); 
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