(function() {

    'use strict';

    angular.module('app').controller('LandingController', LandingController);


    function LandingController($scope, $rootScope, authorService, $state) {
    	console.log("$rootScope firstName" + $rootScope.firstName);
    	$scope.txtPassword = "";
    	$scope.txtEmail = "";

    	$scope.name = authorService;
    	$scope.signIn = signIn

    	$scope.contactName = "";	
    	$scope.contactEmail = "";
   

        $scope.map = { center: { latitude: 43.033980, longitude: -82.464194 }, zoom: 14 };
    
		$scope.marker = {
		      id: 0,
		      coords: {
		        latitude: 43.033980,
		        longitude: -82.464194 
		      },
		      options: { draggable: true },
		      events: {
		        dragend: function (marker, eventName, args) {
		          $log.log('marker dragend');
		          var lat = marker.getPosition().lat();
		          var lon = marker.getPosition().lng();
		          $log.log(lat);
		          $log.log(lon);

		          $scope.marker.options = {
		            draggable: true,
		            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
		            labelAnchor: "100 0",
		            labelClass: "marker-labels"
		          }
		        }
		      }
		}

		$scope.reset = reset;

 		function signIn(){
			
			firebase.auth().signInWithEmailAndPassword($scope.txtEmail, $scope.txtPassword)
			.then(function(){
				console.log("successful signup!");
				$rootScope.userIsLoggedIn=true;

			})
			.catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log("error code" + errorCode);
			console.log("error message" + errorMessage);

			  // ...
			});
		}


      function reset() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();

	}



})();		




