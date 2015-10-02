(function() {
    'use strict';

    var BASE_PATH = 'public/scripts/app/views/';

    var app = angular.module('DirtyTrucks',[
        'ngRoute',
        'ngResource',
        'DirtyTrucks.directives',
        'DirtyTrucks.controller',
        'DirtyTrucks.services',
        'ui.materialize',
        'ui.router'
    ]);

    app.config(['$routeProvider', '$resourceProvider', function($routeProvider, $resourceProvider){
        $routeProvider
            .when('/login',{
                templateUrl: BASE_PATH + 'login.php',
                controller: 'loginController'
            })
            .when('/home',{
                templateUrl: BASE_PATH + 'home.php'
            })
            .otherwise({
                redirectTo: '/login'
            });
        // Don't strip trailing slashes from calculated URLs
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }]);
})();