  function Setting() {
          location.href = "../../Config/Config.htm";
      }
 
     function CheckVal(){
                        var bar_code = $("#bar_code").val(); 
                        $(".wrapper1").show();
                        $(".inst-img").hide();
                   
                        var len = bar_code.length;
                        var parts = bar_code.split("/");
                        lname = parts[0].substr(2);

                        var parts_p = parts[1].split(" ");
                        fname = parts_p[0]+" "+parts_p[1];
                        flight = parts_p[4];

                        air_data = parts_p[3];
                        source = air_data.substr(0,3);
                        dest = air_data.substr(3,3);
                        arline = air_data.substr(6);

                        

                        date_seat = parts_p[5];
                        seat = date_seat.substr(5,3);
                        checkin="---";
                        gate="---";


                        $('<p>'+fname+" "+lname+'</p>').appendTo('.name');
                        $('<p>'+arline+" "+flight+'</p>').appendTo('.airline');
                        $('<p>'+dest+'</p>').appendTo('.dest'); 
                        $('<p>'+source+'</p>').appendTo('.src');
                        $('<p>'+seat+'</p>').appendTo('.seat');
                        $('<p>'+checkin+'</p>').appendTo('.txt-checkin');
                        $('<p>'+gate+'</p>').appendTo('.gate');
     }
      
    
     


//TO DO - to get the date and time and gate
        $(document).ready(function() {
             $(".wrapper1").hide();
             $("#bar_code").focus();

              var dNow = new Date();
              var month = dNow.getMonth()+1;
              var day = dNow.getDate();
              var year = dNow.getFullYear();
              var hour = dNow.getHours();
              var min = dNow.getMinutes();
                


            $.ajax({
                type: "GET",
                url:url,
                dataType: "JSONP",
                success: function(data) {
                  console.log(data);
                  }
            });

               
            });                
  
            $( function() {
                  $('.submit').click(function(e) {
                      e.preventDefault();
                      var bar_code = $("#bar_code").val(); 
                  //    console.log(bar_code);
                      
                    if(bar_code.length>0){
                        
                        CheckVal();

                      }   

                      else{
                        alert("Please put the Barcode scanner on the right position and try again.        يرجى وضع الماسح الضوئي الباركود على المكان الصحيح وحاول مرة أخرى.");
                        location.reload();
                      }                     
              });
                 
                    setTimeout(function() {
                      $('#submit').trigger('click');
                      }, 5000);
                 
        });