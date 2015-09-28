'use strict';

angular.module('turingWeb').controller('TeachingController',['$scope',function($scope){

    $scope.heading = 'Teaching';

    $scope.details = [
        {
            title: 'Coding',
            lines: [
                'Coding is an essential skill in today\'s world, and is at the heart of all the projects available to our students.',
                'We use visual programming languages such as Scratch to teach children fundamental computing concepts in a clear and accessible way.',
                'Children progress onto Python - a text based programming language with an extensive online coummunity and a wide range of applications.'
            ]
        },{
            title: 'Curriculum',
            lines: [
                'Projects are based on real-world scenarios closely linked to the National Curriculum pathways.',
                'TuringLab avoids teaching concepts in isolation by using examples which children can relate to. This ensures that children understand why they are learning, not just what.',
                'We build upon learning objectives taken directly from the national curriculum. This ensures that our projects remain relavant, while providing new and exciting ways to extend learning at school.'
            ]
        },{
            title: 'Creativity',
            lines: [
                'We believe that learning should be fun, and have observed that when kids are being creative they are more engaged in the task at hand.',
                'We nurture kids\' natural creativity by incorporating subjects such as art, design, music and sport into our projects.',
                'We also enable children to be creative in their approach to problem solving and critical thinking by encouraging them to explore a wide range of ideas and solutions.'
            ]
        }
    ];

}]);
