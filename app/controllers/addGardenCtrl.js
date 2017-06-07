angular.module('Smart_Gardener')
.controller('AddGardenCtrl', function($scope, $location, gardenFactory){
  $scope.addGarden = (gardenObj, idArray) => {
    gardenObj.plantsId = idArray
    //function on click to add garden to smart gardener DB and redirect to gadrens page
    gardenFactory.addGarden(gardenObj)
    .then((res)=>{
      $location.url('/gardens')
    })
  }
})
