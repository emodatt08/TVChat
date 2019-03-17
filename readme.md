# Tv Chat App [![Build Status](https://travis-ci.org/NativeScript/sample-Groceries.svg?branch=release)](https://travis-ci.org/NativeScript/sample-Groceries)

Tv Chat App is a firebase Ionic chat App. Firebase's Realtime database serves as the backend whiles using its Authentication layer for facebook Oauth2 login.


<h2 id="screenshots">Screenshots</h2>

![](assets/3.png)
![](assets/1.png)
![](assets/2.png)
![](assets/4.png)


<h2 id="development">Development</h2>

This app is built with the Ionic v1 CLI. Once you have the [CLI installed](https://ionicframework.com/docs/v1/), start by cloning the repo:


This installs ionic on your system including the CLI 
```
$ sudo npm install -g ionic cordova
```

```
$ git clone https://github.com/emodatt08/TVChat.git
$ cd <project name>
```

From there you can use the `rebuild` command to rebuild the project:

```
$ npm rebuild node-sass
```

then use `serve` command to run the project on your web browser:

```
$ ionic serve --lab
```

If you wish to run the project on an emulator run the commands below to add the specific  mobile platforms(Android/IOS):

```
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

then use `run` command to run the project on your the emulator:

```
$ ionic cordova build ios
$ ionic cordova emulate ios
OR

$ ionic cordova build android
$ ionic cordova emulate android

```

$ ionic plugin add org.apache.cordova.inappbrowser
$ bower install ngCordova angularfire lodash angularmoment openfb

```
$ Go to developers.facebook.com and register an app
$ Then Go to firebase.com and set up your app with the facebook details(App ID, Tokens).
$ Click the www folder in the root folder of the TV Chat application and open index.html
$ Now replace the following below with your firebase detials:
$$ var config = {
			apiKey: "",
			authDomain: "",
			databaseURL: "",
			projectId: "",
			storageBucket: "",
			messagingSenderId: ""
		}; 


For more information on testing and developing Ionic v1 apps, refer to the [Ionic v1 docs on the topic](https://ionicframework.com/docs/v1/guide/testing.html).
