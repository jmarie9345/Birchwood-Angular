(function() {

    'use strict';

    angular.module('app').controller('LandingController', LandingController);


    function LandingController($scope, $rootScope, authorService) {

    	$scope.name = authorService;
        $scope.map = { center: { latitude: 43.033980, longitude: -82.464194 }, zoom: 10 };
    };


})();