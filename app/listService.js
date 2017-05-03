angular.module('billysAdoption').service('listService',function($http){
  this.test1 = 'service is working'
  var key ="bdb4c5e9167b34db3cbd6f03a4f6f69c";
  var method='pet.find';



  this.petFinderHitter = function(animal,randomloc){
    //console.log('service')
    return $http({
      method:'GET',
      // url: 'http://api.petfinder.com/my.method?key=bdb4c5e9167b34db3cbd6f03a4f6f69c&format=json&animal=dog'
      url:"https://api.petfinder.com/" + method + "?key=" + key + "&format=json&animal="+animal+"&location="+randomloc
    }).then(function(response){
      console.log(response);
      return response.data;
    })
  };

  // this.petFinderWithSearch = function(){
  //   return $http({
  //     method:'GET',
  //     url:"http://api.petfinder.com/" + method + "?key=" + key + "&format=json&location=" +location+"&animal="+ type
  //   }).then(function(response){
  //     console.log(response);
  //     return response.data;
  //   })
  // };


})
