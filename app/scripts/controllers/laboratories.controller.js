'use strict';

angular.module('turingWeb').controller('LaboratoriesController',['$scope',function($scope){

    $scope.heading = 'Laboratories';

    var numbers = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'];
    var Price = function(cost,hours,number){
        return {
            cost: cost,
            hours: hours,
            number: numbers[number],
            hourly: cost / (hours * number)
        };
    };

    $scope.style = function(slots){
        if (slots.length === 2){
            return 'col-sm-6 col-xs-12';
        } else {
            return 'col-xs-12';
        }
    };

    $scope.labs = [
    {
        name: 'Saturdays',
        location: 'Imperial College London',
        style: 'col-md-6 col-sm-12 col-xs-12',
        link: "Learn more",
        slots: [
            {
                name: 'Morning',
                content: 'KS2 & Scratch',
                time: '10.00 - 13.00',
                prices: {
                    left: new Price(225,3,10),
                    right: new Price(30,3,1)
                }
            },{
                name: 'Afternoon',
                content: 'KS3 & Python',
                time: '14.00 - 17.00',
                prices: {
                    left: new Price(225,3,10),
                    right: new Price(30,3,1)
                }
            }
        ]
    },{
        name: 'Weekdays',
        location: 'your local school',
        style: 'col-md-6 col-sm-12 col-xs-12',
        mail: "Contact us",
        slots: [
            {
                name: 'During-School',
                content: 'KS2 & KS3',
                time: '1-3 hours'
            },{
                name: 'After-School',
                content: 'KS2 & KS3',
                time: '2 hours',
                prices: {
                    left: new Price(150,2,10),
                    right: new Price(20,2,1)
                    }
                }
            ]
        }
    ];

}]);
