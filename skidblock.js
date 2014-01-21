window.onload = function() {
	
	window.skidblock = {};
	window.skidblock.version = "1.1.0";
	window.skidblock.callback = function(){};
		
	window.setInterval(function(){
		if(document.body.contentEditable == 'true') {
			document.body.contentEditable = false;
			document.designMode = 'off';
			if(window.skidblock.callback) {
				window.skidblock.callback();
			}
		}
	}, 500);
		
};
