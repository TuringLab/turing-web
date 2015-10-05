'use strict';

angular.module('turingWeb').controller('TeamController',['$scope',function($scope){

    $scope.heading = 'Team';

    $scope.team = [
        {
            name: 'Henry Miskin',
            image: 'images/team/henrym.jpg',
            about: 'Henry wants to share his passion for problem solving in engineering and computing with upcoming inventors.',
            positions : [{
                name: 'MSc Computer Science',
                location: ' Imperial College London'
            },{
                name: 'BEng Mechanical Engineering',
                location: 'University of Southampton'
            }],
            linkedin: 'https://uk.linkedin.com/in/hpgmiskin'
            // email: 'mailto:hpgmiskin@turinglab.co.uk'
        // },{
        //     name: 'Tom Murray',
        //     image: 'images/team/tom.jpg',
        //     positions : [{
        //         name: 'MSc Computer Science',
        //         location: ' Imperial College London'
        //     },{
        //         name: 'MSc Applied Mathematics',
        //         location: "Queen's University Belfast"
        //     }],
        },{
            name: 'Sam Green',
            about: 'Sam looks forward to passing on an enthusiasm for design and technology to a new generation of innovators.',
            image: 'images/team/sam.jpg',
            positions : [{
                name: 'MSc Computer Science',
                location: ' Imperial College London'
            },{
                name: 'BA Architecture',
                location: 'University of Cambridge'
            }],
            linkedin: 'https://uk.linkedin.com/in/greensamuel'
            // email: 'mailto:sam@turinglab.co.uk'
        },{
            name: 'Priyav Shah',
            about: 'Priyav is driven by getting kids excited about the power of technology.',
            image: 'images/team/priyav.jpg',
            positions : [{
                name: 'MSc Computer Science',
                location: ' Imperial College London'
            },{
                name: 'BA Psychology',
                location: 'University of York'
            }],
            linkedin: 'https://www.linkedin.com/in/priyavshah91'
            // email: 'mailto:priyav@turinglab.co.uk'
        },{
            name: 'Henry Lake',
            about: 'Henry enjoys bringing games to life through the application of physics.',
            image: 'images/team/henryl.jpg',
            positions : [{
                name: 'MSc Computer Science',
                location: ' Imperial College London'
            },{
                name: 'MEng Physics',
                location: 'Imperial College London'
            }],
            linkedin: '#'
            // email: 'mailto:henry@turinglab.co.uk'
        }
    ];

}]);
