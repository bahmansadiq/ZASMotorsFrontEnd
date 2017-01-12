(function() {
    'use strict';

        angular.module('app', ['ui.router','toastr'])
       .config(function($stateProvider, $urlRouterProvider){

            $urlRouterProvider.otherwise("/home");
            $stateProvider   
            .state('home', {
                url: "/home",
                templateUrl: "app/partials/Home.html",
            })
            .state('home.Inventory', {
                url: "/inventory",
                templateUrl: "app/partials/Inventory.html",
                 parent: "home",
                controller: 'zasMotorsController',
                controllerAs: 'vm'
            });

      });
})();