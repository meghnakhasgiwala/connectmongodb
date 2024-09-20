import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config'
import User from '.models/user.js';
import mongoose from 'mongoose';
const app = express();
app.use(cors());
app.use(bodyParser.json());

//bodyParser. converts data into json

//mongodb configration
let MyDb = mongoose.connect("mongodb://localhost:27017/Demo1")
.then(() => console.log("mongodb connection established....."))





//Routing
app.get('/', (req,res) => {
    res.send('Hello world');
});

app.get('/api/data/',(req,res) => {
    res.json({ message: 'this is some Data '});
});
app.post('/api/sendData/',(req, res) => {
    console.log("Name:", req.body.Name);
    console.log("Age:",req.body.Age);
    //console.log("from Backend",req.body.inptdata);
    
    res.json({message: 'received  Data'});
});

//server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});
