    /**
 * Declare all stats
 */
 module LHPExercise{
     "use strict";

     function routes($stateProvider :any, $urlRouterProvider :any) {
         $urlRouterProvider.otherwise('/');

         $stateProvider

         .state("main", {
             url: '/',
             templateUrl: 'client/LHPExercise/templates/_main.html',
             controller: "MainCtrl",
             controllerAs: "mc"
         })

         .state("add", {
             url: '/add',
             templateUrl: 'client/LHPExercise/templates/_add.html',
             controller: "AddCtrl",
             controllerAs: "ac"

         });
     }


     routes.$inject = ["$stateProvider", "$urlRouterProvider"];
     angular
     .module("LHPExercise")
     .config(routes);

 }


 
