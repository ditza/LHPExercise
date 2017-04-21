


module LHPExercise {
    "use strict";

    export class MainCtrl {
        static $inject =["$state","$scope", "$rootScope"];
        constructor(private state:any ,private scope: ng.IScope, public rootScope: any) {

            if (typeof(Storage) !== "undefined") {
                var contactsJsonString = localStorage.getItem("contacts");

                if (null == contactsJsonString) {
                    rootScope.contacts = [];

                } else {
                    rootScope.contacts = JSON.parse(contactsJsonString);
                }
            }
             scope.titleAdd = false;
            scope.titleMain = true;
            
        }
        goToAddPage(){
            this.state.go("add");
        }
    }    
    
    angular
    .module("LHPExercise")
    .controller("MainCtrl", MainCtrl)

}
