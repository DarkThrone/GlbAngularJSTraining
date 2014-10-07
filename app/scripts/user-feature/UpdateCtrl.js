'use strict';

var app = angular.module('MyApp');

app.controller('UpdateCtrl',
    function UpdateCtrl($scope, UserSrv) {
        $scope.users = {};

        $scope.refresh = function(){
            UserSrv.get(function(users){
                $scope.users = users;
            });
        };

        $scope.pick = function pick(id){
            console.log($scope.users);
            var user = $scope.users[id];

            $scope.selectedId = id;
            $scope.name = user.name;
            $scope.age = user.age;
            $scope.superpower = user.superpower;
        };

        $scope.updateUser = function create(){
            console.log($scope);

            var user = {
                name        : $scope.name,
                age         : $scope.age,
                superpower  : $scope.superpower
            };

            UserSrv.update({ id : $scope.selectedId}, user, function(){
                $scope.refresh();
            });
        };

        $scope.refresh();
    }
);
