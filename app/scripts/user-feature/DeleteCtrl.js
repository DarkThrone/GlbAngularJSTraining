'use strict';

var app = angular.module('MyApp');

app.controller('DeleteCtrl',
    function DeleteCtrl($scope, UserSrv) {
        $scope.users = {};

        $scope.refresh = function(){
            UserSrv.get(function(users){
                $scope.users = users;
            });
        };

        $scope.remove = function deleteUser(id){
            UserSrv.delete({ id: id }, function(){
                $scope.refresh();
            });
        };

        $scope.refresh();
    }
);
