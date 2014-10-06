/**
 * Created by geronimo on 9/26/14.
 */
app.directive('basic', [function(){
    return {
        template: '<div>This is text</div> <div>{{ text2 }}</div>',
        restrict: 'E',
        require: 'ngModel',
        transclude: true,
        link: function(scope, el, attr, ngModelCtrl){
            scope.text2 = 'This is more text';
        }
    }
}]);