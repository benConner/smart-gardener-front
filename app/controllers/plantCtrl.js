angular.module('Smart_Gardener')
.controller('PlantCtrl', function($scope, $routeParams, plantFactory) {

  //shows plant information by Id
  plantFactory.getPlantById($routeParams.id)
  .then((res)=>{
    console.log($routeParams.id);
    $scope.plant = res.data
    console.log($scope.plant);
  })

})
