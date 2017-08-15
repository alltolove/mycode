module.exports = function(req,res,next){
    res.render('dosignin.ejs',{username:req.body.username});
}