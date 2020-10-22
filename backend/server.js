const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 4000;


const app = express();
const userRoutes = require('./user.route');
// middleware
app.use(express.static('public'));

// view engine
//app.set('view engine', 'ejs');

// database connection
//mongoose.Promise = global.Promise;
const dbURI = 'mongodb://localhost:27017/u-tracker';

mongoose
    .connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>console.log('MongoDB Connected'))
    .catch((err)=>{console.log(err);})


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/sign',userRoutes);


app.listen(PORT,function(){
    console.log('Server is running on port:',PORT);
})



// routes

