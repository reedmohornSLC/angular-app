angular.module('billysAdoption').controller('listController',function($scope, listService){
  listService.petFinderHitter('dog', 'utah')
  .then(function(response){
    //console.log(response);
    $scope.dogs = response.petfinder.pets.pet;
    //console.log($scope.dogs)
  })
  // $scope.test = 'controller is working';
  // $scope.test1 = listService.test1

  // listService.petFinderWithSearch()
  // .then(function(response){
  //   $scope.dogs2 = response.petfinder.pets.pet;
  // })

  $scope.clickSearch = function(p1,p2) {
    listService.petFinderHitter(p1,p2).then(function(response){
      //console.log(response);
      $scope.pets = response.petfinder.pets.pet;
      //console.log($scope.dogs)
    });
  }
})
