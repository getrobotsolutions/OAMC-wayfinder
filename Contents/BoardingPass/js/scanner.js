  function Setting() {
          location.href = "../../Config/Config.htm";
      }
 
     function CheckVal(bar_code){
                       /* var bar_code = $("#bar_code").val();*/
                       var bar_code = bar_code; 
                       /*console.log(bar_code);*/
                        $(".wrapper1").show();
                        $(".inst-img").hide();
                   
                        var len = bar_code.length;
                        var parts = bar_code.split("/");
                        lname = parts[0].substr(2);

                        var parts_p = parts[1].split(" ");
                        console.log(parts_p);

                        var parts_p1 = parts_p.filter(function(v){return v!==''});
/*                        parts_p = jQuery.grep(parts_p, function(n){ return (n); });
console.log(parts_p);
*/                         
                        fname = parts_p[0]+" "+parts_p[1];
                        /*console.log(fname);*/
                        flight = parts_p[4];

                        flight1 = parts_p[5];


                        air_data = parts_p[3];
                        source = air_data.substr(0,3);
                        /*dest = air_data.substr(3,3);
                        arline = air_data.substr(6);
                        date_seat = parts_p[5];
                        seat = date_seat.substr(5,3);*/

                        /*Muscat pattern*/
                        dest = parts_p[4].substr(0,3);
                        arline = parts_p[4].substr(6);
                        

                        
/*                        checkin="---";
                        gate="---";
*/
                        /*console.log(flight1);*/

                        var searchItem = '707';  /*For testing */
                       /* var searchItem = flight1;*/
                        var mdata = getGate(searchItem);
                        



                        /*var details = mdata.filter(function (i){
                          if(i.FlightNo === searchItem) return i
                        });*/



                        /*checkin = details[0].TimeToDisplay;
                        gate = details[0].Gate;*/


                        $('<p>'+fname+" "+lname+'</p>').appendTo('.name');
                        $('<p>'+arline+" "+flight1+'</p>').appendTo('.airline');
                        $('<p>'+dest+'</p>').appendTo('.dest'); 
                        $('<p>'+source+'</p>').appendTo('.src');
                       /* $('<p>'+seat+'</p>').appendTo('.seat');*/
                        
     }
      
    
     function getGate(flight){
      /*console.log(flight); */
      var searchItem = flight;
                        var today = new Date();
                        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        var mon = monthNames [today.getMonth()].substring(0,3);
                        var fday = today.getDate();
                        /*var lday = fday+1;*/
                        var fhrs, fhr, lhrs;
                        var fhrs1 = today.getHours();
                        

                        fhrs = fhrs1 - 5;
                        /*Setting the flights window range of 10 hrs- 5 back 5 forward*/
                        if(fhrs1<5){
                          fhrs = fhrs + 24;
                        }

                        /*console.log(fhrs);*/
                        /*For time zone Muscat*/
                        if((fhrs>4) && (fhrs<23)){
                          fhr  = fhrs - 4;
                          lhrs = fhr + 10;

                        }
                        else{
                          fhr = fhrs + 20;
                          lhrs = fhr +10;
                        }
                        

                        if(lhrs>24){
                          fday1=fday+1;
                          lhrs = lhrs-24;
                        }else{fday1 = fday;}

                        /*console.log(today);
                        console.log(fhr);console.log(lhrs);*/
                        var from_date = fday+'-'+mon+'-'+today.getFullYear()+'-'+fhr;
                        var to_date = fday1+'-'+mon+'-'+today.getFullYear()+'-'+lhrs;



                        var appId = "7j985537jyreeeswq65432fvRGp09fXqBB";
                        var url = "https://apps.omanairports.com/weps_PublicApp/OAMCPublic.svc/GetFlightsOpen/"+appId+"/"+from_date+"/"+to_date+"/MCT";
                        console.log(url);


                       
                            $.ajax({
                              type: "GET",
                              async: false,
                              url: url,
                              dataType: "json",
                              crossDomain: true,
                                success: function(response) {
                                  $("#loading").hide();
                                  $(".fArr").show();

                                    var airport = "Oman Airport(OM)";
                                    var data = JSON.stringify(response);
                                    sdata = JSON.parse(data);
                                    mdata = sdata['Data'];
                                 console.log(mdata);
 
                                    /*Filter based on flightNO*/
                                    var details1 = mdata.filter(function (i){
                                      if(i.FlightNo === searchItem) return i
                                    });

                                    /*Re-filter only Departing flights*/
                                    var details = details1.filter(function(i){
                                      if(i.Nature === 'DEPARTURE') return i
                                    });

                                    est_dep = details[0].EstimatedDeparture;
                                    console.log(details);

                                    var depTime = est_dep.split("T").pop();
                                   /* console.log(depTime);*/
                                    depTime1 = depTime.slice(0, -3);
                                    

                                    var H = +depTime1.substr(0, 2);
                                    var h = H % 12 || 12;
                                    
                                    /*for check IN*/
                                    var h1 = h;
                                    var ch_h = h1 -2;
                                    if(ch_h == 0){ch_h = 12;}
                                    if(ch_h == -1){ch_h = 11;}
                                    
                                    

                                    var ampm = (H < 12 || H === 24) ? " AM" : " PM";
                                    depTime = h + depTime.substr(2, 3) + ampm;



                                    checkin = ch_h + depTime1.substr(2, 3) + ampm; 
                                    gate = (details[0].Gate) ? (details[0].Gate) : "N/A";
                                    
                                    /*console.log(checkin);console.log(gate);*/

                                    $('<p>'+depTime+'</p>').appendTo('.txt-dep');
                                    $('<p>'+checkin+'</p>').appendTo('.txt-checkin');
                                    $('<p>'+gate+'</p>').appendTo('.gate');
            

                                   
                      /*Searching the especific FlightNo. and getting the GATE and checkin time*/
                    
                      },
            });
      
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
                  /*console.log(data);*/
                  }
            });

               
            });                
  
            $( function() {
                  $('.submit').click(function(e) {
                      e.preventDefault();
                      var bar_code = $("#bar_code").val(); 
                      console.log(bar_code);
                      /*var bar_code = 'M1DELAROSA/MONDALEMR   AFYENQ MCTDXBOV 0103 327Y004F00';*/
                  //    console.log(bar_code);
                      
                    if(bar_code.length>0){
                        
                        CheckVal(bar_code);

                      }   

                      else{
                      /* alert("Please put the Barcode scanner on the right position and try again.        يرجى وضع الماسح الضوئي الباركود على المكان الصحيح وحاول مرة أخرى.");*/
                        location.reload();
                      }                     
              });
                 
                    setTimeout(function() {
                      $('#submit').trigger('click');
                      }, 20000);
                 
        });