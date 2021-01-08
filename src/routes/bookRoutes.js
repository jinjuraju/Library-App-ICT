const express = require('express');
const booksRouter=express.Router();
function router(nav){
    var books=[
        {
            title:'Tom and Jerry',
            author:'Gene Deitch',
            genre:'Animation',
            img:"tom.jpg"
        },
        {
            title:'Harry Potter',
            author:'J. K. Rowling',
            genre:'Fantasy',
            img:"harry.jpg"
        },
        {
            title:'Naruto',
            author:' Masashi Kishimoto',
            genre:'Adventure fiction',
            img:"naruto.jpg"
        },
    ];
    // booksRouter.get('/',function(req,res){
    //     res.render("books",{
    //         nav:[{link:'/books',name:'books'},{link:'/authors',name:'authors'}],
    //         title:'library',
    //         books
    //     });
    // });
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav:nav,
            title:'books',
            books:books
        });
    });
    // app.get("/books", function (req, res) {
    //     res.render("books", {
    //         books: books,
    //         nav: [{ link: '/books', name: 'Books' }, { link: '/authors', name: 'Authors' }],
    //         title: 'Books',
    //     });
    // })
    booksRouter.get('/:id',function(req,res){  //here id is same as i near the read more..just change of variable
       const id= req.params.id
        res.render("book",
        {
            nav:nav,
            title:'books',
            book:books[id]
        });
    });
    return booksRouter;
}

module.exports=router;