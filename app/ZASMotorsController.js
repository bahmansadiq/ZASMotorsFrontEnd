(function() {
    'use strict';

    angular
        .module('app')
        .controller('zasMotorsController', zasMotorsController);

    zasMotorsController.$inject = ['zasMotorsFactory', 'toastr','$scope'];

    /* @ngInject */
    function zasMotorsController(zasMotorsFactory, toastr, $scope) {
        var vm = this;
        vm.title = 'zasMotorsController';
        vm.findInventory=findInventory;
        vm.addInventory=addInventory;
        vm.findDealer=findDealer;
        vm.initMap=initMap;
        vm.allInventories=[];
        vm.allDealers=[];

        activate();

        ////////////////

        function activate() {
        	findInventory();
            findDealer();
            initMap();

        }
// have to mension CRUD methods for the Inventory//

/////////************************///////////////
/////// find all the Inventories 
/////////************************///////////////
       function findInventory(){
            zasMotorsFactory.getInventory()
                .then(function(response) {

                        vm.allInventories = response;
                        return vm.allInventories;
                    },
                    function(error) {
                        toastr.error(error + "Unable to load the all the inventories from the factory to the controller!");
                    });
        }
/////////************************///////////////
/////// post a new Inventory 
/////////************************///////////////

        function addInventory(){

            var inventoryInfo = {
                    make: vm.make,
					model:vm.model,
					year:vm.year,
					price:vm.price,
					mileage:vm.mileage,
					exterior:vm.exterior,
					interior:vm.interior,
					vin:vm.vin,
					stockNumber:vm.stockNumber,
					engine:vm.engine,
					transmission:vm.transmission,
					fuelType:vm.fuelType,
					mpg:vm.mpg,
					vehicleOptions:vm.vehicleOptions,
					vehicleNotes:vm.vehicleOptions
            };

                zasMotorsFactory.postInventory(inventoryInfo)
                    .then(function(response) {

                            toastr.success("Successfully added to the  list!");
                            return response;
                        },
                        function(error) {
                            toastr.error(error + "Unable to passed the new customer infromation from Cotnroller to ZasMotorFactory!");
                            return error;
                        });
            }

            // have to mension CRUD methods for the dealers//

/////////************************///////////////
/////// find all the Inventories 
/////////************************///////////////
       function findDealer(){
            zasMotorsFactory.getDealer()
                .then(function(response) {

                        vm.allDealers = response;
                        return vm.allDealers;
                    },
                    function(error) {
                        toastr.error(error + "Unable to load the all the dealers from the factory to the controller!");
                    });
        }

 function initMap(){
              vm.map = new google.maps.Map(), {
              center: {lat: 32.70922, lng: -117.17007},
              zoom: 12
               };
             }
}
    
})();