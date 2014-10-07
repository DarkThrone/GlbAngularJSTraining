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
        .when('/directives/basic', {
            templateUrl : 'app/scripts/directives-basic-feature/view/directive-basic-view.html',
            controller: 'DirectiveCtrl'
        })
        .when('/directives/advanced', {
            templateUrl : 'app/scripts/directives-advanced-feature/views/directives-advanced-view.html',
            controller: 'DirectiveAdvancedCtrl',
            controllerAs: 'adv'
        })
        .when('/user-feature', {
            templateUrl : 'app/scripts/user-feature/view/main.html',
            controller: 'UserCtrl'
        })
        .when('/user-feature/create', {
            templateUrl : 'app/scripts/user-feature/view/create.html',
            controller: 'CreateCtrl'
        })
        .when('/user-feature/delete', {
            templateUrl : 'app/scripts/user-feature/view/delete.html',
            controller: 'DeleteCtrl'
        })
        .when('/user-feature/update', {
            templateUrl : 'app/scripts/user-feature/view/update.html',
            controller: 'UpdateCtrl'
        })
        .otherwise({ redirectTo: '/' });
}]);