(function(){
    'use strict';

    angular.module('DirtyTrucks.controller',[])

        .controller('loginController',
            ['$scope', 'dirtyTrucksService', function($scope, dirtyTrucksService){

                dirtyTrucksService.getAllEmployees().then(function(data){
                    $scope.employees = data;
                });
        }]);

})();