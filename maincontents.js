//*******************************************************************************
//FURO-D Contents Templage JS : 2016.02.02

//Comment : (1) Contents 정리.
//(2)
//(3)  
//*******************************************************************************
//window.external.ChangeLanguage("english");
 
ChangeLanguage("en-gb");
SetVolume(0.9);
//------------------------------------------------------------------------------
//Service Contents Call : Main Screen에서 선택한 Service Contents를 호출함.
//------------------------------------------------------------------------------
function FC_ContentsCall(strContentsName, strLanguage)
{
	//window.external.PlayBehavior("Yes01");
	//[퓨처로봇 소개 서비스]---
		
	if(strContentsName == "eat")   
	{		
		//location.href = "Contents/eat/index.htm";
		document.getElementById('home-wrapper').style.display = "none";
		document.getElementById('iframe-one').style.display = "";
		document.getElementsByName('iframe-one')[0].src = "Contents/eat/index.htm";
		
		//document.getElementById('iframe-one').contentWindow.location.reload(true);
	}
	if(strContentsName == "shop")
	{
		//location.href = "Contents/shop/index.htm";
		document.getElementById('home-wrapper').style.display = "none";
		document.getElementById('iframe-one').style.display = "";
		document.getElementsByName('iframe-one')[0].src = "Contents/shop/index.htm";
	}
	if(strContentsName == "info")
	{
		//location.href = "Contents/info/index.htm";
	}
	if(strContentsName == "TerminalMap")
	{
		//location.href = "Contents/TerminalMap/index.htm";
		document.getElementById('home-wrapper').style.display = "none";
		//document.getElementById('iframe-one').style.display = "";
		//document.getElementsByName('iframe-one')[0].src = "TerminalMap/index.htm";
        document.getElementById('iframe-wayfinding').style.width = "1080px";
        document.getElementById('iframe-wayfinding').style.height = "1050px";
        document.getElementById('iframe-wayfinding').contentWindow.changemaplang();
	}
	if(strContentsName == "selfie")
	{
		//location.href = "Contents/sefie/index.htm";
	}
	if(strContentsName == "share")
	{
		//location.href = "Contents/share/index.htm";
	}

	if(strContentsName == "Flights")
	{
		//location.href = "Contents/Flights/flights_dep.htm";
		document.getElementById('home-wrapper').style.display = "none";
		document.getElementById('iframe-one').style.display = "";
		document.getElementsByName('iframe-one')[0].src = "Contents/Flights/flights_dep.htm";
	}
	if(strContentsName == "BoardingPass")
	{
		//location.href = "Contents/BoardingPass/index.htm";
		document.getElementById('home-wrapper').style.display = "none";
		document.getElementById('iframe-one').style.display = "";
		document.getElementsByName('iframe-one')[0].src = "Contents/BoardingPass/index.htm";
	}
	if(strContentsName == "sub_flights"){
		//location.href = "../Flights/index.htm"
	}
	if(strContentsName == "sub_boardingpass"){
		//location.href = "../BoardingPass/index.htm"
	}
	if(strContentsName == "sub_terminalmap"){
		//location.href = "../TerminalMap/index.htm"
	}
	if(strContentsName == "RobotAvatar")   
	{		
		//location.href = "Contents/RobotAvatar/index.htm";
		document.getElementById('home-wrapper').style.display = "none";
		document.getElementById('iframe-one').style.display = "";
		document.getElementsByName('iframe-one')[0].src = "Contents/RobotAvatar/index.htm";
	}
	//[포토 프린트 서비스]---
	if(strContentsName == "PhotoPrinting")   
	{

		//location.href = "Contents/PhotoPrinting/index.html";
		document.getElementById('home-wrapper').style.display = "none";
		document.getElementById('iframe-one').style.display = "";
		document.getElementById('footer').style.display = "none";
		document.getElementsByName('iframe-one')[0].src = "Contents/PhotoPrinting/index.html";
		document.getElementById('bmg').style.height="1618px";
	}
	//[음성인식 서비스]---
	if(strContentsName == "RobotDance")   
	{
		
		//location.href = "Contents/RobotDance/RobotDance.htm";
	}
}
function GoHome()
{
	//if(flagPictureAvatar == "true")	DeleteRobotFace();	//사진 아바타 삭제
	//location.href = "../../maincontents.htm";
	document.getElementById('home-wrapper').style.display = "";
	document.getElementById('iframe-one').src = "Contents/index.htm";
	document.getElementById('iframe-one').style.display = "none";
	document.getElementById('footer').style.display = "";
	document.getElementById('bmg').style.height="1124px";
    document.getElementById('iframe-wayfinding').style.width = "0";
    document.getElementById('iframe-wayfinding').style.height = "0";

}

//------------------------------------------------------------
//Language Change. : Kr, En, Cn, Jp 
//------------------------------------------------------------
function FC_ChangeLanguage(strLanguage)
{
	ChangeLanguage("english");
	writeCookie("CurrentLanguage", "english", 30);
}


//------------------------------------------------------------------------------
//AdMoive Index 기억 : 서비스 이동 후, Paly 되고 있었던 Movie를 Play 하기 위함.
//------------------------------------------------------------------------------
function FC_ChangeAdMovie(strIdx)
{
	writeCookie("CurrentMovie", strIdx, 30);
}


//------------------------------------------------------------------------------
//AdMoive Index 기억 : 서비스 이동 후, Paly 되고 있었던 Movie를 Play 하기 위함.(Index로 관리함)
//------------------------------------------------------------------------------
function FC_ReadSelectedMovie()
{
	var tmpIdx = readCookie("CurrentMovie");	
	video(tmpIdx);
	FC_ChangeAdMovieHtml(tmpIdx);
}


//------------------------------------------------------------------------------
//Selected Language 기억 : 서비스 이동 후, 복귀 시, 선택된 Language를 선택하기 위함.
//( Kr, En, Cn, Jp )
//------------------------------------------------------------------------------
function FC_ReadSelectedLanguage()
{
	return readCookie("CurrentLanguage");
}

//------------------------------------------------------------------------------
//FC_LoadConfigView : 관리자 설정 페이지로 이동함.
//------------------------------------------------------------------------------
function FC_LoadConfigView()
{
	location.href = "Config/Config.htm";
}

function OnUserApproached()
{	
	if(readCookie("lang")=="english"){
      window.external.ChangeLanguage("en-gb");
      window.external.SetVolume(1);
      PlaySpeech("Hi, I’m Morriya, how can I help you?");
      
    }
    else if (readCookie("lang")=="arabic") {
      window.external.ChangeLanguage("ar-eg");
      window.external.SetVolume(0.4);
      PlaySpeech("مَرْحَبَاً ، أَنَا مُرِيَةْ. كَيْفَ يُمْكِنُنِيْ أنْ أُسَاعِدَكْ؟ً");
    }
}

function OnUserDisappeared()
{
	//setTimeout(dancing(),60000);
	function dancing(){
		//window.external.RobotDanceStart(true);
	}
	/*var ran = Math.random()*3;
	var langCnt = Math.floor(ran);

	FC_ChangeLanguage("english");
	if(langCnt == 1 )	    PlaySpeech("Please, don't go away.");
	else if(langCnt == 2 )	PlaySpeech("Bye bye.");
	else if(langCnt == 3 )	PlaySpeech("Where you go?");
	else if(langCnt == 4 )  PlaySpeech("I miss you.");

	window.external.StartFaceTracking(false);
	//location.href = "IdlePage/IdlePage.htm";*/
}
//---------------------------------------------------------------------------//
//-- Cookie Control ---------------------------------------------------------//
//---------------------------------------------------------------------------//
var CookieDay = 30;			//save duration.(Unity : Day)
function writeCookie(name, value, days)
{
	var expires = "";
	if (days) 
	{
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name)
{
	var searchName = name + "=";
	var cookies = document.cookie.split(';');
	for (var i=0; i<cookies.length; i++) 
	{
		var c = cookies[i];
		while (c.charAt(0) == ' ')
			c = c.substring(1, c.length);
		if (c.indexOf(searchName) == 0)
			return c.substring(searchName.length, c.length);
	}
	return null;
}

function eraseCookie(name)
{
	//erase particular cookie
	writeCookie(name, "", -1); //소멸일자 (-1일)를 소멸시켜 쿠키를 삭제함
}
function OnJoystickControlled(strPara){
	var btn_info = strPara.split(',')[4];


	if(btn_info[0] == '1'){
        window.external.ChangeLanguage("en-gb");
        SetVolume(1);
        window.external.PlaySpeech("Can't wait to see you on the 20th of March!");
	}
	if(btn_info[1] == '1'){
        window.external.ChangeLanguage("ar-eg");
        SetVolume(0.4);
        window.external.PlaySpeech("نحنُ سُعداءٌ بإنضِمامِنا إلى مطاراتْ عُمْان");
	}
	/*if(btn_info[2] == '1'){
		window.external.ChangeLanguage("en-gb");
		SetVolume(1);
		window.external.PlaySpeech("Good evening your excellence's, and our distinguished guests.");
	}
	if(btn_info[3] == '1'){
		window.external.ChangeLanguage("ar-eg");
		SetVolume(1);
		window.external.PlaySpeech("طبعاً ، تفضلْ دكتورْ مُؤمنْ");
		
	}*/

	if(btn_info[4] == '1'){
		SetHeadYaw(-35, 23);       
	}
	if(btn_info[5] == '1'){
       SetHeadYaw(0,23);
	}
	if(btn_info[6] == '1'){
		SetHeadYaw(35, 23);
	}
	if(btn_info[7] == '1'){
		SetHeadYaw(0,23);
	}
	if(btn_info[8] == '1'){
		SetHeadYaw(35, 23);
	}
	if(btn_info[9] == '1'){
		SetHeadYaw(0,23);
	}
	if(btn_info[10] == '1'){
		SetHeadYaw(35, 23);
	}
	if(btn_info[11] == '1'){
		SetHeadYaw(0,23);
	}


}

//-[End Cookie Control]------------------------------------------------------//
$(document).ready(function(){
  //Change to English
	/*$('#change-us').click(function(){
      
        /*$('#change-ar').css("background", "#f8f8f8");
        $('#change-fr').css("background", "#f8f8f8");
        $('#change-sp').css("background", "#f8f8f8");
        $('#change-ch').css("background", "#f8f8f8");
        $('#change-ko').css("background", "#f8f8f8");
	    $(this).css("background", "#e7e7e7");
        $('.fly').text("Flights");
    	$('.scan').text("Scan your Boarding-pass");
        $('.map').text("Terminal Map");
        $('#content_term').text("Terminal A");
        $('#content_air').text("");
        $('#content_fly').text("Press here to start");
        $('#content_eat').text("Eat");
        $('#content_shop').text("Shop");
        $('#content_info').text("Information");
        $('#content_map').html("Terminal <br> Map");
		$('#content_flights').html("Flight <br> Information");
		$('#content_scan').html("Scan Your <br> Boarding-pass");
		$('#content_selfie').text("Take Photo");
        $('#content_avatar').text("Avatar");
        $('#content_share').text("SHARE");
        $('#content_explore').text("Explore our concessions");
	});
              //Change to Arabic
    $('#change-ar').click(function(){
                
        /*$('#change-us').css("background", "#f8f8f8");
        $('#change-fr').css("background", "#f8f8f8");
        $('#change-sp').css("background", "#f8f8f8");
        $('#change-ch').css("background", "#f8f8f8");
        $('#change-ko').css("background", "#f8f8f8");
        $(this).css("background", "#e7e7e7");
        $('#content_term').text("محطة A");
        $('#content_air').text("");
        $('#content_fly').text("ملاح");
        $('#content_eat').text("تأكل");
        $('#content_shop').text("متجر");
        $('#content_info').text("معلومات");
        $('#content_dance').text("رقص");
        $('#content_selfie').text("تصوير");
        $('#content_share').text("شارك");
      	$('#content_explore').text("استكشاف تنازلات لدينا");
    }); */             
});
