const exp = require('constants');
const express = require('express');
const fs = require('fs');
const { get } = require('http');
const app = express();
const morgan = require('morgan')
const tourrouter=require('./route/tourRoutes');
const userrouter=require('./route/userRoutes');
// MIDDLEWARES
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV==='development'){
app.use(morgan('dev'))
}
app.use(express.json())
app.use(express.static(`${__dirname}/public`))

app.use((req,res,next)=>{
    console.log("Hello from the Middleware");
    next();
});


app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next();
});






// ROUTES
// app.get('/api/v1/tours',getalltours);
// app.get('/api/v1/tours/:id',getonetour);
// app.post('/api/v1/tours',cretetour);
// app.patch('/api/v1/tours/:id',updatetour);
// app.delete('/api/v1/tours/:id',deletetour);




app.use('/api/v1/tours',tourrouter);
app.use('/api/v1/users',userrouter);
/// SERVER STARTING

module.exports=app;

