/**
 * Created by geronimo on 9/30/14.
 */
app.directive('glbTime', ['TimeParsingSrv', function(TimeParsingSrv){
    return {
        //Restrict the directive to an element only directive
        restrict: 'A',

        //If ngModel is not present then return an error
        require: 'ngModel',

        //We are defining an isolated scope
        link: function(scope, elem, attr, ngModelCtrl){
            ngModelCtrl.$render = function(){
                elem.val(ngModelCtrl.$viewValue);
            };

            ngModelCtrl.$formatters.push(function (modelValue) {
                if(!modelValue) return;

                return TimeParsingSrv.toStringForm(parseInt(modelValue));
            });
        }
    }
}]);
