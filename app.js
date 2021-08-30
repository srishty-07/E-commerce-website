const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seed');
const methodOverride=require('method-override');
const session=require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');


// ROUTES
const productRoutes = require('./routes/product');
const authRoutes = require('./routes/auth');
// we have exported router in this so we are now requiring them in app.js
const cartRoutes = require('./routes/cart');


mongoose.connect('mongodb://localhost:27017/showApp',
 {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex:true
 })
 .then(()=>{
     console.log("DB connected");
 })
 .catch((e)=>{
     console.log("Check pls, there is an ERROR :( ");
     console.log(e);
 })

// seedDB();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

const sessionConfig={
    secret:'another secret',
    resave: false,
    saveUninitialized: true
}

app.use(session(sessionConfig));
app.use(flash());

// initialising the passport and sessions for storing the users input
app.use(passport.initialize());
app.use(passport.session());

// consfiguring the passport to use local strategy 
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




app.use((req,res,next)=>{

    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    res.locals.currentUser = req.user;
    next();

})

app.get('/',(req,res)=>{
    // res.send("landing page");
    res.render("landing");
})
app.use(productRoutes);
app.use(authRoutes);
app.use(cartRoutes);

 app.listen(3000,()=>{
     console.log("server started at port 3000");
 })