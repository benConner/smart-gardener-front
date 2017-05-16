angular.module('Smart_Gardener')
.factory('gardenFactory', function($http){
  return{
    getGardens : () => {
      return $http
      .get(`http://localhost:3000/api/v1/gardens`)
      .then((res) => {
          return res
      })
      .catch((res) => {
          console.error(res);
      })
    },
    getGardenById : (id) => {
      return $http
      .get(`http://localhost:3000/api/v1/garden?gardenId=${id}`)
      .then((res) => {
          return res
      })
      .catch((res) => {
          console.error(res);
      })
    },
    addGarden : (gardenObj) => {
      console.log(gardenObj);
      return $http
      .post(`http://localhost:3000/api/v1/garden/plants`, gardenObj)
      .then((res)=>{
        return res;
      })
      .catch((res)=>{
        console.error(res);
      })
    },
    deleteGarden : (id) => {
      return $http
      .delete(`http://localhost:3000/api/v1/garden/delete?id=${id}`)
      .then((res)=>{
        return res;
      })
      .catch((res)=>{
        console.error(res);
      })
    },
    deletePlantFromGarden : (gardenId, plantId) => {
      return $http
      .delete(`http://localhost:3000/api/v1/garden/plants/${gardenId}/${plantId}`)
      .then((res)=>{
        return res;
      })
      .catch((res)=>{
        console.error(res);
      })
    }
  }
})
