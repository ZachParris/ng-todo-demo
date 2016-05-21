app.controller("itemListCtrl", function($scope){

	$scope.newTask = {};

	$scope.items = [
	{
		id: 0,
		task: "mow the lawn",
		isComplete: true,
		dueDate: "12/5/17",
		assignedTo: "greg",
		location: "Zoe's House",
		urgency: "low",
		dependencies: "sunshine, clippers, hat, water, headphones"
	},
	{
		id: 1,
		task: "grade quizez",
		isComplete: false,
		dueDate: "12/5/17",
		assignedTo: "joe",
		location: "NSS",
		urgency: "high",
		dependencies: "wifi, tissues, vodka"
	},
	{
		id: 2,
		task: "take a nap",
		isComplete: false,
		dueDate: "12/5/17",
		assignedTo: "zoe",
		location: "Zoe's House",
		urgency: "medium",
		dependencies: "cat, blanket, hammock"
	}
	];


	});