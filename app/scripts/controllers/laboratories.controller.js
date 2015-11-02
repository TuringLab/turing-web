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
        style: 'col-md-12 col-sm-12 col-xs-12',
        link: "Learn more",
        slots: [
            {
                name: 'Outreach',
                content: 'For students in receipt of free school meals or Pupil Premium support.',
                time: '10.00 - 12.00',
                style: 'lab-sphere',
                age: 'Ages 8 - 13',
                prices: {
                    left: new Price(225,3,10),
                    right: new Price(30,3,1)
                }
            },{
                name: 'Girls',
                content: 'Because Coding shouldn’t be a boys club. Showing that girls make great coders too.',
                time: '13.00 - 15.00',
                style: 'lab-sphere',
                age: 'Ages 8 - 13',
                prices: {
                    left: new Price(225,3,10),
                    right: new Price(30,3,1)
                }
            }
        ]
    }];

}]);
