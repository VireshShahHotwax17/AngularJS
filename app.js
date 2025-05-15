// Creating a module
var myApp = angular.module("myapp", []);

// Setting up the configurations that are required just before our application run
// myApp.config(function(){});

// Function to set-up when our application runs
// myApp.run(function(){});

// Declaring the controllers
myApp.controller("MyController", ["$scope", function($scope){
    $scope.message = "This is my first implementation of the controller";
    $scope.ninjas = ["Naruto", "Kakashi", "Itachi", "Sasuke", "Might Guy", "Obito"];
}]);