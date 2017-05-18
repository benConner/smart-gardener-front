angular.module('Smart_Gardener')
.controller('AddGardenCtrl', function($scope, $location, gardenFactory){
  $scope.addGarden = (gardenObj, idArray) => {
    gardenObj.plantsId = idArray
    gardenFactory.addGarden(gardenObj)
    .then((res)=>{
      $location.url('/gardens')
    })
  }
})
