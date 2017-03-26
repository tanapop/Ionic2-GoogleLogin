# Google Login with Ionic 2 #
This tutorial shows the implementaation of Google login with Typescript and Ionic 2.

## Setting up the project ##
After creating the Ionic 2 project go to the `config.xml` and look at the next line:

``` html
<widget id="com.ionicframework.ionic2googlelogin263837" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
```

It's important that you keep the id of the widget, because we will use it for the configuration in the google developer console.

You also need to install the ionic-native components with the next command: `npm install ionic-native --save`

### What you need for iOS? ###
* You need the `REVERSED_CLIENT_ID`, to get it you need to follow [the next steps](https://developers.google.com/mobile/add?platform=ios&cntapi=signin)
* After you do that you will need to find the next file: `GoogleService-Info.plist`. Inside is the `REVERSED_CLIENT_ID`.

### What you need for Android? ###
* You need to generate an `sha-1` key following the [next steps](https://developers.google.com/android/guides/client-auth).
* Then you need to configure the application in the [Google Developer Console](https://developers.google.com/mobile/add?platform=android&cntapi=signin).

## Installing the Cordova Plugin ##
We will use a Cordova plugin for Google+ using the next line in the command line: 

`cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=<YourIDfromGoogleService-Info.plist>`

The `REVERSED_CLIENT_ID` looks like this: `com.googleusercontent.apps.uniqueId`.

## Adding Login/Logout functionality ##
In this step we will edit the next documents:
* src/app/app.component.ts
* src/app/app.module.ts
* pages/login*
* pages/home*

note: In the controller files I add the webClientId, to get this, you need to access to the Google Developer Console an generate an OAuth token for web.

## IMPORTANT ##
If you want to use this project, you need to reinstall cordova Google plugin with your own `REVERSED_CLIENT_ID` because the current one is protected to only one user.