(function() {

    'use strict';

    angular.module('app').factory('GlobalService', function($q) {

        var name = "Jackie";

        function setupUserProfile(user) {

			var deferred = $q.defer();
        	
        	var commonUserPathURL = "clients/" + user.uid;
            
            firebase.database().ref(commonUserPathURL+ "/userInfo").once('value').then(function(snapshot) {
                
                console.log('I got your user profile data');
                //Success
                deferred.resolve(snapshot.val());
            
            }).catch(function(error) {
                console.log("error retrieving user profile: " + error)
                deferred.reject(error);

            });

            return deferred.promise

        }

        function updatePayments() {

        }


        return { 
        	setupUserProfile: setupUserProfile,
        	updatePayments: updatePayments};

    });

})();