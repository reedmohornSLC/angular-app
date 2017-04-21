angular.module('billysAdoption',['ui.router'])

 .config(function($stateProvider,$urlRouterProvider){
  $stateProvider
   .state('search',{
    url: '/',
    templateUrl:'views/search.html'
  })
  .state('dog-list',{
    url:'/dog-list',
     templateUrl:'views/dog-list.html',
     controller:'listController'

   })

 })
