(function() {

    'use strict';

    angular.module('app').controller('DashboardController', DashboardController);


    function DashboardController($scope, $rootScope, authorService) {

    	$scope.name = authorService;

    };


})();