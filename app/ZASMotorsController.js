(function() {
    'use strict';

    angular
        .module('app')
        .controller('zasMotorsController', zasMotorsController);

    zasMotorsController.$inject = ['zasMotorsFactory'];

    /* @ngInject */
    function zasMotorsController(zasMotorsFactory) {
        var vm = this;
        vm.title = 'zasMotorsController';
        vm.allInventories=[];
        vm.findInventories=findInventories;

        activate();

        ////////////////

        function activate() {
        	findInventories();

        }

       function findInventories(){
            zasMotorsFactory.getInventories()
                .then(function(response) {

                        vm.allInventories = response;
                        return vm.allInventories;
                    },
                    function(error) {
                        console.log(error + "Unable to load the allInventories from the factory to the controller!");
                    });
        }


    }
})();