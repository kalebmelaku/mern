const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMIddleware')
const connectDb = require('./config/db')
const cors = require('cors');
const port = process.env.PORT;

connectDb()
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())

app.use('/api/goals', require('./routes/goalRoutes'))
app.use((req, res)=>{
    res.status(404).json({title: '404'});
})
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
})
