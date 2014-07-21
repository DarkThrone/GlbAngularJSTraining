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

    .controller('HomeCtrl', ['$rootScope', '$scope',
    function($rootScope, $scope){
        $rootScope.rootName = 'Root var';
        $scope.name = 'Gerónimo';
    }])

    .controller('HelloCtrl', ['$rootScope', '$scope',
    function($rootScope, $scope){
        $scope.name = 'Superman';
    }]);
