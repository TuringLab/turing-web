'use strict';

angular.module('turingWeb').directive('price',function(){

    return {
        restrict: 'AE',
        templateUrl: 'views/price.html',
        scope: { price: '=price' }
    };

});