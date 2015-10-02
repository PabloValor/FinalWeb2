(function(){
    'use strict';

    angular.module('DirtyTrucks.controller',[])

        .controller('loginController', ['$scope','$location', 'PostLogin',
            function($scope, $location, PostLogin) {
                $scope.formData = {};

                $scope.login = function() {
                    //var data = PostLogin.save($scope.formData);
                    var data = PostLogin.get();
                    debugger;
                    if(data.status == 'ok') {
                        $location.path('/home');
                    } else {
                        alert("Error al ingresar");
                        $scope.formData = {};
                    }
                }
        }]);

})();