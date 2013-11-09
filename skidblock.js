window.setInterval(function(){
	if(document.body.contentEditable == 'true') {
		document.body.innerHTML = "<h1>Go away scriptkiddie</h1>";
		document.body.contentEditable = false;
		document.designMode = 'off';
	}
}, 500);