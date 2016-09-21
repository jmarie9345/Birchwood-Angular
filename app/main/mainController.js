(function() {

    'use strict';

    angular.module('app').controller('MainController', MainController);


    function MainController($scope, $rootScope, authorService) {

    	$scope.name = authorService;

    };


})();