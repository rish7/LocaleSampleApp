function windows_open(e){
	
	//Just giving some time out to see visual feedback about the changes..
	setTimeout(function(){
		var landingWin = Alloy.createController('landingScreen').getView();
		landingWin.open();
		$.index.close();
	}, 1000);
}

/**
 * Below window open will call only once. Becasue from next it will be opened from object .open() code. In settings screen.
 */
if(Alloy.Globals.isFirstLaunch){
	$.index.open();
	Alloy.Globals.isFirstLaunch = false;
}
