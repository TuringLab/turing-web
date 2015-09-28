'use strict';

angular.module('turingWeb').controller('MainController',['$scope','$document','$location','$timeout','$anchorScroll',MainController]);

function MainController($scope,$document,$location,$timeout,$anchorScroll){

    var display = true;
    var scroll = $document.scrollTop();

    $scope.sections = [
        'overview',
        'teaching',
        // 'technology',
        'laboratories',
        'team',
        'subscribe'
        // 'contact' 
    ];

    $scope.scroll = function(element){
        var section = element.id;
        $location.hash(section);
        $scope.$apply();
    };

    $scope.navClass = function(name){
        if (($location.hash() == name) && (display)){
            return 'active';
        } else {
            return '';
        };
    };

    $document.on('scroll', function() {
      if (scroll != $document.scrollTop()){
        display = false;
        $scope.$apply();
      };
    });

    angular.element(document).ready(function(){
        $timeout(function(){
            $anchorScroll();
            scroll = $document.scrollTop();
            display = true;
        });
    });

}