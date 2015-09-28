'use strict';

angular.module('turingWeb').directive('navbar',function(){

    return {
        restrict: 'AE',
        templateUrl: 'views/navbar.html',
        scope: { navigation: '=navigation' },
        link: function(scope,element){

    	    scope.navClass = function(_section){
		        if (scope.navigation.active == _section){
		            return 'active';
		        }
		    };

		    scope.collapse = function(){
		    	console.log('collapse',element,angular.element('.navbar-toggle'));
		    	element,angular.element('.navbar-toggle').click();
		    };

        }
    };

});