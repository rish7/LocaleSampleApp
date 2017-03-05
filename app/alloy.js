// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

Alloy.Globals.isFirstLaunch = true;

Alloy.Globals.Locale = require('com.shareourideas.locale');

//Calling Locale module method to update locale for current app.. -- To make sure updated locale is set before app going open Important for Android.
Alloy.Globals.Locale.setLocale(Ti.App.Properties.getString("Selected_locale","en"));
