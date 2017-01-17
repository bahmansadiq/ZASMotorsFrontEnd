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
            })
             .state('home.Customer', {
                url: "/customer",
                templateUrl: "app/partials/Customer.html",
                 parent: "home",
                controller: 'zasMotorsController',
                controllerAs: 'vm'
            })
              .state('home.Direction', {
                url: "/Direction",
                templateUrl: "app/partials/Direction.html",
                 parent: "home",
                controller: 'zasMotorsController',
                controllerAs: 'vm'
            });

      });
})();