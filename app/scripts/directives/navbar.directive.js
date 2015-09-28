'use strict';

angular.module('turingWeb').directive('navbar',function(){

    return {
        restrict: 'AE',
        templateUrl: 'views/navbar.html',
        scope: { navigation: '=navigation' },
        link: function(scope){

    	    scope.navClass = function(_section){
		        if (scope.navigation.section === _section){
		            return 'active';
		        }
		    };

		    scope.collapse = function(){
		    	angular.element('.navbar-toggle').click();
		    };

        }
    };

});