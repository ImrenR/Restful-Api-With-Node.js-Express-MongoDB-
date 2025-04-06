"use stric";

const express = require ("express");
const app = express();
const mongoose = require ("mongoose");


// ROUTES
app.get('/', (req,res)=>{

res.send("We are on home")

});


// CONNECT TO DB

// async function startServer() {
//   try {
//  await mongoose.connect("mongodb+srv://imrenrahbay:cfI0CJJjbUyVG9uj@imrenr.citbvbk.mongodb.net/") ;
//  console.log('Connected to DB!');
//   } catch (error) {
//     console.error('Error connecting to DB:', error);
//   }
// }
// startServer();
// 0R :
mongoose.connect ("mongodb+srv://imrenrahbay:cfI0CJJjbUyVG9uj@imrenr.citbvbk.mongodb.net/")
.then(()=> {
  console.log('Connected to DB!');

}). catch(()=> {
  console.log('Connection error')
});




app.listen (8000, ()=> { console.log ("Server is running on port 8000")});
