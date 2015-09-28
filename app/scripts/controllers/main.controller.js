'use strict';

angular.module('turingWeb')
  .controller('MainController',['$scope',function($scope){

    var section;

    $scope.sections = [
        'overview',
        'teaching',
        // 'technology',
        'laboratories',
        'team',
        'subscribe'
        // 'contact' 
    ];

    $scope.navClass = function(_section){
        if (section == _section){
            return 'active';
        }
    }

    $scope.inView = function(_section,inview){
        if (inview){
            console.log(_section);
            section = _section;
        }
    };

}]);