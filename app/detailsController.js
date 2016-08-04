


define([], function(){
    'use strict';


function detailsController($scope,$stateParams){
 	 $scope.name = $stateParams.name;
	 $scope.link = $stateParams.link;
	
}
detailsController.$inject=['$scope','$stateParams'];

    return detailsController;
});
