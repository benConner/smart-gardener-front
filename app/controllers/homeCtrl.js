angular.module('Smart_Gardener')
.controller('HomeCtrl', function($scope,$location, plantFactory){
  //loads in plant information
  plantFactory.getPlants()
  .then((res)=>{
    $scope.plants = res.data
    console.log(res);
  })
  //pass plant id as a route param
  $scope.plantById = (id) =>{
    $location.url(`/plant/${id}`)
  }
})
