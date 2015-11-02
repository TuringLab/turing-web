'use strict';

angular.module('turingWeb').controller('TeamController',['$scope',function($scope){

    $scope.heading = 'Team';

    $scope.team = [
        {
            name: 'Henry Miskin',
            image: 'images/team/henrym.jpg',
            about: 'Henry wants to share his passion for problem solving in engineering and computing with upcoming inventors.',
            positions : [{
                heading: 'MSc Computer Science',
                detail: ' Imperial College London'
            },{
                heading: 'BEng Mechanical Engineering',
                detail: 'University of Southampton'
            }],
            linkedin: 'https://uk.linkedin.com/in/hpgmiskin'
        },{
            name: 'Sam Green',
            about: 'Sam looks forward to passing on an enthusiasm for design and technology to a new generation of innovators.',
            image: 'images/team/sam.jpg',
            positions : [{
                heading: 'MSc Computer Science',
                detail: ' Imperial College London'
            },{
                heading: 'BA Architecture',
                detail: 'University of Cambridge'
            }],
            linkedin: 'https://uk.linkedin.com/in/greensamuel'
        },{
            name: 'Priyav Shah',
            about: 'Priyav is driven by getting kids excited about the power of technology.',
            image: 'images/team/priyav.jpg',
            positions : [{
                heading: 'MSc Computer Science',
                detail: ' Imperial College London'
            },{
                heading: 'BA Psychology',
                detail: 'University of York'
            }],
            linkedin: 'https://www.linkedin.com/in/priyavshah91'
        },{
            name: 'Henry Lake',
            about: 'Henry enjoys bringing games to life through the application of physics.',
            image: 'images/team/henryl.jpg',
            positions : [{
                heading: 'MSc Computer Science',
                detail: ' Imperial College London'
            },{
                heading: 'MSci Physics',
                detail: 'Imperial College London'
            }],
            linkedin: '#'
        }
    ];

}]);
