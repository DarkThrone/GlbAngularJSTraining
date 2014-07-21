/**
 * Created by geronimo on 7/21/14.
 */

'use strict';

angular.module('MyApp', ['ngRoute', 'Sarasa'])
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

    .controller('HomeCtrl', ['$rootScope', '$scope', 'SarasaFactory',
    function($rootScope, $scope, SarasaFactory){
        $rootScope.rootName = 'Root var';
        $scope.name = 'Gerónimo';
        $scope.saySarasa = function(){
            console.log(SarasaFactory.saySarasa());
        }
    }])

    .controller('HelloCtrl', ['$rootScope', '$scope',
    function($rootScope, $scope){
        $scope.name = 'Superman';
    }]);

angular.module('Sarasa', [])
.factory('SarasaFactory', [function(){
        return {
            saySarasa: function(){
                return 'SARASA!!';
            }
        }
    }]);