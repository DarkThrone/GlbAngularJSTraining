var express = require('express');
var app = express();
var seed = 0;

var users = {
    0 : {
        name : "Geronimo Garcia Sgritta",
        age : 27,
        superpower : "Nerdines"
    }
};

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};

app.configure(function () {
    app.use(express.bodyParser());
    app.use(allowCrossDomain);
    app.use(app.router);
    app.use(express.static(__dirname));
});

app.get('/user', function(req, res){
    res.json(200, users);
});

app.post('/user', function(req, res){

    var
        id = ++seed,
        user = {
            name : req.param('name'),
            age : req.param('age'),
            superpower : req.param('superpower')
        };

    users[id] = user;

    user.id = id;

    res.json(200, { "success" : true, "data" : user});
});

app.get('/user/:id', function(req, res){
    var id = req.params.id,
        user = { };

    user[id] = users[id];

    if(! user){
        user = { found : false};
        user.id = id;
    }

    res.json(200, user);
});

app.put('/user/:id', function(req, res){
    var id = req.params.id,
        user;

    if(! id in users){
        return res.json(404, { id: id, found : false });
    }

    user = users[id];

    user.name       = req.body.name;
    user.age        = req.body.age;
    user.superpower = req.body.superpower;

    users[id] = user;

    user.id = id;

    res.json(200, { "success" : true, "data" : user});
});

app.delete('/user/:id', function(req, res){
    var
        id = req.params.id,
        found = false;

    if(id in users){
        delete users[id];
        found = true;
    }

    res.json(200, { "deleted" : ""+found });
});

app.listen(3000);
console.log("App listening in port 3000");
