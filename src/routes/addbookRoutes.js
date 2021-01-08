const express = require('express');
const addbooksRouter=express.Router();
function router(nav){
    addbooksRouter.get('/',function(req,res){
        res.render("addbook",
        {
            nav:nav,
            title:'Library',
        });
    });
    addbooksRouter.get('/add',function(req,res){
        res.send("hey i am added");
    });
    return addbooksRouter;
}

module.exports=router;