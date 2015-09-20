(function() {
    'use strict';

    var BASE_PATH = 'public/scripts/app/views/';

    var app = angular.module('DirtyTrucks',[
        'ngRoute',
        'DirtyTrucks.directives',
        'DirtyTrucks.controller',
        'DirtyTrucks.services'
    ]);

    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/',{
                redirectTo: '/login'
            })
            .when('/login',{
                templateUrl: BASE_PATH + 'login.php',
                controller: 'loginController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
})();