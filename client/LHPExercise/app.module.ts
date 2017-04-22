

///<reference path="../../node_modules/@types/angular/index.d.ts"/>
///<reference path="../../node_modules/@types/angular-ui-router/index.d.ts"/>

module LHPExercise{
	"use strict";    
	export function setup(rootScope : any) {
			rootScope.dizza = "1.08";
			if (typeof(Storage) !== "undefined") {
				var contactsJsonString = localStorage.getItem("contacts");

				if (null == contactsJsonString) {
					rootScope.contacts = [];

				} else {
					rootScope.contacts = JSON.parse(contactsJsonString);
				}
			}
	}

	setup.$inject=["$rootScope"];

	angular
	.module("LHPExercise", ["ui.router"])
	// .run(["$rootScope", "$timeout", function ($rootScope, $timeout) {
	// 	alert(" I am here");
	// 	}]);
	.run(setup);

	
}
