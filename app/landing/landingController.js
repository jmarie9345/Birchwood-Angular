(function() {

    'use strict';

    angular.module('app').controller('LandingController', LandingController);


    function LandingController($scope, $rootScope, authorService) {

    	$scope.txtPassword = "";
    	$scope.txtEmail = "";
    	$scope.name = authorService;
        $scope.map = { center: { latitude: 43.033980, longitude: -82.464194 }, zoom: 4 };
    
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
		          };
		        }
		      }
		    };
		    };


})();		

		/* Initialize Firebase
		 var config = {
		    piKey: "AIzaSyDSCXu8esxECHnAImamHddP4g28qpNIkd4",
		    authDomain: "test-d3cea.firebaseapp.com",
		    databaseURL: "https://test-d3cea.firebaseio.com",
		    storageBucket: "test-d3cea.appspot.com", 
		    messagingSenderId: "376630577028"
		  };
		  firebase.initializeApp(config);


