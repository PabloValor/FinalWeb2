(function(){
    'use strict';
    angular.module('DirtyTrucks.services',[])
        .factory('dirtyTrucksService',['$http', '$q', function($http, $q){

            function getAllEmployees(){
                var deferred = $q.defer();

                $http.get('API/getAllEmployees', {cache: true})
                    .success(function(data){
                        deferred.resolve(data)
                    });
                return deferred.promise;
            }

            return {
                getAllEmployees: getAllEmployees
            }
        }]);
})();
