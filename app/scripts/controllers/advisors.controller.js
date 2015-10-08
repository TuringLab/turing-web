'use strict';

angular.module('turingWeb').controller('AdvisorsController',['$scope',function($scope){

	$scope.getStyle = function(index){
		if (index === 3){
			return 'col-xs-offset-1 col-md-offset-2 col-sm-offset-0';
		}
		if (index === 4){
			return 'col-xs-offset-1 col-md-offset-0 col-sm-offset-3';
		}
		return 'col-xs-offset-1 col-md-offset-0 col-sm-offset-0';
	}

	$scope.heading = 'Advisors';
	$scope.advisors = [
		{
			name: 'Professor Susan Eisenbach',
            image: 'images/advisors/eisenbach.jpg',
	        position: {
	        	role: 'Head of Department',
	        	department: 'Department of Computing',
	          university: 'Imperial College London'
	        },
            homepage: 'http://www.imperial.ac.uk/people/s.eisenbach',
            about: 'Susan has been at Imperial College since 1983. Susan has a rich history teaching computing to a wide range of students from different age groups, abilities and backgrounds.'
		},{
            name: 'Professor William Knottenbelt',
            image: 'images/advisors/knottenbelt.jpg',
	        position: {
	        	role: 'Director of Industrial Liaison',
	        	department: 'Department of Computing',
	          university: 'Imperial College London'
	        },
            homepage: 'http://www.doc.ic.ac.uk/~wjk/',
            linkedin: 'https://www.linkedin.com/in/williamknottenbelt',
            about: 'Will has been teaching Computer Science for over 15 years and has received numerous awards honoring the excellency of the undergraduate and postgraduate courses he runs.'
		},{            
				name: 'Professor Rose Luckin',
            image: 'images/advisors/luckin.jpg',
	        position: {
	        	role: 'Chair',
	        	department: 'London Knowledge Lab',
	          university: 'University College London'
	        },
            homepage: 'http://www.lkl.ac.uk/cms/index.php?option=com_comprofiler&task=userProfile&user=128',
            linkedin: 'https://www.linkedin.com/pub/rose-luckin/3/500/524',
            about: 'Rose is chair of learning with digital technologies at UCL. She is also Professor of Learner Centered Design with extensive expertise in participatory methods to the development and evaluation of technology for learning.'
		},{
            name: 'Dr Anandha Gopalan',
            image: 'images/advisors/gopalan.jpg',
	        position: {
	        	role: 'Teaching Fellow',
	        	department: 'Department of Computing',
	          university: 'Imperial College London'
	        },
            homepage: 'http://www.doc.ic.ac.uk/~axgopala/',
            linkedin: 'https://www.linkedin.com/pub/anandha-gopalan/83/419/a25',
            about: 'Anandha manages the teaching of computing to several hundred students at Imperial College. In addition he regularly supervises projects which develop teaching technology.'
		},{
            name: 'Dr Manolis Mavrikis',
            image: 'images/advisors/mavrikis.jpg',
	        position: {
	        	role: 'Senior Research Fellow',
	        	department: ' London Knowledge Lab',
	          university: 'University College Lonon',
	        },
            homepage: 'http://www.lkl.ac.uk/manolis/',
            linkedin: 'https://www.linkedin.com/pub/manolis-mavrikis/4/57/14b',
            about: 'Manolis is an expert on Technology-Enhanced Learning. He has developed a number of technology products that teach STEM subjects to children and currently trains teachers use relevant learning technologies in education.'
		}
	];

}]);