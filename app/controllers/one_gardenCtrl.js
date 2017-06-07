angular.module('Smart_Gardener')
.controller('One_GardenCtrl', function($scope, $routeParams, gardenFactory, plantFactory, $location) {
  //self executing function to load details of a garden and reload when changed
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

  //add plant to garden relationship by plant and garden id and checks if plant selected has an Id
  $scope.addPlant = (plantId)=>{
    let num = $routeParams.id
    let relation={}
    relation.plant_id = plantId
    relation.garden_id = parseInt($routeParams.id)
    if(plantId !== undefined){
      plantFactory.addPlantToGarden(relation)
      .then((res)=>{
        console.log(plantId);
        console.log(res);
        getGardenInfo();
      })
    }
  }
  //deletes plant relationship from garden
  $scope.deletePlant = (plantId)=>{
    gardenFactory.deletePlantFromGarden($routeParams.id, plantId)
    .then((res)=>{
      getGardenInfo();
    })
  }
  //routes to plant information from garden page
  $scope.plantDetails = (id)=>{
    $location.url(`/plant/${id}`)
  }
})
