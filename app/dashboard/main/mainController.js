(function() {

    'use strict';

    angular.module('app').controller('MainController', MainController);

/* first paramter is name of controller. second parameter is the function of the controller (noted below) */

    function MainController($scope, $rootScope, GlobalService, $state, $location, $anchorScroll) {


        // $scope.globalBalance = 0;
        // $scope.postings={};
        $scope.payment = payment;

        $scope.userDashboardData = {

            messages: [],
            payments: [],
            globalBalance: 0,
            postings: [],
            userInfo: [],

        }

        init();

        function init() {

            debugger;

            firebase.auth().onAuthStateChanged(function(user) {
debugger;
                if(user) {

                    //load global messages
                    loadGlobalMessageFromFirebase();

                    //load payments 
                    loadPaymentsFromFirebase();

                    //load postings 
                    loadPostingsFromFirebase();

                } else {
                    $state.go("landing");
                }

            });


        }

        function payment(amount, whoToPay) {
            //Venmo API setup
            //Call to send payment
        }
 
        function loadGlobalMessageFromFirebase() {

            firebase.database().ref('messages').once('value').then(function(snapshot) {
                
                console.log("messages: " + snapshot.val());
                $scope.userDashboardData.messages = snapshot.val();
                $scope.$apply();

            });

        }

        function loadPaymentsFromFirebase() {

            var user = firebase.auth().currentUser;

            GlobalService.setupUserData(user, "payments").then(function(payments) {
                
                debugger;

                for(var key in payments) {
                    
                    if (key !== "currentBalance"){
                        
                        var amountDue = payments[key].amountDue;
                        var amountPaid = payments[key].amountPaid;
                        var localBalance =  $scope.globalBalance + ( amountDue - amountPaid);
                        $scope.userDashboardData.globalBalance = localBalance;
                        payments[key]["localBalance"] = localBalance;
                        console.log("key: " + key)
                        console.log("values: " + payments[key])

                    }

                }
                
                $scope.userDashboardData.payments = payments;

                $scope.$apply();

            
            }).catch(function(error) {

            });

        }

        function loadPostingsFromFirebase() {

            var user = firebase.auth().currentUser;

             GlobalService.setupUserData(user, "postings").then(function(postings){
                $scope.userDashboardData.postings = postings;
                $scope.$apply();

             });


        }

 };

    


})();