angular.module('Smart_Gardener')
.controller('GardensCtrl', function($scope, $location, $route, gardenFactory) {

  //self excuting funtion to load in garden names from smart gardener DB
  (getGardenNames = () => {
    gardenFactory.getGardens()
    .then((res)=>{
      $scope.gardens = res.data
    })
  })()

  // when garden is selected passes the garden id as a route param
  $scope.getGardenId = (gardenId) => {
    $location.url(`/garden/${gardenId}`)
  }

  //function to delete garden on x click
  $scope.delete = (id)=>{
    gardenFactory.deleteGarden(id)
    .then((res)=>{
      getGardenNames();
    })
  }
})
