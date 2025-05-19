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
            availabel: true
        }, 
        {
            name: "Kakashi",
            chakra: "All",
            rank: "Legend",
            availabel: true
        },
        {
            name: "Itachi",
            chakra: "Fire",
            rank: "Legend",
            availabel: false
        },
        {
            name: "Might Guy",
            chakra: "7 gates opening",
            rank: "Jonin",
            availabel: true
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