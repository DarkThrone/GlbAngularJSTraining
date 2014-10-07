'use strict';

var app = angular.module('MyApp');

app.service('UserSrv', function($resource){
    return $resource('http://localhost:3000/user/:id', { id: '@id' }, {
        update: { method: 'PUT' }
    });
});
