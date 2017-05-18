angular.module('Smart_Gardener')
.factory('plantFactory', function($http){
  return{
    getPlants : ()=>{
      return $http
      .get(`http://localhost:3000/api/v1/plants`)
      .then((res)=>{
          return res
      })
      .catch((res)=>{
          console.error(res);
      })
    },
    getPlantById : (id)=>{
      return $http
      .get(`http://localhost:3000/api/v1/plants/${id}`)
      .then((res)=>{
          return res
      })
      .catch((res)=>{
          console.error(res);
      })
    },
    addPlantToGarden : (relation)=>{
      console.log("called");
      return $http
      .post(`http://localhost:3000/api/v1/plants/garden`, relation)
      .then((res)=>{
          return res
      })
      .catch((res)=>{
          console.error(res);
      })
    }
  }
})
