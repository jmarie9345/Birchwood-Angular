(function() {

    'use strict';

    angular.module('app')
    .run(function($rootScope){
        $rootScope.firstName="jackie";
        $rootScope.lastName="";
        $rootScope.userIsLoggedIn=false;
    })
    .config(function($stateProvider, $urlRouterProvider) {

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
            .state('profile', {
                url: "/profile",
                templateUrl: "app/profile/profile.html",
                controller: 'profileController'
            })
            

    });

})();