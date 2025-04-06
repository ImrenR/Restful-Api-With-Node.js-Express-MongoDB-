"use stric";

const express = require ("express");
const app = express();
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 8000;

// Import routes

const postsRoute = require ("./routes/posts");
app.use(express.json()); // Middleware to parse JSON request body
app.use('/posts', postsRoute);
app.use(bodyParser.json())


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
mongoose.connect (process.env.DB_CONNECTION)
.then(()=> {
  console.log('Connected to DB!');

}). catch(()=> {
  console.log('Connection error')
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
