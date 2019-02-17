var mod = angular.module('tvchat.controllers.show', []);



mod.controller('ShowCtrl', function ($scope,
									$stateParams,
									$ionicScrollDelegate,
									FIREBASE_URL,
									ShowsService,
                                     $firebaseArray,
                                     UserService) {

	$scope.user = UserService;
	//pass showId from route into scope
	$scope.showId = $stateParams.showId;
	//pass showId into the show service to get the specific show
	$scope.show = ShowsService.getShow(parseInt($scope.showId));

	

	$scope.data = {
		messages: [],
		message: '',
		loading: true,
		showInfo: false
	};

	var messagesRef = firebase.database().ref();
	//var messagesRef = new Firebase(FIREBASE_URL);
	$scope.loadMessages = function () {
		console.log($scope.show.name);
		
		//query to retrieve the last 200 messages
		var query = messagesRef
		.child('messages')
		.orderByChild("showId")
		.equalTo($scope.showId)
		.limitToLast(200);

		$scope.data.messages = $firebaseArray(query);

		$scope.data.messages.$loaded().then(function (data){
			console.log("AngularFire $loadded");
			$scope.data.loading = false;
			$ionicScrollDelegate.$getByHandle('show-page').scrollBottom(true);
		})
	};

	$scope.sendMessage = function () {
		console.log($scope.user.current);
		if($scope.data.message){
			$scope.data.messages.$add({
				showId:$scope.showId,
				text:$scope.data.message,
				username:$scope.user.current.name,
				userId: $scope.user.current.userId,
				profilePic: $scope.user.current.profilePic,
				timestamp: new Date().getTime()		
			});
			$scope.data.message = '';
			$ionicScrollDelegate.$getByHandle('show-page').scrollBottom(true);
		}
	};

	$scope.loadMessages();
	$scope.sendMessage();

	// console.log("ShowCtrl-Created");

	// $scope.$on("$ionicView.enter", function () {
	// 	console.log("ShowCtrl-Enter");
	// });

	// $scope.$on("$ionicView.beforeLeave", function () {
	// 	console.log("ShowCtrl-Leave");
	// });

});