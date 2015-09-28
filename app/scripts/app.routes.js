'use strict';

angular.module('turingWeb').config(['$routeProvider',function($routeProvider){
    $routeProvider
        .otherwise({
            templateUrl : 'views/main.html',
            controller: 'MainController'
        })
}]);