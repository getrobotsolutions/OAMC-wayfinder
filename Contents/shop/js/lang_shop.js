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
    $('.part2 #icon').attr("src","photo/LTC.png");
    $('.bdy #title').text("الخمور والتبغ والحلويات");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>أنشئ متجر السوق الحرة للخمور والتبغ والحلويات بمسقط على مساحة 955 متر مربع وذلك على الجانب الأيمن حيث دخول الركاب المغادرين من مسقط إلى صالة المغادرة. كما يشتمل هذا المتجر على تجربة التمتع بالعلامة للتجارية الكاملة والآثار المصممة خصيصا لماركات ويسكي سكوتش الأكثر شهرة بما في ذلك جوني ووكر وجون ديوار.</p><p> تحتوي منطقة التبغ على مكان خاص بسيجار هوميدور والذي يحتوي على سيجار ملفوف يدويا من كوبا وهندوراس ونيكاراغوا وجمهورية الدومينيكان. كما تشتمل منطقة السجائر على علامات تجارية عالمية مثل مارلبورو و إل إم</p><p>وعلى الجانب الآخر، سيسعد الركاب بتجربة مليئة بالشوكولاتة النقية مع التمتع بالكثير من العروض من العلامات التجارية المختلفة مثل بتيل والرفاعي.</p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s2').click(function(){
    $('.part2 #icon').attr("src","photo/muscat--market.png");
    $('.bdy #title').text("سوق مسقط");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>يقع هذا السوق على الجانب الأيسر حيث يدخل الركاب المغادرون من مسقط إلى صالة المغادرة، ويعد هذا السوق الذي تبلغ مساحته 900 متر مربع وجهة للتسوق يستشعر قيمتها الركاب المتجهون إلى شبه القارة الهندية.</p><p>كما نجد أن تصاميم سوق مسقط جميعها من النخيل الموجود في الطبيعة العمانية، ويمتلئ هذا السوق بالمنتجات والماركات التجارية العالمية مثل كادبوري ونستلة ومارس وكيندر. كما أنه عند دخولك للمتجر سوف تجد لدينا مقاعد شوكولاتة كيت كات المشهورة والتي سوف تمنح المسافرين فرصة مثالية لإلتقاط صورة مع العائلة أو الأصدقاء قبل السفر.</p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s3').click(function(){
    $('.part2 #icon').attr("src","photo/p-and-c.png");
    $('.bdy #title').text("العطور ومستحضرات التجميل");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>تنقسم منقطة العطور والمستحضرات التجميلية إلى قسمين رئيسين كلويين الشكل مع ممرات للركاب محددة ومميزة على شكل دائري وبمساحة 900 متر مربع. كما ستكون العلامات التجارية الأربع: شانيل و إستي لودر ولانكوم وكريستيان ديور هم المقصد الأساسي والأثر المشهور في كل المداخل.</p><p>كما ستستمع داخل منطقة العطور بالجوهر العماني، حيث ستجد منطقة تمتلئ بإيحاءات شعورية متعددة تبلغ مساحتها حوالي 90 متر مربع تقريبا تجذبك بقوة نحو تأثير اللبان (البخور) العماني على الروائح العربية. وتحتوي هذه المنطقة على العناصر التي تروي قصة تاريخ العطور وامتداد جذورها في عمان والجزيرة العربية، مع المكونات المحلية والعطرية الطبيعية مثل اللبان والمر وأوراق والورد ورقائق العود وأوراق الياسمين (تتغير وتتجدد بشكل يومي) من أجل أن يستنشق الزبائن رائحتها ويستشعروا ملمسها.</p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/map.jpg');
  });
  $('#s4').click(function(){
    $('.part2 #icon').attr("src","photo/amounge.png");
    $('.bdy #title').text("بوتيك أمواج");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>تُعد العلامة التجارية أمواج علامة العطور التجارية رقم 1 في متجر السوق الحرة بمسقط وقد قمنا بتخصيص مساحة 100 متر مربع لهذا البوتيك في المتجر الرئيس. يحتوي هذا المتجر على عطور رجالي وعطور نسائية وعطور تصلح لكلا الجنسين، كما يحتوي على مجموعة ديلوكس باث وبودي لاينز، بالإضافة إلى مجموعة إكسسوارات إيطالية جلدية حديثة.</p>");
  });
  $('#s5').click(function(){
    $('.part2 #icon').attr("src","photo/fashion-jewelry.png");
    $('.bdy #title').text("أحدث صيحات المجوهرات");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>مع نظام الخدمة الذاتية المصمم بشكل جيد ومألوف فقد ابتكرنا تجربة مشهودة  للركاب مع العلامات التجارية العالمية: سواروفسكي وباندورا و توس.</p>");
  });
  $('#s6').click(function(){
    $('.part2 #icon').attr("src","photo/kids-kingdom.png");
    $('.bdy #title').text("مملكة الأطفال");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>يعد هذا المتجر بهجة غير متوقعة وسارة للركاب من مختلف الأعمار، بغض النظر عن نوع رحلتهم. حيث سيسهم المتجر بتوفير لعبة كلاسيكية مفضلة من العلامات التجارية ليغو وماتيل وديزني. وتتمثل السمة الأساسية في هذا المتجر في صنع مجسم للبحار سندباد بحجمنا الطبيعي والذي تصممه ليغو  ويوضع على مركب شراعية عمانية. كما سيشتمل المتجر أيضا على بيئة تفاعلية تقدم للأطفال المتعة في تجربة المتجر أثناء تسوق الوالدين.</p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s7').click(function(){                           
    $('.part2 #icon').attr("src","photo/Ooredoo.jpg");
    $('.bdy #title').text("متجر جورميت للمأكولات");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>يُعد هذا المتجر كنز دفين يقصده الركاب لشراء المنتجات الفاخرة الحلوة والمالحة الصالحة للأكل إما كهدايا أو لأنفسهم. كما أنه يحتوي على أفضل وأطيب الأطعمة العمانية والخليجية.</p>");
  });
  $('#s8').click(function(){
                $('.part2 #icon').attr("src","photo/gourmet-store.png");
                $('.bdy #title').text("متاجر الرصيف (الشمال والجنوب والغرب)");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').html("<p>تعد متاجر الرصيف بمثابة الفرصة الأخيرة للركاب لشراء منتجات خالية من الرسوم  الجمركية بما في ذلك الخمور والتبغ والعطور والهدايا الأكثر مبيعا ووجبات الحلويات الخفيفة.</p>");
              });
              $('#s9').click(function(){
                $('.part2 #icon').attr("src","photo/arrivals.png");
                $('.bdy #title').text("متجر الوافدين");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').html("<p>يوجد هذا المتجر في قاعة الأمتعة قبل منطقة الجمارك تم انشاؤه على مساحة 655 متر مربع، والذي سيلبي احتياجات جميع الركاب الدوليين الوافدين. حيث تحتوي المنطقة على متجر رفيع المستوى ونقطة اختيار مجمعة تم وضعها لتسهيل الرؤية للمتسوقين المقيمين العائدين. كما يشتمل المتجر أيضا على الماركات العالمية التي شملت جميع الفئات مثل الخمور والتبغ والعطور والحلويات. ويحتوي متجر الوافدين على منطقة لسيجار هوميدور ومنطقة أطعمة معلبة والتي تضم مجموعة من  المأكولات والوجبات المبردة الشهية بما في مجموعة منتجاتا متميزة من أوروبا ومن حول العالم والتي لا يمكن العثور عليها بسهولة في عمان.</p>");
              });
              $('#s10').click(function(){
                $('.part2 #icon').attr("src","photo/luxury-fashion-avenue.png");
                $('.bdy #title').text("شارع الأزياء الفاخرة");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').html("<p>يحتوى شارع الأزياء الفاخرة لدينا على مونت بلاك وذلك جنبا إلى جنب مع علامات تجارية متعددة بما في ذلك تومي، بورش ديزاين، تاتوسيان و تاغ هوير، ويقع داخل هذه المنطقة أيضا مجمع الساعات الفاخرة. وهذا سيقودنا إلى متجر رالف لورين يليه هوغو بوس ثم مايكل كورس.</p>");
                $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
              });
              $('#s11').click(function(){
                $('.part2 #icon').attr("src","photo/high-street-fashion.png");
                $('.bdy #title').text("شارع الأزياء الرئيس");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').html("<p>يحتوى شارع الأزياء الرئيس على متجر متعدد العلامات التجارية يذخر بماركات الأزياء العالمية على سبيل المثال لا الحصر، ماركة لاكوست وسيروتي وهاكيت وفيلبريكين. ويقودنا هذا المتجر فيما بعد إلى متجرنا الرياضي والذي يقدم الطعام لعشاق الهواء الطلق وذلك مع العلامات التجارية ذا نورث فيث وكولمبيا. كما ستجد في الباب المجاور لك متاجر باندورا وفيكتوريا سيكريت. </p>");
                $("#mapBtn").show();
    $("#mapBtn").attr('dir','photo/maps/passenger-terminal-building-departure(Level-02).png');
              });
              $('#s12').click(function(){
                $('.part2 #icon').attr("src","photo/spectrum.png");
                $('.bdy #title').text("النظارات الشمسية");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').html("<p>يلبي متجر سبيكتروم للنظارات الشمسية الاحتياجات العالمية للعلامة التجارية صافي وذلك للمسافر المدرك للموضة والذي يرغب في الانغماس في الترف والرفاهية أو الملحقات الخاصة بالأنماط الحياتية. كما يوفر سبيكتروم مجموعة من الطرازات الفاخرة الحديثة والأكثر شهرة، وذلك مع توفير نظارات متطورة وذات كفاءة عالية.</p>");
              });
              $('#s13').click(function(){
                $('.part2 #icon').attr("src","photo/elctronics.png");
                $('.bdy #title').text("الأجهزة الإلكترونية");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').html("<p>يقدم متجرنا مجموعة من أحدث الأجهزة الالكترونية في تجربة تسوق مثيرة وفريدة تم اختيارها خصيصا للمسافرين المميزين. حيث يجمع المتجر بين أفضل العلامات التجارية وأحدث الابتكارات مع بيئة تسوق محددة الاتجاهات مصممة خصيصا للمسافرين. كما ستجد لدينا أحدث الهواتف الذكية والأجهزة المبتكرة من أبل وسامسونج وبوز.</p>");
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