/**
 * Created by geronimo on 7/21/14.
 */

'use strict';
var app = angular.module('MyApp', ['ngRoute']);

app.controller('HomeCtrl', ['$rootScope', '$scope', 'MyConfigurable',
function($rootScope, $scope, MyConfigurable){
    $scope.name = "";
    $scope.lastname = "";
    $scope.people = [];

    $scope.addPerson = function(name, lastname){
        var person = { name: name, lastname: lastname };

        MyConfigurable.addPerson(person);

        $scope.people.push(person);
        $scope.name = "";
        $scope.lastname = "";
    }
}]);

app.controller('FormCtrl', ['$rootScope', '$scope',
    function($rootScope, $scope){

        $scope.submitMyForm = function(){
            $scope.message = "Your form was submitted";

            console.log($scope.awesomeform);
        }
    }]);

app.controller('HelloCtrl', ['$rootScope', '$scope', 'MyConfigurable',
function($rootScope, $scope, MyConfigurable){
    $scope.search = '';
    $scope.id = '';
    $scope.found = false;
    $scope.person = {};
    $scope.people = [];

    $scope.mySpecialClass = function(type){
        var isRed = true,
            isBox = true,
            isSmall = true;

        switch(type){
            case 'a':
                return "red box small";
            case 'b':
                return ['red box', 'small', 'h5'];
            case 'c':
                return {
                    'red' : isRed,
                    'box' : isBox,
                    'small' : isSmall,
                    'h5' : isRed && isBox
                };
            default:
                return '';
        }
    };

    $scope.find = function(id){
        var person = MyConfigurable.getPerson(id);

        $scope.id = person && $scope.search || '';
        $scope.found = !!person;
        $scope.person = person || {};

        $scope.search = '';
    };

    $scope.findAll = function(){
        $scope.people = MyConfigurable.getAll();
    }
}]);

app.factory('MyFactory', [function(){
    var people = [];
    return {
        addPerson: function(person){
            people.push(person);
        },
        getPerson: function(id){
            return people[id];
        },
        getAll : function(){
            return people;
        }
    };
}]);

app.service('MySharedService', [function(){
    this.people = [];

    this.addPerson = function(person){
        this.people.push(person);
    };

    this.getPerson = function(id){
        return this.people[id];
    };

    this.getAll = function(){
        return this.people;
    };
}]);

app.provider('MyConfigurable', [function(){
    var that = this;
    that.configurableProp = "";

    function ConfigurableService(){
        this.people = [];
    }

    ConfigurableService.prototype.addPerson = function(person){
        console.log("Adding person with configurableProp: " + that.configurableProp);
        this.people.push(person);
    };

    ConfigurableService.prototype.getPerson = function(id){
        console.log("Getting person with configurableProp: " + that.configurableProp);
        return this.people[id];
    };

    ConfigurableService.prototype.getAll = function(){
        console.log("Gatting all with configurableProp: " + that.configurableProp);
        return this.people;
    };

    this.$get = [function(){
        return new ConfigurableService();
    }];
}]);

app.config(['$routeProvider', 'MyConfigurableProvider', function($routeProvider, MyConfigurableProvider){
    MyConfigurableProvider.configurableProp = "Provider prop";

    $routeProvider
        .when('/', {
            templateUrl : 'app/views/main.html',
            controller: 'HomeCtrl'
        })
        .when('/hello', {
            templateUrl : 'app/views/hello.html',
            controller: 'HelloCtrl'
        })
        .when('/form', {
            templateUrl : 'app/views/form.html',
            controller: 'FormCtrl'
        })
        .otherwise({ redirectTo: '/' });
}]);