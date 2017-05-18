angular.module('Smart_Gardener')
.controller('One_GardenCtrl', function($scope, $routeParams, gardenFactory, plantFactory) {

  (getGardenInfo = ()=>{
    gardenFactory.getGardenById($routeParams.id)
    .then((res)=>{
      $scope.garden = res.data
    })
    plantFactory.getPlants()
    .then((res) => {

      $scope.plants = res.data
    })
  })()

  $scope.addPlant = (plantId)=>{
    let num = $routeParams.id
    let relation={}
    relation.plant_id = plantId
    relation.garden_id = parseInt($routeParams.id)
    plantFactory.addPlantToGarden(relation)
    .then((res)=>{
      console.log(res);
      getGardenInfo();
    })
  }
  $scope.deletePlant = (plantId)=>{
    gardenFactory.deletePlantFromGarden($routeParams.id, plantId)
    .then((res)=>{
      getGardenInfo();
    })
  }
})
