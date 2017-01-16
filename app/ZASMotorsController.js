(function() {
    'use strict';

    angular
        .module('app')
        .controller('zasMotorsController', zasMotorsController);

    zasMotorsController.$inject = ['zasMotorsFactory', 'toastr'];

    /* @ngInject */
    function zasMotorsController(zasMotorsFactory, toastr) {
        var vm = this;
        vm.title = 'zasMotorsController';
        vm.findInventories=findInventories;
        vm.allInventories=[];
        vm.addInventory=addInventory;

        activate();

        ////////////////

        function activate() {
        	findInventories();

        }
// have to mension CRUD methods for the Inventory//

/////////************************///////////////
/////// find all the Inventories 
/////////************************///////////////
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

                            toastr.success("Successfully added " + inventoryInfo + "  "  + " to the  CXXQwxqa3WAInventoriesE33HGV CVVBV  list!");
                            return response;
                        },
                        function(error) {
                            console.log(error + "Unable to passed the new customer infromation from Cotnroller to TeamPhunFactory!");
                            return error;
                        });
            }

        }

    
})();