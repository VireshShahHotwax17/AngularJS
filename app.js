// Creating a module
var myApp = angular.module("myapp", ['ngRoute']);

// Setting up the configurations that are required just before our application run
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true); // Enables clean url
    $routeProvider
    .when('/home', {
        templateUrl: 'views/home.html'
    })
    .when('/directory', {
        templateUrl: 'views/directory.html',
        controller: 'MyController'
    })
    .otherwise({
        redirectTo: '/home'
    })
}]);

// Function to set-up when our application runs
// myApp.run(function(){});

// Declaring the controllers
myApp.controller("MyController", ["$scope", "$http", function($scope, $http){
    
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

    $http.get('data/ninjas.json').then(function(response) {
        $scope.ninjas = response.data;
    }, function(error) {
        console.error('Error loading data:', error);
    });
}]);