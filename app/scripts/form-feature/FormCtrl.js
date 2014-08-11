/**
 * Created by geronimo on 8/10/14.
 */
app.controller('FormCtrl', ['LanguageSrv', 'TopicsSrv',
function(LanguageSrv, TopicsSrv){
    console.log(LanguageSrv);

    this.languagesTopic = LanguageSrv.get();
    this.genders = ['Male', 'Female'];

    this.generalTopics = TopicsSrv.getGeneralTopics();

    this.subTopics = TopicsSrv.getSubTopics();

    this.flash = "";
    this.languages = [];
    this.isDev = false;
    this.shareInterests = false;
    this.generalTopic = '';
    this.subTopic = '';
    this.gender = '';

    this.submitMyForm = function(){
        this.flash = "Your form was submitted";

        console.log(this);
    };

    this.log = function(){
        console.log(this.languages);
    };

    this.logGen = function(){
        console.log(this.generalTopic);
    };

    this.logSub = function(){
        console.log(this.subTopic);
    };
}]);