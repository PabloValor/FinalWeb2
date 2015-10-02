(function(){
    'use strict';
    angular.module('DirtyTrucks.services',[])
        .factory('PostLogin',['$resource', function($resource){
            //return $resource('API/login');
                var dummyTest = $resource('http://jsonplaceholder.typicode.com/users');
                var dummyCollection = dummyTest.get(function() {
                    var dummyUser = dummyCollection[0];
                    debugger;
                });

            return {
                PostLogin: dummyCollection
            }
    }]);

})();
