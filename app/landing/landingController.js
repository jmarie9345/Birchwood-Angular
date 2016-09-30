(function() {

    'use strict';

    angular.module('app').controller('LandingController', LandingController);


    function LandingController($scope, $rootScope, authorService) {

    	$scope.name = authorService;

    };


})();