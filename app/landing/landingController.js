(function() {

    'use strict';

    angular.module('app').controller('LandingController', LandingController);


    function LandingController($scope, $rootScope, GlobalService, $state) {
    	
    	console.log("$rootScope firstName" + $rootScope.firstName);

   		/*********************************
		SCOPE VARIABLES
		*********************************/
    	$scope.txtPassword = "";
    	$scope.txtEmail = "";
    	$scope.name = GlobalService;
    	$scope.signIn = signIn
    	$scope.contactUsForm = {
    		contactName: "",
    		contactEmail: "",
    		contactMessageBody: "",
    		contactPhone: ""
    	}
    	//Google setup
        $scope.map = {};
		$scope.marker = {
		}

   		/*********************************
		FUNCTION
		*********************************/
   		$scope.sendEmail = sendEmail;

   		init()

   		function init() {

	    	//Initialize Google Maps
	        $scope.map = { 
	        	center: { 
	        		latitude: 43.033980, 
	        		longitude: -82.464194 
	        	}, 
	        	zoom: 14 
	        };

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

			GlobalService.updateUserProfile();
	   	}	

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


      function sendEmail() {

      	var emailContent = {  
      		"contactName": $scope.contactUsForm.contactName,
      		"message_html": $scope.contactUsForm.contactMessageBody,
      		"contactPhone": $scope.contactUsForm.contactPhone,
      		"contactEmail": $scope.contactUsForm.contactEmail
      	}
        
        emailjs.send("gmail", "birchwood_estates_inquiry", emailContent).then(
		  function(response) {
		    
		    console.log("SUCCESS", response);
			
			$scope.contactUsForm = {
	    		contactName: "",
	    		contactEmail: "",
	    		contactMessageBody: "",
	    		contactPhone: ""
    		}

    		$scope.$apply();


		  }, 
		  function(error) {
		    console.log("FAILED", error);
		  }
		);

        // emailjs.sendForm('default_service', 'birchwood_estates_inquiry', emailContent); return false;
        //$( "#contactName" ).val('');
        // $( ".hello" ).empty();
        // $( ".hello" ).empty();
        // $( ".hello" ).empty();		

      };




// emailjs.send("my_service","my_template",{
//   name: "James", 
//   notes: "Check this out!"
// })
// .then(
//   function(response) {
//     console.log("SUCCESS", response);
//   }, 
//   function(error) {
//     console.log("FAILED", error);
//   }
// );

      //$scope.reset();

	}



})();		




