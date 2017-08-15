var mymodel=require('../db/db.js');
module.exports = function(req,res,next){
    mymodel.find({},function(err,result){
        res.render('admin.ejs',{result:result});
    });

}
