const express = require('express');
const addauthorRouter=express.Router();
function router(nav){
    addauthorRouter.get('/',function(req,res){
        res.render("addauthor",
        {
            nav:nav,
            title:'Library',
        });
    });
    addauthorRouter.get('/add',function(req,res){
        res.send("hey i am added");
    });
    return addauthorRouter;
}

module.exports=router;