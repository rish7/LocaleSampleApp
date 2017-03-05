// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function window_open(e){
	$.lb_about_app.text = L("About_app");
}

function settings_tapped(e){
	var settingsWin = Alloy.createController('settings',{landingWin: $.win_landingscreen}).getView();
		settingsWin.open();
}