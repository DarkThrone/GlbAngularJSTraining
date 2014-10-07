'use strict';

var app = angular.module('MyApp');

app.controller('CreateCtrl',
    function CreateCtrl($scope, UserSrv) {
        $scope.users = {};

        $scope.refresh = function(){
            UserSrv.get(function(users){
                $scope.users = users;
            });
        };

        $scope.createUser = function create(){
            var user = {
                name: $scope.name,
                age: $scope.age,
                superpower: $scope.superpower
            };

            UserSrv.save(user, function(){
                $scope.refresh();
            });
        };

        $scope.refresh();
    }
);
