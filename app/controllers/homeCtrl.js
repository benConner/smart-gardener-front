angular.module('Smart_Gardener')
.controller('HomeCtrl', function($scope, plantFactory){
  plantFactory.getPlants()
  .then((res)=>{
    $scope.plants = res.data
    console.log(res);
  })
})
