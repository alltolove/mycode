var mongoose=require('mongoose');
var db=mongoose.connect('mongodb://localhost:27017/mystore');
var myschema=new mongoose.Schema({
    username:{type:String},
    password:{type:String},
    foods:{type:String},
    price:{type:Number},
    date:{type:Date}
});
var mymodel=db.model('name',myschema);
mymodel.find({},function(err,result){
    console.log(result);
    for(i=0;i<result.length;i++) {
        if (!result[i].username) {
            mymodel.remove(result[i], function () {});
        }
    }
    //mymodel.remove({},function(){})
});
    mymodel.find({username:'admin'},function(err,result){
        if(!result[0]){
        mymodel.create({username:'admin',password:'admin'},function(){});
    }
});
module.exports=mymodel
