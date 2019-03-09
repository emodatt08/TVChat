var app = angular.module('tvchat.services.userService', []);


app.service('UserService', function ($q, $rootScope, $localstorage, $ionicPopup, ngFB, $firebaseAuth, $firebaseArray) {
	
	var self = {
		/* This contains the currently logged in user */
		current:{
			name:  localStorage.getItem('name'),
			email:  localStorage.getItem('email'),
			profilePic:  localStorage.getItem('profilePic'),
			userId: localStorage.getItem('uid'),
			favorites: localStorage.getItem('favorites')
		},
		

		/*
		 Makes sure the favorites property is preset on the current user.

		 firebase REMOVES any empty properties on a save. So we can't
		 bootstrap the user object with favorites: {}.
		 */
		ensureFavorite: function () {
			if (!self.current.favorites) {
				self.current.favorites = {};
			}
		},

		/*
		 If adds or removes a show from the users favorites list
		 */
		toggleFavorite: function (show) {
			// Toggles the favorite setting for a show for the current user.
			self.ensureFavorite();
			if (self.current.favorites[show.showid]) {
				self.removeFavorite(show)
			} else {
				self.addFavorite(show)
			}
			//self.current.favorites.$save(show);
			self.saveFavorites(show);
		},
		/*
		 Adds a show to the users favorites shows list
		 */
		addFavorite: function (show) {
			self.ensureFavorite();
			self.current.favorites[show.showid] = show;
		},
		/*
		 Removes a show from the users favorites shows list
		 */
		removeFavorite: function (show) {
			self.ensureFavorite();
			self.current.favorites[show.showid] = null;
		},
		/*
		 Logout the user
		 */
		logoutUser: function () {
			var auth = $firebaseAuth();
			return auth.$signOut();
		},

		saveFavorites: function(show){
			var user = firebase.auth().currentUser;

			user.updateProfile({
				favorites:show
			}).then(function () {
				// Update successful.
				console.log("worked");
			}, function (error) {
				// An error happened.
					console.log("did not worked");
			});
		},
		removeFavorites: function (show) {
			var user = firebase.auth().currentUser;

			user.updateProfile({
				favorites: show
			}).then(function () {
				// Update successful.
				console.log("worked");
			}, function (error) {
				// An error happened.
				console.log("did not worked");
			});
		},
		/*
		 Login the user
		 */
		/*
		 Login the user
		 */
		loginUser: function () {
			var d = $q.defer();

			//
			// Initiate the facebook login process
			//
			console.log('Calling facebook login');
			ngFB.login({scope: 'email'}).then(
				function (response) {
					if (response.status === 'connected') {
						console.log('Facebook login succeeded');
						var token = response.authResponse.accessToken;
						console.log("Token:" + token);
						//
						// We are logged in so now authenticate via firebase
						//

						
						console.log('Authenticating with firebase');
						var auth = $firebaseAuth();
						var credential = firebase.auth.FacebookAuthProvider.credential(token);
						auth.$signInWithCredential(credential)
							.then(function (firebaseUser) {
								//
								// All good, resolve the promise and lets rock!
								//
								console.log("Signed in as:", firebaseUser.uid);
								
								localStorage.setItem('uid', firebaseUser.uid );
								localStorage.setItem('email', firebaseUser.email);
								localStorage.setItem('profilePic', firebaseUser.photoURL);
								localStorage.setItem('name', firebaseUser.displayName);
								localStorage.setItem('uid', firebaseUser.uid);
								localStorage.setItem('favorites', firebaseUser.favorites);
								//console.log(firebaseUser);
								d.resolve();
							})
							.catch(function (error) {
								console.error(error);
								$ionicPopup.alert({
									title: "Facebook Error",
									template: 'Failed to login with facebook'
								});
								d.reject(error);
							});
							

					} else {
						//
						// There was an error authenticating with facebook
						// Show the user an error message
						//
						alert('Facebook login failed');
						$ionicPopup.alert({
							title: "Facebook Error",
							template: 'Failed to login with facebook'
						});
						d.reject(error);
					}
				});

			return d.promise;
		}
	};

	return self;
})
;
