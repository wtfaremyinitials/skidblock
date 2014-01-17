window.onload = function() {
		
	window.setInterval(function(){
		if(document.body.contentEditable == 'true') {
			document.body.contentEditable = false;
			document.designMode = 'off';
			if(window.skidblockcallback) {
				window.skidblockcallback();
			}
		}
	}, 500);
		
};