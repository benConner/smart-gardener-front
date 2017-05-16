angular.module('Smart_Gardener')
.controller('AddGardenCtrl', function($scope, $location, gardenFactory){
  $scope.addGarden = (gardenObj, idArray) => {
    gardenObj.plantsId = idArray
    console.log(gardenObj);
    gardenFactory.addGarden(gardenObj)
    .then((res)=>{
      console.log(res);
      $location.url('/gardens')
    })
  }
})
