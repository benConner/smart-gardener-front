angular.module('Smart_Gardener')
.controller('GardensCtrl', function($scope, gardenFactory) {
  gardenFactory.getGardens()
  .then((res)=>{
    $scope.gardens = res.data
    console.log($scope.gardens);
  })
})
