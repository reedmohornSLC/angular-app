 angular.module('billysAdoption').directive('sublimeFace',function(){
   return{
     templateUrl:'./views/logo.html',
     restrict: 'E',

   }
 })

angular.module('billysAdoption').directive('billsFacer',function(){
  return{
    templateUrl:'./views/logo2.html',
    restrict:'E'
  }
})
