"use stric";

const express = require ("express");

const app = express();


// ROUTES
app.get('/', (req,res)=>{

res.send("We are on home")

});







app.listen (8000, ()=> { console.log ("Server is running on port 8000")});
