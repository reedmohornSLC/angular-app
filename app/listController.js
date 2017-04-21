angular.module('billysAdoption').controller('listController',function($scope, listService){
  listService.petFinderHitter()
  .then(function(response){
    console.log(response);
    $scope.dogs = response.petfinder.pets.pet;
    console.log($scope.dogs)
  })
  // $scope.test = 'controller is working';
  // $scope.test1 = listService.test1

})
