(function() {

    'use strict';

    angular.module('app').controller('CommunityController', CommunityController);

/* first paramter is name of controller. second parameter is the function of the controller (noted below) */

    function CommunityController($scope, $rootScope, authorService, $state) {


        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {


            }else {
                $state.go("landing");

            }

        })


    };

    


})();