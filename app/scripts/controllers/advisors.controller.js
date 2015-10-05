'use strict';

angular.module('turingWeb').controller('AdvisorsController',['$scope',function($scope){

	$scope.heading = 'Advisors';
	$scope.advisors = [
		{
            name: 'Professor William Knottenbelt',
            image: 'images/advisors/knottenbelt.jpg',
	        position: {
	            heading: 'Imperial College London',
	        	detail: 'Director of Centre for Cryptocurrency and Research'
	        },
            homepage: 'http://www.doc.ic.ac.uk/~wjk/',
            linkedin: 'https://www.linkedin.com/in/williamknottenbelt',
            about: 'Will teaches a number of undergraduate and postgraduate courses at Imperial and supervises numerous student projects. These experiences make Will a very worthwhile advisor to give clear direction to TuringLab.'
		},{            
			name: 'Professor Susan Eisenbach',
            image: 'images/advisors/eisenbach.jpg',
	        position: {
	            heading: 'Imperial College London',
	        	detail: 'Head of the Department of Computing'
	        },
            homepage: 'http://www.imperial.ac.uk/people/s.eisenbach',
            about: 'Susan has been part of Imperial College since 1983, Her previous roles include Dean of Learning & Teaching and Director of studies in the Department of Computing. Susan supports the work of the TuringLab team in the Department of Computing and imparts her experience as a teacher and educator.'
		},{
            name: 'Dr Anandha Gopalan',
            image: 'images/advisors/gopalan.jpg',
	        position: {
	            heading: 'Imperial College London',
	        	detail: 'Teaching Fellow in the Department of Computing'
	        },
            homepage: 'http://www.doc.ic.ac.uk/~axgopala/',
            linkedin: 'https://www.linkedin.com/pub/anandha-gopalan/83/419/a25',
            about: 'Anandha has a passion for teaching computing, hoping to someday bring this key skill to many students through the running of numerous projects each year aimed to bring technology to the un-technological. Anandha shares his interest and passion with the team.'
		},{
            name: 'Dr Manolis Mavrikis',
            image: 'images/advisors/mavrikis.jpg',
	        position: {
	            heading: 'University College London',
	        	detail: 'Researcher at the London Knowledge Lab'
	        },
            homepage: 'http://www.lkl.ac.uk/manolis/',
            linkedin: 'https://www.linkedin.com/pub/manolis-mavrikis/4/57/14b',
            about: 'Manolis research interests lie at the intersection of technology-enhanced learning, human-computer interaction and artificial intelligence. Along with other members of the London Knowledge Lab the input from Manolis ensures the TuringLab sessions are from the correct Pedagogical approach.'
		}
	];

}]);