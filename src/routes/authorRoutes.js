const express = require('express');
const authorsRouter=express.Router();
function router(nav){
    var authors=[
        {
            title:'Gene Deitch',
            work:'Tom and Jerry',
            genre:'Animation',
            img:"tomjerryauthor.jpg"
        },
        {
            title:'J. K. Rowling',
            work:'Harry Potter',
            genre:'Fantasy',
            img:"harryauthor.jpg"
        },
        {
            title:'Masashi Kishimoto',
            work:'Naruto',
            genre:'Adventure fiction',
            img:"narutoauthor.png"
        },
    ];
    // booksRouter.get('/',function(req,res){
    //     res.render("books",{
    //         nav:[{link:'/books',name:'books'},{link:'/authors',name:'authors'}],
    //         title:'library',
    //         books
    //     });
    // });
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav:nav,
            title:'authors',
            authors:authors
        });
    });
    // app.get("/books", function (req, res) {
    //     res.render("books", {
    //         books: books,
    //         nav: [{ link: '/books', name: 'Books' }, { link: '/authors', name: 'Authors' }],
    //         title: 'Books',
    //     });
    // })
    authorsRouter.get('/:id',function(req,res){  //here id is same as i near the read more..just change of variable
       const id= req.params.id
        res.render("author",
        {
            nav:nav,
            title:'authors',
            author:authors[id]
        });
    });
    return authorsRouter;
}

module.exports=router;