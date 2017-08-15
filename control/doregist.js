var mymodel=require('../db/db.js');
module.exports=function(req,res,next){
    mymodel.create(
        {username: req.body.username,
            password: req.body.password,
            foods:[],
            price:0,
            date:new Date()
        }, function () {
    });
    res.json('0');
    }