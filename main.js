angular.module('myApp',[]);

angular.module('myApp')
.controller('mainCtrl', [
 '$scope',
 mainCtrl
]);



function mainCtrl($scope){
	$scope.showForm = false;
	
	$scope.clickHandler = function(){
		$scope.showForm = !$scope.showForm;

}

$scope.appendUserInfo = function(){


}



};