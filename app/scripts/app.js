/**
 * Created by geronimo on 7/21/14.
 */

'use strict';

angular.module('MyApp', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl : 'app/views/main.html',
                controller: 'HomeCtrl'
            })
            .when('/hello', {
                templateUrl : 'app/views/hello.html',
                controller: 'HelloCtrl'
            })
            .otherwise({ redirectTo: '/' });
    })

    .controller('HomeCtrl', ['$rootScope', '$scope', 'MyService',
    function($rootScope, $scope, MyService){
        $scope.array = [1, 2, 3, 4];
        $scope.obj = { a: 1, b: 2};
        $scope.message = "No message";

        var printMsg = function(scope){
            return function(data){
                console.log(scope);
                console.log(data);
                $scope.message = "Scope is: " + scope + " event: " + data.name;
            };
        };

        $rootScope.$on('notifyRootScope', printMsg('$rootScope'));
        $rootScope.$on('notifyParent', printMsg('$rootScope'));
        $rootScope.$on('notifyOthers', printMsg('$rootScope'));

        $scope.$on('notifyChildren', printMsg('parent $scope'));
        $scope.$on('notifyParent', printMsg('parent $scope'));


        $scope.notifyChildren = function(){
            $rootScope.$broadcast('notifyChildren', [ 'value from $rootScope' ]);
        };

        $scope.emitToRootScope = function(){
            $scope.$emit('notifyRootScope', [ 'Value from $scope' ]);
        };
    }])

    .controller('NestedCtrl', ['$rootScope', '$scope',
    function($rootScope, $scope){
        var printMsg = function(scope){
            return function(data){
                console.log(scope);
                console.log(data);
                $scope.message = "Scope is: " + scope + " event: " + data.name;
            };
        };

        $scope.$on('notifyChildren', printMsg('nested $scope'));

        $scope.emitToParentScope = function(){
            $scope.$emit('notifyParent', [ 'Value from nested $scope' ]);
        };
    }])

    .controller('HelloCtrl', ['$rootScope', '$scope',
    function($rootScope, $scope){
        $rootScope.$broadcast('notifyOthers', ['notifying others!']);
    }])

    .factory('MyService', [function(){
        return {
            doStuff : function(){ return "Doing stuff!! Really busy!!"; }
        };
    }]);