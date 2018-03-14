//*******************************************************************************
//   FURO-D Contents Templage JS : 2016.11.14

//   Comment : (1) Contents 정리.
//             (2)
//             (3)  
//*******************************************************************************
var deletePic="Image/Avatar_delete_none.png";
var deletePicNor="Image/Avatar_delete_nor.png";

  $(document).ready(function(){
ShowTime();
	$('#change-us').click(function(){
		writeCookie("lang","english");
		$('#change-us').addClass('active');
        $('#change-ar').removeClass('active');
		$('.title').text("Robot Avatar");
		$('#shot img').attr("src","Image/avatar_shot_nor.png");
		$('.deltext').css({"font-size":"32px", "line-height":"32px"});
		$('.deltext').text("If you want to delete the Avatar now press the 'DELETE' button.")
		$('#change-ar').css({"background":"white", "color":"#4a32a4"});
		$('#change-us').css({"background":"#4a32a4", "color":"white", "padding": "10px 10px", "border-radius": "5px"});
		$('#delete').attr('src','Image/Avatar_delete_none.png');
        deletePic="Image/Avatar_delete_none.png";
        deletePicNor="Image/Avatar_delete_nor.png";
        del();       
	});
	//Change to Arabic
	$('#change-ar').click(function(){
		writeCookie("lang","arabic");
        $('#change-us').removeClass('active');
        $('#change-ar').addClass('active');
		$('.title').text("الصّورة الرّمزية");
		$('.deltext').css({"font-size":"44px", "line-height":"31px"});
		$('.deltext').text("إذا كنت ترغب في حذف الصورة الرمزية الآن اضغط على زر '' ديليت ''")
		$('#change-us').css({"background":"white", "color":"#4a32a4"});
		$('#change-ar').css({"background":"#4a32a4", "color":"white", "padding": "10px 10px", "border-radius": "5px"});
		$('#shot img').attr('src','Image/avatar_shot_nor_ar.png');
		$('#delete').attr('src','Image/Avatar_delete_none_ar.png');
        deletePic="Image/Avatar_delete_none_ar.png";
        deletePicNor="Image/Avatar_delete_nor_ar.png";
        del(); 	            
	});
});
var refreshIntervalId ;
	function JSMain() {
		refreshIntervalId = setInterval("test()", 33);
		//setTimeout("Init()",3000);
	}

	function Init(){	
		FC_ReadSelectedMovie(readCookie('CurrentMovie'));
	}

	function JSUnload() {
		DeleteRobotFace();
		//HideAdMovie();
	}
	
	function FC_ReadSelectedMovie() {
		var tmpIdx = readCookie("CurrentMovie");
		FC_ChangeAdMovieHtml(tmpIdx);
	}

	function FC_ChangeAdMovieHtml(strIdx) {
		var path;
		if (strIdx == "1")
			path = "../../Movies/main1.avi";
		if (strIdx == "2")
			path = "../../Movies/main2.avi";
		if (strIdx == "3")
			path = "../../Movies/main3.avi";
		if (strIdx == "4")
			path = "../../Movies/main4.avi";
		PlayAdMovie(path, 0, 1200, 1080, 720, true);
	}
	
	function Home() {
		location.href = "../../maincontents.htm";
	}

	function test() {
		var img = GetCaptureImage();
		var canvas = document.getElementById("camImage");
		var ctx = canvas.getContext("2d");
		var image = new Image();

		image.onload = function() {
			ctx.drawImage(this,-300,-75, 1080, 720);
		}
		image.src = "data:image/gif;base64," + img;
	}

	function shot() {

		document.getElementById('shot').style.display = "block";
		document.getElementById('number').style.display = "";
		document.getElementById('frame').style.display = "";


		setTimeout('Timer1()', 1000);
		setTimeout('Timer2()', 2000);
		setTimeout('Timer3()', 3000);
	}

	function Timer1() {
		
		document.getElementById('number_img').src =  "Image/2_re.png" ;
		
	}
	

	function Timer2() {

		document.getElementById('number_img').src = "Image/1_re.png";
		
	}

	function Timer3() {
		
		document.getElementById('shot').style.display = "block";
		document.getElementById('number').style.display = "none";
		document.getElementById('frame').style.display = "none";
		document.getElementById('number_img').src = "Image/3_re.png";
		document.getElementById('delete').src = deletePicNor;

		GetCaptureImage();
		GetCaptureImageBase64();
		MakeRobotFace();
		SetRobotFace();
        clearInterval(refreshIntervalId);
	}
	
	function del(){
		document.getElementById('delete').src = deletePic;
		document.getElementById('shot').style.display = "";
		DeleteRobotFace();
		JSMain();
	}


	function OnUserApproached() {

	}

	function OnUserDisappeared() {
		//location.href = "../../IdlePage/IdlePage.htm";
	}