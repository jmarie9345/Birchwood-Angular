(function() {

    'use strict';

    angular.module('app').controller('MainController', MainController);

/* first paramter is name of controller. second parameter is the function of the controller (noted below) */

    function MainController($scope, $rootScope, authorService, $state, $location, $anchorScroll) {


        // $scope.globalBalance = 0;
        // $scope.postings={};

        $scope.userDashboardData = {

            messages: [],
            payments: [],
            globalBalance: 0,
            postings: [],
            userInfo: [],

        }

        init();

        function init() {

            //load global messages
            loadGlobalMessageFromFirebase();

            //load payments 
            loadPaymentsFromFirebase();

            //load postings 
            loadPostingsFromFirebase();

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

            firebase.database().ref("clients/" + user.uid + "/payments").once('value').then(function(snapshot) {
                console.log("payments: " + snapshot.val());
                
                var payments =snapshot.val();
                
                for(var key in payments) {
                    
                    if (key !== "currentBalance"){
                        
                        var amount = payments[key].amount;
                        var amountPayed = payments[key].amountPayed;
                        var localBalance =  $scope.globalBalance + ( amount - amountPayed);
                        $scope.userDashboardData.globalBalance = localBalance;
                        payments[key]["localBalance"] = localBalance;
                        console.log("key: " + key)
                        console.log("values: " + payments[key])

                    }

                }
                
                $scope.userDashboardData.payments = payments;

                $scope.$apply();

            });
        }

        function loadPostingsFromFirebase() {

            var user = firebase.auth().currentUser;

            firebase.database().ref("clients/" + user.uid + "/postings").once('value').then(function(snapshot) {
                
                $scope.userDashboardData.postings = snapshot.val();
        
                $scope.$apply();

            });

        }

 };

    


})();