
define([], function(){
    'use strict';

function registerSuccessController($scope,registerDetails){
 	
	
		$scope.email = registerDetails.getEmailData();
		$scope.name = registerDetails.getNameData();
		$scope.webinarDetails = webinarDetailsJSON;

		$scope.sortType = 'Place';
		$scope.sortReverse = true;
	
}


registerSuccessController.$inject=['$scope','registerDetails'];

    return registerSuccessController;
});
