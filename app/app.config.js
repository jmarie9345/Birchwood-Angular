(function() {

    'use strict';

    angular.module('app').config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/main");

        $stateProvider
            .state('main', {
                url: "/main",
                templateUrl: "app/main/main.html",
                controller: 'MainController'
            })

    });

})();