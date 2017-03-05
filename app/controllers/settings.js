// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
//in this args holds win (landingScreen) obj. It will help to close all screen and open them from starting again.
//alert(JSON.stringify(args));

function Back_tapped(e) {
	$.win_settings.close();
}

function window_open() {
	var currentLocale = Ti.App.Properties.getString("Selected_locale", "en");
	
	var sectionLanguage = Ti.UI.createTableViewSection({
		headerTitle : L("Select_Language")
	});
	
	sectionLanguage.add(Ti.UI.createTableViewRow({
		title : 'English',
		hasCheck : currentLocale != "es"
	}));
	
	sectionLanguage.add(Ti.UI.createTableViewRow({
		title : 'Español',
		hasCheck : currentLocale == "es"
	}));

	var table = Ti.UI.createTableView({
		data : [sectionLanguage]
	});
	table.addEventListener("click", function(e){
		//if current and select language is same, do nothing
		if(e.row.hasCheck) return;
		
		//otherwise apply logic
		var selectedLocale = (e.index == 0)?"en":"es";
		
		//Save locale in app settings - We need it in alloy.js (Important for Android)
		Ti.App.Properties.setString("Selected_locale", selectedLocale);
		
		//Calling Locale module method to update locale for current app..
		Alloy.Globals.Locale.setLocale(selectedLocale);
		
		//Open again for landing screen. Apply own logic to show screen which you want to show based on app
		var indexWin = Alloy.createController('index').getView();
		indexWin.open();
		
		//Close other windows -- Apply your logic here 
		args.landingWin.close();
		$.win_settings.close();
		

		
	});
	$.win_settings.add(table);
}
