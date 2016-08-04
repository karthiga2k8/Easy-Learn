

define([], function(){
    'use strict';


function registerController($scope,registerDetails,$state){
 	$scope.phoneNumber = '';
 	$scope.term1 = 100;
 	$scope.term2 = 200;
 	$scope.term3= 300;	

 	
	$scope.registration = function(){
		registerDetails.setEmailData($scope.email);
		registerDetails.setNameData($scope.name);
		$state.go('afterRegister')
	}

	$scope.getTotal = function(){
		console.log('getTotal');
		$scope.totalFees= parseInt($scope.term1)+parseInt($scope.term2)+parseInt($scope.term3);
	}

	$scope.getShareData = function(){
		console.log('getTotal');
		$scope.sharedFees= parseInt($scope.totalFees)/3;
		$scope.term1 = $scope.term2 = $scope.term3 = $scope.sharedFees;
	}
	$scope.getTotal();


	
	
}

registerController.$inject=['$scope','registerDetails','$state'];

    return registerController;
});
