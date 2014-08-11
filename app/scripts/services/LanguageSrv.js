/**
 * Created by geronimo on 8/10/14.
 */
app.service('LanguageSrv', function LanguageSrv(){
    var langs = [   'C/C++', 'Java', 'Javascript',
                    'Erlang', 'Haskell', 'Prolog',
                    'Lisp', 'Clojure', 'Scala',
                    'CoffeScript', 'Lua', 'D',
                    'Elisp', 'Ruby', 'Go'];

    this.get = function(){
        return langs;
    }
});