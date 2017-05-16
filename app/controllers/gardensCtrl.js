angular.module('Smart_Gardener')
.controller('GardensCtrl', function($scope, $location, gardenFactory) {
  gardenFactory.getGardens()
  .then((res)=>{
    $scope.gardens = res.data
    console.log($scope.gardens);
  })
  $scope.getGardenId = (gardenId) => {
    $location.url(`/garden/${gardenId}`)
  }
})
