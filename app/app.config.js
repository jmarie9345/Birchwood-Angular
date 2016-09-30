(function() {

    'use strict';

    angular.module('app').config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/landing");

        $stateProvider
            .state('landing', {
                url: "/landing",
                templateUrl: "app/landing/landing.html",
                controller: 'LandingController'
            })
            .state('dashboard', {
                url: "/dashboard",
                templateUrl: "app/dashboard/dashboard.html",
                controller: 'DashboardController'
            })

    });

})();