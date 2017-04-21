

///<reference path="../../node_modules/@types/angular/index.d.ts"/>
///<reference path="../../node_modules/@types/angular-ui-router/index.d.ts"/>

module LHPExercise{
	"use strict";    
	export function setup($rootScope : any) {
		return (text : string) => {
			$rootScope.dizza = "1.08";

    /**
     * Use angular $stateChangeSuccess to go back to last page when required
     */
     $rootScope.$on('$stateChangeSuccess', function (event:any, to:any, toParams:any, from:any, fromParams:any) {
     	$rootScope.$previousState = from;
     });

 }
}


angular
	.module("LHPExercise", ["ui.router"])
	.run(setup);

	setup.$inject=["$rootScope"];
}
