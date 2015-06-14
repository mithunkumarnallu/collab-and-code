var express = require('express');
var router = express.Router();
var he = require('he-sdk-nodejs');

var settings = {
    'client_secret': '280076ccd582f1fb3901d4bb50e89c88126417bd' ,
    'async': 0 ,
    'lang': 'JAVA',
    time_limit: 5,
    memory_limit: 262144
};

/* GET home page. */
router.get('/', function(req, res, next) {
    lang = [{name:"C",code:"C"},
        {name:"C++",code:"CPP"},
        {name:"C++11",code:"CPP11"},
        {name:"Clojure",code:"CLOJURE"},
        {name:"C#",code:"CSHARP"},
        {name:"Java",code:"JAVA"},
        {name:"JavaScript",code:"JAVASCRIPT"},
        {name:"Haskell",code:"HASKELL"},
        {name:"Perl",code:"PERL"},
        {name:"Python",code:"PYTHON"},
        {name:"Php",code:"PHP"},
        {name:"Ruby",code:"RUBY"}
    ];
    res.render('index_ace.html', { title: 'Express', languages: lang });
});

router.post('/compile', function(req, res) {
    settings.lang = req.body.language;
    //var finalresponse = "";
    he.compile(settings , req.body.code , function(err , result){
        //finalresponse += result;
        //if(isJson(finalresponse))
        //    res.send(finalresponse);
        res.send(result);
    });
});

router.post('/run', function(req, res) {
    settings.lang = req.body.language;
    //var finalresponse = "";
    he.run(settings, req.body.code , function(err, result){
        //finalresponse += result;
        //if(isJson(finalresponse))
        //    res.send(finalresponse);
        res.send(result);
    });
});

//Returns if the output of SPARQL is a valid json string or not
function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

module.exports = router;
