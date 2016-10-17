(function() {

    'use strict';

    angular.module('app').controller('CommunityController', CommunityController);

/* first paramter is name of controller. second parameter is the function of the controller (noted below) */

    function CommunityController($scope, $rootScope, authorService, $state) {

        $scope.itemName = "";
        // firebase.auth().onAuthStateChanged(function(user) {
        //     if (user) {


        //     }else {
        //         $state.go("landing");

        //     }

        // })

        firebase.database().ref('clients/client1/postings').once('value').then(function(snapshot) {
                    console.log("postings: " + snapshot.val());
                    var postings =snapshot.val();
   

        $scope.postings = postings;
                    // $scope.messagesTest=["test1", "test2"];
        $scope.$apply();

        $scope.postItem=function(){

            console.log("sending item for sale " + $scope.itemName)
        }
     })
    };

    


})();