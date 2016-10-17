(function() {

    'use strict';

    angular.module('app').controller('MainController', MainController);

/* first paramter is name of controller. second parameter is the function of the controller (noted below) */

    function MainController($scope, $rootScope, authorService, $state, $location, $anchorScroll) {
       
      // $scope.client = "Jackie";
      // $scope.gotoAnchor = function(x) {
      //   var newHash = 'anchor' + x;
      //   if ($location.hash() !== newHash) {
      //     // set the $location.hash to `newHash` and
      //     // $anchorScroll will automatically scroll to it
      //     $location.hash('anchor' + x);
      //   } else {
      //     // call $anchorScroll() explicitly,
      //     // since $location.hash hasn't changed
      //     $anchorScroll();
      //   }
      // };

        // $scope.messages={};
        
        // firebase.auth().onAuthStateChanged(function(user) {

        //     if (user) {
        //        console.log("$rootScope firstName" + $rootScope.firstName);
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

                $scope.globalBalance = 0;

                firebase.database().ref('messages').once('value').then(function(snapshot) {
                    console.log("messages: " + snapshot.val());
                    $scope.messages=snapshot.val();
                    // $scope.messagesTest=["test1", "test2"];
                    $scope.$apply();

                });


                firebase.database().ref('clients/client1/payments').once('value').then(function(snapshot) {
                    console.log("payments: " + snapshot.val());
                    var payments =snapshot.val();
                    for(var key in payments) {
                        if (key !== "currentBalance"){
                            var amount = payments[key].amount;
                            var amountPayed = payments[key].amountPayed;
                            var localBalance =  $scope.globalBalance + ( amount - amountPayed);
                            $scope.globalBalance = localBalance;
                            payments[key]["localBalance"] = localBalance;
                            console.log("key: " + key)
                            console.log("values: " + payments[key])

                        }

                    }
                    $scope.payments = payments;
                    // $scope.messagesTest=["test1", "test2"];
                    $scope.$apply();

                });

        //     }else {
        //         $state.go("landing");

        //     }

         
        // })


 };

    


})();