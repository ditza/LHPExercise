
module LHPExercise {
    "use strict";

    export class AddCtrl {
        public static $inject =["$state","$scope", "$rootScope"];
        constructor(private state:any ,private scope: ng.IScope, public rootScope:any) {
            this.scope.emailFormat = /^[a-z0-9._]+[a-z0-9._]+@[a-z0-9._]+\.[a-z.]{2,5}$/;

            if (typeof(Storage) !== "undefined") {
                var contactsJsonString = localStorage.getItem("contacts");

                if (null == contactsJsonString) {
                    rootScope.contacts = [];

                } else {
                    rootScope.contacts = JSON.parse(contactsJsonString);
                }
            }

            scope.titleAdd = true;
            scope.titleMain = false;

        }

        saveContact(){
            this.rootScope.contacts.push({name:this.scope.ac.name, email:this.scope.ac.email});
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("contacts", JSON.stringify(this.rootScope.contacts));
            }

            this.state.go("main");
            console.log(this.rootScope.contacts);
        }

    }
    
    angular
    .module("LHPExercise")
    .controller("AddCtrl", AddCtrl)


}
