'use strict';

angular.module('turingWeb').controller('OverviewController',['$scope',OverviewController]);

function OverviewController($scope){

    $scope.heading = "TuringLab";

    $scope.details = [
        {
            text: 'We are four Imperial College Graduates with Master\'s Degrees in Computer Science.',
            icon: 'ion-university'
        },{
            text: 'We teach children to code using real world projects based on the national curriculum in computing, maths and science across KS2 & KS3.',
            icon: 'ion-lightbulb'
        },{
            text: 'We develop bespoke technology that allows us to provide creative and stimulating education.',
            icon: 'ion-code'
        },
    ];

}
