app = angular.module('Smart_Gardener', ['ngRoute'])
app.config(function($routeProvider, $locationProvider){
      $locationProvider.hashPrefix('')
      $routeProvider
      .when('/', {
        controller: 'HomeCtrl',
        templateUrl: './app/partials/home.html'
      }).when('/gardens', {
        controller: 'GardensCtrl',
        templateUrl: 'app/partials/gardens.html'
      }).when('/garden', {
        controller: 'One_GardenCtrl',
        templateUrl: './app/partials/one_garden.html'
      }).when('/plant', {
        controller: 'PlantCtrl',
        templateUrl: './app/partials/plant.html'
      }).otherwise({
        redirectTo: '/'
      })
})
