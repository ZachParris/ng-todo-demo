app.controller("itemNewCtrl", function($scope, $http, $location){
	$scope.newTask = {
		assignedTo: "",
		dependencies: "",
		dueDate: "",
		isComplete: false,
		location: "",
		task: "",
		urgency: ""
	};
	$scope.addNewItem = function(){
		$http.post(
			"https://ng-todo-zp.firebaseio.com/items.json",
			JSON.stringify({
				assignedTo: $scope.newTask.assignedTo,
				dependencies: $scope.newTask.dependencies,
				dueDate: $scope.newTask.dueDate,
				isComplete: $scope.newTask.isComplete,
				location: $scope.newTask.location,
				task: $scope.newTask.task,
				urgency: $scope.newTask.urgency
			})
			)
		.success(function(response){
			console.log(response);
			$location.url("/items/list")
		})
	};
});