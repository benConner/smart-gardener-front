angular.module('Smart_Gardener')
.controller('GardensCtrl', function($scope, $location, $route, gardenFactory) {
  gardenFactory.getGardens()
  .then((res)=>{
    $scope.gardens = res.data
    console.log($scope.gardens);
  })
  $scope.getGardenId = (gardenId) => {
    $location.url(`/garden/${gardenId}`)
  }
  $scope.delete = (id)=>{
    gardenFactory.deleteGarden(id)
    .then((res)=>{
      $route.reload();
      console.log(res);
    })
  }
})
