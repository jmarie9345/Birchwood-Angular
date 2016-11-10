(function() {

    'use strict';

    angular.module('app').controller('CommunityController', CommunityController);

/* first paramter is name of controller. second parameter is the function of the controller (noted below) */

    function CommunityController($scope, $rootScope, authorService, $state) {

        $scope.postingItem = {};

        $scope.postingItem.name = "";
        $scope.postingItem.description = "";
        $scope.postingItem.date = "";
        $scope.postingItem.userID = "client1";
        
        $scope.postingItem.postType = {
           forSale : '',
           helpNeeded : '',
           social: '',
           recommendations: ''

        };


        /*calendar */

         $scope.today = function() {
            $scope.dt = new Date();
          };
          $scope.today();

          $scope.clear = function() {
            $scope.dt = null;
          };

          $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
          };

          $scope.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
          };

          // Disable weekend selection
          function disabled(data) {
            var date = data.date,
              mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
          }

          $scope.toggleMin = function() {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
          };

          $scope.toggleMin();

          $scope.open1 = function() {
            $scope.popup1.opened = true;
          };

          $scope.open2 = function() {
            $scope.popup2.opened = true;
          };

          $scope.setDate = function(year, month, day) {
            $scope.dt = new Date(year, month, day);
          };

          $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
          $scope.format = $scope.formats[0];
          $scope.altInputFormats = ['M!/d!/yyyy'];

          $scope.popup1 = {
            opened: false
          };

          $scope.popup2 = {
            opened: false
          };

          var tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          var afterTomorrow = new Date();
          afterTomorrow.setDate(tomorrow.getDate() + 1);
          $scope.events = [
            {
              date: tomorrow,
              status: 'full'
            },
            {
              date: afterTomorrow,
              status: 'partially'
            }
          ];

          function getDayClass(data) {
            var date = data.date,
              mode = data.mode;
            if (mode === 'day') {
              var dayToCheck = new Date(date).setHours(0,0,0,0);

              for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                if (dayToCheck === currentDay) {
                  return $scope.events[i].status;
                }
              }
            }

            return '';
          }



        /* end calendar pop up */

        firebase.database().ref('postings').once('value').then(function(postings) {
            
            console.log("success calling postings in firebase");

            if(postings.val()) {

                console.log("postings retrieved: " + postings.val());
            
                var postings = postings.val();

                $scope.postings = postings;

                $scope.$apply();
            } else {
                //do nothing; no postings exist
            }


        }, function(errorMessage){
            console.log("error message: " + errorMessage);
        });

        $scope.postItem = function(){

            console.log("sending post item: " + $scope.postingItem)

            if ($scope.postingItem.postType["forSale"] === "true") {

                $scope.postingItem.postType = "forSale";

            } else if ($scope.postingItem.postType["helpNeeded"] === "true") {
                
                $scope.postingItem.postType = "helpNeeded";

            } else if ($scope.postingItem.postType["social"] === "true"){
                
                $scope.postingItem.postType = "social";

            } else {
                $scope.postingItem.postType = "recommendations";
            }

            debugger;

            //Posting to global community
            firebase.database().ref('postings').push($scope.postingItem);

            //Posting to a specific user postings
            firebase.database().ref('clients/' + $scope.postingItem.userID + "/postings").push($scope.postingItem);


        };
    };

    


})();