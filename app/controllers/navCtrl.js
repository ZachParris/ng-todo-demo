app.controller("NavCtrl", function($scope){
	$scope.navItems = [
    {
  	  name: "All Items",
  	  url: "#/items/list"
    }, 
    {
  	  name: "New Item",
  	  url: "#/items/new"
	},
	{
	  name: "Logout",
	  url: "#/logout"
	}
	];
});