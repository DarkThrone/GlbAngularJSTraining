/**
 * Created by geronimo on 8/10/14.
 */
app.config(['$routeProvider', function($routeProvider){

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
            templateUrl : 'app/scripts/form-feature/view/form.html',
            controllerAs: 'form',
            controller: 'FormCtrl'
        })
        .otherwise({ redirectTo: '/' });
}]);