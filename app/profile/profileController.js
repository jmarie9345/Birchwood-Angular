(function() {

    'use strict';

    angular.module('app').controller('profileController', profileController);


    function profileController($scope, $rootScope, authorService, $state) {

    //     $scope.messages={};
    //     firebase.auth().onAuthStateChanged(function(user) {
    //         if (user) {
    //            console.log("$rootScope firstName" + $rootScope.firstName);
    //             $scope.name = authorService;

    //             $scope.loginSubmit = function (){
    //                     $state.go('member_home');
    //                     $uibModalInstance.close();
    //             }

    //             $scope.logOut=function(){
    //                 firebase.auth().signOut().then(function() {
    //                   // Sign-out successful.
    //                   console.log("sign out sucessful");
    //                   $state.go("landing");
    //                 }, function(error) {
    //                   // An error happened.
    //                   console.log("sign out error");
    //                 });

    //             }

    //             firebase.database().ref('messages').once('value').then(function(snapshot) {
    //                 console.log("messages" + snapshot.val());
    //                 $scope.messages=snapshot.val();
    //                 // $scope.messagesTest=["test1", "test2"];
    //                 $scope.$apply();

    //             });

    //         }else {
    //             $state.go("landing");

    //         }

         
    //     })



    //     /* if ($rootScope.userIsLoggedIn===false){
    //         $state.go("landing");
    //     } else {

    //         console.log("$rootScope firstName" + $rootScope.firstName);
    //         $scope.name = authorService;

    //         $scope.loginSubmit = function (){
    //                 $state.go('member_home');
    //                 $uibModalInstance.close();
    //         }

    //         $scope.logOut=function(){
    //             firebase.auth().signOut().then(function() {
    //               // Sign-out successful.
    //               console.log("sign out sucessful");
    //               $state.go("landing");
    //             }, function(error) {
    //               // An error happened.
    //               console.log("sign out error");
    //             });

    //         }

    //     } */
		
    // };

    


})();