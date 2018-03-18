//disable backspace button except INPUT and TEXTAREA elements
	if (typeof window.event != 'undefined')
		document.onkeydown = function()	{	
			if (event.srcElement.tagName.toUpperCase() != 'INPUT' && event.srcElement.tagName.toUpperCase() != 'TEXTAREA')
				return (event.keyCode != 8);
		}
	else
		document.onkeypress = function(e){
			if (e.target.nodeName.toUpperCase() != 'INPUT' && event.srcElement.tagName.toUpperCase() != 'TEXTAREA')
				return (e.keyCode != 8);
		}
	
	//disable selection of text except INPUT and TEXTAREA elements
	if (typeof window.event != 'undefined')
		document.onselectstart = function(){
			if (event.srcElement.tagName.toUpperCase() != 'INPUT' && event.srcElement.tagName.toUpperCase() != 'TEXTAREA')
				return false;
		}