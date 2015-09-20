( function() {
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
                templateUrl: BASE_PATH + 'home.php'
            })
            .when('/about',{
                redirectTo: '/'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
})();