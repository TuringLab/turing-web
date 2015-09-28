'use strict';

angular.module('turingWeb').controller('OverviewController',['$scope',OverviewController]);

function OverviewController($scope){

    $scope.heading = "TuringLab";

    $scope.details = [
        {
            text: 'We are four Imperial College Graduates with Master\'s Degrees in Computer Science.',
            icon: 'fa-graduation-cap'
        },{
            text: 'We teach children to code using real world projects based on the national curriculum in computing, maths and science across KS2 & KS3.',
            icon: 'fa-lightbulb-o'
        },{
            text: 'We develop bespoke technology that allows us to provide creative and stimulating education.',
            icon: 'fa-code'
        },
    ];

}
