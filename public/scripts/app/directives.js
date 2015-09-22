(function(){

    var BASE_PATH = 'public/scripts/app/views/';

    angular.module('DirtyTrucks.directives',[])
        .directive('test', function(){
            return {
                restrict: 'E',
                templateUrl: BASE_PATH + 'partials/test.php'
            }
        })
})();
