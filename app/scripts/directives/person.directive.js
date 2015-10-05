'use strict';

angular.module('turingWeb').directive('person',function(){

    return {
        restrict: 'AE',
        templateUrl: 'views/person.html',
        scope: { person: '=person' }
    };

});