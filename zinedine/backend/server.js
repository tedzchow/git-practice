const express = require('express');
const mongoose = require('mongoose');
const bodyparser =require("body-parser");
const passport = require("passport");

const userRouter=require('./router/userRouter');
const expRouter=require('./router/expRouter');
const app=express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use("/api/users", userRouter);
app.use("/api/exp", expRouter);
const db=require('./config/keys').mongoURL;

mongoose.connect(db)
    .then(()=>{console.log("MongoDB connected");})
    .catch(err=>console.log(err));

require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());
const port=process.env.PORT||5000;

app.listen(port,()=>console.log(`Server is running on ${port}`));
