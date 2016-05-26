var app = angular.module("TodoApp", ["ngRoute"])
	.constant("firebaseURL", "https://ng-todo-zp.firebaseio.com/");


app.config(function($routeProvider){
	$routeProvider.
	  when("/items/list", {
	  	templateUrl: "partials/item-list.html",
	  	controller: "itemListCtrl"
	  }).
	  when("/items/new",{
	  	templateUrl: "partials/item-new.html",
	  	controller: "itemNewCtrl"
	  }).
	  when("/items/:itemId/edit", {
	  	templateUrl: "partials/item-new.html",
	  	controller: "itemEditCtrl"
	  }).
	  when("/items/:itemId", {
	  	templateUrl: "partials/item-details.html",
	  	controller: "itemViewCtrl"
	  }).
	  otherwise("/items/list");
});
