'use strict';

angular.module('turingWeb').controller('AdvisorsController',['$scope',function($scope){

	$scope.heading = 'Advisors';
	$scope.advisors = [
		{
            name: 'Professor William Knottenbelt',
            image: 'images/advisors/knottenbelt.jpg',
            positions : [{
                name: 'Director of Centre for Cryptocurrency and Research',
                location: ' Imperial College London'
            }],
            homepage: 'http://www.doc.ic.ac.uk/~wjk/',
            linkedin: 'https://www.linkedin.com/in/williamknottenbelt',
            about: 'Will teaches a number of undergraduate and postgraduate courses at Imperial and supervises numerous student projects. These experiences make Will a very worthwhile advisor to give clear direction to TuringLab.'
		},{
            name: 'Dr Anandha Gopalan',
            image: 'images/advisors/gopalan.jpg',
            positions : [{
                name: 'Teaching Fellow in the Department of Computing',
                location: ' Imperial College London'
            }],
            homepage: 'http://www.doc.ic.ac.uk/~axgopala/',
            linkedin: 'https://www.linkedin.com/pub/anandha-gopalan/83/419/a25',
            about: 'Anandha has a passion for teaching computing, hoping to someday bring this key skill to many students through the running of numerous projects each year aimed to bring technology to the un-technological. Anandha shares his interest and passion with the team.'
		},{
            name: 'Dr Manolis Mavrikis',
            image: 'images/advisors/mavrikis.jpg',
            positions : [{
                name: 'Researcher in Learning Technologies at the London Knowledge Lab',
                location: ' University College London'
            }],
            homepage: 'http://www.lkl.ac.uk/manolis/',
            linkedin: 'https://www.linkedin.com/pub/manolis-mavrikis/4/57/14b',
            about: 'Manolis research interests lie at the intersection of technology-enhanced learning, human-computer interaction and artificial intelligence. Along with other members of the London Knowledge Lab the input from Manolis ensures the TuringLab sessions are from the correct Pedagogical approach.'
		}
	];

}]);