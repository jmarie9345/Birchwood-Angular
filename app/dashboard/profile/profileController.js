(function() {

    'use strict';

    angular.module('app').controller('ProfileController', ProfileController);

/* first paramter is name of controller. second parameter is the function of the controller (noted below) */

    function ProfileController($scope, $rootScope, authorService, $state) {

        // firebase.auth().onAuthStateChanged(function(user) {
        //     if (user) {


        firebase.database().ref('clients/client1/').once('value').then(function(snapshot) {
            console.log("profile" + snapshot.val());
            $scope.profile =snapshot.val();
            // $scope.messagesTest=["test1", "test2"];
            $scope.$apply();

        });

            // }else {
            //     $state.go("landing");

            // }

        // })
		
    };


})();