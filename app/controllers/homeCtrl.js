angular.module('Smart_Gardener')
.controller('HomeCtrl', function($scope,$location, plantFactory){
  plantFactory.getPlants()
  .then((res)=>{
    $scope.plants = res.data
    console.log(res);
  })

  $scope.plantById = (id) =>{
    $location.url(`/plant/${id}`)
  }
})
