'use strict';

angular.module('turingWeb')
  .controller('MainController',['$scope',function($scope){

    $scope.navigation = {
        section: null,
        sections: [
            'overview',
            'teaching',
            'laboratories',
            'team',
            'subscribe'
        ]
    };

    $scope.inView = function(_section,inview){
        if (inview){
            $scope.navigation.section = _section;
            console.log($scope.navigation.section);
        }
    };

}]);