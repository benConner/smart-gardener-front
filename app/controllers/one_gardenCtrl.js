angular.module('Smart_Gardener')
.controller('One_GardenCtrl', function($scope, $routeParams, gardenFactory, plantFactory) {

  gardenFactory.getGardenById($routeParams.id)
  .then((res)=>{
    console.log($routeParams.id);
    $scope.garden = res.data
    // $scope.plants = res.data.plant
    console.log($scope.garden);
  })
  plantFactory.getPlants()
  .then((res) => {

    $scope.plants = res.data
  })
})
