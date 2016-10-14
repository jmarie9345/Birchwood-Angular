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
                abstract: true,
                url: "/dashboard",
                templateUrl: "app/dashboard/dashboard.html"
                // controller: 'DashboardController'
            })
            .state('dashboard.main', {
                url: "/main",
                templateUrl: "app/dashboard/main/main.html",
                controller: 'MainController'
            })
            .state('dashboard.profile', {
                url: "/profile",
                templateUrl: "app/dashboard/profile/profile.html",
                controller: 'ProfileController'
            })
            .state('dashboard.community', {
                url: "/community",
                templateUrl: "app/dashboard/community/community.html",
                controller: 'CommunityController'
            })            
            // .state('profile', {
            //     url: "/profile",
            //     templateUrl: "app/profile/profile.html",
            //     controller: 'profileController'
            // })

            

    });

})();