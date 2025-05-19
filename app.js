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
            rank: "Hokage",
            availabel: true,
            thumb: "images/ninja-1.jpg"
        }, 
        {
            name: "Kakashi",
            chakra: "All",
            rank: "Legend",
            availabel: true,
            thumb: "images/ninja-2.jpg"
        },
        {
            name: "Itachi",
            chakra: "Fire",
            rank: "Legend",
            availabel: false,
            thumb: "images/ninja-4.jpg"
        },
        {
            name: "Might Guy",
            chakra: "7 gates opening",
            rank: "Jonin",
            availabel: true,
            thumb: "images/ninja-3.jpg"
        },
        {
            name: "Gaara",
            chakra: "Sand",
            rank: "Chunin",
            availabel: false
        }
    ];

    $scope.removeNinja = function(ninja){
        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja, 1);
    };

    $scope.addNinja = function(){
        $scope.ninjas.push({
            name: $scope.newninja.name,
            chakra: $scope.newninja.chakra,
            rank: $scope.newninja.rank,
            availabel: true
        });

        $scope.newninja.name = "";
        $scope.newninja.chakra = "";
        $scope.newninja.rank = "";
    };
}]);