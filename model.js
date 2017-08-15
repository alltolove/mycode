var express = require('express');
var app = express();
var mymodel=require('./db/db.js');
var bodyParser = require('body-parser');
var doregist = require('./control/doregist.js');
var dosignin = require('./control/dosignin.js');
var admin = require('./control/admin.js');
app.set('view engine','ejs');
app.use(express.static('./public'));
app.get('/',function(req,res,next){
    res.render('./home.ejs');
});
app.get('/regist', function (req,res,next){
    res.render('./regist.ejs');
});
app.get('/signin',function(req,res,next){
    res.render('signin.ejs');
});
app.post('/myjson',function(req,res,next){
    mymodel.find({},function(err,result){
        res.json(result);
    });
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/doregist',doregist);
app.post('/dosignin',dosignin);
app.get('/submit',function(req,res){res.send('您已提交成功')});
app.post('/admin',admin);
app.post('/myjson2',function(req,res,next){
    console.log(req.body.foods)
    mymodel.update({username:req.body.user},
        { $set: { foods: req.body.foods,
        price:req.body.price,
        date:new Date()
        }}).exec();
});
app.listen(3000);
