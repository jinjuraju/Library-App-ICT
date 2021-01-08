const express = require('express');
var bodyParser = require('body-parser')
const nav= [
    {
        link:'/books',name:'books'
    },
    {
        link:'/authors',name:'authors'
    },
    {
        link:'/addbook',name:'Add Books'
    },
    {
        link:'/addauthor',name:'Add Author'
    },
    {
        link:'/signin',name:'Sign Out'
    },
    {
        link:'/signin',name:'Sign In'
    },
    {
        link:'/signup',name:'Sign Up'
    }
];
const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorsRouter=require('./src/routes/authorRoutes')(nav);
const addbooksRouter=require('./src/routes/addbookRoutes')(nav);
const addauthorRouter=require('./src/routes/addauthorRoutes')(nav);
const signinRouter=require('./src/routes/signinRoutes')(nav);
const signupRouter=require('./src/routes/signupRoutes')(nav);
const app=express();
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/addbook',addbooksRouter);
app.use('/addauthor',addauthorRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);
app.get('/',function(req,res){
    res.render("index",
    {
        nav:nav,
        title:'Library'
    });
});

app.listen(5000);
