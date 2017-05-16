angular.module('Smart_Gardener', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('')
  $routeProvider
  .when('/', {
    controller: 'HomeCtrl',
    templateUrl: './app/partials/home.html'
  }).when('/gardens', {
    controller: 'GardensCtrl',
    templateUrl: 'app/partials/gardens.html'
  }).when('/createGarden', {
    controller: 'AddGardenCtrl',
    templateUrl: 'app/partials/addGarden.html'
  }).when('/garden/:id', {
    controller: 'One_GardenCtrl',
    templateUrl: './app/partials/one_garden.html'
  }).when('/plant/:id', {
    controller: 'PlantCtrl',
    templateUrl: './app/partials/plant.html'
  }).otherwise({
    redirectTo: '/'
  })
})
