(function(){
    'use strict';

    angular.module('DirtyTrucks.controller',[])

        .controller('loginController',
            ['$scope','$location', 'dirtyTrucksService', function($scope, $location, dirtyTrucksService){

                $scope.formData = {};


                /*dirtyTrucksService.getAllEmployees().then(function(data){
                    $scope.employees = data;
                });*/

                $scope.login = function() {
                    dirtyTrucksService.login($scope.formData).then(function(data){
                         if(data.status == 'ok') {
                             $location.path('/app');
                         } else {
                             alert("Error al ingresar");
                         }
                    });
                }
        }]);

})();