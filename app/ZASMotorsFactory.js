(function() {
    'use strict';

    angular
        .module('app')
        .factory('zasMotorsFactory', zasMotorsFactory);

    zasMotorsFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function zasMotorsFactory($http, $q) {
        var service = {
            getInventory: getInventory
        };
        return service;

        ////////////////

        function getInventories() {

        	 var defer = $q.defer();
            $http({
                    method: 'GET',
                    url: 'http://localhost:57450/api/Inventories/'
                })
                .then(function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response.data);
                        } else {
                            defer.reject('No data found in file!')
                        }
                    },
                    function(error) {
                        defer.reject(error + "unable to get the Inventories from the database in factory");
                    });
            return defer.promise;
        }
    }
})();