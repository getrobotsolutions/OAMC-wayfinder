$(document).ready(function(){
  ShowTime();
        $("#loading").show();
        $(".fArr").hide();
        //Change to English
       // $('#change-ar').css({"background":"#4a32a4", "color":"white", "padding": "0px 10px", "border-radius": "5px"});
              
              $('#change-us').click(function(){
                 writeCookie("lang","english");
                $('#change-us').toggleClass('active');
                $('#change-ar').toggleClass('active');//css({"background":"white", "color":"#4a32a4"});
                //$('#change-us').css({"background":"#4a32a4", "color":"white", "padding": "0px 10px", "border-radius": "5px"});
                $('#arr').text("Arrivals");
                $('#dep').text("Departures");

                $('#flight').text("Flight");
                $('#origin').text("Origin");
                $('#airline').text("Airline");
                $('#terminal').text("Terminal");
                $('#arrival').text("Arrival");
                $('#status').text("Status");
              });

              //Change to Arabic
              $('#change-ar').click(function(){
                writeCookie("lang","arabic");
                $('#change-us').toggleClass('active');
                $('#change-ar').toggleClass('active');
                $('#arr').text("القادمون");
                $('#dep').text("المغادرون");

                $('#flight').text("طيران");
                $('#origin').text("الأصل");
                $('#airline').text("شركة طيران");
                $('#terminal').text("طرفية");
                $('#arrival').text("وصول");
                $('#status').text("دقيقة");

              });

        var today = new Date();
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var mon = monthNames [today.getMonth()].substring(0,3);
        var fday = today.getDate();
        /*var lday = fday+1;*/
        var fhrs, fhr, lhrs;
        var fhrs = today.getHours() ;
        console.log(fhrs);
        
        if((fhrs>4) && (fhrs<23)){
          fhr  = fhrs - 4;
          console.log(fhr);
          lhrs = fhr + 1;
        }
        else{
          fhr = fhrs + 20;
          lhrs = fhr +1;
        }

        var from_date = fday+'-'+mon+'-'+today.getFullYear()+'-'+fhr;
        var to_date = fday+'-'+mon+'-'+today.getFullYear()+'-'+lhrs;



        var appId = "7j985537jyreeeswq65432fvRGp09fXqBB";
        var url = "https://apps.omanairports.com/weps_PublicApp/OAMCPublic.svc/GetFlightsOpen/"+appId+"/"+from_date+"/"+to_date+"/MCT";
        console.log(url);


        var time = 1200;
        setTimeout(function(){
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

                   mdata= mdata.sort(function(a,b){
                    //sorting based on arrival time
                    var a1 = a.Nature, b1=b.Nature;
                    if(a1==b1) return 0;
                    return a1>b1?1:-1;
                   });

                   console.log(mdata);
                    for(i=0;i<mdata.length;i++)
                    {
                      var nature = mdata[i].Nature;
                      if(mdata[i].Nature == 'ARRIVAL'){
                        
                        var airline = mdata[i].AirlineIATA;
                        var flight = mdata[i].FlightNo;
                        var terminal = mdata[i].Gate;
                        if(terminal === ''){ terminal = 'N/A'; }
                        else {  terminal  = mdata[i].Gate; }

                        var flight_status = mdata[i].Status;
                        var est_arrival = mdata[i].EstimatedArrival;
                        var act_arrival = mdata[i].ActualArrival;
                        var origin = mdata[i].OriginName;
                        var arrival;

                        if(act_arrival){ arrival = act_arrival; }
                        else { arrival = est_arrival; }
                        
                        var delay_arr, delay, dir;
                        delay_arr = est_arrival - act_arrival;
                        if(delay_arr>0)
                          { 
                            delay = delay_arr;
                          }
                        else{delay=0}
        
                        //Date and Time conversion
                       /* console.log(arrival);
                        var arrTime = arrival.substring(11,16);
                        var H = +arrTime.substr(0, 2);
                        arrTime = H + arrTime.substr(2,3);*/
                        var arrTime = arrival.split("T").pop();
                        arrTime = arrTime.slice(0, -3);

                        if(delay>0){status= "DELAYED ("+ delay +")";}
                        else if(delay==0){status="ON TIME";}
                        else{status="ON TIME";}
                    
                        $('.row'+i).html(airline+" "+ flight);
                        $('.origin'+i).html(origin);
                        $('.airline'+i).html(airline);
                        
                        $('.flight'+i).html(terminal);
                        $('.arrival'+i).html(arrTime);
                        $('.status'+i).html(flight_status);
                        
                        if(airline){
                          dir = '../../images/airlines/'+airline+'.jpg';


                          $('#img'+i).attr('src',dir).height(100).width(100);
                        }else{
                          $('img').filter(function(index){return $(this).attr('src')==='';}).hide();
                        }
                    

                  } 

                }

                 $('#table1 tr').each(function() {
                     if ($(this).find('td:empty').length) $(this).remove();
                  });
              },
            
            });
         },time);
      });