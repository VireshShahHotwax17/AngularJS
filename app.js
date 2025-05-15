// Creating a module
var myApp = angular.module("myapp", []);

// Setting up the configurations that are required just before our application run
// myApp.config(function(){});

// Function to set-up when our application runs
// myApp.run(function(){});

// Declaring the controllers
myApp.controller("MyController", ["$scope", function($scope){
    $scope.ninjas = [
        {
            name: "Naruto",
            chakra: "Wind",
            rank: "Hokage"
        }, 
        {
            name: "Kakashi",
            chakra: "All",
            rank: "Legend"
        },
        {
            name: "Itachi",
            chakra: "Fire",
            rank: "Legend"
        },
        {
            name: "Might Guy",
            chakra: "7 gates opening",
            rank: "Jonin"
        },
        {
            name: "Gaara",
            chakra: "Sand",
            rank: "Chunin"
        }
    ];
}]);