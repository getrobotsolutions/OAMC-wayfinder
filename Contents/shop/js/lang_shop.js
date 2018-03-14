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

function changeShopToAr(){
  $("#shop").text("محلات");
  $('#s1').text("الخمور والتبغ والحلويات");
  $('#s2').text("سوق مسقط");
  $('#s3').text("العطور ومستحضرات التجميل");
  $('#s4').text("بوتيك أمواج");
  $('#s5').text("أحدث صيحات المجوهرات");
  $('#s6').text("مملكة الأطفال");
  $('#s7').text("متجر جورميت للمأكولات");
  $('#s8').text("متاجر الرصيف ");
  $('#s9').text("متجر الوافدين");
  $('#s10').text("شارع الأزياء الفاخرة");
  $('#s11').text("شارع الأزياء الرئيس");
  $('#s12').text("النظارات الشمسية");
  $('#s13').text("الأجهزة الإلكترونية");

  $('#s1').unbind();$('#s2').unbind();$('#s3').unbind();$('#s4').unbind();$('#s5').unbind();$('#s6').unbind();
  $('#s1').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/LTC.png");
    $('.bdy #title').text("الخمور والتبغ والحلويات");
    $('.bdy #desc').html("<p>أنشئ متجر السوق الحرة للخمور والتبغ والحلويات بمسقط على مساحة 955 متر مربع وذلك على الجانب الأيمن حيث دخول الركاب المغادرين من مسقط إلى صالة المغادرة. كما يشتمل هذا المتجر على تجربة التمتع بالعلامة للتجارية الكاملة والآثار المصممة خصيصا لماركات ويسكي سكوتش الأكثر شهرة بما في ذلك جوني ووكر وجون ديوار.</p><p> تحتوي منطقة التبغ على مكان خاص بسيجار هوميدور والذي يحتوي على سيجار ملفوف يدويا من كوبا وهندوراس ونيكاراغوا وجمهورية الدومينيكان. كما تشتمل منطقة السجائر على علامات تجارية عالمية مثل مارلبورو و إل إم</p><p>وعلى الجانب الآخر، سيسعد الركاب بتجربة مليئة بالشوكولاتة النقية مع التمتع بالكثير من العروض من العلامات التجارية المختلفة مثل بتيل والرفاعي.</p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','../contents/shop/photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s2').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/muscat--market.png");
    $('.bdy #title').text("سوق مسقط");
    $('.bdy #desc').html("<p>يقع هذا السوق على الجانب الأيسر حيث يدخل الركاب المغادرون من مسقط إلى صالة المغادرة، ويعد هذا السوق الذي تبلغ مساحته 900 متر مربع وجهة للتسوق يستشعر قيمتها الركاب المتجهون إلى شبه القارة الهندية.</p><p>كما نجد أن تصاميم سوق مسقط جميعها من النخيل الموجود في الطبيعة العمانية، ويمتلئ هذا السوق بالمنتجات والماركات التجارية العالمية مثل كادبوري ونستلة ومارس وكيندر. كما أنه عند دخولك للمتجر سوف تجد لدينا مقاعد شوكولاتة كيت كات المشهورة والتي سوف تمنح المسافرين فرصة مثالية لإلتقاط صورة مع العائلة أو الأصدقاء قبل السفر.</p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','contents/shop/contents/shop/photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s3').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/p-and-c.png");
    $('.bdy #title').text("العطور ومستحضرات التجميل");
    $('.bdy #desc').html("<p>تنقسم منقطة العطور والمستحضرات التجميلية إلى قسمين رئيسين كلويين الشكل مع ممرات للركاب محددة ومميزة على شكل دائري وبمساحة 900 متر مربع. كما ستكون العلامات التجارية الأربع: شانيل و إستي لودر ولانكوم وكريستيان ديور هم المقصد الأساسي والأثر المشهور في كل المداخل.</p><p>كما ستستمع داخل منطقة العطور بالجوهر العماني، حيث ستجد منطقة تمتلئ بإيحاءات شعورية متعددة تبلغ مساحتها حوالي 90 متر مربع تقريبا تجذبك بقوة نحو تأثير اللبان (البخور) العماني على الروائح العربية. وتحتوي هذه المنطقة على العناصر التي تروي قصة تاريخ العطور وامتداد جذورها في عمان والجزيرة العربية، مع المكونات المحلية والعطرية الطبيعية مثل اللبان والمر وأوراق والورد ورقائق العود وأوراق الياسمين (تتغير وتتجدد بشكل يومي) من أجل أن يستنشق الزبائن رائحتها ويستشعروا ملمسها.</p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','contents/shop/contents/shop/photo/maps/map.jpg');
  });
  $('#s4').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/amounge.png");
    $('.bdy #title').text("بوتيك أمواج");
    $('.bdy #desc').html("<p>تُعد العلامة التجارية أمواج علامة العطور التجارية رقم 1 في متجر السوق الحرة بمسقط وقد قمنا بتخصيص مساحة 100 متر مربع لهذا البوتيك في المتجر الرئيس. يحتوي هذا المتجر على عطور رجالي وعطور نسائية وعطور تصلح لكلا الجنسين، كما يحتوي على مجموعة ديلوكس باث وبودي لاينز، بالإضافة إلى مجموعة إكسسوارات إيطالية جلدية حديثة.</p>");
  });
  $('#s5').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/fashion-jewelry.png");
    $('.bdy #title').text("أحدث صيحات المجوهرات");
    $('.bdy #desc').html("<p>مع نظام الخدمة الذاتية المصمم بشكل جيد ومألوف فقد ابتكرنا تجربة مشهودة  للركاب مع العلامات التجارية العالمية: سواروفسكي وباندورا و توس.</p>");
  });
  $('#s6').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/kids-kingdom.png");
    $('.bdy #title').text("مملكة الأطفال");
    $('.bdy #desc').html("<p>يعد هذا المتجر بهجة غير متوقعة وسارة للركاب من مختلف الأعمار، بغض النظر عن نوع رحلتهم. حيث سيسهم المتجر بتوفير لعبة كلاسيكية مفضلة من العلامات التجارية ليغو وماتيل وديزني. وتتمثل السمة الأساسية في هذا المتجر في صنع مجسم للبحار سندباد بحجمنا الطبيعي والذي تصممه ليغو  ويوضع على مركب شراعية عمانية. كما سيشتمل المتجر أيضا على بيئة تفاعلية تقدم للأطفال المتعة في تجربة المتجر أثناء تسوق الوالدين.</p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','contents/shop/contents/shop/photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s7').click(function(){                           
    $('.part2 #icon').attr("src","contents/shop/photo/Ooredoo.jpg");
    $('.bdy #title').text("متجر جورميت للمأكولات");
    $('.bdy #desc').html("<p>يُعد هذا المتجر كنز دفين يقصده الركاب لشراء المنتجات الفاخرة الحلوة والمالحة الصالحة للأكل إما كهدايا أو لأنفسهم. كما أنه يحتوي على أفضل وأطيب الأطعمة العمانية والخليجية.</p>");
  });
  $('#s8').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/gourmet-store.png");
    $('.bdy #title').text("متاجر الرصيف (الشمال والجنوب والغرب)");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>تعد متاجر الرصيف بمثابة الفرصة الأخيرة للركاب لشراء منتجات خالية من الرسوم  الجمركية بما في ذلك الخمور والتبغ والعطور والهدايا الأكثر مبيعا ووجبات الحلويات الخفيفة.</p>");
  });
  $('#s9').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/arrivals.png");
    $('.bdy #title').text("متجر الوافدين");
    $('.bdy #desc').html("<p>يوجد هذا المتجر في قاعة الأمتعة قبل منطقة الجمارك تم انشاؤه على مساحة 655 متر مربع، والذي سيلبي احتياجات جميع الركاب الدوليين الوافدين. حيث تحتوي المنطقة على متجر رفيع المستوى ونقطة اختيار مجمعة تم وضعها لتسهيل الرؤية للمتسوقين المقيمين العائدين. كما يشتمل المتجر أيضا على الماركات العالمية التي شملت جميع الفئات مثل الخمور والتبغ والعطور والحلويات. ويحتوي متجر الوافدين على منطقة لسيجار هوميدور ومنطقة أطعمة معلبة والتي تضم مجموعة من  المأكولات والوجبات المبردة الشهية بما في مجموعة منتجاتا متميزة من أوروبا ومن حول العالم والتي لا يمكن العثور عليها بسهولة في عمان.</p>");
  });
  $('#s10').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/luxury-fashion-avenue.png");
    $('.bdy #title').text("شارع الأزياء الفاخرة");
    $('.bdy #desc').html("<p>يحتوى شارع الأزياء الفاخرة لدينا على مونت بلاك وذلك جنبا إلى جنب مع علامات تجارية متعددة بما في ذلك تومي، بورش ديزاين، تاتوسيان و تاغ هوير، ويقع داخل هذه المنطقة أيضا مجمع الساعات الفاخرة. وهذا سيقودنا إلى متجر رالف لورين يليه هوغو بوس ثم مايكل كورس.</p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','contents/shop/contents/shop/photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s11').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/high-street-fashion.png");
    $('.bdy #title').text("شارع الأزياء الرئيس");
    $('.bdy #desc').html("<p>يحتوى شارع الأزياء الرئيس على متجر متعدد العلامات التجارية يذخر بماركات الأزياء العالمية على سبيل المثال لا الحصر، ماركة لاكوست وسيروتي وهاكيت وفيلبريكين. ويقودنا هذا المتجر فيما بعد إلى متجرنا الرياضي والذي يقدم الطعام لعشاق الهواء الطلق وذلك مع العلامات التجارية ذا نورث فيث وكولمبيا. كما ستجد في الباب المجاور لك متاجر باندورا وفيكتوريا سيكريت. </p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','contents/shop/contents/shop/photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s12').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/spectrum.png");
    $('.bdy #title').text("النظارات الشمسية");
    $('.bdy #desc').html("<p>يلبي متجر سبيكتروم للنظارات الشمسية الاحتياجات العالمية للعلامة التجارية صافي وذلك للمسافر المدرك للموضة والذي يرغب في الانغماس في الترف والرفاهية أو الملحقات الخاصة بالأنماط الحياتية. كما يوفر سبيكتروم مجموعة من الطرازات الفاخرة الحديثة والأكثر شهرة، وذلك مع توفير نظارات متطورة وذات كفاءة عالية.</p>");
  });
  $('#s13').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/elctronics.png");
    $('.bdy #title').text("الأجهزة الإلكترونية");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>يقدم متجرنا مجموعة من أحدث الأجهزة الالكترونية في تجربة تسوق مثيرة وفريدة تم اختيارها خصيصا للمسافرين المميزين. حيث يجمع المتجر بين أفضل العلامات التجارية وأحدث الابتكارات مع بيئة تسوق محددة الاتجاهات مصممة خصيصا للمسافرين. كما ستجد لدينا أحدث الهواتف الذكية والأجهزة المبتكرة من أبل وسامسونج وبوز.</p>");
  });
}
function changeShopToEn(){
  $("#shop").text("Shops");
  $('#s1').text("Electronics");
  $('#s2').text("LTC");
  $('#s3').text("Muscat Market");
  $('#s4').text("Perfume and Cosmetics ");
  $('#s5').text("Amouage Boutique");
  $('#s6').text("Fashion Jewellery");
  $('#s7').text("Kids Kingdom");
  $('#s8').text("Gourmet Store");
  $('#s9').text("Pier Stores");
  $('#s10').text("Arrivals Store");
  $('#s11').text("Luxury Fashion Avenue");
  $('#s12').text("High Street Fashion");
  $('#s13').text("Sunglasses");
  
  $('#s1').unbind();$('#s2').unbind();$('#s3').unbind();$('#s4').unbind();$('#s5').unbind();$('#s6').unbind();

  $('#s1').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/elctronics.png");

    $('.bdy #title').text("Electronics");

    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("Our store offers a range of the latest electronics in an exciting shopping experience that have been selected especially for the discerning traveler. The store combines the best brands, latest innovations and a trendsetting shopping environment all specifically tailored to travelers. Here you will find the latest smartphones and gadgets from Apple, Samsung and Bose.");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','contents/shop/contents/shop/photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s2').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/LTC.png");

    $('.bdy #title').text("LTC (Liquor, Tobacco and Confectionary)");

    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>Muscat Duty Free has positioned the core Duty Free Liquor, Tobacco and Confectionary store in this 955sqm footprint on the right hand side as Muscat originating passengers enter the departures lounge. This store will include a complete brand experience and customized footprints for the most popular Scotch whiskey brands including Johnnie Walker and John Dewar’s. </p><p> The Tobacco area includes a walk in Humidor containing hand-rolled cigars from Cuba, Honduras, Nicaragua and the Dominican Republic. The Cigarette area includes international brands such as Marlboro and L&M. </p><p>Passengers will also be treated to an experience filled with pure chocolate and indulgence from brands such as Bateel and Al Rifai.</p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','contents/shop/contents/shop/photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s3').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/muscat--market.png");
    $('.bdy #title').text("Muscat Market");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>Positioned on the left hand side as Muscat originating passengers enter the departures lounge, this market measuring 900sqm is a shopping destination for value conscious Indian sub-continent bound passengers.</p><p>Drawing its design theme from the palms of the Omani landscape, the Muscat Market is stocked with products and international brands such as Cadburys, Nestle, Mars and Kinder.</p><p>As you enter the store you will find our iconic Kit Kat chocolate bench which will provide our passengers the perfect opportunity for a preflight photo with friends and family.</p>");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','contents/shop/contents/shop/photo/maps/passenger-terminal-building-departure(Level-02).png');
  });
  $('#s4').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/p-and-c.png");
    $('.bdy #title').text("Perfume and Cosmetics ");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>This area is divided into two main kidney shaped footprints with defined passenger walkways and a circular central feature measuring 900sqm.</p><p>Four destination brands, Chanel, Estee Lauder, Lancôme and Christian Dior will be the iconic footprints at each of the entrances.</p><p>Within the perfume area you will find the Essence of Oman, a multi sensorial area of approximately 90sqm drawing strongly from the influences of the Frankincense of Oman to the scents of Arabia. It includes elements that tell the story of the history of fragrance and its roots in Oman and Arabia, with local, natural fragrance ingredients such as Frankincense, Myrrh, Rose petals, Oud chips, and Jasmine petals (refreshed daily) for customers to touch and smell.</p>");
  });
  $('#s5').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/amounge.png");
    $('.bdy #title').text("Amouage Boutique");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').html("<p>The Amouage brand is the number 1 fragrance brand in Muscat Duty Free and we have dedicated a 100sqm to this flagship store concept.</p><p>The store sells Men’s, Women’s and Unisex Fragrances, deluxe bath and body lines, home fragrances and a newly developed Italian leather accessories range.</p>");
  });
  $('#s6').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/fashion-jewelry.png");
    $('.bdy #title').text("Fashion Jewellery");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("With this well designed self-service solution and friendly, expert in store staff we have created a memorable experience for passengers with international brands Swarovski, Pandora and Tous.");
  });
  $('#s7').click(function(){
    $('.part2 #icon').attr("src","contents/shop/photo/kids-kingdom.png");
    $('.bdy #title').text("Kids Kingdom");
    $('.bdy #location').text("Location:");
    $('.bdy #desc').text("This store is an unexpected delight for passengers of all ages, no matter what type of trip they are on. The store will stock classic toy favourites from brands such as Lego, Mattel and Disney. The key feature in this store is our life size Sinbad Sailor made entirely of Lego located on our Omani Dhow. The store will also include an interactive environment offering kids a fun in store experience while their parents shop");
    $("#mapBtn").show();
    $("#mapBtn").attr('dir','contents/shop/contents/shop/photo/maps/passenger-terminal-building-departure(Level-02).png');
              });
              $('#s8').click(function(){
                $('.part2 #icon').attr("src","contents/shop/photo/gourmet-store.png");
                $('.bdy #title').text("Gourmet Store");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("This store is a treasure trove aimed at passengers buying luxury sweet and savory edible products either as gifts or as treats for themselves. It will contain the best of Oman and the Gulf regions foodie delights.");
              });
              $('#s9').click(function(){
                $('.part2 #icon').attr("src","contents/shop/photo/Pure Gold.jpg");
                $('.bdy #title').text("Pier Stores (North, South and West)");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("The pier stores act as a last minute opportunity for passengers to purchase Duty Free products including Liquor, tobacco, fragrances and top selling gifting and snacking packs of confectionary.");
              });
              $('#s10').click(function(){
                $('.part2 #icon').attr("src","contents/shop/photo/arrivals.png");
                $('.bdy #title').text("Arrivals Store");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("Located in the baggage hall before Customs you will find a 665sqm store that will cater to all international arriving passengers. The area contains a high profile Shop & Collect pick point, positioned for ease of sight for returning resident shoppers. The store also stocks international brands across categories such as liquor, tobacco, fragrances and confectionary. Our Arrivals store also includes a walk in Cigar Humidor and a delicatessen area which will include a refrigerated gourmet food section including premium products from Europe and around the world that are not easily found in Oman.");
              });
              $('#s11').click(function(){
                $('.part2 #icon').attr("src","contents/shop/photo/luxury-fashion-avenue.png");
                $('.bdy #title').text("Luxury Fashion Avenue");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("Our luxury fashion avenue concept contains Mont Blanc alongside a multi branded area including Tumi, Porsche Design, Tatossian and Tag Heuer, located within this area is also our luxury watches area. This leads into our Ralph Lauren store followed by Hugo Boss and then Michael Kors.");
                $("#mapBtn").show();
    $("#mapBtn").attr('dir','contents/shop/contents/shop/photo/maps/passenger-terminal-building-departure(Level-02).png');
              });
              $('#s12').click(function(){
                $('.part2 #icon').attr("src","contents/shop/photo/high-street-fashion.png");
                $('.bdy #title').text("High Street Fashion");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').text("Our High Street Fashion area includes a multi brand store stocking international fashion brands such as Lacoste, Cerruti, Hackett and Vilebrequin to name but a few. This store then leads into our sports store catering to the outdoor enthusiast with brands such as North Face and Columbia. Located next door you will find our Victoria’s Secrets and Pandora stores.");
                $("#mapBtn").show();
    $("#mapBtn").attr('dir','contents/shop/contents/shop/photo/maps/passenger-terminal-building-departure(Level-02).png');
              });
               $('#s13').click(function(){
                $('.part2 #icon').attr("src","contents/shop/photo/spectrum.png");
                $('.bdy #title').text("Sunglasses");
                $('.bdy #location').text("Location:");
                $('.bdy #desc').html("Our Spectrum Sunglasses concept store caters to the needs of the international, brand savvy, style conscious traveler who wishes to indulge in an accessible luxury or lifestyle accessory. </br>Spectrum supplies an array of the most iconic and up to date fashionable luxury styles, while also providing cutting edge high performance technology eyewear");
              });
}

              //Change to English
              /*$('#change-us').click(function(){
               location.href = "index-en.htm";
                writeCookie("lang","english");
                window.external.ChangeLanguage("en-gb");
              });

              //Change to Arabic
              $('#change-ar').click(function(){
              });*/



                    $('#btn').hide();
                    //$('#leftmenu ul').hide();        
                    $('#leftmenu h3,h5').click( 
                        function() {
                            var $this = $(this);
                            //$this.next('ul').siblings('ul').slideUp();
                            //$this.next('ul').find('ul').slideUp();
                            //$this.next().slideToggle(300); 
                    });
    
$('#shop-button').click(function(){
      $('#home-wrapper').hide();
      $('#shop-wrapper').show();
      if(readCookie("lang")=="english"){
         
          changeShopToEn();
        }
      else if(readCookie("lang")=="arabic"){
        
        changeShopToAr();

      }
       
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