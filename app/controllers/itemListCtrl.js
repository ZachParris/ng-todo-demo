app.controller("itemListCtrl", function($scope, $http, $location){
	$scope.items = [];
	var getItems = function(){
		$http.get("https://ng-todo-zp.firebaseio.com/items.json")
			.success(function(itemObject){
				var itemCollection = itemObject;
				console.log("itemObject", itemObject);
				Object.keys(itemCollection).forEach(function(key){
					itemCollection[key].id=key;
					$scope.items.push(itemCollection[key]);
				})
			});
		}
		getItems();
		$scope.itemDelete = function(itemId){
			console.log("itemId", itemId);
			$http
				.delete(`https://ng-todo-zp.firebaseio.com/items/${itemId}.json`)
				.success(function(response){
					console.log(response);
					$scope.items = [];
					getItems();
			})
		}
	});